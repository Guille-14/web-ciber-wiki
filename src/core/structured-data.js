/**
 * Structured Data Schemas for CyberWiki Hub
 * Based on Schema.org vocabulary
 */

/**
 * Generate WebSite schema
 * @returns {Object}
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CyberWiki Hub',
    alternateName: 'CyberWiki',
    url: 'https://cyberwiki.app',
    description: 'Enciclopedia completa de ciberseguridad con 2,800+ artículos, cheatsheets, glossario, quiz interactivo y chat IA.',
    inLanguage: 'es',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://cyberwiki.app/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

/**
 * Generate Organization schema
 * @returns {Object}
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CyberWiki Hub',
    url: 'https://cyberwiki.app',
    logo: {
      '@type': 'ImageObject',
      url: 'https://cyberwiki.app/icon-512.png',
      width: 512,
      height: 512
    },
    sameAs: [
      'https://twitter.com/cyberwiki',
      'https://github.com/cyberwiki'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'Spanish'
    }
  };
}

/**
 * Generate Article schema
 * @param {Object} article
 * @returns {Object}
 */
export function generateArticleSchema(article) {
  return {
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
    keywords: article.tags?.join(', ') || '',
    articleSection: article.category,
    inLanguage: 'es',
    about: {
      '@type': 'Thing',
      name: 'Ciberseguridad'
    }
  };
}

/**
 * Generate BreadcrumbList schema
 * @param {Array} items - [{name, url}]
 * @returns {Object}
 */
export function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Generate FAQPage schema
 * @param {Array} faqs - [{question, answer}]
 * @returns {Object}
 */
export function generateFAQSchema(faqs) {
  return {
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
}

/**
 * Generate HowTo schema
 * @param {Object} howto - {name, description, steps, image}
 * @returns {Object}
 */
export function generateHowToSchema(howto) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howto.name,
    description: howto.description,
    image: howto.image,
    totalTime: howto.totalTime,
    step: howto.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
      url: step.url
    })),
    tool: howto.tools?.map(tool => ({
      '@type': 'HowToTool',
      name: tool
    })),
    supply: howto.supplies?.map(supply => ({
      '@type': 'HowToSupply',
      name: supply
    }))
  };
}

/**
 * Generate ItemList schema (for lists of articles)
 * @param {string} name
 * @param {Array} items
 * @returns {Object}
 */
export function generateItemListSchema(name, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: name,
    numberOfItems: items.length,
    itemListElement: items.slice(0, 10).map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://cyberwiki.app/articles/${item.id}`,
      name: item.title
    }))
  };
}

/**
 * Generate Course schema (for learning paths)
 * @param {Object} path
 * @returns {Object}
 */
export function generateCourseSchema(path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: path.name,
    description: path.description,
    provider: {
      '@type': 'Organization',
      name: 'CyberWiki Hub',
      url: 'https://cyberwiki.app'
    },
    inLanguage: 'es',
    isAccessibleForFree: true,
    coursePrerequisites: path.prerequisites,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: path.workload
    }
  };
}

/**
 * Generate SoftwareApplication schema (for tools)
 * @param {Object} tool
 * @returns {Object}
 */
export function generateSoftwareApplicationSchema(tool) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description,
    applicationCategory: 'SecurityApplication',
    operatingSystem: tool.os || 'Cross-platform',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };
}

/**
 * Generate TechArticle schema (for technical articles)
 * @param {Object} article
 * @returns {Object}
 */
export function generateTechArticleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.summary,
    author: {
      '@type': 'Organization',
      name: 'CyberWiki Hub'
    },
    publisher: {
      '@type': 'Organization',
      name: 'CyberWiki Hub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cyberwiki.app/icon-512.png'
      }
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntityOfPage: `https://cyberwiki.app/articles/${article.id}`,
    keywords: article.tags?.join(', '),
    proficiencyLevel: article.difficulty,
    dependencies: article.dependencies,
    inLanguage: 'es'
  };
}

/**
 * Generate WebPage schema
 * @param {Object} page
 * @returns {Object}
 */
export function generateWebPageSchema(page) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: `https://cyberwiki.app/${page.slug}`,
    inLanguage: 'es',
    isPartOf: {
      '@type': 'WebSite',
      name: 'CyberWiki Hub',
      url: 'https://cyberwiki.app'
    },
    about: {
      '@type': 'Thing',
      name: page.topic || 'Ciberseguridad'
    },
    primaryImageOfPage: page.image,
    datePublished: page.datePublished || new Date().toISOString(),
    dateModified: page.dateModified || new Date().toISOString()
  };
}

/**
 * Inject structured data into page
 * @param {Object} schema
 */
export function injectStructuredData(schema) {
  // Remove existing schema with same @type
  const existing = document.querySelectorAll('script[type="application/ld+json"]');
  existing.forEach(script => {
    try {
      const data = JSON.parse(script.textContent);
      if (data['@type'] === schema['@type']) {
        script.remove();
      }
    } catch (e) {}
  });

  // Add new schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema, null, 2);
  document.head.appendChild(script);
}

/**
 * Validate structured data
 * @param {Object} schema
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateStructuredData(schema) {
  const errors = [];

  if (!schema['@context']) {
    errors.push('Missing @context');
  }

  if (!schema['@type']) {
    errors.push('Missing @type');
  }

  // Type-specific validation
  switch (schema['@type']) {
    case 'Article':
    case 'TechArticle':
      if (!schema.headline) errors.push('Missing headline');
      if (!schema.author) errors.push('Missing author');
      if (!schema.publisher) errors.push('Missing publisher');
      break;

    case 'BreadcrumbList':
      if (!Array.isArray(schema.itemListElement)) {
        errors.push('itemListElement must be an array');
      }
      break;

    case 'FAQPage':
      if (!Array.isArray(schema.mainEntity)) {
        errors.push('mainEntity must be an array');
      }
      break;

    case 'HowTo':
      if (!schema.name) errors.push('Missing name');
      if (!Array.isArray(schema.step)) {
        errors.push('step must be an array');
      }
      break;
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Generate all schemas for initial page load
 * @returns {Array} Array of schema objects
 */
export function generateInitialSchemas() {
  return [
    generateWebSiteSchema(),
    generateOrganizationSchema()
  ];
}
