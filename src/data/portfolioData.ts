import { 
  Briefcase, FolderKanban, MonitorSmartphone, PenTool, BarChart3, Lightbulb, Workflow
} from 'lucide-react';

export const PORTFOLIO_DATA = {
  about: {
    title: "Portfolio Dewi PS",
    subtitle: "About Me",
    description: "Third-year Information Systems student with a concentration in Digital Business, interested in digital marketing, product strategy, UI/UX design, business analysis, product and project management. Certified in Digital Marketing and ICT Project Management by BNSP and currently participating in the MSIB program at Vinix7 in the Digital Business division. Experienced in developing digital product concepts, conducting market research, and creating user-centered solutions. Possess strong analytical thinking, communication, leadership, and adaptability skills through academic and organizational experiences."
  },
  skills: {
    hard: [
      { name: "Product Strategy", icon: Lightbulb },
      { name: "Business Analysis", icon: BarChart3 },
      { name: "Design Thinking", icon: Workflow },
      { name: "UML Architecture", icon: FolderKanban },
      { name: "BPMN Modeling", icon: Workflow },
      { name: "Digital Marketing", icon: MonitorSmartphone },
      { name: "UI/UX Design", icon: PenTool },
      { name: "Market Research", icon: BarChart3 },
      { name: "Project Management", icon: Briefcase },
    ],
    soft: ["Leadership", "Public Speaking", "Adaptability", "Communication", "Critical Thinking", "Team Collaboration"]
  },
  education: [
    {
      institution: "Siliwangi University - Tasikmalaya, Indonesia",
      degree: "Bachelor of Information Systems | Digital Business Concentration",
      gpa: "GPA 3.83/4.00",
      period: "Aug 2023 - Present",
      details: "Focus on Market Research & Business Analysis, UI/UX Design & Prototyping, Project Management."
    },
    {
      institution: "SMKN 1 Garut - Garut, Indonesia",
      degree: "Multimedia",
      period: "Aug 2020 - Aug 2023",
      details: "Awarded Best Multimedia Student 2023."
    }
  ],
  experience: [
    {
      role: "Digital Business Intern",
      company: "Vinix7 (MSIB Program)",
      period: "Feb 2026 - Present",
      description: [
        "Conducted business analysis and evaluated digital business opportunities for external companies.",
        "Developed a digital startup product concept, including business model canvas, business plan, and pitch deck.",
        "Designed product prototypes, pricing strategies, and operational business plans.",
        "Created social media marketing content and copywriting to support product branding and promotion. Collaborated with teams in digital business development and product strategy initiatives."
      ]
    },
    {
      role: "Freelancer Graphic Design",
      company: "Self Employed",
      period: "Jan 2023 - Present",
      description: [
        "Create a company's branding design starting from logos, posters, packaging, and promotion. Create 2d and 3d object assets."
      ]
    },
    {
      role: "Various Media Roles",
      company: "CV WartaMuda",
      period: "Aug 2022 - Dec 2022",
      description: [
        "Field reporters who are skilled in interviewing, gathering data, and compiling news reports.",
        "Write an interesting blog about tourism and copywrites content.",
        "Content creator who focuses on creative video production. Able to write scripts, operate cameras, edit videos, and conceptualize interesting stories.",
        "Event organizer with experience planning and executing various types of events, from workshops, seminars, to product exhibitions."
      ]
    }
  ],
  projects: [
    {
      title: "Digital Marketing Strategy - Boxlyy",
      period: "March 2026 - May",
      description: "Developed business and digital marketing strategy for Boxlyy, a personalized gift packaging brand.",
      details: [
        "Planned brand identity, product concepts, market positioning, target audience segmentation, and emotional branding strategies focused on Gen Z and Millennials.",
        "Designed integrated digital marketing campaigns across Instagram and TikTok, including marketing funnel strategy, content planning, and customer conversion flows.",
        "Implemented content marketing, campaign strategies, and performance evaluations using insights, social media analytics, and consumer behavior analysis."
      ],
      tags: ["Digital Marketing", "Strategy", "Branding"],
      color: "from-pink-100 to-rose-200"
    },
    {
      title: "Digital Business Development - GreenStock",
      period: "Feb 2026 - May",
      description: "Plan and develop the GreenStock application, a B2B waste marketplace platform focused on sustainable industrial waste management.",
      details: [
        "Conduct market research, competitor analysis, business feasibility studies, and developed product positioning, monetization strategies, and financial planning to support the development of a scalable digital business ecosystem.",
        "Design business strategies and platform features."
      ],
      tags: ["Business Dev", "Market Research", "B2B"],
      color: "from-green-100 to-emerald-200"
    },
    {
      title: "Product Strategy & UI/UX Design - Famly Pay",
      period: "Jan 2026 - May",
      description: "Led the end-to-end product planning process for Famly Pay, a family financial management platform designed to support Indonesia's sandwich generation.",
      details: [
        "Conducted market research, competitor analysis, business feasibility studies, and developed product positioning, monetization strategies, and financial planning.",
        "Designed strategic product features including shared budgeting, collaborative investment, AI financial assistant, and automated bill payment systems aligned with OJK fintech regulations.",
        "Created user flows, task flows, and high-fidelity UI/UX mockups using a user-centered approach to deliver an intuitive and transparent financial management experience."
      ],
      tags: ["UI/UX", "Product Strategy", "Fintech"],
      color: "from-blue-100 to-cyan-200"
    },
    {
      title: "Product Discovery & Prototyping - WedMuse",
      period: "Sep 2025 - Dec 2025",
      description: "Developed the overall concept of WedMuse, a digital wedding planning platform designed to simplify event and vendor management processes.",
      details: [
        "Conducted user research and applied the complete Design Thinking process, including empathize, define, ideate, prototype, and testing stages to identify user needs and pain points.",
        "Planned product features, user journeys, and solution flows to improve user experience and event planning efficiency.",
        "Designed mockup and interactive prototypes using Figma with a user-centered design approach."
      ],
      tags: ["Prototyping", "Design Thinking", "Figma"],
      color: "from-purple-100 to-fuchsia-200"
    },
    {
      title: "Academic System Development - TK IT Ibaddurrohman",
      period: "Sep 2025 - Dec 2025",
      description: "Developed system concepts and feature planning for an academic information system to support digital school administration processes.",
      details: [
        "Analyzed user requirements, designed system workflows based on operational and stakeholder needs.",
        "Created system documentation including UML diagrams and BPMN to model business processes and system architecture effectively.",
        "Collaborated in designing user-friendly interfaces and digital solutions to improve administrative efficiency and accessibility."
      ],
      tags: ["System Analysis", "UML", "BPMN"],
      color: "from-amber-100 to-orange-200"
    }
  ],
  achievements: [
    { title: "Certified Digital Marketing by BNSP", details: "Through the Dispora Certification Program." },
    { title: "Certified ICT Project Manager by BNSP", details: "Professional certification for project management in IT." },
    { title: "Published SINTA 4 Journal Article", details: "IT Service Management evaluation using the ITIL V4 framework for the BKPSDM Ciamis E-Presence System." },
    { title: "Accepted SINTA 5 Journal", details: "Research on fintech platform development to address Sandwich Generation challenges in Indonesia." }
  ],
  organizations: [
    { role: "Member of R&D Division", name: "Himpunan Mahasiswa Sistem Informasi (HMSI)", period: "Jan 2025 - Dec 2025", desc: "Playing a role in planning, idea, research, and development of innovative programs." },
    { role: "Chief Executive", name: "EBCD Training Program", period: "Sep 2025", desc: "Led 25 members, managed 70+ participants, achieving 92% satisfaction rate." },
    { role: "Secretary", name: "REBIZ Training Program", period: "Oct 2025", desc: "Managed administrative workflows and participant databases." },
    { role: "Event Division", name: "Sivolution 3.0", period: "Nov 2025", desc: "Designing event schedules and coordinating smooth implementation." },
    { role: "Master of Ceremonies (MC)", name: "Sivolution National Seminar", period: "Nov 2025", desc: "Hosted audience of 150+ participants, introduced keynote speakers." },
    { role: "Event Div & MC", name: "Penyematan Jaket Himpunan SI 2023", period: "Aug 2024", desc: "Designed rundown and hosted the official inauguration ceremony." },
    { role: "Publication, Doc & Design", name: "Musyawarah Mahasiswa Sistem Informasi", period: "Dec 2024", desc: "Created visual assets and managed digital publications." },
    { role: "Secretary", name: "Theater 'Munggaran' (SMKN 1 Garut)", period: "Aug 2021 - Aug 2022", desc: "Managed administrative workflows and activity records." }
  ]
};
