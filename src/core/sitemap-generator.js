import { events, EVENTS } from './events.js';

/**
 * Sitemap Generator - Creates XML sitemaps dynamically
 */
export class SitemapGenerator {
  constructor() {
    this.baseUrl = 'https://cyberwiki.app';
    this.sitemaps = [];
  }

  /**
   * Initialize sitemap generator
   * @param {Object} wikiData
   */
  init(wikiData) {
    this.wikiData = wikiData;
  }

  /**
   * Generate main sitemap index
   * @returns {string} XML string
   */
  generateSitemapIndex() {
    const sitemaps = [
      { loc: `${this.baseUrl}/sitemap-pages.xml`, lastmod: new Date().toISOString() },
      { loc: `${this.baseUrl}/sitemap-articles.xml`, lastmod: new Date().toISOString() },
      { loc: `${this.baseUrl}/sitemap-guides.xml`, lastmod: new Date().toISOString() },
      { loc: `${this.baseUrl}/sitemap-categories.xml`, lastmod: new Date().toISOString() }
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(s => `  <sitemap>
    <loc>${s.loc}</loc>
    <lastmod>${s.lastmod}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

    return xml;
  }

  /**
   * Generate pages sitemap (static pages)
   * @returns {string} XML string
   */
  generatePagesSitemap() {
    const pages = [
      { path: '/', priority: '1.0', changefreq: 'daily' },
      { path: '/articles', priority: '0.9', changefreq: 'daily' },
      { path: '/owasp', priority: '0.8', changefreq: 'monthly' },
      { path: '/cheatsheets', priority: '0.8', changefreq: 'weekly' },
      { path: '/glossary', priority: '0.7', changefreq: 'monthly' },
      { path: '/tags', priority: '0.6', changefreq: 'weekly' },
      { path: '/bookmarks', priority: '0.3', changefreq: 'never' },
      { path: '/history', priority: '0.3', changefreq: 'never' },
      { path: '/chat', priority: '0.7', changefreq: 'monthly' },
      { path: '/quiz', priority: '0.8', changefreq: 'weekly' },
      { path: '/guides', priority: '0.9', changefreq: 'weekly' }
    ];

    return this.generateXML(pages.map(p => ({
      loc: `${this.baseUrl}${p.path}`,
      lastmod: new Date().toISOString(),
      changefreq: p.changefreq,
      priority: p.priority
    })));
  }

  /**
   * Generate articles sitemap
   * @returns {string} XML string
   */
  generateArticlesSitemap() {
    if (!this.wikiData?.articles) {
      return this.generateXML([]);
    }

    const urls = this.wikiData.articles.map(article => {
      // Calculate priority based on difficulty and category
      let priority = '0.5';
      if (article.difficulty === 'Principiante') priority = '0.7';
      else if (article.difficulty === 'Intermedio') priority = '0.6';
      else if (article.difficulty === 'Avanzado') priority = '0.5';

      // Core articles get higher priority
      const coreCategories = ['reconocimiento', 'web', 'explotacion', 'postexplotacion', 'malware', 'defensa'];
      if (coreCategories.includes(article.category)) {
        priority = Math.min(parseFloat(priority) + 0.2, 0.9).toString();
      }

      return {
        loc: `${this.baseUrl}/articles/${article.id}`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority
      };
    });

    return this.generateXML(urls);
  }

  /**
   * Generate guides sitemap
   * @returns {string} XML string
   */
  generateGuidesSitemap() {
    // Guides data would come from window.GUIDES_DATA
    const guides = window.GUIDES_DATA?.guides || [];

    const urls = guides.map(guide => ({
      loc: `${this.baseUrl}/guide/${guide.id}`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: guide.level === 'Principiante' ? '0.8' : guide.level === 'Intermedio' ? '0.7' : '0.6'
    }));

    return this.generateXML(urls);
  }

  /**
   * Generate categories sitemap
   * @returns {string} XML string
   */
  generateCategoriesSitemap() {
    const categories = this.wikiData?.categories || [];

    const urls = categories.map(category => ({
      loc: `${this.baseUrl}/articles?category=${category.id}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.6'
    }));

    return this.generateXML(urls);
  }

  /**
   * Generate XML from URL array
   * @param {Array} urls
   * @returns {string} XML string
   */
  generateXML(urls) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return xml;
  }

  /**
   * Generate robots.txt content
   * @returns {string} robots.txt content
   */
  generateRobotsTxt() {
    return `# CyberWiki Hub - Robots.txt
# https://cyberwiki.app

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /private/

# Sitemaps
Sitemap: https://cyberwiki.app/sitemap.xml

# Crawl-delay (optional, for polite crawlers)
Crawl-delay: 1

# Specific bot rules
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 2

User-agent: Slurp
Allow: /
Crawl-delay: 2

# Block AI scrapers (optional)
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

# Allow social media crawlers
User-agent: FacebookExternalHit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Files
User-agent: *
Allow: /icons/
Allow: /images/
Disallow: /node_modules/
Disallow: /src/
Disallow: /dist/

# Clean URL routing
# CyberWiki uses History API with clean URLs
# All content is accessible via standard URLs
# Search engines can index all pages directly`;
  }

  /**
   * Create downloadable sitemap file
   * @param {string} content
   * @param {string} filename
   */
  downloadSitemap(content, filename) {
    const blob = new Blob([content], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /**
   * Download all sitemaps
   */
  downloadAll() {
    this.downloadSitemap(this.generateSitemapIndex(), 'sitemap.xml');
    this.downloadSitemap(this.generatePagesSitemap(), 'sitemap-pages.xml');
    this.downloadSitemap(this.generateArticlesSitemap(), 'sitemap-articles.xml');
    this.downloadSitemap(this.generateGuidesSitemap(), 'sitemap-guides.xml');
    this.downloadSitemap(this.generateCategoriesSitemap(), 'sitemap-categories.xml');
    this.downloadSitemap(this.generateRobotsTxt(), 'robots.txt');
  }

  /**
   * Get sitemap stats
   * @returns {Object}
   */
  getStats() {
    return {
      pages: 11,
      articles: this.wikiData?.articles?.length || 0,
      guides: window.GUIDES_DATA?.guides?.length || 0,
      categories: this.wikiData?.categories?.length || 0,
      totalUrls: 11 + (this.wikiData?.articles?.length || 0) + (window.GUIDES_DATA?.guides?.length || 0) + (this.wikiData?.categories?.length || 0)
    };
  }

  /**
   * Destroy generator
   */
  destroy() {
    this.sitemaps = [];
  }
}

// Export singleton
export const sitemapGenerator = new SitemapGenerator();