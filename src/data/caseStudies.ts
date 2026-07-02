export interface BulletGroup {
  heading: string
  items: string[]
}

export interface CaseStudy {
  id: string
  number: string
  title: string
  role: string
  overview: string
  sections: { heading: string; content: string | string[] | BulletGroup[] }[]
  impact: string
  tags: string[]
}

export const founderStudies: CaseStudy[] = [
  {
    id: 'creator-businesses',
    number: '01',
    title: 'Scaling Creator Businesses Behind the Scenes',
    role: 'Executive & Personal Assistant | Creator Operations | Brand Partnerships',
    overview: 'For over four years, I partnered closely with influencers and content creators, providing executive, operational, and creative support that allowed them to focus on growing their personal brands while I managed the moving pieces behind the scenes.',
    sections: [
      {
        heading: 'Brand Partnerships',
        content: [
          'Managed collaborations end-to-end from outreach to execution.',
          'Negotiated partnership terms with brands.',
          'Prepared MOUs and agreements.',
          'Managed invoices and payment follow-ups.',
          'Coordinated campaign timelines and deliverables.',
        ],
      },
      {
        heading: 'Content & Creative Support',
        content: [
          'Developed creative briefs for UGC creators.',
          'Wrote scripts for sponsored and organic content.',
          'Assisted with content strategy and copywriting.',
          'Collaborated with creators to increase audience engagement and follower growth.',
        ],
      },
      {
        heading: 'Creator Management',
        content: [
          'Managed communication between brands and creators.',
          'Coordinated campaign logistics.',
          'Organized deliverables and approvals.',
        ],
      },
      {
        heading: 'Personal Support',
        content: [
          'Personal styling and wardrobe organization.',
          'Travel planning.',
          'Visa and passport documentation.',
          'Tax and legal documentation for both personal and business matters.',
        ],
      },
      {
        heading: 'Event Management',
        content: [
          'Organized influencer events.',
          'Invited creators and brand partners.',
          'Coordinated logistics and communications.',
        ],
      },
    ],
    impact: 'By acting as both an executive partner and creative collaborator, I helped influencers streamline operations, strengthen brand relationships, and create systems that supported long-term audience growth.',
    tags: ['Creator Operations', 'Brand Partnerships', 'Executive Support'],
  },
  {
    id: 'multi-business-founder',
    number: '02',
    title: 'Executive Partner to a Multi-Business Founder',
    role: 'Founder Support | Executive Operations | Business Development',
    overview: 'Supported the founder of multiple businesses across hospitality, real estate, coworking, and AI technology. Rather than functioning as a traditional Executive Assistant, I became a cross-functional partner responsible for ensuring daily operations continued running efficiently across both business and personal priorities.',
    sections: [
      {
        heading: 'Executive Support',
        content: ['Calendar management.', 'Personal errands.', 'Travel coordination.', 'Passport and visa applications.', 'Legal documentation.', 'Government paperwork.'],
      },
      {
        heading: 'Property Operations',
        content: ['Managed hotels, villas, apartments, coworking, and coliving properties.', 'Coordinated cleaners and maintenance teams.', 'Solved tenant issues independently.', 'Oversaw repairs and operational improvements.'],
      },
      {
        heading: 'Business Development',
        content: ['Reached out to real estate agencies.', 'Marketed available properties.', 'Found prospective tenants.', 'Managed tenant communications.'],
      },
      {
        heading: 'AI Startup',
        content: ['Built a community from scratch.', 'Conducted audience research.', 'Organized Toastmasters and improv events.', 'Recruited community members.', 'Coordinated content creation.', 'Worked alongside the Social Media Manager on content strategy.'],
      },
      {
        heading: 'Asset Liquidation',
        content: ['Managed the sale of the founder\'s personal furniture and belongings, reducing inventory from approximately 120 items to just 18 by handling listings, buyer communications, negotiations, and logistics.'],
      },
    ],
    impact: 'Served as the founder\'s operational right hand, reducing day-to-day bottlenecks by independently managing business operations, marketing initiatives, executive priorities, and startup growth activities.',
    tags: ['Founder Support', 'Property Ops', 'Startup Growth'],
  },
  {
    id: 'recruitment-founder',
    number: '03',
    title: 'Executive Support for a Recruitment Founder',
    role: 'Executive Assistant | Recruitment Operations',
    overview: 'Supported the founder of a recruitment agency by managing executive operations while helping build and maintain efficient recruitment processes.',
    sections: [
      {
        heading: 'Recruitment Operations',
        content: ['Candidate sourcing.', 'LinkedIn sourcing.', 'Outreach.', 'Talent pipeline management.', 'Candidate relationship management.'],
      },
      {
        heading: 'Executive Support',
        content: ['Calendar management.', 'Email management.', 'Interview scheduling.', 'Meeting coordination.'],
      },
      {
        heading: 'Content & Business Development',
        content: ['LinkedIn content writing.', 'Copywriting.', 'Lead generation.', 'CRM management.', 'Administrative documentation.'],
      },
    ],
    impact: 'Helped streamline recruitment operations while enabling the founder to focus on client relationships, hiring strategy, and business growth.',
    tags: ['Recruitment', 'Executive Ops', 'Business Development'],
  },
  {
    id: 'special-projects',
    number: '04',
    title: 'Special Projects for Founders',
    role: 'Cross-functional Support | Operations | Research & Execution',
    overview: 'Every founder has unique challenges. Sometimes they need an Executive Assistant. Sometimes they need an operations manager, recruiter, researcher, or someone who simply figures things out. Throughout my career, I\'ve been trusted to step into high-priority projects across multiple industries—taking ownership from research and planning through execution.',
    sections: [
      {
        heading: 'Riley — E-commerce Founder',
        content: ['Recruited a Graphic Designer.', 'Managed purchases for office furniture, lighting, whiteboards, sofas, curtains, supplements, and business supplies — including supplier research, negotiation, purchase coordination, and delivery tracking.', 'Visa applications and travel accommodation.', 'Resolved restricted and suspended online accounts.'],
      },
      {
        heading: 'Vikenti — Property Investor',
        content: ['Managed custom wardrobe production: sourcing tailors, coordinating fittings, designing wardrobes across business, casual, formal, and travel attire.', 'Property leasing, tenant communication, and property marketing.', 'Sold personal belongings and resolved restricted online accounts.'],
      },
      {
        heading: 'Jacob — Agency Founder',
        content: ['Recruited Video Editor, Graphic Designer, and Virtual Assistant.', 'Shot UGC content and developed AI-generated content.', 'Travel accommodation, vehicle rentals, procurement, and personal purchases.'],
      },
      {
        heading: 'Anna — Business Owner',
        content: ['Personal shopping, wardrobe coordination, and styling support.'],
      },
      {
        heading: 'Trang — TED Speaker',
        content: ['Photographer sourcing, event coordination, and personal styling.'],
      },
      {
        heading: 'Jye — Properties Owner',
        content: ['Sourced prospective tenants and promoted available properties.', 'Recruited and coordinated cleaners, electricians, maintenance technicians, and domestic helpers.'],
      },
    ],
    impact: 'Trusted across industries to handle high-priority, diverse projects — proving that great founder support isn\'t about a job title. It\'s about solving problems and getting things done.',
    tags: ['Special Projects', 'Operations', 'Multi-industry'],
  },
]

export const creativeStudies: CaseStudy[] = [
  {
    id: 'influencer-growth',
    number: '01',
    title: 'Growing an Influencer by 100,000+ Followers',
    role: 'Creative Strategist',
    overview: 'Partnered with an influencer to develop a long-term content strategy focused on sustainable audience growth and stronger brand positioning.',
    sections: [
      {
        heading: 'My Thinking',
        content: ['Instead of asking "What should we post?" I asked "What does this audience consistently come back for?" After researching audience behaviors and analyzing high-performing content, I identified recurring themes and built a content strategy around those insights.'],
      },
      {
        heading: 'What I Did',
        content: ['Audience Research', 'Competitor Analysis', 'Content Strategy', 'Content Calendar', 'Creative Direction', 'Scriptwriting', 'Performance Review', 'Trend Research'],
      },
    ],
    impact: '📈 100,000+ followers gained · 📈 Increased engagement · 📈 Stronger brand positioning',
    tags: ['Content Strategy', 'Growth', 'Scriptwriting'],
  },
  {
    id: '32-million-views',
    number: '02',
    title: 'Creating Content That Reached 32 Million Views',
    role: 'Creative Strategist',
    overview: 'Capture attention in highly saturated social feeds while creating content audiences genuinely wanted to watch and share.',
    sections: [
      {
        heading: 'My Thinking',
        content: ['Virality isn\'t luck. It\'s understanding why people stop scrolling. Every concept started with Curiosity, Emotion, Relatability, and Shareability — instead of simply following trends.'],
      },
      {
        heading: 'What I Did',
        content: ['Hook Development', 'Storytelling', 'Scriptwriting', 'Creative Direction', 'Trend Analysis', 'Performance Review'],
      },
    ],
    impact: '📈 32M+ Views · 📈 Increased reach · 📈 High engagement',
    tags: ['Viral Content', 'Hooks', 'Creative Direction'],
  },
  {
    id: 'ai-startup-community',
    number: '03',
    title: 'Building Community Around an AI Startup',
    role: 'Creative Strategist & Community Builder',
    overview: 'People didn\'t understand the product because it introduced an entirely new category. Selling the product wasn\'t enough — we first needed to build trust.',
    sections: [
      {
        heading: 'My Thinking',
        content: ['Instead of marketing the necklace, I marketed the problem. I researched communication challenges experienced by women aged 20–50 and built a community around improving confidence and communication skills. The necklace naturally became part of that journey.'],
      },
      {
        heading: 'What I Did',
        content: ['Audience Research', 'Community Strategy', 'Event Planning', 'Creator Outreach', 'Toastmasters Sessions', 'Improv Workshops', 'UGC Strategy', 'Content Collaboration'],
      },
    ],
    impact: '✔ Built an engaged community · ✔ Generated authentic UGC · ✔ Increased product awareness · ✔ Created ongoing content opportunities',
    tags: ['Community', 'AI Startup', 'UGC'],
  },
  {
    id: 'brand-partnerships',
    number: '04',
    title: 'Creator & Brand Partnerships',
    role: 'Partnership Manager',
    overview: 'Managed collaborations between brands and creators from outreach to execution — ensuring both parties achieved successful partnerships while maintaining authentic storytelling.',
    sections: [
      {
        heading: 'What I Did',
        content: ['Creator sourcing', 'Negotiation', 'Relationship Management', 'Brief Writing', 'Campaign Management', 'Timeline Coordination', 'Feedback Loops'],
      },
    ],
    impact: 'Successful end-to-end campaign delivery across multiple brand and creator partnerships.',
    tags: ['Partnerships', 'Creator Economy', 'Campaigns'],
  },
]

export const personalStudies: CaseStudy[] = [
  {
    id: 'dear-stranger',
    number: '06',
    title: 'Dear Stranger',
    role: 'Product Concept · Branding · UX Thinking · Creative Direction',
    overview: 'People often struggle to express feelings they can\'t say out loud.',
    sections: [
      {
        heading: 'The Idea',
        content: ['Create an anonymous social game platform where people can play together — online or offline — without paper or cards. Bringing social games into the digital world to make them accessible anywhere, anytime.'],
      },
      {
        heading: 'My Role',
        content: ['Product Concept', 'Branding', 'UX Thinking', 'Website Planning', 'Creative Direction'],
      },
    ],
    impact: 'A fully playable web app with multiple social games, player accounts, and a members-only community space.',
    tags: ['Product', 'UX', 'Creative Direction'],
  },
  {
    id: 'ts-studio',
    number: '07',
    title: "T's Studio",
    role: 'Brand Identity · Website Planning · Creative Direction · UX',
    overview: 'Create a digital identity for a music-focused brand that feels immersive, modern, and emotionally connected to artists.',
    sections: [
      {
        heading: 'The Challenge',
        content: ['Build a beginner-friendly music creation app that combines AI-powered song blueprints, lyric writing, and a hands-on beat maker — making music creation feel accessible to anyone.'],
      },
      {
        heading: 'My Role',
        content: ['Brand Identity', 'Website Planning', 'Creative Direction', 'UX', 'Visual Storytelling'],
      },
    ],
    impact: 'A live AI-powered music studio web app with beat sequencer, voice recording, and AI-generated song blueprints.',
    tags: ['Brand Identity', 'UX', 'AI'],
  },
]
