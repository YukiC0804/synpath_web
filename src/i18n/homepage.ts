export type HomepageLocale = 'en' | 'fr' | 'de' | 'zh';

export type HomepageCopy = {
  hero: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    forCustomers: string;
    agentQueries: string;
    statOtif: string;
    statWip: string;
    statCosts: string;
    bookDemo: string;
    exploreProduct: string;
  };
  complexity: {
    eyebrow: string;
    headingLine1: string;
    headingLine2: string;
    customizableTitle: string;
    customizableDesc: string;
    noSilosTitle: string;
    noSilosDesc: string;
    copilotTitle: string;
    copilotDesc: string;
  };
  useCasesIntro: {
    eyebrow: string;
    headingLine1: string;
    headingLine2: string;
    explorePlatform: string;
    useCases: string[];
  };
  howItWorks: {
    truthTitle: string;
    truthDesc: string;
    agentsTitle: string;
    agentsDescLine1: string;
    agentsDescLine2: string;
    deployTitle: string;
    deployDesc: string;
    valueEyebrow: string;
    valueHeading: string;
    valueNextGenTitle: string;
    valueNextGenDesc: string;
    valueSimplifyTitle: string;
    valueSimplifyDesc: string;
    valueControlTowerTitle: string;
    valueControlTowerDesc: string;
    valueAnalyzeTitle: string;
    valueAnalyzeDesc: string;
  };
  animations: {
    truth: {
      ariaLabel: string;
      fragmentedSources: string;
      trustedLayer: string;
      unifiedOutput: string;
      oneSourceTitle: string;
      oneSourceSubtitle: string;
      sourceLabels: {
        mes: string;
        erp: string;
        machine: string;
        paper: string;
        tribal: string;
        excel: string;
        sop: string;
      };
      insights: string[];
    };
    agents: {
      ariaLabel: string;
      workspace: string;
      badgeActive: string;
      badgeInterpreting: string;
      badgeBuilding: string;
      naturalLanguage: string;
      prompt: string;
      interpreting: string;
      generated: string;
      status: string;
      artifacts: {
        dashboard: { title: string; statusFrom: string; statusTo: string };
        agent: { title: string; statusFrom: string; statusTo: string };
        workflow: { title: string; statusFrom: string; statusTo: string };
      };
      atRiskOrders: string;
      tableOrder: string;
      tableRisk: string;
      tableCause: string;
      tableAction: string;
      riskHigh: string;
      riskMedium: string;
      rows: Array<{ cause: string; action: string }>;
      workflowChip: string;
    };
    deploy: {
      ariaLabel: string;
      title: string;
      badge: string;
      overallProgress: string;
      inProgress: string;
      steps: Array<{ week: string; label: string }>;
    };
  };
};

const en: HomepageCopy = {
  hero: {
    tag: 'Hit Plan, Cut Waste and Scale',
    titleLine1: 'AI that listens and executes for you',
    titleLine2: 'Build for Manufacturing Operations',
    forCustomers: 'For our customers:',
    agentQueries: 'Agent queries',
    statOtif: 'On-Time, In-Full',
    statWip: 'WIP',
    statCosts: 'Avoided staff costs',
    bookDemo: 'Book a demo',
    exploreProduct: 'Explore product',
  },
  complexity: {
    eyebrow: 'Custom Agents',
    headingLine1: 'Built to handle',
    headingLine2: 'complexity',
    customizableTitle: 'Extremely Customizable',
    customizableDesc: 'Fine-tune every nuance to match your operations reality',
    noSilosTitle: 'No data silos',
    noSilosDesc:
      'Replace point solutions, legacy systems, and spreadsheets with one platform that scales.',
    copilotTitle: 'Built-in Copilot',
    copilotDesc: 'AI helps you build any dashboards/custom agents you want',
  },
  useCasesIntro: {
    eyebrow: 'How It Works',
    headingLine1: 'The top manufacturers',
    headingLine2: 'use Synpath for',
    explorePlatform: 'Explore Platform',
    useCases: [
      'Production Scheduling',
      'Demand Forecasting',
      'Order Entry',
      'Inventory Management',
      'Sales and Operations Execution',
      'Sales and Operations Planning',
      'Procurement Automation',
      'Order-to-Cash Automation',
      'Client Prospecting',
      'Data Analytics',
      'Quoting',
      'Estimating',
      'AR Tracking',
    ],
  },
  howItWorks: {
    truthTitle: 'Build One Source of Truth',
    truthDesc:
      'Connect machine data, software, paperwork, and tribal knowledge into one reliable operating layer.',
    agentsTitle: 'Create Agents & Tools',
    agentsDescLine1: 'Use natural language to create AI agents, dashboards,',
    agentsDescLine2: 'and apps that execute daunting tasks for you.',
    deployTitle: 'Go Live in 3–8 Weeks',
    deployDesc:
      'With AI data migration, fast customization, and easy user adoption, Synpath is built for rapid deployment.',
    valueEyebrow: 'Our value proposition',
    valueHeading:
      'The manufacturing platform that fits how you work, and works while you sleep',
    valueNextGenTitle: 'A next-generation platform',
    valueNextGenDesc:
      'Automate the most daunting tasks with AI agents, built directly into Synpath — operating under your supervision.',
    valueSimplifyTitle: 'Simplify your operations',
    valueSimplifyDesc:
      'Synpath handles order management, inventory, purchasing, planning, production, quality, logistics, and more in one connected system.',
    valueControlTowerTitle: 'Factory Control Tower',
    valueControlTowerDesc:
      'Design, monitor, and supervise your AI-driven operations in real time.',
    valueAnalyzeTitle: 'Analyze & Decide',
    valueAnalyzeDesc:
      'Custom dashboards and AI-powered analysis, built directly into your operational system.',
  },
  animations: {
    truth: {
      ariaLabel: 'Connect fragmented manufacturing data into one reliable source of truth',
      fragmentedSources: 'Fragmented sources',
      trustedLayer: 'Trusted layer',
      unifiedOutput: 'Unified output',
      oneSourceTitle: 'One Source of Truth',
      oneSourceSubtitle: 'Unified operating layer',
      sourceLabels: {
        mes: 'MES',
        erp: 'ERP',
        machine: 'Machine Data',
        paper: 'Paperwork',
        tribal: 'Tribal Knowledge',
        excel: 'Excel',
        sop: 'SOPs',
      },
      insights: [
        'Live production status',
        'Unified order data',
        'Accurate capacity view',
        'Planning decisions',
        'Team-wide visibility',
      ],
    },
    agents: {
      ariaLabel: 'Animated AI agent building operational tools from natural language',
      workspace: 'Agent Workspace',
      badgeActive: 'Active',
      badgeInterpreting: 'Interpreting',
      badgeBuilding: 'Building',
      naturalLanguage: 'Natural language',
      prompt:
        'Find sales orders at risk of late delivery, identify the cause, and escalate automatically.',
      interpreting: 'Synpath is interpreting your request…',
      generated: 'Synpath generated agents, dashboards, and workflows.',
      status: 'Status:',
      artifacts: {
        dashboard: {
          title: 'At-Risk Orders Dashboard',
          statusFrom: 'Building',
          statusTo: 'Ready',
        },
        agent: {
          title: 'Late Delivery Agent',
          statusFrom: 'Hiring',
          statusTo: 'Running',
        },
        workflow: {
          title: 'Escalation Workflow',
          statusFrom: 'Creating',
          statusTo: 'Created',
        },
      },
      atRiskOrders: 'At-Risk Orders',
      tableOrder: 'Order',
      tableRisk: 'Risk',
      tableCause: 'Cause',
      tableAction: 'Action',
      riskHigh: 'High',
      riskMedium: 'Medium',
      rows: [
        { cause: 'Material shortage', action: 'Supplier follow-up sent' },
        { cause: 'Machine downtime', action: 'Planner notified' },
        { cause: 'Quality hold', action: 'Escalated to operations' },
      ],
      workflowChip:
        'If delivery risk is high → identify cause → notify owner → update dashboard → escalate if unresolved.',
    },
    deploy: {
      ariaLabel: 'Animated rapid deployment timeline from migration to go-live',
      title: 'Deployment Timeline',
      badge: '3–8 weeks',
      overallProgress: 'Overall progress',
      inProgress: 'In progress',
      steps: [
        { week: 'Week 1–2', label: 'AI data migration' },
        { week: 'Week 3–5', label: 'Customization & agents' },
        { week: 'Week 6–8', label: 'Go live & adoption' },
      ],
    },
  },
};

const fr: HomepageCopy = {
  hero: {
    tag: 'Atteindre les objectifs, réduire les pertes et passer à l’échelle',
    titleLine1: 'L’IA qui écoute et exécute pour vous',
    titleLine2: 'Conçu pour les opérations industrielles',
    forCustomers: 'Pour nos clients :',
    agentQueries: 'Requêtes agents',
    statOtif: 'Livraison complète à temps',
    statWip: 'WIP',
    statCosts: 'Coûts de personnel évités',
    bookDemo: 'Réserver une démo',
    exploreProduct: 'Découvrir le produit',
  },
  complexity: {
    eyebrow: 'Agents personnalisés',
    headingLine1: 'Conçu pour gérer',
    headingLine2: 'la complexité',
    customizableTitle: 'Extrêmement personnalisable',
    customizableDesc:
      'Ajustez chaque détail pour refléter la réalité de vos opérations',
    noSilosTitle: 'Aucun silo de données',
    noSilosDesc:
      'Remplacez les solutions ponctuelles, les systèmes hérités et les tableurs par une plateforme unique et évolutive.',
    copilotTitle: 'Copilot intégré',
    copilotDesc:
      'L’IA vous aide à créer les tableaux de bord et agents personnalisés dont vous avez besoin',
  },
  useCasesIntro: {
    eyebrow: 'Comment ça marche',
    headingLine1: 'Les meilleurs industriels',
    headingLine2: 'utilisent Synpath pour',
    explorePlatform: 'Explorer la plateforme',
    useCases: [
      'Planification de production',
      'Prévision de la demande',
      'Saisie des commandes',
      'Gestion des stocks',
      'Exécution ventes et opérations',
      'Planification ventes et opérations',
      'Automatisation des achats',
      'Automatisation order-to-cash',
      'Prospection clients',
      'Analyse de données',
      'Devis',
      'Estimation',
      'Suivi des créances',
    ],
  },
  howItWorks: {
    truthTitle: 'Construire une source unique de vérité',
    truthDesc:
      'Connectez les données machines, logiciels, documents et savoir-faire tacite en une couche opérationnelle fiable.',
    agentsTitle: 'Créer des agents et outils',
    agentsDescLine1:
      'Utilisez le langage naturel pour créer des agents IA, des tableaux de bord,',
    agentsDescLine2:
      'et des applications qui exécutent les tâches les plus exigeantes pour vous.',
    deployTitle: 'Mise en production en 3 à 8 semaines',
    deployDesc:
      'Avec migration de données par IA, personnalisation rapide et adoption facilitée, Synpath est conçu pour un déploiement accéléré.',
    valueEyebrow: 'Notre proposition de valeur',
    valueHeading:
      'La plateforme industrielle qui s’adapte à votre façon de travailler, et travaille pendant que vous dormez',
    valueNextGenTitle: 'Une plateforme nouvelle génération',
    valueNextGenDesc:
      'Automatisez les tâches les plus exigeantes avec des agents IA intégrés à Synpath — sous votre supervision.',
    valueSimplifyTitle: 'Simplifiez vos opérations',
    valueSimplifyDesc:
      'Synpath gère commandes, stocks, achats, planification, production, qualité, logistique et plus encore dans un système connecté.',
    valueControlTowerTitle: 'Tour de contrôle d’usine',
    valueControlTowerDesc:
      'Concevez, surveillez et supervisez vos opérations pilotées par l’IA en temps réel.',
    valueAnalyzeTitle: 'Analyser et décider',
    valueAnalyzeDesc:
      'Tableaux de bord personnalisés et analyses par IA, intégrés directement à votre système opérationnel.',
  },
  animations: {
    truth: {
      ariaLabel:
        'Connecter des données industrielles fragmentées en une source de vérité fiable',
      fragmentedSources: 'Sources fragmentées',
      trustedLayer: 'Couche de confiance',
      unifiedOutput: 'Sortie unifiée',
      oneSourceTitle: 'Source unique de vérité',
      oneSourceSubtitle: 'Couche opérationnelle unifiée',
      sourceLabels: {
        mes: 'MES',
        erp: 'ERP',
        machine: 'Données machines',
        paper: 'Documents',
        tribal: 'Savoir-faire tacite',
        excel: 'Excel',
        sop: 'SOP',
      },
      insights: [
        'État de production en direct',
        'Données de commandes unifiées',
        'Vue capacitaire précise',
        'Décisions de planification',
        'Visibilité pour toute l’équipe',
      ],
    },
    agents: {
      ariaLabel:
        'Agent IA animé créant des outils opérationnels à partir du langage naturel',
      workspace: 'Espace agent',
      badgeActive: 'Actif',
      badgeInterpreting: 'Interprétation',
      badgeBuilding: 'Construction',
      naturalLanguage: 'Langage naturel',
      prompt:
        'Trouver les commandes à risque de retard, identifier la cause et escalader automatiquement.',
      interpreting: 'Synpath interprète votre demande…',
      generated: 'Synpath a généré des agents, tableaux de bord et workflows.',
      status: 'Statut :',
      artifacts: {
        dashboard: {
          title: 'Tableau des commandes à risque',
          statusFrom: 'Construction',
          statusTo: 'Prêt',
        },
        agent: {
          title: 'Agent retards de livraison',
          statusFrom: 'Recrutement',
          statusTo: 'En cours',
        },
        workflow: {
          title: 'Workflow d’escalade',
          statusFrom: 'Création',
          statusTo: 'Créé',
        },
      },
      atRiskOrders: 'Commandes à risque',
      tableOrder: 'Commande',
      tableRisk: 'Risque',
      tableCause: 'Cause',
      tableAction: 'Action',
      riskHigh: 'Élevé',
      riskMedium: 'Moyen',
      rows: [
        { cause: 'Pénurie de matières', action: 'Relance fournisseur envoyée' },
        { cause: 'Arrêt machine', action: 'Planificateur notifié' },
        { cause: 'Blocage qualité', action: 'Escaladé aux opérations' },
      ],
      workflowChip:
        'Si risque de retard élevé → identifier la cause → notifier le responsable → mettre à jour le tableau → escalader si non résolu.',
    },
    deploy: {
      ariaLabel:
        'Chronologie animée de déploiement rapide, de la migration à la mise en production',
      title: 'Calendrier de déploiement',
      badge: '3–8 semaines',
      overallProgress: 'Progression globale',
      inProgress: 'En cours',
      steps: [
        { week: 'Semaine 1–2', label: 'Migration de données par IA' },
        { week: 'Semaine 3–5', label: 'Personnalisation et agents' },
        { week: 'Semaine 6–8', label: 'Mise en production et adoption' },
      ],
    },
  },
};

const de: HomepageCopy = {
  hero: {
    tag: 'Plan erreichen, Verschwendung senken und skalieren',
    titleLine1: 'KI, die zuhört und für Sie ausführt',
    titleLine2: 'Für Fertigungsbetriebe entwickelt',
    forCustomers: 'Für unsere Kunden:',
    agentQueries: 'Agenten-Anfragen',
    statOtif: 'Pünktlich und vollständig',
    statWip: 'WIP',
    statCosts: 'Vermiedene Personalkosten',
    bookDemo: 'Demo buchen',
    exploreProduct: 'Produkt entdecken',
  },
  complexity: {
    eyebrow: 'Individuelle Agenten',
    headingLine1: 'Gebaut für',
    headingLine2: 'Komplexität',
    customizableTitle: 'Extrem anpassbar',
    customizableDesc:
      'Feinabstimmung jedes Details an Ihre betriebliche Realität',
    noSilosTitle: 'Keine Datensilos',
    noSilosDesc:
      'Ersetzen Sie Insellösungen, Legacy-Systeme und Tabellen durch eine skalierbare Plattform.',
    copilotTitle: 'Integrierter Copilot',
    copilotDesc:
      'KI hilft Ihnen, beliebige Dashboards und individuelle Agenten zu erstellen',
  },
  useCasesIntro: {
    eyebrow: 'So funktioniert es',
    headingLine1: 'Führende Hersteller',
    headingLine2: 'nutzen Synpath für',
    explorePlatform: 'Plattform entdecken',
    useCases: [
      'Produktionsplanung',
      'Nachfrageprognose',
      'Auftragserfassung',
      'Bestandsmanagement',
      'Sales & Operations Execution',
      'Sales & Operations Planning',
      'Beschaffungsautomatisierung',
      'Order-to-Cash-Automatisierung',
      'Kundenakquise',
      'Datenanalyse',
      'Angebotserstellung',
      'Kalkulation',
      'Debitorenbuchhaltung',
    ],
  },
  howItWorks: {
    truthTitle: 'Eine einzige Quelle der Wahrheit aufbauen',
    truthDesc:
      'Verbinden Sie Maschinendaten, Software, Unterlagen und Erfahrungswissen zu einer zuverlässigen Betriebsschicht.',
    agentsTitle: 'Agenten und Tools erstellen',
    agentsDescLine1:
      'Nutzen Sie natürliche Sprache, um KI-Agenten, Dashboards',
    agentsDescLine2:
      'und Apps zu erstellen, die anspruchsvolle Aufgaben für Sie ausführen.',
    deployTitle: 'Live in 3–8 Wochen',
    deployDesc:
      'Mit KI-Datenmigration, schneller Anpassung und einfacher Nutzerakzeptanz ist Synpath für schnelle Bereitstellung gebaut.',
    valueEyebrow: 'Unser Wertversprechen',
    valueHeading:
      'Die Fertigungsplattform, die zu Ihrer Arbeitsweise passt — und arbeitet, während Sie schlafen',
    valueNextGenTitle: 'Eine Plattform der nächsten Generation',
    valueNextGenDesc:
      'Automatisieren Sie die anspruchsvollsten Aufgaben mit KI-Agenten, direkt in Synpath integriert — unter Ihrer Aufsicht.',
    valueSimplifyTitle: 'Vereinfachen Sie Ihre Abläufe',
    valueSimplifyDesc:
      'Synpath verwaltet Aufträge, Bestand, Einkauf, Planung, Produktion, Qualität, Logistik und mehr in einem vernetzten System.',
    valueControlTowerTitle: 'Factory Control Tower',
    valueControlTowerDesc:
      'Entwerfen, überwachen und steuern Sie Ihre KI-gestützten Abläufe in Echtzeit.',
    valueAnalyzeTitle: 'Analysieren & Entscheiden',
    valueAnalyzeDesc:
      'Individuelle Dashboards und KI-gestützte Analysen, direkt in Ihr Betriebssystem integriert.',
  },
  animations: {
    truth: {
      ariaLabel:
        'Fragmentierte Fertigungsdaten zu einer zuverlässigen Quelle der Wahrheit verbinden',
      fragmentedSources: 'Fragmentierte Quellen',
      trustedLayer: 'Vertrauensebene',
      unifiedOutput: 'Vereinheitlichte Ausgabe',
      oneSourceTitle: 'Eine Quelle der Wahrheit',
      oneSourceSubtitle: 'Vereinheitlichte Betriebsschicht',
      sourceLabels: {
        mes: 'MES',
        erp: 'ERP',
        machine: 'Maschinendaten',
        paper: 'Unterlagen',
        tribal: 'Erfahrungswissen',
        excel: 'Excel',
        sop: 'SOPs',
      },
      insights: [
        'Live-Produktionsstatus',
        'Vereinheitlichte Auftragsdaten',
        'Genaue Kapazitätsübersicht',
        'Planungsentscheidungen',
        'Teamweite Transparenz',
      ],
    },
    agents: {
      ariaLabel:
        'Animierter KI-Agent erstellt operative Tools aus natürlicher Sprache',
      workspace: 'Agenten-Arbeitsbereich',
      badgeActive: 'Aktiv',
      badgeInterpreting: 'Interpretiert',
      badgeBuilding: 'Erstellt',
      naturalLanguage: 'Natürliche Sprache',
      prompt:
        'Verkaufsaufträge mit Verspätungsrisiko finden, Ursache ermitteln und automatisch eskalieren.',
      interpreting: 'Synpath interpretiert Ihre Anfrage…',
      generated: 'Synpath hat Agenten, Dashboards und Workflows erstellt.',
      status: 'Status:',
      artifacts: {
        dashboard: {
          title: 'Dashboard gefährdeter Aufträge',
          statusFrom: 'Erstellung',
          statusTo: 'Bereit',
        },
        agent: {
          title: 'Verspätungs-Agent',
          statusFrom: 'Einstellung',
          statusTo: 'Läuft',
        },
        workflow: {
          title: 'Eskalations-Workflow',
          statusFrom: 'Erstellung',
          statusTo: 'Erstellt',
        },
      },
      atRiskOrders: 'Gefährdete Aufträge',
      tableOrder: 'Auftrag',
      tableRisk: 'Risiko',
      tableCause: 'Ursache',
      tableAction: 'Maßnahme',
      riskHigh: 'Hoch',
      riskMedium: 'Mittel',
      rows: [
        { cause: 'Materialengpass', action: 'Lieferanten-Nachverfolgung gesendet' },
        { cause: 'Maschinenausfall', action: 'Planer benachrichtigt' },
        { cause: 'Qualitätssperre', action: 'An Operations eskaliert' },
      ],
      workflowChip:
        'Bei hohem Lieferrisiko → Ursache ermitteln → Verantwortlichen benachrichtigen → Dashboard aktualisieren → eskalieren falls ungelöst.',
    },
    deploy: {
      ariaLabel:
        'Animierte Schnellbereitstellungs-Timeline von Migration bis Go-Live',
      title: 'Bereitstellungs-Timeline',
      badge: '3–8 Wochen',
      overallProgress: 'Gesamtfortschritt',
      inProgress: 'In Bearbeitung',
      steps: [
        { week: 'Woche 1–2', label: 'KI-Datenmigration' },
        { week: 'Woche 3–5', label: 'Anpassung & Agenten' },
        { week: 'Woche 6–8', label: 'Go-Live & Adoption' },
      ],
    },
  },
};

const zh: HomepageCopy = {
  hero: {
    tag: '达成计划、减少浪费、实现规模化',
    titleLine1: '倾听并为您执行的 AI',
    titleLine2: '为制造运营而生',
    forCustomers: '客户成果：',
    agentQueries: '智能体查询次数',
    statOtif: '准时足量交付',
    statWip: '在制品',
    statCosts: '节省人力成本',
    bookDemo: '预约演示',
    exploreProduct: '探索产品',
  },
  complexity: {
    eyebrow: '定制智能体',
    headingLine1: '专为应对',
    headingLine2: '复杂运营而打造',
    customizableTitle: '高度可定制',
    customizableDesc: '精细调整每个细节，贴合您的运营实际',
    noSilosTitle: '消除数据孤岛',
    noSilosDesc: '用一套可扩展的平台，替代零散方案、遗留系统和电子表格',
    copilotTitle: '内置 Copilot',
    copilotDesc: 'AI 助您构建所需的仪表盘和定制智能体',
  },
  useCasesIntro: {
    eyebrow: '工作原理',
    headingLine1: '领先制造商',
    headingLine2: '使用 Synpath 实现',
    explorePlatform: '探索平台',
    useCases: [
      '生产排程',
      '需求预测',
      '订单录入',
      '库存管理',
      '销售与运营执行',
      '销售与运营计划',
      '采购自动化',
      '订单到收款自动化',
      '客户开拓',
      '数据分析',
      '报价',
      '估算',
      '应收账款跟踪',
    ],
  },
  howItWorks: {
    truthTitle: '构建单一可信数据源',
    truthDesc:
      '将机器数据、软件、纸质文档和隐性知识整合为可靠的操作层。',
    agentsTitle: '创建智能体与工具',
    agentsDescLine1: '用自然语言创建 AI 智能体、仪表盘',
    agentsDescLine2: '以及为您执行艰巨任务的应用。',
    deployTitle: '3–8 周上线',
    deployDesc:
      '凭借 AI 数据迁移、快速定制和便捷的用户采纳，Synpath 专为快速部署而设计。',
    valueEyebrow: '我们的价值主张',
    valueHeading: '贴合您工作方式的制造平台，在您休息时持续运转',
    valueNextGenTitle: '下一代平台',
    valueNextGenDesc:
      '用内置在 Synpath 中的 AI 智能体自动化最艰巨的任务——在您的监督下运行。',
    valueSimplifyTitle: '简化您的运营',
    valueSimplifyDesc:
      'Synpath 在一个互联系统中处理订单、库存、采购、计划、生产、质量、物流等全流程。',
    valueControlTowerTitle: '工厂控制塔',
    valueControlTowerDesc: '实时设计、监控和监督 AI 驱动的运营。',
    valueAnalyzeTitle: '分析与决策',
    valueAnalyzeDesc: '定制仪表盘和 AI 分析，直接内置在您的运营系统中。',
  },
  animations: {
    truth: {
      ariaLabel: '将分散的制造数据连接为单一可信数据源',
      fragmentedSources: '分散数据源',
      trustedLayer: '可信层',
      unifiedOutput: '统一输出',
      oneSourceTitle: '单一可信数据源',
      oneSourceSubtitle: '统一操作层',
      sourceLabels: {
        mes: 'MES',
        erp: 'ERP',
        machine: '机器数据',
        paper: '纸质文档',
        tribal: '隐性知识',
        excel: 'Excel',
        sop: 'SOP',
      },
      insights: [
        '实时生产状态',
        '统一订单数据',
        '准确产能视图',
        '计划决策',
        '全员可见性',
      ],
    },
    agents: {
      ariaLabel: 'AI 智能体通过自然语言构建运营工具的动画演示',
      workspace: '智能体工作区',
      badgeActive: '运行中',
      badgeInterpreting: '解析中',
      badgeBuilding: '构建中',
      naturalLanguage: '自然语言',
      prompt: '查找有逾期风险的销售订单，识别原因并自动升级处理。',
      interpreting: 'Synpath 正在解析您的请求…',
      generated: 'Synpath 已生成智能体、仪表盘和工作流。',
      status: '状态：',
      artifacts: {
        dashboard: {
          title: '风险订单仪表盘',
          statusFrom: '构建中',
          statusTo: '就绪',
        },
        agent: {
          title: '逾期交付智能体',
          statusFrom: '部署中',
          statusTo: '运行中',
        },
        workflow: {
          title: '升级工作流',
          statusFrom: '创建中',
          statusTo: '已创建',
        },
      },
      atRiskOrders: '风险订单',
      tableOrder: '订单',
      tableRisk: '风险',
      tableCause: '原因',
      tableAction: '措施',
      riskHigh: '高',
      riskMedium: '中',
      rows: [
        { cause: '物料短缺', action: '已发送供应商跟进' },
        { cause: '设备停机', action: '已通知计划员' },
        { cause: '质量冻结', action: '已升级至运营团队' },
      ],
      workflowChip:
        '若交付风险为高 → 识别原因 → 通知负责人 → 更新仪表盘 → 未解决则升级。',
    },
    deploy: {
      ariaLabel: '从数据迁移到上线的快速部署时间线动画',
      title: '部署时间线',
      badge: '3–8 周',
      overallProgress: '总体进度',
      inProgress: '进行中',
      steps: [
        { week: '第 1–2 周', label: 'AI 数据迁移' },
        { week: '第 3–5 周', label: '定制与智能体' },
        { week: '第 6–8 周', label: '上线与推广' },
      ],
    },
  },
};

export const homepageCopy: Record<HomepageLocale, HomepageCopy> = {
  en,
  fr,
  de,
  zh,
};

export const numberFormatLocales: Record<HomepageLocale, string> = {
  en: 'en-US',
  fr: 'fr-FR',
  de: 'de-DE',
  zh: 'zh-CN',
};
