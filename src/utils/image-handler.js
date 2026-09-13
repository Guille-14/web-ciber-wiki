/**
 * Image Handler - Error handling, lazy loading, placeholders for images
 * @module utils/image-handler
 */

/**
 * Process all images in a container to add error handling
 * @param {HTMLElement} container
 */
export function processImages(container) {
  if (!container) return;
  const images = container.querySelectorAll('img');
  images.forEach(img => {
    if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
    img.addEventListener('error', handleImageError);
    if (img.complete && img.naturalWidth === 0) handleImageError({ target: img });
  });
}

function handleImageError(e) {
  const img = e.target;
  if (img.dataset.errorHandled) return;
  img.dataset.errorHandled = 'true';
  const alt = img.alt || 'Imagen no disponible';
  const wrapper = document.createElement('div');
  wrapper.className = 'image-error-placeholder';
  wrapper.innerHTML = `<div class="image-error-icon">🖼️</div><div class="image-error-text">${alt}</div>`;
  img.style.display = 'none';
  img.parentNode.insertBefore(wrapper, img);
  img.removeEventListener('error', handleImageError);
}

export function addImageErrorHandlers(html) {
  if (!html) return html;
  return html.replace(/<img([^>]*)>/gi, (match, attrs) => {
    if (attrs.includes('onerror')) return match;
    return `<img${attrs} onerror="this.onerror=null;this.style.display='none';const p=document.createElement('div');p.className='image-error-placeholder';p.innerHTML='<div class=image-error-icon>🖼️</div>';this.parentNode.insertBefore(p,this);">`;
  });
}
