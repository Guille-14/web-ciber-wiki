/* ═══════════════════════════════════════════════════════════════
   VFS.js — Motor de Sistema de Archivos Virtual
   Lógica pura, sin dependencias del DOM. Cada "host" de la red
   tiene su propio árbol VFS independiente.
   ═══════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  /** Crea un nodo de tipo directorio. */
  function dirNode(children, opts) {
    opts = opts || {};
    return {
      type: 'dir',
      perms: opts.perms || 'rwxr-xr-x',
      owner: opts.owner || 'root',
      children: children || {},
    };
  }

  /** Crea un nodo de tipo archivo. */
  function fileNode(content, opts) {
    opts = opts || {};
    return {
      type: 'file',
      perms: opts.perms || 'rw-r--r--',
      owner: opts.owner || 'root',
      content: content == null ? '' : String(content),
    };
  }

  /** Divide una ruta en segmentos, ignorando vacíos. */
  function splitPath(p) {
    return String(p).split('/').filter((s) => s.length > 0);
  }

  /**
   * Resuelve una ruta de entrada (absoluta, relativa, con ~, con ..)
   * contra el cwd actual y el home del usuario actual.
   * Devuelve un array de segmentos (ruta absoluta resuelta).
   */
  function resolvePath(cwdArr, inputPath, homeArr) {
    if (inputPath == null || inputPath === '') return cwdArr.slice();
    if (inputPath === '.') return cwdArr.slice();

    let base;
    let rest = inputPath;

    if (inputPath === '~') {
      return (homeArr || []).slice();
    } else if (inputPath.startsWith('~/')) {
      base = (homeArr || []).slice();
      rest = inputPath.slice(2);
    } else if (inputPath.startsWith('/')) {
      base = [];
    } else {
      base = cwdArr.slice();
    }

    const segs = splitPath(rest);
    for (const seg of segs) {
      if (seg === '.' || seg === '') continue;
      else if (seg === '..') {
        if (base.length) base.pop();
      } else base.push(seg);
    }
    return base;
  }

  /** Recorre el árbol y devuelve el nodo en esa ruta (o null si no existe). */
  function getNode(root, pathArr) {
    let node = root;
    for (const seg of pathArr) {
      if (!node || node.type !== 'dir' || !node.children[seg]) return null;
      node = node.children[seg];
    }
    return node;
  }

  /** Devuelve el nodo padre y el nombre del último segmento. */
  function getParent(root, pathArr) {
    if (pathArr.length === 0) return { parent: null, name: null };
    const parentPath = pathArr.slice(0, -1);
    const name = pathArr[pathArr.length - 1];
    const parent = getNode(root, parentPath);
    return { parent, name };
  }

  /** Formatea un array de ruta como string absoluto tipo "/a/b/c". */
  function pathStr(pathArr) {
    return '/' + pathArr.join('/');
  }

  /** Lista recursivamente todas las rutas de archivo bajo un nodo (para find/grep -r). */
  function walk(root, startPath, cb) {
    const startNode = getNode(root, startPath);
    if (!startNode) return;
    (function rec(node, p) {
      cb(node, p);
      if (node.type === 'dir') {
        for (const name of Object.keys(node.children)) {
          rec(node.children[name], p.concat([name]));
        }
      }
    })(startNode, startPath.slice());
  }

  /** Inserta un nodo en una ruta dada, creando el padre si hace falta (para touch/mkdir). */
  function setNode(root, pathArr, node) {
    if (pathArr.length === 0) return false;
    const parentPath = pathArr.slice(0, -1);
    const name = pathArr[pathArr.length - 1];
    const parent = getNode(root, parentPath);
    if (!parent || parent.type !== 'dir') return false;
    parent.children[name] = node;
    return true;
  }

  /** Elimina un nodo en una ruta dada. */
  function removeNode(root, pathArr) {
    const { parent, name } = getParent(root, pathArr);
    if (!parent || parent.type !== 'dir' || !parent.children[name]) return false;
    delete parent.children[name];
    return true;
  }

  global.VFS = {
    dirNode,
    fileNode,
    splitPath,
    resolvePath,
    getNode,
    getParent,
    pathStr,
    walk,
    setNode,
    removeNode,
  };
})(typeof window !== 'undefined' ? window : globalThis);
