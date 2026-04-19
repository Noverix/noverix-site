const translations = {
  en: {
    heroEyebrow: 'Holding company for digital growth',
    heroTitle: 'Simple AI. Strong digital services. Future ventures.',
    heroText:
      'Noverix builds and supports modern digital initiatives with practical execution, clear strategy, and long-term value.',
    heroPrimary: 'Explore focus areas',
    heroSecondary: 'Get in touch',
    aboutTitle: 'About',
    aboutText:
      'We are a focused holding company investing in and operating practical digital businesses. Our approach is fast, lean, and driven by outcomes.',
    focusTitle: 'Focus areas',
    focus1Title: 'Simple AI solutions',
    focus1Text: 'Useful AI integrations that solve real business problems.',
    focus2Title: 'Digital services',
    focus2Text: 'Reliable products, operations, and service delivery for digital teams.',
    focus3Title: 'Future digital ventures',
    focus3Text: 'New opportunities built for the next generation of online value.',
    supportTitle: 'Who we support',
    supportText:
      'Founders, operators, and businesses seeking practical innovation without unnecessary complexity.',
    statusTitle: 'Current status',
    statusText:
      'Noverix is actively developing projects and partnerships. We are open to strategic collaborations.',
    contactTitle: 'Contact',
    contactText: 'Let’s discuss opportunities and digital growth goals.',
    contactButton: 'contact@noverix.com'
  },
  pt: {
    heroEyebrow: 'Holding para crescimento digital',
    heroTitle: 'IA simples. Serviços digitais sólidos. Ventures futuras.',
    heroText:
      'A Noverix cria e apoia iniciativas digitais modernas com execução prática, estratégia clara e valor de longo prazo.',
    heroPrimary: 'Explorar áreas de foco',
    heroSecondary: 'Fale conosco',
    aboutTitle: 'Sobre',
    aboutText:
      'Somos uma holding focada em investir e operar negócios digitais práticos. Nossa abordagem é rápida, enxuta e orientada a resultados.',
    focusTitle: 'Áreas de foco',
    focus1Title: 'Soluções de IA simples',
    focus1Text: 'Integrações úteis de IA que resolvem problemas reais de negócio.',
    focus2Title: 'Serviços digitais',
    focus2Text: 'Produtos, operações e entrega de serviços confiáveis para equipes digitais.',
    focus3Title: 'Ventures digitais futuras',
    focus3Text: 'Novas oportunidades construídas para a próxima geração de valor online.',
    supportTitle: 'Quem apoiamos',
    supportText:
      'Fundadores, operadores e empresas que buscam inovação prática sem complexidade desnecessária.',
    statusTitle: 'Status atual',
    statusText:
      'A Noverix está desenvolvendo projetos e parcerias ativamente. Estamos abertos a colaborações estratégicas.',
    contactTitle: 'Contato',
    contactText: 'Vamos conversar sobre oportunidades e metas de crescimento digital.',
    contactButton: 'contact@noverix.com'
  },
  fr: {
    heroEyebrow: 'Holding dédiée à la croissance digitale',
    heroTitle: 'IA simple. Services digitaux solides. Ventures futures.',
    heroText:
      'Noverix construit et soutient des initiatives digitales modernes avec une exécution pragmatique, une stratégie claire et une valeur durable.',
    heroPrimary: 'Découvrir nos axes',
    heroSecondary: 'Nous contacter',
    aboutTitle: 'À propos',
    aboutText:
      'Nous sommes une holding ciblée qui investit dans des activités digitales concrètes et les opère. Notre approche est rapide, lean et orientée résultats.',
    focusTitle: 'Axes de focus',
    focus1Title: 'Solutions IA simples',
    focus1Text: 'Des intégrations IA utiles qui résolvent des problèmes business réels.',
    focus2Title: 'Services digitaux',
    focus2Text: 'Produits, opérations et exécution de services fiables pour les équipes digitales.',
    focus3Title: 'Ventures digitales futures',
    focus3Text: 'De nouvelles opportunités construites pour la prochaine génération de valeur en ligne.',
    supportTitle: 'Qui nous accompagnons',
    supportText:
      'Fondateurs, opérateurs et entreprises qui recherchent une innovation pragmatique sans complexité inutile.',
    statusTitle: 'Statut actuel',
    statusText:
      'Noverix développe activement des projets et des partenariats. Nous sommes ouverts aux collaborations stratégiques.',
    contactTitle: 'Contact',
    contactText: 'Parlons de vos opportunités et objectifs de croissance digitale.',
    contactButton: 'contact@noverix.com'
  }
};

const langButtons = document.querySelectorAll('.lang-btn');
const i18nElements = document.querySelectorAll('[data-i18n]');

function applyLanguage(lang) {
  const selected = translations[lang] || translations.en;

  i18nElements.forEach((el) => {
    const key = el.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(selected, key)) {
      el.textContent = selected[key];
    }
  });

  document.documentElement.lang = lang;

  langButtons.forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

document.getElementById('year').textContent = new Date().getFullYear();
