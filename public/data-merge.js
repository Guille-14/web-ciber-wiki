// Data merge - combines all data sources into WIKI_DATA
// Data files are loaded as global scripts for performance (39K+ lines)
// main.js reads them from window.* globals

(function() {
  const core = window.WIKI_DATA_CORE || { categories: [], articles: [] };
  const github = window.WIKI_DATA_GITHUB || [];
  const htb = window.WIKI_DATA_HTB || [];
  const glossary = window.WIKI_DATA_GLOSSARY || [];
  const cheatsheets = window.WIKI_DATA_CHEATSHEETS || [];
  const owaspTop10 = window.WIKI_DATA_OWASP || [];

  window.WIKI_DATA = {
    categories: core.categories,
    articles: core.articles.concat(github, htb),
    glossary,
    cheatsheets,
    owaspTop10
  };
})();
