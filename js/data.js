// ============================================================
// SITE DATA — edit this file to update portfolio content.
// Every field here is sourced from the resume. Fill in the
// placeholder links (marked "ADD YOUR LINK") before publishing.
// ============================================================

const SITE = {
  name: "Shaikh Wasik Alli",
  initials: "SA",
  title: "Full-Stack Software Engineer | Laravel & Angular Developer",
  location: "Bhubaneswar, India",
  email: "skwasikalli98@gmail.com",
  phone: "+91 7504210525",
  yearsExperience: 5,

  // Fill these in with your real profile URLs before publishing.
  links: {
    github: "https://github.com/thewasik/thewasik.github.io", // ADD YOUR LINK — e.g. https://github.com/yourusername
    linkedin: "https://linkedin.com/in/shaikhwasik", // ADD YOUR LINK — e.g. https://linkedin.com/in/yourusername
    resume: "assets/resume.pdf" // place your resume PDF here (see README)
  },

  heroIntro:
    "I build enterprise web applications end to end, from responsive Angular front ends to robust Laravel APIs and MySQL databases, delivering solutions designed for real-world production environments. Over the past three years, I’ve contributed to a large-scale government scholarship platform, building and maintaining features that support complex workflows and serve real users at scale.",

  about: {
    paragraphs: [
      "I'm a full-stack software engineer based in Bhubaneswar, India, with five years of experience building and maintaining enterprise web applications. My work spans the stack: Angular and TypeScript on the front end, PHP with Laravel (and Lumen for lighter services) on the back end, MySQL for data, and Redis where performance calls for it.",
      "Since 2021 I've worked at CSM Technologies, owning features from requirement analysis through deployment on the Odisha State Scholarship Portal — a system that processes scholarship applications at state scale. That's meant designing REST APIs, optimizing queries and data handling for high-traffic modules, and debugging production issues where reliability actually matters.",
      "I care about code that holds up under real usage: tested, reasonably documented, and built so the next person — often me, six months later — can follow it."
    ]
  },

  experience: [
    {
      role: "Programmer",
      company: "CSM Technologies",
      period: "Sep 2021 — Present",
      current: true,
      points: [
        "Led development of enterprise web applications using Angular on the front end and Laravel on the back end, covering the full lifecycle from requirement analysis to deployment.",
        "Designed and implemented scalable REST APIs, improving application performance and data handling for high-traffic modules.",
        "Contributed to the development and ongoing enhancement of the Odisha State Scholarship Portal, supporting large-scale scholarship processing and improving accessibility for students.",
        "Performed debugging, unit testing, and database optimization using MySQL and Redis to maintain reliability and performance in production."
      ]
    }
  ],

  featuredProject: {
    name: "Odisha State Scholarship Portal",
    subtitle: "Enterprise scholarship-processing platform for the Government of Odisha",
    duration: "24 months",
    description:
      "A state-government platform for processing scholarship applications at scale. Work spans the stack — Angular modules on the front end and Laravel services on the back end — supporting high volumes of applicants while keeping the system accessible and reliable under production load.",
    contributions: [
      "Built and maintained front-end modules in Angular for scholarship application workflows.",
      "Developed backend services and REST APIs in Laravel to support large-scale scholarship processing.",
      "Improved data handling and query performance to support high-traffic periods without degrading reliability.",
      "Carried out debugging, unit testing, and database optimization (MySQL, Redis) as part of ongoing production support."
    ],
    tags: ["PHP", "Laravel", "MySQL", "Angular", "TypeScript", "REST API", "Redis", "Git"],
    link: null // ADD YOUR LINK if a public case study or demo exists; leave null otherwise
  },

  skills: [
    { category: "Backend", items: ["PHP", "Laravel", "Lumen", "REST APIs"] },
    { category: "Frontend", items: ["Angular", "TypeScript", "JavaScript", "RxJS", "HTML", "CSS"] },
    { category: "Database", items: ["MySQL", "Redis", "Query Optimization"] },
    { category: "Tools & Practice", items: ["Git", "Agile", "Unit Testing"] }
  ],

  expertise: [
    "Enterprise Web Applications",
    "REST API Design",
    "Database Optimization",
    "Frontend Architecture (Angular)",
    "Production Debugging",
    "Performance Optimization"
  ],

  education: [
    { degree: "MCA — Computers", school: "Utkal University", year: "2021" },
    { degree: "B.Sc — Computer Science and Technology", school: "Utkal University, Raghunathjew Degree College", year: "2018" }
  ],

  certifications: [{ name: "Certificate in Computer Application" }],

  interests: ["Technical Blogging", "Open Source Contribution", "Competitive Coding"]
};
