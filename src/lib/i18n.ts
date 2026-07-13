export type Locale = 'en' | 'nl';

export interface Translations {
  nav: {
    home: string;
    services: string;
    about: string;
    whyChoose: string;
    projects: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta1: string;
    cta2: string;
  };
  services: {
    title: string;
    subtitle: string;
    cloud: {
      title: string;
      items: string[];
    };
    analytics: {
      title: string;
      items: string[];
    };
    dashboards: {
      title: string;
      items: string[];
    };
    engineering: {
      title: string;
      items: string[];
    };
    automation: {
      title: string;
      items: string[];
    };
    ai: {
      title: string;
      items: string[];
    };
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    stats: {
      experience: string;
      projects: string;
      clients: string;
      satisfaction: string;
    };
  };
  whyChoose: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: { title: string; description: string; tags: string[] }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: { name: string; role: string; company: string; text: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  faq: {
    title: string;
    subtitle: string;
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
      success: string;
    };
    info: {
      email: string;
      location: string;
      linkedin: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    legal: string;
    privacy: string;
    terms: string;
    connect: string;
    copyright: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      whyChoose: 'Why EinData',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      headline: 'Cloud & Data Solutions That Help Your Business Grow',
      subheadline:
        'EinData empowers organizations with cloud services, business intelligence, data analytics, automation, and AI solutions that transform raw data into actionable insights.',
      cta1: 'Book a Consultation',
      cta2: 'Our Services',
    },
    services: {
      title: 'Our Services',
      subtitle: 'End-to-end data solutions tailored to your business needs',
      cloud: {
        title: 'Cloud Services',
        items: [
          'Cloud migration',
          'Cloud architecture',
          'Microsoft Azure consulting',
          'Cloud optimization',
        ],
      },
      analytics: {
        title: 'Data Analytics',
        items: [
          'Data analysis',
          'KPI development',
          'Business insights',
          'Trend analysis',
        ],
      },
      dashboards: {
        title: 'Dashboards & BI',
        items: [
          'Power BI dashboards',
          'Interactive reports',
          'Executive dashboards',
          'Performance monitoring',
        ],
      },
      engineering: {
        title: 'Data Engineering',
        items: [
          'ETL pipelines',
          'Data integration',
          'Data cleaning',
          'Data warehousing',
        ],
      },
      automation: {
        title: 'Automation',
        items: [
          'Workflow automation',
          'Reporting automation',
          'Data pipelines',
          'Scheduled analytics',
        ],
      },
      ai: {
        title: 'AI Solutions',
        items: [
          'Predictive analytics',
          'Machine learning',
          'NLP',
          'AI-powered reporting',
        ],
      },
    },
    about: {
      title: 'About EinData',
      subtitle: 'Passionate about transforming data into business value',
      description:
        'EinData was founded by Shehab Al-Masri, a data professional passionate about helping organizations unlock the full value of their data. Combining expertise in cloud technologies, analytics, and business intelligence, EinData delivers practical solutions that improve efficiency, reduce manual work, and enable smarter decision-making.',
      stats: {
        experience: 'Years Experience',
        projects: 'Projects Delivered',
        clients: 'Happy Clients',
        satisfaction: 'Client Satisfaction',
      },
    },
    whyChoose: {
      title: 'Why Choose EinData',
      subtitle: 'What sets us apart in delivering data solutions',
      items: [
        {
          title: 'Data-Driven Solutions',
          description:
            'Every recommendation is backed by data analysis, ensuring decisions that deliver measurable results.',
        },
        {
          title: 'Personalized Consulting',
          description:
            'Tailored strategies that address your unique business challenges and goals.',
        },
        {
          title: 'Modern Cloud Technologies',
          description:
            'Leveraging Microsoft Azure and leading cloud platforms for scalable, future-proof solutions.',
        },
        {
          title: 'Secure & Scalable',
          description:
            'Enterprise-grade security and architecture designed to grow with your business.',
        },
        {
          title: 'Business-Focused Approach',
          description:
            'Technology serves your business objectives — not the other way around.',
        },
        {
          title: 'Clear Communication',
          description:
            'Complex technical concepts explained in plain language. No jargon, no confusion.',
        },
        {
          title: 'Automation Expertise',
          description:
            'Streamline repetitive tasks and reporting so your team can focus on what matters.',
        },
        {
          title: 'Reliable Partnership',
          description:
            'Long-term collaboration built on trust, transparency, and consistent delivery.',
        },
      ],
    },
    process: {
      title: 'Our Process',
      subtitle: 'A structured approach to delivering data solutions',
      steps: [
        {
          title: 'Discovery',
          description:
            'Understanding your business, data landscape, and key challenges through in-depth consultation.',
        },
        {
          title: 'Planning',
          description:
            'Defining a clear roadmap with milestones, deliverables, and success metrics.',
        },
        {
          title: 'Data Collection',
          description:
            'Gathering, connecting, and preparing your data sources for analysis.',
        },
        {
          title: 'Analysis & Implementation',
          description:
            'Building solutions — from dashboards and pipelines to automation workflows.',
        },
        {
          title: 'Insights & Improvement',
          description:
            'Delivering actionable insights and continuously optimizing for better outcomes.',
        },
      ],
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Real solutions delivering real business impact',
      items: [
        {
          title: 'Cloud Migration for a Retail Company',
          description:
            'Migrated on-premises data infrastructure to Microsoft Azure, reducing operational costs by 40% and improving data accessibility across 12 retail locations. Implemented automated backups and disaster recovery.',
          tags: ['Azure', 'Cloud Migration', 'Cost Optimization'],
        },
        {
          title: 'Power BI Executive Dashboard',
          description:
            'Designed and deployed an interactive executive dashboard for a logistics company, consolidating data from 5 systems into real-time KPI monitoring. Reduced reporting time from 3 days to instant access.',
          tags: ['Power BI', 'Data Integration', 'KPI Monitoring'],
        },
        {
          title: 'Customer Analytics Platform',
          description:
            'Built a customer analytics platform for an e-commerce business, combining purchase history, behavior data, and marketing metrics. Enabled predictive churn analysis that improved retention by 25%.',
          tags: ['Analytics', 'Machine Learning', 'E-commerce'],
        },
      ],
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Trusted by businesses across the Netherlands',
      items: [
        {
          name: 'Mark de Vries',
          role: 'CTO',
          company: 'RetailFlow BV',
          text: 'EinData transformed our data infrastructure. The migration to Azure was seamless, and our teams now have real-time access to the insights they need. The cost savings alone exceeded our expectations.',
        },
        {
          name: 'Lisa Jansen',
          role: 'Operations Director',
          company: 'LogiTrans Group',
          text: 'The Power BI dashboards EinData built changed how we make decisions. What used to take days of manual reporting now happens in real-time. Shehab truly understands both data and business.',
        },
        {
          name: 'Thomas van den Berg',
          role: 'CEO',
          company: 'DigiCommerce',
          text: 'Working with EinData gave us a clear picture of our customer behavior for the first time. The predictive analytics platform has been instrumental in reducing churn and increasing revenue.',
        },
      ],
    },
    cta: {
      title: 'Ready to Unlock the Value of Your Data?',
      subtitle:
        "Let's discuss how EinData can help your business make smarter, data-driven decisions.",
      button: 'Book a Free Consultation',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about working with EinData',
      items: [
        {
          question: 'What types of businesses does EinData work with?',
          answer:
            'EinData works primarily with small and medium-sized businesses, startups, and organizations looking to leverage their data more effectively. Whether you\'re starting your cloud transformation or need advanced analytics, we tailor our approach to your specific needs and budget.',
        },
        {
          question: 'Which cloud platforms do you specialize in?',
          answer:
            'We specialize in Microsoft Azure, including Azure Data Factory, Azure SQL, Azure Synapse Analytics, and other Azure services. We also have experience with multi-cloud environments and can advise on the best platform for your specific requirements.',
        },
        {
          question: 'How long does a typical project take?',
          answer:
            'Project timelines vary depending on scope and complexity. A dashboard project might take 2-4 weeks, while a full cloud migration could take 2-3 months. During our discovery phase, we provide a clear timeline with milestones so you know exactly what to expect.',
        },
        {
          question: 'Do you offer ongoing support after project delivery?',
          answer:
            'Yes, we offer ongoing support and maintenance packages. Data solutions require regular optimization, and we provide monitoring, updates, and continuous improvement services to ensure your solutions evolve with your business.',
        },
        {
          question: 'What makes EinData different from larger consulting firms?',
          answer:
            'As a specialized consultancy, EinData offers direct access to senior expertise without the overhead of large firms. You work directly with Shehab, ensuring consistent quality, clear communication, and solutions that are practical and business-focused — not over-engineered.',
        },
        {
          question: 'Can you help with data that is currently in spreadsheets?',
          answer:
            'Absolutely. Many businesses start with data in Excel or Google Sheets. We can help you transition to a proper data infrastructure, automate reporting, and build dashboards that give you much deeper insights than spreadsheets ever could.',
        },
      ],
    },
    contact: {
      title: 'Get in Touch',
      subtitle:
        'Ready to start your data journey? Send us a message and we\'ll get back to you within 24 hours.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        company: 'Company Name',
        message: 'Tell us about your project',
        submit: 'Send Message',
        success: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
      },
      info: {
        email: 'info@eindata.nl',
        location: 'The Netherlands',
        linkedin: 'LinkedIn',
      },
    },
    footer: {
      description:
        'Helping businesses transform data into valuable insights through cloud technologies, analytics, and AI.',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      connect: 'Connect',
      copyright: '© 2026 EinData. All rights reserved.',
    },
  },
  nl: {
    nav: {
      home: 'Home',
      services: 'Diensten',
      about: 'Over Ons',
      whyChoose: 'Waarom EinData',
      projects: 'Projecten',
      contact: 'Contact',
    },
    hero: {
      headline: 'Cloud- & Data-oplossingen Die Uw Bedrijf Laten Groeien',
      subheadline:
        'EinData versterkt organisaties met clouddiensten, business intelligence, data-analyse, automatisering en AI-oplossingen die ruwe data omzetten in bruikbare inzichten.',
      cta1: 'Boek een Consultatie',
      cta2: 'Onze Diensten',
    },
    services: {
      title: 'Onze Diensten',
      subtitle: 'End-to-end data-oplossingen afgestemd op uw bedrijfsbehoeften',
      cloud: {
        title: 'Clouddiensten',
        items: [
          'Cloudmigratie',
          'Cloudarchitectuur',
          'Microsoft Azure consulting',
          'Cloudoptimalisatie',
        ],
      },
      analytics: {
        title: 'Data-analyse',
        items: [
          'Data-analyse',
          'KPI-ontwikkeling',
          'Bedrijfsinzichten',
          'Trendanalyse',
        ],
      },
      dashboards: {
        title: 'Dashboards & BI',
        items: [
          'Power BI-dashboards',
          'Interactieve rapporten',
          'Executive dashboards',
          'Prestatiemonitoring',
        ],
      },
      engineering: {
        title: 'Data Engineering',
        items: [
          'ETL-pipelines',
          'Data-integratie',
          'Dataopschoning',
          'Data warehousing',
        ],
      },
      automation: {
        title: 'Automatisering',
        items: [
          'Workflowautomatisering',
          'Rapportage-automatisering',
          'Datapipelines',
          'Geplande analyses',
        ],
      },
      ai: {
        title: 'AI-oplossingen',
        items: [
          'Predictieve analyses',
          'Machine learning',
          'NLP',
          'AI-gestuurde rapportage',
        ],
      },
    },
    about: {
      title: 'Over EinData',
      subtitle: 'Gepassioneerd door het omzetten van data in bedrijfswaarde',
      description:
        'EinData is opgericht door Shehab Al-Masri, een data-professional die gepassioneerd is door het helpen van organisaties bij het ontsluiten van de volledige waarde van hun data. Door expertise in cloudtechnologieën, analytics en business intelligence te combineren, levert EinData praktische oplossingen die de efficiëntie verbeteren, handmatig werk verminderen en slimmer besluitvorming mogelijk maken.',
      stats: {
        experience: 'Jaar Ervaring',
        projects: 'Projecten Opgeleverd',
        clients: 'Tevreden Klanten',
        satisfaction: 'Klanttevredenheid',
      },
    },
    whyChoose: {
      title: 'Waarom EinData Kiezen',
      subtitle: 'Wat ons onderscheidt in het leveren van data-oplossingen',
      items: [
        {
          title: 'Datagedreven Oplossingen',
          description:
            'Elke aanbeveling is onderbouwd met data-analyse, wat zorgt voor beslissingen met meetbare resultaten.',
        },
        {
          title: 'Persoonlijk Advies',
          description:
            'Strategieën op maat die uw unieke zakelijke uitdagingen en doelen aanpakken.',
        },
        {
          title: 'Moderne Cloudtechnologieën',
          description:
            'Gebruik van Microsoft Azure en toonaangevende cloudplatforms voor schaalbare, toekomstbestendige oplossingen.',
        },
        {
          title: 'Veilig & Schaalbaar',
          description:
            'Enterprise-grade beveiliging en architectuur ontworpen om met uw bedrijf mee te groeien.',
        },
        {
          title: 'Bedrijfsgerichte Aanpak',
          description:
            'Technologie staat in dienst van uw bedrijfsdoelen — niet andersom.',
        },
        {
          title: 'Heldere Communicatie',
          description:
            'Complexe technische concepten uitgelegd in duidelijke taal. Geen jargon, geen verwarring.',
        },
        {
          title: 'Automatiseringsexpertise',
          description:
            'Stroomlijn repetitieve taken en rapportages zodat uw team zich kan richten op wat belangrijk is.',
        },
        {
          title: 'Betrouwbaar Partnerschap',
          description:
            'Langdurige samenwerking gebouwd op vertrouwen, transparantie en consistente levering.',
        },
      ],
    },
    process: {
      title: 'Ons Proces',
      subtitle: 'Een gestructureerde aanpak voor het leveren van data-oplossingen',
      steps: [
        {
          title: 'Ontdekking',
          description:
            'Uw bedrijf, datalandschap en belangrijkste uitdagingen begrijpen door diepgaande consultatie.',
        },
        {
          title: 'Planning',
          description:
            'Een duidelijke roadmap definiëren met mijlpalen, deliverables en succescriteria.',
        },
        {
          title: 'Dataverzameling',
          description:
            'Uw databronnen verzamelen, verbinden en voorbereiden voor analyse.',
        },
        {
          title: 'Analyse & Implementatie',
          description:
            'Oplossingen bouwen — van dashboards en pipelines tot automatiseringsworkflows.',
        },
        {
          title: 'Inzichten & Verbetering',
          description:
            'Bruikbare inzichten leveren en continu optimaliseren voor betere resultaten.',
        },
      ],
    },
    projects: {
      title: 'Uitgelichte Projecten',
      subtitle: 'Echte oplossingen met echte bedrijfsimpact',
      items: [
        {
          title: 'Cloudmigratie voor een Retailbedrijf',
          description:
            'On-premises data-infrastructuur gemigreerd naar Microsoft Azure, waardoor operationele kosten met 40% werden verlaagd en data-toegankelijkheid over 12 locaties werd verbeterd. Geautomatiseerde back-ups en disaster recovery geïmplementeerd.',
          tags: ['Azure', 'Cloudmigratie', 'Kostenoptimalisatie'],
        },
        {
          title: 'Power BI Executive Dashboard',
          description:
            'Een interactief executive dashboard ontworpen en geïmplementeerd voor een logistiek bedrijf, waarbij data uit 5 systemen werd gecombineerd tot real-time KPI-monitoring. Rapportagetijd teruggebracht van 3 dagen naar directe toegang.',
          tags: ['Power BI', 'Data-integratie', 'KPI-monitoring'],
        },
        {
          title: 'Klantanalyseplatform',
          description:
            'Een klantanalyseplatform gebouwd voor een e-commercebedrijf, waarbij aankoophistorie, gedragsdata en marketingmetrics werden gecombineerd. Predictieve churn-analyse mogelijk gemaakt die de retentie met 25% verbeterde.',
          tags: ['Analytics', 'Machine Learning', 'E-commerce'],
        },
      ],
    },
    testimonials: {
      title: 'Wat Onze Klanten Zeggen',
      subtitle: 'Vertrouwd door bedrijven in heel Nederland',
      items: [
        {
          name: 'Mark de Vries',
          role: 'CTO',
          company: 'RetailFlow BV',
          text: 'EinData heeft onze data-infrastructuur getransformeerd. De migratie naar Azure verliep naadloos en onze teams hebben nu real-time toegang tot de inzichten die ze nodig hebben. De kostenbesparingen alleen al overtroffen onze verwachtingen.',
        },
        {
          name: 'Lisa Jansen',
          role: 'Operations Director',
          company: 'LogiTrans Group',
          text: 'De Power BI-dashboards die EinData heeft gebouwd, hebben veranderd hoe wij beslissingen nemen. Wat vroeger dagen handmatige rapportage kostte, gebeurt nu in real-time. Shehab begrijpt echt zowel data als business.',
        },
        {
          name: 'Thomas van den Berg',
          role: 'CEO',
          company: 'DigiCommerce',
          text: 'Samenwerken met EinData gaf ons voor het eerst een helder beeld van het gedrag van onze klanten. Het predictieve analyseplatform is cruciaal geweest bij het verminderen van churn en het verhogen van omzet.',
        },
      ],
    },
    cta: {
      title: 'Klaar om de Waarde van Uw Data te Ontsluiten?',
      subtitle:
        'Laten we bespreken hoe EinData uw bedrijf kan helpen slimmere, datagedreven beslissingen te nemen.',
      button: 'Boek een Gratis Consultatie',
    },
    faq: {
      title: 'Veelgestelde Vragen',
      subtitle: 'Alles wat u moet weten over samenwerken met EinData',
      items: [
        {
          question: 'Met welke soorten bedrijven werkt EinData?',
          answer:
            'EinData werkt voornamelijk met het midden- en kleinbedrijf, startups en organisaties die hun data effectiever willen inzetten. Of u nu aan het begin staat van uw cloudtransformatie of geavanceerde analytics nodig heeft, wij stemmen onze aanpak af op uw specifieke behoeften en budget.',
        },
        {
          question: 'In welke cloudplatforms bent u gespecialiseerd?',
          answer:
            'Wij zijn gespecialiseerd in Microsoft Azure, waaronder Azure Data Factory, Azure SQL, Azure Synapse Analytics en andere Azure-diensten. We hebben ook ervaring met multi-cloud-omgevingen en kunnen adviseren over het beste platform voor uw specifieke vereisten.',
        },
        {
          question: 'Hoe lang duurt een typisch project?',
          answer:
            'Projecttijdlijnen variëren afhankelijk van omvang en complexiteit. Een dashboardproject kan 2-4 weken duren, terwijl een volledige cloudmigratie 2-3 maanden kan kosten. Tijdens onze ontdekkingsfase geven we een duidelijke tijdlijn met mijlpalen zodat u precies weet wat u kunt verwachten.',
        },
        {
          question: 'Bieden jullie doorlopende ondersteuning na oplevering?',
          answer:
            'Ja, wij bieden doorlopende ondersteuning en onderhoudspakketten. Data-oplossingen vereisen regelmatige optimalisatie en we bieden monitoring, updates en continue verbeteringsservices om ervoor te zorgen dat uw oplossingen met uw bedrijf meegroeien.',
        },
        {
          question: 'Wat maakt EinData anders dan grotere adviesbureaus?',
          answer:
            'Als gespecialiseerd adviesbureau biedt EinData directe toegang tot senior expertise zonder de overhead van grote bureaus. U werkt rechtstreeks met Shehab, wat zorgt voor consistente kwaliteit, heldere communicatie en oplossingen die praktisch en bedrijfsgericht zijn — niet over-engineered.',
        },
        {
          question: 'Kunnen jullie helpen met data die nu in spreadsheets staat?',
          answer:
            'Absoluut. Veel bedrijven beginnen met data in Excel of Google Sheets. Wij kunnen u helpen bij de transitie naar een goede data-infrastructuur, het automatiseren van rapportages en het bouwen van dashboards die u veel diepere inzichten geven dan spreadsheets ooit konden.',
        },
      ],
    },
    contact: {
      title: 'Neem Contact Op',
      subtitle:
        'Klaar om uw datareis te beginnen? Stuur ons een bericht en we nemen binnen 24 uur contact met u op.',
      form: {
        name: 'Volledige Naam',
        email: 'E-mailadres',
        company: 'Bedrijfsnaam',
        message: 'Vertel ons over uw project',
        submit: 'Bericht Versturen',
        success: 'Bedankt! Uw bericht is succesvol verzonden. We nemen snel contact met u op.',
      },
      info: {
        email: 'info@eindata.nl',
        location: 'Nederland',
        linkedin: 'LinkedIn',
      },
    },
    footer: {
      description:
        'Wij helpen bedrijven data om te zetten in waardevolle inzichten door middel van cloudtechnologieën, analytics en AI.',
      quickLinks: 'Snelle Links',
      legal: 'Juridisch',
      privacy: 'Privacybeleid',
      terms: 'Algemene Voorwaarden',
      connect: 'Verbinden',
      copyright: '© 2026 EinData. Alle rechten voorbehouden.',
    },
  },
};
