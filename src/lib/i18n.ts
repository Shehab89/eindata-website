export type Locale = 'en' | 'nl';

// Real business details, used across the site, metadata and structured data.
export const site = {
  name: 'EinData',
  url: 'https://eindata.nl',
  email: 'info@eindata.nl',
  founder: 'Shehab Al-Masri',
  linkedin: 'https://www.linkedin.com/in/shihab-masri',
  linkedinLabel: 'linkedin.com/in/shihab-masri',
  city: 'Eindhoven',
  region: 'Noord-Brabant',
  country: 'NL',
  kvk: '42115043',
};

export const localePath: Record<Locale, string> = { en: '/', nl: '/nl' };

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    about: string;
    howItWorks: string;
    faq: string;
    contact: string;
    switchLanguage: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    cta1: string;
    cta2: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: { title: string; description: string; points: string[] }[];
  };
  about: {
    title: string;
    headline: string;
    paragraphs: string[];
    role: string;
    highlightsTitle: string;
    highlights: string[];
    educationTitle: string;
    education: { degree: string; school: string; year: string }[];
    languagesTitle: string;
    languages: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    options: { title: string; description: string }[];
    stepsTitle: string;
    steps: { title: string; description: string }[];
  };
  faq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      privacy: string;
    };
    info: {
      email: string;
      location: string;
      linkedin: string;
      response: string;
    };
  };
  footer: {
    description: string;
    privacy: string;
    rights: string;
  };
  privacy: {
    title: string;
    updated: string;
    sections: { heading: string; body: string }[];
    back: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    meta: {
      title: 'EinData | Freelance Data Analyst & Azure Data Engineer in Eindhoven',
      description:
        'EinData is the freelance data consultancy of Shehab Al-Masri (MSc Applied Data Science) in Eindhoven. Azure data pipelines, Power BI dashboards, reporting automation and data analysis for businesses in the Netherlands.',
    },
    nav: {
      services: 'Services',
      about: 'About',
      howItWorks: 'How it works',
      faq: 'FAQ',
      contact: 'Contact',
      switchLanguage: 'Nederlands',
    },
    hero: {
      badge: 'Freelance data consultant · Eindhoven',
      headline: 'Turn your data into clear answers',
      subheadline:
        "I'm Shehab Al-Masri, a freelance data analyst and Azure data engineer. I build data pipelines, Power BI dashboards and automated reports, so your team spends less time on spreadsheets and more time on decisions.",
      cta1: 'Get in touch',
      cta2: 'View services',
    },
    services: {
      title: 'What I can do for you',
      subtitle: 'Four practical services, from raw data to a working report.',
      items: [
        {
          title: 'Azure data engineering',
          description:
            'Get your data out of scattered files and systems into one reliable place.',
          points: [
            'ETL/ELT pipelines with Azure Data Factory',
            'Azure SQL Database and Synapse Analytics',
            'Moving spreadsheet data to the cloud',
            'Python, SQL and PySpark',
          ],
        },
        {
          title: 'Dashboards & reporting',
          description:
            'See your key numbers at a glance, always up to date.',
          points: [
            'Power BI and Tableau dashboards',
            'Defining the right KPIs',
            'Automated recurring reports',
            'Budget and performance trackers',
          ],
        },
        {
          title: 'Data analysis',
          description:
            'Clean, reliable data and plain-language answers to your questions.',
          points: [
            'Data cleaning and quality checks',
            'Survey and statistical analysis',
            'Trend analysis',
            'Clear written insight reports',
          ],
        },
        {
          title: 'AI & automation',
          description:
            'Let software handle the repetitive work.',
          points: [
            'Text mining and NLP (e.g. social media, feedback)',
            'Machine learning with scikit-learn',
            'LLM-based workflows',
            'Workflow automation with Python and n8n',
          ],
        },
      ],
    },
    about: {
      title: 'About',
      headline: 'Hi, I’m Shehab',
      paragraphs: [
        'EinData is my own data consultancy, based in Eindhoven and registered with the Dutch Chamber of Commerce (KVK). When you work with EinData, you work directly with me.',
        'I hold an MSc in Applied Data Science from Utrecht University and a background in electrical engineering. Since 2020 I have worked as a data analyst and data manager for international organisations such as RNW Media, Internews, ACLED and MochaValley: building dashboards, automating reports, managing data pipelines and analysing survey and social-media data.',
        'Today I help businesses in the Netherlands do the same with Microsoft Azure, Python, SQL and Power BI.',
      ],
      role: 'Founder, EinData',
      highlightsTitle: 'From my work so far',
      highlights: [
        'Automated reporting for 15+ dashboards tracking 20+ KPIs (RNW Media)',
        'NLP and text-mining analysis of social-media discourse for 6 partner organisations (RNW Media)',
        'Led information management and multi-source data pipelines for a humanitarian project (Internews)',
        'Designed a survey and analysed data from 300+ coffee farmers (MochaValley)',
        'Led a 5-person data team managing records for 17,000+ beneficiaries (RECO-Yemen)',
      ],
      educationTitle: 'Education',
      education: [
        { degree: 'MSc Applied Data Science', school: 'Utrecht University', year: '2024' },
        { degree: 'Postgraduate Diploma in Big Data & Data Science', school: 'Nile University', year: '2022' },
        { degree: 'BSc Electrical Engineering (Communications & Electronics)', school: 'Sana’a University', year: '2012' },
      ],
      languagesTitle: 'Languages',
      languages: 'English (fluent) · Dutch (B1, improving) · Arabic (native)',
    },
    howItWorks: {
      title: 'How we can work together',
      subtitle: 'Pick the format that fits your situation.',
      options: [
        {
          title: 'Freelance / interim',
          description:
            'Part-time or full-time in your team, remote or on-site anywhere in the Netherlands. Directly or through your usual agency.',
        },
        {
          title: 'Fixed project',
          description:
            'A clearly defined result, such as an Azure data pipeline or a Power BI dashboard, with scope and price agreed up front.',
        },
        {
          title: 'Hours bundle',
          description:
            'A flexible block of hours for smaller businesses that need occasional help or dashboard maintenance.',
        },
      ],
      stepsTitle: 'The process',
      steps: [
        {
          title: 'Intro call',
          description: 'A short, free call to understand your question and your data.',
        },
        {
          title: 'Proposal',
          description: 'A clear plan with deliverables, timeline and cost. No surprises.',
        },
        {
          title: 'Build & hand over',
          description: 'I build the solution, document it and make sure your team can use it.',
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'What does EinData do?',
          answer:
            'EinData is a freelance data consultancy in Eindhoven run by Shehab Al-Masri. I help businesses collect, clean and analyse their data, build data pipelines on Microsoft Azure, create Power BI and Tableau dashboards, and automate reporting.',
        },
        {
          question: 'Who do you work with?',
          answer:
            'Small and medium-sized businesses that want better insight from their data, and larger organisations or IT agencies that need an extra data analyst or Azure data engineer in their team.',
        },
        {
          question: 'Which tools and technologies do you use?',
          answer:
            'Microsoft Azure (Data Factory, SQL Database, Synapse Analytics, Machine Learning), Python (pandas, scikit-learn, PySpark), SQL, R, Power BI, Tableau and Excel.',
        },
        {
          question: 'Do you work remotely or on-site?',
          answer:
            'Both. I am based in Eindhoven (Brainport region) and work remotely, on-site, or hybrid anywhere in the Netherlands.',
        },
        {
          question: 'Do you speak Dutch?',
          answer:
            'I work in English and speak Dutch at B1 level, which I am actively improving. Most of my technical work (code, documentation, dashboards) can be delivered in either language.',
        },
        {
          question: 'Our data is all in Excel. Can you still help?',
          answer:
            'Yes. Many businesses start with spreadsheets. I can clean and combine them, move them to a proper database and build a dashboard that updates automatically.',
        },
        {
          question: 'How do we get started?',
          answer:
            'Send a message through the contact form or email info@eindata.nl. I usually reply within two working days and we can plan a short intro call.',
        },
      ],
    },
    contact: {
      title: 'Get in touch',
      subtitle: 'Tell me briefly what you are working on. I usually reply within two working days.',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company (optional)',
        message: 'How can I help?',
        submit: 'Send message',
        sending: 'Sending…',
        success: 'Thank you! Your message has been sent. I will get back to you soon.',
        error: 'Sorry, the message could not be sent. Please email me directly at',
        privacy: 'Your details are only used to reply to your message.',
      },
      info: {
        email: 'Email',
        location: 'Location',
        linkedin: 'LinkedIn',
        response: 'Reply within two working days',
      },
    },
    footer: {
      description: 'Freelance data analysis, Azure data engineering and Power BI dashboards from Eindhoven.',
      privacy: 'Privacy',
      rights: 'All rights reserved.',
    },
    privacy: {
      title: 'Privacy statement',
      updated: 'Last updated: September 2026',
      sections: [
        {
          heading: 'Who we are',
          body: 'EinData is a sole proprietorship (eenmanszaak) of Shehab Al-Masri, based in Eindhoven, the Netherlands, registered with the Dutch Chamber of Commerce under KVK number 42115043. Contact: info@eindata.nl.',
        },
        {
          heading: 'What data we collect',
          body: 'When you use the contact form or email us, we receive your name, email address, company name (if provided) and your message. This website does not use tracking or advertising cookies.',
        },
        {
          heading: 'Why we use it',
          body: 'Only to answer your question and, if we work together, to prepare a proposal and carry out the work. We do not sell or share your data for marketing.',
        },
        {
          heading: 'How long we keep it',
          body: 'Messages that do not lead to a collaboration are deleted within 12 months. Client administration is kept for 7 years, as required by Dutch tax law.',
        },
        {
          heading: 'Your rights',
          body: 'You can ask to see, correct or delete your personal data at any time by emailing info@eindata.nl. You can also file a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).',
        },
      ],
      back: 'Back to home',
    },
  },
  nl: {
    meta: {
      title: 'EinData | Freelance Data-analist & Azure Data Engineer in Eindhoven',
      description:
        'EinData is het freelance data-adviesbureau van Shehab Al-Masri (MSc Applied Data Science) in Eindhoven. Azure datapipelines, Power BI-dashboards, geautomatiseerde rapportages en data-analyse voor bedrijven in Nederland.',
    },
    nav: {
      services: 'Diensten',
      about: 'Over mij',
      howItWorks: 'Werkwijze',
      faq: 'FAQ',
      contact: 'Contact',
      switchLanguage: 'English',
    },
    hero: {
      badge: 'Freelance data-consultant · Eindhoven',
      headline: 'Van data naar heldere antwoorden',
      subheadline:
        'Ik ben Shehab Al-Masri, freelance data-analist en Azure data engineer. Ik bouw datapipelines, Power BI-dashboards en geautomatiseerde rapportages, zodat uw team minder tijd kwijt is aan spreadsheets en meer tijd heeft voor beslissingen.',
      cta1: 'Neem contact op',
      cta2: 'Bekijk diensten',
    },
    services: {
      title: 'Wat ik voor u kan doen',
      subtitle: 'Vier praktische diensten, van ruwe data tot een werkend rapport.',
      items: [
        {
          title: 'Azure data engineering',
          description:
            'Haal uw data uit losse bestanden en systemen en breng het samen op één betrouwbare plek.',
          points: [
            'ETL/ELT-pipelines met Azure Data Factory',
            'Azure SQL Database en Synapse Analytics',
            'Spreadsheetdata naar de cloud',
            'Python, SQL en PySpark',
          ],
        },
        {
          title: 'Dashboards & rapportage',
          description:
            'Uw belangrijkste cijfers in één oogopslag, altijd actueel.',
          points: [
            'Power BI- en Tableau-dashboards',
            'De juiste KPI’s bepalen',
            'Geautomatiseerde periodieke rapportages',
            'Budget- en prestatietrackers',
          ],
        },
        {
          title: 'Data-analyse',
          description:
            'Schone, betrouwbare data en antwoorden in begrijpelijke taal.',
          points: [
            'Data opschonen en kwaliteitscontroles',
            'Enquête- en statistische analyse',
            'Trendanalyse',
            'Heldere rapporten met inzichten',
          ],
        },
        {
          title: 'AI & automatisering',
          description:
            'Laat software het herhalende werk doen.',
          points: [
            'Tekstanalyse en NLP (bijv. social media, feedback)',
            'Machine learning met scikit-learn',
            'Workflows met LLM’s',
            'Automatisering met Python en n8n',
          ],
        },
      ],
    },
    about: {
      title: 'Over mij',
      headline: 'Hallo, ik ben Shehab',
      paragraphs: [
        'EinData is mijn eigen data-adviesbureau, gevestigd in Eindhoven en ingeschreven bij de Kamer van Koophandel (KVK). Als u met EinData werkt, werkt u rechtstreeks met mij.',
        'Ik heb een MSc Applied Data Science van de Universiteit Utrecht en een achtergrond in elektrotechniek. Sinds 2020 werk ik als data-analist en databeheerder voor internationale organisaties zoals RNW Media, Internews, ACLED en MochaValley: dashboards bouwen, rapportages automatiseren, datapipelines beheren en enquête- en social-mediadata analyseren.',
        'Nu help ik bedrijven in Nederland hetzelfde te doen met Microsoft Azure, Python, SQL en Power BI.',
      ],
      role: 'Oprichter, EinData',
      highlightsTitle: 'Uit mijn werk tot nu toe',
      highlights: [
        'Rapportage geautomatiseerd voor 15+ dashboards met 20+ KPI’s (RNW Media)',
        'NLP- en tekstanalyse van social-mediadiscussies voor 6 partnerorganisaties (RNW Media)',
        'Informatiebeheer en datapipelines uit meerdere bronnen geleid voor een humanitair project (Internews)',
        'Enquête ontworpen en data van 300+ koffieboeren geanalyseerd (MochaValley)',
        'Een datateam van 5 personen geleid met gegevens van 17.000+ begunstigden (RECO-Yemen)',
      ],
      educationTitle: 'Opleiding',
      education: [
        { degree: 'MSc Applied Data Science', school: 'Universiteit Utrecht', year: '2024' },
        { degree: 'Postgraduaat Big Data & Data Science', school: 'Nile University', year: '2022' },
        { degree: 'BSc Elektrotechniek (Communicatie & Elektronica)', school: 'Sana’a University', year: '2012' },
      ],
      languagesTitle: 'Talen',
      languages: 'Engels (vloeiend) · Nederlands (B1, in ontwikkeling) · Arabisch (moedertaal)',
    },
    howItWorks: {
      title: 'Hoe we kunnen samenwerken',
      subtitle: 'Kies de vorm die bij uw situatie past.',
      options: [
        {
          title: 'Freelance / interim',
          description:
            'Deeltijd of voltijd in uw team, op afstand of op locatie in heel Nederland. Rechtstreeks of via uw vaste bemiddelaar.',
        },
        {
          title: 'Vast project',
          description:
            'Een duidelijk omschreven resultaat, zoals een Azure-datapipeline of een Power BI-dashboard, met scope en prijs vooraf afgesproken.',
        },
        {
          title: 'Strippenkaart',
          description:
            'Een flexibel blok uren voor kleinere bedrijven die af en toe hulp of dashboardonderhoud nodig hebben.',
        },
      ],
      stepsTitle: 'Het proces',
      steps: [
        {
          title: 'Kennismaking',
          description: 'Een kort, gratis gesprek om uw vraag en uw data te begrijpen.',
        },
        {
          title: 'Voorstel',
          description: 'Een helder plan met resultaten, planning en kosten. Geen verrassingen.',
        },
        {
          title: 'Bouwen & overdragen',
          description: 'Ik bouw de oplossing, documenteer die en zorg dat uw team ermee kan werken.',
        },
      ],
    },
    faq: {
      title: 'Veelgestelde vragen',
      items: [
        {
          question: 'Wat doet EinData?',
          answer:
            'EinData is een freelance data-adviesbureau in Eindhoven van Shehab Al-Masri. Ik help bedrijven hun data te verzamelen, op te schonen en te analyseren, bouw datapipelines op Microsoft Azure, maak Power BI- en Tableau-dashboards en automatiseer rapportages.',
        },
        {
          question: 'Met wie werkt u?',
          answer:
            'Met mkb-bedrijven die meer inzicht uit hun data willen halen, en met grotere organisaties of IT-bemiddelaars die een extra data-analist of Azure data engineer in hun team nodig hebben.',
        },
        {
          question: 'Welke tools en technologieën gebruikt u?',
          answer:
            'Microsoft Azure (Data Factory, SQL Database, Synapse Analytics, Machine Learning), Python (pandas, scikit-learn, PySpark), SQL, R, Power BI, Tableau en Excel.',
        },
        {
          question: 'Werkt u op afstand of op locatie?',
          answer:
            'Beide. Ik ben gevestigd in Eindhoven (Brainport-regio) en werk op afstand, op locatie of hybride in heel Nederland.',
        },
        {
          question: 'Spreekt u Nederlands?',
          answer:
            'Ik werk in het Engels en spreek Nederlands op B1-niveau, dat ik actief verbeter. Het meeste technische werk (code, documentatie, dashboards) kan ik in beide talen opleveren.',
        },
        {
          question: 'Onze data staat in Excel. Kunt u dan helpen?',
          answer:
            'Ja. Veel bedrijven beginnen met spreadsheets. Ik kan ze opschonen en combineren, overzetten naar een echte database en een dashboard bouwen dat automatisch bijwerkt.',
        },
        {
          question: 'Hoe beginnen we?',
          answer:
            'Stuur een bericht via het contactformulier of mail naar info@eindata.nl. Ik reageer meestal binnen twee werkdagen en we plannen een korte kennismaking.',
        },
      ],
    },
    contact: {
      title: 'Neem contact op',
      subtitle: 'Vertel kort waar u mee bezig bent. Ik reageer meestal binnen twee werkdagen.',
      form: {
        name: 'Naam',
        email: 'E-mail',
        company: 'Bedrijf (optioneel)',
        message: 'Waarmee kan ik helpen?',
        submit: 'Verstuur bericht',
        sending: 'Versturen…',
        success: 'Bedankt! Uw bericht is verzonden. Ik neem snel contact met u op.',
        error: 'Sorry, het bericht kon niet worden verzonden. Mail mij direct via',
        privacy: 'Uw gegevens worden alleen gebruikt om op uw bericht te reageren.',
      },
      info: {
        email: 'E-mail',
        location: 'Locatie',
        linkedin: 'LinkedIn',
        response: 'Reactie binnen twee werkdagen',
      },
    },
    footer: {
      description: 'Freelance data-analyse, Azure data engineering en Power BI-dashboards vanuit Eindhoven.',
      privacy: 'Privacy',
      rights: 'Alle rechten voorbehouden.',
    },
    privacy: {
      title: 'Privacyverklaring',
      updated: 'Laatst bijgewerkt: september 2026',
      sections: [
        {
          heading: 'Wie wij zijn',
          body: 'EinData is een eenmanszaak van Shehab Al-Masri, gevestigd in Eindhoven, ingeschreven bij de Kamer van Koophandel onder KVK-nummer 42115043. Contact: info@eindata.nl.',
        },
        {
          heading: 'Welke gegevens wij verzamelen',
          body: 'Als u het contactformulier gebruikt of ons mailt, ontvangen wij uw naam, e-mailadres, bedrijfsnaam (indien ingevuld) en uw bericht. Deze website gebruikt geen tracking- of advertentiecookies.',
        },
        {
          heading: 'Waarvoor wij ze gebruiken',
          body: 'Alleen om uw vraag te beantwoorden en, als we gaan samenwerken, om een voorstel te maken en het werk uit te voeren. Wij verkopen of delen uw gegevens niet voor marketing.',
        },
        {
          heading: 'Hoe lang wij ze bewaren',
          body: 'Berichten die niet tot een samenwerking leiden, worden binnen 12 maanden verwijderd. Klantadministratie bewaren wij 7 jaar, zoals de Nederlandse belastingwet vereist.',
        },
        {
          heading: 'Uw rechten',
          body: 'U kunt altijd vragen om uw persoonsgegevens in te zien, te corrigeren of te verwijderen door te mailen naar info@eindata.nl. U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.',
        },
      ],
      back: 'Terug naar home',
    },
  },
};
