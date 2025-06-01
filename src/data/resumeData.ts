
export interface Education {
  degree: string;
  school: string;
  year: string;
  details: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface AdditionalExperience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  liveDemo?: string;
  technologies: string[];
}

export interface SkillCategory {
  [key: string]: string[];
}

export const education: Education[] = [
  {
    degree: "Full-Stack Software Engineering Certification",
    school: "Prime Digital Academy",
    year: "2022",
    details: "Comprehensive web development program with emphasis on React.js, JavaScript, and modern frontend technologies"
  },
  {
    degree: "Substance Abuse Counseling Certification",
    school: "Minneapolis Community & Technical College",
    year: "2017",
    details: "Professional certification in substance abuse counseling"
  },
  {
    degree: "The Church, Spirituality, and the Arts (Audited)",
    school: "United Theological Seminary",
    year: "2012",
    details: "Audited graduate-level course exploring the intersection of church, spirituality, and artistic expression. The most important thing I learned in this clas was that I was 100% done with academic theology."
  },
  {
    degree: "Bachelor of Arts: Religion",
    school: "Augustana University",
    year: "2002",
    details: "Liberal arts education with focus on religious studies (attended 1997-2002, except fall 1999 semester)"
  },
  {
    degree: "Fall Semester ",
    school: "University of Minnesota",
    year: "1999",
    details: "Attended fall semester before returning to Augustana to complete degree. One of the smartest decisions was recognizing the need to return to finish school in a more suitable environment."
  }
];

export const experience: Experience[] = [
  {
    title: "Software Engineer II",
    company: "Datasite",
    location: "Minneapolis, MN (Hybrid)",
    period: "June 2025 - Present",
    responsibilities: [
      "Promoted to Software Engineer II, recognizing technical growth and contributions",
      "Developing responsive user interfaces and interactive components using React.js",
      "Leveraging AI development tools to enhance productivity and code quality",
      "Building accessible frontend applications for global data room platform",
      "Applying modern frontend development practices and performance optimization techniques"
    ]
  },
  {
    title: "Software Engineer I",
    company: "Datasite",
    location: "Minneapolis, MN (Hybrid)",
    period: "December 2023 - May 2025",
    responsibilities: [
      "Developed responsive user interfaces and interactive components using React.js",
      "Collaborated with design and backend teams to implement frontend features",
      "Built accessible and performant web applications for enterprise clients",
      "Applied modern JavaScript and CSS techniques in a fast-paced fintech environment"
    ]
  },
  {
    title: "Owner/Photographer",
    company: "Adam Iverson Photography",
    location: "Twin Cities, MN",
    period: "late 1900's - Present",
    responsibilities: [
      "Built and operated full-time photography business serving individuals and corporations",
      "Self-taught Adobe Creative Suite (Lightroom, Photoshop, InDesign) for complete workflow management",
      "Co-authored and published 'Don't Fall In Love With The City' with Joe Bozic - a photo/poetry book using self-taught InDesign skills",
      "Published 'gelato for dinner' photography zine (2019) documenting travels through Italy",
      "Developed skills in visual storytelling and ethics of documentation",
      "Successfully transitioned from photography to software engineering career"
    ]
  }, {
    title: "Software Engineer Internship",
    company: "Datasite",
    location: "Minneapolis, MN (Hybrid)",
    period: "July 2023 - November 2023",
    responsibilities: [
      "Gained hands-on experience with React.js and modern JavaScript in enterprise environment",
      "Contributed to frontend development projects and user interface improvements",
      "Collaborated with senior engineers on component development and UI/UX enhancements",
      "Successfully transitioned to full-time software engineer role"
    ]
  },
  {
    title: "Data Analytics Implementation Engineer",
    company: "Softcrylic",
    location: "Minneapolis, MN (Remote)",
    period: "August 2022 - December 2022",
    responsibilities: [
      "Worked with enterprise clients to ensure accurate collection of data from websites for analytics",
      "Facilitated clients' transition from Universal Analytics to Google Analytics 4",
      "Researched and drafted training materials for future onboarding",
      "Collaborated with team to identify and execute comprehensive tagging strategies"
    ]
  }
];

export const additionalExperience: AdditionalExperience[] = [
  {
    title: "Fitness Coach",
    company: "Solcana Fitness & Wellness • 2017-2018",
    period: "2017-2018",
    description: "Coached functional fitness with emphasis on endurance at inclusive, woman-owned gym for athletes of all abilities."
  },
  {
    title: "Substance Abuse Counselor",
    company: "Southeast Homes • 2017",
    period: "2017",
    description: "Worked at residential treatment center helping adult men from East Africa maintain sobriety. Developed crisis intervention and group therapy skills."
  },
  {
    title: "Licensed Alcohol and Drug Counselor (LADC) Intern",
    company: "Vinland National Center • 2016",
    period: "2016",
    description: "Completed dual internships at Vinland's residential treatment center (May-August) in Loretto, MN and outpatient facility (August-December) in Northeast Minneapolis. Specialized in substance abuse treatment for individuals with co-occurring mental health concerns and traumatic brain injuries. Successfully completed internship requirements leading to LADC certification in Minnesota."
  },
  {
    title: "Improv Teacher",
    company: "HUGE Theater • 2015-2020",
    period: "2015-2020",
    description: "Taught improv at nonprofit theater, learning to better listen to others and fail beautifully when opportunities arise. Developed skills in teaching, active listening, and leadership."
  },
  {
    title: "Product Ideation Contractor",
    company: "Idea Greenhouse Minnesota • 2014-2018",
    period: "2014-2018",
    description: "Generated creative ideas for large companies' products and marketing strategies. Honed lateral thinking and creative problem-solving abilities."
  },
  {
    title: "Bartender",
    company: "Sweeney's Saloon • 2007-2017",
    period: "2007-2017",
    description: "Long-term bartending role spanning 10 years, progressing from four day shifts per week to prime evening shifts (Wednesday, Friday, Sunday nights). Developed exceptional customer service, multitasking, and high-pressure environment management skills."
  },
  {
    title: "Bar Manager",
    company: "Halcyon Coffee & Bar • 2003-2007",
    period: "2003-2007",
    description: "Progressed from opening barista to Bar Manager over 4 years at Austin coffee shop and bar. Managed inventory ordering, liquor loss prevention, and tended bar five nights per week. Developed leadership, inventory management, and operational responsibility skills."
  },
  {
    title: "Barista / Closing Manager / Coffee Roaster",
    company: "Great Plains Coffee Roasting Company • 1998-2002",
    period: "1998-2002",
    description: "Multi-role position at Sioux Falls coffee roastery during college years. Progressed from barista to closing manager and coffee roaster, gaining comprehensive coffee industry experience including operations management, customer service, and specialty coffee roasting techniques."
  },
  {
    title: "Custodian",
    company: "Huron Arena • Summer 1998 & 1999",
    period: "1998-1999",
    description: "Summer custodial work at Huron, SD arena facility. Responsibilities included stripping and waxing floors (including hardwood basketball court), facility maintenance, and comprehensive salvage operations under a Depression-era boss who valued every material item - from old toilets to every strip of maple baseboard."
  }
];

export const projects: Project[] = [
  {
    title: "Hatclub - Hat Appreciation App",
    subtitle: "Solo Project • Prime Digital Academy",
    description: "Full CRUD application allowing users to upload photos of hats with detailed descriptions, edit and delete uploads, and view community submissions. Special emphasis on accessibility and assistive technologies.",
    technologies: ["PostgreSQL", "Express", "React", "Node.js", "Material-UI", "a11y"]
  },
  {
    title: "Pet-Jet",
    subtitle: "Group Project • Prime Digital Academy",
    description: "Full CRUD application for coordinating trans-Atlantic private jet travel with pets. Deployed live application with administrative features and data visualization.",
    liveDemo: "pet-jet.herokuapp.com",
    technologies: ["PostgreSQL", "Express", "React", "Node.js", "Material-UI", "Chart.js"]
  },
  {
    title: "\"Don't Fall In Love With The City\"",
    subtitle: "Published Photo/Poetry Book • Co-authored with Joe Bozic • 2018",
    description: "Self-taught Adobe InDesign to create and publish a photo/poetry book combining visual storytelling with written narrative. Collaborative work combining photography and poetry.",
    technologies: ["Photography", "InDesign", "Publishing", "Creative Writing", "Collaboration"]
  },
  {
    title: "\"gelato for dinner\"",
    subtitle: "Published Photography Zine • 2019",
    description: "Self-published photography zine documenting travels through Rome, Florence, Cinque Terre, and Venice in the tradition of street photography.",
    technologies: ["Photography", "Photo Curation", "InDesign", "Self-Publishing", "Travel Documentation"]
  }
];

export const skills: SkillCategory = {
  "Frontend Development": ["React.js", "JavaScript", "TypeScript", "HTML", "CSS", "Redux.js", "Material-UI"],
  "AI & Development Tools": ["GitHub Copilot", "AI-Assisted Development", "LLM Fundamentals", "Data Science Basics"],
  "Tools & Workflow": ["Git", "GitHub", "Vite", "npm", "VS Code", "Chrome DevTools"],
  "Design & UX": ["Responsive Design", "Accessibility (a11y)", "Component Design", "User Interface Design"],
  "Analytics & Media": ["Google Analytics", "Web Analytics", "Adobe Lightroom", "Adobe Photoshop", "Adobe InDesign"],
  "Leadership & Communication": ["Teaching", "Active Listening", "Leadership", "Communication", "Team Coordination"]
};
