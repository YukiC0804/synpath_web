import T, { useState, useEffect, useRef, useContext, useMemo, createContext, useCallback } from 'react';
import { Link, Navigate, Outlet, useLocation, useParams, BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero } from './components/home/Hero';
import { OperationalComplexitySection } from './components/home/OperationalComplexitySection';
import { HowItWorksSection } from './components/home/HowItWorksSection';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

const h = T;
const $e = Link;
const Mw = Outlet;
const en = useLocation;
const gw = useParams;

const Hc = [{
  label: "SALES",
  category: "sales"
}, {
  label: "OPERATIONS",
  category: "operations"
}];
const gg = [{
  id: "quoting",
  category: "sales",
  title: "Quoting",
  description: "Receive RFQ emails, match parts against your catalog, validate pricing, and send professional quotes automatically.",
  heroTitle: "Quoting",
  heroSubtitle: "Receive RFQ emails, match parts against your catalog, validate pricing, and send professional quotes automatically.",
  features: [{
    title: "RFQ Intake",
    description: "Parse incoming emails and attachments to extract line items automatically."
  }, {
    title: "Catalog Matching",
    description: "Match parts against your ERP catalog with customer-specific pricing rules."
  }, {
    title: "Quote Generation",
    description: "Produce professional quotes with validated pricing and lead times."
  }],
  howItWorks: {
    title: "How it works",
    subtitle: "From trigger to outcome.",
    steps: [{
      label: "RFQ Email"
    }, {
      label: "Extract Parts"
    }, {
      label: "ERP Pricing"
    }, {
      label: "Quote Sent"
    }],
    demoType: "quoting"
  },
  setupHeadline: "Live in 90 days.",
  setupSteps: [{
    step: 1,
    title: "Catalog, pricing, and customer rules intake",
    description: "Import part masters, customer tiers, volume breaks, and historical quote outcomes. Synpath learns how your sales team prices — not a generic price list."
  }, {
    step: 2,
    title: "30 days of inbox and ERP integration",
    description: "Connect RFQ email, attachments, and ERP pricing fields. The agent learns to match line items, flag missing data, and apply your approval rules."
  }, {
    step: 3,
    title: "30 days of beta testing",
    description: "Run draft quotes alongside your sales team on live RFQs. We tune extraction accuracy, pricing validation, and quote formatting until outputs are ready for review."
  }, {
    step: 4,
    title: "30 days of rollout and sales training",
    description: "Deploy into your quoting workflow with clear review gates. Your team gets playbooks for exceptions, margin checks, and customer-ready quote release."
  }, {
    step: 5,
    title: "90 days from kickoff to daily quoting support",
    description: "A focused three-month rollout that layers on your existing inbox and ERP — no rip-and-replace of how your team sells today."
  }],
  whySectionLabel: "Why Synpath Quoting",
  whyTitle: "From RFQ email to validated quote draft in minutes.",
  benefits: ["Parses RFQ emails and attachments into structured line items", "Matches parts against your catalog and customer pricing rules", "Flags missing data before a quote leaves your building", "Keeps a full audit trail from RFQ intake to quote sent", "Goes live only after accuracy is validated in beta"],
  faqs: [{
    question: "What does Synpath Quoting handle end to end?",
    answer: "Synpath monitors RFQ inboxes, extracts parts and quantities from emails and PDFs, matches them to your catalog, validates pricing against ERP rules, and drafts a customer-ready quote for your team to review and send."
  }, {
    question: "How long does rollout take?",
    answer: "Most customers are live within 90 days: catalog intake, 30 days of integration, 30 days of beta testing with your sales team, then rollout. Synpath accelerates drafting — your team keeps final approval."
  }, {
    question: "Will it work with our current ERP and email?",
    answer: "Yes. Synpath connects to common manufacturing ERPs and email systems. We map fields to how your team already quotes, including customer-specific pricing and exception handling."
  }, {
    question: "How do you prevent misquotes?",
    answer: "Every quote draft runs through catalog matching, pricing validation, and missing-data checks before review. The system goes into production only after beta testing hits your accuracy thresholds."
  }]
}, {
  id: "estimating",
  category: "sales",
  title: "Estimating",
  description: "Train custom AI agents on your historical job costs, supplier quotes, and costing rules. Generate reliable, supplier-aware estimates that protect target margins.",
  heroTitle: "Estimating",
  heroSubtitle: "Train custom AI agents on your historical job costs, supplier quotes, and costing rules. Generate reliable, supplier-aware estimates that protect target margins.",
  features: [{
    title: "Historical Training",
    description: "Train on cost data from years of actual jobs produced at your facility."
  }, {
    title: "Document Processing",
    description: "Process STEP files, CAD drawings, and spec sheets automatically."
  }, {
    title: "Margin Protection",
    description: "Estimates maintain target margins validated against historical quotes."
  }],
  howItWorks: {
    title: "How it works",
    subtitle: "From trigger to outcome.",
    steps: [{
      label: "RFQ Email"
    }, {
      label: "Drawings + Specs"
    }, {
      label: "Estimate"
    }],
    demoType: "estimating"
  },
  setupHeadline: "Live in 90 days.",
  setupSteps: [{
    step: 1,
    title: "Historical costing and supplier data intake",
    description: "Upload past job costs, won/lost quotes, routing assumptions, and approved supplier rate cards. Synpath maps how your team actually prices work — not a generic template."
  }, {
    step: 2,
    title: "30 days of model build and integration",
    description: "We connect email, drawings, STEP files, and your ERP costing fields. The estimating engine learns your margin rules, overhead structure, and shop-rate logic."
  }, {
    step: 3,
    title: "30 days of beta testing",
    description: "Run draft estimates side by side with your estimators on live RFQs. We refine feature detection, supplier RFQ triggers, and margin checks until outputs are consistently usable."
  }, {
    step: 4,
    title: "30 days of rollout and estimator training",
    description: "Deploy to your quoting workflow with clear review steps. Your team gets playbooks for approving supplier quotes, editing cost lines, and releasing customer-ready estimates."
  }, {
    step: 5,
    title: "90 days from kickoff to production estimating",
    description: "A focused three-month path from data intake to daily use — without a lengthy IT project or rip-and-replace of your existing systems."
  }],
  whySectionLabel: "Why Synpath Estimating",
  whyTitle: "From RFQ to supplier-backed draft quote in minutes.",
  benefits: ["Learns from your past jobs, supplier quotes, and costing rules", "Identifies cost drivers from drawings, STEP files, and specs", "Flags where external supplier pricing is required", "Checks target margin before quote submission", "Goes live only after accuracy is validated"],
  faqs: [{
    question: "What does Synpath Estimating actually do?",
    answer: "Synpath reads incoming RFQs, extracts requirements from drawings and specs, builds a structured cost breakdown, and drafts an estimate that includes internal operations and external supplier quotes where needed. Your team reviews, adjusts, and approves before anything goes to the customer."
  }, {
    question: "How long does implementation take?",
    answer: "Most teams are live within 90 days: data intake, 30 days of model build, 30 days of beta testing alongside your estimators, then rollout and training. Synpath does not replace your sign-off — it accelerates the path to a defensible draft quote."
  }, {
    question: "Can it work with our ERP and email tools?",
    answer: "Yes. Synpath layers on top of your current stack — ERP job costing, inbox RFQs, spreadsheets, and supplier quote threads. We integrate with common manufacturing systems and tailor field mappings to how your estimators already work."
  }, {
    question: "When is an estimate ready to send?",
    answer: "Synpath produces a draft with cost lines, supplier status, and margin checks. It goes into production use only after beta testing shows estimates align with your historical outcomes and approval thresholds. Final quote release always stays with your team."
  }]
}, {
  id: "production-planning",
  category: "operations",
  title: "Production Planning",
  description: "Streamline scheduling and optimize resource allocation with intelligent planning.",
  heroTitle: "Intelligent Production Planning",
  heroSubtitle: "Optimize your floor schedule automatically by factoring in machine availability, shifts, and dependencies. Stop relying on outdated spreadsheets.",
  features: [{
    title: "Dynamic Scheduling",
    description: "Automatically adjust production schedules based on real-time shop floor data."
  }, {
    title: "Resource Optimization",
    description: "Ensure machines and operators are allocated efficiently to minimize downtime."
  }, {
    title: "Constraint Management",
    description: "Factor in tooling, materials, and human constraints simultaneously."
  }],
  howItWorks: {
    title: "How it works",
    subtitle: "Turn sales orders into ready-to-dispatch work orders.",
    steps: [{
      label: "One-Click Plan"
    }, {
      label: "WO Tree"
    }, {
      label: "WO Dispatched Instantly"
    }],
    demoType: "video"
  },
  workflowVideos: ["/NP One Click Plan.mov", "/NP WO Tree.mov", "/NP Distribute WO.mov"],
  setupHeadline: "Live in 90 days.",
  setupSteps: [{
    step: 1,
    title: "Schedule, routing, and constraint data intake",
    description: "Import machines, shifts, routings, open work orders, and material pegging from your ERP. Synpath mirrors how your planners actually build the floor schedule."
  }, {
    step: 2,
    title: "30 days of planning engine configuration",
    description: "Connect ERP work orders, capacity calendars, and dependency rules. The engine learns your sequencing logic, setup times, and resource constraints."
  }, {
    step: 3,
    title: "30 days of beta testing",
    description: "Run Synpath plans alongside your planners on live demand. We tune load balancing, WO sequencing, and dispatch timing until outputs match shop-floor reality."
  }, {
    step: 4,
    title: "30 days of rollout and planner training",
    description: "Deploy one-click planning into daily operations. Your team gets playbooks for exceptions, manual overrides, and instant work order release."
  }, {
    step: 5,
    title: "90 days from kickoff to autonomous planning",
    description: "Three months from data intake to a planning workflow that keeps pace with changing demand — without replacing your ERP."
  }],
  whySectionLabel: "Why Synpath Production Planning",
  whyTitle: "From backlog chaos to a dispatch-ready plan in one click.",
  benefits: ["Builds a feasible plan from live ERP demand and capacity", "Visualizes work order dependencies before release", "Balances load across machines and shifts automatically", "Dispatches work orders with one confirmed action", "Goes live only after planners validate plan quality in beta"],
  faqs: [{
    question: "What does Synpath Production Planning automate?",
    answer: "Synpath reads open demand, applies your routing and capacity rules, generates a sequenced plan, shows the work order tree, and lets planners release dispatch-ready work orders in one step."
  }, {
    question: "How long does implementation take?",
    answer: "Most shops are live within 90 days: ERP data intake, 30 days of engine configuration, 30 days of beta testing with planners, then rollout. Planners stay in control of final release."
  }, {
    question: "Does it replace our ERP scheduler?",
    answer: "No. Synpath sits on top of your ERP, using its work orders, routings, and inventory data to produce a smarter floor plan — then writes back dispatch actions your team approves."
  }, {
    question: "What happens when demand changes mid-week?",
    answer: "Re-run one-click planning to refresh the schedule against current backlog, capacity, and material availability. Synpath is built for the constant churn of real manufacturing."
  }]
}, {
  id: "urgent-order",
  category: "operations",
  title: "Urgent Order",
  description: "Handle expedite requests seamlessly without disrupting your existing commitments.",
  heroTitle: "Handle Expedites with Confidence",
  heroSubtitle: "Evaluate the capacity impact of a drop-in 'hot job' instantly. Synpath tells you if you can safely accept an urgent order without missing other deadlines.",
  features: [{
    title: "Impact Analysis",
    description: "See exactly which jobs will slip if you insert an expedite order."
  }, {
    title: "Scenario Planning",
    description: "Test different routing and shift scenarios before committing to a delivery date."
  }, {
    title: "Instant Re-routing",
    description: "Automatically reprioritize existing queues to accommodate the critical path."
  }],
  howItWorks: {
    title: "How it works",
    subtitle: "From rush order to confirmed production plan.",
    steps: [{
      label: "AI Simulation"
    }, {
      label: "One Click Replan"
    }, {
      label: "WO Dispatched Instantly"
    }],
    demoType: "video"
  },
  workflowVideos: ["/RO simulation.mov", "/RO Replan.mov", "/RO 3.mov"],
  setupHeadline: "Live in 90 days.",
  setupSteps: [{
    step: 1,
    title: "Capacity model and expedite rules intake",
    description: "Import current schedule, machine load, customer priorities, and overtime policies. Synpath learns what \"yes\" and \"no\" mean for your operation."
  }, {
    step: 2,
    title: "30 days of simulation and replan configuration",
    description: "Connect order intake channels and ERP scheduling. The agent learns to model slip risk, alternate routings, and customer impact before you commit."
  }, {
    step: 3,
    title: "30 days of beta testing",
    description: "Run expedite simulations on real hot orders alongside your planners. We refine impact visibility, replan quality, and dispatch timing until decisions are trustworthy."
  }, {
    step: 4,
    title: "30 days of rollout and operations training",
    description: "Deploy expedite handling into daily sales and planning workflows. Your team gets clear steps for accepting, deferring, or renegotiating urgent orders."
  }, {
    step: 5,
    title: "90 days from kickoff to confident expedite response",
    description: "Three months to turn \"Can we fit it in?\" from a multi-hour scramble into a data-backed answer your team can stand behind."
  }],
  whySectionLabel: "Why Synpath Urgent Order",
  whyTitle: "Know the cost of yes before you promise the date.",
  benefits: ["Simulates capacity impact before accepting an expedite", "Shows which orders slip if the hot job is inserted", "Replans the floor schedule in one confirmed action", "Releases updated work orders without manual rework", "Goes live only after planners trust simulation outcomes"],
  faqs: [{
    question: "How does Synpath evaluate an urgent order?",
    answer: "Synpath models the expedite against your live schedule, shows downstream slip and resource conflicts, proposes a replan, and lets your team dispatch updated work orders if you accept the trade-offs."
  }, {
    question: "Can sales use this without waiting on planning?",
    answer: "Synpath gives sales a fast, data-backed view of feasibility and delivery risk. Final commitment still follows your approval process — but the analysis happens in minutes, not days."
  }, {
    question: "What data does it need to run simulations?",
    answer: "Open work orders, routings, machine calendars, and current customer commitments from your ERP. Synpath uses the same data your planners already rely on."
  }, {
    question: "How long until we can use it on live expedites?",
    answer: "Most teams are live within 90 days after intake, configuration, beta testing on real hot orders, and rollout training with sales and planning."
  }]
}, {
  id: "machine-breakdown",
  category: "operations",
  title: "Machine Breakdown",
  description: "Automate your contingency plans and minimize the impact of equipment failure.",
  heroTitle: "Resilient Downtime Management",
  heroSubtitle: "When a CNC goes offline, instantly understand the blast radius. Automatically identify affected orders and alternate routing paths.",
  features: [{
    title: "Blast Radius Visibility",
    description: "Instantly see every customer commitment affected by the outage."
  }, {
    title: "Alternate Sourcing",
    description: "Identify capable backup machines or external vendors to absorb the load."
  }, {
    title: "Proactive Communication",
    description: "Automatically draft status updates to stakeholders before they ask."
  }],
  howItWorks: {
    title: "How it works",
    subtitle: "From machine alert to recovery plan.",
    steps: [{
      label: "Detect Machine Alerts"
    }, {
      label: "AI Simulation"
    }, {
      label: "One-Click Replan"
    }],
    demoType: "video"
  },
  workflowVideos: ["/MB Notification.mov", "/MB simulation.mov", "/MB New plan.mov"],
  setupHeadline: "Live in 90 days.",
  setupSteps: [{
    step: 1,
    title: "Machine, routing, and alert source intake",
    description: "Connect shop-floor alerts, machine master data, alternate routings, and customer due dates. Synpath maps which orders are truly at risk when a asset goes down."
  }, {
    step: 2,
    title: "30 days of downtime response configuration",
    description: "Wire alert triggers to simulation and replan logic. The system learns backup machines, outsourcing options, and recovery sequencing for your facility."
  }, {
    step: 3,
    title: "30 days of beta testing",
    description: "Run breakdown scenarios against historical and live outages. We tune blast-radius visibility, alternate routing quality, and replan speed until responses are actionable."
  }, {
    step: 4,
    title: "30 days of rollout and supervisor training",
    description: "Deploy downtime playbooks to planners and supervisors. Your team gets clear steps for simulation review, replan approval, and stakeholder updates."
  }, {
    step: 5,
    title: "90 days from kickoff to autonomous downtime response",
    description: "Three months to replace spreadsheet firefighting with a repeatable recovery workflow when machines stop."
  }],
  whySectionLabel: "Why Synpath Machine Breakdown",
  whyTitle: "See the blast radius and recovery path in minutes.",
  benefits: ["Detects machine alerts from shop-floor and monitoring systems", "Shows every order affected by the outage", "Simulates alternate machines and routing options", "Releases a recovery plan in one confirmed action", "Goes live only after downtime scenarios pass beta review"],
  faqs: [{
    question: "What happens when a machine goes down?",
    answer: "Synpath captures the alert, calculates affected work orders and customer commitments, simulates recovery options, and produces a replan your team can approve and dispatch immediately."
  }, {
    question: "Can it route work to backup machines automatically?",
    answer: "Synpath proposes alternate routings based on capable machines and current load. Your planners review and approve the recovery plan before work orders are updated."
  }, {
    question: "How does it connect to our shop floor?",
    answer: "Alerts can come from ERP downtime entries, machine monitoring, or manual supervisor input. Synpath normalizes the signal and triggers the same simulation workflow every time."
  }, {
    question: "How long does setup take?",
    answer: "Most facilities are live within 90 days: routing and alert intake, 30 days of configuration, 30 days of beta testing on real or historical outages, then rollout."
  }]
}, {
  id: "material-delay",
  category: "operations",
  title: "Material Delay",
  description: "Proactively manage supply chain disruptions and coordinate schedule adjustments.",
  heroTitle: "Supply Chain Resilience",
  heroSubtitle: "Supplier running late? Synpath recalculates all downstream dependencies and flags orders that need alternate sourcing.",
  features: [{
    title: "Dependency Tracking",
    description: "Map raw materials precisely to intermediate and finished goods."
  }, {
    title: "Downstream Adjustments",
    description: "Push out start dates for jobs blocked by delayed materials automatically."
  }, {
    title: "Supplier Coordination",
    description: "Track late POs and automate follow-ups to vendors missing commitments."
  }],
  howItWorks: {
    title: "How it works",
    subtitle: "From supplier delay to adjusted production plan.",
    steps: [{
      label: "Delay Detect"
    }, {
      label: "Impact Simulation"
    }, {
      label: "One Click Replan"
    }],
    demoType: "video"
  },
  workflowVideos: ["/MD Notification.mov", "/MD simulation.mov", "/MD replan.mov"],
  setupHeadline: "Live in 90 days.",
  setupSteps: [{
    step: 1,
    title: "Supplier, PO, and pegging data intake",
    description: "Import purchase orders, material lead times, BOM pegging, and open production orders. Synpath traces how a late line item propagates through your build schedule."
  }, {
    step: 2,
    title: "30 days of delay detection and simulation setup",
    description: "Connect supplier updates, ERP receipts, and planning data. The system learns which jobs are blocked, which can proceed, and what alternate supply options exist."
  }, {
    step: 3,
    title: "30 days of beta testing",
    description: "Run material delay scenarios on live supply disruptions. We tune detection speed, downstream impact accuracy, and replan quality until planners trust the output."
  }, {
    step: 4,
    title: "30 days of rollout and buyer-planner training",
    description: "Deploy delay response into purchasing and planning workflows. Your team gets playbooks for supplier follow-up, schedule adjustment, and customer communication."
  }, {
    step: 5,
    title: "90 days from kickoff to proactive supply response",
    description: "Three months to move from reactive fire drills to an autonomous workflow that adjusts the plan the moment supply slips."
  }],
  whySectionLabel: "Why Synpath Material Delay",
  whyTitle: "Catch late material before it becomes a missed ship date.",
  benefits: ["Detects supplier delays from PO status and inbound updates", "Maps downstream jobs blocked by missing material", "Simulates schedule impact before orders are late", "Replans production with one confirmed action", "Goes live only after delay scenarios pass beta review"],
  faqs: [{
    question: "How does Synpath detect a material delay?",
    answer: "Synpath monitors purchase order dates, supplier confirmations, and receipt activity. When a line item slips, it immediately flags affected production orders and simulates the schedule impact."
  }, {
    question: "Can it suggest alternate sourcing?",
    answer: "Synpath highlights jobs at risk and gives planners the replan options your rules allow — including alternate suppliers or partial builds where material is available."
  }, {
    question: "Does it replace our buyers?",
    answer: "No. Buyers still own supplier relationships. Synpath automates detection, impact analysis, and schedule adjustment so planning can respond while purchasing chases supply."
  }, {
    question: "How long until we can run this on live PO slips?",
    answer: "Most teams are live within 90 days after pegging intake, 30 days of configuration, 30 days of beta testing on real delays, and rollout with buyers and planners."
  }]
}];
const h1 = {
  from: "From:",
  to: "To:",
  subject: "Subject:",
  matched: "Matched",
  verified: "Verified",
  found: "Found",
  qty: "Qty",
  customer: "Customer",
  customerPrice: "Customer Price",
  setup: "Setup",
  process: "Process",
  quoteTotal: "Quote Total",
  marginCheck: "Margin Check",
  target: "Target",
  achieved: "Achieved",
  validUntil: "Valid Until",
  leadTime: "Lead Time",
  terms: "Terms",
  lines: "Lines",
  part: "Part",
  description: "Description",
  material: "Material",
  unit: "Unit",
  extended: "Extended",
  catalog: "Catalog",
  received: "Received",
  pending: "Pending",
  supplier: "Supplier",
  capability: "Capability",
  location: "Location",
  status: "Status",
  hrs: "Hrs",
  rate: "Rate",
  amount: "Amount",
  basis: "Basis",
  materials: "Materials",
  margin: "Margin",
  partNumber: "Part Number",
  quote: "Quote",
  customerColon: "Customer:"
};
const m1 = {
  statuses: ["Reading RFQ attachments...", "Matching against ERP/catalog...", "Generating Quote Document...", "Quote Sent in 2 Minutes"],
  email: {
    inbox: "Inbox · RFQ from Northbridge Robotics",
    subjectLine: "RFQ #NBR-260184 — Precision Machined Components",
    greeting: "Hi,",
    body: "We are requesting a quote for the following precision machined components per the attached drawings and STEP files.",
    closing: "Please provide unit pricing, tooling/setup charges, lead time, and quote validity.",
    regards: "Best regards,",
    team: "Procurement Team"
  },
  extract: {
    title: "AI Extracted Parts",
    rfqReference: "RFQ Reference",
    linesDetected: "Lines Detected",
    linesCount: "3 of 3",
    drawingRevisions: "Drawing Revisions",
    filesChecked: "3 files checked"
  },
  erp: {
    title: "ERP/CRM Pricing Lookup"
  },
  sent: {
    readyToSend: "Ready to Send",
    ref: "Northbridge Robotics · RFQ #NBR-260184"
  },
  parts: [{
    description: "Motor Mounting Plate, CNC milled",
    material: "6061-T6 Aluminium",
    process: "CNC milling + black anodising"
  }, {
    description: "Bearing Housing, turned + milled",
    material: "304 Stainless Steel",
    process: "CNC turning + milling + passivation"
  }, {
    description: "Precision Spacer, cylindrical",
    material: "4140 Steel",
    process: "CNC turning + zinc phosphate coating"
  }]
};
const p1 = {
  statuses: ["Opening attachments...", "Analyzing Historical Jobs + Supplier Pricing Requirements...", "Draft Estimate Ready · 2 Supplier Quotes Confirmed · 1 Pending"],
  email: {
    inbox: "Inbox · Custom Aluminium RFQ",
    subjectLine: "ALU25-018 — Machined Aluminium Support Profile, Quote Request",
    greeting: "Hi team,",
    body1: "Please quote the attached machined aluminium support profile.",
    body2: "Profile drawings, machining requirements, surface finish specs, and a STEP file are attached.",
    body3: "Need pricing + lead time by Friday.",
    signature: "Engineering, Alvera Industrial"
  },
  drawings: {
    partDrawing: "Part Drawing",
    buildSpec: "Build Specification",
    profileLength: "Profile Length",
    profileLengthValue: "1,850 mm",
    machiningFeatures: "Machining Features",
    machiningFeaturesValue: "14 detected",
    supplierPricingNeeded: "Supplier Pricing Needed",
    supplierPricingNeededValue: "2 items"
  },
  quote: {
    draftEstimate: "Draft Estimate",
    subtitle: "Alvera Industrial · Machined Aluminium Support Profile",
    marginSummary: "Margin target: 32%, achieved 33.7%",
    leadTimeSummary: "Lead time: 5–6 weeks",
    internalOps: "Internal Operations",
    supplierQuotes: "Supplier Quotes",
    costLine: "Cost Line",
    supplierRfqs: "Supplier RFQs",
    aiRecommendation: "AI Recommendation",
    recAnodising: "Use Supplier A for anodising based on confirmed finish capability, proximity, and fastest response time.",
    recInserts: "Use Supplier C for threaded inserts based on confirmed stock availability and 5-day lead time.",
    approvalNote: "Final supplier selection remains under your team's approval."
  },
  costLines: [{
    line: "Extruded aluminium profile",
    basis: "EN AW-6082 T6, 555 m incl. scrap allowance"
  }, {
    line: "Cutting",
    basis: "Batch qty 300 pcs"
  }, {
    line: "CNC setup + programming",
    basis: "New profile machining program"
  }, {
    line: "CNC drilling + milling",
    basis: "14 features detected"
  }, {
    line: "Black anodising",
    basis: "Supplier quote received, 20 µm target"
  }, {
    line: "Threaded inserts",
    basis: "600 pcs, supplier quote received"
  }, {
    line: "Finishing logistics",
    basis: "Local transport to/from anodising supplier"
  }, {
    line: "Deburring",
    basis: "Manual deburr after machining"
  }, {
    line: "Insert installation",
    basis: "2 inserts per part"
  }, {
    line: "Inspection + QC",
    basis: "Critical features checked to ±0.15 mm"
  }, {
    line: "Packaging materials",
    basis: "Customer-specific packaging"
  }, {
    line: "Packing + dispatch prep",
    basis: "Batch packing and documentation"
  }, {
    line: "Project handling",
    basis: "RFQ review, supplier follow-up, quote preparation"
  }],
  suppliers: [{
    capability: "Black anodising, 20 µm target",
    location: "Girona area"
  }, {
    capability: "Anodising + sealing",
    location: "Barcelona"
  }, {
    capability: "Threaded inserts",
    location: "Zaragoza"
  }]
};
const g1 = {
  common: h1,
  quoting: m1,
  estimating: p1
};
const y1 = {
  from: "De :",
  to: "À :",
  subject: "Objet :",
  matched: "Correspondance trouvée",
  verified: "Vérifié",
  found: "Trouvé",
  qty: "Qté",
  customer: "Client",
  customerPrice: "Prix client",
  setup: "Réglage",
  process: "Processus",
  quoteTotal: "Total du devis",
  marginCheck: "Contrôle de marge",
  target: "Cible",
  achieved: "Atteint",
  validUntil: "Valide jusqu'au",
  leadTime: "Délai",
  terms: "Conditions",
  lines: "Lignes",
  part: "Pièce",
  description: "Description",
  material: "Matériau",
  unit: "Unité",
  extended: "Total",
  catalog: "Catalogue",
  received: "Reçu",
  pending: "En attente",
  supplier: "Fournisseur",
  capability: "Capacité",
  location: "Localisation",
  status: "Statut",
  hrs: "H",
  rate: "Taux",
  amount: "Montant",
  basis: "Base",
  materials: "Matériaux",
  margin: "Marge",
  partNumber: "Référence pièce",
  quote: "Devis",
  customerColon: "Client :"
};
const v1 = {
  statuses: ["Lecture des pièces jointes RFQ...", "Correspondance avec l'ERP/le catalogue...", "Génération du document de devis...", "Devis envoyé en 2 minutes"],
  email: {
    inbox: "Boîte de réception · RFQ de Northbridge Robotics",
    subjectLine: "RFQ #NBR-260184 — Composants usinés de précision",
    greeting: "Bonjour,",
    body: "Nous demandons un devis pour les composants usinés de précision suivants, conformément aux plans et fichiers STEP joints.",
    closing: "Merci de fournir le prix unitaire, les frais d'outillage/réglage, le délai et la validité du devis.",
    regards: "Cordialement,",
    team: "Équipe Achats"
  },
  extract: {
    title: "Pièces extraites par IA",
    rfqReference: "Référence RFQ",
    linesDetected: "Lignes détectées",
    linesCount: "3 sur 3",
    drawingRevisions: "Révisions des plans",
    filesChecked: "3 fichiers vérifiés"
  },
  erp: {
    title: "Recherche de prix ERP/CRM"
  },
  sent: {
    readyToSend: "Prêt à envoyer",
    ref: "Northbridge Robotics · RFQ #NBR-260184"
  },
  parts: [{
    description: "Plaque de fixation moteur, fraisée CNC",
    material: "Aluminium 6061-T6",
    process: "Fraisage CNC + anodisation noire"
  }, {
    description: "Boîtier de roulement, tourné + fraisé",
    material: "Acier inoxydable 304",
    process: "Tournage CNC + fraisage + passivation"
  }, {
    description: "Entretoise de précision, cylindrique",
    material: "Acier 4140",
    process: "Tournage CNC + revêtement au phosphate de zinc"
  }]
};
const b1 = {
  statuses: ["Ouverture des pièces jointes...", "Analyse des affaires historiques + besoins de tarification fournisseurs...", "Estimation préliminaire prête · 2 devis fournisseurs confirmés · 1 en attente"],
  email: {
    inbox: "Boîte de réception · RFQ aluminium sur mesure",
    subjectLine: "ALU25-018 — Profilé support en aluminium usiné, demande de devis",
    greeting: "Bonjour l'équipe,",
    body1: "Merci d'établir un devis pour le profilé support en aluminium usiné joint.",
    body2: "Les plans du profilé, exigences d'usinage, spécifications de finition de surface et un fichier STEP sont joints.",
    body3: "Tarification + délai nécessaires d'ici vendredi.",
    signature: "Ingénierie, Alvera Industrial"
  },
  drawings: {
    partDrawing: "Plan de la pièce",
    buildSpec: "Spécification de fabrication",
    profileLength: "Longueur du profilé",
    profileLengthValue: "1,850 mm",
    machiningFeatures: "Caractéristiques d'usinage",
    machiningFeaturesValue: "14 détectées",
    supplierPricingNeeded: "Tarification fournisseur requise",
    supplierPricingNeededValue: "2 éléments"
  },
  quote: {
    draftEstimate: "Estimation préliminaire",
    subtitle: "Alvera Industrial · Profilé support en aluminium usiné",
    marginSummary: "Objectif de marge : 32%, atteint 33.7%",
    leadTimeSummary: "Délai : 5–6 semaines",
    internalOps: "Opérations internes",
    supplierQuotes: "Devis fournisseurs",
    costLine: "Ligne de coût",
    supplierRfqs: "RFQ fournisseurs",
    aiRecommendation: "Recommandation IA",
    recAnodising: "Utiliser Supplier A pour l'anodisation en raison de la capacité de finition confirmée, de la proximité et du délai de réponse le plus rapide.",
    recInserts: "Utiliser Supplier C pour les inserts filetés en raison de la disponibilité du stock confirmée et d'un délai de 5 jours.",
    approvalNote: "La sélection finale des fournisseurs reste soumise à l'approbation de votre équipe."
  },
  costLines: [{
    line: "Profilé aluminium extrudé",
    basis: "EN AW-6082 T6, 555 m incluant la marge de rebut"
  }, {
    line: "Découpe",
    basis: "Quantité lot 300 pièces"
  }, {
    line: "Réglage CNC + programmation",
    basis: "Nouveau programme d'usinage du profilé"
  }, {
    line: "Perçage + fraisage CNC",
    basis: "14 caractéristiques détectées"
  }, {
    line: "Anodisation noire",
    basis: "Devis fournisseur reçu, objectif 20 µm"
  }, {
    line: "Inserts filetés",
    basis: "600 pièces, devis fournisseur reçu"
  }, {
    line: "Logistique de finition",
    basis: "Transport local vers/depuis le fournisseur d'anodisation"
  }, {
    line: "Ébavurage",
    basis: "Ébavurage manuel après usinage"
  }, {
    line: "Installation des inserts",
    basis: "2 inserts par pièce"
  }, {
    line: "Inspection + CQ",
    basis: "Caractéristiques critiques contrôlées à ±0.15 mm"
  }, {
    line: "Matériaux d'emballage",
    basis: "Emballage spécifique client"
  }, {
    line: "Préparation emballage + expédition",
    basis: "Emballage par lot et documentation"
  }, {
    line: "Gestion de projet",
    basis: "Revue RFQ, suivi fournisseurs, préparation du devis"
  }],
  suppliers: [{
    capability: "Anodisation noire, objectif 20 µm",
    location: "Zone de Girona"
  }, {
    capability: "Anodisation + étanchéification",
    location: "Barcelona"
  }, {
    capability: "Inserts filetés",
    location: "Zaragoza"
  }]
};
const x1 = {
  common: y1,
  quoting: v1,
  estimating: b1
};
const S1 = {
  from: "Von:",
  to: "An:",
  subject: "Betreff:",
  matched: "Abgeglichen",
  verified: "Verifiziert",
  found: "Gefunden",
  qty: "Menge",
  customer: "Kunde",
  customerPrice: "Kundenpreis",
  setup: "Ruesten",
  process: "Prozess",
  quoteTotal: "Angebotssumme",
  marginCheck: "Margenpruefung",
  target: "Ziel",
  achieved: "Erreicht",
  validUntil: "Gueltig bis",
  leadTime: "Lieferzeit",
  terms: "Bedingungen",
  lines: "Positionen",
  part: "Teil",
  description: "Beschreibung",
  material: "Material",
  unit: "Einheit",
  extended: "Gesamt",
  catalog: "Katalog",
  received: "Eingegangen",
  pending: "Ausstehend",
  supplier: "Lieferant",
  capability: "Faehigkeit",
  location: "Standort",
  status: "Status",
  hrs: "Std",
  rate: "Satz",
  amount: "Betrag",
  basis: "Grundlage",
  materials: "Materialien",
  margin: "Marge",
  partNumber: "Teilenummer",
  quote: "Angebot",
  customerColon: "Kunde:"
};
const w1 = {
  statuses: ["RFQ-Anhaenge werden gelesen...", "Abgleich mit ERP/Katalog...", "Angebotsdokument wird erstellt...", "Angebot in 2 Minuten gesendet"],
  email: {
    inbox: "Posteingang · RFQ von Northbridge Robotics",
    subjectLine: "RFQ #NBR-260184 — Praezisionsgefertigte Bauteile",
    greeting: "Hallo,",
    body: "Wir bitten um ein Angebot fuer die folgenden praezisionsgefertigten Bauteile gemaess den beigefuegten Zeichnungen und STEP-Dateien.",
    closing: "Bitte geben Sie Stueckpreise, Werkzeug-/Ruestkosten, Lieferzeit und Angebotsgueltigkeit an.",
    regards: "Mit freundlichen Gruessen,",
    team: "Einkaufsteam"
  },
  extract: {
    title: "Von KI extrahierte Teile",
    rfqReference: "RFQ-Referenz",
    linesDetected: "Erkannte Positionen",
    linesCount: "3 von 3",
    drawingRevisions: "Zeichnungsrevisionen",
    filesChecked: "3 Dateien geprueft"
  },
  erp: {
    title: "ERP/CRM-Preisabfrage"
  },
  sent: {
    readyToSend: "Bereit zum Senden",
    ref: "Northbridge Robotics · RFQ #NBR-260184"
  },
  parts: [{
    description: "Motor-Montageplatte, CNC-gefraest",
    material: "6061-T6 Aluminium",
    process: "CNC-Fraesen + schwarze Eloxierung"
  }, {
    description: "Lagergehaeuse, gedreht + gefraest",
    material: "304 Edelstahl",
    process: "CNC-Drehen + Fraesen + Passivierung"
  }, {
    description: "Praezisionsabstandshalter, zylindrisch",
    material: "4140 Stahl",
    process: "CNC-Drehen + Zinkphosphat-Beschichtung"
  }]
};
const T1 = {
  statuses: ["Anhaenge werden geoeffnet...", "Analyse historischer Auftraege + Anforderungen an Lieferantenpreise...", "Entwurf der Kalkulation bereit · 2 Lieferantenangebote bestaetigt · 1 ausstehend"],
  email: {
    inbox: "Posteingang · RFQ fuer kundenspezifisches Aluminium",
    subjectLine: "ALU25-018 — Bearbeitetes Aluminium-Stuetzprofil, Angebotsanfrage",
    greeting: "Hallo Team,",
    body1: "Bitte erstellen Sie ein Angebot fuer das beigefuegte bearbeitete Aluminium-Stuetzprofil.",
    body2: "Profilzeichnungen, Bearbeitungsanforderungen, Spezifikationen zur Oberflaechenqualitaet und eine STEP-Datei sind beigefuegt.",
    body3: "Preis + Lieferzeit werden bis Freitag benoetigt.",
    signature: "Engineering, Alvera Industrial"
  },
  drawings: {
    partDrawing: "Teilzeichnung",
    buildSpec: "Fertigungsspezifikation",
    profileLength: "Profillaenge",
    profileLengthValue: "1,850 mm",
    machiningFeatures: "Bearbeitungsmerkmale",
    machiningFeaturesValue: "14 erkannt",
    supplierPricingNeeded: "Lieferantenpreise benoetigt",
    supplierPricingNeededValue: "2 Positionen"
  },
  quote: {
    draftEstimate: "Entwurf der Kalkulation",
    subtitle: "Alvera Industrial · Bearbeitetes Aluminium-Stuetzprofil",
    marginSummary: "Margenziel: 32%, erreicht 33.7%",
    leadTimeSummary: "Lieferzeit: 5–6 Wochen",
    internalOps: "Interne Operationen",
    supplierQuotes: "Lieferantenangebote",
    costLine: "Kostenposition",
    supplierRfqs: "Lieferanten-RFQs",
    aiRecommendation: "KI-Empfehlung",
    recAnodising: "Nutzen Sie Lieferant A fuer die Eloxierung auf Basis bestaetigter Oberflaechenfaehigkeit, Naehe und schnellster Reaktionszeit.",
    recInserts: "Nutzen Sie Lieferant C fuer Gewindeeinsaetze auf Basis bestaetigter Lagerverfuegbarkeit und 5-taegiger Lieferzeit.",
    approvalNote: "Die endgueltige Lieferantenauswahl bleibt unter Freigabe Ihres Teams."
  },
  costLines: [{
    line: "Extrudiertes Aluminiumprofil",
    basis: "EN AW-6082 T6, 555 m inkl. Schrottzuschlag"
  }, {
    line: "Zuschnitt",
    basis: "Losgroesse 300 Stk"
  }, {
    line: "CNC-Ruesten + Programmierung",
    basis: "Neues Profil-Bearbeitungsprogramm"
  }, {
    line: "CNC-Bohren + Fraesen",
    basis: "14 Merkmale erkannt"
  }, {
    line: "Schwarze Eloxierung",
    basis: "Lieferantenangebot eingegangen, Ziel 20 µm"
  }, {
    line: "Gewindeeinsaetze",
    basis: "600 Stk, Lieferantenangebot eingegangen"
  }, {
    line: "Logistik Oberflaechenbearbeitung",
    basis: "Lokaler Transport zum/vom Eloxier-Lieferanten"
  }, {
    line: "Entgraten",
    basis: "Manuelles Entgraten nach der Bearbeitung"
  }, {
    line: "Einsetzen der Einsaetze",
    basis: "2 Einsaetze pro Teil"
  }, {
    line: "Pruefung + QS",
    basis: "Kritische Merkmale auf ±0.15 mm geprueft"
  }, {
    line: "Verpackungsmaterialien",
    basis: "Kundenspezifische Verpackung"
  }, {
    line: "Verpackung + Versandvorbereitung",
    basis: "Chargenverpackung und Dokumentation"
  }, {
    line: "Projektabwicklung",
    basis: "RFQ-Pruefung, Lieferanten-Nachverfolgung, Angebotserstellung"
  }],
  suppliers: [{
    capability: "Schwarze Eloxierung, Ziel 20 µm",
    location: "Raum Girona"
  }, {
    capability: "Eloxierung + Versiegelung",
    location: "Barcelona"
  }, {
    capability: "Gewindeeinsaetze",
    location: "Zaragoza"
  }]
};
const E1 = {
  common: S1,
  quoting: w1,
  estimating: T1
};
const R1 = {
  from: "发件人:",
  to: "收件人:",
  subject: "主题:",
  matched: "已匹配",
  verified: "已验证",
  found: "已找到",
  qty: "数量",
  customer: "客户",
  customerPrice: "客户价格",
  setup: "准备",
  process: "工艺",
  quoteTotal: "报价总计",
  marginCheck: "利润率检查",
  target: "目标",
  achieved: "已达成",
  validUntil: "有效期至",
  leadTime: "交期",
  terms: "条款",
  lines: "行",
  part: "零件",
  description: "描述",
  material: "材料",
  unit: "单价",
  extended: "合计",
  catalog: "目录",
  received: "已收到",
  pending: "待处理",
  supplier: "供应商",
  capability: "能力",
  location: "地点",
  status: "状态",
  hrs: "小时",
  rate: "费率",
  amount: "金额",
  basis: "依据",
  materials: "材料",
  margin: "利润率",
  partNumber: "零件号",
  quote: "报价",
  customerColon: "客户："
};
const A1 = {
  statuses: ["正在读取 RFQ 附件...", "正在与 ERP/目录进行匹配...", "正在生成报价文档...", "2 分钟内已发送报价"],
  email: {
    inbox: "收件箱 · 来自 Northbridge Robotics 的 RFQ",
    subjectLine: "RFQ #NBR-260184 — 精密机加工零部件",
    greeting: "你好，",
    body: "我们正在根据所附图纸和 STEP 文件请求以下精密机加工零部件的报价。",
    closing: "请提供单价、工装/准备费用、交期和报价有效期。",
    regards: "此致，",
    team: "采购团队"
  },
  extract: {
    title: "AI 提取的零件",
    rfqReference: "RFQ 参考",
    linesDetected: "检测到的行数",
    linesCount: "3 / 3",
    drawingRevisions: "图纸版本",
    filesChecked: "已检查 3 个文件"
  },
  erp: {
    title: "ERP/CRM 价格查询"
  },
  sent: {
    readyToSend: "可发送",
    ref: "Northbridge Robotics · RFQ #NBR-260184"
  },
  parts: [{
    description: "电机安装板，CNC 铣削",
    material: "6061-T6 Aluminium",
    process: "CNC 铣削 + 黑色阳极氧化"
  }, {
    description: "轴承座，车削 + 铣削",
    material: "304 Stainless Steel",
    process: "CNC 车削 + 铣削 + 钝化"
  }, {
    description: "精密垫块，圆柱形",
    material: "4140 Steel",
    process: "CNC 车削 + 磷酸锌涂层"
  }]
};
const j1 = {
  statuses: ["正在打开附件...", "正在分析历史作业 + 供应商定价需求...", "估算草案已就绪 · 2 份供应商报价已确认 · 1 份待处理"],
  email: {
    inbox: "收件箱 · 定制铝件 RFQ",
    subjectLine: "ALU25-018 — 机加工铝制支撑型材，报价请求",
    greeting: "团队你好，",
    body1: "请为所附机加工铝制支撑型材提供报价。",
    body2: "已附上型材图纸、机加工要求、表面处理规格和 STEP 文件。",
    body3: "需要在周五前提供价格 + 交期。",
    signature: "工程部，Alvera Industrial"
  },
  drawings: {
    partDrawing: "零件图纸",
    buildSpec: "制造规范",
    profileLength: "型材长度",
    profileLengthValue: "1,850 mm",
    machiningFeatures: "机加工特征",
    machiningFeaturesValue: "检测到 14 项",
    supplierPricingNeeded: "需要供应商报价",
    supplierPricingNeededValue: "2 项"
  },
  quote: {
    draftEstimate: "估算草案",
    subtitle: "Alvera Industrial · 机加工铝制支撑型材",
    marginSummary: "利润率目标: 32%，已达成 33.7%",
    leadTimeSummary: "交期: 5–6 周",
    internalOps: "内部工序",
    supplierQuotes: "供应商报价",
    costLine: "成本项",
    supplierRfqs: "供应商 RFQ",
    aiRecommendation: "AI 建议",
    recAnodising: "基于已确认的表面处理能力、距离和最快响应时间，建议阳极氧化使用 Supplier A。",
    recInserts: "基于已确认的库存可用性和 5 天交期，建议螺纹嵌件使用 Supplier C。",
    approvalNote: "最终供应商选择仍需贵团队批准。"
  },
  costLines: [{
    line: "挤压铝型材",
    basis: "EN AW-6082 T6, 555 m incl. scrap allowance"
  }, {
    line: "切割",
    basis: "Batch qty 300 pcs"
  }, {
    line: "CNC 准备 + 编程",
    basis: "New profile machining program"
  }, {
    line: "CNC 钻孔 + 铣削",
    basis: "14 features detected"
  }, {
    line: "黑色阳极氧化",
    basis: "Supplier quote received, 20 µm target"
  }, {
    line: "螺纹嵌件",
    basis: "600 pcs, supplier quote received"
  }, {
    line: "后处理物流",
    basis: "Local transport to/from anodising supplier"
  }, {
    line: "去毛刺",
    basis: "Manual deburr after machining"
  }, {
    line: "嵌件安装",
    basis: "2 inserts per part"
  }, {
    line: "检验 + 质量控制",
    basis: "Critical features checked to ±0.15 mm"
  }, {
    line: "包装材料",
    basis: "Customer-specific packaging"
  }, {
    line: "装箱 + 发运准备",
    basis: "Batch packing and documentation"
  }, {
    line: "项目处理",
    basis: "RFQ review, supplier follow-up, quote preparation"
  }],
  suppliers: [{
    capability: "黑色阳极氧化，20 µm 目标",
    location: "Girona area"
  }, {
    capability: "阳极氧化 + 封孔",
    location: "Barcelona"
  }, {
    capability: "螺纹嵌件",
    location: "Zaragoza"
  }]
};
const C1 = {
  common: R1,
  quoting: A1,
  estimating: j1
};
const N1 = {
  en: g1,
  fr: x1,
  de: E1,
  zh: C1
};
const k1 = {
  nav: {
    home: "Home",
    solutions: "Solutions",
    company: "Company",
    bookDemo: "Book Demo",
    sales: "SALES",
    operations: "OPERATIONS"
  },
  footer: {
    tagline: "The intelligence layer for manufacturing. Automate scheduling and logistics seamlessly.",
    solutions: "Solutions",
    company: "Company",
    aboutUs: "About Us",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    copyright: "Synpath Inc. All rights reserved."
  },
  home: {
    heroTitle: "The Intelligence Layer for Manufacturing",
    heroTitleBreak: "for Manufacturing",
    heroSubtitle: "Synpath helps manufacturers automate planning, handle urgent orders, and seamlessly react to supply chain disruptions with autonomous workflows.",
    cta: "See the future",
    capabilitiesEyebrow: "Real workflows. Fully autonomous.",
    capabilitiesTitle: "Platform Capabilities",
    learnMore: "Learn more",
    integrationTitle: "Automated integration and setup within days.",
    integrationSubtitle: "Synpath sits on top of your existing ERP, email, and messaging tools. Zero internal IT work required, full transparency guaranteed.",
    featureErp: "Real-time ERP Synchronization",
    featureInfra: "Zero Custom Infrastructure",
    featureShopFloor: "Built for the Shop Floor"
  },
  company: {
    aboutEyebrow: "About Synpath",
    heroTitle: "Built with manufacturers, for manufacturers.",
    ourMission: "Our mission",
    ourGoal: "Our goal",
    missionP1: "We founded Synpath because AI was already freeing people from repetitive work across many industries — but traditional manufacturers were being left behind.",
    missionP2: "Manufacturing is not automatically AI-ready. Workflows are complex, data is scattered, and critical knowledge often lives with experienced people. Synpath helps manufacturers become AI-ready by learning how their operations actually run and building agents around their existing workflows.",
    missionP3: "With teams in London, Michigan, and Shenzhen, we partner closely with manufacturers to learn their operations and build agents that fit the way their teams already work.",
    founders: "Yuki & Richard",
    coFounders: "Co-Founders",
    goalText: "Help traditional manufacturing participate fully in the AI era — with practical agents that solve real problems, earn trust in beta, and free people to do the work only they can do.",
    goalTags: ["Practical agents", "Earned trust", "Human judgment"],
    beliefsTitle: "What we believe",
    beliefs: [{
      title: "Embedded in your operation",
      description: "We spend time inside your workflows — inbox, ERP, planning rhythm — before configuring agents. Proximity to how you work matters more than flashy demos."
    }, {
      title: "Built for manufacturing reality",
      description: "We focus on the tasks manufacturers run every day: quoting, estimating, scheduling, and responding to disruptions. Not generic templates that ignore shop-floor constraints."
    }, {
      title: "Trusted autonomy",
      description: "Your team stays in control. AI agents handle repeatable coordination; people approve exceptions, pricing, and final commitments."
    }],
    officesEyebrow: "Where we are",
    officesTitle: "Three offices, one mission.",
    mapCaption: "Synpath teams across three continents, serving manufacturers worldwide.",
    faqTitle: "About Synpath — frequently asked questions",
    faqs: [{
      question: "Where is Synpath located?",
      answer: "Synpath has teams in London, Michigan, and Shenzhen. We work with manufacturers globally and deploy alongside customer teams to learn operations before agents go live."
    }, {
      question: "What makes Synpath different from other AI tools?",
      answer: "Synpath is purpose-built for manufacturing workflows — sales quoting, job estimating, production planning, and operational exceptions. We deploy with your team, train agents on your data and rules, and measure success by whether planners and salespeople actually trust the output."
    }, {
      question: "How does Synpath work with existing systems?",
      answer: "Synpath sits on top of your ERP, email, and planning tools. We integrate with the systems you already use, map fields to how your team works today, and roll out in focused 90-day cycles with beta testing before full production."
    }, {
      question: "How can I learn more about Synpath?",
      answer: "Book a demo to see how Synpath agents fit your quoting, estimating, or operations workflows. We will walk through your use case and show live examples from similar manufacturing environments."
    }],
    ctaTitle: "Ready to automate your operations?",
    ctaSubtitle: "See how Synpath helps your team automate everyday workflows with AI agents you can trust.",
    ctaButton: "Book a demo"
  },
  bookDemo: {
    title: "Ready to transform your operations?",
    subtitle: "Schedule a personalized walkthrough of the Synpath platform with one of our automation engineers.",
    bullets: ["Live demonstration of your specific workflows", "Custom ROI analysis for your facility", "Technical deep-dive on ERP integrations", "Pricing and implementation timeline"],
    scheduleTitle: "Schedule your demo",
    scheduleSubtitle: "Choose a convenient date and time"
  },
  solution: {
    backToHome: "Back to Home",
    bookDemo: "Book a demo",
    howItWorksDefault: "How it works",
    howItWorksSubtitle: "From trigger to outcome.",
    setup: "Setup",
    exploreMore: "Explore more tools",
    exploreTitle: "Other Synpath Agents.",
    faqSuffix: "frequently asked questions",
    ctaTitle: "Ready to automate your operations?",
    ctaSubtitle: "See how Synpath helps your team automate everyday workflows with AI agents you can trust.",
    learnMore: "Learn more",
    videoPlaceholder: "Interactive simulation for:"
  },
  solutions: {
    quoting: {
      title: "Quoting",
      description: "Receive RFQ emails, match parts against your catalog, validate pricing, and send professional quotes automatically.",
      heroSubtitle: "Receive RFQ emails, match parts against your catalog, validate pricing, and send professional quotes automatically."
    },
    estimating: {
      title: "Estimating",
      description: "Turn RFQs and drawings into structured estimates with historical job data and supplier pricing.",
      heroSubtitle: "Turn RFQs and drawings into structured estimates with historical job data and supplier pricing."
    },
    "production-planning": {
      title: "Production Planning",
      description: "Streamline scheduling and optimize resource allocation with intelligent planning.",
      heroSubtitle: "Streamline scheduling and optimize resource allocation with intelligent planning."
    },
    "urgent-order": {
      title: "Urgent Order",
      description: "Respond to rush orders and replan production in minutes, not hours.",
      heroSubtitle: "Respond to rush orders and replan production in minutes, not hours."
    },
    "machine-breakdown": {
      title: "Machine Breakdown",
      description: "Detect downtime, simulate recovery options, and redistribute work automatically.",
      heroSubtitle: "Detect downtime, simulate recovery options, and redistribute work automatically."
    },
    "material-delay": {
      title: "Material Delay",
      description: "Handle supplier delays with proactive replanning and stakeholder notifications.",
      heroSubtitle: "Handle supplier delays with proactive replanning and stakeholder notifications."
    }
  },
  regions: {
    london: "United Kingdom",
    michigan: "United States",
    shenzhen: "China"
  }
};
const M1 = {
  nav: {
    home: "Accueil",
    solutions: "Solutions",
    company: "Entreprise",
    bookDemo: "Réserver une démo",
    sales: "VENTES",
    operations: "OPÉRATIONS"
  },
  footer: {
    tagline: "La couche d'intelligence pour la fabrication. Automatisez la planification et la logistique en toute simplicité.",
    solutions: "Solutions",
    company: "Entreprise",
    aboutUs: "À propos",
    legal: "Mentions légales",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    copyright: "Synpath Inc. Tous droits réservés."
  },
  home: {
    heroTitle: "La couche d'intelligence pour la fabrication",
    heroTitleBreak: "pour la fabrication",
    heroSubtitle: "Synpath aide les industriels à automatiser la planification, gérer les commandes urgentes et réagir aux perturbations de la chaîne d'approvisionnement grâce à des workflows autonomes.",
    cta: "Voir l'avenir",
    capabilitiesEyebrow: "Workflows réels. Entièrement autonomes.",
    capabilitiesTitle: "Capacités de la plateforme",
    learnMore: "En savoir plus",
    integrationTitle: "Intégration et déploiement automatisés en quelques jours.",
    integrationSubtitle: "Synpath s'appuie sur votre ERP, vos e-mails et vos outils de messagerie existants. Aucun travail IT interne, transparence totale.",
    featureErp: "Synchronisation ERP en temps réel",
    featureInfra: "Aucune infrastructure personnalisée",
    featureShopFloor: "Conçu pour l'atelier"
  },
  company: {
    aboutEyebrow: "À propos de Synpath",
    heroTitle: "Conçu avec les industriels, pour les industriels.",
    ourMission: "Notre mission",
    ourGoal: "Notre objectif",
    missionP1: "Nous avons fondé Synpath parce que l'IA libérait déjà les gens des tâches répétitives dans de nombreux secteurs — mais les industriels traditionnels étaient laissés pour compte.",
    missionP2: "La fabrication n'est pas automatiquement prête pour l'IA. Les workflows sont complexes, les données dispersées et le savoir-faire vit souvent chez des personnes expérimentées. Synpath aide les industriels à devenir prêts pour l'IA en apprenant comment leurs opérations fonctionnent réellement.",
    missionP3: "Avec des équipes à Londres, au Michigan et à Shenzhen, nous accompagnons de près les industriels pour construire des agents adaptés à leurs modes de travail.",
    founders: "Yuki & Richard",
    coFounders: "Co-fondateurs",
    goalText: "Aider la fabrication traditionnelle à participer pleinement à l'ère de l'IA — avec des agents pratiques qui résolvent de vrais problèmes, gagnent la confiance en bêta et libèrent les équipes pour le travail à forte valeur.",
    goalTags: ["Agents pratiques", "Confiance méritée", "Jugement humain"],
    beliefsTitle: "Ce en quoi nous croyons",
    beliefs: [{
      title: "Intégrés à votre exploitation",
      description: "Nous passons du temps dans vos workflows — boîte mail, ERP, rythme de planification — avant de configurer les agents. La proximité avec votre façon de travailler compte plus que les démos tape-à-l'œil."
    }, {
      title: "Conçu pour la réalité industrielle",
      description: "Nous nous concentrons sur les tâches quotidiennes des industriels : devis, estimations, planification et réponse aux perturbations. Pas de modèles génériques qui ignorent les contraintes de l'atelier."
    }, {
      title: "Autonomie de confiance",
      description: "Votre équipe garde le contrôle. Les agents IA gèrent la coordination répétitive ; les personnes valident les exceptions, les prix et les engagements finaux."
    }],
    officesEyebrow: "Où nous sommes",
    officesTitle: "Trois bureaux, une mission.",
    mapCaption: "Des équipes Synpath sur trois continents, au service des industriels du monde entier.",
    faqTitle: "À propos de Synpath — questions fréquentes",
    faqs: [{
      question: "Où se trouve Synpath ?",
      answer: "Synpath a des équipes à Londres, au Michigan et à Shenzhen. Nous travaillons avec des industriels dans le monde entier et déployons aux côtés de nos clients."
    }, {
      question: "Qu'est-ce qui distingue Synpath des autres outils IA ?",
      answer: "Synpath est conçu pour les workflows industriels — devis commerciaux, estimations, planification de production et exceptions opérationnelles. Nous déployons avec votre équipe et mesurons le succès par la confiance des planificateurs et commerciaux."
    }, {
      question: "Comment Synpath s'intègre-t-il aux systèmes existants ?",
      answer: "Synpath s'appuie sur votre ERP, vos e-mails et vos outils de planification. Nous intégrons vos systèmes actuels et déployons en cycles de 90 jours avec des tests bêta."
    }, {
      question: "Comment en savoir plus sur Synpath ?",
      answer: "Réservez une démo pour voir comment les agents Synpath s'intègrent à vos workflows de devis, d'estimation ou d'opérations."
    }],
    ctaTitle: "Prêt à automatiser vos opérations ?",
    ctaSubtitle: "Découvrez comment Synpath aide votre équipe à automatiser les workflows quotidiens avec des agents IA de confiance.",
    ctaButton: "Réserver une démo"
  },
  bookDemo: {
    title: "Prêt à transformer vos opérations ?",
    subtitle: "Planifiez une visite personnalisée de la plateforme Synpath avec l'un de nos ingénieurs en automatisation.",
    bullets: ["Démonstration en direct de vos workflows spécifiques", "Analyse ROI personnalisée pour votre site", "Approfondissement technique des intégrations ERP", "Tarification et calendrier de mise en œuvre"],
    scheduleTitle: "Planifier votre démo",
    scheduleSubtitle: "Choisissez une date et une heure"
  },
  solution: {
    backToHome: "Retour à l'accueil",
    bookDemo: "Réserver une démo",
    howItWorksDefault: "Comment ça marche",
    howItWorksSubtitle: "Du déclencheur au résultat.",
    setup: "Déploiement",
    exploreMore: "Découvrir d'autres outils",
    exploreTitle: "Autres agents Synpath.",
    faqSuffix: "questions fréquentes",
    ctaTitle: "Prêt à automatiser vos opérations ?",
    ctaSubtitle: "Découvrez comment Synpath aide votre équipe à automatiser les workflows quotidiens avec des agents IA de confiance.",
    learnMore: "En savoir plus",
    videoPlaceholder: "Simulation interactive pour :"
  },
  solutions: {
    quoting: {
      title: "Devis",
      description: "Recevez les e-mails RFQ, associez les pièces à votre catalogue, validez les prix et envoyez des devis professionnels automatiquement.",
      heroSubtitle: "Recevez les e-mails RFQ, associez les pièces à votre catalogue, validez les prix et envoyez des devis professionnels automatiquement."
    },
    estimating: {
      title: "Estimation",
      description: "Transformez les RFQ et dessins en estimations structurées avec l'historique des jobs et les prix fournisseurs.",
      heroSubtitle: "Transformez les RFQ et dessins en estimations structurées avec l'historique des jobs et les prix fournisseurs."
    },
    "production-planning": {
      title: "Planification de production",
      description: "Rationalisez la planification et optimisez l'allocation des ressources.",
      heroSubtitle: "Rationalisez la planification et optimisez l'allocation des ressources."
    },
    "urgent-order": {
      title: "Commande urgente",
      description: "Répondez aux commandes urgentes et replanifiez la production en minutes, pas en heures.",
      heroSubtitle: "Répondez aux commandes urgentes et replanifiez la production en minutes, pas en heures."
    },
    "machine-breakdown": {
      title: "Panne machine",
      description: "Détectez les arrêts, simulez les options de reprise et redistribuez le travail automatiquement.",
      heroSubtitle: "Détectez les arrêts, simulez les options de reprise et redistribuez le travail automatiquement."
    },
    "material-delay": {
      title: "Retard matière",
      description: "Gérez les retards fournisseurs avec une replanification proactive et des notifications.",
      heroSubtitle: "Gérez les retards fournisseurs avec une replanification proactive et des notifications."
    }
  },
  regions: {
    london: "Royaume-Uni",
    michigan: "États-Unis",
    shenzhen: "Chine"
  }
};
const z1 = {
  nav: {
    home: "Startseite",
    solutions: "Lösungen",
    company: "Unternehmen",
    bookDemo: "Demo buchen",
    sales: "VERTRIEB",
    operations: "BETRIEB"
  },
  footer: {
    tagline: "Die Intelligenzschicht für die Fertigung. Planung und Logistik nahtlos automatisieren.",
    solutions: "Lösungen",
    company: "Unternehmen",
    aboutUs: "Über uns",
    legal: "Rechtliches",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    copyright: "Synpath Inc. Alle Rechte vorbehalten."
  },
  home: {
    heroTitle: "Die Intelligenzschicht für die Fertigung",
    heroTitleBreak: "für die Fertigung",
    heroSubtitle: "Synpath hilft Herstellern, die Planung zu automatisieren, dringende Aufträge zu bearbeiten und mit autonomen Workflows auf Lieferkettenstörungen zu reagieren.",
    cta: "Die Zukunft sehen",
    capabilitiesEyebrow: "Echte Workflows. Vollständig autonom.",
    capabilitiesTitle: "Plattformfunktionen",
    learnMore: "Mehr erfahren",
    integrationTitle: "Automatisierte Integration und Einrichtung innerhalb weniger Tage.",
    integrationSubtitle: "Synpath sitzt auf Ihrem bestehenden ERP, E-Mail und Messaging. Kein interner IT-Aufwand, volle Transparenz.",
    featureErp: "ERP-Synchronisation in Echtzeit",
    featureInfra: "Keine eigene Infrastruktur",
    featureShopFloor: "Für den Shopfloor gebaut"
  },
  company: {
    aboutEyebrow: "Über Synpath",
    heroTitle: "Mit Herstellern entwickelt, für Hersteller.",
    ourMission: "Unsere Mission",
    ourGoal: "Unser Ziel",
    missionP1: "Wir haben Synpath gegründet, weil KI Menschen in vielen Branchen bereits von repetitiver Arbeit befreite — traditionelle Hersteller blieben jedoch zurück.",
    missionP2: "Fertigung ist nicht automatisch KI-ready. Workflows sind komplex, Daten verstreut und Wissen lebt oft bei erfahrenen Mitarbeitern. Synpath macht Hersteller KI-ready, indem es lernt, wie ihre Betriebe wirklich funktionieren.",
    missionP3: "Mit Teams in London, Michigan und Shenzhen arbeiten wir eng mit Herstellern zusammen und bauen Agenten, die zu ihren Arbeitsweisen passen.",
    founders: "Yuki & Richard",
    coFounders: "Mitgründer",
    goalText: "Traditionelle Fertigung vollständig am KI-Zeitalter teilhaben lassen — mit praktischen Agenten, die echte Probleme lösen, Vertrauen in der Beta verdienen und Menschen für wertschöpfende Arbeit freisetzen.",
    goalTags: ["Praktische Agenten", "Verdientes Vertrauen", "Menschliches Urteil"],
    beliefsTitle: "Woran wir glauben",
    beliefs: [{
      title: "In Ihrem Betrieb verankert",
      description: "Wir verbringen Zeit in Ihren Workflows — Posteingang, ERP, Planungsrhythmus — bevor wir Agenten konfigurieren. Nähe zu Ihrer Arbeitsweise zählt mehr als auffällige Demos."
    }, {
      title: "Für die Fertigungsrealität gebaut",
      description: "Wir konzentrieren uns auf tägliche Aufgaben: Angebote, Kalkulationen, Planung und Störungen. Keine generischen Vorlagen, die Shopfloor-Beschränkungen ignorieren."
    }, {
      title: "Vertrauenswürdige Autonomie",
      description: "Ihr Team behält die Kontrolle. KI-Agenten übernehmen wiederholbare Koordination; Menschen genehmigen Ausnahmen, Preise und finale Zusagen."
    }],
    officesEyebrow: "Wo wir sind",
    officesTitle: "Drei Standorte, eine Mission.",
    mapCaption: "Synpath-Teams auf drei Kontinenten, für Hersteller weltweit.",
    faqTitle: "Über Synpath — häufig gestellte Fragen",
    faqs: [{
      question: "Wo befindet sich Synpath?",
      answer: "Synpath hat Teams in London, Michigan und Shenzhen. Wir arbeiten weltweit mit Herstellern und setzen gemeinsam mit Kundenteams um."
    }, {
      question: "Was unterscheidet Synpath von anderen KI-Tools?",
      answer: "Synpath ist für Fertigungsworkflows gebaut — Angebote, Kalkulationen, Produktionsplanung und operative Ausnahmen. Wir messen Erfolg am Vertrauen der Planer und Vertriebler."
    }, {
      question: "Wie arbeitet Synpath mit bestehenden Systemen?",
      answer: "Synpath sitzt auf ERP, E-Mail und Planungstools. Wir integrieren Ihre Systeme und rollen in 90-Tage-Zyklen mit Beta-Tests aus."
    }, {
      question: "Wie kann ich mehr über Synpath erfahren?",
      answer: "Buchen Sie eine Demo, um zu sehen, wie Synpath-Agenten in Ihre Angebots-, Kalkulations- oder Betriebsworkflows passen."
    }],
    ctaTitle: "Bereit, Ihre Abläufe zu automatisieren?",
    ctaSubtitle: "Erfahren Sie, wie Synpath Ihrem Team hilft, alltägliche Workflows mit vertrauenswürdigen KI-Agenten zu automatisieren.",
    ctaButton: "Demo buchen"
  },
  bookDemo: {
    title: "Bereit, Ihre Abläufe zu transformieren?",
    subtitle: "Vereinbaren Sie eine personalisierte Synpath-Plattformführung mit einem unserer Automatisierungsingenieure.",
    bullets: ["Live-Demonstration Ihrer spezifischen Workflows", "Individuelle ROI-Analyse für Ihren Standort", "Technischer Deep-Dive zu ERP-Integrationen", "Preise und Implementierungszeitplan"],
    scheduleTitle: "Demo planen",
    scheduleSubtitle: "Wählen Sie Datum und Uhrzeit"
  },
  solution: {
    backToHome: "Zurück zur Startseite",
    bookDemo: "Demo buchen",
    howItWorksDefault: "So funktioniert es",
    howItWorksSubtitle: "Vom Auslöser zum Ergebnis.",
    setup: "Einrichtung",
    exploreMore: "Weitere Tools entdecken",
    exploreTitle: "Weitere Synpath-Agenten.",
    faqSuffix: "häufig gestellte Fragen",
    ctaTitle: "Bereit, Ihre Abläufe zu automatisieren?",
    ctaSubtitle: "Erfahren Sie, wie Synpath Ihrem Team hilft, alltägliche Workflows mit vertrauenswürdigen KI-Agenten zu automatisieren.",
    learnMore: "Mehr erfahren",
    videoPlaceholder: "Interaktive Simulation für:"
  },
  solutions: {
    quoting: {
      title: "Angebotserstellung",
      description: "RFQ-E-Mails empfangen, Teile mit dem Katalog abgleichen, Preise validieren und professionelle Angebote automatisch senden.",
      heroSubtitle: "RFQ-E-Mails empfangen, Teile mit dem Katalog abgleichen, Preise validieren und professionelle Angebote automatisch senden."
    },
    estimating: {
      title: "Kalkulation",
      description: "RFQs und Zeichnungen in strukturierte Schätzungen mit historischen Aufträgen und Lieferantenpreisen umwandeln.",
      heroSubtitle: "RFQs und Zeichnungen in strukturierte Schätzungen mit historischen Aufträgen und Lieferantenpreisen umwandeln."
    },
    "production-planning": {
      title: "Produktionsplanung",
      description: "Planung optimieren und Ressourcen intelligent zuweisen.",
      heroSubtitle: "Planung optimieren und Ressourcen intelligent zuweisen."
    },
    "urgent-order": {
      title: "Dringender Auftrag",
      description: "Auf Eilaufträge reagieren und die Produktion in Minuten, nicht Stunden, umplanen.",
      heroSubtitle: "Auf Eilaufträge reagieren und die Produktion in Minuten, nicht Stunden, umplanen."
    },
    "machine-breakdown": {
      title: "Maschinenausfall",
      description: "Stillstände erkennen, Wiederanlaufoptionen simulieren und Arbeit automatisch umverteilen.",
      heroSubtitle: "Stillstände erkennen, Wiederanlaufoptionen simulieren und Arbeit automatisch umverteilen."
    },
    "material-delay": {
      title: "Materialverzögerung",
      description: "Lieferantenverzögerungen mit proaktiver Umplanung und Benachrichtigungen bewältigen.",
      heroSubtitle: "Lieferantenverzögerungen mit proaktiver Umplanung und Benachrichtigungen bewältigen."
    }
  },
  regions: {
    london: "Vereinigtes Königreich",
    michigan: "Vereinigte Staaten",
    shenzhen: "China"
  }
};
const D1 = {
  nav: {
    home: "首页",
    solutions: "解决方案",
    company: "公司",
    bookDemo: "预约演示",
    sales: "销售",
    operations: "运营"
  },
  footer: {
    tagline: "制造业智能层。无缝自动化排程与物流。",
    solutions: "解决方案",
    company: "公司",
    aboutUs: "关于我们",
    legal: "法律",
    privacy: "隐私政策",
    terms: "服务条款",
    copyright: "Synpath Inc. 保留所有权利。"
  },
  home: {
    heroTitle: "制造业智能层",
    heroTitleBreak: "制造业智能层",
    heroSubtitle: "Synpath 帮助制造商自动化生产计划、处理紧急订单，并通过自主工作流从容应对供应链中断。",
    cta: "展望未来",
    capabilitiesEyebrow: "真实工作流，全面自主。",
    capabilitiesTitle: "平台能力",
    learnMore: "了解更多",
    integrationTitle: "数天内完成自动化集成与部署。",
    integrationSubtitle: "Synpath 基于您现有的 ERP、邮件和通讯工具运行。无需内部 IT 投入，全程透明可控。",
    featureErp: "实时 ERP 同步",
    featureInfra: "零定制基础设施",
    featureShopFloor: "为车间而生"
  },
  company: {
    aboutEyebrow: "关于 Synpath",
    heroTitle: "与制造商共建，为制造商而生。",
    ourMission: "我们的使命",
    ourGoal: "我们的目标",
    missionP1: "我们创立 Synpath，是因为 AI 已在许多行业将人们从重复性工作中解放出来——但传统制造业却被抛在了后面。",
    missionP2: "制造业并非天然为 AI 做好准备。工作流复杂、数据分散，关键知识往往掌握在资深员工手中。Synpath 通过深入了解企业实际运营方式，围绕现有工作流构建智能体，帮助制造商迈向 AI 就绪。",
    missionP3: "我们在伦敦、密歇根和深圳设有团队，与制造商紧密合作，打造贴合其团队工作方式的智能体。",
    founders: "Yuki & Richard",
    coFounders: "联合创始人",
    goalText: "帮助传统制造业全面参与 AI 时代——以解决实际问题的实用智能体，在测试中赢得信任，让人们专注于只有人才能做的工作。",
    goalTags: ["实用智能体", "赢得信任", "人类判断"],
    beliefsTitle: "我们的信念",
    beliefs: [{
      title: "深入您的运营",
      description: "在配置智能体之前，我们会深入您的工作流——收件箱、ERP、计划节奏。贴近您的工作方式，比炫目的演示更重要。"
    }, {
      title: "为制造现实而建",
      description: "我们聚焦制造商每天运行的任务：报价、估算、排程和应对中断。而非忽视车间约束的通用模板。"
    }, {
      title: "可信赖的自主性",
      description: "您的团队始终掌控全局。AI 智能体处理可重复的协调工作；人员审批例外、定价和最终承诺。"
    }],
    officesEyebrow: "我们的足迹",
    officesTitle: "三地办公，一个使命。",
    mapCaption: "Synpath 团队遍布三大洲，服务全球制造商。",
    faqTitle: "关于 Synpath — 常见问题",
    faqs: [{
      question: "Synpath 在哪里？",
      answer: "Synpath 在伦敦、密歇根和深圳设有团队。我们在全球与制造商合作，并在客户团队身边部署落地。"
    }, {
      question: "Synpath 与其他 AI 工具有何不同？",
      answer: "Synpath 专为制造工作流打造——销售报价、工程估算、生产计划和运营异常。我们与您的团队共同部署，以计划员和销售人员是否真正信任输出作为成功标准。"
    }, {
      question: "Synpath 如何与现有系统集成？",
      answer: "Synpath 基于您的 ERP、邮件和计划工具运行。我们集成您已在使用的系统，并以 90 天为周期分阶段推出，经 beta 测试后全面投产。"
    }, {
      question: "如何了解更多？",
      answer: "预约演示，了解 Synpath 智能体如何融入您的报价、估算或运营工作流。"
    }],
    ctaTitle: "准备好自动化您的运营了吗？",
    ctaSubtitle: "了解 Synpath 如何帮助您的团队用可信赖的 AI 智能体自动化日常工作流。",
    ctaButton: "预约演示"
  },
  bookDemo: {
    title: "准备好转型您的运营了吗？",
    subtitle: "与我们的自动化工程师预约 Synpath 平台个性化演示。",
    bullets: ["针对您具体工作流的现场演示", "为您工厂定制的 ROI 分析", "ERP 集成的技术深度讲解", "定价与实施时间表"],
    scheduleTitle: "预约演示",
    scheduleSubtitle: "选择方便的日期和时间"
  },
  solution: {
    backToHome: "返回首页",
    bookDemo: "预约演示",
    howItWorksDefault: "工作原理",
    howItWorksSubtitle: "从触发到结果。",
    setup: "部署",
    exploreMore: "探索更多工具",
    exploreTitle: "更多 Synpath 智能体",
    faqSuffix: "常见问题",
    ctaTitle: "准备好自动化您的运营了吗？",
    ctaSubtitle: "了解 Synpath 如何帮助您的团队用可信赖的 AI 智能体自动化日常工作流。",
    learnMore: "了解更多",
    videoPlaceholder: "交互式模拟："
  },
  solutions: {
    quoting: {
      title: "报价",
      description: "接收 RFQ 邮件，匹配产品目录，验证定价，自动发送专业报价。",
      heroSubtitle: "接收 RFQ 邮件，匹配产品目录，验证定价，自动发送专业报价。"
    },
    estimating: {
      title: "估算",
      description: "将 RFQ 和图纸转化为结构化估算，结合历史工单与供应商定价。",
      heroSubtitle: "将 RFQ 和图纸转化为结构化估算，结合历史工单与供应商定价。"
    },
    "production-planning": {
      title: "生产计划",
      description: "简化排程，通过智能计划优化资源分配。",
      heroSubtitle: "简化排程，通过智能计划优化资源分配。"
    },
    "urgent-order": {
      title: "紧急订单",
      description: "应对加急订单，在数分钟内而非数小时内重新排产。",
      heroSubtitle: "应对加急订单，在数分钟内而非数小时内重新排产。"
    },
    "machine-breakdown": {
      title: "设备故障",
      description: "检测停机，模拟恢复方案，自动重新分配工单。",
      heroSubtitle: "检测停机，模拟恢复方案，自动重新分配工单。"
    },
    "material-delay": {
      title: "物料延迟",
      description: "通过主动重新计划和通知应对供应商延迟。",
      heroSubtitle: "通过主动重新计划和通知应对供应商延迟。"
    }
  },
  regions: {
    london: "英国",
    michigan: "美国",
    shenzhen: "中国"
  }
};
const yg = [{
  code: "en",
  label: "English"
}, {
  code: "fr",
  label: "Français"
}, {
  code: "de",
  label: "Deutsch"
}, {
  code: "zh",
  label: "中文"
}];
const vg = "en";
const o0 = "synpath-locale";
const q1 = {
  en: k1,
  fr: M1,
  de: z1,
  zh: D1
};
const L1 = {
  title: "Quoting",
  description: "Receive RFQ emails, match parts against your catalog, validate pricing, and send professional quotes automatically.",
  heroTitle: "Quoting",
  heroSubtitle: "Receive RFQ emails, match parts against your catalog, validate pricing, and send professional quotes automatically.",
  features: [{
    title: "RFQ Intake",
    description: "Parse incoming emails and attachments to extract line items automatically."
  }, {
    title: "Catalog Matching",
    description: "Match parts against your ERP catalog with customer-specific pricing rules."
  }, {
    title: "Quote Generation",
    description: "Produce professional quotes with validated pricing and lead times."
  }],
  howItWorks: {
    title: "How it works",
    subtitle: "From trigger to outcome.",
    steps: [{
      label: "RFQ Email"
    }, {
      label: "Extract Parts"
    }, {
      label: "ERP Pricing"
    }, {
      label: "Quote Sent"
    }],
    demoType: "quoting"
  },
  setupHeadline: "Live in 90 days.",
  setupSteps: [{
    step: 1,
    title: "Catalog, pricing, and customer rules intake",
    description: "Import part masters, customer tiers, volume breaks, and historical quote outcomes. Synpath learns how your sales team prices — not a generic price list."
  }, {
    step: 2,
    title: "30 days of inbox and ERP integration",
    description: "Connect RFQ email, attachments, and ERP pricing fields. The agent learns to match line items, flag missing data, and apply your approval rules."
  }, {
    step: 3,
    title: "30 days of beta testing",
    description: "Run draft quotes alongside your sales team on live RFQs. We tune extraction accuracy, pricing validation, and quote formatting until outputs are ready for review."
  }, {
    step: 4,
    title: "30 days of rollout and sales training",
    description: "Deploy into your quoting workflow with clear review gates. Your team gets playbooks for exceptions, margin checks, and customer-ready quote release."
  }, {
    step: 5,
    title: "90 days from kickoff to daily quoting support",
    description: "A focused three-month rollout that layers on your existing inbox and ERP — no rip-and-replace of how your team sells today."
  }],
  whySectionLabel: "Why Synpath Quoting",
  whyTitle: "From RFQ email to validated quote draft in minutes.",
  benefits: ["Parses RFQ emails and attachments into structured line items", "Matches parts against your catalog and customer pricing rules", "Flags missing data before a quote leaves your building", "Keeps a full audit trail from RFQ intake to quote sent", "Goes live only after accuracy is validated in beta"],
  faqs: [{
    question: "What does Synpath Quoting handle end to end?",
    answer: "Synpath monitors RFQ inboxes, extracts parts and quantities from emails and PDFs, matches them to your catalog, validates pricing against ERP rules, and drafts a customer-ready quote for your team to review and send."
  }, {
    question: "How long does rollout take?",
    answer: "Most customers are live within 90 days: catalog intake, 30 days of integration, 30 days of beta testing with your sales team, then rollout. Synpath accelerates drafting — your team keeps final approval."
  }, {
    question: "Will it work with our current ERP and email?",
    answer: "Yes. Synpath connects to common manufacturing ERPs and email systems. We map fields to how your team already quotes, including customer-specific pricing and exception handling."
  }, {
    question: "How do you prevent misquotes?",
    answer: "Every quote draft runs through catalog matching, pricing validation, and missing-data checks before review. The system goes into production only after beta testing hits your accuracy thresholds."
  }]
};
const O1 = {
  title: "Estimating",
  description: "Train custom AI agents on your historical job costs, supplier quotes, and costing rules. Generate reliable, supplier-aware estimates that protect target margins.",
  heroTitle: "Estimating",
  heroSubtitle: "Train custom AI agents on your historical job costs, supplier quotes, and costing rules. Generate reliable, supplier-aware estimates that protect target margins.",
  features: [{
    title: "Historical Training",
    description: "Train on cost data from years of actual jobs produced at your facility."
  }, {
    title: "Document Processing",
    description: "Process STEP files, CAD drawings, and spec sheets automatically."
  }, {
    title: "Margin Protection",
    description: "Estimates maintain target margins validated against historical quotes."
  }],
  howItWorks: {
    title: "How it works",
    subtitle: "From trigger to outcome.",
    steps: [{
      label: "RFQ Email"
    }, {
      label: "Drawings + Specs"
    }, {
      label: "Estimate"
    }],
    demoType: "estimating"
  },
  setupHeadline: "Live in 90 days.",
  setupSteps: [{
    step: 1,
    title: "Historical costing and supplier data intake",
    description: "Upload past job costs, won/lost quotes, routing assumptions, and approved supplier rate cards. Synpath maps how your team actually prices work — not a generic template."
  }, {
    step: 2,
    title: "30 days of model build and integration",
    description: "We connect email, drawings, STEP files, and your ERP costing fields. The estimating engine learns your margin rules, overhead structure, and shop-rate logic."
  }, {
    step: 3,
    title: "30 days of beta testing",
    description: "Run draft estimates side by side with your estimators on live RFQs. We refine feature detection, supplier RFQ triggers, and margin checks until outputs are consistently usable."
  }, {
    step: 4,
    title: "30 days of rollout and estimator training",
    description: "Deploy to your quoting workflow with clear review steps. Your team gets playbooks for approving supplier quotes, editing cost lines, and releasing customer-ready estimates."
  }, {
    step: 5,
    title: "90 days from kickoff to production estimating",
    description: "A focused three-month path from data intake to daily use — without a lengthy IT project or rip-and-replace of your existing systems."
  }],
  whySectionLabel: "Why Synpath Estimating",
  whyTitle: "From RFQ to supplier-backed draft quote in minutes.",
  benefits: ["Learns from your past jobs, supplier quotes, and costing rules", "Identifies cost drivers from drawings, STEP files, and specs", "Flags where external supplier pricing is required", "Checks target margin before quote submission", "Goes live only after accuracy is validated"],
  faqs: [{
    question: "What does Synpath Estimating actually do?",
    answer: "Synpath reads incoming RFQs, extracts requirements from drawings and specs, builds a structured cost breakdown, and drafts an estimate that includes internal operations and external supplier quotes where needed. Your team reviews, adjusts, and approves before anything goes to the customer."
  }, {
    question: "How long does implementation take?",
    answer: "Most teams are live within 90 days: data intake, 30 days of model build, 30 days of beta testing alongside your estimators, then rollout and training. Synpath does not replace your sign-off — it accelerates the path to a defensible draft quote."
  }, {
    question: "Can it work with our ERP and email tools?",
    answer: "Yes. Synpath layers on top of your current stack — ERP job costing, inbox RFQs, spreadsheets, and supplier quote threads. We integrate with common manufacturing systems and tailor field mappings to how your estimators already work."
  }, {
    question: "When is an estimate ready to send?",
    answer: "Synpath produces a draft with cost lines, supplier status, and margin checks. It goes into production use only after beta testing shows estimates align with your historical outcomes and approval thresholds. Final quote release always stays with your team."
  }]
};
const B1 = {
  quoting: L1,
  estimating: O1,
  "production-planning": {
    title: "Production Planning",
    description: "Streamline scheduling and optimize resource allocation with intelligent planning.",
    heroTitle: "Intelligent Production Planning",
    heroSubtitle: "Optimize your floor schedule automatically by factoring in machine availability, shifts, and dependencies. Stop relying on outdated spreadsheets.",
    features: [{
      title: "Dynamic Scheduling",
      description: "Automatically adjust production schedules based on real-time shop floor data."
    }, {
      title: "Resource Optimization",
      description: "Ensure machines and operators are allocated efficiently to minimize downtime."
    }, {
      title: "Constraint Management",
      description: "Factor in tooling, materials, and human constraints simultaneously."
    }],
    howItWorks: {
      title: "How it works",
      subtitle: "Turn sales orders into ready-to-dispatch work orders.",
      steps: [{
        label: "One-Click Plan"
      }, {
        label: "WO Tree"
      }, {
        label: "WO Dispatched Instantly"
      }],
      demoType: "video"
    },
    setupHeadline: "Live in 90 days.",
    setupSteps: [{
      step: 1,
      title: "Schedule, routing, and constraint data intake",
      description: "Import machines, shifts, routings, open work orders, and material pegging from your ERP. Synpath mirrors how your planners actually build the floor schedule."
    }, {
      step: 2,
      title: "30 days of planning engine configuration",
      description: "Connect ERP work orders, capacity calendars, and dependency rules. The engine learns your sequencing logic, setup times, and resource constraints."
    }, {
      step: 3,
      title: "30 days of beta testing",
      description: "Run Synpath plans alongside your planners on live demand. We tune load balancing, WO sequencing, and dispatch timing until outputs match shop-floor reality."
    }, {
      step: 4,
      title: "30 days of rollout and planner training",
      description: "Deploy one-click planning into daily operations. Your team gets playbooks for exceptions, manual overrides, and instant work order release."
    }, {
      step: 5,
      title: "90 days from kickoff to autonomous planning",
      description: "Three months from data intake to a planning workflow that keeps pace with changing demand — without replacing your ERP."
    }],
    whySectionLabel: "Why Synpath Production Planning",
    whyTitle: "From backlog chaos to a dispatch-ready plan in one click.",
    benefits: ["Builds a feasible plan from live ERP demand and capacity", "Visualizes work order dependencies before release", "Balances load across machines and shifts automatically", "Dispatches work orders with one confirmed action", "Goes live only after planners validate plan quality in beta"],
    faqs: [{
      question: "What does Synpath Production Planning automate?",
      answer: "Synpath reads open demand, applies your routing and capacity rules, generates a sequenced plan, shows the work order tree, and lets planners release dispatch-ready work orders in one step."
    }, {
      question: "How long does implementation take?",
      answer: "Most shops are live within 90 days: ERP data intake, 30 days of engine configuration, 30 days of beta testing with planners, then rollout. Planners stay in control of final release."
    }, {
      question: "Does it replace our ERP scheduler?",
      answer: "No. Synpath sits on top of your ERP, using its work orders, routings, and inventory data to produce a smarter floor plan — then writes back dispatch actions your team approves."
    }, {
      question: "What happens when demand changes mid-week?",
      answer: "Re-run one-click planning to refresh the schedule against current backlog, capacity, and material availability. Synpath is built for the constant churn of real manufacturing."
    }]
  },
  "urgent-order": {
    title: "Urgent Order",
    description: "Handle expedite requests seamlessly without disrupting your existing commitments.",
    heroTitle: "Handle Expedites with Confidence",
    heroSubtitle: "Evaluate the capacity impact of a drop-in 'hot job' instantly. Synpath tells you if you can safely accept an urgent order without missing other deadlines.",
    features: [{
      title: "Impact Analysis",
      description: "See exactly which jobs will slip if you insert an expedite order."
    }, {
      title: "Scenario Planning",
      description: "Test different routing and shift scenarios before committing to a delivery date."
    }, {
      title: "Instant Re-routing",
      description: "Automatically reprioritize existing queues to accommodate the critical path."
    }],
    howItWorks: {
      title: "How it works",
      subtitle: "From rush order to confirmed production plan.",
      steps: [{
        label: "AI Simulation"
      }, {
        label: "One Click Replan"
      }, {
        label: "WO Dispatched Instantly"
      }],
      demoType: "video"
    },
    setupHeadline: "Live in 90 days.",
    setupSteps: [{
      step: 1,
      title: "Capacity model and expedite rules intake",
      description: "Import current schedule, machine load, customer priorities, and overtime policies. Synpath learns what \"yes\" and \"no\" mean for your operation."
    }, {
      step: 2,
      title: "30 days of simulation and replan configuration",
      description: "Connect order intake channels and ERP scheduling. The agent learns to model slip risk, alternate routings, and customer impact before you commit."
    }, {
      step: 3,
      title: "30 days of beta testing",
      description: "Run expedite simulations on real hot orders alongside your planners. We refine impact visibility, replan quality, and dispatch timing until decisions are trustworthy."
    }, {
      step: 4,
      title: "30 days of rollout and operations training",
      description: "Deploy expedite handling into daily sales and planning workflows. Your team gets clear steps for accepting, deferring, or renegotiating urgent orders."
    }, {
      step: 5,
      title: "90 days from kickoff to confident expedite response",
      description: "Three months to turn \"Can we fit it in?\" from a multi-hour scramble into a data-backed answer your team can stand behind."
    }],
    whySectionLabel: "Why Synpath Urgent Order",
    whyTitle: "Know the cost of yes before you promise the date.",
    benefits: ["Simulates capacity impact before accepting an expedite", "Shows which orders slip if the hot job is inserted", "Replans the floor schedule in one confirmed action", "Releases updated work orders without manual rework", "Goes live only after planners trust simulation outcomes"],
    faqs: [{
      question: "How does Synpath evaluate an urgent order?",
      answer: "Synpath models the expedite against your live schedule, shows downstream slip and resource conflicts, proposes a replan, and lets your team dispatch updated work orders if you accept the trade-offs."
    }, {
      question: "Can sales use this without waiting on planning?",
      answer: "Synpath gives sales a fast, data-backed view of feasibility and delivery risk. Final commitment still follows your approval process — but the analysis happens in minutes, not days."
    }, {
      question: "What data does it need to run simulations?",
      answer: "Open work orders, routings, machine calendars, and current customer commitments from your ERP. Synpath uses the same data your planners already rely on."
    }, {
      question: "How long until we can use it on live expedites?",
      answer: "Most teams are live within 90 days after intake, configuration, beta testing on real hot orders, and rollout training with sales and planning."
    }]
  },
  "machine-breakdown": {
    title: "Machine Breakdown",
    description: "Automate your contingency plans and minimize the impact of equipment failure.",
    heroTitle: "Resilient Downtime Management",
    heroSubtitle: "When a CNC goes offline, instantly understand the blast radius. Automatically identify affected orders and alternate routing paths.",
    features: [{
      title: "Blast Radius Visibility",
      description: "Instantly see every customer commitment affected by the outage."
    }, {
      title: "Alternate Sourcing",
      description: "Identify capable backup machines or external vendors to absorb the load."
    }, {
      title: "Proactive Communication",
      description: "Automatically draft status updates to stakeholders before they ask."
    }],
    howItWorks: {
      title: "How it works",
      subtitle: "From machine alert to recovery plan.",
      steps: [{
        label: "Detect Machine Alerts"
      }, {
        label: "AI Simulation"
      }, {
        label: "One-Click Replan"
      }],
      demoType: "video"
    },
    setupHeadline: "Live in 90 days.",
    setupSteps: [{
      step: 1,
      title: "Machine, routing, and alert source intake",
      description: "Connect shop-floor alerts, machine master data, alternate routings, and customer due dates. Synpath maps which orders are truly at risk when a asset goes down."
    }, {
      step: 2,
      title: "30 days of downtime response configuration",
      description: "Wire alert triggers to simulation and replan logic. The system learns backup machines, outsourcing options, and recovery sequencing for your facility."
    }, {
      step: 3,
      title: "30 days of beta testing",
      description: "Run breakdown scenarios against historical and live outages. We tune blast-radius visibility, alternate routing quality, and replan speed until responses are actionable."
    }, {
      step: 4,
      title: "30 days of rollout and supervisor training",
      description: "Deploy downtime playbooks to planners and supervisors. Your team gets clear steps for simulation review, replan approval, and stakeholder updates."
    }, {
      step: 5,
      title: "90 days from kickoff to autonomous downtime response",
      description: "Three months to replace spreadsheet firefighting with a repeatable recovery workflow when machines stop."
    }],
    whySectionLabel: "Why Synpath Machine Breakdown",
    whyTitle: "See the blast radius and recovery path in minutes.",
    benefits: ["Detects machine alerts from shop-floor and monitoring systems", "Shows every order affected by the outage", "Simulates alternate machines and routing options", "Releases a recovery plan in one confirmed action", "Goes live only after downtime scenarios pass beta review"],
    faqs: [{
      question: "What happens when a machine goes down?",
      answer: "Synpath captures the alert, calculates affected work orders and customer commitments, simulates recovery options, and produces a replan your team can approve and dispatch immediately."
    }, {
      question: "Can it route work to backup machines automatically?",
      answer: "Synpath proposes alternate routings based on capable machines and current load. Your planners review and approve the recovery plan before work orders are updated."
    }, {
      question: "How does it connect to our shop floor?",
      answer: "Alerts can come from ERP downtime entries, machine monitoring, or manual supervisor input. Synpath normalizes the signal and triggers the same simulation workflow every time."
    }, {
      question: "How long does setup take?",
      answer: "Most facilities are live within 90 days: routing and alert intake, 30 days of configuration, 30 days of beta testing on real or historical outages, then rollout."
    }]
  },
  "material-delay": {
    title: "Material Delay",
    description: "Proactively manage supply chain disruptions and coordinate schedule adjustments.",
    heroTitle: "Supply Chain Resilience",
    heroSubtitle: "Supplier running late? Synpath recalculates all downstream dependencies and flags orders that need alternate sourcing.",
    features: [{
      title: "Dependency Tracking",
      description: "Map raw materials precisely to intermediate and finished goods."
    }, {
      title: "Downstream Adjustments",
      description: "Push out start dates for jobs blocked by delayed materials automatically."
    }, {
      title: "Supplier Coordination",
      description: "Track late POs and automate follow-ups to vendors missing commitments."
    }],
    howItWorks: {
      title: "How it works",
      subtitle: "From supplier delay to adjusted production plan.",
      steps: [{
        label: "Delay Detect"
      }, {
        label: "Impact Simulation"
      }, {
        label: "One Click Replan"
      }],
      demoType: "video"
    },
    setupHeadline: "Live in 90 days.",
    setupSteps: [{
      step: 1,
      title: "Supplier, PO, and pegging data intake",
      description: "Import purchase orders, material lead times, BOM pegging, and open production orders. Synpath traces how a late line item propagates through your build schedule."
    }, {
      step: 2,
      title: "30 days of delay detection and simulation setup",
      description: "Connect supplier updates, ERP receipts, and planning data. The system learns which jobs are blocked, which can proceed, and what alternate supply options exist."
    }, {
      step: 3,
      title: "30 days of beta testing",
      description: "Run material delay scenarios on live supply disruptions. We tune detection speed, downstream impact accuracy, and replan quality until planners trust the output."
    }, {
      step: 4,
      title: "30 days of rollout and buyer-planner training",
      description: "Deploy delay response into purchasing and planning workflows. Your team gets playbooks for supplier follow-up, schedule adjustment, and customer communication."
    }, {
      step: 5,
      title: "90 days from kickoff to proactive supply response",
      description: "Three months to move from reactive fire drills to an autonomous workflow that adjusts the plan the moment supply slips."
    }],
    whySectionLabel: "Why Synpath Material Delay",
    whyTitle: "Catch late material before it becomes a missed ship date.",
    benefits: ["Detects supplier delays from PO status and inbound updates", "Maps downstream jobs blocked by missing material", "Simulates schedule impact before orders are late", "Replans production with one confirmed action", "Goes live only after delay scenarios pass beta review"],
    faqs: [{
      question: "How does Synpath detect a material delay?",
      answer: "Synpath monitors purchase order dates, supplier confirmations, and receipt activity. When a line item slips, it immediately flags affected production orders and simulates the schedule impact."
    }, {
      question: "Can it suggest alternate sourcing?",
      answer: "Synpath highlights jobs at risk and gives planners the replan options your rules allow — including alternate suppliers or partial builds where material is available."
    }, {
      question: "Does it replace our buyers?",
      answer: "No. Buyers still own supplier relationships. Synpath automates detection, impact analysis, and schedule adjustment so planning can respond while purchasing chases supply."
    }, {
      question: "How long until we can run this on live PO slips?",
      answer: "Most teams are live within 90 days after pegging intake, 30 days of configuration, 30 days of beta testing on real delays, and rollout with buyers and planners."
    }]
  }
};
const V1 = {
  title: "Devis",
  description: "Recevez les e-mails de RFQ, associez les pièces à votre catalogue, validez les prix et envoyez automatiquement des devis professionnels.",
  heroTitle: "Devis",
  heroSubtitle: "Recevez les e-mails de RFQ, associez les pièces à votre catalogue, validez les prix et envoyez automatiquement des devis professionnels.",
  features: [{
    title: "Collecte des RFQ",
    description: "Analyse automatiquement les e-mails entrants et les pièces jointes pour extraire les lignes d'articles."
  }, {
    title: "Correspondance catalogue",
    description: "Associe les pièces à votre catalogue ERP avec des règles tarifaires spécifiques au client."
  }, {
    title: "Génération de devis",
    description: "Produit des devis professionnels avec des prix et des délais validés."
  }],
  howItWorks: {
    title: "Comment ça marche",
    subtitle: "Du déclencheur au résultat.",
    steps: [{
      label: "E-mail RFQ"
    }, {
      label: "Extraire les pièces"
    }, {
      label: "Tarification ERP"
    }, {
      label: "Devis envoyé"
    }],
    demoType: "quoting"
  },
  setupHeadline: "En production en 90 jours.",
  setupSteps: [{
    step: 1,
    title: "Collecte du catalogue, des prix et des règles client",
    description: "Importez les référentiels pièces, les niveaux client, les paliers de volume et les résultats historiques de devis. Synpath apprend la façon dont votre équipe commerciale fixe les prix — pas une liste de prix générique."
  }, {
    step: 2,
    title: "30 jours d'intégration messagerie et ERP",
    description: "Connectez les e-mails RFQ, les pièces jointes et les champs tarifaires ERP. L'agent apprend à faire correspondre les lignes d'articles, signaler les données manquantes et appliquer vos règles d'approbation."
  }, {
    step: 3,
    title: "30 jours de tests bêta",
    description: "Exécutez des brouillons de devis en parallèle de votre équipe commerciale sur des RFQ réels. Nous ajustons la précision d'extraction, la validation des prix et le formatage des devis jusqu'à obtenir des sorties prêtes pour revue."
  }, {
    step: 4,
    title: "30 jours de déploiement et de formation commerciale",
    description: "Déployez dans votre workflow de devis avec des jalons de revue clairs. Votre équipe reçoit des playbooks pour les exceptions, les contrôles de marge et la diffusion de devis prêts pour le client."
  }, {
    step: 5,
    title: "90 jours entre le lancement et le support quotidien des devis",
    description: "Un déploiement ciblé sur trois mois qui s'appuie sur votre messagerie et votre ERP existants — sans refonte complète de la manière dont votre équipe vend aujourd'hui."
  }],
  whySectionLabel: "Pourquoi Synpath Devis",
  whyTitle: "Du RFQ par e-mail à un brouillon de devis validé en quelques minutes.",
  benefits: ["Analyse les e-mails RFQ et les pièces jointes en lignes d'articles structurées", "Associe les pièces à votre catalogue et à vos règles tarifaires client", "Signale les données manquantes avant qu'un devis ne quitte votre entreprise", "Conserve une piste d'audit complète, de la collecte RFQ à l'envoi du devis", "Passe en production uniquement après validation de la précision en bêta"],
  faqs: [{
    question: "Que prend en charge Synpath Devis de bout en bout ?",
    answer: "Synpath surveille les boîtes de réception RFQ, extrait les pièces et quantités des e-mails et PDF, les associe à votre catalogue, valide les prix selon les règles ERP, puis prépare un devis prêt pour le client afin que votre équipe le relise et l'envoie."
  }, {
    question: "Combien de temps prend le déploiement ?",
    answer: "La plupart des clients sont en production sous 90 jours : collecte du catalogue, 30 jours d'intégration, 30 jours de tests bêta avec votre équipe commerciale, puis déploiement. Synpath accélère la préparation — votre équipe conserve l'approbation finale."
  }, {
    question: "Est-ce compatible avec notre ERP et notre messagerie actuels ?",
    answer: "Oui. Synpath se connecte aux ERP industriels et systèmes de messagerie courants. Nous cartographions les champs selon votre manière actuelle d'établir des devis, y compris la tarification spécifique au client et la gestion des exceptions."
  }, {
    question: "Comment évitez-vous les erreurs de devis ?",
    answer: "Chaque brouillon de devis passe par la correspondance catalogue, la validation des prix et des contrôles de données manquantes avant revue. Le système passe en production uniquement après que les tests bêta atteignent vos seuils de précision."
  }]
};
const _1 = {
  title: "Chiffrage",
  description: "Entraînez des agents IA personnalisés sur vos coûts historiques, devis fournisseurs et règles de calcul. Générez des estimations fiables, intégrant les fournisseurs, qui protègent vos marges cibles.",
  heroTitle: "Chiffrage",
  heroSubtitle: "Entraînez des agents IA personnalisés sur vos coûts historiques, devis fournisseurs et règles de calcul. Générez des estimations fiables, intégrant les fournisseurs, qui protègent vos marges cibles.",
  features: [{
    title: "Entraînement historique",
    description: "Entraînement sur les données de coûts de plusieurs années de production réelle dans votre usine."
  }, {
    title: "Traitement documentaire",
    description: "Traite automatiquement les fichiers STEP, dessins CAD et cahiers des charges."
  }, {
    title: "Protection de marge",
    description: "Les estimations conservent les marges cibles, validées par rapport aux devis historiques."
  }],
  howItWorks: {
    title: "Comment ça marche",
    subtitle: "Du déclencheur au résultat.",
    steps: [{
      label: "E-mail RFQ"
    }, {
      label: "Dessins + Specs"
    }, {
      label: "Estimation"
    }],
    demoType: "estimating"
  },
  setupHeadline: "En production en 90 jours.",
  setupSteps: [{
    step: 1,
    title: "Collecte des données de coûts historiques et fournisseurs",
    description: "Importez les coûts des jobs passés, les devis gagnés/perdus, les hypothèses de gamme et les grilles tarifaires fournisseurs approuvées. Synpath cartographie la façon dont votre équipe chiffre réellement le travail — pas un modèle générique."
  }, {
    step: 2,
    title: "30 jours de construction du modèle et d'intégration",
    description: "Nous connectons la messagerie, les plans, les fichiers STEP et vos champs de coûts ERP. Le moteur de chiffrage apprend vos règles de marge, votre structure de frais généraux et votre logique de taux atelier."
  }, {
    step: 3,
    title: "30 jours de tests bêta",
    description: "Exécutez des brouillons d'estimation en parallèle de vos estimateurs sur des RFQ réels. Nous affinons la détection de caractéristiques, les déclencheurs RFQ fournisseurs et les contrôles de marge jusqu'à obtenir des résultats régulièrement exploitables."
  }, {
    step: 4,
    title: "30 jours de déploiement et de formation des estimateurs",
    description: "Déployez dans votre workflow de devis avec des étapes de revue claires. Votre équipe reçoit des playbooks pour approuver les devis fournisseurs, modifier les lignes de coûts et publier des estimations prêtes pour le client."
  }, {
    step: 5,
    title: "90 jours entre le lancement et le chiffrage en production",
    description: "Un parcours ciblé de trois mois, de la collecte des données à l'usage quotidien — sans projet IT long ni refonte de vos systèmes existants."
  }],
  whySectionLabel: "Pourquoi Synpath Chiffrage",
  whyTitle: "Du RFQ à un brouillon de devis appuyé par les fournisseurs en quelques minutes.",
  benefits: ["Apprend de vos jobs passés, devis fournisseurs et règles de coûts", "Identifie les facteurs de coûts depuis les plans, fichiers STEP et specs", "Signale les cas nécessitant une tarification fournisseur externe", "Vérifie la marge cible avant soumission du devis", "Passe en production uniquement après validation de la précision"],
  faqs: [{
    question: "Que fait concrètement Synpath Chiffrage ?",
    answer: "Synpath lit les RFQ entrants, extrait les exigences des plans et specs, construit une ventilation structurée des coûts et prépare une estimation incluant les opérations internes et, si nécessaire, les devis fournisseurs externes. Votre équipe relit, ajuste et approuve avant tout envoi au client."
  }, {
    question: "Combien de temps prend l'implémentation ?",
    answer: "La plupart des équipes sont en production sous 90 jours : collecte des données, 30 jours de construction du modèle, 30 jours de tests bêta aux côtés de vos estimateurs, puis déploiement et formation. Synpath ne remplace pas votre validation — il accélère l'obtention d'un brouillon de devis défendable."
  }, {
    question: "Peut-il fonctionner avec nos outils ERP et e-mail ?",
    answer: "Oui. Synpath se superpose à votre stack actuelle — coûts de production ERP, RFQ en boîte de réception, feuilles de calcul et fils de devis fournisseurs. Nous intégrons les systèmes industriels courants et adaptons le mapping des champs à la façon dont vos estimateurs travaillent déjà."
  }, {
    question: "Quand une estimation est-elle prête à être envoyée ?",
    answer: "Synpath produit un brouillon avec lignes de coûts, statut fournisseur et contrôles de marge. Il n'est utilisé en production qu'après des tests bêta montrant l'alignement des estimations avec vos résultats historiques et vos seuils d'approbation. La publication finale du devis reste toujours entre les mains de votre équipe."
  }]
};
const P1 = {
  quoting: V1,
  estimating: _1,
  "production-planning": {
    title: "Planification de la production",
    description: "Fluidifiez l'ordonnancement et optimisez l'allocation des ressources grâce à une planification intelligente.",
    heroTitle: "Planification de production intelligente",
    heroSubtitle: "Optimisez automatiquement votre planning d'atelier en tenant compte de la disponibilité machines, des équipes et des dépendances. Ne dépendez plus de feuilles de calcul obsolètes.",
    features: [{
      title: "Ordonnancement dynamique",
      description: "Ajuste automatiquement les plannings de production à partir des données atelier en temps réel."
    }, {
      title: "Optimisation des ressources",
      description: "Garantit une allocation efficace des machines et opérateurs afin de minimiser les temps d'arrêt."
    }, {
      title: "Gestion des contraintes",
      description: "Prend simultanément en compte les contraintes d'outillage, de matière et de ressources humaines."
    }],
    howItWorks: {
      title: "Comment ça marche",
      subtitle: "Transformez les commandes clients en ordres de fabrication prêts à être lancés.",
      steps: [{
        label: "Plan en un clic"
      }, {
        label: "Arbre WO"
      }, {
        label: "WO lancés instantanément"
      }],
      demoType: "video"
    },
    setupHeadline: "En production en 90 jours.",
    setupSteps: [{
      step: 1,
      title: "Collecte des données de planning, gammes et contraintes",
      description: "Importez machines, équipes, gammes, ordres de fabrication ouverts et rattachement matière depuis votre ERP. Synpath reproduit la manière dont vos planificateurs construisent réellement le planning atelier."
    }, {
      step: 2,
      title: "30 jours de configuration du moteur de planification",
      description: "Connectez les ordres de fabrication ERP, calendriers de capacité et règles de dépendance. Le moteur apprend votre logique de séquencement, vos temps de réglage et vos contraintes de ressources."
    }, {
      step: 3,
      title: "30 jours de tests bêta",
      description: "Exécutez les plans Synpath en parallèle de vos planificateurs sur la demande réelle. Nous ajustons l'équilibrage de charge, le séquencement WO et le timing de lancement jusqu'à ce que les résultats reflètent la réalité de l'atelier."
    }, {
      step: 4,
      title: "30 jours de déploiement et de formation des planificateurs",
      description: "Déployez la planification en un clic dans les opérations quotidiennes. Votre équipe reçoit des playbooks pour les exceptions, les surcharges manuelles et la libération instantanée des ordres de fabrication."
    }, {
      step: 5,
      title: "90 jours entre le lancement et la planification autonome",
      description: "Trois mois entre la collecte des données et un workflow de planification qui suit l'évolution de la demande — sans remplacer votre ERP."
    }],
    whySectionLabel: "Pourquoi Synpath Planification de la production",
    whyTitle: "Du chaos du carnet de commandes à un plan prêt au lancement en un clic.",
    benefits: ["Construit un plan réalisable à partir de la demande et de la capacité ERP en direct", "Visualise les dépendances d'ordres de fabrication avant lancement", "Équilibre automatiquement la charge entre machines et équipes", "Lance les ordres de fabrication avec une action confirmée", "Passe en production uniquement après validation de la qualité du plan en bêta"],
    faqs: [{
      question: "Qu'automatise Synpath Planification de la production ?",
      answer: "Synpath lit la demande ouverte, applique vos règles de gamme et de capacité, génère un plan séquencé, affiche l'arbre des ordres de fabrication et permet aux planificateurs de lancer des ordres prêts à l'exécution en une étape."
    }, {
      question: "Combien de temps prend l'implémentation ?",
      answer: "La plupart des ateliers sont en production sous 90 jours : collecte des données ERP, 30 jours de configuration du moteur, 30 jours de tests bêta avec les planificateurs, puis déploiement. Les planificateurs gardent le contrôle de la validation finale."
    }, {
      question: "Est-ce que cela remplace le planificateur de notre ERP ?",
      answer: "Non. Synpath se place au-dessus de votre ERP en utilisant ses ordres de fabrication, gammes et données de stock pour produire un plan atelier plus intelligent — puis réécrit les actions de lancement validées par votre équipe."
    }, {
      question: "Que se passe-t-il lorsque la demande change en milieu de semaine ?",
      answer: "Relancez la planification en un clic pour actualiser le planning selon le backlog actuel, la capacité et la disponibilité matière. Synpath est conçu pour la variabilité permanente de la fabrication réelle."
    }]
  },
  "urgent-order": {
    title: "Commande urgente",
    description: "Traitez les demandes d'accélération sans perturber vos engagements existants.",
    heroTitle: "Gérez les urgences en toute confiance",
    heroSubtitle: `Évaluez instantanément l'impact capacitaire d'un "hot job" ajouté en cours de route. Synpath vous indique si vous pouvez accepter une commande urgente sans rater d'autres échéances.`,
    features: [{
      title: "Analyse d'impact",
      description: "Visualisez précisément quels jobs glisseront si vous insérez une commande urgente."
    }, {
      title: "Planification par scénarios",
      description: "Testez différents scénarios de gamme et d'équipes avant de vous engager sur une date de livraison."
    }, {
      title: "Reroutage instantané",
      description: "Repriorise automatiquement les files existantes pour intégrer le chemin critique."
    }],
    howItWorks: {
      title: "Comment ça marche",
      subtitle: "De la commande urgente au plan de production confirmé.",
      steps: [{
        label: "Simulation IA"
      }, {
        label: "Replanification en un clic"
      }, {
        label: "WO lancés instantanément"
      }],
      demoType: "video"
    },
    setupHeadline: "En production en 90 jours.",
    setupSteps: [{
      step: 1,
      title: "Collecte du modèle de capacité et des règles d'urgence",
      description: `Importez le planning actuel, la charge machine, les priorités clients et les politiques d'heures supplémentaires. Synpath apprend ce que signifient "oui" et "non" pour votre exploitation.`
    }, {
      step: 2,
      title: "30 jours de configuration simulation et replanification",
      description: "Connectez les canaux de prise de commande et l'ordonnancement ERP. L'agent apprend à modéliser le risque de glissement, les gammes alternatives et l'impact client avant que vous ne vous engagiez."
    }, {
      step: 3,
      title: "30 jours de tests bêta",
      description: "Exécutez des simulations d'urgence sur des commandes réelles en parallèle de vos planificateurs. Nous affinons la visibilité d'impact, la qualité de replanification et le timing de lancement jusqu'à ce que les décisions soient fiables."
    }, {
      step: 4,
      title: "30 jours de déploiement et de formation des opérations",
      description: "Déployez la gestion des urgences dans les workflows quotidiens ventes et planification. Votre équipe obtient des étapes claires pour accepter, différer ou renégocier les commandes urgentes."
    }, {
      step: 5,
      title: "90 jours entre le lancement et une réponse fiable aux urgences",
      description: `Trois mois pour transformer "Peut-on l'intégrer ?" d'une course de plusieurs heures en une réponse étayée par les données, que votre équipe peut assumer.`
    }],
    whySectionLabel: "Pourquoi Synpath Commande urgente",
    whyTitle: "Connaissez le coût du oui avant d'annoncer la date.",
    benefits: ["Simule l'impact capacitaire avant d'accepter une urgence", "Montre quelles commandes glissent si le hot job est inséré", "Replanifie le planning atelier avec une action confirmée", "Diffuse les ordres de fabrication mis à jour sans reprise manuelle", "Passe en production uniquement après confiance des planificateurs dans les simulations"],
    faqs: [{
      question: "Comment Synpath évalue-t-il une commande urgente ?",
      answer: "Synpath modélise l'urgence sur votre planning en direct, montre les glissements en aval et les conflits de ressources, propose une replanification et permet à votre équipe de lancer les ordres de fabrication mis à jour si vous acceptez les compromis."
    }, {
      question: "Les ventes peuvent-elles l'utiliser sans attendre la planification ?",
      answer: "Synpath donne aux ventes une vue rapide et factuelle de la faisabilité et du risque de livraison. L'engagement final suit toujours votre processus d'approbation — mais l'analyse se fait en minutes, pas en jours."
    }, {
      question: "De quelles données a-t-il besoin pour lancer les simulations ?",
      answer: "Ordres de fabrication ouverts, gammes, calendriers machines et engagements clients actuels issus de votre ERP. Synpath utilise les mêmes données sur lesquelles vos planificateurs s'appuient déjà."
    }, {
      question: "Dans combien de temps peut-on l'utiliser sur des urgences réelles ?",
      answer: "La plupart des équipes sont en production sous 90 jours après collecte, configuration, tests bêta sur de vraies urgences, puis formation au déploiement avec ventes et planification."
    }]
  },
  "machine-breakdown": {
    title: "Panne machine",
    description: "Automatisez vos plans de contingence et minimisez l'impact des défaillances d'équipement.",
    heroTitle: "Gestion résiliente des arrêts",
    heroSubtitle: "Quand une CNC tombe en panne, comprenez instantanément le rayon d'impact. Identifiez automatiquement les commandes affectées et les chemins de gamme alternatifs.",
    features: [{
      title: "Visibilité du rayon d'impact",
      description: "Visualisez instantanément chaque engagement client impacté par l'arrêt."
    }, {
      title: "Sourcing alternatif",
      description: "Identifiez les machines de secours capables ou des fournisseurs externes pour absorber la charge."
    }, {
      title: "Communication proactive",
      description: "Rédige automatiquement des mises à jour de statut aux parties prenantes avant qu'elles ne les demandent."
    }],
    howItWorks: {
      title: "Comment ça marche",
      subtitle: "De l'alerte machine au plan de reprise.",
      steps: [{
        label: "Détecter les alertes machine"
      }, {
        label: "Simulation IA"
      }, {
        label: "Replanification en un clic"
      }],
      demoType: "video"
    },
    setupHeadline: "En production en 90 jours.",
    setupSteps: [{
      step: 1,
      title: "Collecte des machines, gammes et sources d'alerte",
      description: "Connectez les alertes atelier, les données de référence machine, les gammes alternatives et les dates d'échéance client. Synpath cartographie les commandes réellement à risque lorsqu'un actif tombe en panne."
    }, {
      step: 2,
      title: "30 jours de configuration de la réponse aux arrêts",
      description: "Reliez les déclencheurs d'alerte à la logique de simulation et de replanification. Le système apprend les machines de secours, les options d'externalisation et le séquencement de reprise de votre site."
    }, {
      step: 3,
      title: "30 jours de tests bêta",
      description: "Exécutez des scénarios de panne sur des arrêts historiques et réels. Nous ajustons la visibilité du rayon d'impact, la qualité des gammes alternatives et la vitesse de replanification jusqu'à obtenir des réponses exploitables."
    }, {
      step: 4,
      title: "30 jours de déploiement et de formation des superviseurs",
      description: "Déployez des playbooks d'arrêt pour les planificateurs et superviseurs. Votre équipe obtient des étapes claires pour la revue de simulation, l'approbation de replanification et les mises à jour aux parties prenantes."
    }, {
      step: 5,
      title: "90 jours entre le lancement et la réponse autonome aux arrêts",
      description: "Trois mois pour remplacer la gestion de crise sur tableur par un workflow de reprise reproductible lorsque les machines s'arrêtent."
    }],
    whySectionLabel: "Pourquoi Synpath Panne machine",
    whyTitle: "Visualisez le rayon d'impact et la trajectoire de reprise en quelques minutes.",
    benefits: ["Détecte les alertes machine depuis l'atelier et les systèmes de supervision", "Montre toutes les commandes affectées par l'arrêt", "Simule les machines alternatives et options de gamme", "Diffuse un plan de reprise avec une action confirmée", "Passe en production uniquement après validation des scénarios d'arrêt en bêta"],
    faqs: [{
      question: "Que se passe-t-il lorsqu'une machine tombe en panne ?",
      answer: "Synpath capte l'alerte, calcule les ordres de fabrication et engagements clients impactés, simule les options de reprise et produit une replanification que votre équipe peut approuver et lancer immédiatement."
    }, {
      question: "Peut-il rerouter le travail automatiquement vers des machines de secours ?",
      answer: "Synpath propose des gammes alternatives selon les machines capables et la charge actuelle. Vos planificateurs examinent et approuvent le plan de reprise avant mise à jour des ordres de fabrication."
    }, {
      question: "Comment se connecte-t-il à notre atelier ?",
      answer: "Les alertes peuvent provenir de saisies ERP d'arrêt, de la supervision machine ou d'une saisie manuelle du superviseur. Synpath normalise le signal et déclenche le même workflow de simulation à chaque fois."
    }, {
      question: "Combien de temps prend la mise en place ?",
      answer: "La plupart des sites sont en production sous 90 jours : collecte des gammes et alertes, 30 jours de configuration, 30 jours de tests bêta sur pannes réelles ou historiques, puis déploiement."
    }]
  },
  "material-delay": {
    title: "Retard matière",
    description: "Gérez de manière proactive les perturbations de la chaîne d'approvisionnement et coordonnez les ajustements de planning.",
    heroTitle: "Résilience de la chaîne d'approvisionnement",
    heroSubtitle: "Un fournisseur est en retard ? Synpath recalcule toutes les dépendances en aval et signale les commandes nécessitant un sourcing alternatif.",
    features: [{
      title: "Suivi des dépendances",
      description: "Cartographie précisément les matières premières vers les encours et produits finis."
    }, {
      title: "Ajustements en aval",
      description: "Repousse automatiquement les dates de démarrage des jobs bloqués par des matières en retard."
    }, {
      title: "Coordination fournisseurs",
      description: "Suit les PO en retard et automatise les relances auprès des fournisseurs qui manquent leurs engagements."
    }],
    howItWorks: {
      title: "Comment ça marche",
      subtitle: "Du retard fournisseur au plan de production ajusté.",
      steps: [{
        label: "Détection de retard"
      }, {
        label: "Simulation d'impact"
      }, {
        label: "Replanification en un clic"
      }],
      demoType: "video"
    },
    setupHeadline: "En production en 90 jours.",
    setupSteps: [{
      step: 1,
      title: "Collecte des données fournisseurs, PO et rattachement",
      description: "Importez les commandes d'achat, délais matière, rattachement BOM et ordres de production ouverts. Synpath trace comment un article en retard se propage dans votre planning de fabrication."
    }, {
      step: 2,
      title: "30 jours de configuration détection des retards et simulation",
      description: "Connectez les mises à jour fournisseurs, les réceptions ERP et les données de planification. Le système apprend quels jobs sont bloqués, lesquels peuvent avancer et quelles options d'approvisionnement alternatives existent."
    }, {
      step: 3,
      title: "30 jours de tests bêta",
      description: "Exécutez des scénarios de retard matière sur des perturbations d'approvisionnement réelles. Nous affinons la vitesse de détection, la précision d'impact en aval et la qualité de replanification jusqu'à ce que les planificateurs fassent confiance aux résultats."
    }, {
      step: 4,
      title: "30 jours de déploiement et de formation acheteurs-planificateurs",
      description: "Déployez la réponse aux retards dans les workflows achats et planification. Votre équipe reçoit des playbooks pour le suivi fournisseur, l'ajustement du planning et la communication client."
    }, {
      step: 5,
      title: "90 jours entre le lancement et la réponse proactive d'approvisionnement",
      description: "Trois mois pour passer d'une réaction en mode urgence à un workflow autonome qui ajuste le plan dès qu'un approvisionnement glisse."
    }],
    whySectionLabel: "Pourquoi Synpath Retard matière",
    whyTitle: "Détectez la matière en retard avant qu'elle ne provoque un retard d'expédition.",
    benefits: ["Détecte les retards fournisseurs via le statut PO et les mises à jour entrantes", "Cartographie les jobs en aval bloqués par l'absence de matière", "Simule l'impact planning avant que les commandes ne soient en retard", "Replanifie la production avec une action confirmée", "Passe en production uniquement après validation des scénarios de retard en bêta"],
    faqs: [{
      question: "Comment Synpath détecte-t-il un retard matière ?",
      answer: "Synpath surveille les dates de commandes d'achat, confirmations fournisseurs et activités de réception. Lorsqu'une ligne glisse, il signale immédiatement les ordres de production impactés et simule l'impact sur le planning."
    }, {
      question: "Peut-il suggérer un sourcing alternatif ?",
      answer: "Synpath met en évidence les jobs à risque et fournit aux planificateurs les options de replanification autorisées par vos règles — y compris des fournisseurs alternatifs ou des fabrications partielles lorsque la matière est disponible."
    }, {
      question: "Remplace-t-il nos acheteurs ?",
      answer: "Non. Les acheteurs conservent la relation fournisseur. Synpath automatise la détection, l'analyse d'impact et l'ajustement du planning afin que la planification puisse réagir pendant que les achats sécurisent l'approvisionnement."
    }, {
      question: "Dans combien de temps peut-on l'utiliser sur des glissements PO réels ?",
      answer: "La plupart des équipes sont en production sous 90 jours après collecte du rattachement, 30 jours de configuration, 30 jours de tests bêta sur des retards réels, puis déploiement avec acheteurs et planificateurs."
    }]
  }
};
const U1 = {
  title: "Angebotserstellung",
  description: "Empfangen Sie RFQ-E-Mails, gleichen Sie Teile mit Ihrem Katalog ab, validieren Sie Preise und senden Sie automatisch professionelle Angebote.",
  heroTitle: "Angebotserstellung",
  heroSubtitle: "Empfangen Sie RFQ-E-Mails, gleichen Sie Teile mit Ihrem Katalog ab, validieren Sie Preise und senden Sie automatisch professionelle Angebote.",
  features: [{
    title: "RFQ-Erfassung",
    description: "Analysiert eingehende E-Mails und Anhaenge, um Positionen automatisch zu extrahieren."
  }, {
    title: "Katalogabgleich",
    description: "Gleicht Teile mit Ihrem ERP-Katalog unter Berucksichtigung kundenspezifischer Preisregeln ab."
  }, {
    title: "Angebotserstellung",
    description: "Erstellt professionelle Angebote mit validierten Preisen und Lieferzeiten."
  }],
  howItWorks: {
    title: "So funktioniert es",
    subtitle: "Vom Ausloser zum Ergebnis.",
    steps: [{
      label: "RFQ-E-Mail"
    }, {
      label: "Teile extrahieren"
    }, {
      label: "ERP-Preise"
    }, {
      label: "Angebot gesendet"
    }],
    demoType: "quoting"
  },
  setupHeadline: "In 90 Tagen live.",
  setupSteps: [{
    step: 1,
    title: "Erfassung von Katalog-, Preis- und Kundenregeln",
    description: "Importieren Sie Teile-Stammdaten, Kundenstufen, Mengenstaffeln und historische Angebotsergebnisse. Synpath lernt, wie Ihr Vertrieb tatsachlich bepreist - nicht nur eine generische Preisliste."
  }, {
    step: 2,
    title: "30 Tage Integration von Postfach und ERP",
    description: "Verbinden Sie RFQ-E-Mails, Anhange und ERP-Preisfelder. Der Agent lernt, Positionen abzugleichen, fehlende Daten zu kennzeichnen und Ihre Freigaberegeln anzuwenden."
  }, {
    step: 3,
    title: "30 Tage Betatest",
    description: "Lassen Sie Entwurfsangebote parallel zu Ihrem Vertrieb mit echten RFQs laufen. Wir optimieren Extraktionsgenauigkeit, Preisvalidierung und Angebotsformatierung, bis die Ergebnisse bereit zur Prufung sind."
  }, {
    step: 4,
    title: "30 Tage Rollout und Vertriebsschulung",
    description: "Setzen Sie die Losung mit klaren Prufschritten in Ihrem Angebotsprozess ein. Ihr Team erhalt Playbooks fur Ausnahmen, Margenprufungen und die Freigabe kundenfertiger Angebote."
  }, {
    step: 5,
    title: "90 Tage vom Kickoff bis zur taglichen Angebotsunterstutzung",
    description: "Ein fokussierter Drei-Monats-Rollout, der auf Ihrem bestehenden Postfach und ERP aufsetzt - ohne den heutigen Vertriebsprozess komplett zu ersetzen."
  }],
  whySectionLabel: "Warum Synpath Angebotserstellung",
  whyTitle: "Von der RFQ-E-Mail zum validierten Angebotsentwurf in Minuten.",
  benefits: ["Parst RFQ-E-Mails und Anhange in strukturierte Positionen", "Gleicht Teile mit Ihrem Katalog und kundenspezifischen Preisregeln ab", "Kennzeichnet fehlende Daten, bevor ein Angebot Ihr Haus verlasst", "Bewahrt einen vollstandigen Audit-Trail von der RFQ-Erfassung bis zum Versand", "Geht erst live, wenn die Genauigkeit im Betatest validiert ist"],
  faqs: [{
    question: "Was deckt Synpath Angebotserstellung end-to-end ab?",
    answer: "Synpath uberwacht RFQ-Postfacher, extrahiert Teile und Mengen aus E-Mails und PDFs, gleicht sie mit Ihrem Katalog ab, validiert Preise gegen ERP-Regeln und erstellt ein kundenfertiges Angebotsdokument zur Prufung und zum Versand durch Ihr Team."
  }, {
    question: "Wie lange dauert der Rollout?",
    answer: "Die meisten Kunden sind innerhalb von 90 Tagen live: Katalogerfassung, 30 Tage Integration, 30 Tage Betatest mit Ihrem Vertrieb, dann Rollout. Synpath beschleunigt die Erstellung - die finale Freigabe bleibt bei Ihrem Team."
  }, {
    question: "Funktioniert das mit unserem bestehenden ERP und E-Mail-System?",
    answer: "Ja. Synpath verbindet sich mit gangigen ERP- und E-Mail-Systemen in der Fertigung. Wir mappen Felder auf Ihre bestehende Arbeitsweise inklusive kundenspezifischer Preise und Ausnahmebehandlung."
  }, {
    question: "Wie verhindern Sie Fehlangebote?",
    answer: "Jeder Angebotsentwurf durchlauft vor der Prufung Katalogabgleich, Preisvalidierung und Prufungen auf fehlende Daten. Das System geht erst in Produktion, wenn die Betatests Ihre Genauigkeitsschwellen erreichen."
  }]
};
const H1 = {
  title: "Kalkulation",
  description: "Trainieren Sie individuelle KI-Agenten mit Ihren historischen Auftragskosten, Lieferantenangeboten und Kalkulationsregeln. Erstellen Sie zuverlassige, lieferantenbewusste Kalkulationen, die Zielmargen schutzen.",
  heroTitle: "Kalkulation",
  heroSubtitle: "Trainieren Sie individuelle KI-Agenten mit Ihren historischen Auftragskosten, Lieferantenangeboten und Kalkulationsregeln. Erstellen Sie zuverlassige, lieferantenbewusste Kalkulationen, die Zielmargen schutzen.",
  features: [{
    title: "Historisches Training",
    description: "Trainiert auf Kostendaten aus Jahren realer Auftrage in Ihrer Produktion."
  }, {
    title: "Dokumentenverarbeitung",
    description: "Verarbeitet STEP-Dateien, CAD-Zeichnungen und Spezifikationsblatter automatisch."
  }, {
    title: "Margenschutz",
    description: "Kalkulationen halten Zielmargen ein, validiert gegen historische Angebote."
  }],
  howItWorks: {
    title: "So funktioniert es",
    subtitle: "Vom Ausloser zum Ergebnis.",
    steps: [{
      label: "RFQ-E-Mail"
    }, {
      label: "Zeichnungen + Spezifikationen"
    }, {
      label: "Kalkulation"
    }],
    demoType: "estimating"
  },
  setupHeadline: "In 90 Tagen live.",
  setupSteps: [{
    step: 1,
    title: "Erfassung historischer Kosten- und Lieferantendaten",
    description: "Laden Sie fruhere Auftragskosten, gewonnene/verlorene Angebote, Routing-Annahmen und freigegebene Lieferanten-Preiskarten hoch. Synpath bildet ab, wie Ihr Team tatsachlich kalkuliert - nicht nach einem generischen Template."
  }, {
    step: 2,
    title: "30 Tage Modellaufbau und Integration",
    description: "Wir verbinden E-Mails, Zeichnungen, STEP-Dateien und Ihre ERP-Kostenfelder. Die Kalkulations-Engine lernt Ihre Margenregeln, Gemeinkostenstruktur und Shop-Rate-Logik."
  }, {
    step: 3,
    title: "30 Tage Betatest",
    description: "Lassen Sie Entwurfskalkulationen parallel zu Ihren Kalkulatoren auf echten RFQs laufen. Wir verfeinern Merkmalsauswertung, Lieferanten-RFQ-Trigger und Margenprufungen, bis die Ergebnisse durchgangig nutzbar sind."
  }, {
    step: 4,
    title: "30 Tage Rollout und Schulung der Kalkulatoren",
    description: "Setzen Sie die Losung mit klaren Prufschritten in Ihrem Angebotsprozess ein. Ihr Team erhalt Playbooks fur die Freigabe von Lieferantenangeboten, das Bearbeiten von Kostenzeilen und die Freigabe kundenfertiger Kalkulationen."
  }, {
    step: 5,
    title: "90 Tage vom Kickoff bis zur produktiven Kalkulation",
    description: "Ein fokussierter Drei-Monats-Weg von der Datenerfassung zur taglichen Nutzung - ohne langwieriges IT-Projekt oder Austausch Ihrer bestehenden Systeme."
  }],
  whySectionLabel: "Warum Synpath Kalkulation",
  whyTitle: "Vom RFQ zum lieferantengestutzten Angebotsentwurf in Minuten.",
  benefits: ["Lernt aus Ihren vergangenen Auftragen, Lieferantenangeboten und Kalkulationsregeln", "Identifiziert Kostentreiber aus Zeichnungen, STEP-Dateien und Spezifikationen", "Kennzeichnet, wo externe Lieferantenpreise erforderlich sind", "Pruft die Zielmarge vor Angebotsabgabe", "Geht erst live, wenn die Genauigkeit validiert ist"],
  faqs: [{
    question: "Was macht Synpath Kalkulation konkret?",
    answer: "Synpath liest eingehende RFQs, extrahiert Anforderungen aus Zeichnungen und Spezifikationen, erstellt eine strukturierte Kostenaufstellung und erzeugt einen Kalkulationsentwurf, der interne Prozesse und bei Bedarf externe Lieferantenangebote umfasst. Ihr Team pruft, passt an und gibt frei, bevor etwas an den Kunden geht."
  }, {
    question: "Wie lange dauert die Implementierung?",
    answer: "Die meisten Teams sind innerhalb von 90 Tagen live: Datenerfassung, 30 Tage Modellaufbau, 30 Tage Betatest parallel zu Ihren Kalkulatoren, danach Rollout und Schulung. Synpath ersetzt Ihre Freigabe nicht - es beschleunigt den Weg zu einem belastbaren Angebotsentwurf."
  }, {
    question: "Kann das mit unseren ERP- und E-Mail-Tools arbeiten?",
    answer: "Ja. Synpath setzt auf Ihrem bestehenden Stack auf - ERP-Auftragskosten, RFQs im Postfach, Tabellen und Lieferanten-Angebotsverlaufe. Wir integrieren gangige Fertigungssysteme und passen Feldzuordnungen an Ihre bestehende Arbeitsweise an."
  }, {
    question: "Wann ist eine Kalkulation versandbereit?",
    answer: "Synpath erstellt einen Entwurf mit Kostenzeilen, Lieferantenstatus und Margenprufungen. Die produktive Nutzung startet erst, wenn Betatests zeigen, dass die Kalkulationen mit Ihren historischen Ergebnissen und Freigabeschwellen ubereinstimmen. Die finale Angebotsfreigabe bleibt immer bei Ihrem Team."
  }]
};
const Q1 = {
  quoting: U1,
  estimating: H1,
  "production-planning": {
    title: "Produktionsplanung",
    description: "Optimieren Sie die Terminplanung und Ressourcenzuteilung mit intelligenter Planung.",
    heroTitle: "Intelligente Produktionsplanung",
    heroSubtitle: "Optimieren Sie Ihren Hallenplan automatisch, indem Maschinenverfugbarkeit, Schichten und Abhangigkeiten berucksichtigt werden. Verlassen Sie sich nicht langer auf veraltete Tabellen.",
    features: [{
      title: "Dynamische Terminplanung",
      description: "Passt Produktionsplane automatisch auf Basis von Echtzeitdaten aus der Fertigung an."
    }, {
      title: "Ressourcenoptimierung",
      description: "Stellt sicher, dass Maschinen und Bediener effizient zugeteilt werden, um Stillstand zu minimieren."
    }, {
      title: "Constraint-Management",
      description: "Berucksichtigt Werkzeug-, Material- und personelle Restriktionen gleichzeitig."
    }],
    howItWorks: {
      title: "So funktioniert es",
      subtitle: "Verwandelt Verkaufsauftrage in versandbereite Arbeitsauftrage.",
      steps: [{
        label: "Plan mit einem Klick"
      }, {
        label: "WO-Baum"
      }, {
        label: "WO sofort freigegeben"
      }],
      demoType: "video"
    },
    setupHeadline: "In 90 Tagen live.",
    setupSteps: [{
      step: 1,
      title: "Erfassung von Termin-, Routing- und Constraint-Daten",
      description: "Importieren Sie Maschinen, Schichten, Routings, offene Arbeitsauftrage und Materialzuordnung aus Ihrem ERP. Synpath spiegelt wider, wie Ihre Planer den Hallenplan tatsachlich erstellen."
    }, {
      step: 2,
      title: "30 Tage Konfiguration der Planungs-Engine",
      description: "Verbinden Sie ERP-Arbeitsauftrage, Kapazitatskalender und Abhangigkeitsregeln. Die Engine lernt Ihre Sequenzierungslogik, Rustzeiten und Ressourcenrestriktionen."
    }, {
      step: 3,
      title: "30 Tage Betatest",
      description: "Lassen Sie Synpath-Plane parallel zu Ihren Planern auf echter Nachfrage laufen. Wir optimieren Lastverteilung, WO-Sequenzierung und Freigabezeitpunkte, bis die Ergebnisse der Realitat in der Fertigung entsprechen."
    }, {
      step: 4,
      title: "30 Tage Rollout und Planerschulung",
      description: "Setzen Sie die Ein-Klick-Planung im Tagesgeschaft ein. Ihr Team erhalt Playbooks fur Ausnahmen, manuelle Uberschreibungen und die sofortige Freigabe von Arbeitsauftragen."
    }, {
      step: 5,
      title: "90 Tage vom Kickoff bis zur autonomen Planung",
      description: "Drei Monate von der Datenerfassung zu einem Planungsablauf, der mit veranderlicher Nachfrage Schritt halt - ohne Ihr ERP zu ersetzen."
    }],
    whySectionLabel: "Warum Synpath Produktionsplanung",
    whyTitle: "Vom Backlog-Chaos zum versandbereiten Plan mit einem Klick.",
    benefits: ["Erstellt einen realisierbaren Plan aus aktueller ERP-Nachfrage und Kapazitat", "Visualisiert Arbeitsauftrags-Abhangigkeiten vor der Freigabe", "Balanciert die Auslastung uber Maschinen und Schichten automatisch", "Gibt Arbeitsauftrage mit einer bestatigten Aktion frei", "Geht erst live, wenn Planer die Planqualitat im Betatest validieren"],
    faqs: [{
      question: "Was automatisiert Synpath Produktionsplanung?",
      answer: "Synpath liest offene Nachfrage, wendet Ihre Routing- und Kapazitatsregeln an, erzeugt einen sequenzierten Plan, zeigt den Arbeitsauftragsbaum und ermoglicht Planern, versandbereite Arbeitsauftrage in einem Schritt freizugeben."
    }, {
      question: "Wie lange dauert die Implementierung?",
      answer: "Die meisten Betriebe sind innerhalb von 90 Tagen live: ERP-Datenerfassung, 30 Tage Engine-Konfiguration, 30 Tage Betatest mit Planern, dann Rollout. Planer behalten die Kontrolle uber die finale Freigabe."
    }, {
      question: "Ersetzt es unseren ERP-Scheduler?",
      answer: "Nein. Synpath sitzt auf Ihrem ERP auf, nutzt dessen Arbeitsauftrage, Routings und Bestandsdaten fur einen intelligenteren Hallenplan - und schreibt dann von Ihrem Team freigegebene Dispositionsaktionen zuruck."
    }, {
      question: "Was passiert, wenn sich die Nachfrage mitten in der Woche andert?",
      answer: "Starten Sie die Ein-Klick-Planung erneut, um den Plan gegen aktuellen Backlog, Kapazitat und Materialverfugbarkeit zu aktualisieren. Synpath ist fur den stetigen Wandel in der realen Fertigung gebaut."
    }]
  },
  "urgent-order": {
    title: "Eilauftrag",
    description: "Bearbeiten Sie Eilanfragen nahtlos, ohne bestehende Zusagen zu gefahrden.",
    heroTitle: "Eilauftrage sicher bearbeiten",
    heroSubtitle: "Bewerten Sie die Kapazitatsauswirkung eines kurzfristigen Hot Jobs sofort. Synpath zeigt Ihnen, ob Sie einen Eilauftrag sicher annehmen konnen, ohne andere Termine zu verfehlen.",
    features: [{
      title: "Auswirkungsanalyse",
      description: "Zeigt genau, welche Auftrage sich verschieben, wenn Sie einen Eilauftrag einfugen."
    }, {
      title: "Szenarioplanung",
      description: "Testet verschiedene Routing- und Schichtszenarien, bevor ein Liefertermin zugesagt wird."
    }, {
      title: "Sofortige Neupriorisierung",
      description: "Priorisiert bestehende Warteschlangen automatisch neu, um den kritischen Pfad aufzunehmen."
    }],
    howItWorks: {
      title: "So funktioniert es",
      subtitle: "Vom Eilauftrag zum bestatigten Produktionsplan.",
      steps: [{
        label: "KI-Simulation"
      }, {
        label: "Neuplanung mit einem Klick"
      }, {
        label: "WO sofort freigegeben"
      }],
      demoType: "video"
    },
    setupHeadline: "In 90 Tagen live.",
    setupSteps: [{
      step: 1,
      title: "Erfassung von Kapazitatsmodell und Eilregeln",
      description: "Importieren Sie aktuellen Plan, Maschinenauslastung, Kundenprioritaten und Uberstundenrichtlinien. Synpath lernt, was fur Ihren Betrieb ein \"Ja\" und ein \"Nein\" bedeutet."
    }, {
      step: 2,
      title: "30 Tage Konfiguration von Simulation und Neuplanung",
      description: "Verbinden Sie Kanale fur Auftragseingang und ERP-Planung. Der Agent lernt, Verzogerungsrisiko, alternative Routings und Kundenauswirkungen zu modellieren, bevor Sie zusagen."
    }, {
      step: 3,
      title: "30 Tage Betatest",
      description: "Lassen Sie Eilsimulationen parallel zu Ihren Planern auf echten Hot Orders laufen. Wir optimieren Wirkungstransparenz, Neuplanungsqualitat und Freigabezeitpunkt, bis Entscheidungen belastbar sind."
    }, {
      step: 4,
      title: "30 Tage Rollout und Schulung des Betriebsteams",
      description: "Integrieren Sie die Eilbearbeitung in tagliche Vertriebs- und Planungsablaufe. Ihr Team erhalt klare Schritte fur Annehmen, Verschieben oder Neuverhandeln dringender Auftrage."
    }, {
      step: 5,
      title: "90 Tage vom Kickoff bis zur sicheren Eilreaktion",
      description: "Drei Monate, um aus \"Can we fit it in?\" eine datenbasierte Antwort zu machen, die Ihr Team vertreten kann."
    }],
    whySectionLabel: "Warum Synpath Eilauftrag",
    whyTitle: "Kennen Sie die Kosten eines Ja, bevor Sie den Termin zusagen.",
    benefits: ["Simuliert Kapazitatsauswirkungen vor Annahme eines Eilauftrags", "Zeigt, welche Auftrage sich verschieben, wenn der Hot Job eingeplant wird", "Plant den Hallenplan mit einer bestatigten Aktion neu", "Gibt aktualisierte Arbeitsauftrage ohne manuelle Nacharbeit frei", "Geht erst live, wenn Planer den Simulationsergebnissen vertrauen"],
    faqs: [{
      question: "Wie bewertet Synpath einen Eilauftrag?",
      answer: "Synpath modelliert den Eilauftrag gegen Ihren Live-Plan, zeigt nachgelagerte Verzogerungen und Ressourcenkonflikte, schlagt eine Neuplanung vor und lasst Ihr Team aktualisierte Arbeitsauftrage freigeben, wenn Sie die Trade-offs akzeptieren."
    }, {
      question: "Kann der Vertrieb das ohne Warten auf die Planung nutzen?",
      answer: "Synpath gibt dem Vertrieb eine schnelle, datenbasierte Sicht auf Machbarkeit und Lieferrisiko. Die finale Zusage folgt weiterhin Ihrem Freigabeprozess - aber die Analyse erfolgt in Minuten statt Tagen."
    }, {
      question: "Welche Daten braucht es fur Simulationen?",
      answer: "Offene Arbeitsauftrage, Routings, Maschinenkalender und aktuelle Kundenzusagen aus Ihrem ERP. Synpath nutzt dieselben Daten, auf die sich Ihre Planer bereits verlassen."
    }, {
      question: "Wie lange dauert es, bis wir das fur echte Eilauftrage nutzen konnen?",
      answer: "Die meisten Teams sind innerhalb von 90 Tagen live - nach Erfassung, Konfiguration, Betatests auf echten Hot Orders und Rollout-Schulung mit Vertrieb und Planung."
    }]
  },
  "machine-breakdown": {
    title: "Maschinenausfall",
    description: "Automatisieren Sie Ihre Notfallplane und minimieren Sie die Auswirkungen von Anlagenstorungen.",
    heroTitle: "Resilientes Downtime-Management",
    heroSubtitle: "Wenn eine CNC ausfallt, verstehen Sie sofort den vollen Wirkungsbereich. Betroffene Auftrage und alternative Routing-Pfade werden automatisch identifiziert.",
    features: [{
      title: "Transparenz uber den Wirkungsbereich",
      description: "Zeigt sofort jede Kundenzusage, die vom Ausfall betroffen ist."
    }, {
      title: "Alternative Beschaffung",
      description: "Identifiziert geeignete Ersatzmaschinen oder externe Anbieter zur Lastaufnahme."
    }, {
      title: "Proaktive Kommunikation",
      description: "Erstellt automatisch Statusupdates fur Stakeholder, bevor sie nachfragen."
    }],
    howItWorks: {
      title: "So funktioniert es",
      subtitle: "Vom Maschinenalarm zum Wiederherstellungsplan.",
      steps: [{
        label: "Maschinenalarme erkennen"
      }, {
        label: "KI-Simulation"
      }, {
        label: "Neuplanung mit einem Klick"
      }],
      demoType: "video"
    },
    setupHeadline: "In 90 Tagen live.",
    setupSteps: [{
      step: 1,
      title: "Erfassung von Maschinen-, Routing- und Alarmquellen",
      description: "Verbinden Sie Shopfloor-Alarme, Maschinenstammdaten, alternative Routings und Kundentermine. Synpath mappt, welche Auftrage wirklich gefahrdet sind, wenn ein Asset ausfallt."
    }, {
      step: 2,
      title: "30 Tage Konfiguration der Ausfallreaktion",
      description: "Verknupfen Sie Alarm-Trigger mit Simulation und Neuplanungslogik. Das System lernt Ersatzmaschinen, Outsourcing-Optionen und Wiederherstellungssequenzen fur Ihren Standort."
    }, {
      step: 3,
      title: "30 Tage Betatest",
      description: "Lassen Sie Ausfallszenarien gegen historische und aktuelle Storungen laufen. Wir optimieren Transparenz des Wirkungsbereichs, Qualitat alternativer Routings und Neuplanungsgeschwindigkeit, bis Reaktionen umsetzbar sind."
    }, {
      step: 4,
      title: "30 Tage Rollout und Schulung der Schichtleiter",
      description: "Fuhren Sie Downtime-Playbooks fur Planer und Schichtleiter ein. Ihr Team erhalt klare Schritte fur Simulationsprufung, Freigabe der Neuplanung und Stakeholder-Updates."
    }, {
      step: 5,
      title: "90 Tage vom Kickoff bis zur autonomen Downtime-Reaktion",
      description: "Drei Monate, um Spreadsheet-Feuerwehr durch einen wiederholbaren Wiederherstellungsworkflow zu ersetzen, wenn Maschinen stillstehen."
    }],
    whySectionLabel: "Warum Synpath Maschinenausfall",
    whyTitle: "Wirkungsbereich und Wiederherstellungspfad in Minuten sehen.",
    benefits: ["Erkennt Maschinenalarme aus Shopfloor- und Monitoring-Systemen", "Zeigt jeden Auftrag, der vom Ausfall betroffen ist", "Simuliert alternative Maschinen- und Routing-Optionen", "Gibt einen Wiederherstellungsplan mit einer bestatigten Aktion frei", "Geht erst live, wenn Ausfallszenarien den Betatest bestehen"],
    faqs: [{
      question: "Was passiert, wenn eine Maschine ausfallt?",
      answer: "Synpath erfasst den Alarm, berechnet betroffene Arbeitsauftrage und Kundenzusagen, simuliert Wiederherstellungsoptionen und erzeugt eine Neuplanung, die Ihr Team sofort freigeben und disponieren kann."
    }, {
      question: "Kann es Arbeit automatisch auf Ersatzmaschinen routen?",
      answer: "Synpath schlagt alternative Routings anhand geeigneter Maschinen und aktueller Last vor. Ihre Planer prufen und geben den Wiederherstellungsplan frei, bevor Arbeitsauftrage aktualisiert werden."
    }, {
      question: "Wie verbindet es sich mit unserem Shopfloor?",
      answer: "Alarme konnen aus ERP-Downtime-Eintragen, Maschinenmonitoring oder manueller Eingabe durch Schichtleiter kommen. Synpath normalisiert das Signal und startet jedes Mal denselben Simulationsworkflow."
    }, {
      question: "Wie lange dauert die Einrichtung?",
      answer: "Die meisten Standorte sind innerhalb von 90 Tagen live: Erfassung von Routing und Alarmen, 30 Tage Konfiguration, 30 Tage Betatest auf echten oder historischen Ausfallen, danach Rollout."
    }]
  },
  "material-delay": {
    title: "Materialverzogerung",
    description: "Steuern Sie Lieferkettenstorungen proaktiv und koordinieren Sie Terminplananpassungen.",
    heroTitle: "Resiliente Lieferkette",
    heroSubtitle: "Lieferant verspated? Synpath berechnet alle nachgelagerten Abhangigkeiten neu und markiert Auftrage, die eine alternative Beschaffung brauchen.",
    features: [{
      title: "Abhangigkeitsverfolgung",
      description: "Ordnet Rohmaterialien prazise Zwischen- und Fertigprodukten zu."
    }, {
      title: "Nachgelagerte Anpassungen",
      description: "Verschiebt Starttermine fur Auftrage mit Materialblockern automatisch."
    }, {
      title: "Lieferantenkoordination",
      description: "Verfolgt verspaetete POs und automatisiert Nachfassaktionen bei Lieferanten mit verpassten Zusagen."
    }],
    howItWorks: {
      title: "So funktioniert es",
      subtitle: "Von der Lieferverzogerung zum angepassten Produktionsplan.",
      steps: [{
        label: "Verzogerung erkennen"
      }, {
        label: "Auswirkungssimulation"
      }, {
        label: "Neuplanung mit einem Klick"
      }],
      demoType: "video"
    },
    setupHeadline: "In 90 Tagen live.",
    setupSteps: [{
      step: 1,
      title: "Erfassung von Lieferanten-, PO- und Pegging-Daten",
      description: "Importieren Sie Bestellungen, Materiallieferzeiten, BOM-Pegging und offene Produktionsauftrage. Synpath verfolgt, wie sich eine verspaetete Position durch Ihren Produktionsplan fortpflanzt."
    }, {
      step: 2,
      title: "30 Tage Setup fur Verzogerungserkennung und Simulation",
      description: "Verbinden Sie Lieferantenupdates, ERP-Wareneingange und Planungsdaten. Das System lernt, welche Auftrage blockiert sind, welche weiterlaufen konnen und welche alternativen Beschaffungsoptionen bestehen."
    }, {
      step: 3,
      title: "30 Tage Betatest",
      description: "Lassen Sie Materialverzogerungsszenarien auf echten Lieferstorungen laufen. Wir optimieren Erkennungsgeschwindigkeit, Genauigkeit der Nachwirkungsanalyse und Neuplanungsqualitat, bis Planer den Ergebnissen vertrauen."
    }, {
      step: 4,
      title: "30 Tage Rollout und Schulung fur Einkauf und Planung",
      description: "Integrieren Sie die Verzogerungsreaktion in Einkaufs- und Planungsablaufe. Ihr Team erhalt Playbooks fur Lieferanten-Nachfassen, Terminplananpassungen und Kundenkommunikation."
    }, {
      step: 5,
      title: "90 Tage vom Kickoff bis zur proaktiven Lieferreaktion",
      description: "Drei Monate, um von reaktiver Feuerwehr zu einem autonomen Workflow zu wechseln, der den Plan anpasst, sobald die Versorgung abrutscht."
    }],
    whySectionLabel: "Warum Synpath Materialverzogerung",
    whyTitle: "Verspatetes Material erkennen, bevor es zum verpassten Liefertermin wird.",
    benefits: ["Erkennt Lieferverzogerungen aus PO-Status und eingehenden Updates", "Mappt nachgelagerte Auftrage, die durch fehlendes Material blockiert sind", "Simuliert Terminplanauswirkungen, bevor Auftrage verspaten", "Plant die Produktion mit einer bestatigten Aktion neu", "Geht erst live, wenn Verzogerungsszenarien den Betatest bestehen"],
    faqs: [{
      question: "Wie erkennt Synpath eine Materialverzogerung?",
      answer: "Synpath uberwacht Bestelltermine, Lieferantenbestatigungen und Wareneingangsaktivitaten. Wenn eine Position abrutscht, werden betroffene Produktionsauftrage sofort markiert und die Auswirkung auf den Terminplan simuliert."
    }, {
      question: "Kann es alternative Beschaffung vorschlagen?",
      answer: "Synpath markiert gefahrdete Auftrage und liefert Planern die Neuplanungsoptionen, die Ihre Regeln erlauben - einschliesslich alternativer Lieferanten oder Teilfertigung dort, wo Material verfugbar ist."
    }, {
      question: "Ersetzt es unsere Einkaufer?",
      answer: "Nein. Einkaufer behalten die Lieferantenbeziehungen. Synpath automatisiert Erkennung, Auswirkungsanalyse und Terminplananpassung, damit die Planung reagieren kann, wahrend der Einkauf die Versorgung sichert."
    }, {
      question: "Wie lange dauert es, bis wir das bei echten PO-Verzogerungen nutzen konnen?",
      answer: "Die meisten Teams sind innerhalb von 90 Tagen live - nach Pegging-Erfassung, 30 Tagen Konfiguration, 30 Tagen Betatest auf echten Verzogerungen und Rollout mit Einkauf und Planung."
    }]
  }
};
const G1 = {
  title: "报价",
  description: "自动接收 RFQ 邮件，将零件与您的目录匹配，校验价格，并发送专业报价。",
  heroTitle: "报价",
  heroSubtitle: "自动接收 RFQ 邮件，将零件与您的目录匹配，校验价格，并发送专业报价。",
  features: [{
    title: "RFQ 接收",
    description: "解析收到的邮件和附件，自动提取明细行项目。"
  }, {
    title: "目录匹配",
    description: "根据客户专属定价规则，将零件与您的 ERP 目录匹配。"
  }, {
    title: "报价生成",
    description: "生成包含已校验价格与交期的专业报价。"
  }],
  howItWorks: {
    title: "工作原理",
    subtitle: "从触发到结果。",
    steps: [{
      label: "RFQ 邮件"
    }, {
      label: "提取零件"
    }, {
      label: "ERP 定价"
    }, {
      label: "报价已发送"
    }],
    demoType: "quoting"
  },
  setupHeadline: "90 天上线。",
  setupSteps: [{
    step: 1,
    title: "导入目录、价格与客户规则",
    description: "导入零件主数据、客户分层、阶梯折扣和历史报价结果。Synpath 学习的是您销售团队的定价方式，而不是通用价格表。"
  }, {
    step: 2,
    title: "30 天收件箱与 ERP 集成",
    description: "连接 RFQ 邮件、附件和 ERP 定价字段。智能体将学习匹配明细行、标记缺失数据并应用您的审批规则。"
  }, {
    step: 3,
    title: "30 天 Beta 测试",
    description: "让草稿报价与您的销售团队在真实 RFQ 上并行运行。我们会持续调优提取准确率、价格校验和报价格式，直到输出可供审核。"
  }, {
    step: 4,
    title: "30 天上线推广与销售培训",
    description: "将系统部署到您的报价流程，并设置清晰的审核关卡。您的团队将获得异常处理、利润率检查和面向客户报价发布的操作手册。"
  }, {
    step: 5,
    title: "从启动到每日报价支持仅需 90 天",
    description: "为期三个月的聚焦上线方案，叠加在您现有收件箱和 ERP 之上，无需推倒重来您当前的销售方式。"
  }],
  whySectionLabel: "为什么选择 Synpath 报价",
  whyTitle: "从 RFQ 邮件到已校验报价草稿，仅需几分钟。",
  benefits: ["将 RFQ 邮件和附件解析为结构化明细行项目", "按您的目录与客户定价规则进行零件匹配", "在报价发出前标记缺失数据", "从 RFQ 接收到账单发送全程保留审计轨迹", "仅在 Beta 阶段验证准确率后才正式上线"],
  faqs: [{
    question: "Synpath 报价能端到端处理哪些环节？",
    answer: "Synpath 监控 RFQ 收件箱，从邮件和 PDF 中提取零件与数量，将其匹配到您的目录，依据 ERP 规则校验价格，并生成可直接发送给客户的报价草稿供团队审核后发送。"
  }, {
    question: "上线需要多久？",
    answer: "大多数客户可在 90 天内上线：目录导入、30 天集成、30 天与销售团队并行 Beta 测试，然后上线。Synpath 加速草稿生成，最终审批仍由您的团队负责。"
  }, {
    question: "它能兼容我们现有 ERP 和邮箱吗？",
    answer: "可以。Synpath 可连接常见制造业 ERP 和邮件系统。我们会按您团队当前报价方式映射字段，包括客户专属定价与异常处理。"
  }, {
    question: "如何防止误报价？",
    answer: "每份报价草稿在审核前都会经过目录匹配、价格校验和缺失数据检查。系统仅在 Beta 测试达到您的准确率阈值后才会投入生产。"
  }]
};
const K1 = {
  title: "估算",
  description: "基于您的历史项目成本、供应商报价和成本规则训练定制 AI 智能体，生成可靠且考虑供应商因素的估算，保障目标利润率。",
  heroTitle: "估算",
  heroSubtitle: "基于您的历史项目成本、供应商报价和成本规则训练定制 AI 智能体，生成可靠且考虑供应商因素的估算，保障目标利润率。",
  features: [{
    title: "历史数据训练",
    description: "使用您工厂多年实际项目的成本数据进行训练。"
  }, {
    title: "文档处理",
    description: "自动处理 STEP 文件、CAD 图纸和规格说明。"
  }, {
    title: "利润率保护",
    description: "估算结果会依据历史报价校验并保持目标利润率。"
  }],
  howItWorks: {
    title: "工作原理",
    subtitle: "从触发到结果。",
    steps: [{
      label: "RFQ 邮件"
    }, {
      label: "图纸 + 规格"
    }, {
      label: "估算"
    }],
    demoType: "estimating"
  },
  setupHeadline: "90 天上线。",
  setupSteps: [{
    step: 1,
    title: "导入历史成本与供应商数据",
    description: "上传历史项目成本、赢单/失单报价、工艺路径假设及已批准的供应商价格卡。Synpath 映射的是您团队真实的定价方式，而不是通用模板。"
  }, {
    step: 2,
    title: "30 天模型构建与集成",
    description: "连接邮件、图纸、STEP 文件和您的 ERP 成本字段。估算引擎会学习您的利润规则、间接费用结构和车间费率逻辑。"
  }, {
    step: 3,
    title: "30 天 Beta 测试",
    description: "让草稿估算与您的估算团队在真实 RFQ 上并行运行。我们会持续优化特征识别、供应商 RFQ 触发以及利润率检查，直到输出稳定可用。"
  }, {
    step: 4,
    title: "30 天上线推广与估算团队培训",
    description: "将系统部署到您的报价流程并设置清晰审核步骤。您的团队将获得供应商报价审批、成本行编辑和对客估算发布的操作手册。"
  }, {
    step: 5,
    title: "从启动到生产估算仅需 90 天",
    description: "从数据导入到日常使用，三个月即可完成，无需漫长 IT 项目，也无需替换现有系统。"
  }],
  whySectionLabel: "为什么选择 Synpath 估算",
  whyTitle: "从 RFQ 到有供应商支撑的报价草稿，仅需几分钟。",
  benefits: ["从您的历史项目、供应商报价和成本规则中学习", "从图纸、STEP 文件和规格中识别成本驱动因素", "标记需要外部供应商定价的环节", "提交报价前检查目标利润率", "仅在准确率验证通过后才正式上线"],
  faqs: [{
    question: "Synpath 估算具体做什么？",
    answer: "Synpath 读取收到的 RFQ，从图纸和规格中提取需求，构建结构化成本拆分，并在需要时纳入内部工序与外部供应商报价生成估算草稿。发送给客户前由您的团队审核、调整并批准。"
  }, {
    question: "实施需要多久？",
    answer: "多数团队可在 90 天内上线：数据导入、30 天模型构建、30 天与估算人员并行 Beta 测试，随后上线与培训。Synpath 不取代您的签核流程，而是加快形成可辩护草稿报价的速度。"
  }, {
    question: "能兼容我们的 ERP 和邮箱工具吗？",
    answer: "可以。Synpath 可叠加在您当前系统之上，包括 ERP 成本核算、收件箱 RFQ、电子表格和供应商报价线程。我们可对接常见制造系统，并按估算团队当前工作方式定制字段映射。"
  }, {
    question: "什么时候估算可以发送？",
    answer: "Synpath 生成包含成本行、供应商状态与利润率检查的草稿。仅在 Beta 测试显示估算结果与您的历史结果及审批阈值一致后才进入生产使用。最终报价发布始终由您的团队把控。"
  }]
};
const F1 = {
  quoting: G1,
  estimating: K1,
  "production-planning": {
    title: "生产计划",
    description: "通过智能规划简化排程并优化资源分配。",
    heroTitle: "智能生产计划",
    heroSubtitle: "综合设备可用性、班次和依赖关系，自动优化车间排程。告别过时的电子表格。",
    features: [{
      title: "动态排程",
      description: "基于实时车间数据自动调整生产计划。"
    }, {
      title: "资源优化",
      description: "高效分配设备与操作人员，最大限度减少停机。"
    }, {
      title: "约束管理",
      description: "同时考虑工装、物料和人力约束。"
    }],
    howItWorks: {
      title: "工作原理",
      subtitle: "将销售订单转化为可立即下发的工单。",
      steps: [{
        label: "一键排产"
      }, {
        label: "WO 树"
      }, {
        label: "WO 即时下发"
      }],
      demoType: "video"
    },
    setupHeadline: "90 天上线。",
    setupSteps: [{
      step: 1,
      title: "导入排程、工艺路线与约束数据",
      description: "从 ERP 导入设备、班次、工艺路线、未结工单和物料关联。Synpath 复刻的是您计划员真实构建车间排程的方式。"
    }, {
      step: 2,
      title: "30 天规划引擎配置",
      description: "连接 ERP 工单、产能日历和依赖规则。引擎会学习您的排序逻辑、换型时间和资源约束。"
    }, {
      step: 3,
      title: "30 天 Beta 测试",
      description: "让 Synpath 计划与计划员在真实需求下并行运行。我们会持续优化负载均衡、WO 排序和下发时机，直到输出贴合车间实际。"
    }, {
      step: 4,
      title: "30 天上线推广与计划员培训",
      description: "将一键排产部署到日常运营。您的团队将获得异常处理、手动覆盖和即时下发工单的操作手册。"
    }, {
      step: 5,
      title: "从启动到自主排产仅需 90 天",
      description: "从数据导入到实现可随需求变化的排产流程，仅需三个月，且无需替换 ERP。"
    }],
    whySectionLabel: "为什么选择 Synpath 生产计划",
    whyTitle: "从积压混乱到可下发计划，一键完成。",
    benefits: ["基于 ERP 实时需求与产能构建可执行计划", "在发布前可视化工单依赖关系", "自动在设备与班次间进行负载均衡", "一次确认即可下发工单", "仅在计划员于 Beta 阶段验证计划质量后才正式上线"],
    faqs: [{
      question: "Synpath 生产计划自动化了哪些环节？",
      answer: "Synpath 读取未结需求，应用您的工艺路线与产能规则，生成排程序列，展示工单树，并让计划员一步发布可下发工单。"
    }, {
      question: "实施需要多久？",
      answer: "大多数工厂可在 90 天内上线：ERP 数据导入、30 天引擎配置、30 天与计划员并行 Beta 测试，然后上线。最终发布仍由计划员掌控。"
    }, {
      question: "它会替代我们的 ERP 排程器吗？",
      answer: "不会。Synpath 叠加在您的 ERP 之上，利用其工单、工艺路线和库存数据生成更智能的车间计划，然后将经团队批准的下发动作回写。"
    }, {
      question: "如果周中需求变化会怎样？",
      answer: "重新执行一键排产，即可基于当前积压、产能和物料可用性刷新排程。Synpath 专为真实制造环境中的持续变化而构建。"
    }]
  },
  "urgent-order": {
    title: "紧急订单",
    description: "无缝处理加急请求，不打乱您现有承诺。",
    heroTitle: "从容应对加急单",
    heroSubtitle: "即时评估突发“急单”对产能的影响。Synpath 告诉您是否能在不延误其他交期的前提下安全接单。",
    features: [{
      title: "影响分析",
      description: "准确查看插入加急单后哪些订单会延期。"
    }, {
      title: "情景规划",
      description: "在承诺交期前测试不同工艺路径和班次方案。"
    }, {
      title: "即时重排",
      description: "自动重排现有队列优先级，以满足关键路径。"
    }],
    howItWorks: {
      title: "工作原理",
      subtitle: "从急单到确认的生产计划。",
      steps: [{
        label: "AI 仿真"
      }, {
        label: "一键重排"
      }, {
        label: "WO 即时下发"
      }],
      demoType: "video"
    },
    setupHeadline: "90 天上线。",
    setupSteps: [{
      step: 1,
      title: "导入产能模型与加急规则",
      description: "导入当前排程、设备负载、客户优先级和加班策略。Synpath 学习在您的运营中“能接”和“不能接”的判定标准。"
    }, {
      step: 2,
      title: "30 天仿真与重排配置",
      description: "连接订单接收渠道和 ERP 排程。智能体会学习在承诺前建模延期风险、替代工艺路径和客户影响。"
    }, {
      step: 3,
      title: "30 天 Beta 测试",
      description: "让加急仿真与计划员在真实急单场景下并行运行。我们会持续优化影响可视化、重排质量和下发时机，直到决策值得信赖。"
    }, {
      step: 4,
      title: "30 天上线推广与运营培训",
      description: "将加急处理部署到日常销售和计划流程。您的团队将获得接受、延期或重新协商紧急订单的清晰步骤。"
    }, {
      step: 5,
      title: "从启动到自信响应加急仅需 90 天",
      description: "用三个月时间，把“我们能插单吗？”从数小时的混乱协商变成有数据支撑的答案。"
    }],
    whySectionLabel: "为什么选择 Synpath 紧急订单",
    whyTitle: "在承诺交期前，先看清答应的代价。",
    benefits: ["在接受加急前先仿真产能影响", "显示插入急单后哪些订单会延期", "一次确认即可重排车间计划", "无需手工返工即可发布更新工单", "仅在计划员信任仿真结果后才正式上线"],
    faqs: [{
      question: "Synpath 如何评估紧急订单？",
      answer: "Synpath 基于实时排程对加急单进行建模，展示下游延期与资源冲突，给出重排方案，并在您接受权衡后允许团队下发更新工单。"
    }, {
      question: "销售能不等待计划部门就使用吗？",
      answer: "Synpath 为销售提供快速、数据支撑的可行性与交付风险视图。最终承诺仍遵循您的审批流程，但分析可在几分钟内完成，而不是几天。"
    }, {
      question: "运行仿真需要哪些数据？",
      answer: "需要来自 ERP 的未结工单、工艺路线、设备日历和当前客户承诺。Synpath 使用的正是您计划员已经依赖的数据。"
    }, {
      question: "多久后能在真实加急场景使用？",
      answer: "多数团队在完成导入、配置、基于真实急单的 Beta 测试以及销售与计划联合上线培训后，可在 90 天内上线。"
    }]
  },
  "machine-breakdown": {
    title: "设备故障",
    description: "自动化应急预案，最大限度降低设备故障影响。",
    heroTitle: "韧性停机管理",
    heroSubtitle: "当 CNC 停机时，立即了解影响范围。自动识别受影响订单和替代工艺路径。",
    features: [{
      title: "影响范围可视化",
      description: "即时查看受停机影响的每一项客户承诺。"
    }, {
      title: "替代资源",
      description: "识别可承接负载的备用设备或外部供应商。"
    }, {
      title: "主动沟通",
      description: "在相关方询问前自动起草状态更新。"
    }],
    howItWorks: {
      title: "工作原理",
      subtitle: "从设备警告到恢复计划。",
      steps: [{
        label: "检测设备警告"
      }, {
        label: "AI 仿真"
      }, {
        label: "一键重排"
      }],
      demoType: "video"
    },
    setupHeadline: "90 天上线。",
    setupSteps: [{
      step: 1,
      title: "导入设备、工艺路线与警告源",
      description: "连接车间警告、设备主数据、替代工艺路线和客户交期。Synpath 会映射当资产停机时哪些订单真正有风险。"
    }, {
      step: 2,
      title: "30 天停机响应配置",
      description: "将警告触发连接到仿真与重排逻辑。系统会学习您工厂的备用设备、外协选项和恢复排序方式。"
    }, {
      step: 3,
      title: "30 天 Beta 测试",
      description: "针对历史与实时停机场景运行故障演练。我们会持续优化影响范围可视化、替代工艺质量和重排速度，直到响应可执行。"
    }, {
      step: 4,
      title: "30 天上线推广与主管培训",
      description: "将停机应对手册部署给计划员和主管。您的团队将获得仿真审核、重排审批和相关方更新的清晰步骤。"
    }, {
      step: 5,
      title: "从启动到自主停机响应仅需 90 天",
      description: "三个月即可把电子表格式救火，升级为设备停机时可重复执行的恢复流程。"
    }],
    whySectionLabel: "为什么选择 Synpath 设备故障",
    whyTitle: "几分钟内看清影响范围与恢复路径。",
    benefits: ["从车间和监控系统检测设备警告", "显示受停机影响的全部订单", "仿真替代设备与工艺路径选项", "一次确认即可发布恢复计划", "仅在停机场景通过 Beta 评审后才正式上线"],
    faqs: [{
      question: "设备故障时会发生什么？",
      answer: "Synpath 捕获警告，计算受影响工单与客户承诺，仿真恢复选项，并生成可由团队立即审批和下发的重排方案。"
    }, {
      question: "它能自动把任务路由到备用设备吗？",
      answer: "Synpath 会基于可用设备能力与当前负载提出替代工艺路径。工单更新前，仍由计划员审核并批准恢复方案。"
    }, {
      question: "它如何连接到我们的车间？",
      answer: "警告可来自 ERP 停机记录、设备监控或主管手动输入。Synpath 会标准化信号并每次触发同一套仿真流程。"
    }, {
      question: "部署需要多久？",
      answer: "多数工厂可在 90 天内上线：工艺路线和警告导入、30 天配置、30 天基于真实或历史停机的 Beta 测试，然后上线。"
    }]
  },
  "material-delay": {
    title: "物料延迟",
    description: "主动管理供应链中断并协调排程调整。",
    heroTitle: "供应链韧性",
    heroSubtitle: "供应商延期？Synpath 会重算所有下游依赖，并标记需要替代采购的订单。",
    features: [{
      title: "依赖追踪",
      description: "将原材料精确映射到中间件与成品。"
    }, {
      title: "下游调整",
      description: "自动推迟因物料延迟而受阻订单的开工日期。"
    }, {
      title: "供应商协同",
      description: "跟踪延期 PO，并自动催办未按承诺交付的供应商。"
    }],
    howItWorks: {
      title: "工作原理",
      subtitle: "从供应商延迟到调整后的生产计划。",
      steps: [{
        label: "检测延迟"
      }, {
        label: "影响仿真"
      }, {
        label: "一键重排"
      }],
      demoType: "video"
    },
    setupHeadline: "90 天上线。",
    setupSteps: [{
      step: 1,
      title: "导入供应商、PO 与关联数据",
      description: "导入采购订单、物料交期、BOM 关联和未结生产订单。Synpath 可追踪某一延迟明细如何在您的生产计划中逐层传导。"
    }, {
      step: 2,
      title: "30 天延迟检测与仿真配置",
      description: "连接供应商更新、ERP 收货和计划数据。系统会学习哪些任务被阻塞、哪些可继续执行，以及可用的替代供应方案。"
    }, {
      step: 3,
      title: "30 天 Beta 测试",
      description: "在真实供应中断场景下运行物料延迟演练。我们会持续优化检测速度、下游影响准确率和重排质量，直到计划员信任输出。"
    }, {
      step: 4,
      title: "30 天上线推广与采购/计划培训",
      description: "将延迟响应部署到采购与计划流程。您的团队将获得供应商跟进、排程调整和客户沟通的操作手册。"
    }, {
      step: 5,
      title: "从启动到主动供应响应仅需 90 天",
      description: "三个月即可从被动救火转变为自主流程：一旦供给延迟，计划立即自动调整。"
    }],
    whySectionLabel: "为什么选择 Synpath 物料延迟",
    whyTitle: "在错过发货日期前，先发现物料延迟。",
    benefits: ["从 PO 状态和到货更新中检测供应商延迟", "映射因缺料而受阻的下游订单", "在订单延期前仿真排程影响", "一次确认即可重排生产计划", "仅在延迟场景通过 Beta 评审后才正式上线"],
    faqs: [{
      question: "Synpath 如何检测物料延迟？",
      answer: "Synpath 监控采购订单日期、供应商确认和收货活动。当某一明细延期时，会立即标记受影响生产订单并仿真排程影响。"
    }, {
      question: "它能建议替代采购吗？",
      answer: "Synpath 会标记高风险任务，并提供符合您规则的重排选项，包括可行的替代供应商或在部分物料可用时先行生产。"
    }, {
      question: "它会替代我们的采购人员吗？",
      answer: "不会。采购关系仍由采购团队负责。Synpath 自动化的是检测、影响分析和排程调整，让计划部门在采购追料的同时快速响应。"
    }, {
      question: "多久后能在真实 PO 延迟上运行？",
      answer: "大多数团队在完成关联数据导入、30 天配置、30 天真实延迟 Beta 测试以及采购与计划联合上线后，可在 90 天内上线。"
    }]
  }
};
const Y1 = {
  en: B1,
  fr: P1,
  de: Q1,
  zh: F1
};
const u0 = T.createContext(null);
function W1() {
  if (typeof window === "undefined") {
    return vg;
  }
  const n = localStorage.getItem(o0);
  if (n === "en" || n === "fr" || n === "de" || n === "zh") {
    return n;
  } else {
    return vg;
  }
}
function bg(n, a) {
  const l = Y1[a][n.id];
  if (!l) {
    return n;
  }
  const r = l.howItWorks && n.howItWorks ? {
    ...n.howItWorks,
    ...l.howItWorks,
    demoType: n.howItWorks.demoType
  } : l.howItWorks ?? n.howItWorks;
  return {
    ...n,
    ...l,
    id: n.id,
    category: n.category,
    workflow: n.workflow,
    workflowVideos: n.workflowVideos,
    heroTitle: l.heroTitle ?? l.title ?? n.heroTitle,
    heroSubtitle: l.heroSubtitle ?? l.description ?? n.heroSubtitle,
    howItWorks: r
  };
}
function LanguageProvider({
  children: n
}) {
  const [a, l] = T.useState(W1);
  const r = T.useCallback(d => {
    l(d);
    localStorage.setItem(o0, d);
  }, []);
  T.useEffect(() => {
    document.documentElement.lang = a === "zh" ? "zh-CN" : a;
  }, [a]);
  const u = T.useMemo(() => {
    const d = q1[a];
    const f = N1[a];
    const m = gg.map(p => bg(p, a));
    return {
      locale: a,
      setLocale: r,
      t: d,
      demo: f,
      localizedSolutions: m,
      getLocalizedSolution: p => {
        const y = gg.find(v => v.id === p);
        if (y) {
          return bg(y, a);
        } else {
          return undefined;
        }
      }
    };
  }, [a, r]);
  return <u0.Provider value={u}>{n}</u0.Provider>;
}
function useLanguage() {
  const n = T.useContext(u0);
  if (!n) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return n;
}
const Td = T.createContext({});
function Ed(n) {
  const a = T.useRef(null);
  if (a.current === null) {
    a.current = n();
  }
  return a.current;
}
const Z1 = typeof window !== "undefined";
const c0 = Z1 ? T.useLayoutEffect : T.useEffect;
const Hr = T.createContext(null);
function Rd(n, a) {
  if (n.indexOf(a) === -1) {
    n.push(a);
  }
}
function Nr(n, a) {
  const l = n.indexOf(a);
  if (l > -1) {
    n.splice(l, 1);
  }
}
const un = (n, a, l) => l > a ? a : l < n ? n : l;
let Ad = () => {};
const ii = {};
const d0 = n => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
const f0 = n => typeof n == "object" && n !== null;
const h0 = n => /^0[^.\s]+$/u.test(n);
function m0(n) {
  let a;
  return () => {
    if (a === undefined) {
      a = n();
    }
    return a;
  };
}
const Gt = n => n;
const Us = (...n) => n.reduce((a, l) => r => l(a(r)));
const Ls = (n, a, l) => {
  const r = a - n;
  if (r) {
    return (l - n) / r;
  } else {
    return 1;
  }
};
class jd {
  constructor() {
    this.subscriptions = [];
  }
  add(a) {
    Rd(this.subscriptions, a);
    return () => Nr(this.subscriptions, a);
  }
  notify(a, l, r) {
    const u = this.subscriptions.length;
    if (u) {
      if (u === 1) {
        this.subscriptions[0](a, l, r);
      } else {
        for (let d = 0; d < u; d++) {
          const f = this.subscriptions[d];
          if (f) {
            f(a, l, r);
          }
        }
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Mt = n => n * 1000;
const Qt = n => n / 1000;
const p0 = (n, a) => a ? n * (1000 / a) : 0;
const g0 = (n, a, l) => (((1 - l * 3 + a * 3) * n + (l * 3 - a * 6)) * n + a * 3) * n;
const I1 = 1e-7;
const $1 = 12;
function J1(n, a, l, r, u) {
  let d;
  let f;
  let m = 0;
  do {
    f = a + (l - a) / 2;
    d = g0(f, r, u) - n;
    if (d > 0) {
      l = f;
    } else {
      a = f;
    }
  } while (Math.abs(d) > I1 && ++m < $1);
  return f;
}
function Hs(n, a, l, r) {
  if (n === a && l === r) {
    return Gt;
  }
  const u = d => J1(d, 0, 1, n, l);
  return d => d === 0 || d === 1 ? d : g0(u(d), a, r);
}
const y0 = n => a => a <= 0.5 ? n(a * 2) / 2 : (2 - n((1 - a) * 2)) / 2;
const v0 = n => a => 1 - n(1 - a);
const b0 = Hs(0.33, 1.53, 0.69, 0.99);
const Cd = v0(b0);
const x0 = y0(Cd);
const S0 = n => n >= 1 ? 1 : (n *= 2) < 1 ? Cd(n) * 0.5 : (2 - Math.pow(2, (n - 1) * -10)) * 0.5;
const Nd = n => 1 - Math.sin(Math.acos(n));
const w0 = v0(Nd);
const T0 = y0(Nd);
const eT = Hs(0.42, 0, 1, 1);
const tT = Hs(0, 0, 0.58, 1);
const E0 = Hs(0.42, 0, 0.58, 1);
const nT = n => Array.isArray(n) && typeof n[0] != "number";
const R0 = n => Array.isArray(n) && typeof n[0] == "number";
const iT = {
  linear: Gt,
  easeIn: eT,
  easeInOut: E0,
  easeOut: tT,
  circIn: Nd,
  circInOut: T0,
  circOut: w0,
  backIn: Cd,
  backInOut: x0,
  backOut: b0,
  anticipate: S0
};
const aT = n => typeof n == "string";
const xg = n => {
  if (R0(n)) {
    Ad(n.length === 4);
    const [a, l, r, u] = n;
    return Hs(a, l, r, u);
  } else if (aT(n)) {
    return iT[n];
  }
  return n;
};
const cr = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function sT(n, a) {
  let l = new Set();
  let r = new Set();
  let u = false;
  let d = false;
  const f = new WeakSet();
  let m = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  function p(v) {
    if (f.has(v)) {
      y.schedule(v);
      n();
    }
    v(m);
  }
  const y = {
    schedule: (v, b = false, S = false) => {
      const j = S && u ? l : r;
      if (b) {
        f.add(v);
      }
      j.add(v);
      return v;
    },
    cancel: v => {
      r.delete(v);
      f.delete(v);
    },
    process: v => {
      m = v;
      if (u) {
        d = true;
        return;
      }
      u = true;
      const b = l;
      l = r;
      r = b;
      l.forEach(p);
      l.clear();
      u = false;
      if (d) {
        d = false;
        y.process(v);
      }
    }
  };
  return y;
}
const lT = 40;
function A0(n, a) {
  let l = false;
  let r = true;
  const u = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  const d = () => l = true;
  const f = cr.reduce((L, U) => {
    L[U] = sT(d);
    return L;
  }, {});
  const {
    setup: m,
    read: p,
    resolveKeyframes: y,
    preUpdate: v,
    update: b,
    preRender: S,
    render: E,
    postRender: j
  } = f;
  const M = () => {
    const L = ii.useManualTiming;
    const U = L ? u.timestamp : performance.now();
    l = false;
    if (!L) {
      u.delta = r ? 1000 / 60 : Math.max(Math.min(U - u.timestamp, lT), 1);
    }
    u.timestamp = U;
    u.isProcessing = true;
    m.process(u);
    p.process(u);
    y.process(u);
    v.process(u);
    b.process(u);
    S.process(u);
    E.process(u);
    j.process(u);
    u.isProcessing = false;
    if (l && a) {
      r = false;
      n(M);
    }
  };
  const k = () => {
    l = true;
    r = true;
    if (!u.isProcessing) {
      n(M);
    }
  };
  return {
    schedule: cr.reduce((L, U) => {
      const K = f[U];
      L[U] = (te, G = false, F = false) => {
        if (!l) {
          k();
        }
        return K.schedule(te, G, F);
      };
      return L;
    }, {}),
    cancel: L => {
      for (let U = 0; U < cr.length; U++) {
        f[cr[U]].cancel(L);
      }
    },
    state: u,
    steps: f
  };
}
const {
  schedule: Me,
  cancel: ai,
  state: lt,
  steps: Tc
} = A0(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : Gt, true);
let yr;
function rT() {
  yr = undefined;
}
const ft = {
  now: () => {
    if (yr === undefined) {
      ft.set(lt.isProcessing || ii.useManualTiming ? lt.timestamp : performance.now());
    }
    return yr;
  },
  set: n => {
    yr = n;
    queueMicrotask(rT);
  }
};
const j0 = n => a => typeof a == "string" && a.startsWith(n);
const C0 = j0("--");
const oT = j0("var(--");
const kd = n => oT(n) ? uT.test(n.split("/*")[0].trim()) : false;
const uT = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Sg(n) {
  if (typeof n != "string") {
    return false;
  } else {
    return n.split("/*")[0].includes("var(--");
  }
}
const Na = {
  test: n => typeof n == "number",
  parse: parseFloat,
  transform: n => n
};
const Os = {
  ...Na,
  transform: n => un(0, 1, n)
};
const dr = {
  ...Na,
  default: 1
};
const ks = n => Math.round(n * 100000) / 100000;
const Md = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function cT(n) {
  return n == null;
}
const dT = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
const zd = (n, a) => l => typeof l == "string" && !!dT.test(l) && !!l.startsWith(n) || !!a && !cT(l) && !!Object.prototype.hasOwnProperty.call(l, a);
const N0 = (n, a, l) => r => {
  if (typeof r != "string") {
    return r;
  }
  const [u, d, f, m] = r.match(Md);
  return {
    [n]: parseFloat(u),
    [a]: parseFloat(d),
    [l]: parseFloat(f),
    alpha: m !== undefined ? parseFloat(m) : 1
  };
};
const fT = n => un(0, 255, n);
const Ec = {
  ...Na,
  transform: n => Math.round(fT(n))
};
const Ci = {
  test: zd("rgb", "red"),
  parse: N0("red", "green", "blue"),
  transform: ({
    red: n,
    green: a,
    blue: l,
    alpha: r = 1
  }) => "rgba(" + Ec.transform(n) + ", " + Ec.transform(a) + ", " + Ec.transform(l) + ", " + ks(Os.transform(r)) + ")"
};
function hT(n) {
  let a = "";
  let l = "";
  let r = "";
  let u = "";
  if (n.length > 5) {
    a = n.substring(1, 3);
    l = n.substring(3, 5);
    r = n.substring(5, 7);
    u = n.substring(7, 9);
  } else {
    a = n.substring(1, 2);
    l = n.substring(2, 3);
    r = n.substring(3, 4);
    u = n.substring(4, 5);
    a += a;
    l += l;
    r += r;
    u += u;
  }
  return {
    red: parseInt(a, 16),
    green: parseInt(l, 16),
    blue: parseInt(r, 16),
    alpha: u ? parseInt(u, 16) / 255 : 1
  };
}
const Qc = {
  test: zd("#"),
  parse: hT,
  transform: Ci.transform
};
const Qs = n => ({
  test: a => typeof a == "string" && a.endsWith(n) && a.split(" ").length === 1,
  parse: parseFloat,
  transform: a => `${a}${n}`
});
const Cn = Qs("deg");
const on = Qs("%");
const I = Qs("px");
const mT = Qs("vh");
const pT = Qs("vw");
const wg = {
  ...on,
  parse: n => on.parse(n) / 100,
  transform: n => on.transform(n * 100)
};
const ba = {
  test: zd("hsl", "hue"),
  parse: N0("hue", "saturation", "lightness"),
  transform: ({
    hue: n,
    saturation: a,
    lightness: l,
    alpha: r = 1
  }) => "hsla(" + Math.round(n) + ", " + on.transform(ks(a)) + ", " + on.transform(ks(l)) + ", " + ks(Os.transform(r)) + ")"
};
const Xe = {
  test: n => Ci.test(n) || Qc.test(n) || ba.test(n),
  parse: n => Ci.test(n) ? Ci.parse(n) : ba.test(n) ? ba.parse(n) : Qc.parse(n),
  transform: n => typeof n == "string" ? n : n.hasOwnProperty("red") ? Ci.transform(n) : ba.transform(n),
  getAnimatableNone: n => {
    const a = Xe.parse(n);
    a.alpha = 0;
    return Xe.transform(a);
  }
};
const gT = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function yT(n) {
  var a;
  var l;
  return isNaN(n) && typeof n == "string" && (((a = n.match(Md)) == null ? undefined : a.length) || 0) + (((l = n.match(gT)) == null ? undefined : l.length) || 0) > 0;
}
const k0 = "number";
const M0 = "color";
const vT = "var";
const bT = "var(";
const Tg = "${}";
const xT = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ea(n) {
  const a = n.toString();
  const l = [];
  const r = {
    color: [],
    number: [],
    var: []
  };
  const u = [];
  let d = 0;
  const m = a.replace(xT, p => {
    if (Xe.test(p)) {
      r.color.push(d);
      u.push(M0);
      l.push(Xe.parse(p));
    } else if (p.startsWith(bT)) {
      r.var.push(d);
      u.push(vT);
      l.push(p);
    } else {
      r.number.push(d);
      u.push(k0);
      l.push(parseFloat(p));
    }
    ++d;
    return Tg;
  }).split(Tg);
  return {
    values: l,
    split: m,
    indexes: r,
    types: u
  };
}
function ST(n) {
  return Ea(n).values;
}
function z0({
  split: n,
  types: a
}) {
  const l = n.length;
  return r => {
    let u = "";
    for (let d = 0; d < l; d++) {
      u += n[d];
      if (r[d] !== undefined) {
        const f = a[d];
        if (f === k0) {
          u += ks(r[d]);
        } else if (f === M0) {
          u += Xe.transform(r[d]);
        } else {
          u += r[d];
        }
      }
    }
    return u;
  };
}
function wT(n) {
  return z0(Ea(n));
}
const TT = n => typeof n == "number" ? 0 : Xe.test(n) ? Xe.getAnimatableNone(n) : n;
const ET = (n, a) => typeof n == "number" ? a != null && a.trim().endsWith("/") ? n : 0 : TT(n);
function RT(n) {
  const a = Ea(n);
  return z0(a)(a.values.map((r, u) => ET(r, a.split[u])));
}
const $t = {
  test: yT,
  parse: ST,
  createTransformer: wT,
  getAnimatableNone: RT
};
function Rc(n, a, l) {
  if (l < 0) {
    l += 1;
  }
  if (l > 1) {
    l -= 1;
  }
  if (l < 1 / 6) {
    return n + (a - n) * 6 * l;
  } else if (l < 1 / 2) {
    return a;
  } else if (l < 2 / 3) {
    return n + (a - n) * (2 / 3 - l) * 6;
  } else {
    return n;
  }
}
function AT({
  hue: n,
  saturation: a,
  lightness: l,
  alpha: r
}) {
  n /= 360;
  a /= 100;
  l /= 100;
  let u = 0;
  let d = 0;
  let f = 0;
  if (!a) {
    u = d = f = l;
  } else {
    const m = l < 0.5 ? l * (1 + a) : l + a - l * a;
    const p = l * 2 - m;
    u = Rc(p, m, n + 1 / 3);
    d = Rc(p, m, n);
    f = Rc(p, m, n - 1 / 3);
  }
  return {
    red: Math.round(u * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: r
  };
}
function kr(n, a) {
  return l => l > 0 ? a : n;
}
const ke = (n, a, l) => n + (a - n) * l;
const Ac = (n, a, l) => {
  const r = n * n;
  const u = l * (a * a - r) + r;
  if (u < 0) {
    return 0;
  } else {
    return Math.sqrt(u);
  }
};
const jT = [Qc, Ci, ba];
const CT = n => jT.find(a => a.test(n));
function Eg(n) {
  const a = CT(n);
  if (!a) {
    return false;
  }
  let l = a.parse(n);
  if (a === ba) {
    l = AT(l);
  }
  return l;
}
const Rg = (n, a) => {
  const l = Eg(n);
  const r = Eg(a);
  if (!l || !r) {
    return kr(n, a);
  }
  const u = {
    ...l
  };
  return d => {
    u.red = Ac(l.red, r.red, d);
    u.green = Ac(l.green, r.green, d);
    u.blue = Ac(l.blue, r.blue, d);
    u.alpha = ke(l.alpha, r.alpha, d);
    return Ci.transform(u);
  };
};
const Gc = new Set(["none", "hidden"]);
function NT(n, a) {
  if (Gc.has(n)) {
    return l => l <= 0 ? n : a;
  } else {
    return l => l >= 1 ? a : n;
  }
}
function kT(n, a) {
  return l => ke(n, a, l);
}
function Dd(n) {
  if (typeof n == "number") {
    return kT;
  } else if (typeof n == "string") {
    if (kd(n)) {
      return kr;
    } else if (Xe.test(n)) {
      return Rg;
    } else {
      return DT;
    }
  } else if (Array.isArray(n)) {
    return D0;
  } else if (typeof n == "object") {
    if (Xe.test(n)) {
      return Rg;
    } else {
      return MT;
    }
  } else {
    return kr;
  }
}
function D0(n, a) {
  const l = [...n];
  const r = l.length;
  const u = n.map((d, f) => Dd(d)(d, a[f]));
  return d => {
    for (let f = 0; f < r; f++) {
      l[f] = u[f](d);
    }
    return l;
  };
}
function MT(n, a) {
  const l = {
    ...n,
    ...a
  };
  const r = {};
  for (const u in l) {
    if (n[u] !== undefined && a[u] !== undefined) {
      r[u] = Dd(n[u])(n[u], a[u]);
    }
  }
  return u => {
    for (const d in r) {
      l[d] = r[d](u);
    }
    return l;
  };
}
function zT(n, a) {
  const l = [];
  const r = {
    color: 0,
    var: 0,
    number: 0
  };
  for (let u = 0; u < a.values.length; u++) {
    const d = a.types[u];
    const f = n.indexes[d][r[d]];
    const m = n.values[f] ?? 0;
    l[u] = m;
    r[d]++;
  }
  return l;
}
const DT = (n, a) => {
  const l = $t.createTransformer(a);
  const r = Ea(n);
  const u = Ea(a);
  if (r.indexes.var.length === u.indexes.var.length && r.indexes.color.length === u.indexes.color.length && r.indexes.number.length >= u.indexes.number.length) {
    if (Gc.has(n) && !u.values.length || Gc.has(a) && !r.values.length) {
      return NT(n, a);
    } else {
      return Us(D0(zT(r, u), u.values), l);
    }
  } else {
    return kr(n, a);
  }
};
function q0(n, a, l) {
  if (typeof n == "number" && typeof a == "number" && typeof l == "number") {
    return ke(n, a, l);
  } else {
    return Dd(n)(n, a);
  }
}
const qT = n => {
  const a = ({
    timestamp: l
  }) => n(l);
  return {
    start: (l = true) => Me.update(a, l),
    stop: () => ai(a),
    now: () => lt.isProcessing ? lt.timestamp : ft.now()
  };
};
const L0 = (n, a, l = 10) => {
  let r = "";
  const u = Math.max(Math.round(a / l), 2);
  for (let d = 0; d < u; d++) {
    r += Math.round(n(d / (u - 1)) * 10000) / 10000 + ", ";
  }
  return `linear(${r.substring(0, r.length - 2)})`;
};
const Mr = 20000;
function qd(n) {
  let a = 0;
  const l = 50;
  let r = n.next(a);
  while (!r.done && a < Mr) {
    a += l;
    r = n.next(a);
  }
  if (a >= Mr) {
    return Infinity;
  } else {
    return a;
  }
}
function LT(n, a = 100, l) {
  const r = l({
    ...n,
    keyframes: [0, a]
  });
  const u = Math.min(qd(r), Mr);
  return {
    type: "keyframes",
    ease: d => r.next(u * d).value / a,
    duration: Qt(u)
  };
}
const _e = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 0.005,
    default: 0.5
  },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1
};
function Kc(n, a) {
  return n * Math.sqrt(1 - a * a);
}
const OT = 12;
function BT(n, a, l) {
  let r = l;
  for (let u = 1; u < OT; u++) {
    r = r - n(r) / a(r);
  }
  return r;
}
const jc = 0.001;
function VT({
  duration: n = _e.duration,
  bounce: a = _e.bounce,
  velocity: l = _e.velocity,
  mass: r = _e.mass
}) {
  let u;
  let d;
  let f = 1 - a;
  f = un(_e.minDamping, _e.maxDamping, f);
  n = un(_e.minDuration, _e.maxDuration, Qt(n));
  if (f < 1) {
    u = y => {
      const v = y * f;
      const b = v * n;
      const S = v - l;
      const E = Kc(y, f);
      const j = Math.exp(-b);
      return jc - S / E * j;
    };
    d = y => {
      const b = y * f * n;
      const S = b * l + l;
      const E = Math.pow(f, 2) * Math.pow(y, 2) * n;
      const j = Math.exp(-b);
      const M = Kc(Math.pow(y, 2), f);
      return (-u(y) + jc > 0 ? -1 : 1) * ((S - E) * j) / M;
    };
  } else {
    u = y => {
      const v = Math.exp(-y * n);
      const b = (y - l) * n + 1;
      return -jc + v * b;
    };
    d = y => {
      const v = Math.exp(-y * n);
      const b = (l - y) * (n * n);
      return v * b;
    };
  }
  const m = 5 / n;
  const p = BT(u, d, m);
  n = Mt(n);
  if (isNaN(p)) {
    return {
      stiffness: _e.stiffness,
      damping: _e.damping,
      duration: n
    };
  }
  {
    const y = Math.pow(p, 2) * r;
    return {
      stiffness: y,
      damping: f * 2 * Math.sqrt(r * y),
      duration: n
    };
  }
}
const _T = ["duration", "bounce"];
const PT = ["stiffness", "damping", "mass"];
function Ag(n, a) {
  return a.some(l => n[l] !== undefined);
}
function UT(n) {
  let a = {
    velocity: _e.velocity,
    stiffness: _e.stiffness,
    damping: _e.damping,
    mass: _e.mass,
    isResolvedFromDuration: false,
    ...n
  };
  if (!Ag(n, PT) && Ag(n, _T)) {
    a.velocity = 0;
    if (n.visualDuration) {
      const l = n.visualDuration;
      const r = Math.PI * 2 / (l * 1.2);
      const u = r * r;
      const d = un(0.05, 1, 1 - (n.bounce || 0)) * 2 * Math.sqrt(u);
      a = {
        ...a,
        mass: _e.mass,
        stiffness: u,
        damping: d
      };
    } else {
      const l = VT({
        ...n,
        velocity: 0
      });
      a = {
        ...a,
        ...l,
        mass: _e.mass
      };
      a.isResolvedFromDuration = true;
    }
  }
  return a;
}
function zr(n = _e.visualDuration, a = _e.bounce) {
  const l = typeof n != "object" ? {
    visualDuration: n,
    keyframes: [0, 1],
    bounce: a
  } : n;
  let {
    restSpeed: r,
    restDelta: u
  } = l;
  const d = l.keyframes[0];
  const f = l.keyframes[l.keyframes.length - 1];
  const m = {
    done: false,
    value: d
  };
  const {
    stiffness: p,
    damping: y,
    mass: v,
    duration: b,
    velocity: S,
    isResolvedFromDuration: E
  } = UT({
    ...l,
    velocity: -Qt(l.velocity || 0)
  });
  const j = S || 0;
  const M = y / (Math.sqrt(p * v) * 2);
  const k = f - d;
  const N = Qt(Math.sqrt(p / v));
  const _ = Math.abs(k) < 5;
  r ||= _ ? _e.restSpeed.granular : _e.restSpeed.default;
  u ||= _ ? _e.restDelta.granular : _e.restDelta.default;
  let L;
  let U;
  let K;
  let te;
  let G;
  let F;
  if (M < 1) {
    K = Kc(N, M);
    te = (j + M * N * k) / K;
    L = J => {
      const ce = Math.exp(-M * N * J);
      return f - ce * (te * Math.sin(K * J) + k * Math.cos(K * J));
    };
    G = M * N * te + k * K;
    F = M * N * k - te * K;
    U = J => Math.exp(-M * N * J) * (G * Math.sin(K * J) + F * Math.cos(K * J));
  } else if (M === 1) {
    L = ce => f - Math.exp(-N * ce) * (k + (j + N * k) * ce);
    const J = j + N * k;
    U = ce => Math.exp(-N * ce) * (N * J * ce - j);
  } else {
    const J = N * Math.sqrt(M * M - 1);
    L = Oe => {
      const we = Math.exp(-M * N * Oe);
      const B = Math.min(J * Oe, 300);
      return f - we * ((j + M * N * k) * Math.sinh(B) + J * k * Math.cosh(B)) / J;
    };
    const ce = (j + M * N * k) / J;
    const ve = M * N * ce - k * J;
    const Ge = M * N * k - ce * J;
    U = Oe => {
      const we = Math.exp(-M * N * Oe);
      const B = Math.min(J * Oe, 300);
      return we * (ve * Math.sinh(B) + Ge * Math.cosh(B));
    };
  }
  const ne = {
    calculatedDuration: E && b || null,
    velocity: J => Mt(U(J)),
    next: J => {
      if (!E && M < 1) {
        const ve = Math.exp(-M * N * J);
        const Ge = Math.sin(K * J);
        const Oe = Math.cos(K * J);
        const we = f - ve * (te * Ge + k * Oe);
        const B = Mt(ve * (G * Ge + F * Oe));
        m.done = Math.abs(B) <= r && Math.abs(f - we) <= u;
        m.value = m.done ? f : we;
        return m;
      }
      const ce = L(J);
      if (E) {
        m.done = J >= b;
      } else {
        const ve = Mt(U(J));
        m.done = Math.abs(ve) <= r && Math.abs(f - ce) <= u;
      }
      m.value = m.done ? f : ce;
      return m;
    },
    toString: () => {
      const J = Math.min(qd(ne), Mr);
      const ce = L0(ve => ne.next(J * ve).value, J, 30);
      return J + "ms " + ce;
    },
    toTransition: () => {}
  };
  return ne;
}
zr.applyToOptions = n => {
  const a = LT(n, 100, zr);
  n.ease = a.ease;
  n.duration = Mt(a.duration);
  n.type = "keyframes";
  return n;
};
const HT = 5;
function O0(n, a, l) {
  const r = Math.max(a - HT, 0);
  return p0(l - n(r), a - r);
}
function Fc({
  keyframes: n,
  velocity: a = 0,
  power: l = 0.8,
  timeConstant: r = 325,
  bounceDamping: u = 10,
  bounceStiffness: d = 500,
  modifyTarget: f,
  min: m,
  max: p,
  restDelta: y = 0.5,
  restSpeed: v
}) {
  const b = n[0];
  const S = {
    done: false,
    value: b
  };
  const E = F => m !== undefined && F < m || p !== undefined && F > p;
  const j = F => m === undefined ? p : p === undefined || Math.abs(m - F) < Math.abs(p - F) ? m : p;
  let M = l * a;
  const k = b + M;
  const N = f === undefined ? k : f(k);
  if (N !== k) {
    M = N - b;
  }
  const _ = F => -M * Math.exp(-F / r);
  const L = F => N + _(F);
  const U = F => {
    const ne = _(F);
    const J = L(F);
    S.done = Math.abs(ne) <= y;
    S.value = S.done ? N : J;
  };
  let K;
  let te;
  const G = F => {
    if (E(S.value)) {
      K = F;
      te = zr({
        keyframes: [S.value, j(S.value)],
        velocity: O0(L, F, S.value),
        damping: u,
        stiffness: d,
        restDelta: y,
        restSpeed: v
      });
    }
  };
  G(0);
  return {
    calculatedDuration: null,
    next: F => {
      let ne = false;
      if (!te && K === undefined) {
        ne = true;
        U(F);
        G(F);
      }
      if (K !== undefined && F >= K) {
        return te.next(F - K);
      } else {
        if (!ne) {
          U(F);
        }
        return S;
      }
    }
  };
}
function QT(n, a, l) {
  const r = [];
  const u = l || ii.mix || q0;
  const d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let m = u(n[f], n[f + 1]);
    if (a) {
      const p = Array.isArray(a) ? a[f] || Gt : a;
      m = Us(p, m);
    }
    r.push(m);
  }
  return r;
}
function GT(n, a, {
  clamp: l = true,
  ease: r,
  mixer: u
} = {}) {
  const d = n.length;
  Ad(d === a.length);
  if (d === 1) {
    return () => a[0];
  }
  if (d === 2 && a[0] === a[1]) {
    return () => a[1];
  }
  const f = n[0] === n[1];
  if (n[0] > n[d - 1]) {
    n = [...n].reverse();
    a = [...a].reverse();
  }
  const m = QT(a, r, u);
  const p = m.length;
  const y = v => {
    if (f && v < n[0]) {
      return a[0];
    }
    let b = 0;
    if (p > 1) {
      for (; b < n.length - 2 && !(v < n[b + 1]); b++);
    }
    const S = Ls(n[b], n[b + 1], v);
    return m[b](S);
  };
  if (l) {
    return v => y(un(n[0], n[d - 1], v));
  } else {
    return y;
  }
}
function KT(n, a) {
  const l = n[n.length - 1];
  for (let r = 1; r <= a; r++) {
    const u = Ls(0, a, r);
    n.push(ke(l, 1, u));
  }
}
function FT(n) {
  const a = [0];
  KT(a, n.length - 1);
  return a;
}
function YT(n, a) {
  return n.map(l => l * a);
}
function WT(n, a) {
  return n.map(() => a || E0).splice(0, n.length - 1);
}
function Ms({
  duration: n = 300,
  keyframes: a,
  times: l,
  ease: r = "easeInOut"
}) {
  const u = nT(r) ? r.map(xg) : xg(r);
  const d = {
    done: false,
    value: a[0]
  };
  const f = YT(l && l.length === a.length ? l : FT(a), n);
  const m = GT(f, a, {
    ease: Array.isArray(u) ? u : WT(a, u)
  });
  return {
    calculatedDuration: n,
    next: p => {
      d.value = m(p);
      d.done = p >= n;
      return d;
    }
  };
}
const XT = n => n !== null;
function Qr(n, {
  repeat: a,
  repeatType: l = "loop"
}, r, u = 1) {
  const d = n.filter(XT);
  const m = u < 0 || a && l !== "loop" && a % 2 === 1 ? 0 : d.length - 1;
  if (!m || r === undefined) {
    return d[m];
  } else {
    return r;
  }
}
const ZT = {
  decay: Fc,
  inertia: Fc,
  tween: Ms,
  keyframes: Ms,
  spring: zr
};
function B0(n) {
  if (typeof n.type == "string") {
    n.type = ZT[n.type];
  }
}
class Ld {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise(a => {
      this.resolve = a;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(a, l) {
    return this.finished.then(a, l);
  }
}
const IT = n => n / 100;
class Dr extends Ld {
  constructor(a) {
    super();
    this.state = "idle";
    this.startTime = null;
    this.isStopped = false;
    this.currentTime = 0;
    this.holdTime = null;
    this.playbackSpeed = 1;
    this.delayState = {
      done: false,
      value: undefined
    };
    this.stop = () => {
      var r;
      var u;
      const {
        motionValue: l
      } = this.options;
      if (l && l.updatedAt !== ft.now()) {
        this.tick(ft.now());
      }
      this.isStopped = true;
      if (this.state !== "idle") {
        this.teardown();
        if ((u = (r = this.options).onStop) != null) {
          u.call(r);
        }
      }
    };
    this.options = a;
    this.initAnimation();
    this.play();
    if (a.autoplay === false) {
      this.pause();
    }
  }
  initAnimation() {
    const {
      options: a
    } = this;
    B0(a);
    const {
      type: l = Ms,
      repeat: r = 0,
      repeatDelay: u = 0,
      repeatType: d,
      velocity: f = 0
    } = a;
    let {
      keyframes: m
    } = a;
    const p = l || Ms;
    if (p !== Ms && typeof m[0] != "number") {
      this.mixKeyframes = Us(IT, q0(m[0], m[1]));
      m = [0, 100];
    }
    const y = p({
      ...a,
      keyframes: m
    });
    if (d === "mirror") {
      this.mirroredGenerator = p({
        ...a,
        keyframes: [...m].reverse(),
        velocity: -f
      });
    }
    if (y.calculatedDuration === null) {
      y.calculatedDuration = qd(y);
    }
    const {
      calculatedDuration: v
    } = y;
    this.calculatedDuration = v;
    this.resolvedDuration = v + u;
    this.totalDuration = this.resolvedDuration * (r + 1) - u;
    this.generator = y;
  }
  updateTime(a) {
    const l = Math.round(a - this.startTime) * this.playbackSpeed;
    if (this.holdTime !== null) {
      this.currentTime = this.holdTime;
    } else {
      this.currentTime = l;
    }
  }
  tick(a, l = false) {
    const {
      generator: r,
      totalDuration: u,
      mixKeyframes: d,
      mirroredGenerator: f,
      resolvedDuration: m,
      calculatedDuration: p
    } = this;
    if (this.startTime === null) {
      return r.next(0);
    }
    const {
      delay: y = 0,
      keyframes: v,
      repeat: b,
      repeatType: S,
      repeatDelay: E,
      type: j,
      onUpdate: M,
      finalKeyframe: k
    } = this.options;
    if (this.speed > 0) {
      this.startTime = Math.min(this.startTime, a);
    } else if (this.speed < 0) {
      this.startTime = Math.min(a - u / this.speed, this.startTime);
    }
    if (l) {
      this.currentTime = a;
    } else {
      this.updateTime(a);
    }
    const N = this.currentTime - y * (this.playbackSpeed >= 0 ? 1 : -1);
    const _ = this.playbackSpeed >= 0 ? N < 0 : N > u;
    this.currentTime = Math.max(N, 0);
    if (this.state === "finished" && this.holdTime === null) {
      this.currentTime = u;
    }
    let L = this.currentTime;
    let U = r;
    if (b) {
      const F = Math.min(this.currentTime, u) / m;
      let ne = Math.floor(F);
      let J = F % 1;
      if (!J && F >= 1) {
        J = 1;
      }
      if (J === 1) {
        ne--;
      }
      ne = Math.min(ne, b + 1);
      if (ne % 2) {
        if (S === "reverse") {
          J = 1 - J;
          if (E) {
            J -= E / m;
          }
        } else if (S === "mirror") {
          U = f;
        }
      }
      L = un(0, 1, J) * m;
    }
    let K;
    if (_) {
      this.delayState.value = v[0];
      K = this.delayState;
    } else {
      K = U.next(L);
    }
    if (d && !_) {
      K.value = d(K.value);
    }
    let {
      done: te
    } = K;
    if (!_ && p !== null) {
      te = this.playbackSpeed >= 0 ? this.currentTime >= u : this.currentTime <= 0;
    }
    const G = this.holdTime === null && (this.state === "finished" || this.state === "running" && te);
    if (G && j !== Fc) {
      K.value = Qr(v, this.options, k, this.speed);
    }
    if (M) {
      M(K.value);
    }
    if (G) {
      this.finish();
    }
    return K;
  }
  then(a, l) {
    return this.finished.then(a, l);
  }
  get duration() {
    return Qt(this.calculatedDuration);
  }
  get iterationDuration() {
    const {
      delay: a = 0
    } = this.options || {};
    return this.duration + Qt(a);
  }
  get time() {
    return Qt(this.currentTime);
  }
  set time(a) {
    a = Mt(a);
    this.currentTime = a;
    if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) {
      this.holdTime = a;
    } else if (this.driver) {
      this.startTime = this.driver.now() - a / this.playbackSpeed;
    }
    if (this.driver) {
      this.driver.start(false);
    } else {
      this.startTime = 0;
      this.state = "paused";
      this.holdTime = a;
      this.tick(a);
    }
  }
  getGeneratorVelocity() {
    const a = this.currentTime;
    if (a <= 0) {
      return this.options.velocity || 0;
    }
    if (this.generator.velocity) {
      return this.generator.velocity(a);
    }
    const l = this.generator.next(a).value;
    return O0(r => this.generator.next(r).value, a, l);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(a) {
    const l = this.playbackSpeed !== a;
    if (l && this.driver) {
      this.updateTime(ft.now());
    }
    this.playbackSpeed = a;
    if (l && this.driver) {
      this.time = Qt(this.currentTime);
    }
  }
  play() {
    var u;
    var d;
    if (this.isStopped) {
      return;
    }
    const {
      driver: a = qT,
      startTime: l
    } = this.options;
    this.driver ||= a(f => this.tick(f));
    if ((d = (u = this.options).onPlay) != null) {
      d.call(u);
    }
    const r = this.driver.now();
    if (this.state === "finished") {
      this.updateFinished();
      this.startTime = r;
    } else if (this.holdTime !== null) {
      this.startTime = r - this.holdTime;
    } else {
      this.startTime ||= l ?? r;
    }
    if (this.state === "finished" && this.speed < 0) {
      this.startTime += this.calculatedDuration;
    }
    this.holdTime = null;
    this.state = "running";
    this.driver.start();
  }
  pause() {
    this.state = "paused";
    this.updateTime(ft.now());
    this.holdTime = this.currentTime;
  }
  complete() {
    if (this.state !== "running") {
      this.play();
    }
    this.state = "finished";
    this.holdTime = null;
  }
  finish() {
    var a;
    var l;
    this.notifyFinished();
    this.teardown();
    this.state = "finished";
    if ((l = (a = this.options).onComplete) != null) {
      l.call(a);
    }
  }
  cancel() {
    var a;
    var l;
    this.holdTime = null;
    this.startTime = 0;
    this.tick(0);
    this.teardown();
    if ((l = (a = this.options).onCancel) != null) {
      l.call(a);
    }
  }
  teardown() {
    this.state = "idle";
    this.stopDriver();
    this.startTime = this.holdTime = null;
  }
  stopDriver() {
    if (this.driver) {
      this.driver.stop();
      this.driver = undefined;
    }
  }
  sample(a) {
    this.startTime = 0;
    return this.tick(a, true);
  }
  attachTimeline(a) {
    var l;
    if (this.options.allowFlatten) {
      this.options.type = "keyframes";
      this.options.ease = "linear";
      this.initAnimation();
    }
    if ((l = this.driver) != null) {
      l.stop();
    }
    return a.observe(this);
  }
}
function $T(n) {
  for (let a = 1; a < n.length; a++) {
    n[a] ??= n[a - 1];
  }
}
const Ni = n => n * 180 / Math.PI;
const Yc = n => {
  const a = Ni(Math.atan2(n[1], n[0]));
  return Wc(a);
};
const JT = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: n => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
  rotate: Yc,
  rotateZ: Yc,
  skewX: n => Ni(Math.atan(n[1])),
  skewY: n => Ni(Math.atan(n[2])),
  skew: n => (Math.abs(n[1]) + Math.abs(n[2])) / 2
};
const Wc = n => {
  n = n % 360;
  if (n < 0) {
    n += 360;
  }
  return n;
};
const jg = Yc;
const Cg = n => Math.sqrt(n[0] * n[0] + n[1] * n[1]);
const Ng = n => Math.sqrt(n[4] * n[4] + n[5] * n[5]);
const eE = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Cg,
  scaleY: Ng,
  scale: n => (Cg(n) + Ng(n)) / 2,
  rotateX: n => Wc(Ni(Math.atan2(n[6], n[5]))),
  rotateY: n => Wc(Ni(Math.atan2(-n[2], n[0]))),
  rotateZ: jg,
  rotate: jg,
  skewX: n => Ni(Math.atan(n[4])),
  skewY: n => Ni(Math.atan(n[1])),
  skew: n => (Math.abs(n[1]) + Math.abs(n[4])) / 2
};
function Xc(n) {
  if (n.includes("scale")) {
    return 1;
  } else {
    return 0;
  }
}
function Zc(n, a) {
  if (!n || n === "none") {
    return Xc(a);
  }
  const l = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r;
  let u;
  if (l) {
    r = eE;
    u = l;
  } else {
    const m = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = JT;
    u = m;
  }
  if (!u) {
    return Xc(a);
  }
  const d = r[a];
  const f = u[1].split(",").map(nE);
  if (typeof d == "function") {
    return d(f);
  } else {
    return f[d];
  }
}
const tE = (n, a) => {
  const {
    transform: l = "none"
  } = getComputedStyle(n);
  return Zc(l, a);
};
function nE(n) {
  return parseFloat(n.trim());
}
const ka = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"];
const Ma = new Set([...ka, "pathRotation"]);
const kg = n => n === Na || n === I;
const iE = new Set(["x", "y", "z"]);
const aE = ka.filter(n => !iE.has(n));
function sE(n) {
  const a = [];
  aE.forEach(l => {
    const r = n.getValue(l);
    if (r !== undefined) {
      a.push([l, r.get()]);
      r.set(l.startsWith("scale") ? 1 : 0);
    }
  });
  return a;
}
const ni = {
  width: ({
    x: n
  }, {
    paddingLeft: a = "0",
    paddingRight: l = "0",
    boxSizing: r
  }) => {
    const u = n.max - n.min;
    if (r === "border-box") {
      return u;
    } else {
      return u - parseFloat(a) - parseFloat(l);
    }
  },
  height: ({
    y: n
  }, {
    paddingTop: a = "0",
    paddingBottom: l = "0",
    boxSizing: r
  }) => {
    const u = n.max - n.min;
    if (r === "border-box") {
      return u;
    } else {
      return u - parseFloat(a) - parseFloat(l);
    }
  },
  top: (n, {
    top: a
  }) => parseFloat(a),
  left: (n, {
    left: a
  }) => parseFloat(a),
  bottom: ({
    y: n
  }, {
    top: a
  }) => parseFloat(a) + (n.max - n.min),
  right: ({
    x: n
  }, {
    left: a
  }) => parseFloat(a) + (n.max - n.min),
  x: (n, {
    transform: a
  }) => Zc(a, "x"),
  y: (n, {
    transform: a
  }) => Zc(a, "y")
};
ni.translateX = ni.x;
ni.translateY = ni.y;
const ki = new Set();
let Ic = false;
let $c = false;
let Jc = false;
function V0() {
  if ($c) {
    const n = Array.from(ki).filter(r => r.needsMeasurement);
    const a = new Set(n.map(r => r.element));
    const l = new Map();
    a.forEach(r => {
      const u = sE(r);
      if (u.length) {
        l.set(r, u);
        r.render();
      }
    });
    n.forEach(r => r.measureInitialState());
    a.forEach(r => {
      r.render();
      const u = l.get(r);
      if (u) {
        u.forEach(([d, f]) => {
          var m;
          if ((m = r.getValue(d)) != null) {
            m.set(f);
          }
        });
      }
    });
    n.forEach(r => r.measureEndState());
    n.forEach(r => {
      if (r.suspendedScrollY !== undefined) {
        window.scrollTo(0, r.suspendedScrollY);
      }
    });
  }
  $c = false;
  Ic = false;
  ki.forEach(n => n.complete(Jc));
  ki.clear();
}
function _0() {
  ki.forEach(n => {
    n.readKeyframes();
    if (n.needsMeasurement) {
      $c = true;
    }
  });
}
function lE() {
  Jc = true;
  _0();
  V0();
  Jc = false;
}
class Od {
  constructor(a, l, r, u, d, f = false) {
    this.state = "pending";
    this.isAsync = false;
    this.needsMeasurement = false;
    this.unresolvedKeyframes = [...a];
    this.onComplete = l;
    this.name = r;
    this.motionValue = u;
    this.element = d;
    this.isAsync = f;
  }
  scheduleResolve() {
    this.state = "scheduled";
    if (this.isAsync) {
      ki.add(this);
      if (!Ic) {
        Ic = true;
        Me.read(_0);
        Me.resolveKeyframes(V0);
      }
    } else {
      this.readKeyframes();
      this.complete();
    }
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: a,
      name: l,
      element: r,
      motionValue: u
    } = this;
    if (a[0] === null) {
      const d = u == null ? undefined : u.get();
      const f = a[a.length - 1];
      if (d !== undefined) {
        a[0] = d;
      } else if (r && l) {
        const m = r.readValue(l, f);
        if (m != null) {
          a[0] = m;
        }
      }
      if (a[0] === undefined) {
        a[0] = f;
      }
      if (u && d === undefined) {
        u.set(a[0]);
      }
    }
    $T(a);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(a = false) {
    this.state = "complete";
    this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, a);
    ki.delete(this);
  }
  cancel() {
    if (this.state === "scheduled") {
      ki.delete(this);
      this.state = "pending";
    }
  }
  resume() {
    if (this.state === "pending") {
      this.scheduleResolve();
    }
  }
}
const rE = n => n.startsWith("--");
function P0(n, a, l) {
  if (rE(a)) {
    n.style.setProperty(a, l);
  } else {
    n.style[a] = l;
  }
}
const oE = {};
function U0(n, a) {
  const l = m0(n);
  return () => oE[a] ?? l();
}
const uE = U0(() => window.ScrollTimeline !== undefined, "scrollTimeline");
const H0 = U0(() => {
  try {
    document.createElement("div").animate({
      opacity: 0
    }, {
      easing: "linear(0, 1)"
    });
  } catch {
    return false;
  }
  return true;
}, "linearEasing");
const Ns = ([n, a, l, r]) => `cubic-bezier(${n}, ${a}, ${l}, ${r})`;
const Mg = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Ns([0, 0.65, 0.55, 1]),
  circOut: Ns([0.55, 0, 1, 0.45]),
  backIn: Ns([0.31, 0.01, 0.66, -0.59]),
  backOut: Ns([0.33, 1.53, 0.69, 0.99])
};
function Q0(n, a) {
  if (n) {
    if (typeof n == "function") {
      if (H0()) {
        return L0(n, a);
      } else {
        return "ease-out";
      }
    } else if (R0(n)) {
      return Ns(n);
    } else if (Array.isArray(n)) {
      return n.map(l => Q0(l, a) || Mg.easeOut);
    } else {
      return Mg[n];
    }
  }
}
function cE(n, a, l, {
  delay: r = 0,
  duration: u = 300,
  repeat: d = 0,
  repeatType: f = "loop",
  ease: m = "easeOut",
  times: p
} = {}, y = undefined) {
  const v = {
    [a]: l
  };
  if (p) {
    v.offset = p;
  }
  const b = Q0(m, u);
  if (Array.isArray(b)) {
    v.easing = b;
  }
  const S = {
    delay: r,
    duration: u,
    easing: Array.isArray(b) ? "linear" : b,
    fill: "both",
    iterations: d + 1,
    direction: f === "reverse" ? "alternate" : "normal"
  };
  if (y) {
    S.pseudoElement = y;
  }
  return n.animate(v, S);
}
function G0(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function dE({
  type: n,
  ...a
}) {
  if (G0(n) && H0()) {
    return n.applyToOptions(a);
  } else {
    a.duration ??= 300;
    a.ease ??= "easeOut";
    return a;
  }
}
class K0 extends Ld {
  constructor(a) {
    super();
    this.finishedTime = null;
    this.isStopped = false;
    this.manualStartTime = null;
    if (!a) {
      return;
    }
    const {
      element: l,
      name: r,
      keyframes: u,
      pseudoElement: d,
      allowFlatten: f = false,
      finalKeyframe: m,
      onComplete: p
    } = a;
    this.isPseudoElement = !!d;
    this.allowFlatten = f;
    this.options = a;
    Ad(typeof a.type != "string");
    const y = dE(a);
    this.animation = cE(l, r, u, y, d);
    if (y.autoplay === false) {
      this.animation.pause();
    }
    this.animation.onfinish = () => {
      this.finishedTime = this.time;
      if (!d) {
        const v = Qr(u, this.options, m, this.speed);
        if (this.updateMotionValue) {
          this.updateMotionValue(v);
        }
        P0(l, r, v);
        this.animation.cancel();
      }
      if (p != null) {
        p();
      }
      this.notifyFinished();
    };
  }
  play() {
    if (!this.isStopped) {
      this.manualStartTime = null;
      this.animation.play();
      if (this.state === "finished") {
        this.updateFinished();
      }
    }
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var a;
    var l;
    if ((l = (a = this.animation).finish) != null) {
      l.call(a);
    }
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) {
      return;
    }
    this.isStopped = true;
    const {
      state: a
    } = this;
    if (a !== "idle" && a !== "finished") {
      if (this.updateMotionValue) {
        this.updateMotionValue();
      } else {
        this.commitStyles();
      }
      if (!this.isPseudoElement) {
        this.cancel();
      }
    }
  }
  commitStyles() {
    var l;
    var r;
    var u;
    const a = (l = this.options) == null ? undefined : l.element;
    if (!this.isPseudoElement && a != null && a.isConnected) {
      if ((u = (r = this.animation).commitStyles) != null) {
        u.call(r);
      }
    }
  }
  get duration() {
    var l;
    var r;
    const a = ((r = (l = this.animation.effect) == null ? undefined : l.getComputedTiming) == null ? undefined : r.call(l).duration) || 0;
    return Qt(Number(a));
  }
  get iterationDuration() {
    const {
      delay: a = 0
    } = this.options || {};
    return this.duration + Qt(a);
  }
  get time() {
    return Qt(Number(this.animation.currentTime) || 0);
  }
  set time(a) {
    const l = this.finishedTime !== null;
    this.manualStartTime = null;
    this.finishedTime = null;
    this.animation.currentTime = Mt(a);
    if (l) {
      this.animation.pause();
    }
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(a) {
    if (a < 0) {
      this.finishedTime = null;
    }
    this.animation.playbackRate = a;
  }
  get state() {
    if (this.finishedTime !== null) {
      return "finished";
    } else {
      return this.animation.playState;
    }
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(a) {
    this.manualStartTime = this.animation.startTime = a;
  }
  attachTimeline({
    timeline: a,
    rangeStart: l,
    rangeEnd: r,
    observe: u
  }) {
    var d;
    if (this.allowFlatten) {
      if ((d = this.animation.effect) != null) {
        d.updateTiming({
          easing: "linear"
        });
      }
    }
    this.animation.onfinish = null;
    if (a && uE()) {
      this.animation.timeline = a;
      if (l) {
        this.animation.rangeStart = l;
      }
      if (r) {
        this.animation.rangeEnd = r;
      }
      return Gt;
    } else {
      return u(this);
    }
  }
}
const F0 = {
  anticipate: S0,
  backInOut: x0,
  circInOut: T0
};
function fE(n) {
  return n in F0;
}
function hE(n) {
  if (typeof n.ease == "string" && fE(n.ease)) {
    n.ease = F0[n.ease];
  }
}
const Cc = 10;
class mE extends K0 {
  constructor(a) {
    hE(a);
    B0(a);
    super(a);
    if (a.startTime !== undefined && a.autoplay !== false) {
      this.startTime = a.startTime;
    }
    this.options = a;
  }
  updateMotionValue(a) {
    const {
      motionValue: l,
      onUpdate: r,
      onComplete: u,
      element: d,
      ...f
    } = this.options;
    if (!l) {
      return;
    }
    if (a !== undefined) {
      l.set(a);
      return;
    }
    const m = new Dr({
      ...f,
      autoplay: false
    });
    const p = Math.max(Cc, ft.now() - this.startTime);
    const y = un(0, Cc, p - Cc);
    const v = m.sample(p).value;
    const {
      name: b
    } = this.options;
    if (d && b) {
      P0(d, b, v);
    }
    l.setWithVelocity(m.sample(Math.max(0, p - y)).value, v, y);
    m.stop();
  }
}
const zg = (n, a) => a === "zIndex" ? false : typeof n == "number" || !!Array.isArray(n) || typeof n == "string" && (!!$t.test(n) || n === "0") && !n.startsWith("url(");
function pE(n) {
  const a = n[0];
  if (n.length === 1) {
    return true;
  }
  for (let l = 0; l < n.length; l++) {
    if (n[l] !== a) {
      return true;
    }
  }
}
function gE(n, a, l, r) {
  const u = n[0];
  if (u === null) {
    return false;
  }
  if (a === "display" || a === "visibility") {
    return true;
  }
  const d = n[n.length - 1];
  const f = zg(u, a);
  const m = zg(d, a);
  if (!f || !m) {
    return false;
  } else {
    return pE(n) || (l === "spring" || G0(l)) && r;
  }
}
function ed(n) {
  n.duration = 0;
  n.type = "keyframes";
}
const Y0 = new Set(["opacity", "clipPath", "filter", "transform"]);
const yE = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function vE(n) {
  for (let a = 0; a < n.length; a++) {
    if (typeof n[a] == "string" && yE.test(n[a])) {
      return true;
    }
  }
  return false;
}
const bE = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]);
const xE = m0(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function SE(n) {
  var b;
  const {
    motionValue: a,
    name: l,
    repeatDelay: r,
    repeatType: u,
    damping: d,
    type: f,
    keyframes: m
  } = n;
  if (!(((b = a == null ? undefined : a.owner) == null ? undefined : b.current) instanceof HTMLElement)) {
    return false;
  }
  const {
    onUpdate: y,
    transformTemplate: v
  } = a.owner.getProps();
  return xE() && l && (Y0.has(l) || bE.has(l) && vE(m)) && (l !== "transform" || !v) && !y && !r && u !== "mirror" && d !== 0 && f !== "inertia";
}
const wE = 40;
class TE extends Ld {
  constructor({
    autoplay: a = true,
    delay: l = 0,
    type: r = "keyframes",
    repeat: u = 0,
    repeatDelay: d = 0,
    repeatType: f = "loop",
    keyframes: m,
    name: p,
    motionValue: y,
    element: v,
    ...b
  }) {
    var j;
    super();
    this.stop = () => {
      var M;
      var k;
      if (this._animation) {
        this._animation.stop();
        if ((M = this.stopTimeline) != null) {
          M.call(this);
        }
      }
      if ((k = this.keyframeResolver) != null) {
        k.cancel();
      }
    };
    this.createdAt = ft.now();
    const S = {
      autoplay: a,
      delay: l,
      type: r,
      repeat: u,
      repeatDelay: d,
      repeatType: f,
      name: p,
      motionValue: y,
      element: v,
      ...b
    };
    const E = (v == null ? undefined : v.KeyframeResolver) || Od;
    this.keyframeResolver = new E(m, (M, k, N) => this.onKeyframesResolved(M, k, S, !N), p, y, v);
    if ((j = this.keyframeResolver) != null) {
      j.scheduleResolve();
    }
  }
  onKeyframesResolved(a, l, r, u) {
    var N;
    var _;
    this.keyframeResolver = undefined;
    const {
      name: d,
      type: f,
      velocity: m,
      delay: p,
      isHandoff: y,
      onUpdate: v
    } = r;
    this.resolvedAt = ft.now();
    let b = true;
    if (!gE(a, d, f, m)) {
      b = false;
      if (ii.instantAnimations || !p) {
        if (v != null) {
          v(Qr(a, r, l));
        }
      }
      a[0] = a[a.length - 1];
      ed(r);
      r.repeat = 0;
    }
    const E = {
      startTime: u ? this.resolvedAt ? this.resolvedAt - this.createdAt > wE ? this.resolvedAt : this.createdAt : this.createdAt : undefined,
      finalKeyframe: l,
      ...r,
      keyframes: a
    };
    const j = b && !y && SE(E);
    const M = (_ = (N = E.motionValue) == null ? undefined : N.owner) == null ? undefined : _.current;
    let k;
    if (j) {
      try {
        k = new mE({
          ...E,
          element: M
        });
      } catch {
        k = new Dr(E);
      }
    } else {
      k = new Dr(E);
    }
    k.finished.then(() => {
      this.notifyFinished();
    }).catch(Gt);
    if (this.pendingTimeline) {
      this.stopTimeline = k.attachTimeline(this.pendingTimeline);
      this.pendingTimeline = undefined;
    }
    this._animation = k;
  }
  get finished() {
    if (this._animation) {
      return this.animation.finished;
    } else {
      return this._finished;
    }
  }
  then(a, l) {
    return this.finished.finally(a).then(() => {});
  }
  get animation() {
    var a;
    if (!this._animation) {
      if ((a = this.keyframeResolver) != null) {
        a.resume();
      }
      lE();
    }
    return this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(a) {
    this.animation.time = a;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(a) {
    this.animation.speed = a;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(a) {
    if (this._animation) {
      this.stopTimeline = this.animation.attachTimeline(a);
    } else {
      this.pendingTimeline = a;
    }
    return () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var a;
    if (this._animation) {
      this.animation.cancel();
    }
    if ((a = this.keyframeResolver) != null) {
      a.cancel();
    }
  }
}
function W0(n, a, l, r = 0, u = 1) {
  const d = Array.from(n).sort((y, v) => y.sortNodePosition(v)).indexOf(a);
  const f = n.size;
  const m = (f - 1) * r;
  if (typeof l == "function") {
    return l(d, f);
  } else if (u === 1) {
    return d * r;
  } else {
    return m - d * r;
  }
}
const Dg = 30;
const EE = n => !isNaN(parseFloat(n));
class RE {
  constructor(a, l = {}) {
    this.canTrackVelocity = null;
    this.events = {};
    this.updateAndNotify = r => {
      var d;
      const u = ft.now();
      if (this.updatedAt !== u) {
        this.setPrevFrameValue();
      }
      this.prev = this.current;
      this.setCurrent(r);
      if (this.current !== this.prev && ((d = this.events.change) == null || d.notify(this.current), this.dependents)) {
        for (const f of this.dependents) {
          f.dirty();
        }
      }
    };
    this.hasAnimated = false;
    this.setCurrent(a);
    this.owner = l.owner;
  }
  setCurrent(a) {
    this.current = a;
    this.updatedAt = ft.now();
    if (this.canTrackVelocity === null && a !== undefined) {
      this.canTrackVelocity = EE(this.current);
    }
  }
  setPrevFrameValue(a = this.current) {
    this.prevFrameValue = a;
    this.prevUpdatedAt = this.updatedAt;
  }
  onChange(a) {
    return this.on("change", a);
  }
  on(a, l) {
    this.events[a] ||= new jd();
    const r = this.events[a].add(l);
    if (a === "change") {
      return () => {
        r();
        Me.read(() => {
          if (!this.events.change.getSize()) {
            this.stop();
          }
        });
      };
    } else {
      return r;
    }
  }
  clearListeners() {
    for (const a in this.events) {
      this.events[a].clear();
    }
  }
  attach(a, l) {
    this.passiveEffect = a;
    this.stopPassiveEffect = l;
  }
  set(a) {
    if (this.passiveEffect) {
      this.passiveEffect(a, this.updateAndNotify);
    } else {
      this.updateAndNotify(a);
    }
  }
  setWithVelocity(a, l, r) {
    this.set(l);
    this.prev = undefined;
    this.prevFrameValue = a;
    this.prevUpdatedAt = this.updatedAt - r;
  }
  jump(a, l = true) {
    this.updateAndNotify(a);
    this.prev = a;
    this.prevUpdatedAt = this.prevFrameValue = undefined;
    if (l) {
      this.stop();
    }
    if (this.stopPassiveEffect) {
      this.stopPassiveEffect();
    }
  }
  dirty() {
    var a;
    if ((a = this.events.change) != null) {
      a.notify(this.current);
    }
  }
  addDependent(a) {
    this.dependents ||= new Set();
    this.dependents.add(a);
  }
  removeDependent(a) {
    if (this.dependents) {
      this.dependents.delete(a);
    }
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const a = ft.now();
    if (!this.canTrackVelocity || this.prevFrameValue === undefined || a - this.updatedAt > Dg) {
      return 0;
    }
    const l = Math.min(this.updatedAt - this.prevUpdatedAt, Dg);
    return p0(parseFloat(this.current) - parseFloat(this.prevFrameValue), l);
  }
  start(a) {
    this.stop();
    return new Promise(l => {
      this.hasAnimated = true;
      this.animation = a(l);
      if (this.events.animationStart) {
        this.events.animationStart.notify();
      }
    }).then(() => {
      if (this.events.animationComplete) {
        this.events.animationComplete.notify();
      }
      this.clearAnimation();
    });
  }
  stop() {
    if (this.animation) {
      this.animation.stop();
      if (this.events.animationCancel) {
        this.events.animationCancel.notify();
      }
    }
    this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var a;
    var l;
    if ((a = this.dependents) != null) {
      a.clear();
    }
    if ((l = this.events.destroy) != null) {
      l.notify();
    }
    this.clearListeners();
    this.stop();
    if (this.stopPassiveEffect) {
      this.stopPassiveEffect();
    }
  }
}
function Ra(n, a) {
  return new RE(n, a);
}
function X0(n, a) {
  if (n != null && n.inherit && a) {
    const {
      inherit: l,
      ...r
    } = n;
    return {
      ...a,
      ...r
    };
  }
  return n;
}
function Bd(n, a) {
  const l = (n == null ? undefined : n[a]) ?? (n == null ? undefined : n.default) ?? n;
  if (l !== n) {
    return X0(l, n);
  } else {
    return l;
  }
}
const AE = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
const jE = n => ({
  type: "spring",
  stiffness: 550,
  damping: n === 0 ? Math.sqrt(550) * 2 : 30,
  restSpeed: 10
});
const CE = {
  type: "keyframes",
  duration: 0.8
};
const NE = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
const kE = (n, {
  keyframes: a
}) => a.length > 2 ? CE : Ma.has(n) ? n.startsWith("scale") ? jE(a[1]) : AE : NE;
const ME = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);
function zE(n) {
  for (const a in n) {
    if (!ME.has(a)) {
      return true;
    }
  }
  return false;
}
const Vd = (n, a, l, r = {}, u, d) => f => {
  const m = Bd(r, n) || {};
  const p = m.delay || r.delay || 0;
  let {
    elapsed: y = 0
  } = r;
  y = y - Mt(p);
  const v = {
    keyframes: Array.isArray(l) ? l : [null, l],
    ease: "easeOut",
    velocity: a.getVelocity(),
    ...m,
    delay: -y,
    onUpdate: S => {
      a.set(S);
      if (m.onUpdate) {
        m.onUpdate(S);
      }
    },
    onComplete: () => {
      f();
      if (m.onComplete) {
        m.onComplete();
      }
    },
    name: n,
    motionValue: a,
    element: d ? undefined : u
  };
  if (!zE(m)) {
    Object.assign(v, kE(n, v));
  }
  v.duration &&= Mt(v.duration);
  v.repeatDelay &&= Mt(v.repeatDelay);
  if (v.from !== undefined) {
    v.keyframes[0] = v.from;
  }
  let b = false;
  if (v.type === false || v.duration === 0 && !v.repeatDelay) {
    ed(v);
    if (v.delay === 0) {
      b = true;
    }
  }
  if (ii.instantAnimations || ii.skipAnimations || u != null && u.shouldSkipAnimations || m.skipAnimations) {
    b = true;
    ed(v);
    v.delay = 0;
  }
  v.allowFlatten = !m.type && !m.ease;
  if (b && !d && a.get() !== undefined) {
    const S = Qr(v.keyframes, m);
    if (S !== undefined) {
      Me.update(() => {
        v.onUpdate(S);
        v.onComplete();
      });
      return;
    }
  }
  if (m.isSync) {
    return new Dr(v);
  } else {
    return new TE(v);
  }
};
const DE = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function qE(n) {
  const a = DE.exec(n);
  if (!a) {
    return [,];
  }
  const [, l, r, u] = a;
  return [`--${l ?? r}`, u];
}
function Z0(n, a, l = 1) {
  const [r, u] = qE(n);
  if (!r) {
    return;
  }
  const d = window.getComputedStyle(a).getPropertyValue(r);
  if (d) {
    const f = d.trim();
    if (d0(f)) {
      return parseFloat(f);
    } else {
      return f;
    }
  }
  if (kd(u)) {
    return Z0(u, a, l + 1);
  } else {
    return u;
  }
}
function qg(n) {
  const a = [{}, {}];
  if (n != null) {
    n.values.forEach((l, r) => {
      a[0][r] = l.get();
      a[1][r] = l.getVelocity();
    });
  }
  return a;
}
function _d(n, a, l, r) {
  if (typeof a == "function") {
    const [u, d] = qg(r);
    a = a(l !== undefined ? l : n.custom, u, d);
  }
  if (typeof a == "string") {
    a = n.variants && n.variants[a];
  }
  if (typeof a == "function") {
    const [u, d] = qg(r);
    a = a(l !== undefined ? l : n.custom, u, d);
  }
  return a;
}
function Mi(n, a, l) {
  const r = n.getProps();
  return _d(r, a, l !== undefined ? l : r.custom, n);
}
const I0 = new Set(["width", "height", "top", "left", "right", "bottom", ...ka]);
const td = n => Array.isArray(n);
function LE(n, a, l) {
  if (n.hasValue(a)) {
    n.getValue(a).set(l);
  } else {
    n.addValue(a, Ra(l));
  }
}
function OE(n) {
  if (td(n)) {
    return n[n.length - 1] || 0;
  } else {
    return n;
  }
}
function BE(n, a) {
  const l = Mi(n, a);
  let {
    transitionEnd: r = {},
    transition: u = {},
    ...d
  } = l || {};
  d = {
    ...d,
    ...r
  };
  for (const f in d) {
    const m = OE(d[f]);
    LE(n, f, m);
  }
}
const rt = n => !!n && !!n.getVelocity;
function VE(n) {
  return !!rt(n) && !!n.add;
}
function nd(n, a) {
  const l = n.getValue("willChange");
  if (VE(l)) {
    return l.add(a);
  }
  if (!l && ii.WillChange) {
    const r = new ii.WillChange("auto");
    n.addValue("willChange", r);
    r.add(a);
  }
}
function Pd(n) {
  return n.replace(/([A-Z])/g, a => `-${a.toLowerCase()}`);
}
const _E = "framerAppearId";
const $0 = "data-" + Pd(_E);
function J0(n) {
  return n.props[$0];
}
function PE({
  protectedKeys: n,
  needsAnimating: a
}, l) {
  const r = n.hasOwnProperty(l) && a[l] !== true;
  a[l] = false;
  return r;
}
function ev(n, a, {
  delay: l = 0,
  transitionOverride: r,
  type: u
} = {}) {
  let {
    transition: d,
    transitionEnd: f,
    ...m
  } = a;
  const p = n.getDefaultTransition();
  d = d ? X0(d, p) : p;
  const y = d == null ? undefined : d.reduceMotion;
  const v = d == null ? undefined : d.skipAnimations;
  if (r) {
    d = r;
  }
  const b = [];
  const S = u && n.animationState && n.animationState.getState()[u];
  const E = d == null ? undefined : d.path;
  if (E) {
    E.animateVisualElement(n, m, d, l, b);
  }
  for (const j in m) {
    const M = n.getValue(j, n.latestValues[j] ?? null);
    const k = m[j];
    if (k === undefined || S && PE(S, j)) {
      continue;
    }
    const N = {
      delay: l,
      ...Bd(d || {}, j)
    };
    if (v) {
      N.skipAnimations = true;
    }
    const _ = M.get();
    if (_ !== undefined && !M.isAnimating() && !Array.isArray(k) && k === _ && !N.velocity) {
      Me.update(() => M.set(k));
      continue;
    }
    let L = false;
    if (window.MotionHandoffAnimation) {
      const te = J0(n);
      if (te) {
        const G = window.MotionHandoffAnimation(te, j, Me);
        if (G !== null) {
          N.startTime = G;
          L = true;
        }
      }
    }
    nd(n, j);
    const U = y ?? n.shouldReduceMotion;
    M.start(Vd(j, M, k, U && I0.has(j) ? {
      type: false
    } : N, n, L));
    const K = M.animation;
    if (K) {
      b.push(K);
    }
  }
  if (f) {
    const j = () => Me.update(() => {
      if (f) {
        BE(n, f);
      }
    });
    if (b.length) {
      Promise.all(b).then(j);
    } else {
      j();
    }
  }
  return b;
}
function id(n, a, l = {}) {
  var p;
  const r = Mi(n, a, l.type === "exit" ? (p = n.presenceContext) == null ? undefined : p.custom : undefined);
  let {
    transition: u = n.getDefaultTransition() || {}
  } = r || {};
  if (l.transitionOverride) {
    u = l.transitionOverride;
  }
  const d = r ? () => Promise.all(ev(n, r, l)) : () => Promise.resolve();
  const f = n.variantChildren && n.variantChildren.size ? (y = 0) => {
    const {
      delayChildren: v = 0,
      staggerChildren: b,
      staggerDirection: S
    } = u;
    return UE(n, a, y, v, b, S, l);
  } : () => Promise.resolve();
  const {
    when: m
  } = u;
  if (m) {
    const [y, v] = m === "beforeChildren" ? [d, f] : [f, d];
    return y().then(() => v());
  } else {
    return Promise.all([d(), f(l.delay)]);
  }
}
function UE(n, a, l = 0, r = 0, u = 0, d = 1, f) {
  const m = [];
  for (const p of n.variantChildren) {
    p.notify("AnimationStart", a);
    m.push(id(p, a, {
      ...f,
      delay: l + (typeof r == "function" ? 0 : r) + W0(n.variantChildren, p, r, u, d)
    }).then(() => p.notify("AnimationComplete", a)));
  }
  return Promise.all(m);
}
function HE(n, a, l = {}) {
  n.notify("AnimationStart", a);
  let r;
  if (Array.isArray(a)) {
    const u = a.map(d => id(n, d, l));
    r = Promise.all(u);
  } else if (typeof a == "string") {
    r = id(n, a, l);
  } else {
    const u = typeof a == "function" ? Mi(n, a, l.custom) : a;
    r = Promise.all(ev(n, u, l));
  }
  return r.then(() => {
    n.notify("AnimationComplete", a);
  });
}
const QE = {
  test: n => n === "auto",
  parse: n => n
};
const tv = n => a => a.test(n);
const nv = [Na, I, on, Cn, pT, mT, QE];
const Lg = n => nv.find(tv(n));
function GE(n) {
  if (typeof n == "number") {
    return n === 0;
  } else if (n !== null) {
    return n === "none" || n === "0" || h0(n);
  } else {
    return true;
  }
}
const KE = new Set(["brightness", "contrast", "saturate", "opacity"]);
function FE(n) {
  const [a, l] = n.slice(0, -1).split("(");
  if (a === "drop-shadow") {
    return n;
  }
  const [r] = l.match(Md) || [];
  if (!r) {
    return n;
  }
  const u = l.replace(r, "");
  let d = KE.has(a) ? 1 : 0;
  if (r !== l) {
    d *= 100;
  }
  return a + "(" + d + u + ")";
}
const YE = /\b([a-z-]*)\(.*?\)/gu;
const ad = {
  ...$t,
  getAnimatableNone: n => {
    const a = n.match(YE);
    if (a) {
      return a.map(FE).join(" ");
    } else {
      return n;
    }
  }
};
const sd = {
  ...$t,
  getAnimatableNone: n => {
    const a = $t.parse(n);
    return $t.createTransformer(n)(a.map(r => typeof r == "number" ? 0 : typeof r == "object" ? {
      ...r,
      alpha: 1
    } : r));
  }
};
const Og = {
  ...Na,
  transform: Math.round
};
const WE = {
  rotate: Cn,
  pathRotation: Cn,
  rotateX: Cn,
  rotateY: Cn,
  rotateZ: Cn,
  scale: dr,
  scaleX: dr,
  scaleY: dr,
  scaleZ: dr,
  skew: Cn,
  skewX: Cn,
  skewY: Cn,
  distance: I,
  translateX: I,
  translateY: I,
  translateZ: I,
  x: I,
  y: I,
  z: I,
  perspective: I,
  transformPerspective: I,
  opacity: Os,
  originX: wg,
  originY: wg,
  originZ: I
};
const qr = {
  borderWidth: I,
  borderTopWidth: I,
  borderRightWidth: I,
  borderBottomWidth: I,
  borderLeftWidth: I,
  borderRadius: I,
  borderTopLeftRadius: I,
  borderTopRightRadius: I,
  borderBottomRightRadius: I,
  borderBottomLeftRadius: I,
  width: I,
  maxWidth: I,
  height: I,
  maxHeight: I,
  top: I,
  right: I,
  bottom: I,
  left: I,
  inset: I,
  insetBlock: I,
  insetBlockStart: I,
  insetBlockEnd: I,
  insetInline: I,
  insetInlineStart: I,
  insetInlineEnd: I,
  padding: I,
  paddingTop: I,
  paddingRight: I,
  paddingBottom: I,
  paddingLeft: I,
  paddingBlock: I,
  paddingBlockStart: I,
  paddingBlockEnd: I,
  paddingInline: I,
  paddingInlineStart: I,
  paddingInlineEnd: I,
  margin: I,
  marginTop: I,
  marginRight: I,
  marginBottom: I,
  marginLeft: I,
  marginBlock: I,
  marginBlockStart: I,
  marginBlockEnd: I,
  marginInline: I,
  marginInlineStart: I,
  marginInlineEnd: I,
  fontSize: I,
  backgroundPositionX: I,
  backgroundPositionY: I,
  ...WE,
  zIndex: Og,
  fillOpacity: Os,
  strokeOpacity: Os,
  numOctaves: Og
};
const XE = {
  ...qr,
  color: Xe,
  backgroundColor: Xe,
  outlineColor: Xe,
  fill: Xe,
  stroke: Xe,
  borderColor: Xe,
  borderTopColor: Xe,
  borderRightColor: Xe,
  borderBottomColor: Xe,
  borderLeftColor: Xe,
  filter: ad,
  WebkitFilter: ad,
  mask: sd,
  WebkitMask: sd
};
const iv = n => XE[n];
const ZE = new Set([ad, sd]);
function av(n, a) {
  let l = iv(n);
  if (!ZE.has(l)) {
    l = $t;
  }
  if (l.getAnimatableNone) {
    return l.getAnimatableNone(a);
  } else {
    return undefined;
  }
}
const IE = new Set(["auto", "none", "0"]);
function $E(n, a, l) {
  let r = 0;
  let u;
  while (r < n.length && !u) {
    const d = n[r];
    if (typeof d == "string" && !IE.has(d) && Ea(d).values.length) {
      u = n[r];
    }
    r++;
  }
  if (u && l) {
    for (const d of a) {
      n[d] = av(l, u);
    }
  }
}
class JE extends Od {
  constructor(a, l, r, u, d) {
    super(a, l, r, u, d, true);
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: a,
      element: l,
      name: r
    } = this;
    if (!l || !l.current) {
      return;
    }
    super.readKeyframes();
    for (let v = 0; v < a.length; v++) {
      let b = a[v];
      if (typeof b == "string" && (b = b.trim(), kd(b))) {
        const S = Z0(b, l.current);
        if (S !== undefined) {
          a[v] = S;
        }
        if (v === a.length - 1) {
          this.finalKeyframe = b;
        }
      }
    }
    this.resolveNoneKeyframes();
    if (!I0.has(r) || a.length !== 2) {
      return;
    }
    const [u, d] = a;
    const f = Lg(u);
    const m = Lg(d);
    const p = Sg(u);
    const y = Sg(d);
    if (p !== y && ni[r]) {
      this.needsMeasurement = true;
      return;
    }
    if (f !== m) {
      if (kg(f) && kg(m)) {
        for (let v = 0; v < a.length; v++) {
          const b = a[v];
          if (typeof b == "string") {
            a[v] = parseFloat(b);
          }
        }
      } else if (ni[r]) {
        this.needsMeasurement = true;
      }
    }
  }
  resolveNoneKeyframes() {
    const {
      unresolvedKeyframes: a,
      name: l
    } = this;
    const r = [];
    for (let u = 0; u < a.length; u++) {
      if (a[u] === null || GE(a[u])) {
        r.push(u);
      }
    }
    if (r.length) {
      $E(a, r, l);
    }
  }
  measureInitialState() {
    const {
      element: a,
      unresolvedKeyframes: l,
      name: r
    } = this;
    if (!a || !a.current) {
      return;
    }
    if (r === "height") {
      this.suspendedScrollY = window.pageYOffset;
    }
    this.measuredOrigin = ni[r](a.measureViewportBox(), window.getComputedStyle(a.current));
    l[0] = this.measuredOrigin;
    const u = l[l.length - 1];
    if (u !== undefined) {
      a.getValue(r, u).jump(u, false);
    }
  }
  measureEndState() {
    var m;
    const {
      element: a,
      name: l,
      unresolvedKeyframes: r
    } = this;
    if (!a || !a.current) {
      return;
    }
    const u = a.getValue(l);
    if (u) {
      u.jump(this.measuredOrigin, false);
    }
    const d = r.length - 1;
    const f = r[d];
    r[d] = ni[l](a.measureViewportBox(), window.getComputedStyle(a.current));
    if (f !== null && this.finalKeyframe === undefined) {
      this.finalKeyframe = f;
    }
    if ((m = this.removedTransforms) != null && m.length) {
      this.removedTransforms.forEach(([p, y]) => {
        a.getValue(p).set(y);
      });
    }
    this.resolveNoneKeyframes();
  }
}
function sv(n, a, l) {
  if (n == null) {
    return [];
  }
  if (n instanceof EventTarget) {
    return [n];
  }
  if (typeof n == "string") {
    let r = document;
    const u = (l == null ? undefined : l[n]) ?? r.querySelectorAll(n);
    if (u) {
      return Array.from(u);
    } else {
      return [];
    }
  }
  return Array.from(n).filter(r => r != null);
}
const ld = (n, a) => a && typeof n == "number" ? a.transform(n) : n;
function vr(n) {
  return f0(n) && "offsetHeight" in n && !("ownerSVGElement" in n);
}
const {
  schedule: Ud
} = A0(queueMicrotask, false);
const Zt = {
  x: false,
  y: false
};
function lv() {
  return Zt.x || Zt.y;
}
function e2(n) {
  if (n === "x" || n === "y") {
    if (Zt[n]) {
      return null;
    } else {
      Zt[n] = true;
      return () => {
        Zt[n] = false;
      };
    }
  } else if (Zt.x || Zt.y) {
    return null;
  } else {
    Zt.x = Zt.y = true;
    return () => {
      Zt.x = Zt.y = false;
    };
  }
}
function rv(n, a) {
  const l = sv(n);
  const r = new AbortController();
  const u = {
    passive: true,
    ...a,
    signal: r.signal
  };
  return [l, u, () => r.abort()];
}
function t2(n) {
  return n.pointerType !== "touch" && !lv();
}
function n2(n, a, l = {}) {
  const [r, u, d] = rv(n, l);
  r.forEach(f => {
    let m = false;
    let p = false;
    let y;
    const v = () => {
      f.removeEventListener("pointerleave", j);
    };
    const b = k => {
      if (y) {
        y(k);
        y = undefined;
      }
      v();
    };
    const S = k => {
      m = false;
      window.removeEventListener("pointerup", S);
      window.removeEventListener("pointercancel", S);
      if (p) {
        p = false;
        b(k);
      }
    };
    const E = () => {
      m = true;
      window.addEventListener("pointerup", S, u);
      window.addEventListener("pointercancel", S, u);
    };
    const j = k => {
      if (k.pointerType !== "touch") {
        if (m) {
          p = true;
          return;
        }
        b(k);
      }
    };
    const M = k => {
      if (!t2(k)) {
        return;
      }
      p = false;
      const N = a(f, k);
      if (typeof N == "function") {
        y = N;
        f.addEventListener("pointerleave", j, u);
      }
    };
    f.addEventListener("pointerenter", M, u);
    f.addEventListener("pointerdown", E, u);
  });
  return d;
}
const ov = (n, a) => a ? n === a ? true : ov(n, a.parentElement) : false;
const Hd = n => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== false;
const i2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function a2(n) {
  return i2.has(n.tagName) || n.isContentEditable === true;
}
const s2 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function l2(n) {
  return s2.has(n.tagName) || n.isContentEditable === true;
}
const br = new WeakSet();
function Bg(n) {
  return a => {
    if (a.key === "Enter") {
      n(a);
    }
  };
}
function Nc(n, a) {
  n.dispatchEvent(new PointerEvent("pointer" + a, {
    isPrimary: true,
    bubbles: true
  }));
}
const r2 = (n, a) => {
  const l = n.currentTarget;
  if (!l) {
    return;
  }
  const r = Bg(() => {
    if (br.has(l)) {
      return;
    }
    Nc(l, "down");
    const u = Bg(() => {
      Nc(l, "up");
    });
    const d = () => Nc(l, "cancel");
    l.addEventListener("keyup", u, a);
    l.addEventListener("blur", d, a);
  });
  l.addEventListener("keydown", r, a);
  l.addEventListener("blur", () => l.removeEventListener("keydown", r), a);
};
function Vg(n) {
  return Hd(n) && !lv();
}
const _g = new WeakSet();
function o2(n, a, l = {}) {
  const [r, u, d] = rv(n, l);
  const f = m => {
    const p = m.currentTarget;
    if (!Vg(m) || _g.has(m)) {
      return;
    }
    br.add(p);
    if (l.stopPropagation) {
      _g.add(m);
    }
    const y = a(p, m);
    const v = (E, j) => {
      window.removeEventListener("pointerup", b);
      window.removeEventListener("pointercancel", S);
      if (br.has(p)) {
        br.delete(p);
      }
      if (Vg(E) && typeof y == "function") {
        y(E, {
          success: j
        });
      }
    };
    const b = E => {
      v(E, p === window || p === document || l.useGlobalTarget || ov(p, E.target));
    };
    const S = E => {
      v(E, false);
    };
    window.addEventListener("pointerup", b, u);
    window.addEventListener("pointercancel", S, u);
  };
  r.forEach(m => {
    (l.useGlobalTarget ? window : m).addEventListener("pointerdown", f, u);
    if (vr(m)) {
      m.addEventListener("focus", y => r2(y, u));
      if (!a2(m) && !m.hasAttribute("tabindex")) {
        m.tabIndex = 0;
      }
    }
  });
  return d;
}
function Qd(n) {
  return f0(n) && "ownerSVGElement" in n;
}
const xr = new WeakMap();
let ti;
const uv = (n, a, l) => (r, u) => u && u[0] ? u[0][n + "Size"] : Qd(r) && "getBBox" in r ? r.getBBox()[a] : r[l];
const u2 = uv("inline", "width", "offsetWidth");
const c2 = uv("block", "height", "offsetHeight");
function d2({
  target: n,
  borderBoxSize: a
}) {
  var l;
  if ((l = xr.get(n)) != null) {
    l.forEach(r => {
      r(n, {
        get width() {
          return u2(n, a);
        },
        get height() {
          return c2(n, a);
        }
      });
    });
  }
}
function f2(n) {
  n.forEach(d2);
}
function h2() {
  if (typeof ResizeObserver !== "undefined") {
    ti = new ResizeObserver(f2);
  }
}
function m2(n, a) {
  if (!ti) {
    h2();
  }
  const l = sv(n);
  l.forEach(r => {
    let u = xr.get(r);
    if (!u) {
      u = new Set();
      xr.set(r, u);
    }
    u.add(a);
    if (ti != null) {
      ti.observe(r);
    }
  });
  return () => {
    l.forEach(r => {
      const u = xr.get(r);
      if (u != null) {
        u.delete(a);
      }
      if ((u == null || !u.size) && ti != null) {
        ti.unobserve(r);
      }
    });
  };
}
const Sr = new Set();
let xa;
function p2() {
  xa = () => {
    const n = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    Sr.forEach(a => a(n));
  };
  window.addEventListener("resize", xa);
}
function g2(n) {
  Sr.add(n);
  if (!xa) {
    p2();
  }
  return () => {
    Sr.delete(n);
    if (!Sr.size && typeof xa == "function") {
      window.removeEventListener("resize", xa);
      xa = undefined;
    }
  };
}
function Pg(n, a) {
  if (typeof n == "function") {
    return g2(n);
  } else {
    return m2(n, a);
  }
}
function y2(n) {
  return Qd(n) && n.tagName === "svg";
}
const v2 = [...nv, Xe, $t];
const b2 = n => v2.find(tv(n));
const Ug = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
const Sa = () => ({
  x: Ug(),
  y: Ug()
});
const Hg = () => ({
  min: 0,
  max: 0
});
const Ie = () => ({
  x: Hg(),
  y: Hg()
});
const x2 = new WeakMap();
function Gr(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function Bs(n) {
  return typeof n == "string" || Array.isArray(n);
}
const Gd = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"];
const Kd = ["initial", ...Gd];
function Kr(n) {
  return Gr(n.animate) || Kd.some(a => Bs(n[a]));
}
function cv(n) {
  return !!Kr(n) || !!n.variants;
}
function S2(n, a, l) {
  for (const r in a) {
    const u = a[r];
    const d = l[r];
    if (rt(u)) {
      n.addValue(r, u);
    } else if (rt(d)) {
      n.addValue(r, Ra(u, {
        owner: n
      }));
    } else if (d !== u) {
      if (n.hasValue(r)) {
        const f = n.getValue(r);
        if (f.liveStyle === true) {
          f.jump(u);
        } else if (!f.hasAnimated) {
          f.set(u);
        }
      } else {
        const f = n.getStaticValue(r);
        n.addValue(r, Ra(f !== undefined ? f : u, {
          owner: n
        }));
      }
    }
  }
  for (const r in l) {
    if (a[r] === undefined) {
      n.removeValue(r);
    }
  }
  return a;
}
const rd = {
  current: null
};
const dv = {
  current: false
};
const w2 = typeof window !== "undefined";
function T2() {
  dv.current = true;
  if (w2) {
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)");
      const a = () => rd.current = n.matches;
      n.addEventListener("change", a);
      a();
    } else {
      rd.current = false;
    }
  }
}
const Qg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let Lr = {};
function fv(n) {
  Lr = n;
}
function E2() {
  return Lr;
}
class R2 {
  scrapeMotionValuesFromProps(a, l, r) {
    return {};
  }
  constructor({
    parent: a,
    props: l,
    presenceContext: r,
    reducedMotionConfig: u,
    skipAnimations: d,
    blockInitialAnimation: f,
    visualState: m
  }, p = {}) {
    this.current = null;
    this.children = new Set();
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.shouldSkipAnimations = false;
    this.values = new Map();
    this.KeyframeResolver = Od;
    this.features = {};
    this.valueSubscriptions = new Map();
    this.prevMotionValues = {};
    this.hasBeenMounted = false;
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (this.current) {
        this.triggerBuild();
        this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
      }
    };
    this.renderScheduledAt = 0;
    this.scheduleRender = () => {
      const E = ft.now();
      if (this.renderScheduledAt < E) {
        this.renderScheduledAt = E;
        Me.render(this.render, false, true);
      }
    };
    const {
      latestValues: y,
      renderState: v
    } = m;
    this.latestValues = y;
    this.baseTarget = {
      ...y
    };
    this.initialValues = l.initial ? {
      ...y
    } : {};
    this.renderState = v;
    this.parent = a;
    this.props = l;
    this.presenceContext = r;
    this.depth = a ? a.depth + 1 : 0;
    this.reducedMotionConfig = u;
    this.skipAnimationsConfig = d;
    this.options = p;
    this.blockInitialAnimation = !!f;
    this.isControllingVariants = Kr(l);
    this.isVariantNode = cv(l);
    if (this.isVariantNode) {
      this.variantChildren = new Set();
    }
    this.manuallyAnimateOnMount = !!a && !!a.current;
    const {
      willChange: b,
      ...S
    } = this.scrapeMotionValuesFromProps(l, {}, this);
    for (const E in S) {
      const j = S[E];
      if (y[E] !== undefined && rt(j)) {
        j.set(y[E]);
      }
    }
  }
  mount(a) {
    var l;
    var r;
    if (this.hasBeenMounted) {
      for (const u in this.initialValues) {
        if ((l = this.values.get(u)) != null) {
          l.jump(this.initialValues[u]);
        }
        this.latestValues[u] = this.initialValues[u];
      }
    }
    this.current = a;
    x2.set(a, this);
    if (this.projection && !this.projection.instance) {
      this.projection.mount(a);
    }
    if (this.parent && this.isVariantNode && !this.isControllingVariants) {
      this.removeFromVariantTree = this.parent.addVariantChild(this);
    }
    this.values.forEach((u, d) => this.bindToMotionValue(d, u));
    if (this.reducedMotionConfig === "never") {
      this.shouldReduceMotion = false;
    } else if (this.reducedMotionConfig === "always") {
      this.shouldReduceMotion = true;
    } else {
      if (!dv.current) {
        T2();
      }
      this.shouldReduceMotion = rd.current;
    }
    this.shouldSkipAnimations = this.skipAnimationsConfig ?? false;
    if ((r = this.parent) != null) {
      r.addChild(this);
    }
    this.update(this.props, this.presenceContext);
    this.hasBeenMounted = true;
  }
  unmount() {
    var a;
    if (this.projection) {
      this.projection.unmount();
    }
    ai(this.notifyUpdate);
    ai(this.render);
    this.valueSubscriptions.forEach(l => l());
    this.valueSubscriptions.clear();
    if (this.removeFromVariantTree) {
      this.removeFromVariantTree();
    }
    if ((a = this.parent) != null) {
      a.removeChild(this);
    }
    for (const l in this.events) {
      this.events[l].clear();
    }
    for (const l in this.features) {
      const r = this.features[l];
      if (r) {
        r.unmount();
        r.isMounted = false;
      }
    }
    this.current = null;
  }
  addChild(a) {
    this.children.add(a);
    this.enteringChildren ??= new Set();
    this.enteringChildren.add(a);
  }
  removeChild(a) {
    this.children.delete(a);
    if (this.enteringChildren) {
      this.enteringChildren.delete(a);
    }
  }
  bindToMotionValue(a, l) {
    if (this.valueSubscriptions.has(a)) {
      this.valueSubscriptions.get(a)();
    }
    if (l.accelerate && Y0.has(a) && this.current instanceof HTMLElement) {
      const {
        factory: f,
        keyframes: m,
        times: p,
        ease: y,
        duration: v
      } = l.accelerate;
      const b = new K0({
        element: this.current,
        name: a,
        keyframes: m,
        times: p,
        ease: y,
        duration: Mt(v)
      });
      const S = f(b);
      this.valueSubscriptions.set(a, () => {
        S();
        b.cancel();
      });
      return;
    }
    const r = Ma.has(a);
    if (r && this.onBindTransform) {
      this.onBindTransform();
    }
    const u = l.on("change", f => {
      this.latestValues[a] = f;
      if (this.props.onUpdate) {
        Me.preRender(this.notifyUpdate);
      }
      if (r && this.projection) {
        this.projection.isTransformDirty = true;
      }
      this.scheduleRender();
    });
    let d;
    if (typeof window !== "undefined" && window.MotionCheckAppearSync) {
      d = window.MotionCheckAppearSync(this, a, l);
    }
    this.valueSubscriptions.set(a, () => {
      u();
      if (d) {
        d();
      }
    });
  }
  sortNodePosition(a) {
    if (!this.current || !this.sortInstanceNodePosition || this.type !== a.type) {
      return 0;
    } else {
      return this.sortInstanceNodePosition(this.current, a.current);
    }
  }
  updateFeatures() {
    let a = "animation";
    for (a in Lr) {
      const l = Lr[a];
      if (!l) {
        continue;
      }
      const {
        isEnabled: r,
        Feature: u
      } = l;
      if (!this.features[a] && u && r(this.props)) {
        this.features[a] = new u(this);
      }
      if (this.features[a]) {
        const d = this.features[a];
        if (d.isMounted) {
          d.update();
        } else {
          d.mount();
          d.isMounted = true;
        }
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    if (this.current) {
      return this.measureInstanceViewportBox(this.current, this.props);
    } else {
      return Ie();
    }
  }
  getStaticValue(a) {
    return this.latestValues[a];
  }
  setStaticValue(a, l) {
    this.latestValues[a] = l;
  }
  update(a, l) {
    if (a.transformTemplate || this.props.transformTemplate) {
      this.scheduleRender();
    }
    this.prevProps = this.props;
    this.props = a;
    this.prevPresenceContext = this.presenceContext;
    this.presenceContext = l;
    for (let r = 0; r < Qg.length; r++) {
      const u = Qg[r];
      if (this.propEventSubscriptions[u]) {
        this.propEventSubscriptions[u]();
        delete this.propEventSubscriptions[u];
      }
      const d = "on" + u;
      const f = a[d];
      if (f) {
        this.propEventSubscriptions[u] = this.on(u, f);
      }
    }
    this.prevMotionValues = S2(this, this.scrapeMotionValuesFromProps(a, this.prevProps || {}, this), this.prevMotionValues);
    if (this.handleChildMotionValue) {
      this.handleChildMotionValue();
    }
  }
  getProps() {
    return this.props;
  }
  getVariant(a) {
    if (this.props.variants) {
      return this.props.variants[a];
    } else {
      return undefined;
    }
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    if (this.isVariantNode) {
      return this;
    } else if (this.parent) {
      return this.parent.getClosestVariantNode();
    } else {
      return undefined;
    }
  }
  addVariantChild(a) {
    const l = this.getClosestVariantNode();
    if (l) {
      if (l.variantChildren) {
        l.variantChildren.add(a);
      }
      return () => l.variantChildren.delete(a);
    }
  }
  addValue(a, l) {
    const r = this.values.get(a);
    if (l !== r) {
      if (r) {
        this.removeValue(a);
      }
      this.bindToMotionValue(a, l);
      this.values.set(a, l);
      this.latestValues[a] = l.get();
    }
  }
  removeValue(a) {
    this.values.delete(a);
    const l = this.valueSubscriptions.get(a);
    if (l) {
      l();
      this.valueSubscriptions.delete(a);
    }
    delete this.latestValues[a];
    this.removeValueFromRenderState(a, this.renderState);
  }
  hasValue(a) {
    return this.values.has(a);
  }
  getValue(a, l) {
    if (this.props.values && this.props.values[a]) {
      return this.props.values[a];
    }
    let r = this.values.get(a);
    if (r === undefined && l !== undefined) {
      r = Ra(l === null ? undefined : l, {
        owner: this
      });
      this.addValue(a, r);
    }
    return r;
  }
  readValue(a, l) {
    let r = this.latestValues[a] !== undefined || !this.current ? this.latestValues[a] : this.getBaseTargetFromProps(this.props, a) ?? this.readValueFromInstance(this.current, a, this.options);
    if (r != null) {
      if (typeof r == "string" && (d0(r) || h0(r))) {
        r = parseFloat(r);
      } else if (!b2(r) && $t.test(l)) {
        r = av(a, l);
      }
      this.setBaseTarget(a, rt(r) ? r.get() : r);
    }
    if (rt(r)) {
      return r.get();
    } else {
      return r;
    }
  }
  setBaseTarget(a, l) {
    this.baseTarget[a] = l;
  }
  getBaseTarget(a) {
    var d;
    const {
      initial: l
    } = this.props;
    let r;
    if (typeof l == "string" || typeof l == "object") {
      const f = _d(this.props, l, (d = this.presenceContext) == null ? undefined : d.custom);
      if (f) {
        r = f[a];
      }
    }
    if (l && r !== undefined) {
      return r;
    }
    const u = this.getBaseTargetFromProps(this.props, a);
    if (u !== undefined && !rt(u)) {
      return u;
    } else if (this.initialValues[a] !== undefined && r === undefined) {
      return undefined;
    } else {
      return this.baseTarget[a];
    }
  }
  on(a, l) {
    this.events[a] ||= new jd();
    return this.events[a].add(l);
  }
  notify(a, ...l) {
    if (this.events[a]) {
      this.events[a].notify(...l);
    }
  }
  scheduleRenderMicrotask() {
    Ud.render(this.render);
  }
}
class hv extends R2 {
  constructor() {
    super(...arguments);
    this.KeyframeResolver = JE;
  }
  sortInstanceNodePosition(a, l) {
    if (a.compareDocumentPosition(l) & 2) {
      return 1;
    } else {
      return -1;
    }
  }
  getBaseTargetFromProps(a, l) {
    const r = a.style;
    if (r) {
      return r[l];
    } else {
      return undefined;
    }
  }
  removeValueFromRenderState(a, {
    vars: l,
    style: r
  }) {
    delete l[a];
    delete r[a];
  }
  handleChildMotionValue() {
    if (this.childSubscription) {
      this.childSubscription();
      delete this.childSubscription;
    }
    const {
      children: a
    } = this.props;
    if (rt(a)) {
      this.childSubscription = a.on("change", l => {
        if (this.current) {
          this.current.textContent = `${l}`;
        }
      });
    }
  }
}
class li {
  constructor(a) {
    this.isMounted = false;
    this.node = a;
  }
  update() {}
}
function mv({
  top: n,
  left: a,
  right: l,
  bottom: r
}) {
  return {
    x: {
      min: a,
      max: l
    },
    y: {
      min: n,
      max: r
    }
  };
}
function A2({
  x: n,
  y: a
}) {
  return {
    top: a.min,
    right: n.max,
    bottom: a.max,
    left: n.min
  };
}
function j2(n, a) {
  if (!a) {
    return n;
  }
  const l = a({
    x: n.left,
    y: n.top
  });
  const r = a({
    x: n.right,
    y: n.bottom
  });
  return {
    top: l.y,
    left: l.x,
    bottom: r.y,
    right: r.x
  };
}
function kc(n) {
  return n === undefined || n === 1;
}
function od({
  scale: n,
  scaleX: a,
  scaleY: l
}) {
  return !kc(n) || !kc(a) || !kc(l);
}
function ji(n) {
  return od(n) || pv(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function pv(n) {
  return Gg(n.x) || Gg(n.y);
}
function Gg(n) {
  return n && n !== "0%";
}
function Or(n, a, l) {
  const r = n - l;
  const u = a * r;
  return l + u;
}
function Kg(n, a, l, r, u) {
  if (u !== undefined) {
    n = Or(n, u, r);
  }
  return Or(n, l, r) + a;
}
function ud(n, a = 0, l = 1, r, u) {
  n.min = Kg(n.min, a, l, r, u);
  n.max = Kg(n.max, a, l, r, u);
}
function gv(n, {
  x: a,
  y: l
}) {
  ud(n.x, a.translate, a.scale, a.originPoint);
  ud(n.y, l.translate, l.scale, l.originPoint);
}
const Fg = 0.999999999999;
const Yg = 1.0000000000001;
function C2(n, a, l, r = false) {
  var m;
  const u = l.length;
  if (!u) {
    return;
  }
  a.x = a.y = 1;
  let d;
  let f;
  for (let p = 0; p < u; p++) {
    d = l[p];
    f = d.projectionDelta;
    const {
      visualElement: y
    } = d.options;
    if (!y || !y.props.style || y.props.style.display !== "contents") {
      if (r && d.options.layoutScroll && d.scroll && d !== d.root) {
        rn(n.x, -d.scroll.offset.x);
        rn(n.y, -d.scroll.offset.y);
      }
      if (f) {
        a.x *= f.x.scale;
        a.y *= f.y.scale;
        gv(n, f);
      }
      if (r && ji(d.latestValues)) {
        wr(n, d.latestValues, (m = d.layout) == null ? undefined : m.layoutBox);
      }
    }
  }
  if (a.x < Yg && a.x > Fg) {
    a.x = 1;
  }
  if (a.y < Yg && a.y > Fg) {
    a.y = 1;
  }
}
function rn(n, a) {
  n.min += a;
  n.max += a;
}
function Wg(n, a, l, r, u = 0.5) {
  const d = ke(n.min, n.max, u);
  ud(n, a, l, d, r);
}
function Xg(n, a) {
  if (typeof n == "string") {
    return parseFloat(n) / 100 * (a.max - a.min);
  } else {
    return n;
  }
}
function wr(n, a, l) {
  const r = l ?? n;
  Wg(n.x, Xg(a.x, r.x), a.scaleX, a.scale, a.originX);
  Wg(n.y, Xg(a.y, r.y), a.scaleY, a.scale, a.originY);
}
function yv(n, a) {
  return mv(j2(n.getBoundingClientRect(), a));
}
function N2(n, a, l) {
  const r = yv(n, l);
  const {
    scroll: u
  } = a;
  if (u) {
    rn(r.x, u.offset.x);
    rn(r.y, u.offset.y);
  }
  return r;
}
const k2 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
const M2 = ka.length;
function z2(n, a, l) {
  let r = "";
  let u = true;
  for (let f = 0; f < M2; f++) {
    const m = ka[f];
    const p = n[m];
    if (p === undefined) {
      continue;
    }
    let y = true;
    if (typeof p == "number") {
      y = p === (m.startsWith("scale") ? 1 : 0);
    } else {
      const v = parseFloat(p);
      y = m.startsWith("scale") ? v === 1 : v === 0;
    }
    if (!y || l) {
      const v = ld(p, qr[m]);
      if (!y) {
        u = false;
        const b = k2[m] || m;
        r += `${b}(${v}) `;
      }
      if (l) {
        a[m] = v;
      }
    }
  }
  const d = n.pathRotation;
  if (d) {
    u = false;
    r += `rotate(${ld(d, qr.pathRotation)}) `;
  }
  r = r.trim();
  if (l) {
    r = l(a, u ? "" : r);
  } else if (u) {
    r = "none";
  }
  return r;
}
function Fd(n, a, l) {
  const {
    style: r,
    vars: u,
    transformOrigin: d
  } = n;
  let f = false;
  let m = false;
  for (const p in a) {
    const y = a[p];
    if (Ma.has(p)) {
      f = true;
      continue;
    } else if (C0(p)) {
      u[p] = y;
      continue;
    } else {
      const v = ld(y, qr[p]);
      if (p.startsWith("origin")) {
        m = true;
        d[p] = v;
      } else {
        r[p] = v;
      }
    }
  }
  if (!a.transform) {
    if (f || l) {
      r.transform = z2(a, n.transform, l);
    } else {
      r.transform &&= "none";
    }
  }
  if (m) {
    const {
      originX: p = "50%",
      originY: y = "50%",
      originZ: v = 0
    } = d;
    r.transformOrigin = `${p} ${y} ${v}`;
  }
}
function vv(n, {
  style: a,
  vars: l
}, r, u) {
  const d = n.style;
  let f;
  for (f in a) {
    d[f] = a[f];
  }
  if (u != null) {
    u.applyProjectionStyles(d, r);
  }
  for (f in l) {
    d.setProperty(f, l[f]);
  }
}
function Zg(n, a) {
  if (a.max === a.min) {
    return 0;
  } else {
    return n / (a.max - a.min) * 100;
  }
}
const Cs = {
  correct: (n, a) => {
    if (!a.target) {
      return n;
    }
    if (typeof n == "string") {
      if (I.test(n)) {
        n = parseFloat(n);
      } else {
        return n;
      }
    }
    const l = Zg(n, a.target.x);
    const r = Zg(n, a.target.y);
    return `${l}% ${r}%`;
  }
};
const D2 = {
  correct: (n, {
    treeScale: a,
    projectionDelta: l
  }) => {
    const r = n;
    const u = $t.parse(n);
    if (u.length > 5) {
      return r;
    }
    const d = $t.createTransformer(n);
    const f = typeof u[0] != "number" ? 1 : 0;
    const m = l.x.scale * a.x;
    const p = l.y.scale * a.y;
    u[0 + f] /= m;
    u[1 + f] /= p;
    const y = ke(m, p, 0.5);
    if (typeof u[2 + f] == "number") {
      u[2 + f] /= y;
    }
    if (typeof u[3 + f] == "number") {
      u[3 + f] /= y;
    }
    return d(u);
  }
};
const cd = {
  borderRadius: {
    ...Cs,
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  },
  borderTopLeftRadius: Cs,
  borderTopRightRadius: Cs,
  borderBottomLeftRadius: Cs,
  borderBottomRightRadius: Cs,
  boxShadow: D2
};
function bv(n, {
  layout: a,
  layoutId: l
}) {
  return Ma.has(n) || n.startsWith("origin") || (a || l !== undefined) && (!!cd[n] || n === "opacity");
}
function Yd(n, a, l) {
  var f;
  const r = n.style;
  const u = a == null ? undefined : a.style;
  const d = {};
  if (!r) {
    return d;
  }
  for (const m in r) {
    if (rt(r[m]) || u && rt(u[m]) || bv(m, n) || ((f = l == null ? undefined : l.getValue(m)) == null ? undefined : f.liveStyle) !== undefined) {
      d[m] = r[m];
    }
  }
  return d;
}
function q2(n) {
  return window.getComputedStyle(n);
}
class L2 extends hv {
  constructor() {
    super(...arguments);
    this.type = "html";
    this.renderInstance = vv;
  }
  readValueFromInstance(a, l) {
    var r;
    if (Ma.has(l)) {
      if ((r = this.projection) != null && r.isProjecting) {
        return Xc(l);
      } else {
        return tE(a, l);
      }
    }
    {
      const u = q2(a);
      const d = (C0(l) ? u.getPropertyValue(l) : u[l]) || 0;
      if (typeof d == "string") {
        return d.trim();
      } else {
        return d;
      }
    }
  }
  measureInstanceViewportBox(a, {
    transformPagePoint: l
  }) {
    return yv(a, l);
  }
  build(a, l, r) {
    Fd(a, l, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(a, l, r) {
    return Yd(a, l, r);
  }
}
const O2 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
const B2 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function V2(n, a, l = 1, r = 0, u = true) {
  n.pathLength = 1;
  const d = u ? O2 : B2;
  n[d.offset] = `${-r}`;
  n[d.array] = `${a} ${l}`;
}
const _2 = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function xv(n, {
  attrX: a,
  attrY: l,
  attrScale: r,
  pathLength: u,
  pathSpacing: d = 1,
  pathOffset: f = 0,
  ...m
}, p, y, v) {
  Fd(n, m, y);
  if (p) {
    if (n.style.viewBox) {
      n.attrs.viewBox = n.style.viewBox;
    }
    return;
  }
  n.attrs = n.style;
  n.style = {};
  const {
    attrs: b,
    style: S
  } = n;
  if (b.transform) {
    S.transform = b.transform;
    delete b.transform;
  }
  if (S.transform || b.transformOrigin) {
    S.transformOrigin = b.transformOrigin ?? "50% 50%";
    delete b.transformOrigin;
  }
  if (S.transform) {
    S.transformBox = (v == null ? undefined : v.transformBox) ?? "fill-box";
    delete b.transformBox;
  }
  for (const E of _2) {
    if (b[E] !== undefined) {
      S[E] = b[E];
      delete b[E];
    }
  }
  if (a !== undefined) {
    b.x = a;
  }
  if (l !== undefined) {
    b.y = l;
  }
  if (r !== undefined) {
    b.scale = r;
  }
  if (u !== undefined) {
    V2(b, u, d, f, false);
  }
}
const Sv = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
const wv = n => typeof n == "string" && n.toLowerCase() === "svg";
function P2(n, a, l, r) {
  vv(n, a, undefined, r);
  for (const u in a.attrs) {
    n.setAttribute(Sv.has(u) ? u : Pd(u), a.attrs[u]);
  }
}
function Tv(n, a, l) {
  const r = Yd(n, a, l);
  for (const u in n) {
    if (rt(n[u]) || rt(a[u])) {
      const d = ka.indexOf(u) !== -1 ? "attr" + u.charAt(0).toUpperCase() + u.substring(1) : u;
      r[d] = n[u];
    }
  }
  return r;
}
class U2 extends hv {
  constructor() {
    super(...arguments);
    this.type = "svg";
    this.isSVGTag = false;
    this.measureInstanceViewportBox = Ie;
  }
  getBaseTargetFromProps(a, l) {
    return a[l];
  }
  readValueFromInstance(a, l) {
    if (Ma.has(l)) {
      const r = iv(l);
      return r && r.default || 0;
    }
    l = Sv.has(l) ? l : Pd(l);
    return a.getAttribute(l);
  }
  scrapeMotionValuesFromProps(a, l, r) {
    return Tv(a, l, r);
  }
  build(a, l, r) {
    xv(a, l, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(a, l, r, u) {
    P2(a, l, r, u);
  }
  mount(a) {
    this.isSVGTag = wv(a.tagName);
    super.mount(a);
  }
}
const H2 = Kd.length;
function Ev(n) {
  if (!n) {
    return;
  }
  if (!n.isControllingVariants) {
    const l = n.parent ? Ev(n.parent) || {} : {};
    if (n.props.initial !== undefined) {
      l.initial = n.props.initial;
    }
    return l;
  }
  const a = {};
  for (let l = 0; l < H2; l++) {
    const r = Kd[l];
    const u = n.props[r];
    if (Bs(u) || u === false) {
      a[r] = u;
    }
  }
  return a;
}
function Rv(n, a) {
  if (!Array.isArray(a)) {
    return false;
  }
  const l = a.length;
  if (l !== n.length) {
    return false;
  }
  for (let r = 0; r < l; r++) {
    if (a[r] !== n[r]) {
      return false;
    }
  }
  return true;
}
const Q2 = [...Gd].reverse();
const G2 = Gd.length;
function K2(n) {
  return a => Promise.all(a.map(({
    animation: l,
    options: r
  }) => HE(n, l, r)));
}
function F2(n) {
  let a = K2(n);
  let l = Ig();
  let r = true;
  let u = false;
  const d = y => (v, b) => {
    var E;
    const S = Mi(n, b, y === "exit" ? (E = n.presenceContext) == null ? undefined : E.custom : undefined);
    if (S) {
      const {
        transition: j,
        transitionEnd: M,
        ...k
      } = S;
      v = {
        ...v,
        ...k,
        ...M
      };
    }
    return v;
  };
  function f(y) {
    a = y(n);
  }
  function m(y) {
    const {
      props: v
    } = n;
    const b = Ev(n.parent) || {};
    const S = [];
    const E = new Set();
    let j = {};
    let M = Infinity;
    for (let N = 0; N < G2; N++) {
      const _ = Q2[N];
      const L = l[_];
      const U = v[_] !== undefined ? v[_] : b[_];
      const K = Bs(U);
      const te = _ === y ? L.isActive : null;
      if (te === false) {
        M = N;
      }
      let G = U === b[_] && U !== v[_] && K;
      if (G && (r || u) && n.manuallyAnimateOnMount) {
        G = false;
      }
      L.protectedKeys = {
        ...j
      };
      if (!L.isActive && te === null || !U && !L.prevProp || Gr(U) || typeof U == "boolean") {
        continue;
      }
      if (_ === "exit" && L.isActive && te !== true) {
        if (L.prevResolvedValues) {
          j = {
            ...j,
            ...L.prevResolvedValues
          };
        }
        continue;
      }
      const F = Y2(L.prevProp, U);
      let ne = F || _ === y && L.isActive && !G && K || N > M && K;
      let J = false;
      const ce = Array.isArray(U) ? U : [U];
      let ve = ce.reduce(d(_), {});
      if (te === false) {
        ve = {};
      }
      const {
        prevResolvedValues: Ge = {}
      } = L;
      const Oe = {
        ...Ge,
        ...ve
      };
      const we = X => {
        ne = true;
        if (E.has(X)) {
          J = true;
          E.delete(X);
        }
        L.needsAnimating[X] = true;
        const oe = n.getValue(X);
        if (oe) {
          oe.liveStyle = false;
        }
      };
      for (const X in Oe) {
        const oe = ve[X];
        const ge = Ge[X];
        if (j.hasOwnProperty(X)) {
          continue;
        }
        let A = false;
        if (td(oe) && td(ge)) {
          A = !Rv(oe, ge) || F;
        } else {
          A = oe !== ge;
        }
        if (A) {
          if (oe != null) {
            we(X);
          } else {
            E.add(X);
          }
        } else if (oe !== undefined && E.has(X)) {
          we(X);
        } else {
          L.protectedKeys[X] = true;
        }
      }
      L.prevProp = U;
      L.prevResolvedValues = ve;
      if (L.isActive) {
        j = {
          ...j,
          ...ve
        };
      }
      if ((r || u) && n.blockInitialAnimation) {
        ne = false;
      }
      const B = G && F;
      if (ne && (!B || J)) {
        S.push(...ce.map(X => {
          const oe = {
            type: _
          };
          if (typeof X == "string" && (r || u) && !B && n.manuallyAnimateOnMount && n.parent) {
            const {
              parent: ge
            } = n;
            const A = Mi(ge, X);
            if (ge.enteringChildren && A) {
              const {
                delayChildren: Q
              } = A.transition || {};
              oe.delay = W0(ge.enteringChildren, n, Q);
            }
          }
          return {
            animation: X,
            options: oe
          };
        }));
      }
    }
    if (E.size) {
      const N = {};
      if (typeof v.initial != "boolean") {
        const _ = Mi(n, Array.isArray(v.initial) ? v.initial[0] : v.initial);
        if (_ && _.transition) {
          N.transition = _.transition;
        }
      }
      E.forEach(_ => {
        const L = n.getBaseTarget(_);
        const U = n.getValue(_);
        if (U) {
          U.liveStyle = true;
        }
        N[_] = L ?? null;
      });
      S.push({
        animation: N
      });
    }
    let k = !!S.length;
    if (r && (v.initial === false || v.initial === v.animate) && !n.manuallyAnimateOnMount) {
      k = false;
    }
    r = false;
    u = false;
    if (k) {
      return a(S);
    } else {
      return Promise.resolve();
    }
  }
  function p(y, v) {
    var S;
    if (l[y].isActive === v) {
      return Promise.resolve();
    }
    if ((S = n.variantChildren) != null) {
      S.forEach(E => {
        var j;
        if ((j = E.animationState) == null) {
          return undefined;
        } else {
          return j.setActive(y, v);
        }
      });
    }
    l[y].isActive = v;
    const b = m(y);
    for (const E in l) {
      l[E].protectedKeys = {};
    }
    return b;
  }
  return {
    animateChanges: m,
    setActive: p,
    setAnimateFunction: f,
    getState: () => l,
    reset: () => {
      l = Ig();
      u = true;
    }
  };
}
function Y2(n, a) {
  if (typeof a == "string") {
    return a !== n;
  } else if (Array.isArray(a)) {
    return !Rv(a, n);
  } else {
    return false;
  }
}
function Ai(n = false) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Ig() {
  return {
    animate: Ai(true),
    whileInView: Ai(),
    whileHover: Ai(),
    whileTap: Ai(),
    whileDrag: Ai(),
    whileFocus: Ai(),
    exit: Ai()
  };
}
function dd(n, a) {
  n.min = a.min;
  n.max = a.max;
}
function Xt(n, a) {
  dd(n.x, a.x);
  dd(n.y, a.y);
}
function $g(n, a) {
  n.translate = a.translate;
  n.scale = a.scale;
  n.originPoint = a.originPoint;
  n.origin = a.origin;
}
const Av = 0.0001;
const W2 = 1 - Av;
const X2 = 1 + Av;
const jv = 0.01;
const Z2 = 0 - jv;
const I2 = 0 + jv;
function ht(n) {
  return n.max - n.min;
}
function $2(n, a, l) {
  return Math.abs(n - a) <= l;
}
function Jg(n, a, l, r = 0.5) {
  n.origin = r;
  n.originPoint = ke(a.min, a.max, n.origin);
  n.scale = ht(l) / ht(a);
  n.translate = ke(l.min, l.max, n.origin) - n.originPoint;
  if (n.scale >= W2 && n.scale <= X2 || isNaN(n.scale)) {
    n.scale = 1;
  }
  if (n.translate >= Z2 && n.translate <= I2 || isNaN(n.translate)) {
    n.translate = 0;
  }
}
function zs(n, a, l, r) {
  Jg(n.x, a.x, l.x, r ? r.originX : undefined);
  Jg(n.y, a.y, l.y, r ? r.originY : undefined);
}
function ey(n, a, l, r = 0) {
  const u = r ? ke(l.min, l.max, r) : l.min;
  n.min = u + a.min;
  n.max = n.min + ht(a);
}
function J2(n, a, l, r) {
  ey(n.x, a.x, l.x, r == null ? undefined : r.x);
  ey(n.y, a.y, l.y, r == null ? undefined : r.y);
}
function ty(n, a, l, r = 0) {
  const u = r ? ke(l.min, l.max, r) : l.min;
  n.min = a.min - u;
  n.max = n.min + ht(a);
}
function Br(n, a, l, r) {
  ty(n.x, a.x, l.x, r == null ? undefined : r.x);
  ty(n.y, a.y, l.y, r == null ? undefined : r.y);
}
function ny(n, a, l, r, u) {
  n -= a;
  n = Or(n, 1 / l, r);
  if (u !== undefined) {
    n = Or(n, 1 / u, r);
  }
  return n;
}
function eR(n, a = 0, l = 1, r = 0.5, u, d = n, f = n) {
  if (on.test(a)) {
    a = parseFloat(a);
    a = ke(f.min, f.max, a / 100) - f.min;
  }
  if (typeof a != "number") {
    return;
  }
  let m = ke(d.min, d.max, r);
  if (n === d) {
    m -= a;
  }
  n.min = ny(n.min, a, l, m, u);
  n.max = ny(n.max, a, l, m, u);
}
function iy(n, a, [l, r, u], d, f) {
  eR(n, a[l], a[r], a[u], a.scale, d, f);
}
const tR = ["x", "scaleX", "originX"];
const nR = ["y", "scaleY", "originY"];
function ay(n, a, l, r) {
  iy(n.x, a, tR, l ? l.x : undefined, r ? r.x : undefined);
  iy(n.y, a, nR, l ? l.y : undefined, r ? r.y : undefined);
}
function sy(n) {
  return n.translate === 0 && n.scale === 1;
}
function Cv(n) {
  return sy(n.x) && sy(n.y);
}
function ly(n, a) {
  return n.min === a.min && n.max === a.max;
}
function iR(n, a) {
  return ly(n.x, a.x) && ly(n.y, a.y);
}
function ry(n, a) {
  return Math.round(n.min) === Math.round(a.min) && Math.round(n.max) === Math.round(a.max);
}
function Nv(n, a) {
  return ry(n.x, a.x) && ry(n.y, a.y);
}
function oy(n) {
  return ht(n.x) / ht(n.y);
}
function uy(n, a) {
  return n.translate === a.translate && n.scale === a.scale && n.originPoint === a.originPoint;
}
function ln(n) {
  return [n("x"), n("y")];
}
function aR(n, a, l) {
  let r = "";
  const u = n.x.translate / a.x;
  const d = n.y.translate / a.y;
  const f = (l == null ? undefined : l.z) || 0;
  if (u || d || f) {
    r = `translate3d(${u}px, ${d}px, ${f}px) `;
  }
  if (a.x !== 1 || a.y !== 1) {
    r += `scale(${1 / a.x}, ${1 / a.y}) `;
  }
  if (l) {
    const {
      transformPerspective: y,
      rotate: v,
      pathRotation: b,
      rotateX: S,
      rotateY: E,
      skewX: j,
      skewY: M
    } = l;
    if (y) {
      r = `perspective(${y}px) ${r}`;
    }
    if (v) {
      r += `rotate(${v}deg) `;
    }
    if (b) {
      r += `rotate(${b}deg) `;
    }
    if (S) {
      r += `rotateX(${S}deg) `;
    }
    if (E) {
      r += `rotateY(${E}deg) `;
    }
    if (j) {
      r += `skewX(${j}deg) `;
    }
    if (M) {
      r += `skewY(${M}deg) `;
    }
  }
  const m = n.x.scale * a.x;
  const p = n.y.scale * a.y;
  if (m !== 1 || p !== 1) {
    r += `scale(${m}, ${p})`;
  }
  return r || "none";
}
const kv = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"];
const sR = kv.length;
const cy = n => typeof n == "string" ? parseFloat(n) : n;
const dy = n => typeof n == "number" || I.test(n);
function lR(n, a, l, r, u, d) {
  if (u) {
    n.opacity = ke(0, l.opacity ?? 1, rR(r));
    n.opacityExit = ke(a.opacity ?? 1, 0, oR(r));
  } else if (d) {
    n.opacity = ke(a.opacity ?? 1, l.opacity ?? 1, r);
  }
  for (let f = 0; f < sR; f++) {
    const m = kv[f];
    let p = fy(a, m);
    let y = fy(l, m);
    if (p === undefined && y === undefined) {
      continue;
    }
    p ||= 0;
    y ||= 0;
    if (p === 0 || y === 0 || dy(p) === dy(y)) {
      n[m] = Math.max(ke(cy(p), cy(y), r), 0);
      if (on.test(y) || on.test(p)) {
        n[m] += "%";
      }
    } else {
      n[m] = y;
    }
  }
  if (a.rotate || l.rotate) {
    n.rotate = ke(a.rotate || 0, l.rotate || 0, r);
  }
}
function fy(n, a) {
  if (n[a] !== undefined) {
    return n[a];
  } else {
    return n.borderRadius;
  }
}
const rR = Mv(0, 0.5, w0);
const oR = Mv(0.5, 0.95, Gt);
function Mv(n, a, l) {
  return r => r < n ? 0 : r > a ? 1 : l(Ls(n, a, r));
}
function uR(n, a, l) {
  const r = rt(n) ? n : Ra(n);
  r.start(Vd("", r, a, l));
  return r.animation;
}
function Vs(n, a, l, r = {
  passive: true
}) {
  n.addEventListener(a, l, r);
  return () => n.removeEventListener(a, l);
}
const cR = (n, a) => n.depth - a.depth;
class dR {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(a) {
    Rd(this.children, a);
    this.isDirty = true;
  }
  remove(a) {
    Nr(this.children, a);
    this.isDirty = true;
  }
  forEach(a) {
    if (this.isDirty) {
      this.children.sort(cR);
    }
    this.isDirty = false;
    this.children.forEach(a);
  }
}
function fR(n, a) {
  const l = ft.now();
  const r = ({
    timestamp: u
  }) => {
    const d = u - l;
    if (d >= a) {
      ai(r);
      n(d - a);
    }
  };
  Me.setup(r, true);
  return () => ai(r);
}
function Tr(n) {
  if (rt(n)) {
    return n.get();
  } else {
    return n;
  }
}
class hR {
  constructor() {
    this.members = [];
  }
  add(a) {
    Rd(this.members, a);
    for (let l = this.members.length - 1; l >= 0; l--) {
      const r = this.members[l];
      if (r === a || r === this.lead || r === this.prevLead) {
        continue;
      }
      const u = r.instance;
      if ((!u || u.isConnected === false) && !r.snapshot) {
        Nr(this.members, r);
        r.unmount();
      }
    }
    a.scheduleRender();
  }
  remove(a) {
    Nr(this.members, a);
    if (a === this.prevLead) {
      this.prevLead = undefined;
    }
    if (a === this.lead) {
      const l = this.members[this.members.length - 1];
      if (l) {
        this.promote(l);
      }
    }
  }
  relegate(a) {
    var l;
    for (let r = this.members.indexOf(a) - 1; r >= 0; r--) {
      const u = this.members[r];
      if (u.isPresent !== false && ((l = u.instance) == null ? undefined : l.isConnected) !== false) {
        this.promote(u);
        return true;
      }
    }
    return false;
  }
  promote(a, l) {
    var u;
    const r = this.lead;
    if (a !== r && (this.prevLead = r, this.lead = a, a.show(), r)) {
      r.updateSnapshot();
      a.scheduleRender();
      const {
        layoutDependency: d
      } = r.options;
      const {
        layoutDependency: f
      } = a.options;
      if (d === undefined || d !== f) {
        a.resumeFrom = r;
        if (l) {
          r.preserveOpacity = true;
        }
        if (r.snapshot) {
          a.snapshot = r.snapshot;
          a.snapshot.latestValues = r.animationValues || r.latestValues;
        }
        if ((u = a.root) != null && u.isUpdating) {
          a.isLayoutDirty = true;
        }
      }
      if (a.options.crossfade === false) {
        r.hide();
      }
    }
  }
  exitAnimationComplete() {
    this.members.forEach(a => {
      var l;
      var r;
      var u;
      var d;
      var f;
      if ((r = (l = a.options).onExitComplete) != null) {
        r.call(l);
      }
      if ((f = (u = a.resumingFrom) == null ? undefined : (d = u.options).onExitComplete) != null) {
        f.call(d);
      }
    });
  }
  scheduleRender() {
    this.members.forEach(a => a.instance && a.scheduleRender(false));
  }
  removeLeadSnapshot() {
    var a;
    if ((a = this.lead) != null && a.snapshot) {
      this.lead.snapshot = undefined;
    }
  }
}
const Er = {
  hasAnimatedSinceResize: true,
  hasEverUpdated: false
};
const Mc = ["", "X", "Y", "Z"];
const mR = 1000;
let pR = 0;
function zc(n, a, l, r) {
  const {
    latestValues: u
  } = a;
  if (u[n]) {
    l[n] = u[n];
    a.setStaticValue(n, 0);
    if (r) {
      r[n] = 0;
    }
  }
}
function zv(n) {
  n.hasCheckedOptimisedAppear = true;
  if (n.root === n) {
    return;
  }
  const {
    visualElement: a
  } = n.options;
  if (!a) {
    return;
  }
  const l = J0(a);
  if (window.MotionHasOptimisedAnimation(l, "transform")) {
    const {
      layout: u,
      layoutId: d
    } = n.options;
    window.MotionCancelOptimisedAnimation(l, "transform", Me, !u && !d);
  }
  const {
    parent: r
  } = n;
  if (r && !r.hasCheckedOptimisedAppear) {
    zv(r);
  }
}
function Dv({
  attachResizeListener: n,
  defaultParent: a,
  measureScroll: l,
  checkIsScrollRoot: r,
  resetTransform: u
}) {
  return class {
    constructor(f = {}, m = a == null ? undefined : a()) {
      this.id = pR++;
      this.animationId = 0;
      this.animationCommitId = 0;
      this.children = new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.isProjectionDirty = false;
      this.isSharedProjectionDirty = false;
      this.isTransformDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.hasCheckedOptimisedAppear = false;
      this.treeScale = {
        x: 1,
        y: 1
      };
      this.eventHandlers = new Map();
      this.hasTreeAnimated = false;
      this.layoutVersion = 0;
      this.updateScheduled = false;
      this.scheduleUpdate = () => this.update();
      this.projectionUpdateScheduled = false;
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.projectionUpdateScheduled = false;
        this.nodes.forEach(vR);
        this.nodes.forEach(ER);
        this.nodes.forEach(RR);
        this.nodes.forEach(bR);
      };
      this.resolvedRelativeTargetAt = 0;
      this.linkedParentVersion = 0;
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = new Map();
      this.latestValues = f;
      this.root = m ? m.root || m : this;
      this.path = m ? [...m.path, m] : [];
      this.parent = m;
      this.depth = m ? m.depth + 1 : 0;
      for (let p = 0; p < this.path.length; p++) {
        this.path[p].shouldResetTransform = true;
      }
      if (this.root === this) {
        this.nodes = new dR();
      }
    }
    addEventListener(f, m) {
      if (!this.eventHandlers.has(f)) {
        this.eventHandlers.set(f, new jd());
      }
      return this.eventHandlers.get(f).add(m);
    }
    notifyListeners(f, ...m) {
      const p = this.eventHandlers.get(f);
      if (p) {
        p.notify(...m);
      }
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) {
        return;
      }
      this.isSVG = Qd(f) && !y2(f);
      this.instance = f;
      const {
        layoutId: m,
        layout: p,
        visualElement: y
      } = this.options;
      if (y && !y.current) {
        y.mount(f);
      }
      this.root.nodes.add(this);
      if (this.parent) {
        this.parent.children.add(this);
      }
      if (this.root.hasTreeAnimated && (p || m)) {
        this.isLayoutDirty = true;
      }
      if (n) {
        let v;
        let b = 0;
        const S = () => this.root.updateBlockedByResize = false;
        Me.read(() => {
          b = window.innerWidth;
        });
        n(f, () => {
          const E = window.innerWidth;
          if (E !== b) {
            b = E;
            this.root.updateBlockedByResize = true;
            if (v) {
              v();
            }
            v = fR(S, 250);
            if (Er.hasAnimatedSinceResize) {
              Er.hasAnimatedSinceResize = false;
              this.nodes.forEach(py);
            }
          }
        });
      }
      if (m) {
        this.root.registerSharedNode(m, this);
      }
      if (this.options.animate !== false && y && (m || p)) {
        this.addEventListener("didUpdate", ({
          delta: v,
          hasLayoutChanged: b,
          hasRelativeLayoutChanged: S,
          layout: E
        }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = undefined;
            this.relativeTarget = undefined;
            return;
          }
          const j = this.options.transition || y.getDefaultTransition() || kR;
          const {
            onLayoutAnimationStart: M,
            onLayoutAnimationComplete: k
          } = y.getProps();
          const N = !this.targetLayout || !Nv(this.targetLayout, E);
          const _ = !b && S;
          if (this.options.layoutRoot || this.resumeFrom || _ || b && (N || !this.currentAnimation)) {
            if (this.resumeFrom) {
              this.resumingFrom = this.resumeFrom;
              this.resumingFrom.resumingFrom = undefined;
            }
            const L = {
              ...Bd(j, "layout"),
              onPlay: M,
              onComplete: k
            };
            if (y.shouldReduceMotion || this.options.layoutRoot) {
              L.delay = 0;
              L.type = false;
            }
            this.startAnimation(L);
            this.setAnimationOrigin(v, _, L.path);
          } else {
            if (!b) {
              py(this);
            }
            if (this.isLead() && this.options.onExitComplete) {
              this.options.onExitComplete();
            }
          }
          this.targetLayout = E;
        });
      }
    }
    unmount() {
      if (this.options.layoutId) {
        this.willUpdate();
      }
      this.root.nodes.remove(this);
      const f = this.getStack();
      if (f) {
        f.remove(this);
      }
      if (this.parent) {
        this.parent.children.delete(this);
      }
      this.instance = undefined;
      this.eventHandlers.clear();
      ai(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    startUpdate() {
      if (!this.isUpdateBlocked()) {
        this.isUpdating = true;
        if (this.nodes) {
          this.nodes.forEach(AR);
        }
        this.animationId++;
      }
    }
    getTransformTemplate() {
      const {
        visualElement: f
      } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = true) {
      this.root.hasTreeAnimated = true;
      if (this.root.isUpdateBlocked()) {
        if (this.options.onExitComplete) {
          this.options.onExitComplete();
        }
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
        zv(this);
      }
      if (!this.root.isUpdating) {
        this.root.startUpdate();
      }
      if (this.isLayoutDirty) {
        return;
      }
      this.isLayoutDirty = true;
      for (let v = 0; v < this.path.length; v++) {
        const b = this.path[v];
        b.shouldResetTransform = true;
        if (typeof b.latestValues.x == "string" || typeof b.latestValues.y == "string") {
          b.isLayoutDirty = true;
        }
        b.updateScroll("snapshot");
        if (b.options.layoutRoot) {
          b.willUpdate(false);
        }
      }
      const {
        layoutId: m,
        layout: p
      } = this.options;
      if (m === undefined && !p) {
        return;
      }
      const y = this.getTransformTemplate();
      this.prevTransformTemplateValue = y ? y(this.latestValues, "") : undefined;
      this.updateSnapshot();
      if (f) {
        this.notifyListeners("willUpdate");
      }
    }
    update() {
      this.updateScheduled = false;
      if (this.isUpdateBlocked()) {
        const p = this.updateBlockedByResize;
        this.unblockUpdate();
        this.updateBlockedByResize = false;
        this.clearAllSnapshots();
        if (p) {
          this.nodes.forEach(SR);
        }
        this.nodes.forEach(hy);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(my);
        return;
      }
      this.animationCommitId = this.animationId;
      if (this.isUpdating) {
        this.isUpdating = false;
        this.nodes.forEach(wR);
        this.nodes.forEach(TR);
        this.nodes.forEach(gR);
        this.nodes.forEach(yR);
      } else {
        this.nodes.forEach(my);
      }
      this.clearAllSnapshots();
      const m = ft.now();
      lt.delta = un(0, 1000 / 60, m - lt.timestamp);
      lt.timestamp = m;
      lt.isProcessing = true;
      Tc.update.process(lt);
      Tc.preRender.process(lt);
      Tc.render.process(lt);
      lt.isProcessing = false;
    }
    didUpdate() {
      if (!this.updateScheduled) {
        this.updateScheduled = true;
        Ud.read(this.scheduleUpdate);
      }
    }
    clearAllSnapshots() {
      this.nodes.forEach(xR);
      this.sharedNodes.forEach(jR);
    }
    scheduleUpdateProjection() {
      if (!this.projectionUpdateScheduled) {
        this.projectionUpdateScheduled = true;
        Me.preRender(this.updateProjection, false, true);
      }
    }
    scheduleCheckAfterUnmount() {
      Me.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    updateSnapshot() {
      if (!this.snapshot && !!this.instance) {
        this.snapshot = this.measure();
        if (this.snapshot && !ht(this.snapshot.measuredBox.x) && !ht(this.snapshot.measuredBox.y)) {
          this.snapshot = undefined;
        }
      }
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), (!this.options.alwaysMeasureLayout || !this.isLead()) && !this.isLayoutDirty)) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let p = 0; p < this.path.length; p++) {
          this.path[p].updateScroll();
        }
      }
      const f = this.layout;
      this.layout = this.measure(false);
      this.layoutVersion++;
      this.layoutCorrected ||= Ie();
      this.isLayoutDirty = false;
      this.projectionDelta = undefined;
      this.notifyListeners("measure", this.layout.layoutBox);
      const {
        visualElement: m
      } = this.options;
      if (m) {
        m.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : undefined);
      }
    }
    updateScroll(f = "measure") {
      let m = !!this.options.layoutScroll && !!this.instance;
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f) {
        m = false;
      }
      if (m && this.instance) {
        const p = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: p,
          offset: l(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p
        };
      }
    }
    resetTransform() {
      if (!u) {
        return;
      }
      const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      const m = this.projectionDelta && !Cv(this.projectionDelta);
      const p = this.getTransformTemplate();
      const y = p ? p(this.latestValues, "") : undefined;
      const v = y !== this.prevTransformTemplateValue;
      if (f && this.instance && (m || ji(this.latestValues) || v)) {
        u(this.instance, y);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(f = true) {
      const m = this.measurePageBox();
      let p = this.removeElementScroll(m);
      if (f) {
        p = this.removeTransform(p);
      }
      MR(p);
      return {
        animationId: this.root.animationId,
        measuredBox: m,
        layoutBox: p,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var y;
      const {
        visualElement: f
      } = this.options;
      if (!f) {
        return Ie();
      }
      const m = f.measureViewportBox();
      if (!((y = this.scroll) == null ? undefined : y.wasRoot) && !this.path.some(zR)) {
        const {
          scroll: v
        } = this.root;
        if (v) {
          rn(m.x, v.offset.x);
          rn(m.y, v.offset.y);
        }
      }
      return m;
    }
    removeElementScroll(f) {
      var p;
      const m = Ie();
      Xt(m, f);
      if ((p = this.scroll) != null && p.wasRoot) {
        return m;
      }
      for (let y = 0; y < this.path.length; y++) {
        const v = this.path[y];
        const {
          scroll: b,
          options: S
        } = v;
        if (v !== this.root && b && S.layoutScroll) {
          if (b.wasRoot) {
            Xt(m, f);
          }
          rn(m.x, b.offset.x);
          rn(m.y, b.offset.y);
        }
      }
      return m;
    }
    applyTransform(f, m = false, p) {
      var v;
      var b;
      const y = p || Ie();
      Xt(y, f);
      for (let S = 0; S < this.path.length; S++) {
        const E = this.path[S];
        if (!m && E.options.layoutScroll && E.scroll && E !== E.root) {
          rn(y.x, -E.scroll.offset.x);
          rn(y.y, -E.scroll.offset.y);
        }
        if (ji(E.latestValues)) {
          wr(y, E.latestValues, (v = E.layout) == null ? undefined : v.layoutBox);
        }
      }
      if (ji(this.latestValues)) {
        wr(y, this.latestValues, (b = this.layout) == null ? undefined : b.layoutBox);
      }
      return y;
    }
    removeTransform(f) {
      var p;
      const m = Ie();
      Xt(m, f);
      for (let y = 0; y < this.path.length; y++) {
        const v = this.path[y];
        if (!ji(v.latestValues)) {
          continue;
        }
        let b;
        if (v.instance) {
          if (od(v.latestValues)) {
            v.updateSnapshot();
          }
          b = Ie();
          Xt(b, v.measurePageBox());
        }
        ay(m, v.latestValues, (p = v.snapshot) == null ? undefined : p.layoutBox, b);
      }
      if (ji(this.latestValues)) {
        ay(m, this.latestValues);
      }
      return m;
    }
    setTargetDelta(f) {
      this.targetDelta = f;
      this.root.scheduleUpdateProjection();
      this.isProjectionDirty = true;
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== undefined ? f.crossfade : true
      };
    }
    clearMeasurements() {
      this.scroll = undefined;
      this.layout = undefined;
      this.snapshot = undefined;
      this.prevTransformTemplateValue = undefined;
      this.targetDelta = undefined;
      this.target = undefined;
      this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      if (this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== lt.timestamp) {
        this.relativeParent.resolveTargetDelta(true);
      }
    }
    resolveTargetDelta(f = false) {
      var E;
      const m = this.getLead();
      this.isProjectionDirty ||= m.isProjectionDirty;
      this.isTransformDirty ||= m.isTransformDirty;
      this.isSharedProjectionDirty ||= m.isSharedProjectionDirty;
      const p = !!this.resumingFrom || this !== m;
      if (!f && (!p || !this.isSharedProjectionDirty) && !this.isProjectionDirty && ((E = this.parent) == null || !E.isProjectionDirty) && !this.attemptToResolveRelativeTarget && !this.root.updateBlockedByResize) {
        return;
      }
      const {
        layout: v,
        layoutId: b
      } = this.options;
      if (!this.layout || !v && !b) {
        return;
      }
      this.resolvedRelativeTargetAt = lt.timestamp;
      const S = this.getClosestProjectingParent();
      if (S && this.linkedParentVersion !== S.layoutVersion && !S.options.layoutRoot) {
        this.removeRelativeTarget();
      }
      if (!this.targetDelta && !this.relativeTarget) {
        if (this.options.layoutAnchor !== false && S && S.layout) {
          this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox);
        } else {
          this.removeRelativeTarget();
        }
      }
      if (!!this.relativeTarget || !!this.targetDelta) {
        if (!this.target) {
          this.target = Ie();
          this.targetWithTransforms = Ie();
        }
        if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
          this.forceRelativeParentToResolveTarget();
          J2(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || undefined);
        } else if (this.targetDelta) {
          if (this.resumingFrom) {
            this.applyTransform(this.layout.layoutBox, false, this.target);
          } else {
            Xt(this.target, this.layout.layoutBox);
          }
          gv(this.target, this.targetDelta);
        } else {
          Xt(this.target, this.layout.layoutBox);
        }
        if (this.attemptToResolveRelativeTarget) {
          this.attemptToResolveRelativeTarget = false;
          if (this.options.layoutAnchor !== false && S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1) {
            this.createRelativeTarget(S, this.target, S.target);
          } else {
            this.relativeParent = this.relativeTarget = undefined;
          }
        }
      }
    }
    getClosestProjectingParent() {
      if (!!this.parent && !od(this.parent.latestValues) && !pv(this.parent.latestValues)) {
        if (this.parent.isProjecting()) {
          return this.parent;
        } else {
          return this.parent.getClosestProjectingParent();
        }
      }
    }
    isProjecting() {
      return (!!this.relativeTarget || !!this.targetDelta || !!this.options.layoutRoot) && !!this.layout;
    }
    createRelativeTarget(f, m, p) {
      this.relativeParent = f;
      this.linkedParentVersion = f.layoutVersion;
      this.forceRelativeParentToResolveTarget();
      this.relativeTarget = Ie();
      this.relativeTargetOrigin = Ie();
      Br(this.relativeTargetOrigin, m, p, this.options.layoutAnchor || undefined);
      Xt(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = undefined;
    }
    calcProjection() {
      var j;
      const f = this.getLead();
      const m = !!this.resumingFrom || this !== f;
      let p = true;
      if (this.isProjectionDirty || (j = this.parent) != null && j.isProjectionDirty) {
        p = false;
      }
      if (m && (this.isSharedProjectionDirty || this.isTransformDirty)) {
        p = false;
      }
      if (this.resolvedRelativeTargetAt === lt.timestamp) {
        p = false;
      }
      if (p) {
        return;
      }
      const {
        layout: y,
        layoutId: v
      } = this.options;
      this.isTreeAnimating = !!this.parent && !!this.parent.isTreeAnimating || !!this.currentAnimation || !!this.pendingAnimation;
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = undefined;
      }
      if (!this.layout || !y && !v) {
        return;
      }
      Xt(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x;
      const S = this.treeScale.y;
      C2(this.layoutCorrected, this.treeScale, this.path, m);
      if (f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
        f.target = f.layout.layoutBox;
        f.targetWithTransforms = Ie();
      }
      const {
        target: E
      } = f;
      if (!E) {
        if (this.prevProjectionDelta) {
          this.createProjectionDeltas();
          this.scheduleRender();
        }
        return;
      }
      if (!this.projectionDelta || !this.prevProjectionDelta) {
        this.createProjectionDeltas();
      } else {
        $g(this.prevProjectionDelta.x, this.projectionDelta.x);
        $g(this.prevProjectionDelta.y, this.projectionDelta.y);
      }
      zs(this.projectionDelta, this.layoutCorrected, E, this.latestValues);
      if (this.treeScale.x !== b || this.treeScale.y !== S || !uy(this.projectionDelta.x, this.prevProjectionDelta.x) || !uy(this.projectionDelta.y, this.prevProjectionDelta.y)) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", E);
      }
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(f = true) {
      var m;
      if ((m = this.options.visualElement) != null) {
        m.scheduleRender();
      }
      if (f) {
        const p = this.getStack();
        if (p) {
          p.scheduleRender();
        }
      }
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = undefined;
      }
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Sa();
      this.projectionDelta = Sa();
      this.projectionDeltaWithTransform = Sa();
    }
    setAnimationOrigin(f, m = false, p) {
      const y = this.snapshot;
      const v = y ? y.latestValues : {};
      const b = {
        ...this.latestValues
      };
      const S = Sa();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = undefined;
      }
      this.attemptToResolveRelativeTarget = !m;
      const E = Ie();
      const j = y ? y.source : undefined;
      const M = this.layout ? this.layout.source : undefined;
      const k = j !== M;
      const N = this.getStack();
      const _ = !N || N.members.length <= 1;
      const L = !!k && !_ && this.options.crossfade === true && !this.path.some(NR);
      this.animationProgress = 0;
      let U;
      const K = p == null ? undefined : p.interpolateProjection(f);
      this.mixTargetDelta = te => {
        const G = te / 1000;
        const F = K == null ? undefined : K(G);
        if (F) {
          S.x.translate = F.x;
          S.x.scale = ke(f.x.scale, 1, G);
          S.x.origin = f.x.origin;
          S.x.originPoint = f.x.originPoint;
          S.y.translate = F.y;
          S.y.scale = ke(f.y.scale, 1, G);
          S.y.origin = f.y.origin;
          S.y.originPoint = f.y.originPoint;
        } else {
          gy(S.x, f.x, G);
          gy(S.y, f.y, G);
        }
        this.setTargetDelta(S);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          Br(E, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || undefined);
          CR(this.relativeTarget, this.relativeTargetOrigin, E, G);
          if (U && iR(this.relativeTarget, U)) {
            this.isProjectionDirty = false;
          }
          U ||= Ie();
          Xt(U, this.relativeTarget);
        }
        if (k) {
          this.animationValues = b;
          lR(b, v, this.latestValues, G, L, _);
        }
        if (F && F.rotate !== undefined) {
          this.animationValues ||= b;
          this.animationValues.pathRotation = F.rotate;
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = G;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
    }
    startAnimation(f) {
      var m;
      var p;
      var y;
      this.notifyListeners("animationStart");
      if ((m = this.currentAnimation) != null) {
        m.stop();
      }
      if ((y = (p = this.resumingFrom) == null ? undefined : p.currentAnimation) != null) {
        y.stop();
      }
      if (this.pendingAnimation) {
        ai(this.pendingAnimation);
        this.pendingAnimation = undefined;
      }
      this.pendingAnimation = Me.update(() => {
        Er.hasAnimatedSinceResize = true;
        this.motionValue ||= Ra(0);
        this.motionValue.jump(0, false);
        this.currentAnimation = uR(this.motionValue, [0, 1000], {
          ...f,
          velocity: 0,
          isSync: true,
          onUpdate: v => {
            this.mixTargetDelta(v);
            if (f.onUpdate) {
              f.onUpdate(v);
            }
          },
          onStop: () => {},
          onComplete: () => {
            if (f.onComplete) {
              f.onComplete();
            }
            this.completeAnimation();
          }
        });
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = undefined;
      });
    }
    completeAnimation() {
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = undefined;
        this.resumingFrom.preserveOpacity = undefined;
      }
      const f = this.getStack();
      if (f) {
        f.exitAnimationComplete();
      }
      this.resumingFrom = this.currentAnimation = this.animationValues = undefined;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      if (this.currentAnimation) {
        if (this.mixTargetDelta) {
          this.mixTargetDelta(mR);
        }
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: m,
        target: p,
        layout: y,
        latestValues: v
      } = f;
      if (!!m && !!p && !!y) {
        if (this !== f && this.layout && y && qv(this.options.animationType, this.layout.layoutBox, y.layoutBox)) {
          p = this.target || Ie();
          const b = ht(this.layout.layoutBox.x);
          p.x.min = f.target.x.min;
          p.x.max = p.x.min + b;
          const S = ht(this.layout.layoutBox.y);
          p.y.min = f.target.y.min;
          p.y.max = p.y.min + S;
        }
        Xt(m, p);
        wr(m, v);
        zs(this.projectionDeltaWithTransform, this.layoutCorrected, m, v);
      }
    }
    registerSharedNode(f, m) {
      if (!this.sharedNodes.has(f)) {
        this.sharedNodes.set(f, new hR());
      }
      this.sharedNodes.get(f).add(m);
      const y = m.options.initialPromotionConfig;
      m.promote({
        transition: y ? y.transition : undefined,
        preserveFollowOpacity: y && y.shouldPreserveFollowOpacity ? y.shouldPreserveFollowOpacity(m) : undefined
      });
    }
    isLead() {
      const f = this.getStack();
      if (f) {
        return f.lead === this;
      } else {
        return true;
      }
    }
    getLead() {
      var m;
      const {
        layoutId: f
      } = this.options;
      if (f) {
        return ((m = this.getStack()) == null ? undefined : m.lead) || this;
      } else {
        return this;
      }
    }
    getPrevLead() {
      var m;
      const {
        layoutId: f
      } = this.options;
      if (f) {
        if ((m = this.getStack()) == null) {
          return undefined;
        } else {
          return m.prevLead;
        }
      } else {
        return undefined;
      }
    }
    getStack() {
      const {
        layoutId: f
      } = this.options;
      if (f) {
        return this.root.sharedNodes.get(f);
      }
    }
    promote({
      needsReset: f,
      transition: m,
      preserveFollowOpacity: p
    } = {}) {
      const y = this.getStack();
      if (y) {
        y.promote(this, p);
      }
      if (f) {
        this.projectionDelta = undefined;
        this.needsReset = true;
      }
      if (m) {
        this.setOptions({
          transition: m
        });
      }
    }
    relegate() {
      const f = this.getStack();
      if (f) {
        return f.relegate(this);
      } else {
        return false;
      }
    }
    resetSkewAndRotation() {
      const {
        visualElement: f
      } = this.options;
      if (!f) {
        return;
      }
      let m = false;
      const {
        latestValues: p
      } = f;
      if (p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) {
        m = true;
      }
      if (!m) {
        return;
      }
      const y = {};
      if (p.z) {
        zc("z", f, y, this.animationValues);
      }
      for (let v = 0; v < Mc.length; v++) {
        zc(`rotate${Mc[v]}`, f, y, this.animationValues);
        zc(`skew${Mc[v]}`, f, y, this.animationValues);
      }
      f.render();
      for (const v in y) {
        f.setStaticValue(v, y[v]);
        if (this.animationValues) {
          this.animationValues[v] = y[v];
        }
      }
      f.scheduleRender();
    }
    applyProjectionStyles(f, m) {
      if (!this.instance || this.isSVG) {
        return;
      }
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const p = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        f.visibility = "";
        f.opacity = "";
        f.pointerEvents = Tr(m == null ? undefined : m.pointerEvents) || "";
        f.transform = p ? p(this.latestValues, "") : "none";
        return;
      }
      const y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        if (this.options.layoutId) {
          f.opacity = this.latestValues.opacity !== undefined ? this.latestValues.opacity : 1;
          f.pointerEvents = Tr(m == null ? undefined : m.pointerEvents) || "";
        }
        if (this.hasProjected && !ji(this.latestValues)) {
          f.transform = p ? p({}, "") : "none";
          this.hasProjected = false;
        }
        return;
      }
      f.visibility = "";
      const v = y.animationValues || y.latestValues;
      this.applyTransformsToTarget();
      let b = aR(this.projectionDeltaWithTransform, this.treeScale, v);
      if (p) {
        b = p(v, b);
      }
      f.transform = b;
      const {
        x: S,
        y: E
      } = this.projectionDelta;
      f.transformOrigin = `${S.origin * 100}% ${E.origin * 100}% 0`;
      if (y.animationValues) {
        f.opacity = y === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit;
      } else {
        f.opacity = y === this ? v.opacity !== undefined ? v.opacity : "" : v.opacityExit !== undefined ? v.opacityExit : 0;
      }
      for (const j in cd) {
        if (v[j] === undefined) {
          continue;
        }
        const {
          correct: M,
          applyTo: k,
          isCSSVariable: N
        } = cd[j];
        const _ = b === "none" ? v[j] : M(v[j], y);
        if (k) {
          const L = k.length;
          for (let U = 0; U < L; U++) {
            f[k[U]] = _;
          }
        } else if (N) {
          this.options.visualElement.renderState.vars[j] = _;
        } else {
          f[j] = _;
        }
      }
      if (this.options.layoutId) {
        f.pointerEvents = y === this ? Tr(m == null ? undefined : m.pointerEvents) || "" : "none";
      }
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = undefined;
    }
    resetTree() {
      this.root.nodes.forEach(f => {
        var m;
        if ((m = f.currentAnimation) == null) {
          return undefined;
        } else {
          return m.stop();
        }
      });
      this.root.nodes.forEach(hy);
      this.root.sharedNodes.clear();
    }
  };
}
function gR(n) {
  n.updateLayout();
}
function yR(n) {
  var l;
  const a = ((l = n.resumeFrom) == null ? undefined : l.snapshot) || n.snapshot;
  if (n.isLead() && n.layout && a && n.hasListeners("didUpdate")) {
    const {
      layoutBox: r,
      measuredBox: u
    } = n.layout;
    const {
      animationType: d
    } = n.options;
    const f = a.source !== n.layout.source;
    if (d === "size") {
      ln(b => {
        const S = f ? a.measuredBox[b] : a.layoutBox[b];
        const E = ht(S);
        S.min = r[b].min;
        S.max = S.min + E;
      });
    } else if (d === "x" || d === "y") {
      const b = d === "x" ? "y" : "x";
      dd(f ? a.measuredBox[b] : a.layoutBox[b], r[b]);
    } else if (qv(d, a.layoutBox, r)) {
      ln(b => {
        const S = f ? a.measuredBox[b] : a.layoutBox[b];
        const E = ht(r[b]);
        S.max = S.min + E;
        if (n.relativeTarget && !n.currentAnimation) {
          n.isProjectionDirty = true;
          n.relativeTarget[b].max = n.relativeTarget[b].min + E;
        }
      });
    }
    const m = Sa();
    zs(m, r, a.layoutBox);
    const p = Sa();
    if (f) {
      zs(p, n.applyTransform(u, true), a.measuredBox);
    } else {
      zs(p, r, a.layoutBox);
    }
    const y = !Cv(m);
    let v = false;
    if (!n.resumeFrom) {
      const b = n.getClosestProjectingParent();
      if (b && !b.resumeFrom) {
        const {
          snapshot: S,
          layout: E
        } = b;
        if (S && E) {
          const j = n.options.layoutAnchor || undefined;
          const M = Ie();
          Br(M, a.layoutBox, S.layoutBox, j);
          const k = Ie();
          Br(k, r, E.layoutBox, j);
          if (!Nv(M, k)) {
            v = true;
          }
          if (b.options.layoutRoot) {
            n.relativeTarget = k;
            n.relativeTargetOrigin = M;
            n.relativeParent = b;
          }
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: r,
      snapshot: a,
      delta: p,
      layoutDelta: m,
      hasLayoutChanged: y,
      hasRelativeLayoutChanged: v
    });
  } else if (n.isLead()) {
    const {
      onExitComplete: r
    } = n.options;
    if (r) {
      r();
    }
  }
  n.options.transition = undefined;
}
function vR(n) {
  if (n.parent) {
    if (!n.isProjecting()) {
      n.isProjectionDirty = n.parent.isProjectionDirty;
    }
    n.isSharedProjectionDirty ||= !!n.isProjectionDirty || !!n.parent.isProjectionDirty || !!n.parent.isSharedProjectionDirty;
    n.isTransformDirty ||= n.parent.isTransformDirty;
  }
}
function bR(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = false;
}
function xR(n) {
  n.clearSnapshot();
}
function hy(n) {
  n.clearMeasurements();
}
function SR(n) {
  n.isLayoutDirty = true;
  n.updateLayout();
}
function my(n) {
  n.isLayoutDirty = false;
}
function wR(n) {
  if (n.isAnimationBlocked && n.layout && !n.isLayoutDirty) {
    n.snapshot = n.layout;
    n.isLayoutDirty = true;
  }
}
function TR(n) {
  const {
    visualElement: a
  } = n.options;
  if (a && a.getProps().onBeforeLayoutMeasure) {
    a.notify("BeforeLayoutMeasure");
  }
  n.resetTransform();
}
function py(n) {
  n.finishAnimation();
  n.targetDelta = n.relativeTarget = n.target = undefined;
  n.isProjectionDirty = true;
}
function ER(n) {
  n.resolveTargetDelta();
}
function RR(n) {
  n.calcProjection();
}
function AR(n) {
  n.resetSkewAndRotation();
}
function jR(n) {
  n.removeLeadSnapshot();
}
function gy(n, a, l) {
  n.translate = ke(a.translate, 0, l);
  n.scale = ke(a.scale, 1, l);
  n.origin = a.origin;
  n.originPoint = a.originPoint;
}
function yy(n, a, l, r) {
  n.min = ke(a.min, l.min, r);
  n.max = ke(a.max, l.max, r);
}
function CR(n, a, l, r) {
  yy(n.x, a.x, l.x, r);
  yy(n.y, a.y, l.y, r);
}
function NR(n) {
  return n.animationValues && n.animationValues.opacityExit !== undefined;
}
const kR = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
const vy = n => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n);
const by = vy("applewebkit/") && !vy("chrome/") ? Math.round : Gt;
function xy(n) {
  n.min = by(n.min);
  n.max = by(n.max);
}
function MR(n) {
  xy(n.x);
  xy(n.y);
}
function qv(n, a, l) {
  return n === "position" || n === "preserve-aspect" && !$2(oy(a), oy(l), 0.2);
}
function zR(n) {
  var a;
  return n !== n.root && ((a = n.scroll) == null ? undefined : a.wasRoot);
}
const DR = Dv({
  attachResizeListener: (n, a) => Vs(n, "resize", a),
  measureScroll: () => {
    var n;
    var a;
    return {
      x: document.documentElement.scrollLeft || ((n = document.body) == null ? undefined : n.scrollLeft) || 0,
      y: document.documentElement.scrollTop || ((a = document.body) == null ? undefined : a.scrollTop) || 0
    };
  },
  checkIsScrollRoot: () => true
});
const Dc = {
  current: undefined
};
const Lv = Dv({
  measureScroll: n => ({
    x: n.scrollLeft,
    y: n.scrollTop
  }),
  defaultParent: () => {
    if (!Dc.current) {
      const n = new DR({});
      n.mount(window);
      n.setOptions({
        layoutScroll: true
      });
      Dc.current = n;
    }
    return Dc.current;
  },
  resetTransform: (n, a) => {
    n.style.transform = a !== undefined ? a : "none";
  },
  checkIsScrollRoot: n => window.getComputedStyle(n).position === "fixed"
});
const Wd = T.createContext({
  transformPagePoint: n => n,
  isStatic: false,
  reducedMotion: "never"
});
function Sy(n, a) {
  if (typeof n == "function") {
    return n(a);
  }
  if (n != null) {
    n.current = a;
  }
}
function qR(...n) {
  return a => {
    let l = false;
    const r = n.map(u => {
      const d = Sy(u, a);
      if (!l && typeof d == "function") {
        l = true;
      }
      return d;
    });
    if (l) {
      return () => {
        for (let u = 0; u < r.length; u++) {
          const d = r[u];
          if (typeof d == "function") {
            d();
          } else {
            Sy(n[u], null);
          }
        }
      };
    }
  };
}
function LR(...n) {
  return T.useCallback(qR(...n), n);
}
class OR extends T.Component {
  getSnapshotBeforeUpdate(a) {
    const l = this.props.childRef.current;
    if (vr(l) && a.isPresent && !this.props.isPresent && this.props.pop !== false) {
      const r = l.offsetParent;
      const u = vr(r) && r.offsetWidth || 0;
      const d = vr(r) && r.offsetHeight || 0;
      const f = getComputedStyle(l);
      const m = this.props.sizeRef.current;
      m.height = parseFloat(f.height);
      m.width = parseFloat(f.width);
      m.top = l.offsetTop;
      m.left = l.offsetLeft;
      m.right = u - m.width - m.left;
      m.bottom = d - m.height - m.top;
      m.direction = f.direction;
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function BR({
  children: n,
  isPresent: a,
  anchorX: l,
  anchorY: r,
  root: u,
  pop: d
}) {
  var S;
  const f = T.useId();
  const m = T.useRef(null);
  const p = T.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  });
  const {
    nonce: y
  } = T.useContext(Wd);
  const v = ((S = n.props) == null ? undefined : S.ref) ?? (n == null ? undefined : n.ref);
  const b = LR(m, v);
  T.useInsertionEffect(() => {
    const {
      width: E,
      height: j,
      top: M,
      left: k,
      right: N,
      bottom: _,
      direction: L
    } = p.current;
    if (a || d === false || !m.current || !E || !j) {
      return;
    }
    const U = L === "rtl";
    const K = l === "left" ? U ? `right: ${N}` : `left: ${k}` : U ? `left: ${k}` : `right: ${N}`;
    const te = r === "bottom" ? `bottom: ${_}` : `top: ${M}`;
    m.current.dataset.motionPopId = f;
    const G = document.createElement("style");
    if (y) {
      G.nonce = y;
    }
    const F = u ?? document.head;
    F.appendChild(G);
    if (G.sheet) {
      G.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${E}px !important;
            height: ${j}px !important;
            ${K}px !important;
            ${te}px !important;
          }
        `);
    }
    return () => {
      var ne;
      if ((ne = m.current) != null) {
        ne.removeAttribute("data-motion-pop-id");
      }
      if (F.contains(G)) {
        F.removeChild(G);
      }
    };
  }, [a]);
  return <OR isPresent={a} childRef={m} sizeRef={p} pop={d}>{d === false ? n : T.cloneElement(n, {
      ref: b
    })}</OR>;
}
const VR = ({
  children: n,
  initial: a,
  isPresent: l,
  onExitComplete: r,
  custom: u,
  presenceAffectsLayout: d,
  mode: f,
  anchorX: m,
  anchorY: p,
  root: y
}) => {
  const v = Ed(_R);
  const b = T.useId();
  let S = true;
  let E = T.useMemo(() => {
    S = false;
    return {
      id: b,
      initial: a,
      isPresent: l,
      custom: u,
      onExitComplete: j => {
        v.set(j, true);
        for (const M of v.values()) {
          if (!M) {
            return;
          }
        }
        if (r) {
          r();
        }
      },
      register: j => {
        v.set(j, false);
        return () => v.delete(j);
      }
    };
  }, [l, v, r]);
  if (d && S) {
    E = {
      ...E
    };
  }
  T.useMemo(() => {
    v.forEach((j, M) => v.set(M, false));
  }, [l]);
  T.useEffect(() => {
    if (!l && !v.size && r) {
      r();
    }
  }, [l]);
  n = <BR pop={f === "popLayout"} isPresent={l} anchorX={m} anchorY={p} root={y}>{n}</BR>;
  return <Hr.Provider value={E}>{n}</Hr.Provider>;
};
function _R() {
  return new Map();
}
function Ov(n = true) {
  const a = T.useContext(Hr);
  if (a === null) {
    return [true, null];
  }
  const {
    isPresent: l,
    onExitComplete: r,
    register: u
  } = a;
  const d = T.useId();
  T.useEffect(() => {
    if (n) {
      return u(d);
    }
  }, [n]);
  const f = T.useCallback(() => n && r && r(d), [d, r, n]);
  if (!l && r) {
    return [false, f];
  } else {
    return [true];
  }
}
const fr = n => n.key || "";
function wy(n) {
  const a = [];
  T.Children.forEach(n, l => {
    if (T.isValidElement(l)) {
      a.push(l);
    }
  });
  return a;
}
const _Component4 = ({
  children: n,
  custom: a,
  initial: l = true,
  onExitComplete: r,
  presenceAffectsLayout: u = true,
  mode: d = "sync",
  propagate: f = false,
  anchorX: m = "left",
  anchorY: p = "top",
  root: y
}) => {
  const [v, b] = Ov(f);
  const S = T.useMemo(() => wy(n), [n]);
  const E = f && !v ? [] : S.map(fr);
  const j = T.useRef(true);
  const M = T.useRef(S);
  const k = Ed(() => new Map());
  const N = T.useRef(new Set());
  const [_, L] = T.useState(S);
  const [U, K] = T.useState(S);
  c0(() => {
    j.current = false;
    M.current = S;
    for (let F = 0; F < U.length; F++) {
      const ne = fr(U[F]);
      if (E.includes(ne)) {
        k.delete(ne);
        N.current.delete(ne);
      } else if (k.get(ne) !== true) {
        k.set(ne, false);
      }
    }
  }, [U, E.length, E.join("-")]);
  const te = [];
  if (S !== _) {
    let F = [...S];
    for (let ne = 0; ne < U.length; ne++) {
      const J = U[ne];
      const ce = fr(J);
      if (!E.includes(ce)) {
        F.splice(ne, 0, J);
        te.push(J);
      }
    }
    if (d === "wait" && te.length) {
      F = te;
    }
    K(wy(F));
    L(S);
    return null;
  }
  const {
    forceRender: G
  } = T.useContext(Td);
  return <h.Fragment>{U.map(F => {
      const ne = fr(F);
      const J = f && !v ? false : S === U || E.includes(ne);
      const ce = () => {
        if (N.current.has(ne)) {
          return;
        }
        if (k.has(ne)) {
          N.current.add(ne);
          k.set(ne, true);
        } else {
          return;
        }
        let ve = true;
        k.forEach(Ge => {
          if (!Ge) {
            ve = false;
          }
        });
        if (ve) {
          if (G != null) {
            G();
          }
          K(M.current);
          if (f) {
            if (b != null) {
              b();
            }
          }
          if (r) {
            r();
          }
        }
      };
      return <VR isPresent={J} initial={!j.current || l ? undefined : false} custom={a} presenceAffectsLayout={u} mode={d} root={y} onExitComplete={J ? undefined : ce} anchorX={m} anchorY={p} key={ne}>{F}</VR>;
    })}</h.Fragment>;
};
const Bv = T.createContext({
  strict: false
});
const Ty = {
  animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let Ey = false;
function PR() {
  if (Ey) {
    return;
  }
  const n = {};
  for (const a in Ty) {
    n[a] = {
      isEnabled: l => Ty[a].some(r => !!l[r])
    };
  }
  fv(n);
  Ey = true;
}
function Vv() {
  PR();
  return E2();
}
function UR(n) {
  const a = Vv();
  for (const l in n) {
    a[l] = {
      ...a[l],
      ...n[l]
    };
  }
  fv(a);
}
const HR = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function Vr(n) {
  return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || HR.has(n);
}
let _v = n => !Vr(n);
function QR(n) {
  if (typeof n == "function") {
    _v = a => a.startsWith("on") ? !Vr(a) : n(a);
  }
}
try {
  QR(require("@emotion/is-prop-valid").default);
} catch {}
function GR(n, a, l) {
  const r = {};
  for (const u in n) {
    if ((u !== "values" || typeof n.values != "object") && !rt(n[u])) {
      if (_v(u) || l === true && Vr(u) || !a && !Vr(u) || n.draggable && u.startsWith("onDrag")) {
        r[u] = n[u];
      }
    }
  }
  return r;
}
const Fr = T.createContext({});
function KR(n, a) {
  if (Kr(n)) {
    const {
      initial: l,
      animate: r
    } = n;
    return {
      initial: l === false || Bs(l) ? l : undefined,
      animate: Bs(r) ? r : undefined
    };
  }
  if (n.inherit !== false) {
    return a;
  } else {
    return {};
  }
}
function FR(n) {
  const {
    initial: a,
    animate: l
  } = KR(n, T.useContext(Fr));
  return T.useMemo(() => ({
    initial: a,
    animate: l
  }), [Ry(a), Ry(l)]);
}
function Ry(n) {
  if (Array.isArray(n)) {
    return n.join(" ");
  } else {
    return n;
  }
}
const Xd = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Pv(n, a, l) {
  for (const r in a) {
    if (!rt(a[r]) && !bv(r, l)) {
      n[r] = a[r];
    }
  }
}
function YR({
  transformTemplate: n
}, a) {
  return T.useMemo(() => {
    const l = Xd();
    Fd(l, a, n);
    return Object.assign({}, l.vars, l.style);
  }, [a]);
}
function WR(n, a) {
  const l = n.style || {};
  const r = {};
  Pv(r, l, n);
  Object.assign(r, YR(n, a));
  return r;
}
function XR(n, a) {
  const l = {};
  const r = WR(n, a);
  if (n.drag && n.dragListener !== false) {
    l.draggable = false;
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none";
    r.touchAction = n.drag === true ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`;
  }
  if (n.tabIndex === undefined && (n.onTap || n.onTapStart || n.whileTap)) {
    l.tabIndex = 0;
  }
  l.style = r;
  return l;
}
const Uv = () => ({
  ...Xd(),
  attrs: {}
});
function ZR(n, a, l, r) {
  const u = T.useMemo(() => {
    const d = Uv();
    xv(d, a, wv(r), n.transformTemplate, n.style);
    return {
      ...d.attrs,
      style: {
        ...d.style
      }
    };
  }, [a]);
  if (n.style) {
    const d = {};
    Pv(d, n.style, n);
    u.style = {
      ...d,
      ...u.style
    };
  }
  return u;
}
const IR = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Zd(n) {
  if (typeof n != "string" || n.includes("-")) {
    return false;
  } else {
    return !!(IR.indexOf(n) > -1) || !!/[A-Z]/u.test(n);
  }
}
function $R(n, a, l, {
  latestValues: r
}, u, d = false, f) {
  const p = (f ?? Zd(n) ? ZR : XR)(a, r, u, n);
  const y = GR(a, typeof n == "string", d);
  const v = n !== T.Fragment ? {
    ...y,
    ...p,
    ref: l
  } : {};
  const {
    children: b
  } = a;
  const S = T.useMemo(() => rt(b) ? b.get() : b, [b]);
  return T.createElement(n, {
    ...v,
    children: S
  });
}
function JR({
  scrapeMotionValuesFromProps: n,
  createRenderState: a
}, l, r, u) {
  return {
    latestValues: eA(l, r, u, n),
    renderState: a()
  };
}
function eA(n, a, l, r) {
  const u = {};
  const d = r(n, {});
  for (const S in d) {
    u[S] = Tr(d[S]);
  }
  let {
    initial: f,
    animate: m
  } = n;
  const p = Kr(n);
  const y = cv(n);
  if (a && y && !p && n.inherit !== false) {
    if (f === undefined) {
      f = a.initial;
    }
    if (m === undefined) {
      m = a.animate;
    }
  }
  let v = l ? l.initial === false : false;
  v = v || f === false;
  const b = v ? m : f;
  if (b && typeof b != "boolean" && !Gr(b)) {
    const S = Array.isArray(b) ? b : [b];
    for (let E = 0; E < S.length; E++) {
      const j = _d(n, S[E]);
      if (j) {
        const {
          transitionEnd: M,
          transition: k,
          ...N
        } = j;
        for (const _ in N) {
          let L = N[_];
          if (Array.isArray(L)) {
            const U = v ? L.length - 1 : 0;
            L = L[U];
          }
          if (L !== null) {
            u[_] = L;
          }
        }
        for (const _ in M) {
          u[_] = M[_];
        }
      }
    }
  }
  return u;
}
const Hv = n => (a, l) => {
  const r = T.useContext(Fr);
  const u = T.useContext(Hr);
  const d = () => JR(n, a, r, u);
  if (l) {
    return d();
  } else {
    return Ed(d);
  }
};
const tA = Hv({
  scrapeMotionValuesFromProps: Yd,
  createRenderState: Xd
});
const nA = Hv({
  scrapeMotionValuesFromProps: Tv,
  createRenderState: Uv
});
const iA = Symbol.for("motionComponentSymbol");
function aA(n, a, l) {
  const r = T.useRef(l);
  T.useInsertionEffect(() => {
    r.current = l;
  });
  const u = T.useRef(null);
  return T.useCallback(d => {
    var m;
    if (d) {
      if ((m = n.onMount) != null) {
        m.call(n, d);
      }
    }
    if (a) {
      if (d) {
        a.mount(d);
      } else {
        a.unmount();
      }
    }
    const f = r.current;
    if (typeof f == "function") {
      if (d) {
        const p = f(d);
        if (typeof p == "function") {
          u.current = p;
        }
      } else if (u.current) {
        u.current();
        u.current = null;
      } else {
        f(d);
      }
    } else if (f) {
      f.current = d;
    }
  }, [a]);
}
const Qv = T.createContext({});
function va(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function sA(n, a, l, r, u, d) {
  var L;
  var U;
  const {
    visualElement: f
  } = T.useContext(Fr);
  const m = T.useContext(Bv);
  const p = T.useContext(Hr);
  const y = T.useContext(Wd);
  const v = y.reducedMotion;
  const b = y.skipAnimations;
  const S = T.useRef(null);
  const E = T.useRef(false);
  r = r || m.renderer;
  if (!S.current && r) {
    S.current = r(n, {
      visualState: a,
      parent: f,
      props: l,
      presenceContext: p,
      blockInitialAnimation: p ? p.initial === false : false,
      reducedMotionConfig: v,
      skipAnimations: b,
      isSVG: d
    });
    if (E.current && S.current) {
      S.current.manuallyAnimateOnMount = true;
    }
  }
  const j = S.current;
  const M = T.useContext(Qv);
  if (j && !j.projection && u && (j.type === "html" || j.type === "svg")) {
    lA(S.current, l, u, M);
  }
  const k = T.useRef(false);
  T.useInsertionEffect(() => {
    if (j && k.current) {
      j.update(l, p);
    }
  });
  const N = l[$0];
  const _ = T.useRef(!!N && typeof window !== "undefined" && ((L = window.MotionHandoffIsComplete) == null || !L.call(window, N)) && ((U = window.MotionHasOptimisedAnimation) == null ? undefined : U.call(window, N)));
  c0(() => {
    E.current = true;
    if (j) {
      k.current = true;
      window.MotionIsMounted = true;
      j.updateFeatures();
      j.scheduleRenderMicrotask();
      if (_.current && j.animationState) {
        j.animationState.animateChanges();
      }
    }
  });
  T.useEffect(() => {
    if (j) {
      if (!_.current && j.animationState) {
        j.animationState.animateChanges();
      }
      if (_.current) {
        queueMicrotask(() => {
          var K;
          if ((K = window.MotionHandoffMarkAsComplete) != null) {
            K.call(window, N);
          }
        });
        _.current = false;
      }
      j.enteringChildren = undefined;
    }
  });
  return j;
}
function lA(n, a, l, r) {
  const {
    layoutId: u,
    layout: d,
    drag: f,
    dragConstraints: m,
    layoutScroll: p,
    layoutRoot: y,
    layoutAnchor: v,
    layoutCrossfade: b
  } = a;
  n.projection = new l(n.latestValues, a["data-framer-portal-id"] ? undefined : Gv(n.parent));
  n.projection.setOptions({
    layoutId: u,
    layout: d,
    alwaysMeasureLayout: !!f || m && va(m),
    visualElement: n,
    animationType: typeof d == "string" ? d : "both",
    initialPromotionConfig: r,
    crossfade: b,
    layoutScroll: p,
    layoutRoot: y,
    layoutAnchor: v
  });
}
function Gv(n) {
  if (n) {
    if (n.options.allowProjection !== false) {
      return n.projection;
    } else {
      return Gv(n.parent);
    }
  }
}
function qc(n, {
  forwardMotionProps: a = false,
  type: l
} = {}, r, u) {
  if (r) {
    UR(r);
  }
  const d = l ? l === "svg" : Zd(n);
  const f = d ? nA : tA;
  function m(y, v) {
    let _Component;
    const S = {
      ...T.useContext(Wd),
      ...y,
      layoutId: rA(y)
    };
    const {
      isStatic: E
    } = S;
    const j = FR(y);
    const M = f(y, E);
    if (!E && typeof window !== "undefined") {
      oA();
      const k = uA(S);
      _Component = k.MeasureLayout;
      j.visualElement = sA(n, M, S, u, k.ProjectionNode, d);
    }
    return <Fr.Provider value={j}>{_Component && j.visualElement ? <_Component visualElement={j.visualElement} {...S} /> : null}{$R(n, y, aA(M, j.visualElement, v), M, E, a, d)}</Fr.Provider>;
  }
  m.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const p = T.forwardRef(m);
  p[iA] = n;
  return p;
}
function rA({
  layoutId: n
}) {
  const a = T.useContext(Td).id;
  if (a && n !== undefined) {
    return a + "-" + n;
  } else {
    return n;
  }
}
function oA(n, a) {
  T.useContext(Bv).strict;
}
function uA(n) {
  const a = Vv();
  const {
    drag: l,
    layout: r
  } = a;
  if (!l && !r) {
    return {};
  }
  const u = {
    ...l,
    ...r
  };
  return {
    MeasureLayout: l != null && l.isEnabled(n) || r != null && r.isEnabled(n) ? u.MeasureLayout : undefined,
    ProjectionNode: u.ProjectionNode
  };
}
function cA(n, a) {
  if (typeof Proxy === "undefined") {
    return qc;
  }
  const l = new Map();
  const r = (d, f) => qc(d, f, n, a);
  const u = (d, f) => r(d, f);
  return new Proxy(u, {
    get: (d, f) => f === "create" ? r : (l.has(f) || l.set(f, qc(f, undefined, n, a)), l.get(f))
  });
}
const dA = (n, a) => a.isSVG ?? Zd(n) ? new U2(a) : new L2(a, {
  allowProjection: n !== T.Fragment
});
class fA extends li {
  constructor(a) {
    super(a);
    a.animationState ||= F2(a);
  }
  updateAnimationControlsSubscription() {
    const {
      animate: a
    } = this.node.getProps();
    if (Gr(a)) {
      this.unmountControls = a.subscribe(this.node);
    }
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const {
      animate: a
    } = this.node.getProps();
    const {
      animate: l
    } = this.node.prevProps || {};
    if (a !== l) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {
    var a;
    this.node.animationState.reset();
    if ((a = this.unmountControls) != null) {
      a.call(this);
    }
  }
}
let hA = 0;
class mA extends li {
  constructor() {
    super(...arguments);
    this.id = hA++;
    this.isExitComplete = false;
  }
  update() {
    var d;
    if (!this.node.presenceContext) {
      return;
    }
    const {
      isPresent: a,
      onExitComplete: l
    } = this.node.presenceContext;
    const {
      isPresent: r
    } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || a === r) {
      return;
    }
    if (a && r === false) {
      if (this.isExitComplete) {
        const {
          initial: f,
          custom: m
        } = this.node.getProps();
        if (typeof f == "string" || typeof f == "object" && f !== null && !Array.isArray(f)) {
          const p = Mi(this.node, f, m);
          if (p) {
            const {
              transition: y,
              transitionEnd: v,
              ...b
            } = p;
            for (const S in b) {
              if ((d = this.node.getValue(S)) != null) {
                d.jump(b[S]);
              }
            }
          }
        }
        this.node.animationState.reset();
        this.node.animationState.animateChanges();
      } else {
        this.node.animationState.setActive("exit", false);
      }
      this.isExitComplete = false;
      return;
    }
    const u = this.node.animationState.setActive("exit", !a);
    if (l && !a) {
      u.then(() => {
        this.isExitComplete = true;
        l(this.id);
      });
    }
  }
  mount() {
    const {
      register: a,
      onExitComplete: l
    } = this.node.presenceContext || {};
    if (l) {
      l(this.id);
    }
    if (a) {
      this.unmount = a(this.id);
    }
  }
  unmount() {}
}
const pA = {
  animation: {
    Feature: fA
  },
  exit: {
    Feature: mA
  }
};
function Gs(n) {
  return {
    point: {
      x: n.pageX,
      y: n.pageY
    }
  };
}
const gA = n => a => Hd(a) && n(a, Gs(a));
function Ds(n, a, l, r) {
  return Vs(n, a, gA(l), r);
}
const Kv = ({
  current: n
}) => n ? n.ownerDocument.defaultView : null;
const Ay = (n, a) => Math.abs(n - a);
function yA(n, a) {
  const l = Ay(n.x, a.x);
  const r = Ay(n.y, a.y);
  return Math.sqrt(l ** 2 + r ** 2);
}
const jy = new Set(["auto", "scroll"]);
class Fv {
  constructor(a, l, {
    transformPagePoint: r,
    contextWindow: u = window,
    dragSnapToOrigin: d = false,
    distanceThreshold: f = 3,
    element: m
  } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.lastRawMoveEventInfo = null;
    this.handlers = {};
    this.contextWindow = window;
    this.scrollPositions = new Map();
    this.removeScrollListeners = null;
    this.onElementScroll = E => {
      this.handleScroll(E.target);
    };
    this.onWindowScroll = () => {
      this.handleScroll(window);
    };
    this.updatePoint = () => {
      if (!this.lastMoveEvent || !this.lastMoveEventInfo) {
        return;
      }
      if (this.lastRawMoveEventInfo) {
        this.lastMoveEventInfo = hr(this.lastRawMoveEventInfo, this.transformPagePoint);
      }
      const E = Lc(this.lastMoveEventInfo, this.history);
      const j = this.startEvent !== null;
      const M = yA(E.offset, {
        x: 0,
        y: 0
      }) >= this.distanceThreshold;
      if (!j && !M) {
        return;
      }
      const {
        point: k
      } = E;
      const {
        timestamp: N
      } = lt;
      this.history.push({
        ...k,
        timestamp: N
      });
      const {
        onStart: _,
        onMove: L
      } = this.handlers;
      if (!j) {
        if (_) {
          _(this.lastMoveEvent, E);
        }
        this.startEvent = this.lastMoveEvent;
      }
      if (L) {
        L(this.lastMoveEvent, E);
      }
    };
    this.handlePointerMove = (E, j) => {
      this.lastMoveEvent = E;
      this.lastRawMoveEventInfo = j;
      this.lastMoveEventInfo = hr(j, this.transformPagePoint);
      Me.update(this.updatePoint, true);
    };
    this.handlePointerUp = (E, j) => {
      this.end();
      const {
        onEnd: M,
        onSessionEnd: k,
        resumeAnimation: N
      } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && N) {
        N();
      }
      if (!this.lastMoveEvent || !this.lastMoveEventInfo) {
        return;
      }
      const _ = Lc(E.type === "pointercancel" ? this.lastMoveEventInfo : hr(j, this.transformPagePoint), this.history);
      if (this.startEvent && M) {
        M(E, _);
      }
      if (k) {
        k(E, _);
      }
    };
    if (!Hd(a)) {
      return;
    }
    this.dragSnapToOrigin = d;
    this.handlers = l;
    this.transformPagePoint = r;
    this.distanceThreshold = f;
    this.contextWindow = u || window;
    const p = Gs(a);
    const y = hr(p, this.transformPagePoint);
    const {
      point: v
    } = y;
    const {
      timestamp: b
    } = lt;
    this.history = [{
      ...v,
      timestamp: b
    }];
    const {
      onSessionStart: S
    } = l;
    if (S) {
      S(a, Lc(y, this.history));
    }
    this.removeListeners = Us(Ds(this.contextWindow, "pointermove", this.handlePointerMove), Ds(this.contextWindow, "pointerup", this.handlePointerUp), Ds(this.contextWindow, "pointercancel", this.handlePointerUp));
    if (m) {
      this.startScrollTracking(m);
    }
  }
  startScrollTracking(a) {
    let l = a.parentElement;
    while (l) {
      const r = getComputedStyle(l);
      if (jy.has(r.overflowX) || jy.has(r.overflowY)) {
        this.scrollPositions.set(l, {
          x: l.scrollLeft,
          y: l.scrollTop
        });
      }
      l = l.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    });
    window.addEventListener("scroll", this.onElementScroll, {
      capture: true
    });
    window.addEventListener("scroll", this.onWindowScroll);
    this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: true
      });
      window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  handleScroll(a) {
    const l = this.scrollPositions.get(a);
    if (!l) {
      return;
    }
    const r = a === window;
    const u = r ? {
      x: window.scrollX,
      y: window.scrollY
    } : {
      x: a.scrollLeft,
      y: a.scrollTop
    };
    const d = {
      x: u.x - l.x,
      y: u.y - l.y
    };
    if (d.x !== 0 || d.y !== 0) {
      if (r) {
        if (this.lastMoveEventInfo) {
          this.lastMoveEventInfo.point.x += d.x;
          this.lastMoveEventInfo.point.y += d.y;
        }
      } else if (this.history.length > 0) {
        this.history[0].x -= d.x;
        this.history[0].y -= d.y;
      }
      this.scrollPositions.set(a, u);
      Me.update(this.updatePoint, true);
    }
  }
  updateHandlers(a) {
    this.handlers = a;
  }
  end() {
    if (this.removeListeners) {
      this.removeListeners();
    }
    if (this.removeScrollListeners) {
      this.removeScrollListeners();
    }
    this.scrollPositions.clear();
    ai(this.updatePoint);
  }
}
function hr(n, a) {
  if (a) {
    return {
      point: a(n.point)
    };
  } else {
    return n;
  }
}
function Cy(n, a) {
  return {
    x: n.x - a.x,
    y: n.y - a.y
  };
}
function Lc({
  point: n
}, a) {
  return {
    point: n,
    delta: Cy(n, Yv(a)),
    offset: Cy(n, vA(a)),
    velocity: bA(a, 0.1)
  };
}
function vA(n) {
  return n[0];
}
function Yv(n) {
  return n[n.length - 1];
}
function bA(n, a) {
  if (n.length < 2) {
    return {
      x: 0,
      y: 0
    };
  }
  let l = n.length - 1;
  let r = null;
  const u = Yv(n);
  while (l >= 0 && (r = n[l], !(u.timestamp - r.timestamp > Mt(a)))) {
    l--;
  }
  if (!r) {
    return {
      x: 0,
      y: 0
    };
  }
  if (r === n[0] && n.length > 2 && u.timestamp - r.timestamp > Mt(a) * 2) {
    r = n[1];
  }
  const d = Qt(u.timestamp - r.timestamp);
  if (d === 0) {
    return {
      x: 0,
      y: 0
    };
  }
  const f = {
    x: (u.x - r.x) / d,
    y: (u.y - r.y) / d
  };
  if (f.x === Infinity) {
    f.x = 0;
  }
  if (f.y === Infinity) {
    f.y = 0;
  }
  return f;
}
function xA(n, {
  min: a,
  max: l
}, r) {
  if (a !== undefined && n < a) {
    n = r ? ke(a, n, r.min) : Math.max(n, a);
  } else if (l !== undefined && n > l) {
    n = r ? ke(l, n, r.max) : Math.min(n, l);
  }
  return n;
}
function Ny(n, a, l) {
  return {
    min: a !== undefined ? n.min + a : undefined,
    max: l !== undefined ? n.max + l - (n.max - n.min) : undefined
  };
}
function SA(n, {
  top: a,
  left: l,
  bottom: r,
  right: u
}) {
  return {
    x: Ny(n.x, l, u),
    y: Ny(n.y, a, r)
  };
}
function ky(n, a) {
  let l = a.min - n.min;
  let r = a.max - n.max;
  if (a.max - a.min < n.max - n.min) {
    [l, r] = [r, l];
  }
  return {
    min: l,
    max: r
  };
}
function wA(n, a) {
  return {
    x: ky(n.x, a.x),
    y: ky(n.y, a.y)
  };
}
function TA(n, a) {
  let l = 0.5;
  const r = ht(n);
  const u = ht(a);
  if (u > r) {
    l = Ls(a.min, a.max - r, n.min);
  } else if (r > u) {
    l = Ls(n.min, n.max - u, a.min);
  }
  return un(0, 1, l);
}
function EA(n, a) {
  const l = {};
  if (a.min !== undefined) {
    l.min = a.min - n.min;
  }
  if (a.max !== undefined) {
    l.max = a.max - n.min;
  }
  return l;
}
const fd = 0.35;
function RA(n = fd) {
  if (n === false) {
    n = 0;
  } else if (n === true) {
    n = fd;
  }
  return {
    x: My(n, "left", "right"),
    y: My(n, "top", "bottom")
  };
}
function My(n, a, l) {
  return {
    min: zy(n, a),
    max: zy(n, l)
  };
}
function zy(n, a) {
  if (typeof n == "number") {
    return n;
  } else {
    return n[a] || 0;
  }
}
const AA = new WeakMap();
class jA {
  constructor(a) {
    this.openDragLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = {
      x: 0,
      y: 0
    };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = Ie();
    this.latestPointerEvent = null;
    this.latestPanInfo = null;
    this.visualElement = a;
  }
  start(a, {
    snapToCursor: l = false,
    distanceThreshold: r
  } = {}) {
    const {
      presenceContext: u
    } = this.visualElement;
    if (u && u.isPresent === false) {
      return;
    }
    const d = b => {
      if (l) {
        this.snapToCursor(Gs(b).point);
      }
      this.stopAnimation();
    };
    const f = (b, S) => {
      const {
        drag: E,
        dragPropagation: j,
        onDragStart: M
      } = this.getProps();
      if (E && !j && (this.openDragLock && this.openDragLock(), this.openDragLock = e2(E), !this.openDragLock)) {
        return;
      }
      this.latestPointerEvent = b;
      this.latestPanInfo = S;
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = undefined;
      }
      ln(N => {
        let _ = this.getAxisMotionValue(N).get() || 0;
        if (on.test(_)) {
          const {
            projection: L
          } = this.visualElement;
          if (L && L.layout) {
            const U = L.layout.layoutBox[N];
            if (U) {
              _ = ht(U) * (parseFloat(_) / 100);
            }
          }
        }
        this.originPoint[N] = _;
      });
      if (M) {
        Me.update(() => M(b, S), false, true);
      }
      nd(this.visualElement, "transform");
      const {
        animationState: k
      } = this.visualElement;
      if (k) {
        k.setActive("whileDrag", true);
      }
    };
    const m = (b, S) => {
      this.latestPointerEvent = b;
      this.latestPanInfo = S;
      const {
        dragPropagation: E,
        dragDirectionLock: j,
        onDirectionLock: M,
        onDrag: k
      } = this.getProps();
      if (!E && !this.openDragLock) {
        return;
      }
      const {
        offset: N
      } = S;
      if (j && this.currentDirection === null) {
        this.currentDirection = NA(N);
        if (this.currentDirection !== null && M) {
          M(this.currentDirection);
        }
        return;
      }
      this.updateAxis("x", S.point, N);
      this.updateAxis("y", S.point, N);
      this.visualElement.render();
      if (k) {
        Me.update(() => k(b, S), false, true);
      }
    };
    const p = (b, S) => {
      this.latestPointerEvent = b;
      this.latestPanInfo = S;
      this.stop(b, S);
      this.latestPointerEvent = null;
      this.latestPanInfo = null;
    };
    const y = () => {
      const {
        dragSnapToOrigin: b
      } = this.getProps();
      if (b || this.constraints) {
        this.startAnimation({
          x: 0,
          y: 0
        });
      }
    };
    const {
      dragSnapToOrigin: v
    } = this.getProps();
    this.panSession = new Fv(a, {
      onSessionStart: d,
      onStart: f,
      onMove: m,
      onSessionEnd: p,
      resumeAnimation: y
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: v,
      distanceThreshold: r,
      contextWindow: Kv(this.visualElement),
      element: this.visualElement.current
    });
  }
  stop(a, l) {
    const r = a || this.latestPointerEvent;
    const u = l || this.latestPanInfo;
    const d = this.isDragging;
    this.cancel();
    if (!d || !u || !r) {
      return;
    }
    const {
      velocity: f
    } = u;
    this.startAnimation(f);
    const {
      onDragEnd: m
    } = this.getProps();
    if (m) {
      Me.postRender(() => m(r, u));
    }
  }
  cancel() {
    this.isDragging = false;
    const {
      projection: a,
      animationState: l
    } = this.visualElement;
    if (a) {
      a.isAnimationBlocked = false;
    }
    this.endPanSession();
    const {
      dragPropagation: r
    } = this.getProps();
    if (!r && this.openDragLock) {
      this.openDragLock();
      this.openDragLock = null;
    }
    if (l) {
      l.setActive("whileDrag", false);
    }
  }
  endPanSession() {
    if (this.panSession) {
      this.panSession.end();
    }
    this.panSession = undefined;
  }
  updateAxis(a, l, r) {
    const {
      drag: u
    } = this.getProps();
    if (!r || !mr(a, u, this.currentDirection)) {
      return;
    }
    const d = this.getAxisMotionValue(a);
    let f = this.originPoint[a] + r[a];
    if (this.constraints && this.constraints[a]) {
      f = xA(f, this.constraints[a], this.elastic[a]);
    }
    d.set(f);
  }
  resolveConstraints() {
    var d;
    const {
      dragConstraints: a,
      dragElastic: l
    } = this.getProps();
    const r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (d = this.visualElement.projection) == null ? undefined : d.layout;
    const u = this.constraints;
    if (a && va(a)) {
      this.constraints ||= this.resolveRefConstraints();
    } else if (a && r) {
      this.constraints = SA(r.layoutBox, a);
    } else {
      this.constraints = false;
    }
    this.elastic = RA(l);
    if (u !== this.constraints && !va(a) && r && this.constraints && !this.hasMutatedConstraints) {
      ln(f => {
        if (this.constraints !== false && this.getAxisMotionValue(f)) {
          this.constraints[f] = EA(r.layoutBox[f], this.constraints[f]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const {
      dragConstraints: a,
      onMeasureDragConstraints: l
    } = this.getProps();
    if (!a || !va(a)) {
      return false;
    }
    const r = a.current;
    const {
      projection: u
    } = this.visualElement;
    if (!u || !u.layout) {
      return false;
    }
    if (u.root) {
      u.root.scroll = undefined;
      u.root.updateScroll();
    }
    const d = N2(r, u.root, this.visualElement.getTransformPagePoint());
    let f = wA(u.layout.layoutBox, d);
    if (l) {
      const m = l(A2(f));
      this.hasMutatedConstraints = !!m;
      if (m) {
        f = mv(m);
      }
    }
    return f;
  }
  startAnimation(a) {
    const {
      drag: l,
      dragMomentum: r,
      dragElastic: u,
      dragTransition: d,
      dragSnapToOrigin: f,
      onDragTransitionEnd: m
    } = this.getProps();
    const p = this.constraints || {};
    const y = ln(v => {
      if (!mr(v, l, this.currentDirection)) {
        return;
      }
      let b = p && p[v] || {};
      if (f === true || f === v) {
        b = {
          min: 0,
          max: 0
        };
      }
      const S = u ? 200 : 1000000;
      const E = u ? 40 : 10000000;
      const j = {
        type: "inertia",
        velocity: r ? a[v] : 0,
        bounceStiffness: S,
        bounceDamping: E,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...d,
        ...b
      };
      return this.startAxisValueAnimation(v, j);
    });
    return Promise.all(y).then(m);
  }
  startAxisValueAnimation(a, l) {
    const r = this.getAxisMotionValue(a);
    nd(this.visualElement, a);
    return r.start(Vd(a, r, 0, l, this.visualElement, false));
  }
  stopAnimation() {
    ln(a => this.getAxisMotionValue(a).stop());
  }
  getAxisMotionValue(a) {
    const l = `_drag${a.toUpperCase()}`;
    const u = this.visualElement.getProps()[l];
    return u || this.visualElement.getValue(a, this.visualElement.latestValues[a] ?? 0);
  }
  snapToCursor(a) {
    ln(l => {
      const {
        drag: r
      } = this.getProps();
      if (!mr(l, r, this.currentDirection)) {
        return;
      }
      const {
        projection: u
      } = this.visualElement;
      const d = this.getAxisMotionValue(l);
      if (u && u.layout) {
        const {
          min: f,
          max: m
        } = u.layout.layoutBox[l];
        const p = d.get() || 0;
        d.set(a[l] - ke(f, m, 0.5) + p);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) {
      return;
    }
    const {
      drag: a,
      dragConstraints: l
    } = this.getProps();
    const {
      projection: r
    } = this.visualElement;
    if (!va(l) || !r || !this.constraints) {
      return;
    }
    this.stopAnimation();
    const u = {
      x: 0,
      y: 0
    };
    ln(f => {
      const m = this.getAxisMotionValue(f);
      if (m && this.constraints !== false) {
        const p = m.get();
        u[f] = TA({
          min: p,
          max: p
        }, this.constraints[f]);
      }
    });
    const {
      transformTemplate: d
    } = this.visualElement.getProps();
    this.visualElement.current.style.transform = d ? d({}, "") : "none";
    if (r.root) {
      r.root.updateScroll();
    }
    r.updateLayout();
    this.constraints = false;
    this.resolveConstraints();
    ln(f => {
      if (!mr(f, a, null)) {
        return;
      }
      const m = this.getAxisMotionValue(f);
      const {
        min: p,
        max: y
      } = this.constraints[f];
      m.set(ke(p, y, u[f]));
    });
    this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current) {
      return;
    }
    AA.set(this.visualElement, this);
    const a = this.visualElement.current;
    const l = Ds(a, "pointerdown", y => {
      const {
        drag: v,
        dragListener: b = true
      } = this.getProps();
      const S = y.target;
      const E = S !== a && l2(S);
      if (v && b && !E) {
        this.start(y);
      }
    });
    let r;
    const u = () => {
      const {
        dragConstraints: y
      } = this.getProps();
      if (va(y) && y.current) {
        this.constraints = this.resolveRefConstraints();
        r ||= CA(a, y.current, () => this.scalePositionWithinConstraints());
      }
    };
    const {
      projection: d
    } = this.visualElement;
    const f = d.addEventListener("measure", u);
    if (d && !d.layout) {
      if (d.root) {
        d.root.updateScroll();
      }
      d.updateLayout();
    }
    Me.read(u);
    const m = Vs(window, "resize", () => this.scalePositionWithinConstraints());
    const p = d.addEventListener("didUpdate", ({
      delta: y,
      hasLayoutChanged: v
    }) => {
      if (this.isDragging && v) {
        ln(b => {
          const S = this.getAxisMotionValue(b);
          if (S) {
            this.originPoint[b] += y[b].translate;
            S.set(S.get() + y[b].translate);
          }
        });
        this.visualElement.render();
      }
    });
    return () => {
      m();
      l();
      f();
      if (p) {
        p();
      }
      if (r) {
        r();
      }
    };
  }
  getProps() {
    const a = this.visualElement.getProps();
    const {
      drag: l = false,
      dragDirectionLock: r = false,
      dragPropagation: u = false,
      dragConstraints: d = false,
      dragElastic: f = fd,
      dragMomentum: m = true
    } = a;
    return {
      ...a,
      drag: l,
      dragDirectionLock: r,
      dragPropagation: u,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: m
    };
  }
}
function Dy(n) {
  let a = true;
  return () => {
    if (a) {
      a = false;
      return;
    }
    n();
  };
}
function CA(n, a, l) {
  const r = Pg(n, Dy(l));
  const u = Pg(a, Dy(l));
  return () => {
    r();
    u();
  };
}
function mr(n, a, l) {
  return (a === true || a === n) && (l === null || l === n);
}
function NA(n, a = 10) {
  let l = null;
  if (Math.abs(n.y) > a) {
    l = "y";
  } else if (Math.abs(n.x) > a) {
    l = "x";
  }
  return l;
}
class kA extends li {
  constructor(a) {
    super(a);
    this.removeGroupControls = Gt;
    this.removeListeners = Gt;
    this.controls = new jA(a);
  }
  mount() {
    const {
      dragControls: a
    } = this.node.getProps();
    if (a) {
      this.removeGroupControls = a.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || Gt;
  }
  update() {
    const {
      dragControls: a
    } = this.node.getProps();
    const {
      dragControls: l
    } = this.node.prevProps || {};
    if (a !== l) {
      this.removeGroupControls();
      if (a) {
        this.removeGroupControls = a.subscribe(this.controls);
      }
    }
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
    if (!this.controls.isDragging) {
      this.controls.endPanSession();
    }
  }
}
const Oc = n => (a, l) => {
  if (n) {
    Me.update(() => n(a, l), false, true);
  }
};
class MA extends li {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = Gt;
  }
  onPointerDown(a) {
    this.session = new Fv(a, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Kv(this.node)
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: a,
      onPanStart: l,
      onPan: r,
      onPanEnd: u
    } = this.node.getProps();
    return {
      onSessionStart: Oc(a),
      onStart: Oc(l),
      onMove: Oc(r),
      onEnd: (d, f) => {
        delete this.session;
        if (u) {
          Me.postRender(() => u(d, f));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = Ds(this.node.current, "pointerdown", a => this.onPointerDown(a));
  }
  update() {
    if (this.session) {
      this.session.updateHandlers(this.createPanHandlers());
    }
  }
  unmount() {
    this.removePointerDownListener();
    if (this.session) {
      this.session.end();
    }
  }
}
let Bc = false;
class _Component2 extends T.Component {
  componentDidMount() {
    const {
      visualElement: a,
      layoutGroup: l,
      switchLayoutGroup: r,
      layoutId: u
    } = this.props;
    const {
      projection: d
    } = a;
    if (d) {
      if (l.group) {
        l.group.add(d);
      }
      if (r && r.register && u) {
        r.register(d);
      }
      if (Bc) {
        d.root.didUpdate();
      }
      d.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      d.setOptions({
        ...d.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove()
      });
    }
    Er.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(a) {
    const {
      layoutDependency: l,
      visualElement: r,
      drag: u,
      isPresent: d
    } = this.props;
    const {
      projection: f
    } = r;
    if (f) {
      f.isPresent = d;
      if (a.layoutDependency !== l) {
        f.setOptions({
          ...f.options,
          layoutDependency: l
        });
      }
      Bc = true;
      if (u || a.layoutDependency !== l || l === undefined || a.isPresent !== d) {
        f.willUpdate();
      } else {
        this.safeToRemove();
      }
      if (a.isPresent !== d) {
        if (d) {
          f.promote();
        } else if (!f.relegate()) {
          Me.postRender(() => {
            const m = f.getStack();
            if (!m || !m.members.length) {
              this.safeToRemove();
            }
          });
        }
      }
    }
    return null;
  }
  componentDidUpdate() {
    const {
      visualElement: a,
      layoutAnchor: l
    } = this.props;
    const {
      projection: r
    } = a;
    if (r) {
      r.options.layoutAnchor = l;
      r.root.didUpdate();
      Ud.postRender(() => {
        if (!r.currentAnimation && r.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    const {
      visualElement: a,
      layoutGroup: l,
      switchLayoutGroup: r
    } = this.props;
    const {
      projection: u
    } = a;
    Bc = true;
    if (u) {
      u.scheduleCheckAfterUnmount();
      if (l && l.group) {
        l.group.remove(u);
      }
      if (r && r.deregister) {
        r.deregister(u);
      }
    }
  }
  safeToRemove() {
    const {
      safeToRemove: a
    } = this.props;
    if (a) {
      a();
    }
  }
  render() {
    return null;
  }
}
function Wv(n) {
  const [a, l] = Ov();
  const r = T.useContext(Td);
  return <_Component2 {...n} layoutGroup={r} switchLayoutGroup={T.useContext(Qv)} isPresent={a} safeToRemove={l} />;
}
const DA = {
  pan: {
    Feature: MA
  },
  drag: {
    Feature: kA,
    ProjectionNode: Lv,
    MeasureLayout: Wv
  }
};
function qy(n, a, l) {
  const {
    props: r
  } = n;
  if (n.animationState && r.whileHover) {
    n.animationState.setActive("whileHover", l === "Start");
  }
  const u = "onHover" + l;
  const d = r[u];
  if (d) {
    Me.postRender(() => d(a, Gs(a)));
  }
}
class qA extends li {
  mount() {
    const {
      current: a
    } = this.node;
    if (a) {
      this.unmount = n2(a, (l, r) => {
        qy(this.node, r, "Start");
        return u => qy(this.node, u, "End");
      });
    }
  }
  unmount() {}
}
class LA extends li {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let a = false;
    try {
      a = this.node.current.matches(":focus-visible");
    } catch {
      a = true;
    }
    if (!!a && !!this.node.animationState) {
      this.node.animationState.setActive("whileFocus", true);
      this.isActive = true;
    }
  }
  onBlur() {
    if (!!this.isActive && !!this.node.animationState) {
      this.node.animationState.setActive("whileFocus", false);
      this.isActive = false;
    }
  }
  mount() {
    this.unmount = Us(Vs(this.node.current, "focus", () => this.onFocus()), Vs(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {}
}
function Ly(n, a, l) {
  const {
    props: r
  } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled) {
    return;
  }
  if (n.animationState && r.whileTap) {
    n.animationState.setActive("whileTap", l === "Start");
  }
  const u = "onTap" + (l === "End" ? "" : l);
  const d = r[u];
  if (d) {
    Me.postRender(() => d(a, Gs(a)));
  }
}
class OA extends li {
  mount() {
    const {
      current: a
    } = this.node;
    if (!a) {
      return;
    }
    const {
      globalTapTarget: l,
      propagate: r
    } = this.node.props;
    this.unmount = o2(a, (u, d) => {
      Ly(this.node, d, "Start");
      return (f, {
        success: m
      }) => Ly(this.node, f, m ? "End" : "Cancel");
    }, {
      useGlobalTarget: l,
      stopPropagation: (r == null ? undefined : r.tap) === false
    });
  }
  unmount() {}
}
const hd = new WeakMap();
const Vc = new WeakMap();
const BA = n => {
  const a = hd.get(n.target);
  if (a) {
    a(n);
  }
};
const VA = n => {
  n.forEach(BA);
};
function _A({
  root: n,
  ...a
}) {
  const l = n || document;
  if (!Vc.has(l)) {
    Vc.set(l, {});
  }
  const r = Vc.get(l);
  const u = JSON.stringify(a);
  r[u] ||= new IntersectionObserver(VA, {
    root: n,
    ...a
  });
  return r[u];
}
function PA(n, a, l) {
  const r = _A(a);
  hd.set(n, l);
  r.observe(n);
  return () => {
    hd.delete(n);
    r.unobserve(n);
  };
}
const UA = {
  some: 0,
  all: 1
};
class HA extends li {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    var p;
    if ((p = this.stopObserver) != null) {
      p.call(this);
    }
    const {
      viewport: a = {}
    } = this.node.getProps();
    const {
      root: l,
      margin: r,
      amount: u = "some",
      once: d
    } = a;
    const f = {
      root: l ? l.current : undefined,
      rootMargin: r,
      threshold: typeof u == "number" ? u : UA[u]
    };
    const m = y => {
      const {
        isIntersecting: v
      } = y;
      if (this.isInView === v || (this.isInView = v, d && !v && this.hasEnteredView)) {
        return;
      }
      if (v) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", v);
      }
      const {
        onViewportEnter: b,
        onViewportLeave: S
      } = this.node.getProps();
      const E = v ? b : S;
      if (E) {
        E(y);
      }
    };
    this.stopObserver = PA(this.node.current, f, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }
    const {
      props: a,
      prevProps: l
    } = this.node;
    if (["amount", "margin", "root"].some(QA(a, l))) {
      this.startObserver();
    }
  }
  unmount() {
    var a;
    if ((a = this.stopObserver) != null) {
      a.call(this);
    }
    this.hasEnteredView = false;
    this.isInView = false;
  }
}
function QA({
  viewport: n = {}
}, {
  viewport: a = {}
} = {}) {
  return l => n[l] !== a[l];
}
const GA = {
  inView: {
    Feature: HA
  },
  tap: {
    Feature: OA
  },
  focus: {
    Feature: LA
  },
  hover: {
    Feature: qA
  }
};
const KA = {
  layout: {
    ProjectionNode: Lv,
    MeasureLayout: Wv
  }
};
const FA = {
  ...pA,
  ...GA,
  ...DA,
  ...KA
};
const Pe = cA(FA, dA);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const YA = n => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const WA = n => n.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, l, r) => r ? r.toUpperCase() : l.toLowerCase());
const Oy = n => {
  const a = WA(n);
  return a.charAt(0).toUpperCase() + a.slice(1);
};
const Xv = (...n) => n.filter((a, l, r) => !!a && a.trim() !== "" && r.indexOf(a) === l).join(" ").trim();
const XA = n => {
  for (const a in n) {
    if (a.startsWith("aria-") || a === "role" || a === "title") {
      return true;
    }
  }
};
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ZA = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}; /**
   * @license lucide-react v0.546.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
const IA = T.forwardRef(({
  color: n = "currentColor",
  size: a = 24,
  strokeWidth: l = 2,
  absoluteStrokeWidth: r,
  className: u = "",
  children: d,
  iconNode: f,
  ...m
}, p) => T.createElement("svg", {
  ref: p,
  ...ZA,
  width: a,
  height: a,
  stroke: n,
  strokeWidth: r ? Number(l) * 24 / Number(a) : l,
  className: Xv("lucide", u),
  ...(!d && !XA(m) && {
    "aria-hidden": "true"
  }),
  ...m
}, [...f.map(([y, v]) => T.createElement(y, v)), ...(Array.isArray(d) ? d : [d])])); /**
                                                                                     * @license lucide-react v0.546.0 - ISC
                                                                                     *
                                                                                     * This source code is licensed under the ISC license.
                                                                                     * See the LICENSE file in the root directory of this source tree.
                                                                                     */
const ut = (n, a) => {
  const l = T.forwardRef(({
    className: r,
    ...u
  }, d) => T.createElement(IA, {
    ref: d,
    iconNode: a,
    className: Xv(`lucide-${YA(Oy(n))}`, `lucide-${n}`, r),
    ...u
  }));
  l.displayName = Oy(n);
  return l;
}; /**
   * @license lucide-react v0.546.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
const $A = [["path", {
  d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
  key: "169zse"
}]];
const JA = ut("activity", $A);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ej = [["path", {
  d: "m12 19-7-7 7-7",
  key: "1l729n"
}], ["path", {
  d: "M19 12H5",
  key: "x3x0zl"
}]];
const _Component1 = ut("arrow-left", ej);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const nj = [["path", {
  d: "M5 12h14",
  key: "1ays0h"
}], ["path", {
  d: "m12 5 7 7-7 7",
  key: "xquz4c"
}]];
const _Component6 = ut("arrow-right", nj);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ij = [["path", {
  d: "M20 6 9 17l-5-5",
  key: "1gmf2c"
}]];
const _Component7 = ut("check", ij);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const sj = [["path", {
  d: "m6 9 6 6 6-6",
  key: "qrunsl"
}]];
const Yr = ut("chevron-down", sj);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const lj = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "m9 12 2 2 4-4",
  key: "dzmm74"
}]];
const _Component12 = ut("circle-check", lj);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const oj = [["path", {
  d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
  key: "kmsa83"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]];
const _Component10 = ut("circle-play", oj);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const cj = [["path", {
  d: "M12 16h.01",
  key: "1drbdi"
}], ["path", {
  d: "M16 16h.01",
  key: "1f9h7w"
}], ["path", {
  d: "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",
  key: "1iv0i2"
}], ["path", {
  d: "M8 16h.01",
  key: "18s6g9"
}]];
const dj = ut("factory", cj);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const fj = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M10 9H8",
  key: "b1mrlr"
}], ["path", {
  d: "M16 13H8",
  key: "t4e002"
}], ["path", {
  d: "M16 17H8",
  key: "z1uh3a"
}]];
const Zv = ut("file-text", fj);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const hj = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
  key: "13o1zl"
}], ["path", {
  d: "M2 12h20",
  key: "9i4pu4"
}]];
const _Component3 = ut("globe", hj);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const pj = [["path", {
  d: "M21 12a9 9 0 1 1-6.219-8.56",
  key: "13zald"
}]];
const _Component8 = ut("loader-circle", pj);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const yj = [["path", {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
  key: "1r0f0z"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3",
  key: "ilqhr7"
}]];
const _Component11 = ut("map-pin", yj);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bj = [["path", {
  d: "M4 5h16",
  key: "1tepv9"
}], ["path", {
  d: "M4 12h16",
  key: "1lakjw"
}], ["path", {
  d: "M4 19h16",
  key: "1djgab"
}]];
const _Component5 = ut("menu", bj);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Sj = [["path", {
  d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
  key: "1miecu"
}]];
const _Component9 = ut("paperclip", Sj);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Tj = [["path", {
  d: "M18 6 6 18",
  key: "1bl5f8"
}], ["path", {
  d: "m6 6 12 12",
  key: "d8bk6v"
}]];
const Ej = ut("x", Tj);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Rj = [["path", {
  d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
  key: "1xq2db"
}]];
const Aj = ut("zap", Rj);
function Iv({
  className: n = "h-10 w-10",
  nameClassName: a = "text-lg",
  gapClassName: l = "gap-3",
  showName: r = true
}) {
  return <div className={`flex items-center ${l}`} aria-label="Synpath"><img src="/synpath-logo.png" alt="" className={`rounded-lg object-cover shrink-0 ${n}`} />{r && <span className={`font-semibold text-white ${a}`}>Synpath</span>}</div>;
}
const jj = {
  en: "EN",
  fr: "FR",
  de: "DE",
  zh: "中文"
};
function By({
  variant: n = "desktop"
}) {
  const {
    locale: a,
    setLocale: l
  } = useLanguage();
  const [r, u] = T.useState(false);
  const d = T.useRef(null);
  T.useEffect(() => {
    const f = m => {
      if (d.current && !d.current.contains(m.target)) {
        u(false);
      }
    };
    document.addEventListener("mousedown", f);
    return () => document.removeEventListener("mousedown", f);
  }, []);
  if (n === "mobile") {
    return <div className="pt-4 border-t border-neutral-800"><p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">Language</p><div className="grid grid-cols-2 gap-2">{yg.map(f => <button type="button" onClick={() => l(f.code)} className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${a === f.code ? "border-white bg-white text-black" : "border-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white"}`} key={f.code}>{f.label}</button>)}</div></div>;
  } else {
    return <div ref={d} className="relative"><button type="button" onClick={() => u(f => !f)} className="flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-600 hover:text-white" aria-expanded={r} aria-haspopup="listbox" aria-label="Select language"><_Component3 className="h-4 w-4 shrink-0" /><span>{jj[a]}</span><Yr className={`h-4 w-4 transition-transform duration-200 ${r ? "rotate-180" : ""}`} /></button><_Component4>{r && <Pe.div initial={{
          opacity: 0,
          y: 8
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: 8
        }} transition={{
          duration: 0.15
        }} className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-[9.5rem] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 py-1 shadow-2xl" role="listbox">{yg.map(f => <button type="button" role="option" aria-selected={a === f.code} onClick={() => {
            l(f.code);
            u(false);
          }} className={`block w-full px-4 py-2.5 text-left text-sm transition-colors ${a === f.code ? "bg-white/10 font-medium text-white" : "text-neutral-400 hover:bg-neutral-800 hover:text-white"}`} key={f.code}>{f.label}</button>)}</Pe.div>}</_Component4></div>;
  }
}
function Header() {
  const [n, a] = T.useState(false);
  const [l, r] = T.useState(false);
  const u = T.useRef(null);
  const d = en();
  const {
    t: f,
    localizedSolutions: m
  } = useLanguage();
  const p = {
    sales: f.nav.sales,
    operations: f.nav.operations
  };
  T.useEffect(() => {
    a(false);
    r(false);
  }, [d.pathname]);
  const y = () => {
    if (u.current) {
      clearTimeout(u.current);
    }
    r(true);
  };
  const v = () => {
    u.current = setTimeout(() => {
      r(false);
    }, 150);
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex items-center justify-between h-20"><$e to="/" className="flex items-center group"><Iv className="h-[70px] w-[70px] opacity-95 group-hover:opacity-80 transition-opacity" nameClassName="text-3xl tracking-wider -translate-y-0.5" gapClassName="gap-2" /></$e><nav className="hidden md:flex items-center gap-8"><$e to="/" className="text-base font-medium text-neutral-300 hover:text-white transition-colors">{f.nav.home}</$e><div className="relative" onMouseEnter={y} onMouseLeave={v}><button className="flex items-center gap-1.5 text-base font-medium text-neutral-300 hover:text-white transition-colors h-20">{f.nav.solutions}<Yr className={`w-5 h-5 transition-transform duration-200 ${l ? "rotate-180" : ""}`} /></button><_Component4>{l && <Pe.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: 10
              }} transition={{
                duration: 0.2
              }} className="absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 w-max min-w-[22rem] bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden py-2 z-50"><div className="flex divide-x divide-neutral-800">{Hc.map(b => <div className="min-w-[11rem] shrink-0 px-1" key={b.category}><p className="px-3 pt-2 pb-2 text-[10px] font-semibold uppercase tracking-wider text-neutral-500 whitespace-nowrap">{p[b.category]}</p>{m.filter(S => S.category === b.category).map(S => <$e to={`/solutions/${S.id}`} className="block px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors whitespace-nowrap" key={S.id}>{S.title}</$e>)}</div>)}</div></Pe.div>}</_Component4></div><$e to="/company" className="text-base font-medium text-neutral-300 hover:text-white transition-colors">{f.nav.company}</$e></nav><div className="hidden md:flex items-center gap-3"><By /><$e to="/book-demo" className="bg-white text-black px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-neutral-200 transition-colors">{f.nav.bookDemo}</$e></div><div className="md:hidden flex items-center gap-3"><By /><button onClick={() => a(!n)} className="text-neutral-300 hover:text-white">{n ? <Ej className="w-6 h-6" /> : <_Component5 className="w-6 h-6" />}</button></div></div></div><_Component4>{n && <Pe.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden border-b border-neutral-800 bg-neutral-950 overflow-hidden"><div className="px-4 py-6 space-y-4"><$e to="/" className="block py-2 text-base text-neutral-300 hover:text-white">{f.nav.home}</$e><div className="space-y-4"><div className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">{f.nav.solutions}</div>{Hc.map(b => <div className="space-y-1" key={b.category}><div className="pl-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">{p[b.category]}</div>{m.filter(S => S.category === b.category).map(S => <$e to={`/solutions/${S.id}`} className="block pl-4 py-2 text-base text-neutral-300 hover:text-white" key={S.id}>{S.title}</$e>)}</div>)}</div><div className="pt-4 border-t border-neutral-800"><$e to="/company" className="block py-2 text-base text-neutral-300 hover:text-white">{f.nav.company}</$e></div><div className="pt-4"><$e to="/book-demo" className="block w-full text-center bg-white text-black px-5 py-3 rounded-md text-sm font-semibold hover:bg-neutral-200 transition-colors">{f.nav.bookDemo}</$e></div></div></Pe.div>}</_Component4></header>;
}
function Footer() {
  const {
    t: n,
    localizedSolutions: a
  } = useLanguage();
  return <footer className="bg-black py-12 md:py-20 border-t border-white/10"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"><div className="col-span-1 md:col-span-1 border-neutral-800"><$e to="/" className="inline-flex mb-4"><Iv className="h-9 w-9" /></$e><p className="text-sm text-neutral-400">{n.footer.tagline}</p></div><div><h4 className="text-sm font-semibold text-white mb-4">{n.footer.solutions}</h4><ul className="space-y-3">{a.map(l => <li key={l.id}><$e to={`/solutions/${l.id}`} className="text-sm text-neutral-400 hover:text-white transition-colors">{l.title}</$e></li>)}</ul></div><div><h4 className="text-sm font-semibold text-white mb-4">{n.footer.company}</h4><ul className="space-y-3"><li><$e to="/company" className="text-sm text-neutral-400 hover:text-white transition-colors">{n.footer.aboutUs}</$e></li></ul></div><div><h4 className="text-sm font-semibold text-white mb-4">{n.footer.legal}</h4><ul className="space-y-3"><li><$e to="/privacy" className="text-sm text-neutral-400 hover:text-white transition-colors">{n.footer.privacy}</$e></li><li><$e to="/terms" className="text-sm text-neutral-400 hover:text-white transition-colors">{n.footer.terms}</$e></li></ul></div></div><div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between"><p className="text-xs text-neutral-500">© {new Date().getFullYear()} {n.footer.copyright}</p></div></div></footer>;
}
function Layout() {
  return <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-neutral-800 selection:text-white flex flex-col"><Header /><main className="flex-1 pt-20"><Mw /></main><Footer /></div>;
}
function HomePage() {
  const {
    t: n
  } = useLanguage();
  const u = [{
    icon: JA,
    text: n.home.featureErp
  }, {
    icon: Aj,
    text: n.home.featureInfra
  }, {
    icon: dj,
    text: n.home.featureShopFloor
  }];
  return <div className="flex flex-col"><Hero /><OperationalComplexitySection /><HowItWorksSection /><section className="py-24 bg-black border-t border-white/5"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">{n.home.integrationTitle}</h2><p className="text-lg text-neutral-400 mb-10">{n.home.integrationSubtitle}</p><ul className="space-y-4 text-left max-w-md mx-auto">{u.map((d, f) => <li className="flex items-center text-neutral-300" key={f}><div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 mr-4 shrink-0"><d.icon className="w-4 h-4 text-white" /></div>{d.text}</li>)}</ul></div></div></section></div>;
}
const zj = 6500;
const Dj = [{
  part: "NB-4421",
  material: "6061-T6 Aluminium",
  qty: "250",
  unit: "$38.50",
  setup: "$650.00",
  extended: "$10,275.00",
  price: "$38.50/ea",
  setupShort: "$650"
}, {
  part: "NB-5187",
  material: "304 Stainless Steel",
  qty: "150",
  unit: "$72.00",
  setup: "$850.00",
  extended: "$11,650.00",
  price: "$72.00/ea",
  setupShort: "$850"
}, {
  part: "NB-7740",
  material: "4140 Steel",
  qty: "600",
  unit: "$8.40",
  setup: "$300.00",
  extended: "$5,340.00",
  price: "$8.40/ea",
  setupShort: "$300"
}];
const qj = [{
  hrs: "—",
  rate: "—",
  amount: "$8,400"
}, {
  hrs: "14",
  rate: "$70",
  amount: "$980"
}, {
  hrs: "10",
  rate: "$95",
  amount: "$950"
}, {
  hrs: "82",
  rate: "$95",
  amount: "$7,790"
}, {
  hrs: "—",
  rate: "—",
  amount: "$4,200"
}, {
  hrs: "—",
  rate: "—",
  amount: "$1,200"
}, {
  hrs: "—",
  rate: "—",
  amount: "$800"
}, {
  hrs: "30",
  rate: "$65",
  amount: "$1,950"
}, {
  hrs: "18",
  rate: "$70",
  amount: "$1,260"
}, {
  hrs: "22",
  rate: "$75",
  amount: "$1,650"
}, {
  hrs: "—",
  rate: "—",
  amount: "$600"
}, {
  hrs: "16",
  rate: "$70",
  amount: "$1,120"
}, {
  hrs: "—",
  rate: "—",
  amount: "$800"
}];
const Lj = [{
  name: "Supplier A",
  lead: "7 days",
  quote: "$4,200",
  statusKey: "received"
}, {
  name: "Supplier B",
  lead: "—",
  quote: "—",
  statusKey: "pending"
}, {
  name: "Supplier C",
  lead: "5 days",
  quote: "$1,200",
  statusKey: "received"
}];
const Oj = ["$9,000", "$16,500", "$6,200", "$16,100"];
function Bj({
  demoType: n,
  activeStep: a
}) {
  const {
    demo: l
  } = useLanguage();
  const r = T.useRef(null);
  const u = T.useRef(false);
  const d = T.useRef(false);
  const f = n === "quoting" ? l.quoting.statuses : l.estimating.statuses;
  const m = f[a] ?? f[0];
  T.useEffect(() => {
    const v = r.current;
    if (!v) {
      return;
    }
    u.current = false;
    v.scrollTop = 0;
    let b = 0;
    const S = () => {
      u.current = true;
      cancelAnimationFrame(b);
    };
    const E = () => {
      if (!d.current) {
        S();
      }
    };
    v.addEventListener("wheel", S, {
      passive: true
    });
    v.addEventListener("touchmove", S, {
      passive: true
    });
    v.addEventListener("scroll", E, {
      passive: true
    });
    const j = window.setTimeout(() => {
      const M = v.scrollHeight - v.clientHeight;
      if (M <= 0) {
        return;
      }
      const k = performance.now();
      const N = _ => {
        if (u.current) {
          return;
        }
        const L = Math.min((_ - k) / zj, 1);
        d.current = true;
        v.scrollTop = M * L;
        requestAnimationFrame(() => {
          d.current = false;
        });
        if (L < 1) {
          b = requestAnimationFrame(N);
        }
      };
      b = requestAnimationFrame(N);
    }, 400);
    return () => {
      window.clearTimeout(j);
      cancelAnimationFrame(b);
      v.removeEventListener("wheel", S);
      v.removeEventListener("touchmove", S);
      v.removeEventListener("scroll", E);
    };
  }, [n, a]);
  const p = () => n === "quoting" ? a === 0 ? <Vj d={l} /> : a === 1 ? <_j d={l} /> : a === 2 ? <Pj d={l} /> : <Uj d={l} /> : a === 0 ? <Hj d={l} /> : a === 1 ? <Qj d={l} /> : <Gj d={l} />;
  const y = n === "estimating" && a === 2 || n === "quoting" && a === 3;
  return <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-2 md:p-4 overflow-hidden"><div className="flex h-[70vh] min-h-[300px] w-full flex-col"><div ref={r} className="min-h-0 flex-1 overflow-y-auto rounded-xl bg-[#0a0a0a]"><_Component4 mode="wait"><Pe.div initial={{
            opacity: 0,
            y: 8
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -8
          }} transition={{
            duration: 0.3
          }} className="min-h-full p-5 md:p-6" key={`${n}-${a}`}>{p()}</Pe.div></_Component4></div><div className="mt-2 flex shrink-0 items-center justify-center gap-2 border-t border-neutral-800 px-4 py-3 text-sm text-neutral-400">{y ? <h.Fragment><_Component7 className="h-4 w-4 text-white" /><span className="text-white">{m}</span></h.Fragment> : <h.Fragment><_Component8 className="h-4 w-4 animate-spin text-neutral-500" />{m}</h.Fragment>}</div></div></div>;
}
function Wr(n) {
  return Dj.map((a, l) => ({
    ...a,
    description: n.quoting.parts[l].description,
    process: n.quoting.parts[l].process
  }));
}
function Vj({
  d: n
}) {
  const a = Wr(n);
  const {
    common: l
  } = n;
  const {
    email: r
  } = n.quoting;
  return <div className="space-y-4 text-sm"><div className="flex flex-wrap items-center justify-between gap-2 text-neutral-500 text-xs uppercase tracking-wider"><span>{r.inbox}</span><span>Mar 4, 2026</span></div><div className="space-y-1 text-neutral-400 font-mono text-xs"><p><span className="text-neutral-500">{l.from}</span> procurement@northbridgerobotics.com</p><p><span className="text-neutral-500">{l.to}</span> quotes@yourcompany.com</p><p><span className="text-neutral-500">{l.subject}</span> <span className="text-white">{r.subjectLine}</span></p></div><div className="flex flex-wrap items-center gap-2 text-neutral-400 text-xs"><_Component9 className="w-3.5 h-3.5 shrink-0" />{["RFQ-NBR-260184.xlsx", "NB-4421_revC.pdf", "NB-5187_revB.step", "NB-7740_revA.pdf"].map(u => <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-neutral-900 border border-neutral-800" key={u}><Zv className="w-3 h-3" /> {u}</span>)}</div><div className="text-neutral-300 leading-relaxed space-y-3"><p>{r.greeting}</p><p>{r.body}</p></div><div className="overflow-x-auto rounded-lg border border-neutral-800"><table className="w-full text-left text-xs min-w-[520px]"><thead className="bg-neutral-900 text-neutral-500"><tr><th className="px-3 py-2 font-medium">{l.partNumber}</th><th className="px-3 py-2 font-medium">{l.description}</th><th className="px-3 py-2 font-medium">{l.material}</th><th className="px-3 py-2 font-medium text-right">{l.qty}</th></tr></thead><tbody className="text-neutral-300 divide-y divide-neutral-800">{a.map(u => <tr key={u.part}><td className="px-3 py-2 text-white">{u.part}</td><td className="px-3 py-2">{u.description}</td><td className="px-3 py-2">{u.material}</td><td className="px-3 py-2 text-right">{u.qty}</td></tr>)}</tbody></table></div><div className="text-neutral-400 text-xs leading-relaxed space-y-2"><p>{r.closing}</p><p>{r.regards}</p><p>{r.team}</p><p>Northbridge Robotics</p></div></div>;
}
function Ta({
  children: n
}) {
  return <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">{n}</span>;
}
function _j({
  d: n
}) {
  const a = Wr(n);
  const {
    common: l
  } = n;
  const {
    extract: r
  } = n.quoting;
  return <div className="space-y-4 text-sm"><p className="text-[10px] uppercase tracking-wider text-neutral-500">{r.title}</p><div className="overflow-x-auto rounded-lg border border-neutral-800"><table className="w-full text-left text-xs min-w-[600px]"><thead><tr className="bg-neutral-900 text-neutral-500 border-b border-neutral-800"><th className="px-3 py-2 font-medium">{l.part}</th><th className="px-3 py-2 font-medium">{l.description}</th><th className="px-3 py-2 font-medium">{l.material}</th><th className="px-3 py-2 font-medium text-right">{l.qty}</th><th className="px-3 py-2 font-medium text-right">{l.catalog}</th></tr></thead><tbody className="text-neutral-300 divide-y divide-neutral-800">{a.map(u => <tr key={u.part}><td className="px-3 py-2 text-white font-medium">{u.part}</td><td className="px-3 py-2">{u.description}</td><td className="px-3 py-2">{u.material}</td><td className="px-3 py-2 text-right">{u.qty}</td><td className="px-3 py-2 text-right"><Ta>{l.matched}</Ta></td></tr>)}</tbody></table></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"><div className="rounded-lg border border-neutral-800 bg-neutral-900/80 px-3 py-2.5"><p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1">{l.customer}</p><div className="flex flex-wrap items-center gap-2"><p className="text-sm font-medium text-white">Northbridge Robotics</p><Ta>{l.matched}</Ta></div></div><div className="rounded-lg border border-neutral-800 bg-neutral-900/80 px-3 py-2.5"><p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1">{r.rfqReference}</p><p className="text-sm font-medium text-white">#NBR-260184</p></div><div className="rounded-lg border border-neutral-800 bg-neutral-900/80 px-3 py-2.5"><p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1">{r.linesDetected}</p><div className="flex flex-wrap items-center gap-2"><p className="text-sm font-medium text-white">{r.linesCount}</p><Ta>{l.verified}</Ta></div></div><div className="rounded-lg border border-neutral-800 bg-neutral-900/80 px-3 py-2.5"><p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1">{r.drawingRevisions}</p><p className="text-sm font-medium text-white">{r.filesChecked}</p></div></div></div>;
}
function Pj({
  d: n
}) {
  const a = Wr(n);
  const {
    common: l
  } = n;
  const {
    erp: r
  } = n.quoting;
  return <div className="space-y-4 text-sm"><div className="rounded-lg border border-neutral-800 overflow-hidden"><div className="px-3 py-2 bg-neutral-800 border-b border-neutral-700"><p className="text-xs font-semibold text-white">{r.title}</p></div><div className="p-3 space-y-3 bg-neutral-900/50"><div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-neutral-800"><p className="text-xs text-neutral-400">{l.customerColon} <span className="text-white font-medium">Northbridge Robotics</span></p><Ta>{l.matched}</Ta></div><div className="space-y-2">{a.map(u => <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-neutral-800 bg-black/30 px-3 py-2" key={u.part}><div><p className="text-xs font-medium text-white">{u.part}</p><p className="text-[10px] text-neutral-500 mt-0.5">{l.qty} {u.qty} · {l.customerPrice}: {u.price}</p><p className="text-[10px] text-neutral-500 mt-0.5">{l.setup}: {u.setupShort} · {l.process}: {u.process}</p></div><Ta>{l.found}</Ta></div>)}</div><div className="flex items-center justify-between pt-3 border-t border-dashed border-neutral-700"><p className="text-[10px] uppercase tracking-wider text-neutral-500">{l.quoteTotal}</p><p className="text-xl font-semibold text-emerald-400">$27,265.00</p></div><div className="flex items-center justify-between rounded-lg border border-neutral-800 bg-black/30 px-3 py-2"><p className="text-[10px] uppercase tracking-wider text-neutral-500">{l.marginCheck}</p><p className="text-xs text-neutral-300">{l.target} <span className="text-white font-medium">30%</span> · {l.achieved} <span className="text-emerald-400 font-medium">31.8%</span></p></div></div></div></div>;
}
function Uj({
  d: n
}) {
  const a = Wr(n);
  const {
    common: l
  } = n;
  const {
    sent: r
  } = n.quoting;
  const u = [{
    label: l.validUntil,
    value: "04/03/26"
  }, {
    label: l.leadTime,
    value: "4–5 weeks"
  }, {
    label: l.terms,
    value: "Net 30"
  }, {
    label: l.lines,
    value: "3"
  }];
  return <div className="space-y-4 text-sm"><div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-neutral-800"><div><div className="flex items-center gap-2 mb-1"><span className="text-xl font-semibold text-white tracking-tight">Q-NBR-260184</span><Ta>{r.readyToSend}</Ta></div><p className="text-neutral-500 text-xs">{r.ref}</p></div><div className="text-right"><p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-0.5">{l.quoteTotal}</p><p className="text-2xl font-semibold text-emerald-400">$27,265.00</p></div></div><div className="grid grid-cols-2 sm:grid-cols-4 gap-2">{u.map(d => <div className="rounded-lg border border-neutral-800 bg-neutral-900/80 px-3 py-2.5 text-center" key={d.label}><p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1">{d.label}</p><p className="text-sm font-semibold text-white">{d.value}</p></div>)}</div><div className="overflow-x-auto rounded-lg border border-neutral-800"><table className="w-full text-left text-xs min-w-[640px]"><thead><tr className="bg-neutral-900 text-neutral-500 border-b border-neutral-800"><th className="px-3 py-2 font-medium">{l.part}</th><th className="px-3 py-2 font-medium">{l.description}</th><th className="px-3 py-2 font-medium text-right">{l.qty}</th><th className="px-3 py-2 font-medium text-right">{l.unit}</th><th className="px-3 py-2 font-medium text-right">{l.setup}</th><th className="px-3 py-2 font-medium text-right">{l.extended}</th></tr></thead><tbody className="text-neutral-300 divide-y divide-neutral-800">{a.map(d => <tr key={d.part}><td className="px-3 py-2 text-white font-medium">{d.part}</td><td className="px-3 py-2">{d.description}</td><td className="px-3 py-2 text-right">{d.qty}</td><td className="px-3 py-2 text-right">{d.unit}</td><td className="px-3 py-2 text-right">{d.setup}</td><td className="px-3 py-2 text-right font-medium text-white">{d.extended}</td></tr>)}</tbody></table></div></div>;
}
function Hj({
  d: n
}) {
  const {
    common: a
  } = n;
  const {
    email: l
  } = n.estimating;
  return <div className="space-y-4 text-sm"><div className="flex flex-wrap items-center justify-between gap-2 text-neutral-500 text-xs uppercase tracking-wider"><span>{l.inbox}</span><span>Feb 21, 2026</span></div><div className="space-y-1 text-neutral-400 font-mono text-xs"><p><span className="text-neutral-500">{a.from}</span> engineering@alvera-industrial.com</p><p><span className="text-neutral-500">{a.subject}</span> <span className="text-white">{l.subjectLine}</span></p></div><div className="flex flex-wrap gap-2 text-xs">{["profile_drawing.pdf", "specs.xlsx", "support_profile.step"].map(r => <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-400" key={r}><Zv className="w-3 h-3" />{r}</span>)}</div><div className="text-neutral-300 leading-relaxed space-y-3"><p>{l.greeting}</p><p>{l.body1}</p><p>{l.body2}</p><p>{l.body3}</p><p className="text-neutral-500 text-xs">{l.signature}</p></div></div>;
}
function Qj({
  d: n
}) {
  const {
    drawings: a
  } = n.estimating;
  return <div className="space-y-4 text-sm"><div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><Vy title="profile_drawing.pdf" subtitle={a.partDrawing} headerClass="bg-neutral-800"><Kj /></Vy><Vy title="specs.xlsx" subtitle={a.buildSpec} headerClass="bg-neutral-700"><Fj /></Vy></div><div className="grid grid-cols-3 gap-2"><_c label={a.profileLength} value={a.profileLengthValue} /><_c label={a.machiningFeatures} value={a.machiningFeaturesValue} /><_c label={a.supplierPricingNeeded} value={a.supplierPricingNeededValue} /></div></div>;
}
function Gj({
  d: n
}) {
  const {
    common: a
  } = n;
  const {
    quote: l,
    costLines: r,
    suppliers: u
  } = n.estimating;
  const d = r.map((p, y) => ({
    ...p,
    ...qj[y]
  }));
  const f = Lj.map((p, y) => ({
    ...p,
    capability: u[y].capability,
    location: u[y].location,
    status: p.statusKey === "received" ? a.received : a.pending
  }));
  const m = [a.materials, l.internalOps, l.supplierQuotes, a.margin];
  return <div className="space-y-4 text-sm"><div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-neutral-800"><div><div className="flex items-center gap-2 mb-1"><span className="text-xl font-semibold text-white tracking-tight">ALU25-018</span><span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-white/10 text-white border border-white/20">{l.draftEstimate}</span></div><p className="text-neutral-500 text-xs">{l.subtitle}</p></div><div className="text-right"><p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-0.5">{a.quoteTotal}</p><p className="text-2xl font-semibold text-white">$47,800.00</p><p className="text-[10px] text-neutral-500 mt-0.5">{l.marginSummary}</p><p className="text-[10px] text-neutral-500">{l.leadTimeSummary}</p></div></div><div className="grid grid-cols-2 sm:grid-cols-4 gap-2">{m.map((p, y) => <div className="rounded-lg border border-neutral-800 bg-neutral-900/80 px-3 py-2.5 text-center" key={p}><p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1">{p}</p><p className="text-sm font-semibold text-white">{Oj[y]}</p></div>)}</div><div className="overflow-x-auto rounded-lg border border-neutral-800"><table className="w-full text-left text-xs min-w-[520px]"><thead><tr className="bg-neutral-900 text-neutral-500 border-b border-neutral-800"><th className="px-3 py-2 font-medium">{l.costLine}</th><th className="px-3 py-2 font-medium">{a.basis}</th><th className="px-3 py-2 font-medium text-right">{a.hrs}</th><th className="px-3 py-2 font-medium text-right">{a.rate}</th><th className="px-3 py-2 font-medium text-right">{a.amount}</th></tr></thead><tbody className="text-neutral-300 divide-y divide-neutral-800">{d.map(p => <tr key={p.line}><td className="px-3 py-2 text-white">{p.line}</td><td className="px-3 py-2 text-neutral-400">{p.basis}</td><td className="px-3 py-2 text-right text-neutral-500">{p.hrs}</td><td className="px-3 py-2 text-right text-neutral-500">{p.rate}</td><td className="px-3 py-2 text-right font-medium text-white">{p.amount}</td></tr>)}</tbody></table></div><div><p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-2">{l.supplierRfqs}</p><div className="overflow-x-auto rounded-lg border border-neutral-800"><table className="w-full text-left text-[10px] min-w-[560px]"><thead><tr className="bg-neutral-900 text-neutral-500 border-b border-neutral-800"><th className="px-2 py-2 font-medium">{a.supplier}</th><th className="px-2 py-2 font-medium">{a.capability}</th><th className="px-2 py-2 font-medium">{a.location}</th><th className="px-2 py-2 font-medium">{a.status}</th><th className="px-2 py-2 font-medium">{a.leadTime}</th><th className="px-2 py-2 font-medium text-right">{a.quote}</th></tr></thead><tbody className="text-neutral-300 divide-y divide-neutral-800">{f.map(p => <tr key={p.name}><td className="px-2 py-2 text-white">{p.name}</td><td className="px-2 py-2 text-neutral-400">{p.capability}</td><td className="px-2 py-2 text-neutral-400">{p.location}</td><td className="px-2 py-2"><span className={p.statusKey === "received" ? "text-white" : "text-neutral-500"}>{p.status}</span></td><td className="px-2 py-2 text-neutral-400">{p.lead}</td><td className="px-2 py-2 text-right font-medium text-white">{p.quote}</td></tr>)}</tbody></table></div></div><div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-3 space-y-2"><p className="text-[10px] uppercase tracking-wider text-neutral-500">{l.aiRecommendation}</p><p className="text-xs text-neutral-300 leading-relaxed">{l.recAnodising}</p><p className="text-xs text-neutral-300 leading-relaxed">{l.recInserts}</p><p className="text-[10px] text-neutral-500">{l.approvalNote}</p></div></div>;
}
function Vy({
  title: n,
  subtitle: a,
  headerClass: l,
  children: r
}) {
  return <div className="rounded-lg border border-neutral-800 overflow-hidden bg-neutral-900/50"><div className={`px-3 py-2 ${l}`}><p className="text-xs font-medium text-white">{n}, <span className="text-neutral-400 font-normal">{a}</span></p></div><div className="p-3 bg-black/40">{r}</div></div>;
}
function _c({
  label: n,
  value: a
}) {
  return <div className="rounded-lg border border-neutral-700 bg-neutral-900/80 px-2 py-3 text-center"><p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1">{n}</p><p className="text-lg font-semibold text-white">{a}</p></div>;
}
function Kj() {
  return <div className="rounded border border-neutral-700 bg-white overflow-hidden"><img src="/profile-drawing.png" alt="Machined aluminium support profile engineering drawing" className="w-full h-auto object-contain" /></div>;
}
function Fj() {
  return <div className="rounded border border-neutral-700 bg-white overflow-hidden"><img src="/build-specification.png" alt="Build specification sheet for machined aluminium support profile" className="w-full h-auto object-contain" /></div>;
}
function SolutionPage() {
  var E;
  var j;
  var M;
  var k;
  var N;
  var _;
  const {
    solutionId: n
  } = gw();
  const [a, l] = T.useState(0);
  const [r, u] = T.useState(0);
  const {
    t: d,
    getLocalizedSolution: f,
    localizedSolutions: m
  } = useLanguage();
  const p = n ? f(n) : undefined;
  const y = m.filter(L => L.id !== n).slice(0, 3);
  T.useEffect(() => {
    l(0);
    u(0);
  }, [n]);
  T.useEffect(() => {
    if (p == null || !p.howItWorks || p.howItWorks.demoType === "video") {
      return;
    }
    const L = p.howItWorks.steps.length;
    const U = setInterval(() => {
      l(K => (K + 1) % L);
    }, 7000);
    return () => clearInterval(U);
  }, [n, (E = p == null ? undefined : p.howItWorks) == null ? undefined : E.steps.length, (j = p == null ? undefined : p.howItWorks) == null ? undefined : j.demoType]);
  if (!p) {
    return <_Component0 to="/" replace={true} />;
  }
  const v = !!p.howItWorks;
  const b = ((M = p.howItWorks) == null ? undefined : M.demoType) === "video";
  const S = !!p.setupSteps;
  return <div className="flex flex-col"><section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/10 bg-neutral-950"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><$e to="/" className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-white transition-colors mb-8"><_Component1 className="mr-2 w-4 h-4" /> {d.solution.backToHome}</$e><div className="max-w-4xl">{p.title !== p.heroTitle && <Pe.p initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4
          }} className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">{p.title}</Pe.p>}<Pe.h1 initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight" key={`title-${p.id}`}>{p.heroTitle}</Pe.h1><Pe.p initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="text-lg md:text-2xl text-neutral-400 leading-relaxed max-w-3xl mb-10" key={`desc-${p.id}`}>{p.heroSubtitle}</Pe.p><Pe.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}><$e to="/book-demo" className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-neutral-200 transition-colors">{d.solution.bookDemo} <_Component6 className="ml-2 w-4 h-4" /></$e></Pe.div></div></div></section>{v && p.howItWorks && <section className="py-24 bg-black border-b border-white/5"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="mb-12"><p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">{d.solution.howItWorksDefault}</p><h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">{p.howItWorks.subtitle || d.solution.howItWorksSubtitle}</h2></div><div className="mx-auto mb-8 w-full max-w-4xl">{b ? <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-2 md:p-4 overflow-hidden"><_Component4 mode="wait"><Pe.div initial={{
                opacity: 0,
                scale: 0.95
              }} animate={{
                opacity: 1,
                scale: 1
              }} exit={{
                opacity: 0,
                scale: 1.05
              }} transition={{
                duration: 0.4,
                ease: "easeInOut"
              }} className="flex flex-col items-center justify-center w-full min-h-[300px]" key={a}>{(k = p.workflowVideos) != null && k[a] ? <video src={p.workflowVideos[a]} className="w-full h-auto max-h-[70vh] rounded-2xl" autoPlay={true} muted={true} onEnded={() => {
                  var L;
                  if ((L = p.howItWorks) != null && L.steps.length) {
                    l(U => (U + 1) % p.howItWorks.steps.length);
                  }
                }} playsInline={true} key={p.workflowVideos[a]} /> : <div className="flex flex-col items-center justify-center w-full text-center py-16"><_Component10 className="w-16 h-16 text-neutral-600 mb-6" /><div className="text-xl font-medium text-white mb-2">{(N = p.howItWorks.steps[a]) == null ? undefined : N.label} Video</div><div className="text-neutral-500 max-w-sm">{d.solution.videoPlaceholder} {(_ = p.howItWorks.steps[a]) == null ? undefined : _.label}</div></div>}</Pe.div></_Component4></div> : <Bj demoType={p.howItWorks.demoType} activeStep={a} />}</div><div className="flex flex-wrap justify-center gap-3 max-w-full px-4">{p.howItWorks.steps.map((L, U) => <button onClick={() => l(U)} className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${a === U ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.15)]" : "bg-neutral-900/50 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-500 hover:bg-neutral-800"}`} key={U}>{L.label}</button>)}</div></div></section>}{p.setupSteps && <section className="py-24 bg-neutral-950 border-b border-white/5"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">{d.solution.setup}</p><h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-16">{p.setupHeadline}</h2><div className="space-y-0 max-w-3xl">{p.setupSteps.map((L, U) => <div className={`flex gap-6 md:gap-10 py-8 ${U < p.setupSteps.length - 1 ? "border-b border-neutral-800" : ""}`} key={L.step}><div className="flex-shrink-0 w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-sm font-semibold text-white">{L.step}</div><div><h3 className="text-lg font-semibold text-white mb-2">{L.title}</h3><p className="text-neutral-400 leading-relaxed">{L.description}</p></div></div>)}</div></div></section>}{p.benefits && <section className="py-24 bg-black border-b border-white/5"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">{p.whySectionLabel ?? `Why ${p.title}`}</p><h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-12">{p.whyTitle}</h2><ul className="grid md:grid-cols-2 gap-6 max-w-4xl">{p.benefits.map((L, U) => <li className="flex items-start gap-3 text-neutral-300 text-lg leading-snug" key={U}><span className="mt-2 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />{L}</li>)}</ul></div></section>}{y.length > 0 && S && <section className="py-24 bg-neutral-950 border-b border-white/5"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">{d.solution.exploreMore}</p><h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-12">{d.solution.exploreTitle}</h2><div className="grid md:grid-cols-3 gap-6">{y.map(L => <$e to={`/solutions/${L.id}`} className="group bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors" key={L.id}><h3 className="text-lg font-semibold text-white mb-2">{L.title}</h3><p className="text-neutral-400 text-sm mb-4 line-clamp-2">{L.description}</p><span className="inline-flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors">{d.solution.learnMore} <_Component6 className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" /></span></$e>)}</div></div></section>}{p.faqs && <section className="py-24 bg-black border-b border-white/5"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-12">{p.title}, {d.solution.faqSuffix}</h2><div className="space-y-2">{p.faqs.map((L, U) => <div className="border border-neutral-800 rounded-xl overflow-hidden" key={U}><button onClick={() => u(r === U ? null : U)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-neutral-900/50 transition-colors"><span className="font-medium text-white">{L.question}</span><Yr className={`w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform ${r === U ? "rotate-180" : ""}`} /></button><_Component4 initial={false}>{r === U && <Pe.div initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: "auto",
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                duration: 0.25
              }} className="overflow-hidden"><p className="px-5 pb-4 text-neutral-400 leading-relaxed">{L.answer}</p></Pe.div>}</_Component4></div>)}</div></div></section>}{S && <section className="py-24 bg-neutral-950"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">{d.solution.ctaTitle}</h2><p className="text-lg text-neutral-400 mb-8 max-w-xl mx-auto">{d.solution.ctaSubtitle}</p><$e to="/book-demo" className="inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-md font-semibold hover:bg-neutral-200 transition-colors">Book a demo <_Component6 className="ml-2 w-4 h-4" /></$e></div></section>}</div>;
}
const Rr = 1010;
const Ar = 666;
const Wj = {
  London: {
    x: 473,
    y: 294
  },
  Michigan: {
    x: 270,
    y: 327
  },
  Shenzhen: {
    x: 807,
    y: 392
  }
};
const Xj = {
  London: {
    dx: -18,
    dy: -24,
    anchor: "end",
    width: 76
  },
  Michigan: {
    dx: 18,
    dy: 8,
    anchor: "start",
    width: 96
  },
  Shenzhen: {
    dx: 18,
    dy: -22,
    anchor: "start",
    width: 88
  }
};
function Zj(n) {
  return Wj[n.city] ?? {
    x: (n.lon + 180) / 360 * Rr,
    y: (90 - n.lat) / 180 * Ar
  };
}
function Ij({
  offices: n
}) {
  const [a, l] = T.useState(null);
  return <div className="relative mx-auto w-[64%] select-none" style={{
    aspectRatio: `${Rr} / ${Ar}`
  }}><img src="/world-map.svg" alt="" aria-hidden={true} className="absolute inset-0 h-full w-full object-contain opacity-[0.32] invert brightness-[1.6] pointer-events-none" /><svg viewBox={`0 0 ${Rr} ${Ar}`} className="absolute inset-0 h-full w-full" role="img" aria-label="World map showing Synpath office locations in London, Michigan, and Shenzhen"><defs><radialGradient id="mapVignette" cx="50%" cy="50%" r="72%"><stop offset="60%" stopColor="rgba(5,5,5,0)" /><stop offset="100%" stopColor="rgba(5,5,5,0.55)" /></radialGradient><radialGradient id="markerGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(255,255,255,0.9)" /><stop offset="35%" stopColor="rgba(255,255,255,0.22)" /><stop offset="100%" stopColor="rgba(255,255,255,0)" /></radialGradient><radialGradient id="markerGlowActive" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(255,255,255,1)" /><stop offset="40%" stopColor="rgba(255,255,255,0.35)" /><stop offset="100%" stopColor="rgba(255,255,255,0)" /></radialGradient></defs>{n.map(r => {
        const {
          x: u,
          y: d
        } = Zj(r);
        const f = a === r.city;
        const m = Xj[r.city] ?? {
          dx: 14,
          dy: -14,
          anchor: "start",
          width: 88
        };
        return <g onMouseEnter={() => l(r.city)} onMouseLeave={() => l(null)} className="cursor-pointer" style={{
          transition: "opacity 0.2s ease"
        }} opacity={a && !f ? 0.55 : 1} key={r.city}><circle cx={u} cy={d} r={f ? 22 : 16} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth={1}><animate attributeName="r" values={f ? "14;28;14" : "10;22;10"} dur="3s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.45;0;0.45" dur="3s" repeatCount="indefinite" /></circle><circle cx={u} cy={d} r={f ? 24 : 18} fill={f ? "url(#markerGlowActive)" : "url(#markerGlow)"} /><circle cx={u} cy={d} r={f ? 6 : 4.5} fill="#f5f5f5" /><circle cx={u} cy={d} r={10} fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth={1} /><g transform={`translate(${u + m.dx}, ${d + m.dy})`}><rect x={m.anchor === "end" ? -m.width : m.anchor === "middle" ? -m.width / 2 : 0} y={-15} width={m.width} height={26} rx={13} fill={f ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"} stroke={f ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.1)"} strokeWidth={1} /><text x={m.anchor === "end" ? -m.width / 2 : m.anchor === "middle" ? 0 : m.width / 2} y={2} textAnchor="middle" fill="#f5f5f5" fontSize={14} fontWeight={600} style={{
              fontFamily: "inherit",
              letterSpacing: "0.01em"
            }}>{r.city}</text></g></g>;
      })}<rect x={0} y={0} width={Rr} height={Ar} fill="url(#mapVignette)" pointerEvents="none" /></svg></div>;
}
const _y = [{
  city: "London",
  regionKey: "london",
  lat: 51.5074,
  lon: -0.1278
}, {
  city: "Michigan",
  regionKey: "michigan",
  lat: 42.3314,
  lon: -83.0458
}, {
  city: "Shenzhen",
  regionKey: "shenzhen",
  lat: 22.5431,
  lon: 114.0579
}];
function CompanyPage() {
  const [n, a] = T.useState(0);
  const {
    t: l
  } = useLanguage();
  return <div className="flex flex-col"><section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/10 bg-neutral-950"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><Pe.p initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.4
        }} className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">{l.company.aboutEyebrow}</Pe.p><Pe.h1 initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 max-w-4xl">{l.company.heroTitle}</Pe.h1></div></section><section className="relative py-24 md:py-32 bg-black border-b border-white/5 overflow-hidden"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.04)_0%,_transparent_55%)]" /><div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start"><Pe.div initial={{
            opacity: 0,
            y: 16
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.05
          }} className="lg:col-span-7 flex flex-col"><h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-8 md:mb-10">{l.company.ourMission}</h2><div className="space-y-6 text-lg md:text-xl text-neutral-400 leading-relaxed"><p>{l.company.missionP1}</p><p>{l.company.missionP2}</p><p>{l.company.missionP3}</p></div><div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-x-3 gap-y-1"><span className="text-white font-medium">{l.company.founders}</span><span className="text-neutral-600 hidden sm:inline">·</span><span className="text-sm text-neutral-500">{l.company.coFounders}</span></div></Pe.div><Pe.div initial={{
            opacity: 0,
            y: 16
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="lg:col-span-5 flex flex-col"><h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-8 md:mb-10">{l.company.ourGoal}</h2><div className="rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900/80 via-[#111] to-black p-8 md:p-10"><p className="text-lg md:text-xl text-neutral-400 leading-relaxed">{l.company.goalText}</p><div className="mt-8 flex flex-wrap gap-2">{l.company.goalTags.map(r => <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-neutral-400" key={r}>{r}</span>)}</div></div></Pe.div></div></div></section><section className="py-24 bg-neutral-950 border-b border-white/5"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-12">{l.company.beliefsTitle}</h2><div className="grid md:grid-cols-3 gap-6">{l.company.beliefs.map((r, u) => <Pe.div initial={{
            opacity: 0,
            y: 16
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.4,
            delay: u * 0.08
          }} className="rounded-2xl border border-white/10 bg-[#111] p-8" key={r.title}><h3 className="text-xl font-semibold text-white mb-4">{r.title}</h3><p className="text-neutral-400 leading-relaxed">{r.description}</p></Pe.div>)}</div></div></section><section className="py-24 bg-black border-b border-white/5"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-sm font-semibold tracking-wider text-neutral-400 uppercase mb-3">{l.company.officesEyebrow}</p><h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-12">{l.company.officesTitle}</h2><div className="grid sm:grid-cols-3 gap-4 mb-10">{_y.map(r => <div className="rounded-2xl border border-white/10 bg-[#111] px-6 py-8 text-center" key={r.city}><_Component11 className="w-5 h-5 text-neutral-500 mx-auto mb-4" /><p className="text-lg font-semibold text-white mb-1">{r.city}</p><p className="text-sm text-neutral-400">{l.regions[r.regionKey]}</p></div>)}</div><div className="rounded-2xl border border-white/[0.12] bg-[#050505] p-6 md:p-10 overflow-hidden"><Ij offices={_y} /><p className="text-center text-sm text-neutral-500 mt-6">{l.company.mapCaption}</p></div></div></section><section className="py-24 bg-neutral-950 border-b border-white/5"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-12">{l.company.faqTitle}</h2><div className="space-y-2">{l.company.faqs.map((r, u) => <div className="border border-neutral-800 rounded-xl overflow-hidden" key={u}><button onClick={() => a(n === u ? null : u)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-neutral-900/50 transition-colors"><span className="font-medium text-white">{r.question}</span><Yr className={`w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform ${n === u ? "rotate-180" : ""}`} /></button><_Component4 initial={false}>{n === u && <Pe.div initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: "auto",
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                duration: 0.25
              }} className="overflow-hidden"><p className="px-5 pb-4 text-neutral-400 leading-relaxed">{r.answer}</p></Pe.div>}</_Component4></div>)}</div></div></section><section className="py-24 bg-black"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">{l.company.ctaTitle}</h2><p className="text-lg text-neutral-400 mb-8 max-w-xl mx-auto">{l.company.ctaSubtitle}</p><$e to="/book-demo" className="inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-md font-semibold hover:bg-neutral-200 transition-colors">{l.company.ctaButton} <_Component6 className="ml-2 w-4 h-4" /></$e></div></section></div>;
}
const Py = "https://calendly.com/yuki-chu-synpath-ai/30min?hide_gdpr_banner=1&hide_event_type_details=1&background_color=000000&text_color=e0e0e0&primary_color=ffffff";
const Uy = "https://assets.calendly.com/assets/external/widget.js";
const Jj = "https://assets.calendly.com/assets/external/widget.css";
const Hy = 550;
function BookDemoPage() {
  const n = T.useRef(null);
  const {
    t: a
  } = useLanguage();
  T.useEffect(() => {
    const l = n.current;
    if (!l) {
      return;
    }
    const r = () => {
      if (window.Calendly) {
        l.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: Py,
          parentElement: l
        });
      }
    };
    if (document.querySelector(`script[src="${Uy}"]`)) {
      r();
      return;
    }
    const d = document.createElement("link");
    d.href = Jj;
    d.rel = "stylesheet";
    document.head.appendChild(d);
    const f = document.createElement("script");
    f.src = Uy;
    f.async = true;
    f.onload = r;
    document.body.appendChild(f);
  }, []);
  return <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid md:grid-cols-2 gap-10 md:gap-20 lg:gap-24 xl:gap-[120px] w-full items-center"><Pe.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5
      }} className="flex w-full justify-center md:justify-start"><div className="w-full max-w-[560px]"><h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-white leading-tight">{a.bookDemo.title}</h1><p className="mt-8 text-lg text-neutral-400 leading-relaxed">{a.bookDemo.subtitle}</p><ul className="mt-12 space-y-5">{a.bookDemo.bullets.map((l, r) => <li className="flex items-start text-neutral-300 text-[15px] leading-snug" key={r}><_Component12 className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />{l}</li>)}</ul></div></Pe.div><Pe.div initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }} className="w-full rounded-2xl border border-[#2a2a2a] bg-black overflow-hidden"><div className="text-center px-5 py-4 border-b border-[#2a2a2a] shrink-0"><h2 className="text-2xl font-semibold tracking-tight text-white mb-1">{a.bookDemo.scheduleTitle}</h2><p className="text-sm text-neutral-400">{a.bookDemo.scheduleSubtitle}</p></div><div ref={n} className="calendly-inline-widget calendly-scroll-area w-full overflow-y-auto overflow-x-hidden overscroll-contain" data-url={Py} style={{
          minWidth: "320px",
          height: `${Hy}px`,
          maxHeight: `${Hy}px`
        }} /></Pe.div></div></div>;
}
function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="solutions/:solutionId" element={<SolutionPage />} />
            <Route path="company" element={<CompanyPage />} />
            <Route path="privacy" element={<PrivacyPolicyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="book-demo" element={<BookDemoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export { App, Header, Footer, Layout, HomePage, SolutionPage, CompanyPage, BookDemoPage, useLanguage };
