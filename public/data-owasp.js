// OWASP Top 10 (2021) data
window.WIKI_DATA_OWASP = [
  {
    code: "A01:2021",
    title: "Broken Access Control",
    impact: "Crítico",
    summary: "Restricciones en lo que los usuarios autenticados pueden hacer no se aplican correctamente.",
    prevention: "Denegar por defecto, validar permisos en servidor, deshabilitar directorios web, registrar fallos de acceso."
  },
  {
    code: "A02:2021",
    title: "Cryptographic Failures",
    impact: "Crítico",
    summary: "Fallos relacionados con la protección de datos sensibles: cifrado débil, almacenamiento en claro, claves expuestas.",
    prevention: "Clasificar datos, no almacenar datos innecesarios, cifrar en tránsito y en reposo, usar key management seguro."
  },
  {
    code: "A03:2021",
    title: "Injection",
    impact: "Crítico",
    summary: "Inyección de código (SQL, NoSQL, OS, LDAP). El adversario envía datos maliciosos que se interpretan como comandos.",
    prevention: "Sentencias parametrizadas, validación de entrada estricta, escape de caracteres especiales, WAF."
  },
  {
    code: "A04:2021",
    title: "Insecure Design",
    impact: "Crítico",
    summary: "Fallos en el diseño de arquitectura de seguridad: falta de patrones seguros, controles débiles, ausencia de threat modeling.",
    prevention: "Threat modeling, patrones de diseño seguro, referenciales de arquitectura, revisiones de diseño."
  },
  {
    code: "A05:2021",
    title: "Security Misconfiguration",
    impact: "Alto",
    summary: "Configuraciones por defecto, permisos abiertos, servicios innecesarios activos, mensajes de error detallados.",
    prevention: "Proceso de hardening reproducible,最小化 superficie de ataque, revisión periódica de configuraciones."
  },
  {
    code: "A06:2021",
    title: "Vulnerable and Outdated Components",
    impact: "Alto",
    summary: "Uso de componentes, bibliotecas o frameworks con vulnerabilidades conocidas sin actualizar.",
    prevention: "Inventario de componentes, monitoreo de CVE, actualizaciones regulares, SBOM (Software Bill of Materials)."
  },
  {
    code: "A07:2021",
    title: "Identification and Authentication Failures",
    impact: "Alto",
    summary: "Autenticación débil: fuerza bruta, credenciales por defecto, sesiones no invalidadas, MFA no implementado.",
    prevention: "MFA, bloqueo de cuentas, contraseñas seguras, invalidación de sesiones, rate limiting."
  },
  {
    code: "A08:2021",
    title: "Software and Data Integrity Failures",
    impact: "Alto",
    summary: "Actualizaciones sin verificación de integridad, CI/CD vulnerable, deserialización insegura.",
    prevention: "Firmas digitales, verificación de integridad, pipelines CI/CD seguros, deserialización segura."
  },
  {
    code: "A09:2021",
    title: "Security Logging and Monitoring Failures",
    impact: "Alto",
    summary: "Falta de logging, monitoreo insuficiente, alertas no procesadas, sin respuesta a incidentes.",
    prevention: "Logs de eventos de seguridad, monitoreo en tiempo real, alertas automatizadas, plan de respuesta."
  },
  {
    code: "A10:2021",
    title: "Server-Side Request Forgery (SSRF)",
    impact: "Alto",
    summary: "La aplicación fetcha un recurso remoto sin validar la URL, permitiendo al atacante forzar peticiones a servicios internos.",
    prevention: "Whitelist de URLs, segmentación de red, deshabilitar redirecciones HTTP, validación estricta."
  }
];
