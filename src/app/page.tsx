"use client";

import { useEffect, useState } from "react";
import { AvelixAppPreview } from "@/components/avelix-app-preview";
import Image from "next/image";

type Locale = "pt" | "en" | "fr";

const localeOptions: { locale: Locale; label: string }[] = [
  { locale: "en", label: "EN" },
  { locale: "pt", label: "PT" },
  { locale: "fr", label: "FR" },
];

const storageKey = "noverix-language";

const translations = {
  pt: {
    header: { logoLabel: "Noverix inicio" },
    nav: { about: "Sobre", services: "Serviços", products: "Produtos", team: "Equipe", contact: "Contato" },
    hero: {
      eyebrow: "Tecnologia para pequenas empresas",
      title: "Seu negócio merece uma aplicação web sob medida.",
      text: "Desenvolvemos aplicações web personalizadas para micro e pequenas empresas — com suporte contínuo, sem complicação, com resultado real.",
      primaryCta: "Começar agora",
      secondaryCta: "Ver nossos produtos →",
      signals: [
        { value: "3", label: "Fundadores especialistas" },
        { value: "15+", label: "Anos de experiência" },
        { value: "100%", label: "Foco em PMEs" },
      ],
      panel: {
        label: "Como trabalhamos",
        title: "Criado para lançar, apoiar e crescer o seu negócio.",
        points: [
          { title: "Desenvolvimento sob medida", text: "Aplicações web construídas para o seu fluxo de trabalho e problema de negócio." },
          { title: "Suporte mensal", text: "Manutenção contínua que mantém seu app seguro, atualizado e evoluindo." },
          { title: "Segurança desde o início", text: "Nossa base em cibersegurança garante que cada app é seguro desde o primeiro dia." },
        ],
      },
    },
    about: {
      kicker: "Sobre a Noverix",
      title: "Tecnologia que simplifica, não complica.",
      text: "A Noverix nasceu de uma ideia simples: pequenas empresas merecem as mesmas ferramentas digitais que as grandes — sem burocracia, sem custo excessivo, sem suporte que some após a entrega.",
      support: {
        title: "Quem atendemos",
        text: "Trabalhamos melhor com empresas que precisam de soluções digitais rápidas, eficientes e acessíveis.",
        points: [
          "Micro e pequenas empresas que precisam de apps personalizados",
          "Equipes que querem suporte técnico contínuo e confiável",
          "Empresas que buscam automatizar e crescer digitalmente",
        ],
      },
    },
    services: {
      kicker: "O que oferecemos",
      title: "Serviços feitos para resolver problemas reais",
      intro: "Da criação da sua primeira aplicação web à segurança da infraestrutura cloud — cobrimos toda a jornada.",
      items: [
        { title: "Desenvolvimento de Aplicações Web", text: "Apps web sob medida, criados do zero — design moderno, fácil de usar e preparado para crescer com o seu negócio." },
        { title: "Suporte e Manutenção Mensal", text: "Planos contínuos que mantêm sua aplicação funcionando, atualizada e segura. Seu app cresce junto com seu negócio." },
        { title: "Migração e Infraestrutura Cloud", text: "Leve seu negócio para a nuvem com segurança. Configuramos ambientes Azure/AWS otimizados para performance e custo." },
        { title: "Integração de IA Aplicada", text: "Incorporamos IA nas suas ferramentas de forma prática — automações, análise de dados e processos mais inteligentes." },
        { title: "Consultoria em Cibersegurança", text: "Avaliamos e fortalecemos a postura de segurança da sua empresa. Proteção de dados, identidade e acesso com expertise certificada." },
        { title: "Automação de Processos", text: "Eliminamos tarefas manuais e repetitivas do seu dia a dia — liberando sua equipe para o que realmente importa." },
      ],
    },
    model: {
      kicker: "Como funciona",
      title: "Do problema à solução em produção",
      text: "Um processo claro, sem surpresas. Da primeira conversa ao suporte contínuo — tudo incluso.",
      steps: [
        { title: "Diagnóstico gratuito", text: "Entendemos o seu problema, o fluxo do negócio e o que você precisa resolver. Sem custo, sem compromisso." },
        { title: "Desenvolvimento ágil", text: "Construímos sua aplicação com entregas incrementais. Você acompanha e valida cada etapa." },
        { title: "Entrega + Suporte mensal", text: "Sua aplicação vai ao ar. Um plano de suporte mensal garante evolução contínua, correções e segurança." },
      ],
    },
    products: {
      kicker: "Nossos produtos",
      title: "Soluções que já estão no ar",
      intro: "Além de projetos personalizados, a Noverix desenvolve seus próprios produtos — ferramentas reais para necessidades reais.",
      avelix: {
        kicker: "Produto oficial",
        text: "Nossa primeira aplicação web oficial — uma plataforma que demonstra o potencial das soluções Noverix para pequenas empresas. Um produto real, funcional, entregue.",
        features: [
          "Aplicação web completa e responsiva",
          "Interface moderna e intuitiva",
          "Infraestrutura cloud segura",
          "Suporte e evolução contínua",
          "Modelo de negócio com receita recorrente via suporte mensal",
        ],
        cta: "Visitar Avelix →",
      },
    },
    founders: {
      kicker: "A equipe",
      title: "Os fundadores por trás da Noverix",
      intro: "Uma equipe trilíngue de especialistas em tecnologia, com décadas de experiência combinada em grandes organizações no Canadá e no Brasil.",
      people: [
        { role: "Co-fundador · Segurança de Identidade", bio: "Especialista em IAM com experiência em ambientes Azure de grande escala no setor público e de saúde do Canadá. Protegeu mais de 330.000 funcionários da rede de saúde do Québec via SSO e Microsoft Entra ID. Certificado ITIL V4 e Microsoft Applied Skills." },
        { role: "Co-fundador · Segurança Cloud", bio: "Senior Cloud Security Advisor com mais de 10 anos em ambientes Azure críticos para SAAQ, iA Financial Group e Ville de Laval. Gerenciou mais de 400 assinaturas Azure. Certificações: AZ-500, AZ-305, CompTIA Security+, ISO 27002." },
        { role: "Co-fundadora · Engenharia & AppSec", bio: "Engenheira de segurança cloud com 15+ anos em transformação digital segura nos setores de governo, finanças e seguros. Na Intact, reduziu o tempo de detecção de vulnerabilidades de 4 horas para 20 minutos. Trilíngue: EN / FR / PT." },
      ],
    },
    status: {
      label: "Status atual",
      title: "Construindo e fazendo parcerias com intenção.",
      text: "A Noverix está desenvolvendo projetos e parcerias ativamente no Brasil e no Canadá. Nossa equipe trilíngue fala Português, Inglês e Francês.",
    },
    contact: {
      label: "Contato",
      title: "Pronto para começar?",
      text: "Diagnóstico inicial gratuito — sem compromisso. Nos conta o seu problema e encontramos a solução certa.",
      button: "contact@noverix.com",
    },
    footer: { tagline: "Tecnologia que simplifica o seu negócio.", rights: "Todos os direitos reservados." },
    comingSoon: "Em breve",
  },
  en: {
    header: { logoLabel: "Noverix home" },
    nav: { about: "About", services: "Services", products: "Products", team: "Team", contact: "Contact" },
    hero: {
      eyebrow: "Technology for small businesses",
      title: "Your business deserves a custom web application.",
      text: "We build tailor-made web applications for micro and small businesses — with ongoing support, no complexity, and real results.",
      primaryCta: "Start now",
      secondaryCta: "See our products →",
      signals: [
        { value: "3", label: "Expert founders" },
        { value: "15+", label: "Years combined" },
        { value: "100%", label: "Focus on SMEs" },
      ],
      panel: {
        label: "How we work",
        title: "Built to launch, support, and grow your business.",
        points: [
          { title: "Custom development", text: "Web applications built for your exact workflow and business problem." },
          { title: "Monthly support", text: "Ongoing maintenance that keeps your app secure, updated, and evolving." },
          { title: "Built-in security", text: "Our cybersecurity background means every app is secure from day one." },
        ],
      },
    },
    about: {
      kicker: "About Noverix",
      title: "Technology that simplifies, not complicates.",
      text: "Noverix was born from a simple idea: small businesses deserve the same digital tools as large ones — without bureaucracy, excessive cost, or support that disappears after delivery.",
      support: {
        title: "Who we serve",
        text: "We work best with small businesses that need fast, efficient, and accessible digital solutions.",
        points: [
          "Micro and small businesses needing custom apps",
          "Teams that want reliable, ongoing technical support",
          "Businesses looking to automate and grow digitally",
        ],
      },
    },
    services: {
      kicker: "What we offer",
      title: "Services built to solve real problems",
      intro: "From building your first web application to securing your cloud infrastructure — we cover the full journey.",
      items: [
        { title: "Custom Web Application Development", text: "Tailor-made web apps built from scratch — modern design, easy to use, and built to scale with your business." },
        { title: "Monthly Support & Maintenance", text: "Ongoing plans that keep your application running, updated, and secure. Your app grows as your business grows." },
        { title: "Cloud Migration & Infrastructure", text: "Move your business to the cloud safely. We configure optimized Azure/AWS environments for performance and cost efficiency." },
        { title: "Applied AI Integration", text: "We embed AI into your tools practically — automations, data analysis, and smarter business processes." },
        { title: "Cybersecurity Consulting", text: "We assess and strengthen your security posture. Data protection, identity, and access management with certified expertise." },
        { title: "Process Automation", text: "We eliminate manual, repetitive tasks from your daily workflow — freeing your team to focus on what truly matters." },
      ],
    },
    model: {
      kicker: "How it works",
      title: "From problem to live solution",
      text: "A clear process, no surprises. From the first conversation to ongoing support — everything included.",
      steps: [
        { title: "Free diagnosis", text: "We understand your problem, your business flow, and what you need to solve. No cost, no commitment." },
        { title: "Agile development", text: "We build your web application with incremental deliveries. You follow and validate each step." },
        { title: "Launch + Monthly support", text: "Your app goes live. A monthly support plan ensures continuous evolution, fixes, and ongoing security." },
      ],
    },
    products: {
      kicker: "Our products",
      title: "Solutions already live",
      intro: "Beyond custom projects, Noverix builds its own products — real tools for real needs.",
      avelix: {
        kicker: "Official product",
        text: "Our first official web application — a platform that showcases the potential of Noverix solutions for small businesses. A real, functional product, delivered.",
        features: [
          "Complete and responsive web application",
          "Modern and intuitive interface",
          "Secure cloud infrastructure",
          "Continuous support and evolution",
          "Business model with recurring revenue via monthly support",
        ],
        cta: "Visit Avelix →",
      },
    },
    founders: {
      kicker: "The team",
      title: "The founders behind Noverix",
      intro: "A trilingual team of technology specialists with decades of combined experience in large organizations across Canada and Brazil.",
      people: [
        { role: "Co-founder · Identity Security", bio: "IAM specialist with experience in large-scale Azure environments in Canada's public and healthcare sectors. Secured over 330,000 employees in Québec's health network via SSO and Microsoft Entra ID. Certified ITIL V4 and Microsoft Applied Skills." },
        { role: "Co-founder · Cloud Security", bio: "Senior Cloud Security Advisor with 10+ years in critical Azure environments for SAAQ, iA Financial Group, and Ville de Laval. Managed 400+ Azure subscriptions. Certifications: AZ-500, AZ-305, CompTIA Security+, ISO 27002." },
        { role: "Co-founder · Engineering & AppSec", bio: "Cloud security engineer with 15+ years in secure digital transformation across government, finance, and insurance. At Intact, reduced vulnerability detection from 4 hours to 20 minutes. Trilingual: EN / FR / PT." },
      ],
    },
    status: {
      label: "Current status",
      title: "Building and partnering intentionally.",
      text: "Noverix is actively developing projects and partnerships across Brazil and Canada. Our trilingual team speaks Portuguese, English, and French.",
    },
    contact: {
      label: "Contact",
      title: "Ready to start?",
      text: "Free initial diagnosis — no commitment. Tell us your problem and we will find the right solution.",
      button: "contact@noverix.com",
    },
    footer: { tagline: "Technology that simplifies your business.", rights: "All rights reserved." },
    comingSoon: "Coming soon",
  },
  fr: {
    header: { logoLabel: "Noverix accueil" },
    nav: { about: "À propos", services: "Services", products: "Produits", team: "Équipe", contact: "Contact" },
    hero: {
      eyebrow: "Technologie pour les petites entreprises",
      title: "Votre entreprise mérite une application web sur mesure.",
      text: "Nous développons des applications web personnalisées pour les micro et petites entreprises — avec un support continu, sans complexité, avec de vrais résultats.",
      primaryCta: "Commencer maintenant",
      secondaryCta: "Voir nos produits →",
      signals: [
        { value: "3", label: "Fondateurs experts" },
        { value: "15+", label: "Années combinées" },
        { value: "100%", label: "Focus PME" },
      ],
      panel: {
        label: "Notre approche",
        title: "Conçu pour lancer, soutenir et faire croître votre entreprise.",
        points: [
          { title: "Développement sur mesure", text: "Applications web construites pour votre flux de travail et vos besoins métier." },
          { title: "Support mensuel", text: "Maintenance continue qui garde votre app sécurisée, à jour et en évolution." },
          { title: "Sécurité intégrée", text: "Notre expertise en cybersécurité garantit que chaque app est sécurisée dès le premier jour." },
        ],
      },
    },
    about: {
      kicker: "À propos de Noverix",
      title: "Une technologie qui simplifie, pas qui complique.",
      text: "Noverix est né d'une idée simple : les petites entreprises méritent les mêmes outils numériques que les grandes — sans bureaucratie, sans coût excessif, sans support qui disparaît après la livraison.",
      support: {
        title: "Qui nous servons",
        text: "Nous travaillons au mieux avec les petites entreprises qui ont besoin de solutions numériques rapides, efficaces et accessibles.",
        points: [
          "Micro et petites entreprises ayant besoin d'apps sur mesure",
          "Équipes qui veulent un support technique fiable et continu",
          "Entreprises cherchant à automatiser et à croître numériquement",
        ],
      },
    },
    services: {
      kicker: "Ce que nous offrons",
      title: "Des services conçus pour résoudre de vrais problèmes",
      intro: "De la création de votre première application web à la sécurisation de votre infrastructure cloud — nous couvrons tout le parcours.",
      items: [
        { title: "Développement d'Applications Web", text: "Applications web sur mesure, créées de zéro — design moderne, facile à utiliser, prêt à évoluer avec votre entreprise." },
        { title: "Support et Maintenance Mensuelle", text: "Des plans continus qui maintiennent votre application en marche, à jour et sécurisée. Votre app grandit avec votre entreprise." },
        { title: "Migration et Infrastructure Cloud", text: "Migrez vers le cloud en toute sécurité. Nous configurons des environnements Azure/AWS optimisés pour la performance et les coûts." },
        { title: "Intégration IA Appliquée", text: "Nous intégrons l'IA à vos outils de façon concrète — automatisations, analyse de données et processus plus intelligents." },
        { title: "Conseil en Cybersécurité", text: "Nous évaluons et renforçons la posture de sécurité de votre entreprise. Protection des données, identité et gestion des accès." },
        { title: "Automatisation des Processus", text: "Nous éliminons les tâches manuelles et répétitives de votre quotidien — libérant votre équipe pour ce qui compte vraiment." },
      ],
    },
    model: {
      kicker: "Comment ça fonctionne",
      title: "Du problème à la solution en production",
      text: "Un processus clair, sans surprises. De la première conversation au support continu — tout inclus.",
      steps: [
        { title: "Diagnostic gratuit", text: "Nous comprenons votre problème, votre flux métier et ce que vous devez résoudre. Sans frais, sans engagement." },
        { title: "Développement agile", text: "Nous construisons votre application avec des livraisons incrémentielles. Vous suivez et validez chaque étape." },
        { title: "Lancement + Support mensuel", text: "Votre app est mise en ligne. Un plan de support mensuel assure l'évolution continue, les corrections et la sécurité." },
      ],
    },
    products: {
      kicker: "Nos produits",
      title: "Des solutions déjà en ligne",
      intro: "Au-delà des projets sur mesure, Noverix développe ses propres produits — de vrais outils pour de vrais besoins.",
      avelix: {
        kicker: "Produit officiel",
        text: "Notre première application web officielle — une plateforme qui démontre le potentiel des solutions Noverix pour les petites entreprises. Un produit réel, fonctionnel, livré.",
        features: [
          "Application web complète et responsive",
          "Interface moderne et intuitive",
          "Infrastructure cloud sécurisée",
          "Support et évolution continus",
          "Modèle économique avec revenus récurrents via le support mensuel",
        ],
        cta: "Visiter Avelix →",
      },
    },
    founders: {
      kicker: "L'équipe",
      title: "Les fondateurs derrière Noverix",
      intro: "Une équipe trilingue de spécialistes en technologie avec des décennies d'expérience combinée dans de grandes organisations au Canada et au Brésil.",
      people: [
        { role: "Co-fondateur · Sécurité des identités", bio: "Spécialiste IAM avec une expérience dans des environnements Azure à grande échelle dans les secteurs public et de la santé au Canada. A sécurisé plus de 330 000 employés du réseau de santé du Québec via SSO et Microsoft Entra ID." },
        { role: "Co-fondateur · Sécurité Cloud", bio: "Conseiller senior en sécurité cloud avec 10+ ans dans des environnements Azure critiques pour la SAAQ, iA Groupe Financier et la Ville de Laval. A géré plus de 400 abonnements Azure. Certifications : AZ-500, AZ-305, CompTIA Security+, ISO 27002." },
        { role: "Co-fondatrice · Ingénierie & AppSec", bio: "Ingénieure en sécurité cloud avec 15+ ans en transformation numérique sécurisée dans les secteurs gouvernemental, financier et des assurances. Chez Intact, a réduit le temps de détection des vulnérabilités de 4 heures à 20 minutes. Trilingue : EN / FR / PT." },
      ],
    },
    status: {
      label: "Statut actuel",
      title: "Construire et collaborer avec intention.",
      text: "Noverix développe activement des projets et des partenariats au Brésil et au Canada. Notre équipe trilingue parle le portugais, l'anglais et le français.",
    },
    contact: {
      label: "Contact",
      title: "Prêt à commencer ?",
      text: "Diagnostic initial gratuit — sans engagement. Parlez-nous de votre problème et nous trouverons la bonne solution.",
      button: "contact@noverix.com",
    },
    footer: { tagline: "Une technologie qui simplifie votre entreprise.", rights: "Tous droits réservés." },
    comingSoon: "Bientôt disponible",
  },
} satisfies Record<
  Locale,
  {
    header: { logoLabel: string };
    nav: { about: string; services: string; products: string; team: string; contact: string };
    hero: {
      eyebrow: string;
      title: string;
      text: string;
      primaryCta: string;
      secondaryCta: string;
      signals: { value: string; label: string }[];
      panel: { label: string; title: string; points: { title: string; text: string }[] };
    };
    about: {
      kicker: string;
      title: string;
      text: string;
      support: { title: string; text: string; points: string[] };
    };
    services: { kicker: string; title: string; intro: string; items: { title: string; text: string }[] };
    model: { kicker: string; title: string; text: string; steps: { title: string; text: string }[] };
    products: {
      kicker: string;
      title: string;
      intro: string;
      avelix: { kicker: string; text: string; features: string[]; cta: string };
    };
    founders: { kicker: string; title: string; intro: string; people: { role: string; bio: string }[] };
    status: { label: string; title: string; text: string };
    contact: { label: string; title: string; text: string; button: string };
    footer: { tagline: string; rights: string };
    comingSoon: string;
  }
>;

type Copy = (typeof translations)[Locale];

const founders = [
  {
    initials: "AF",
    name: "Antonio Ferreira",
    linkedin: "https://www.linkedin.com/in/antoniofos/",
    tags: ["Azure AD", "IAM", "SSO / OAuth2", "PowerShell"],
  },
  {
    initials: "FN",
    name: "Fabiano N. Costa",
    linkedin: "https://www.linkedin.com/in/costa-fabiano/",
    tags: ["Azure Security", "CSPM", "Zero Trust"],
  },
  {
    initials: "HR",
    name: "Heloisa R.",
    linkedin: "https://www.linkedin.com/in/hel-isa/",
    tags: ["Application Security", "AI", "DevSecOps", "Shift Left Security"],
  },
];

const surfaceCard =
  "rounded-[28px] border border-[var(--nv-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,250,255,0.96))] shadow-[0_24px_60px_rgba(0,0,0,0.5)] backdrop-blur-[14px] text-[var(--nv-text-strong)]";

const surfaceHover =
  "transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nv-accent)] hover:shadow-[0_0_30px_rgba(0,229,229,0.15)]";

function splitSentences(text: string): string[] {
  return text.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map((part) => part.trim()) ?? [text];
}

function NoverixMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="nv-mark-stroke" x1="10" y1="10" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#57D9FF" />
          <stop offset="1" stopColor="#1DB5D9" />
        </linearGradient>
      </defs>
      <path d="M12 31V13L22.2 26V13H25.8V31L15.6 18V31H12Z" fill="#10233D" />
      <path d="M29.7 31V13H33.3V24.2L37 21.8V25.7L33.3 28.1V31H29.7Z" fill="url(#nv-mark-stroke)" />
      <path d="M29.7 17.2L37 12.4V16.3L29.7 21V17.2Z" fill="#7BE8FF" opacity="0.82" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function Header({
  copy,
  locale,
  onLocaleChange,
}: {
  copy: Copy;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}) {
  const navItems: { href: string; label: string }[] = [
    { href: "#about", label: copy.nav.about },
    { href: "#services", label: copy.nav.services },
    { href: "#produtos", label: copy.nav.products },
    { href: "#founders", label: copy.nav.team },
    { href: "#contact", label: copy.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 px-4 pt-3 sm:px-6">
      <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between gap-3 rounded-[30px] border border-[rgba(16,35,61,0.1)] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(237,245,255,0.94))] px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.25)] backdrop-blur-[18px] sm:px-5">
        <a href="#" aria-label={copy.header.logoLabel}>
          <Image
            src="https://394c556d9094713a744256daecd60163.r2.cloudflarestorage.com/noverix-assets/logo/noverix-logo-no-background.png"
            alt="Noverix"
            width={142}
            height={36}
            priority
            unoptimized
            className="h-20 w-auto object-contain"
          />
        </a>

        <nav
          aria-label="Primary"
          className="order-3 flex w-full flex-wrap justify-center gap-1 rounded-full border border-[rgba(16,35,61,0.08)] bg-white/75 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:gap-1.5 md:order-none md:w-auto"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2.5 text-sm font-semibold text-[#4d6282] transition hover:bg-[var(--nv-brand-navy)] hover:text-white sm:px-4"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1.5 rounded-full border border-[rgba(16,35,61,0.08)] bg-white/70 p-1 shadow-[0_8px_16px_rgba(16,35,61,0.08)]">
          {localeOptions.map((option) => (
            <button
              key={option.locale}
              type="button"
              onClick={() => onLocaleChange(option.locale)}
              aria-pressed={locale === option.locale}
              className={`min-w-[46px] rounded-full px-3 py-2 text-sm font-bold transition ${
                locale === option.locale
                  ? "bg-[var(--nv-brand-navy)] text-white shadow-[0_10px_20px_rgba(16,35,61,0.3)]"
                  : "text-[#667b99] hover:bg-white"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

function Hero({ copy }: { copy: Copy }) {
  return (
    <section id="hero" className="relative px-4 pt-14 pb-8 sm:px-6">
      <div className="mx-auto grid max-w-[1140px] items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="py-6">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--nv-accent)]">
            {copy.hero.eyebrow}
          </p>
          <h1 className="nv-heading mb-4 text-4xl leading-[1.03] font-bold sm:text-5xl">
            {splitSentences(copy.hero.title).map((sentence, index) => (
              <span key={sentence} className={`block ${index > 0 ? "mt-1" : ""}`}>
                {sentence}
              </span>
            ))}
          </h1>
          <p className="max-w-[60ch] text-lg text-[var(--nv-text-muted)]">{copy.hero.text}</p>
          <div className="mt-7 mb-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-gradient-to-br from-[var(--nv-accent-soft)] to-[var(--nv-accent)] px-6 font-extrabold text-[#0b0f15] shadow-[0_10px_25px_var(--nv-accent-glow)] transition hover:-translate-y-0.5"
            >
              {copy.hero.primaryCta}
            </a>
            <a
              href="#produtos"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[rgba(16,35,61,0.12)] bg-white/95 px-6 font-extrabold text-[var(--nv-brand-navy)] shadow-[0_12px_24px_rgba(16,35,61,0.08)] transition hover:-translate-y-0.5"
            >
              {copy.hero.secondaryCta}
            </a>
          </div>
          <div className="grid max-w-[760px] grid-cols-3 gap-3">
            {copy.hero.signals.map((signal) => (
              <div
                key={signal.label}
                className="rounded-2xl border border-[rgba(95,129,174,0.12)] bg-white/70 p-4 text-[var(--nv-text-strong)]"
              >
                <strong className="mb-1 block text-base">{signal.value}</strong>
                <span className="text-sm text-[var(--nv-text-muted-strong)]">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>
        <aside className={`${surfaceCard} relative overflow-hidden p-6`}>
          <div className="pointer-events-none absolute -right-12 -bottom-12 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(215,146,50,0.14),transparent_66%)]" />
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--nv-accent)]">
            {copy.hero.panel.label}
          </p>
          <h2 className="nv-heading mb-4 text-2xl font-bold">{copy.hero.panel.title}</h2>
          <div className="grid gap-4">
            {copy.hero.panel.points.map((point, index) => (
              <article
                key={point.title}
                className={`grid grid-cols-[auto_1fr] gap-4 py-4 ${
                  index === 0 ? "border-t-0 pt-1" : "border-t border-[rgba(95,129,174,0.14)]"
                }`}
              >
                <span className="nv-heading min-w-10 pt-0.5 text-sm font-bold text-[var(--nv-accent-warm)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="nv-heading mb-1 text-lg font-bold">{point.title}</h3>
                  <p className="text-sm text-[var(--nv-text-muted-strong)]">{point.text}</p>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function AboutSection({ copy }: { copy: Copy }) {
  return (
    <section id="about" className="px-4 py-8 sm:px-6">
      <div className="mx-auto grid max-w-[1140px] gap-5 md:grid-cols-2">
        <article className={`${surfaceCard} min-h-[280px] p-7`}>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--nv-accent)]">
            {copy.about.kicker}
          </p>
          <h2 className="nv-heading mb-4 text-3xl font-bold">{copy.about.title}</h2>
          <p className="text-[var(--nv-text-muted-strong)]">{copy.about.text}</p>
        </article>
        <article className={`${surfaceCard} p-7`}>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--nv-accent)]">
            {copy.about.support.title}
          </p>
          <p className="text-[var(--nv-text-muted-strong)]">{copy.about.support.text}</p>
          <div className="mt-6 grid gap-3">
            {copy.about.support.points.map((point) => (
              <div
                key={point}
                className="relative rounded-2xl border border-[rgba(95,129,174,0.12)] bg-[rgba(248,251,255,0.94)] py-4 pr-4 pl-12 text-[var(--nv-text-muted-strong)]"
              >
                <span className="absolute top-1/2 left-4 h-[1.15rem] w-[1.15rem] -translate-y-1/2 rounded-full bg-gradient-to-br from-[var(--nv-accent)] to-[var(--nv-accent-soft)] shadow-[0_0_18px_rgba(29,119,216,0.14)]" />
                {point}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function SectionIntro({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <div className="mx-auto mb-6 max-w-[1140px] px-4 sm:px-6">
      <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--nv-accent)]">{kicker}</p>
      <h2 className="nv-heading mb-3 text-3xl font-bold">{title}</h2>
      <p className="max-w-[70ch] text-[var(--nv-text-muted)]">{text}</p>
    </div>
  );
}

function ServicesSection({ copy }: { copy: Copy }) {
  return (
    <section id="services" className="py-8">
      <SectionIntro kicker={copy.services.kicker} title={copy.services.title} text={copy.services.intro} />
      <div className="mx-auto grid max-w-[1140px] gap-4 px-4 sm:px-6 md:grid-cols-2">
        {copy.services.items.map((item, index) => (
          <article key={item.title} className={`${surfaceCard} ${surfaceHover} min-h-[240px] p-6`}>
            <span className="nv-heading mb-8 block text-sm font-bold tracking-[0.12em] text-[var(--nv-accent-warm)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="nv-heading mb-2 text-xl font-bold">{item.title}</h3>
            <p className="text-[var(--nv-text-muted-strong)]">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ModelSection({ copy }: { copy: Copy }) {
  return (
    <section id="model" className="py-8">
      <SectionIntro kicker={copy.model.kicker} title={copy.model.title} text={copy.model.text} />
      <div className="mx-auto grid max-w-[1140px] gap-4 px-4 sm:px-6 lg:grid-cols-3">
        {copy.model.steps.map((step, index) => (
          <article key={step.title} className={`${surfaceCard} ${surfaceHover} min-h-[240px] p-6`}>
            <span className="nv-heading mb-8 block text-sm font-bold tracking-[0.12em] text-[var(--nv-accent-warm)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="nv-heading mb-2 text-xl font-bold">{step.title}</h3>
            <p className="text-[var(--nv-text-muted-strong)]">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductsSection({ copy, locale }: { copy: Copy; locale: Locale }) {
  return (
    <section id="produtos" className="py-8">
      <SectionIntro kicker={copy.products.kicker} title={copy.products.title} text={copy.products.intro} />
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
        <article className={`${surfaceCard} grid overflow-hidden lg:grid-cols-2`}>
          <div className="flex flex-col justify-center gap-3 p-8 sm:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--nv-accent)]">
              {copy.products.avelix.kicker}
            </p>
            <h3 className="nv-heading text-4xl font-bold">
              Avelix<span className="text-[var(--nv-accent-soft)]">.com.br</span>
            </h3>
            <p className="text-[var(--nv-text-muted-strong)]">{copy.products.avelix.text}</p>
            <ul className="my-2 grid gap-2">
              {copy.products.avelix.features.map((feature) => (
                <li key={feature} className="relative pl-6 text-sm text-[var(--nv-text-muted-strong)]">
                  <span className="absolute left-0 font-bold text-[var(--nv-accent-warm)]">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="https://avelix.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] w-fit items-center justify-center rounded-full bg-gradient-to-br from-[var(--nv-accent-soft)] to-[var(--nv-accent)] px-6 font-extrabold text-[#0b0f15] shadow-[0_10px_25px_var(--nv-accent-glow)] transition hover:-translate-y-0.5"
            >
              {copy.products.avelix.cta}
            </a>
          </div>
          <div className="flex min-h-[320px] items-center justify-center bg-[linear-gradient(135deg,#e8f4ff,#ddeeff)] px-8 py-10">
            <AvelixAppPreview locale={locale} />
          </div>
        </article>
      </div>
    </section>
  );
}

function FoundersSection({ copy }: { copy: Copy }) {
  return (
    <section id="founders" className="py-8">
      <SectionIntro kicker={copy.founders.kicker} title={copy.founders.title} text={copy.founders.intro} />
      <div className="mx-auto grid max-w-[1140px] gap-5 px-4 sm:px-6 lg:grid-cols-3">
        {founders.map((founder, index) => {
          const person = copy.founders.people[index];
          return (
            <article
              key={founder.name}
              className={`${surfaceCard} flex flex-col gap-2.5 p-7 transition-colors duration-300 hover:border-[var(--nv-line-strong)] hover:shadow-[0_28px_64px_rgba(29,57,98,0.14)]`}
            >
              <div className="nv-heading flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--nv-accent-soft)] to-[var(--nv-accent-warm)] text-lg font-bold text-white">
                {founder.initials}
              </div>
              <h3 className="nv-heading mt-1 text-lg font-bold">{founder.name}</h3>
              <p className="text-xs font-bold tracking-[0.1em] text-[var(--nv-accent-warm)] uppercase">
                {person.role}
              </p>
              <p className="text-sm leading-[1.65] text-[var(--nv-text-muted-strong)]">{person.bio}</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {founder.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[rgba(0,229,229,0.2)] bg-[rgba(0,229,229,0.08)] px-2.5 py-1 text-[11px] font-semibold tracking-[0.04em] text-[var(--nv-accent-soft)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[var(--nv-text-muted-strong)] transition hover:text-[var(--nv-accent-soft)]"
              >
                <LinkedInIcon className="h-3.5 w-3.5" />
                LinkedIn
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function StatusContactSection({ copy }: { copy: Copy }) {
  return (
    <section id="status" className="px-4 py-8 sm:px-6">
      <div className="mx-auto grid max-w-[1140px] gap-5 md:grid-cols-2">
        <article className={`${surfaceCard} p-7`}>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--nv-accent)]">
            {copy.status.label}
          </p>
          <h2 className="nv-heading mb-4 text-3xl font-bold">{copy.status.title}</h2>
          <p className="text-[var(--nv-text-muted-strong)]">{copy.status.text}</p>
        </article>
        <article id="contact" className={`${surfaceCard} flex flex-col justify-between p-7`}>
          <div>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--nv-accent)]">
              {copy.contact.label}
            </p>
            <h2 className="nv-heading mb-4 text-3xl font-bold">{copy.contact.title}</h2>
            <p className="text-[var(--nv-text-muted-strong)]">{copy.contact.text}</p>
          </div>
          <a
            href="mailto:contact@noverix.com"
            className="mt-6 inline-flex min-h-[52px] w-fit items-center justify-center rounded-full bg-gradient-to-br from-[var(--nv-accent-soft)] to-[var(--nv-accent)] px-6 font-extrabold text-[#0b0f15] shadow-[0_10px_25px_var(--nv-accent-glow)] transition hover:-translate-y-0.5"
          >
            {copy.contact.button}
          </a>
        </article>
      </div>
    </section>
  );
}

function Footer({ copy }: { copy: Copy }) {
  const socials = [
    { icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/noverix" },
    { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/share/18d7ZkLouF/" },
    { icon: InstagramIcon, label: copy.comingSoon, href: null },
    { icon: XIcon, label: copy.comingSoon, href: null },
  ];

  const navItems: { href: string; label: string }[] = [
    { href: "#about", label: copy.nav.about },
    { href: "#services", label: copy.nav.services },
    { href: "#produtos", label: copy.nav.products },
    { href: "#founders", label: copy.nav.team },
    { href: "#contact", label: copy.nav.contact },
  ];

  return (
    <footer className="px-4 pt-8 sm:px-6">
      <div className="mx-auto max-w-[1140px]">
        <div className="rounded-[30px] border border-[rgba(123,232,255,0.12)] bg-[linear-gradient(160deg,rgba(13,20,31,0.96),rgba(10,15,25,0.96))] px-5 py-6 shadow-[0_26px_60px_rgba(0,0,0,0.35)] sm:px-8 sm:py-7">
          <div className="flex flex-wrap items-start justify-between gap-6 border-b border-[rgba(123,232,255,0.14)] pb-6">
            <div className="max-w-[560px]">
              <div className="flex items-center gap-3">
                <NoverixMark className="h-10 w-10" />
                <div>
                  <div className="nv-heading text-base font-bold tracking-[0.12em] text-white">NOVERIX</div>
                  <div className="mt-1 text-[11px] font-semibold tracking-[0.14em] text-[var(--nv-accent)] uppercase">
                    Cloud • AppSec • Apps
                  </div>
                </div>
              </div>
              <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-[var(--nv-text-muted)]">{copy.footer.tagline}</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-[rgba(123,232,255,0.18)] px-3 py-1.5 text-xs font-semibold tracking-[0.06em] text-[var(--nv-text)] transition hover:border-[var(--nv-accent)] hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-end gap-2.5">
              {socials.map((social, index) => (
                <div key={social.href ?? `coming-soon-${index}`} className="flex flex-col items-center gap-1.5">
                  {social.href ? (
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border border-[rgba(123,232,255,0.24)] bg-[rgba(123,232,255,0.06)] transition hover:-translate-y-1 hover:border-[var(--nv-accent)] hover:bg-[rgba(0,229,229,0.2)]"
                    >
                      <social.icon className="h-[18px] w-[18px] fill-[var(--nv-text-muted)] transition group-hover:fill-white" />
                    </a>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border border-[rgba(123,232,255,0.18)] bg-[rgba(123,232,255,0.06)] opacity-35"
                    >
                      <social.icon className="h-[18px] w-[18px] fill-[var(--nv-text-muted)]" />
                    </span>
                  )}
                  <span className="text-center text-[9px] tracking-[0.04em] text-[var(--nv-text-muted)]">
                    {social.href ? social.label : copy.comingSoon}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 pt-6 text-sm text-[var(--nv-text-muted)] sm:flex-row sm:items-center">
            <small>
              © {new Date().getFullYear()} Noverix. {copy.footer.rights}
            </small>
            <a href="mailto:contact@noverix.com" className="font-semibold text-[var(--nv-text)] hover:text-white">
              contact@noverix.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("pt");
  const copy = translations[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // One-time read of the visitor's saved/browser locale on mount. This can only
  // run client-side (localStorage/navigator are unavailable during SSR), so the
  // server and first client render both use the "pt" default to avoid a
  // hydration mismatch, and this effect corrects it afterwards.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      const supported: Locale[] = ["en", "pt", "fr"];
      if (saved && (supported as string[]).includes(saved)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLocale(saved as Locale);
        return;
      }
      const browserLocale = navigator.language.slice(0, 2).toLowerCase();
      if ((supported as string[]).includes(browserLocale)) {
        setLocale(browserLocale as Locale);
      }
    } catch {
      // localStorage may be unavailable (e.g. privacy mode); default locale stands.
    }
  }, []);

  function handleLocaleChange(next: Locale) {
    setLocale(next);
    document.documentElement.lang = next;
    try {
      window.localStorage.setItem(storageKey, next);
    } catch {
      // ignore write failures
    }
  }

  return (
    <div
      className="nv-root relative isolate overflow-clip text-[var(--nv-text)]"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(0, 229, 229, 0.08), transparent 35%), radial-gradient(circle at bottom right, rgba(0, 143, 163, 0.08), transparent 35%), var(--nv-bg)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,35,61,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(16,35,61,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(180deg, rgba(0,0,0,0.4), transparent 80%)",
        }}
      />
      <Header copy={copy} locale={locale} onLocaleChange={handleLocaleChange} />
      <main className="relative">
        <Hero copy={copy} />
        <AboutSection copy={copy} />
        <ServicesSection copy={copy} />
        <ModelSection copy={copy} />
        <ProductsSection copy={copy} locale={locale} />
        <FoundersSection copy={copy} />
        <StatusContactSection copy={copy} />
      </main>
      <Footer copy={copy} />
    </div>
  );
}
