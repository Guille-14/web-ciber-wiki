/* ═══════════════════════════════════════════════════════════════
   commands/cloud.js — Herramientas cloud (aws, kubectl, terraform).
   Operan de forma dirigida por datos: cada host del registro puede
   exponer `aws`, `k8s` o `terraform` y estos comandos leen eso.
   Las credenciales AWS se "activan" con ctx.noteCloudCreds(ip)
   en el momento en que se obtienen (SSRF, tfstate, capas de imagen…).
   ═══════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  function out(l) { return { t: 'out', l }; }
  function err(l) { return { t: 'err', l }; }
  function ok(l) { return { t: 'ok', l }; }
  function info(l) { return { t: 'info', l }; }
  function warn(l) { return { t: 'warn', l }; }
  function accent(l) { return { t: 'accent', l }; }
  function flagLines(flagStr) { return [{ t: 'flag', l: flagStr, _isFlagMarker: true }]; }

  function extractFlagValue(tokens, flag) {
    const i = tokens.indexOf(flag);
    return i > -1 ? tokens[i + 1] : null;
  }

  /* ── el host "activo" cuyas credenciales AWS ya hemos robado.
        Si hay varias cuentas comprometidas, usamos la más reciente. ── */
  function activeAwsHost(ctx) {
    const candidates = ctx.cloudCredsHosts();
    for (let i = candidates.length - 1; i >= 0; i--) {
      const h = global.HOSTS[candidates[i]];
      if (h && h.aws) return h;
    }
    return null;
  }

  /* ════════════════════ AWS ════════════════════ */
  function cmdAws(tokens, ctx) {
    const st = tokens[0];
    if (!st) return [err('uso: aws <servicio> <comando> (p. ej. aws s3 ls, aws sts get-caller-identity)')];
    const host = activeAwsHost(ctx);
    if (!host || !host.aws) {
      return [warn('aws: no se encontraron credenciales configuradas. Consigue credenciales de una cuenta (SSRF a metadata, tfstate, capas de imagen, API keys…) y vuelve a intentarlo.')];
    }
    const aws = host.aws;

    if (st === 'sts') {
      if (tokens[1] === 'get-caller-identity') {
        return [out('{'), out(`  "UserId": "AIDAEXAMPLEEXAMPLE",`), out(`  "Account": "${aws.account}",`), out(`  "Arn": "${aws.identity && aws.identity.arn}"`), out('}')];
      }
      if (tokens[1] === 'assume-role') {
        const roleArn = extractFlagValue(tokens, '--role-arn');
        const role = (aws.iam && aws.iam.roles || []).find((r) => r.roleArn === roleArn);
        if (!role) return [warn(`aws: la política de la identidad actual no permite asumir ${roleArn || 'ese rol'}`)];
        ctx.apiState(host.ip).assumedRole = role.roleArn;
        return [out('{'), out('  "Credentials": { "AccessKeyId": "ASIAEXAMPLE", "SessionToken": "FwoGZ..." },'), out(`  "AssumedRoleUser": { "Arn": "${role.roleArn}" }`), out('}'), ok('✔ Credenciales de rol asumidas. Ya puedes listar recursos protegidos.'), ...flagLines(role.flag)];
      }
      return [err('uso: aws sts get-caller-identity | aws sts assume-role --role-arn arn:aws:iam::…:role/…')];
    }

    if (st === 's3') {
      const sub = tokens[1];
      if (sub === 'ls') {
        const target = tokens[2] || '';
        if (!target) {
          const state = ctx.apiState(host.ip);
          const lines = [out('2024-01-01 12:00:00  example-bucket-0001'), out('2024-01-01 12:00:00  example-bucket-0002')];
          Object.keys(aws.buckets || {}).forEach((b) => {
            const objs = aws.buckets[b] || [];
            const restricted = objs.some((o) => o.roleRequired) && !state.assumedRole;
            lines.push(out(`2024-01-01 12:00:00  ${b}${restricted ? '  (restringido — requiere rol)' : ''}`));
          });
          return lines;
        }
        const bucket = target.replace('s3://', '').split('/')[0];
        const keyPrefix = target.replace('s3://', '').split('/').slice(1).join('/');
        const objects = (aws.buckets || {})[bucket];
        if (!objects) return [warn(`aws: no se pudo encontrar el bucket "${bucket}" en esta cuenta simulada.`), info('Revisa el nombre — los buckets suelen aparecer en scripts, tfstate o código filtrado.')];
        const state = ctx.apiState(host.ip);
        const lines = [ok(`Bucket: ${bucket}`)];
        let locked = 0;
        const list = objects.filter((o) => {
          if (o.roleRequired && !state.assumedRole) { locked++; return false; }
          return keyPrefix ? o.key.startsWith(keyPrefix) : true;
        });
        if (!list.length && locked === 0) return [warn(`aws: NoSuchKey — no hay objetos con ese prefijo.`)];
        list.forEach((o) => lines.push(accent(`${o.key.padEnd(40)} ${o.size || 512} B`)));
        if (locked) lines.push(warn(`${locked} objeto(s) restringido(s): lista con el rol adecuado (aws sts assume-role).`));
        return lines;
      }
      if (sub === 'cp') {
        const src = tokens[2];
        if (!src) return [err('uso: aws s3 cp s3://BUCKET/CLAVE -')];
        const bucket = src.replace('s3://', '').split('/')[0];
        const key = src.replace('s3://', '').split('/').slice(1).join('/');
        const objects = (aws.buckets || {})[bucket] || [];
        const obj = objects.find((o) => o.key === key);
        if (!obj) return [warn(`aws: download failed: S3 error: 404 (NoSuchKey) — ${src}`)];
        const state = ctx.apiState(host.ip);
        if (obj.roleRequired && !state.assumedRole) {
          return [warn(`aws: download failed: AccessDenied — tu identidad actual no puede leer ${src}.`), info('Necesitas asumir el rol de producción: aws sts assume-role --role-arn …')];
        }
        if (obj.admin) state.admin = true;
        ctx.markFileRead();
        const lines = [ok(`download: s3://${bucket}/${key} to ./${key.split('/').pop()}`), out(''), out(obj.content)];
        if (obj.flag) lines.push(...flagLines(obj.flag));
        return lines;
      }
      return [err('uso: aws s3 ls | aws s3 ls s3://bucket | aws s3 cp s3://bucket/clave -')];
    }

    if (st === 'iam') {
      if (tokens[1] === 'list-attached-user-policies') {
        const lines = [out('{ "AttachedPolicies": [')];
        (aws.iam && aws.iam.policies || []).forEach((p, i) => {
          lines.push(out(`  { "PolicyName": "${p}", "Arn": "arn:aws:iam::${aws.account}:policy/${p}" }${i < aws.iam.policies.length - 1 ? ',' : ''}`));
        });
        lines.push(out('}'), '');
        lines.push(info('Consejo: si hay un rol en la misma cuenta, intenta asumirlo: aws sts assume-role --role-arn arn:aws:iam::…:role/…'));
        return lines;
      }
      if (tokens[1] === 'list-roles') {
        const lines = [out('ROLES DISPONIBLES EN LA CUENTA:')];
        (aws.iam && aws.iam.roles || []).forEach((r) => lines.push(accent(`  ${r.roleArn}`)));
        if (!aws.iam || !aws.iam.roles) lines.push(warn('  (sin roles adicionales)'));
        return lines;
      }
      return [err('uso: aws iam list-attached-user-policies | aws iam list-roles')];
    }

    if (st === 'ec2' && tokens[1] === 'describe-instances') {
      if (!ctx.apiState(host.ip).admin) {
        return [warn('aws: AccessDenied — este recurso requiere las credenciales ADMIN de producción.'), info('Busca el backend.tfstate con las claves de administración (aws s3 ls s3://prod-tf-state-bucket).')];
      }
      const lines = [out('EC2 INSTANCES:')];
      (aws.instances || []).forEach((i) => lines.push(accent(`  ${i.id.padEnd(12)} ${i.ip.padEnd(16)} ${i.name}`)));
      if (!aws.instances) lines.push(warn('  (sin instancias visibles con estas credenciales)'));
      if (aws.adminInstancesFlag) lines.push(...flagLines(aws.adminInstancesFlag));
      return lines;
    }

    return [err('aws: subcomando no soportado en esta simulación. Prueba: s3, sts, iam, ec2.')];
  }

  /* ════════════════════ KUBECTL ════════════════════ */
  function kubectlPositional(tokens) {
    const skip = { '--server': 1, '-s': 1, '--token': 1, '-n': 1, '--context': 1 };
    const pos = [];
    for (let i = 0; i < tokens.length; i++) {
      const t = tokens[i];
      if (skip[t]) { i += 1; continue; }
      if (t.startsWith('-')) continue;
      pos.push(t);
    }
    return pos;
  }
  function cmdKubectl(tokens, ctx) {
    const server = extractFlagValue(tokens, '--server') || extractFlagValue(tokens, '-s');
    if (!server) return [err('uso: kubectl --server http://IP:6443 [--token TOKEN] <get|describe|exec> …')];
    const ip = server.replace(/^https?:\/\//, '').split(':')[0];
    const host = global.HOSTS[ip];
    if (!host || !host.k8s) return [warn(`kubectl: unable to connect to the server: ${server}: dial tcp ${ip}:6443: connect: connection refused`)];

    const k8s = host.k8s;
    const pos = kubectlPositional(tokens);
    const sub = pos[0];
    if (sub !== 'get' && sub !== 'describe' && sub !== 'exec') {
      return [err('uso: kubectl --server http://IP:6443 get pods | get secrets | describe pod NOMBRE | exec -it POD -- cat RUTA')];
    }

    if (sub === 'get') {
      const what = pos[1];
      const state = ctx.apiState(host.ip);
      if (what === 'pods') {
        const lines = [out('NAME                                     READY   STATUS    RESTARTS   AGE'), out('---------------------------------------   ------   ------    --------   -----')];
        k8s.pods.forEach((p) => lines.push(accent(`${p.name.padEnd(41)} 1/1     Running   0         4d`)));
        if (k8s.reconFlag && !state.k8sRecon) {
          state.k8sRecon = true;
          lines.push(...flagLines(k8s.reconFlag));
        }
        return lines;
      }
      if (what === 'secrets') {
        const lines = [out('NAME                TYPE                 DATA'), out('------------------   ------------------   ----')];
        k8s.secrets.forEach((s) => lines.push(accent(`${s.name.padEnd(20)} ${(s.type || 'Opaque').padEnd(18)} ${Object.keys(s.data || {}).length}`)));
        lines.push(info('Para leer uno: kubectl --server … get secret NOMBRE'));
        return lines;
      }
      if (what === 'secret') {
        const name = pos[2];
        const secret = k8s.secrets.find((s) => s.name === name);
        if (!secret) return [warn(`kubectl: Error from server (NotFound): secrets "${name}" not found`)];
        state.k8sToken = secret.tokenValue || null;
        const lines = [out('apiVersion: v1'), out('kind: Secret'), out('type: ' + (secret.type || 'Opaque')), out('data:')];
        Object.keys(secret.data || {}).forEach((k) => lines.push(accent(`  ${k}: ${secret.data[k]}`)));
        lines.push(info('(token de despliegue obtenido — pruébalo con kubectl --server … --token … get nodes)'));
        if (secret.flag) lines.push(...flagLines(secret.flag));
        return lines;
      }
      if (what === 'nodes') {
        if (!state.k8sToken) {
          return [warn('kubectl: Error from server (Forbidden): nodes is forbidden: User "dev-sa" cannot list nodes.'), info('Necesitas el token de despliegue: kubectl --server … get secret deploy-token')];
        }
        const lines = [out('NAME       STATUS   ROLES    AGE    VERSION'), out('--------   ------   -----   ----   -----')];
        k8s.nodes.forEach((n) => lines.push(accent(`${n.padEnd(10)} Ready    <none>   142d   v1.28.2`)));
        if (k8s.nodesFlag) lines.push(...flagLines(k8s.nodesFlag));
        return lines;
      }
      if (what === 'namespaces') return k8s.namespaces ? k8s.namespaces.map((n) => out(n)) : [warn('kubectl: no namespaces extra en esta simulación.')];
      return [err('uso: kubectl --server http://IP:6443 get pods|secrets|secret NOMBRE|nodes|namespaces')];
    }

    if (sub === 'describe') {
      const podName = pos[2];
      const pod = k8s.pods.find((p) => p.name === podName);
      if (!pod) return [warn(`kubectl: pods "${podName}" not found`)];
      return [out('Name:           ' + pod.name), out('Status:         Running'), out('Service Account: ' + pod.serviceAccount || 'default'), ...(pod.notes ? [warn(pod.notes)] : [])];
    }

    if (sub === 'exec') {
      const podName = pos[1];
      const pod = k8s.pods.find((p) => p.name === podName);
      if (!pod) return [warn(`kubectl: error: Unable to use a TTY - container ${podName} not found`)];
      const catIdx = tokens.indexOf('cat');
      const path = catIdx > -1 ? tokens[catIdx + 1] : null;
      if (path) {
        const file = (pod.files || []).find((f) => f.path === path || f.path.endsWith(path));
        if (!file) return [err(`cat: ${path}: No such file or directory`)];
        ctx.markFileRead();
        const lines = [out(file.content)];
        if (file.flag) lines.push(...flagLines(file.flag));
        return lines;
      }
      if (tokens.includes('env')) {
        const lines = [out('KUBERNETES_SERVICE_HOST=' + ip), out('KUBERNETES_SERVICE_PORT=443')];
        (pod.env || []).forEach((e) => lines.push(accent(`${e.key}=${e.value}`)));
        if (pod.envFlag) lines.push(...flagLines(pod.envFlag));
        return lines;
      }
      return [info('dentro del pod — usa kubectl exec -it POD -- env o kubectl exec -it POD -- cat RUTA')];
    }
    return [err('uso: kubectl --server http://IP:6443 get pods|secrets|describe pod|exec')];
  }

  /* ════════════════════ TERRAFORM ════════════════════ */
  function cmdTerraform(tokens, ctx) {
    if (tokens[0] === 'state' && tokens[1] === 'pull') {
      const host = Object.values(global.HOSTS).find((h) => h.terraform);
      if (!host) return [warn('terraform: no se encontró un backend de estado remoto en esta red.')];
      ctx.markFileRead();
      const lines = [out('terraform state pull — backend: s3 (simulado)'), out(''), out(host.terraform.state)];
      if (host.terraform.flag) lines.push(...flagLines(host.terraform.flag));
      return lines;
    }
    if (tokens[0] === 'show' && tokens[1]) {
      const path = tokens[1];
      const host = Object.values(global.HOSTS).find((h) => h.terraform);
      if (!host) return [warn('terraform: no se encontró ningún estado en esta red.')];
      if (!path.includes('tfstate')) return [warn(`terraform show: ${path}: no such state file`)];
      ctx.markFileRead();
      const lines = [out(host.terraform.state)];
      if (host.terraform.flag) lines.push(...flagLines(host.terraform.flag));
      return lines;
    }
    return [err('uso: terraform state pull  |  terraform show ARCHIVO.tfstate')];
  }

  const CLOUD_COMMANDS = { aws: cmdAws, kubectl: cmdKubectl, terraform: cmdTerraform };

  Object.assign(global.NETWORK_COMMANDS, CLOUD_COMMANDS);
})(typeof window !== 'undefined' ? window : globalThis);
