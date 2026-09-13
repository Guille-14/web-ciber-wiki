import { state } from './state.js';
import { events, EVENTS } from './events.js';

/**
 * SEO Meta Manager - Dynamically updates meta tags for each page/article
 */
export class SEOMetaManager {
  constructor() {
    this.defaultMeta = {
      title: 'CyberWiki Hub | Enciclopedia de Ciberseguridad #1 en Español',
      description: 'Enciclopedia completa de ciberseguridad con 2,800+ artículos, cheatsheets, glossario, quiz interactivo y chat IA. MITRE ATT&CK, OWASP, CVE, Red Team, Blue Team y más.',
      keywords: 'ciberseguridad, cybersecurity, hacking, pentesting, OWASP, MITRE ATT&CK, CVE, Red Team, Blue Team, Nmap, Metasploit',
      author: 'CyberWiki Hub',
      robots: 'index, follow, max-image-preview:large',
      canonical: 'https://cyberwiki.app',
      og: {
        type: 'website',
        siteName: 'CyberWiki Hub',
        locale: 'es_ES',
        image: 'https://cyberwiki.app/icon-512.png',
        imageWidth: '1200',
        imageHeight: '630'
      },
      twitter: {
        card: 'summary_large_image',
        site: '@cyberwiki',
        creator: '@cyberwiki'
      }
    };
  }

  /**
   * Initialize SEO manager
   */
  init() {
    this.setMetaTags(this.defaultMeta);

    events.on(EVENTS.TAB_CHANGED, (data) => this.handleRouteChange(data));
    events.on(EVENTS.ARTICLE_OPENED, (data) => this.handleArticleOpen(data));
    events.on(EVENTS.ARTICLE_CLOSED, () => this.handleArticleClose());
  }

  /**
   * Set all meta tags from a meta object
   * @param {Object} meta
   */
  setMetaTags(meta) {
    if (meta.title) {
      document.title = meta.title;
      this.setMetaTag('og:title', meta.title);
      this.setMetaTag('twitter:title', meta.title);
    }

    if (meta.description) {
      this.setMetaTag('description', meta.description);
      this.setMetaTag('og:description', meta.description);
      this.setMetaTag('twitter:description', meta.description);
    }

    if (meta.keywords) {
      this.setMetaTag('keywords', meta.keywords);
    }

    if (meta.robots) {
      this.setMetaTag('robots', meta.robots);
    }

    if (meta.author) {
      this.setMetaTag('author', meta.author);
    }

    if (meta.canonical) {
      this.setCanonical(meta.canonical);
    }

    if (meta.og) {
      Object.entries(meta.og).forEach(([key, value]) => {
        this.setMetaTag(`og:${key}`, value);
      });
    }

    if (meta.twitter) {
      Object.entries(meta.twitter).forEach(([key, value]) => {
        this.setMetaTag(`twitter:${key}`, value);
      });
    }
  }

  /**
   * Set a single meta tag
   * @param {string} name
   * @param {string} content
   */
  setMetaTag(name, content) {
    let element = document.querySelector(`meta[property="${name}"]`) ||
                  document.querySelector(`meta[name="${name}"]`);

    if (!element) {
      element = document.createElement('meta');
      if (name.startsWith('og:')) {
        element.setAttribute('property', name);
      } else {
        element.setAttribute('name', name);
      }
      document.head.appendChild(element);
    }

    element.setAttribute('content', content);
  }

  /**
   * Set canonical URL
   * @param {string} url
   */
  setCanonical(url) {
    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', url);
  }

  /**
   * Update meta tags for an article
   * @param {Object} article
   */
  updateForArticle(article) {
    if (!article) return;

    const baseUrl = 'https://cyberwiki.app';
    const articleUrl = `${baseUrl}/articles/${article.id}`;

    const meta = {
      title: `${article.title} | CyberWiki Hub`,
      description: article.summary || `Artículo sobre ${article.title} en CyberWiki Hub`,
      keywords: [...(article.tags || []), 'ciberseguridad', article.category].join(', '),
      canonical: articleUrl,
      og: {
        type: 'article',
        title: `${article.title} | CyberWiki Hub`,
        description: article.summary,
        url: articleUrl,
        image: this.generateArticleImage(article),
        imageWidth: '1200',
        imageHeight: '630',
        siteName: 'CyberWiki Hub',
        locale: 'es_ES',
        publishedTime: new Date().toISOString(),
        modifiedTime: new Date().toISOString(),
        authors: ['CyberWiki Hub'],
        tags: article.tags
      },
      twitter: {
        card: 'summary_large_image',
        title: `${article.title} | CyberWiki Hub`,
        description: article.summary,
        image: this.generateArticleImage(article)
      }
    };

    this.setMetaTags(meta);
  }

  /**
   * Generate OG image URL for article (uses external service or placeholder)
   * @param {Object} article
   * @returns {string}
   */
  generateArticleImage(article) {
    const title = encodeURIComponent(article.title);
    const category = encodeURIComponent(article.category);

    return `https://cyberwiki.app/api/og?title=${title}&category=${category}`;
  }

  /**
   * Update meta for a tab/route
   * @param {string} tab
   * @param {Object} data
   */
  updateForTab(tab, data = {}) {
    const tabMeta = {
      articles: {
        title: 'Artículos y Guías | CyberWiki Hub',
        description: 'Explora nuestra colección de 2,800+ artículos sobre ciberseguridad, hacking ético, pentesting y más.',
        keywords: 'artículos ciberseguridad, guías hacking, tutoriales pentesting'
      },
      owasp: {
        title: 'OWASP Top 10 | CyberWiki Hub',
        description: 'Análisis completo del OWASP Top 10 2021 - Las 10 vulnerabilidades más críticas en aplicaciones web.',
        keywords: 'OWASP Top 10, vulnerabilidades web, seguridad aplicaciones'
      },
      cheatsheets: {
        title: 'Cheatsheets y Comandos | CyberWiki Hub',
        description: 'Referencia rápida de comandos y herramientas de ciberseguridad: Nmap, Metasploit, Burp Suite y más.',
        keywords: 'cheatsheets, comandos, nmap, metasploit, burp suite'
      },
      glossary: {
        title: 'Glosario de Ciberseguridad | CyberWiki Hub',
        description: 'Diccionario técnico de términos de ciberseguridad: red team, blue team, criptografía, malware y más.',
        keywords: 'glosario ciberseguridad, términos seguridad, definiciones hacking'
      },
      tags: {
        title: 'Nube de Tags | CyberWiki Hub',
        description: 'Explora artículos por categorías y etiquetas: pentesting, forensics, malware, redes y más.',
        keywords: 'tags ciberseguridad, categorías seguridad, etiquetas hacking'
      },
      chat: {
        title: 'Chat IA de Ciberseguridad | CyberWiki Hub',
        description: 'Asistente de inteligencia artificial especializado en ciberseguridad. Pregúntale sobre técnicas, herramientas y más.',
        keywords: 'chat ia ciberseguridad, asistente hacking, ia seguridad'
      },
      quiz: {
        title: 'CiberQuiz - Quiz de Ciberseguridad | CyberWiki Hub',
        description: 'Pon a prueba tus conocimientos con nuestro quiz interactivo de ciberseguridad. 375+ preguntas en 6 categorías.',
        keywords: 'quiz ciberseguridad, test seguridad, preguntas hacking'
      },
      guides: {
        title: 'Guías Visuales de Ciberseguridad | CyberWiki Hub',
        description: 'Roadmaps, técnicas y herramientas explicadas paso a paso con guías visuales interactivas.',
        keywords: 'guías ciberseguridad, roadmap hacking, tutoriales visuales'
      }
    };

    const meta = tabMeta[tab] || this.defaultMeta;
    const baseUrl = 'https://cyberwiki.app';

    this.setMetaTags({
      ...meta,
      canonical: `${baseUrl}/${tab}`,
      og: {
        type: 'website',
        title: meta.title,
        description: meta.description,
        url: `${baseUrl}/${tab}`,
        image: this.defaultMeta.og.image,
        siteName: 'CyberWiki Hub',
        locale: 'es_ES'
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.title,
        description: meta.description,
        image: this.defaultMeta.og.image
      }
    });
  }

  /**
   * Handle route change
   * @param {Object} data
   */
  handleRouteChange(data) {
    const tab = data.tab || data.newTab || 'articles';
    this.updateForTab(tab);
  }

  /**
   * Handle article open
   * @param {Object} data
   */
  handleArticleOpen(data) {
    if (data.article) {
      this.updateForArticle(data.article);
    }
  }

  /**
   * Handle article close - reset to default
   */
  handleArticleClose() {
    const currentTab = state.get('activeTab') || 'articles';
    this.updateForTab(currentTab);
  }

  /**
   * Add JSON-LD structured data
   * @param {Object} schema
   */
  addStructuredData(schema) {
    const existing = document.querySelectorAll('script[type="application/ld+json"]');
    existing.forEach(script => {
      try {
        const data = JSON.parse(script.textContent);
        if (data['@type'] === schema['@type']) {
          script.remove();
        }
      } catch (e) {}
    });

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema, null, 2);
    document.head.appendChild(script);
  }

  /**
   * Generate breadcrumbs structured data
   * @param {Array} items - [{name, url}]
   */
  addBreadcrumbs(items) {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    };

    this.addStructuredData(schema);
  }

  /**
   * Generate article structured data
   * @param {Object} article
   */
  addArticleSchema(article) {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.summary,
      author: {
        '@type': 'Organization',
        name: 'CyberWiki Hub',
        url: 'https://cyberwiki.app'
      },
      publisher: {
        '@type': 'Organization',
        name: 'CyberWiki Hub',
        url: 'https://cyberwiki.app',
        logo: {
          '@type': 'ImageObject',
          url: 'https://cyberwiki.app/icon-512.png'
        }
      },
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://cyberwiki.app/articles/${article.id}`
      },
      keywords: article.tags?.join(', '),
      articleSection: article.category
    };

    this.addStructuredData(schema);
  }

  /**
   * Generate FAQ structured data
   * @param {Array} faqs - [{question, answer}]
   */
  addFAQSchema(faqs) {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };

    this.addStructuredData(schema);
  }

  /**
   * Generate HowTo structured data
   * @param {Object} howto - {name, description, steps}
   */
  addHowToSchema(howto) {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: howto.name,
      description: howto.description,
      step: howto.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
        image: step.image
      }))
    };

    this.addStructuredData(schema);
  }

  /**
   * Generate WebSite schema with SearchAction
   */
  addWebSiteSchema() {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'CyberWiki Hub',
      alternateName: 'CyberWiki',
      url: 'https://cyberwiki.app',
      description: 'Enciclopedia completa de ciberseguridad con 2,800+ artículos',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://cyberwiki.app/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    };

    this.addStructuredData(schema);
  }

  /**
   * Destroy SEO manager
   */
  destroy() {
    // Cleanup if needed
  }
}

// Export singleton
export const seoMeta = new SEOMetaManager();
