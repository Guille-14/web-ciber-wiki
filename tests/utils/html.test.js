import { describe, it, expect } from 'vitest';
import { sanitize, formatMarkdown, highlightMatch } from '../../src/utils/html.js';

describe('sanitize — regresión XSS', () => {
  it('no re-vive entidades codificadas (payload &lt;img onerror&gt;)', () => {
    const payload = '&lt;img src=x onerror="alert(1)"&gt;';
    const out = sanitize(formatMarkdown(payload));
    // El payload NO puede aparecer como marcado vivo; solo como texto escapado.
    expect(out).not.toMatch(/<img\b/i);
    expect(out).not.toMatch(/<[^>]+\bonerror=/i);
    expect(out).toContain('&amp;lt;');
  });

  it('neutraliza <script> directo y su contenido', () => {
    const out = sanitize('<script>alert(1)</script>texto');
    expect(out).not.toContain('<script');
    expect(out).toContain('texto');
  });

  it('elimina event handlers en tags permitidos', () => {
    const out = sanitize('<p onclick="alert(1)">hola</p>');
    expect(out).not.toContain('onclick');
    expect(out).toContain('<p');
  });

  it('bloquea javascript: y vbscript: en href y action', () => {
    const out = sanitize('<a href="javascript:alert(1)">x</a><a href="vbscript:msgbox(1)">y</a>');
    expect(out).not.toContain('javascript:');
    expect(out).not.toContain('vbscript:');
  });

  it('elimina expresiones maliciosas en el atributo style', () => {
    const out = sanitize('<div style="background-image: url(javascript:alert(1)); width: 100px;">test</div>');
    expect(out).not.toContain('javascript:');
  });

  it('elimina etiquetas peligrosas como iframe, object, embed', () => {
    const out = sanitize('<div><iframe src="https://evil.com"></iframe>contenido</div>');
    expect(out).not.toContain('<iframe');
    expect(out).toContain('contenido');
  });

  it('mantiene markdown legítimo (negrita, código)', () => {
    const out = sanitize(formatMarkdown('**hola** `code`'));
    expect(out).toContain('<strong>hola</strong>');
    expect(out).toContain('<code>code</code>');
  });
});

describe('highlightMatch', () => {
  it('escapa el texto y marca coincidencias', () => {
    const out = highlightMatch('uno <dos> tres', 'dos');
    expect(out).toContain('&lt;');
    expect(out).toContain('<mark>dos</mark>');
  });
});
