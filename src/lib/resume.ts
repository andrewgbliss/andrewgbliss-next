export type WorkExperience = {
  title: string;
  company: string;
  location: string;
  from: string;
  to: string;
  skills: Array<string>;
  bulletpoints: Array<string>;
};

export type Address = {
  city: string;
  state: string;
};

export type Education = {
  school: string;
  from: string;
  to: string;
  name: string;
};

export type ResumeOptions = {
  name: string;
  email: string;
  bio: string;
  address: Address;
  education: Education;
  workExperience: Array<WorkExperience>;
  links: Array<string>;
};

export const resume: ResumeOptions = {
  name: "Andrew Bliss",
  email: "andrewgbliss@gmail.com",
  bio: `Senior software engineer`,
  address: {
    city: "Lehi",
    state: "UT",
  },
  education: {
    school: "Stevens-Henager College",
    from: "Sep, 2002",
    to: "Oct, 2006",
    name: "Bachelors of Computer Science",
  },
  workExperience: [
    {
      title: "Senior Software Engineer",
      company: "Carketa",
      location: "Lehi, UT",
      from: "Sep, 2022",
      to: "Current",
      skills: ["React", "NextJs", "Typescript", "Postgres", "Google Cloud"],
      bulletpoints: [
        "Developed and maintained web applications using Next.js, React, and Node.js, resulting in faster deployments, conversions, and MRR.",
        "Designed and managed database schemas in PostgreSQL, optimizing performance and reliability.",
        "Troubleshot and resolved software defects and issues in a timely and efficient manner.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "nth-child consulting",
      location: "Orem, UT",
      from: "Dec, 2017",
      to: "Sep, 2022",
      skills: [
        "React",
        "Node",
        "Typescript",
        "NextJs",
        "Postgres",
        "Google Cloud",
      ],
      bulletpoints: [
        "End to end project management. Creating features, tasks, and training for junior devs.",
        "Planned the structure for each business application with documentation, testing, and code reviews.",
        "Created and deployed frontend apps, microservices, REST API, webhooks, websockets, cloud functions.",
      ],
    },
    {
      title: "Senior Full Stack Developer",
      company: "Grow",
      location: "Provo, UT",
      from: "Feb, 2014",
      to: "Nov, 2017",
      skills: ["React", "Node", "Postgres", "AWS"],
      bulletpoints: [
        "Designed and developed REST APIs that connected to hundreds of 3rd party data sources using React, Node and Postgres.",
        "Implemented a data warehouse that was scalable to handle heavy workloads.",
        "Created the business intelligence dashboard that would connect in real time to provide analytics for the client.",
      ],
    },
    {
      title: "Senior Web Developer",
      company: "Rain",
      location: "American Fork, UT",
      from: "Mar, 2013",
      to: "Feb, 2014",
      skills: ["PHP", "MySQL", "Angular", "HTML", "CSS"],
      bulletpoints: [
        "Created a PHP RESTful API in CakePHP that would interface with School Specialty, Clever, SES, and Twilio APIs.",
        "SaaS application would deliver alerts to students about events. Students, Teachers and Admins could use this app to display calendar information and course instruction.",
        "Developed application structure that could be used offline.",
      ],
    },
    {
      title: "Web Developer",
      company: "Zagg",
      location: "Salt Lake City, UT",
      from: "Dec, 2010",
      to: "Feb, 2013",
      skills: ["PHP", "MySQL", "Javascript", "HTML", "CSS"],
      bulletpoints: [
        "Created APIs that would interface with 3rd party credit card APIs. Authorize.net, Cyber Source and PayPal.",
        "Created a PHP Backend system that customer service could use to create discounts, offers, sales, and orders.",
        "Developed HTML5 Frontend features that made checkout processes faster.",
      ],
    },
    {
      title: "Web Developer",
      company: "Classtop",
      location: "Draper, UT",
      from: "Mar, 2008",
      to: "Nov, 2010",
      skills: ["PHP", "MySQL", "Javascript", "HTML", "CSS"],
      bulletpoints: [
        "Maintained a legacy C# application and developed a low cost efficient PHP application that interfaced with Facebook APIs.",
        "Solved slow database issues caused by many to many connections by implementing a shard system.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Stevens-Henager College",
      location: "Salt Lake City, UT",
      from: "Apr, 2002",
      to: "Oct, 2006",
      skills: ["Coldfusion", "Oracle", "Javascript", "HTML", "CSS"],
      bulletpoints: [
        "Created and maintained many ColdFusion servers that processed student, financial, and admissions information.",
        "Implemented many tools in reporting and scheduling that improved many admin processes.",
      ],
    },
  ],
  links: [
    "https://www.blisscode.dev",
    "https://www.github.com/andrewgbliss",
    "https://www.linkedin.com/in/andrewgbliss/",
  ],
};
