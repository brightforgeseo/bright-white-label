import { Code2, Layout, Globe, Search, PenTool, BarChart3 } from 'lucide-react';
import { ServicePageData } from '../types';

export const servicesData: ServicePageData[] = [
  {
    id: 'technical-seo',
    title: "Technical Audits",
    subtitle: "White-Label Site Architecture",
    icon: Code2,
    color: 'brand',
    description: "Your clients expect technical perfection, but auditing large sites consumes massive agency bandwidth. We act as your specialized technical team.",
    problem: "Agencies often lack the in-house engineering resources to deeply audit and fix complex technical issues like Javascript rendering or Core Web Vitals for every client.",
    solution: "We perform deep-dive technical audits under your brand. We can either hand you the white-label PDF to present, or implement the fixes directly on your client's site.",
    features: [
      "Unbranded Audit PDF Reports",
      "Direct Dev Implementation (Optional)",
      "Core Web Vitals Remediation",
      "Schema.org Deployment",
      "Migration Support",
      "Javascript SEO Fixes"
    ],
    stats: [
      { label: "Margin", value: "60%+" },
      { label: "Dev Hours", value: "0" },
      { label: "Client Ret.", value: "98%" }
    ],
    process: [
      { title: "Discovery", description: "You send us the client URL. We run a preliminary stealth crawl." },
      { title: "Deep Audit", description: "Our engineers analyze log files, crawl budget, and rendering issues." },
      { title: "Report Generation", description: "We create a branded PDF report with your agency logo." },
      { title: "Implementation", description: "We push the fixes live, or provide a ticket backlog for your team." }
    ],
    tools: ["Screaming Frog", "DeepCrawl", "Google Search Console", "Lighthouse", "Ahrefs", "Cloudflare"],
    deliverables: [
      "White-Label Technical Audit PDF",
      "Prioritized Jira/Asana Tickets",
      "Schema JSON-LD Files",
      "Robots.txt Optimization",
      "Performance Before/After Report"
    ],
    faqs: [
      { question: "Do you sign an NDA?", answer: "Absolutely. We are strictly white-label. Your clients will never know we exist." },
      { question: "Can you fix the issues too?", answer: "Yes. We can offer 'Audit Only' or 'Audit + Implementation' packages for you to resell." },
      { question: "What if my client uses a custom CMS?", answer: "We have experience with everything from WordPress/Shopify to custom React/Next.js builds." }
    ]
  },
  {
    id: 'content-strategy',
    title: "Content Production",
    subtitle: "Scalable Ghostwriting",
    icon: Layout,
    color: 'fuchsia',
    description: "High-volume, high-quality content production that sounds exactly like your client. Scale your agency's output without managing a fleet of freelancers.",
    problem: "Managing freelance writers is a nightmare. Quality is inconsistent, deadlines are missed, and editing takes up all your account manager's time.",
    solution: "We provide a managed content facility. You give us the topics (or we find them), and we deliver polished, optimized, interlinked content ready for upload.",
    features: [
      "Topic Cluster Ideation",
      "Native English Writers",
      "SurferSEO/Clearscope Optimization",
      "Internal Linking Strategy",
      "Formatted for CMS Upload",
      "Subject Matter Expert Review"
    ],
    stats: [
      { label: "Words/Mo", value: "500k+" },
      { label: "Edit Time", value: "<15m" },
      { label: "Resell Margin", value: "2.5x" }
    ],
    process: [
      { title: "Onboarding", description: "We analyze your client's brand voice guidelines and existing content." },
      { title: "Briefing", description: "We create detailed briefs based on keyword difficulty and search intent." },
      { title: "Drafting", description: "Our vetted writers produce the content using optimization tools." },
      { title: "Quality Assurance", description: "Our editors review every piece for tone, grammar, and SEO scoring." }
    ],
    tools: ["SEMrush", "Clearscope", "MarketMuse", "Google Docs", "Grammarly", "Jasper (Assistive)"],
    deliverables: [
      "Optimization Score Reports",
      "Google Docs Drafts",
      "Meta Titles & Descriptions",
      "Image Alt Text",
      "Optional CMS Uploading"
    ],
    faqs: [
      { question: "Is this AI content?", answer: "We use AI for outlining and research, but the final writing is human to ensure it passes detection and engages readers." },
      { question: "Can I request revisions?", answer: "Yes, we offer unlimited revisions to ensure the tone matches your client's brand." },
      { question: "Do you upload to WordPress?", answer: "We can. This is an add-on service that completely removes the fulfillment burden from your team." }
    ]
  },
  {
    id: 'link-building',
    title: "Link Acquisition",
    subtitle: "Risk-Free Outreach",
    icon: Globe,
    color: 'cyan',
    description: "The hardest part of SEO, handled. We build high-authority backlinks that move the needle without putting your client's site at risk.",
    problem: "Most white-label link vendors sell garbage PBNs or guest posts on 'link farms' that eventually get clients penalized.",
    solution: "We run genuine manual outreach campaigns. We negotiate with real webmasters of real businesses to secure placements. Safe, effective, and fully reportable.",
    features: [
      "Manual Outreach Campaigns",
      "Real Traffic Sites Only (DR30+)",
      "Strict 'No PBN' Policy",
      "Contextual Editorial Links",
      "Broken Link Building",
      "Link Gap Analysis"
    ],
    stats: [
      { label: "Avg DR", value: "50+" },
      { label: "Placement", value: "100%" },
      { label: "Safety", value: "Tier 1" }
    ],
    process: [
      { title: "Prospecting", description: "We identify relevant sites in your client's vertical." },
      { title: "Vetting", description: "We manually check traffic trends to ensure the site isn't a 'write for us' farm." },
      { title: "Outreach", description: "We pitch unique content ideas to editors under generic personas." },
      { title: "Placement", description: "We secure the link and track it for permanence." }
    ],
    tools: ["Pitchbox", "Hunter.io", "Ahrefs", "Majestic", "Respona"],
    deliverables: [
      "White-Label Link Report (Spreadsheet)",
      "Live URL List",
      "Metric Snapshot (DR/Traffic)",
      "Anchor Text Analysis",
      "Replacement Guarantee"
    ],
    faqs: [
      { question: "What if a link is removed?", answer: "We offer a 6-month replacement guarantee. If a link drops, we replace it for free." },
      { question: "Can I approve the sites first?", answer: "For our 'Enterprise' tier partners, yes. We can provide a pre-approval list." },
      { question: "Do you use hacked sites?", answer: "Never. We value your agency's reputation. We only use ethical outreach methods." }
    ]
  },
  {
    id: 'local-dominance',
    title: "Local Fulfillment",
    subtitle: "GMB & Citation Mgmt",
    icon: Search,
    color: 'emerald',
    description: "A complete local SEO department in a box. We manage Google Business Profiles and citations for your multi-location clients.",
    problem: "Local SEO is tedious. Managing posts, Q&As, and citations for 50+ locations requires a dedicated team you might not want to hire.",
    solution: "We take over the grunt work. We optimize profiles, post weekly updates, build geo-relevant landing pages, and clean up citation errors.",
    features: [
      "GMB Profile Optimization",
      "Weekly GMB Posts",
      "Citation Cleanup & Building",
      "Review Response Management",
      "Local Rank Tracking",
      "Data Aggregator Submission"
    ],
    stats: [
      { label: "Map Rankings", value: "Top 3" },
      { label: "Locations", value: "Unlimited" },
      { label: "Time Saved", value: "20h/mo" }
    ],
    process: [
      { title: "Audit", description: "We check NAP consistency across the web." },
      { title: "Optimization", description: "We fill out every field of the GBP and add high-res photos." },
      { title: "Content", description: "We schedule weekly posts to keep the profile active." },
      { title: "Reporting", description: "We provide a geo-grid report showing ranking by neighborhood." }
    ],
    tools: ["BrightLocal", "Whitespark", "Yext", "Google Business Profile", "Local Falcon"],
    deliverables: [
      "Geo-Grid Ranking Reports",
      "Citation Audit CSV",
      "Optimized Profile Screenshots",
      "Review Response Log",
      "Monthly Activity Report"
    ],
    faqs: [
      { question: "Do you handle bad reviews?", answer: "We can draft professional responses for you to approve, or handle standard responses automatically." },
      { question: "Can you do this for franchises?", answer: "Yes, we have systems to handle 100+ location accounts efficiently." },
      { question: "Is this white label?", answer: "Yes. All reports are unbranded or branded with your agency logo." }
    ]
  },
  {
    id: 'creative-content',
    title: "Creative Assets",
    subtitle: "Visual Link Bait",
    icon: PenTool,
    color: 'orange',
    description: "Offer premium creative services without hiring a design team. We create data-driven infographics and whitepapers you can upsell.",
    problem: "Agencies struggle to upsell clients because they lack the design resources to produce premium, linkable assets.",
    solution: "We function as your creative department. We research, design, and develop visual assets that you can sell to clients for $2k-$5k a pop.",
    features: [
      "Custom Infographics",
      "Branded Whitepapers",
      "Interactive Calculators",
      "Social Media Asset Packs",
      "Original Data Studies",
      "HTML5 Embeddables"
    ],
    stats: [
      { label: "Upsell Value", value: "$3k+" },
      { label: "Turnaround", value: "7 Days" },
      { label: "Revisions", value: "Unlimited" }
    ],
    process: [
      { title: "Concept", description: "We propose 3 concepts based on your client's niche." },
      { title: "Data", description: "We gather the necessary data points or research." },
      { title: "Design", description: "Our designers create the asset in Figma/Illustrator." },
      { title: "Handoff", description: "We provide the source files and embed codes." }
    ],
    tools: ["Figma", "Adobe Illustrator", "Canva Pro", "Tableau", "Typeform"],
    deliverables: [
      "Source Files (AI/Fig)",
      "Web-Ready PNG/JPG",
      "Embed Code Snippets",
      "PDF Whitepapers",
      "Social Cuts"
    ],
    faqs: [
      { question: "Who owns the rights?", answer: "Your agency (or your client). We transfer all IP upon payment." },
      { question: "Can I put my client's logo on it?", answer: "Yes, we design strictly according to your client's brand guidelines." },
      { question: "Do you help promote the assets?", answer: "We can, via our Link Acquisition service." }
    ]
  },
  {
    id: 'analytics-cro',
    title: "Client Reporting",
    subtitle: "Automated Dashboards",
    icon: BarChart3,
    color: 'violet',
    description: "Stop spending the first week of every month compiling spreadsheets. We build automated, white-label dashboards that prove your value.",
    problem: "Reporting is a time-suck. Clients struggle to understand complex data, leading to churn despite good results.",
    solution: "We build custom Looker Studio dashboards that visualize ROI clearly. We can also provide white-label written analysis to explain the data.",
    features: [
      "Looker Studio Dashboards",
      "GA4 / GTM Setup",
      "Conversion Tracking Fixes",
      "Call Tracking Integration",
      "Written Monthly Analysis",
      "Agency-Branded Portal"
    ],
    stats: [
      { label: "Hours Saved", value: "10h/mo" },
      { label: "Client Happy", value: "10/10" },
      { label: "Data Acc.", value: "100%" }
    ],
    process: [
      { title: "Integration", description: "Connect GA4, GSC, and Rank Tracker APIs." },
      { title: "Design", description: "Apply your agency branding colors and logo to the dashboard." },
      { title: "Configuration", description: "Set up filters for organic traffic and conversion goals." },
      { title: "Automation", description: "Schedule automatic PDF delivery to your inbox." }
    ],
    tools: ["Looker Studio", "Google Analytics 4", "Supermetrics", "CallRail", "Whatagraph"],
    deliverables: [
      "Live Dashboard Link",
      "Monthly PDF Exports",
      "Conversion Tracking Audit",
      "Video Walkthroughs",
      "Executive Summary Text"
    ],
    faqs: [
      { question: "Can I edit the report?", answer: "Yes, we give you full edit access to the Looker Studio file." },
      { question: "Do you use our logo?", answer: "Yes, the report looks like it came directly from your internal team." },
      { question: "What if connections break?", answer: "We monitor the dashboards and fix API breaks within 24 hours." }
    ]
  }
];