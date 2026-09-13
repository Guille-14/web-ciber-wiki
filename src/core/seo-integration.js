import { state } from './state.js';
import { events, EVENTS } from './events.js';
import { seoMeta } from './seo-meta.js';
import { sitemapGenerator } from './sitemap-generator.js';
import { 
  generateWebSiteSchema, 
  generateOrganizationSchema, 
  generateArticleSchema,
  generateBreadcrumbSchema,
  injectStructuredData,
  generateInitialSchemas
} from './structured-data.js';

/**
 * SEO Integration - Wires up all SEO systems
 */
export class SEOIntegration {
  constructor() {
    this.initialized = false;
    this.schemas = [];
  }

  /**
   * Initialize SEO integration
   * @param {Object} wikiData
   */
  init(wikiData) {
    if (this.initialized) return;
    
    // Initialize SEO meta manager
    seoMeta.init();
    
    // Initialize sitemap generator
    sitemapGenerator.init(wikiData);
    
    // Add initial structured data
    this.addInitialSchemas();
    
    // Set up event listeners
    this.setupEventListeners();
    
    // Generate and inject robots.txt meta
    this.addRobotsMeta();
    
    // Add canonical URL
    this.addCanonical();
    
    this.initialized = true;
  }

  /**
   * Add initial structured data schemas
   */
  addInitialSchemas() {
    const schemas = generateInitialSchemas();
    schemas.forEach(schema => injectStructuredData(schema));
    this.schemas = schemas;
  }

  /**
   * Set up event listeners for SEO updates
   */
  setupEventListeners() {
    // Update SEO when article is opened
    events.on(EVENTS.ARTICLE_OPENED, (data) => {
      if (data.article) {
        this.handleArticleOpen(data.article);
      }
    });
    
    // Reset SEO when article is closed
    events.on(EVENTS.ARTICLE_CLOSED, () => {
      this.handleArticleClose();
    });
    
    // Update SEO on tab change
    events.on(EVENTS.TAB_CHANGED, (data) => {
      this.handleTabChange(data);
    });
  }

  /**
   * Handle article open - update meta and add article schema
   * @param {Object} article
   */
  handleArticleOpen(article) {
    // Update meta tags
    seoMeta.updateForArticle(article);
    
    // Add article schema
    const articleSchema = generateArticleSchema(article);
    injectStructuredData(articleSchema);
    
    // Add breadcrumbs
    const breadcrumbs = [
      { name: 'Inicio', url: 'https://cyberwiki.app' },
      { name: 'Artículos', url: 'https://cyberwiki.app/articles' },
      { name: article.title, url: `https://cyberwiki.app/articles/${article.id}` }
    ];
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
    injectStructuredData(breadcrumbSchema);
    
    // Scroll to top for better UX
    window.scrollTo(0, 0);
  }

  /**
   * Handle article close - reset to default
   */
  handleArticleClose() {
    const currentTab = state.get('activeTab') || 'articles';
    seoMeta.updateForTab(currentTab);
  }

  /**
   * Handle tab change
   * @param {Object} data
   */
  handleTabChange(data) {
    const tab = data.tab || data.newTab;
    if (tab) {
      seoMeta.updateForTab(tab);
    }
  }

  /**
   * Add robots meta tag
   */
  addRobotsMeta() {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    document.head.appendChild(meta);
  }

  /**
   * Add canonical URL based on current route
   */
  addCanonical() {
    const path = window.location.pathname || '/';
    const url = `https://cyberwiki.app${path}`;
    seoMeta.setCanonical(url);
    
    // Update canonical on route change
    window.addEventListener('popstate', () => {
      const newPath = window.location.pathname || '/';
      const newUrl = `https://cyberwiki.app${newPath}`;
      seoMeta.setCanonical(newUrl);
    });
  }

  /**
   * Generate and display sitemap (for admin/development)
   */
  showSitemap() {
    const stats = sitemapGenerator.getStats();
    const sitemapIndex = sitemapGenerator.generateSitemapIndex();
    const robotsTxt = sitemapGenerator.generateRobotsTxt();
    
    return {
      stats,
      sitemapIndex,
      robotsTxt
    };
  }

  /**
   * Download all SEO files
   */
  downloadSEOFiles() {
    sitemapGenerator.downloadAll();
  }

  /**
   * Get SEO report for current page
   * @returns {Object}
   */
  getReport() {
    const title = document.title;
    const metaDescription = document.querySelector('meta[name="description"]')?.content;
    const canonical = document.querySelector('link[rel="canonical"]')?.href;
    const ogTitle = document.querySelector('meta[property="og:title"]')?.content;
    const ogDescription = document.querySelector('meta[property="og:description"]')?.content;
    const ogImage = document.querySelector('meta[property="og:image"]')?.content;
    
    const structuredData = [];
    document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
      try {
        structuredData.push(JSON.parse(script.textContent));
      } catch (e) {}
    });
    
    return {
      title,
      metaDescription,
      canonical,
      og: {
        title: ogTitle,
        description: ogDescription,
        image: ogImage
      },
      structuredData,
      stats: sitemapGenerator.getStats()
    };
  }

  /**
   * Validate current page SEO
   * @returns {{ score: number, issues: string[] }}
   */
  validate() {
    const issues = [];
    let score = 100;
    
    // Check title
    if (!document.title || document.title.length < 30) {
      issues.push('Title is missing or too short (< 30 chars)');
      score -= 20;
    }
    
    if (document.title && document.title.length > 60) {
      issues.push('Title is too long (> 60 chars)');
      score -= 10;
    }
    
    // Check meta description
    const metaDesc = document.querySelector('meta[name="description"]')?.content;
    if (!metaDesc || metaDesc.length < 120) {
      issues.push('Meta description is missing or too short (< 120 chars)');
      score -= 20;
    }
    
    if (metaDesc && metaDesc.length > 160) {
      issues.push('Meta description is too long (> 160 chars)');
      score -= 10;
    }
    
    // Check canonical
    if (!document.querySelector('link[rel="canonical"]')) {
      issues.push('Canonical URL is missing');
      score -= 10;
    }
    
    // Check OG tags
    if (!document.querySelector('meta[property="og:title"]')) {
      issues.push('OG title is missing');
      score -= 5;
    }
    
    if (!document.querySelector('meta[property="og:description"]')) {
      issues.push('OG description is missing');
      score -= 5;
    }
    
    if (!document.querySelector('meta[property="og:image"]')) {
      issues.push('OG image is missing');
      score -= 5;
    }
    
    // Check structured data
    const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
    if (structuredData.length === 0) {
      issues.push('No structured data found');
      score -= 10;
    }
    
    // Check robots meta
    if (!document.querySelector('meta[name="robots"]')) {
      issues.push('Robots meta tag is missing');
      score -= 5;
    }
    
    return {
      score: Math.max(0, score),
      issues,
      passed: issues.length === 0
    };
  }

  /**
   * Destroy SEO integration
   */
  destroy() {
    this.schemas = [];
    this.initialized = false;
  }
}

// Export singleton
export const seoIntegration = new SEOIntegration();
