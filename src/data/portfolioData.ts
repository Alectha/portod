import { 
  Briefcase, FolderKanban, MonitorSmartphone, PenTool, BarChart3, Lightbulb, Workflow
} from 'lucide-react';

import boxlyyCover from '../assets/images/boxlyy-cover.png';
import boxlyy01 from '../assets/images/project-boxlyy-01.png';
import boxlyy02 from '../assets/images/project-boxlyy-02.jpeg';
import boxlyy03 from '../assets/images/project-boxlyy-03.jpeg';
import boxlyy04 from '../assets/images/project-boxlyy-04.jpeg';
import boxlyy05 from '../assets/images/project-boxlyy-05.jpeg';
import boxlyy07 from '../assets/images/project-boxlyy-07.jpeg';
import greenstockCover from '../assets/images/greenstock-cover.png';
import greenstock01 from '../assets/images/greenstock-01.png';
import greenstock02 from '../assets/images/greenstock-02.png';
import greenstock03 from '../assets/images/greenstock-03.png';
import greenstock04 from '../assets/images/greenstock-04.png';
import famlypayCover from '../assets/images/famlypay-cover.jpeg';
import famlypay01 from '../assets/images/project-famlypay-01.jpeg';
import famlypay02 from '../assets/images/project-famlypay-02.jpeg';
import famlypay03 from '../assets/images/project-famlypay-03.jpeg';
import famlypay04 from '../assets/images/project-famlypay-04.jpeg';
import wedmuseCover from '../assets/images/wedmuse-cover.png';
import wedmuse01 from '../assets/images/wedmuse-01.png';
import wedmuse02 from '../assets/images/wedmuse-02.png';
import wedmuse03 from '../assets/images/wedmuse-03.png';
import wedmuse04 from '../assets/images/wedmuse-04.png';
import ibaddurrohmanCover from '../assets/images/ibadurrohman-cover.png';
import ibaddurrohman01 from '../assets/images/ibadurrohman-01.png';
import ibaddurrohman02 from '../assets/images/ibadurrohman-02.png';
import ibaddurrohman03 from '../assets/images/ibadurrohman-03.png';
import ibaddurrohman04 from '../assets/images/ibadurrohman-04.png';
import ebcdCover from '../assets/images/ebcd-cover.jpeg';
import ebcd01 from '../assets/images/ebcd-01.jpeg';
import ebcd03 from '../assets/images/ebcd-03.jpeg';
import ebcd04 from '../assets/images/ebcd-04.jpeg';
import ebcd05 from '../assets/images/ebcd-05.jpeg';
import sivolutionCover from '../assets/images/sivolution-cover.jpeg';
import sivolution01 from '../assets/images/sivolution-01.jpeg';
import sivolution02 from '../assets/images/sivolution-02.jpeg';
import sivolution03 from '../assets/images/sivolution-03.jpeg';
import sivolution04 from '../assets/images/sivolution-04.jpeg';
import sivolutionSeminarCover from '../assets/images/sivolution-seminar-cover.jpeg';
import sivolutionSeminar01 from '../assets/images/sivolution-seminar-01.jpeg';
import sivolutionSeminar02 from '../assets/images/sivolution-seminar-02.jpeg';
import sivolutionSeminar03 from '../assets/images/sivolution-seminar-03.jpeg';
import sivolutionSeminar04 from '../assets/images/sivolution-seminar-04.jpeg';
import rebizCover from '../assets/images/rebiz-cover.jpeg';
import rebiz01 from '../assets/images/rebiz-01.jpeg';
import rebiz02 from '../assets/images/rebiz-02.jpeg';
import musyawarahCover from '../assets/images/musyawarah-cover.jpeg';
import musyawarah01 from '../assets/images/musyawarah-01.jpeg';
import musyawarah02 from '../assets/images/musyawarah-02.jpeg';
import musyawarah03 from '../assets/images/musyawarah-03.jpeg';
import hmsiCover from '../assets/images/hmsi-cover.jpeg';
import hmsi01 from '../assets/images/hmsi-01.jpeg';
import hmsi02 from '../assets/images/hmsi-02.jpeg';
import hmsi03 from '../assets/images/hmsi-03.jpeg';
import hmsi04 from '../assets/images/hmsi-04.jpeg';
import penyematanCover from '../assets/images/Penyematan-cover.jpeg';
import penyematan01 from '../assets/images/Penyematan-01.jpeg';
import penyematan02 from '../assets/images/Penyematan-02.jpeg';
import penyematan03 from '../assets/images/Penyematan-03.jpeg';
import penyematan04 from '../assets/images/Penyematan-04.jpeg';
import freelanceGraphic from '../assets/images/freelance-graphic.png';
import digitalBusinessIntern from '../assets/images/digital-business-intern.png';
import internStudent from '../assets/images/intern-student.png';
import theaterCover from '../assets/images/theater-cover.jpeg';
import theater01 from '../assets/images/theater-01.jpeg';
import theater02 from '../assets/images/theater-02.jpeg';
import theater03 from '../assets/images/theater-03.jpeg';
import theater04 from '../assets/images/theater-04.jpeg';

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
      role: "Freelancer Graphic Design",
      company: "Self Employed",
      period: "Jan 2023 - Present",
      description: [
        "Create a company's branding design starting from logos, posters, packaging, and promotion. Create 2d and 3d object assets."
      ],
      images: [
        { src: freelanceGraphic, alt: "Freelance graphic design portfolio documentation" }
      ]
    },
    {
      role: "Digital Business Intern",
      company: "Vinix7 (MSIB Program)",
      period: "Feb 2026 - May 2026",
      description: [
        "Conducted business analysis and evaluated digital business opportunities for external companies.",
        "Developed a digital startup product concept, including business model canvas, business plan, and pitch deck.",
        "Designed product prototypes, pricing strategies, and operational business plans.",
        "Created social media marketing content and copywriting to support product branding and promotion. Collaborated with teams in digital business development and product strategy initiatives."
      ],
      images: [
        { src: digitalBusinessIntern, alt: "Digital business intern documentation" }
      ]
    },
    {
      role: "Internship Student",
      company: "CV WartaMuda",
      period: "Aug 2022 - Dec 2022",
      description: [
        "Field reporters who are skilled in interviewing, gathering data, and compiling news reports.",
        "Write an interesting blog about tourism and copywrites content.",
        "Content creator who focuses on creative video production. Able to write scripts, operate cameras, edit videos, and conceptualize interesting stories.",
        "Event organizer with experience planning and executing various types of events, from workshops, seminars, to product exhibitions."
      ],
      images: [
        { src: internStudent, alt: "Internship student documentation" }
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
      color: "from-pink-100 to-rose-200",
      coverImage: boxlyyCover,
      images: [
        { src: boxlyy01, alt: "Boxlyy product identity and concept overview" },
        { src: boxlyy02, alt: "Boxlyy Instagram link-in-bio mockup" },
        { src: boxlyy03, alt: "Boxlyy social media feed mockup" },
        { src: boxlyy04, alt: "Boxlyy campaign content documentation 1" },
        { src: boxlyy05, alt: "Boxlyy campaign content documentation 2" },
        { src: boxlyy07, alt: "Boxlyy campaign content documentation 4" }
      ]
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
      color: "from-green-100 to-emerald-200",
      coverImage: greenstockCover,
      images: [
        { src: greenstock01, alt: "GreenStock platform documentation 1" },
        { src: greenstock02, alt: "GreenStock platform documentation 2" },
        { src: greenstock03, alt: "GreenStock platform documentation 3" },
        { src: greenstock04, alt: "GreenStock platform documentation 4" }
      ]
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
      color: "from-blue-100 to-cyan-200",
      coverImage: famlypayCover,
      images: [
        { src: famlypay01, alt: "Famly Pay home dashboard mockup" },
        { src: famlypay02, alt: "Famly Pay family investment mockup" },
        { src: famlypay03, alt: "Famly Pay profile settings mockup" },
        { src: famlypay04, alt: "Famly Pay transaction history mockup" }
      ]
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
      color: "from-purple-100 to-fuchsia-200",
      coverImage: wedmuseCover,
      images: [
        { src: wedmuse01, alt: "WedMuse product planning documentation 1" },
        { src: wedmuse02, alt: "WedMuse product planning documentation 2" },
        { src: wedmuse03, alt: "WedMuse product planning documentation 3" },
        { src: wedmuse04, alt: "WedMuse product planning documentation 4" }
      ]
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
      color: "from-amber-100 to-orange-200",
      coverImage: ibaddurrohmanCover,
      images: [
        { src: ibaddurrohman01, alt: "TK IT Ibaddurrohman documentation 1" },
        { src: ibaddurrohman02, alt: "TK IT Ibaddurrohman documentation 2" },
        { src: ibaddurrohman03, alt: "TK IT Ibaddurrohman documentation 3" },
        { src: ibaddurrohman04, alt: "TK IT Ibaddurrohman documentation 4" }
      ]
    }
  ],
  achievements: [
    { title: "Certified Digital Marketing by BNSP", details: "Through the Dispora Certification Program." },
    { title: "Certified ICT Project Manager by BNSP", details: "Professional certification for project management in IT." },
    { title: "Published SINTA 4 Journal Article", details: "IT Service Management evaluation using the ITIL V4 framework for the BKPSDM Ciamis E-Presence System.", href: "https://journal.ibrahimy.ac.id/index.php/JIMI/article/view/8406" },
    { title: "Accepted SINTA 5 Journal", details: "Research on fintech platform development to address Sandwich Generation challenges in Indonesia." }
  ],
  organizations: [
    { role: "Member of R&D Division", name: "Himpunan Mahasiswa Sistem Informasi (HMSI)", period: "Jan 2025 - Dec 2025", desc: "Playing a role in planning, idea, research, and development of innovative programs.", coverImage: hmsiCover, images: [
      { src: hmsi01, alt: "HMSI activities documentation 1" },
      { src: hmsi02, alt: "HMSI activities documentation 2" },
      { src: hmsi03, alt: "HMSI activities documentation 3" },
      { src: hmsi04, alt: "HMSI activities documentation 4" }
    ] },
    { role: "Chief Executive", name: "EBCD Training Program", period: "Sep 2025", desc: "Led 25 members, managed 70+ participants, achieving 92% satisfaction rate.", coverImage: ebcdCover, images: [
      { src: ebcd01, alt: "EBCD Training Program documentation 1" },
      { src: ebcd03, alt: "EBCD Training Program documentation 3" },
      { src: ebcd04, alt: "EBCD Training Program documentation 4" },
      { src: ebcd05, alt: "EBCD Training Program documentation 5" }
    ] },
    { role: "Secretary", name: "REBIZ Training Program", period: "Oct 2025", desc: "Managed administrative workflows and participant databases.", coverImage: rebizCover, images: [
      { src: rebiz01, alt: "REBIZ documentation 1" },
      { src: rebiz02, alt: "REBIZ documentation 2" }
    ] },
    { role: "Event Division", name: "Sivolution 3.0", period: "Nov 2025", desc: "Designing event schedules and coordinating smooth implementation.", coverImage: sivolutionCover, images: [
      { src: sivolution01, alt: "Sivolution 3.0 documentation 1" },
      { src: sivolution02, alt: "Sivolution 3.0 documentation 2" },
      { src: sivolution03, alt: "Sivolution 3.0 documentation 3" },
      { src: sivolution04, alt: "Sivolution 3.0 documentation 4" }
    ] },
    { role: "Master of Ceremonies (MC)", name: "Sivolution National Seminar", period: "Nov 2025", desc: "Hosted audience of 150+ participants, introduced keynote speakers.", coverImage: sivolutionSeminarCover, images: [
      { src: sivolutionSeminar01, alt: "Sivolution National Seminar documentation 1" },
      { src: sivolutionSeminar02, alt: "Sivolution National Seminar documentation 2" },
      { src: sivolutionSeminar03, alt: "Sivolution National Seminar documentation 3" },
      { src: sivolutionSeminar04, alt: "Sivolution National Seminar documentation 4" }
    ] },
    { role: "Event Div & MC", name: "Penyematan Jaket Himpunan SI 2023", period: "Aug 2024", desc: "Designed rundown and hosted the official inauguration ceremony.", coverImage: penyematanCover, images: [
      { src: penyematan01, alt: "Penyematan documentation 1" },
      { src: penyematan02, alt: "Penyematan documentation 2" },
      { src: penyematan03, alt: "Penyematan documentation 3" },
      { src: penyematan04, alt: "Penyematan documentation 4" }
    ] },
    { role: "Publication, Doc & Design", name: "Musyawarah Mahasiswa Sistem Informasi", period: "Dec 2024", desc: "Created visual assets and managed digital publications.", coverImage: musyawarahCover, images: [
      { src: musyawarah01, alt: "Musyawarah documentation 1" },
      { src: musyawarah02, alt: "Musyawarah documentation 2" },
      { src: musyawarah03, alt: "Musyawarah documentation 3" }
    ] },
    { role: "Secretary", name: "Theater 'Munggaran' (SMKN 1 Garut)", period: "Aug 2021 - Aug 2022", desc: "Managed administrative workflows and activity records.", coverImage: theaterCover, images: [
      { src: theater01, alt: "Theater Munggaran documentation 1" },
      { src: theater02, alt: "Theater Munggaran documentation 2" },
      { src: theater03, alt: "Theater Munggaran documentation 3" },
      { src: theater04, alt: "Theater Munggaran documentation 4" }
    ] }
  ]
};
