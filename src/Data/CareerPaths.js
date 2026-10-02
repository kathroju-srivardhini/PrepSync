const careerPaths = [
  // =========================================================
  // 1. SOFTWARE ENGINEER
  // =========================================================

  {
    role: "Software Engineer",
    category: "Software Development",

    shortDescription:
      "Design, develop, test and maintain software applications that solve real-world problems.",

    overview: {
      whatIsIt:
        "A Software Engineer is a professional who uses programming, problem solving and software-development principles to design, build, test and maintain software. Software Engineers can work on web applications, mobile applications, backend systems, desktop software, cloud services and many other types of software.",

      whatDoTheyDo: [
        "Understand a problem or requirement and convert it into a software solution",
        "Design the structure and logic of applications",
        "Write, read and maintain source code",
        "Work with databases and APIs",
        "Test applications and fix bugs",
        "Improve application performance and reliability",
        "Use version-control systems such as Git",
        "Work with other developers, testers, designers and product teams",
        "Maintain and improve existing software"
      ],

      whereUsed: [
        "Web applications",
        "Mobile applications",
        "Banking and financial software",
        "E-commerce platforms",
        "Enterprise applications",
        "Cloud services",
        "Desktop applications",
        "Education platforms",
        "Healthcare software",
        "Business automation systems"
      ]
    },

    skills: [
      {
        name: "Programming",
        description:
          "The ability to write instructions that a computer can execute using a programming language.",
        whyItMatters:
          "Programming is the fundamental skill used to create software.",
        beginnerLevel: "Essential"
      },

      {
        name: "Data Structures & Algorithms",
        description:
          "Data structures organize information, while algorithms provide systematic ways to solve problems.",
        whyItMatters:
          "They help developers solve problems efficiently and are also commonly tested during technical interviews.",
        beginnerLevel: "Essential"
      },

      {
        name: "Object-Oriented Programming",
        description:
          "A programming approach based on concepts such as classes, objects, encapsulation, inheritance and polymorphism.",
        whyItMatters:
          "Many large software applications are designed using object-oriented principles.",
        beginnerLevel: "Essential"
      },

      {
        name: "Database Fundamentals",
        description:
          "Understanding how applications store, retrieve, update and organize data.",
        whyItMatters:
          "Most real-world applications need to store user and application data.",
        beginnerLevel: "Important"
      },

      {
        name: "Problem Solving",
        description:
          "Breaking a large problem into smaller steps and finding a logical solution.",
        whyItMatters:
          "Software development involves solving new problems rather than only writing predefined code.",
        beginnerLevel: "Essential"
      },

      {
        name: "Git & Version Control",
        description:
          "A way to track changes to source code and collaborate safely on projects.",
        whyItMatters:
          "Developers need to manage code changes and work with other developers.",
        beginnerLevel: "Important"
      }
    ],

    learningPath: {
      foundation: [
        "Computer and programming fundamentals",
        "Choose one programming language",
        "Variables and data types",
        "Conditions and loops",
        "Functions or methods",
        "Arrays and strings",
        "Basic problem solving"
      ],

      core: [
        "Object-Oriented Programming",
        "Data Structures",
        "Algorithms",
        "SQL and databases",
        "Git and GitHub",
        "Basic networking",
        "HTTP and APIs"
      ],

      specialization: [
        "Choose a development area",
        "Learn the relevant framework or platform",
        "Build real-world applications",
        "Learn testing",
        "Learn deployment"
      ],

      advanced: [
        "System Design",
        "Cloud fundamentals",
        "Application security",
        "Performance optimization",
        "Scalable architecture"
      ]
    },

    technologyChoices: [
      {
        category: "Programming Language",
        purpose:
          "Used to write the logic and functionality of software.",
        options: [
          {
            name: "Java",
            usedFor:
              "Enterprise applications, backend systems and general software development.",
            difficulty: "Beginner-friendly",
            recommendation: "Good starting option"
          },
          {
            name: "Python",
            usedFor:
              "Backend development, automation, data and AI-related applications.",
            difficulty: "Beginner-friendly",
            recommendation: "Good starting option"
          },
          {
            name: "JavaScript",
            usedFor:
              "Web frontend development and also backend development using Node.js.",
            difficulty: "Beginner-friendly",
            recommendation: "Good choice for web development"
          }
        ],
        beginnerChoice:
          "Choose ONE language based on the type of software you want to build."
      },

      {
        category: "Version Control",
        purpose:
          "Tracks changes in source code and helps developers collaborate.",
        options: [
          {
            name: "Git",
            usedFor:
              "Tracking code changes, branches and versions of a project.",
            difficulty: "Beginner-friendly",
            recommendation: "Learn this"
          }
        ],
        beginnerChoice: "Git"
      }
    ],

    projects: {
      beginner: [
        "Calculator",
        "Student Grade Calculator",
        "Number Guessing Game",
        "Contact Management Program"
      ],

      intermediate: [
        "Student Management System",
        "Library Management System",
        "Expense Tracker",
        "Task Management Application"
      ],

      advanced: [
        "E-commerce Application",
        "Online Learning Platform",
        "Multi-user Business Application"
      ]
    },

    prerequisites: [
      "Basic computer knowledge",
      "Interest in programming",
      "Logical thinking",
      "Willingness to practice regularly"
    ],

    specializations: [
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "Mobile Development",
      "Cloud Development",
      "Data and AI",
      "Enterprise Software"
    ],

    jobTitles: [
      "Software Engineer",
      "Software Developer",
      "Application Developer",
      "Associate Software Engineer"
    ],

    learnFirst: [
      "Programming fundamentals",
      "One programming language",
      "Basic DSA",
      "Git"
    ],

    learnLater: [
      "System Design",
      "Cloud",
      "Advanced architecture",
      "Distributed systems"
    ],

    avoidInitially: [
      "Learning several programming languages at once",
      "Learning advanced system design before basic programming",
      "Trying every framework at the same time"
    ]
  },


  // =========================================================
  // 2. JAVA DEVELOPER
  // =========================================================

  {
    role: "Java Developer",
    category: "Software Development",

    shortDescription:
      "Build software applications, backend systems and enterprise solutions using Java.",

    overview: {
      whatIsIt:
        "A Java Developer is a software developer who uses Java to build applications and systems. Java is commonly used for backend services, enterprise applications, business software and large-scale systems. A Java Developer may work with frameworks such as Spring Boot to build modern backend applications and REST APIs.",

      whatDoTheyDo: [
        "Write Java programs and application logic",
        "Design classes and objects using object-oriented principles",
        "Build backend services",
        "Create REST APIs",
        "Connect applications to databases",
        "Test and debug Java applications",
        "Maintain existing Java systems",
        "Improve application performance and reliability"
      ],

      whereUsed: [
        "Banking and finance",
        "Enterprise applications",
        "E-commerce",
        "Business software",
        "Backend systems",
        "Web applications",
        "Large-scale services"
      ]
    },

    skills: [
      {
        name: "Java Programming",
        description:
          "Learn Java syntax, variables, control flow, methods, arrays, strings and other language fundamentals.",
        whyItMatters:
          "Java is the primary programming language for this career.",
        beginnerLevel: "Essential"
      },

      {
        name: "Object-Oriented Programming",
        description:
          "Learn classes, objects, inheritance, interfaces, abstraction, encapsulation and polymorphism.",
        whyItMatters:
          "Object-oriented design is fundamental to Java development.",
        beginnerLevel: "Essential"
      },

      {
        name: "Data Structures & Algorithms",
        description:
          "Learn arrays, linked lists, stacks, queues, trees, hashing, sorting and searching.",
        whyItMatters:
          "Useful for efficient programming and technical interviews.",
        beginnerLevel: "Essential"
      },

      {
        name: "SQL & Database Fundamentals",
        description:
          "Learn how to store, retrieve and modify structured application data.",
        whyItMatters:
          "Backend applications frequently communicate with databases.",
        beginnerLevel: "Essential"
      },

      {
        name: "REST APIs",
        description:
          "Learn how applications communicate through HTTP requests and responses.",
        whyItMatters:
          "Modern Java backend applications commonly expose APIs for frontend and other services.",
        beginnerLevel: "Important"
      },

      {
        name: "Git",
        description:
          "Version-control system used to track source-code changes.",
        whyItMatters:
          "Used for maintaining projects and collaborating with other developers.",
        beginnerLevel: "Important"
      }
    ],

    learningPath: {
      foundation: [
        "Java basics",
        "Variables and data types",
        "Conditions and loops",
        "Methods",
        "Arrays",
        "Strings"
      ],

      core: [
        "OOP",
        "Collections Framework",
        "Exception Handling",
        "Generics",
        "File Handling",
        "DSA",
        "SQL",
        "DBMS"
      ],

      specialization: [
        "Spring Boot",
        "REST APIs",
        "Database integration",
        "Authentication",
        "Backend project development"
      ],

      advanced: [
        "Testing",
        "Spring Security",
        "Caching",
        "Microservices",
        "System Design",
        "Cloud deployment"
      ]
    },

    technologyChoices: [
      {
        category: "Programming Language",
        purpose:
          "Used to write the application logic.",
        options: [
          {
            name: "Java",
            usedFor:
              "Building software applications and backend systems.",
            difficulty: "Beginner-friendly",
            recommendation: "Start here"
          }
        ],
        beginnerChoice: "Java"
      },

      {
        category: "Backend Framework",
        purpose:
          "Provides structure and tools for building Java backend applications.",
        options: [
          {
            name: "Spring Boot",
            usedFor:
              "Building Java backend applications and REST APIs.",
            difficulty: "Intermediate",
            recommendation: "Learn after Java fundamentals"
          }
        ],
        beginnerChoice: "Spring Boot"
      },

      {
        category: "Relational Database",
        purpose:
          "Stores structured application data.",
        options: [
          {
            name: "MySQL",
            usedFor:
              "Storing and querying relational data.",
            difficulty: "Beginner-friendly",
            recommendation: "Good starting choice"
          },
          {
            name: "PostgreSQL",
            usedFor:
              "Storing and querying relational data.",
            difficulty: "Beginner-friendly",
            recommendation: "Good alternative"
          }
        ],
        beginnerChoice: "MySQL"
      }
    ],

    projects: {
      beginner: [
        "Student Grade Management Program",
        "Console Banking Application",
        "Library Management Program"
      ],

      intermediate: [
        "Student Management REST API",
        "Employee Management System",
        "Library Management API"
      ],

      advanced: [
        "E-commerce Backend",
        "Authentication Service",
        "Online Banking Backend"
      ]
    },

    prerequisites: [
      "Basic computer knowledge",
      "Basic programming interest",
      "Logical problem solving"
    ],

    specializations: [
      "Java Backend Development",
      "Spring Boot Development",
      "Enterprise Development",
      "Microservices"
    ],

    jobTitles: [
      "Java Developer",
      "Java Backend Developer",
      "Spring Boot Developer",
      "Software Engineer"
    ],

    learnFirst: [
      "Java fundamentals",
      "OOP",
      "Basic DSA",
      "SQL"
    ],

    learnLater: [
      "Spring Boot",
      "Spring Security",
      "Microservices",
      "Cloud"
    ],

    avoidInitially: [
      "Learning multiple Java frameworks simultaneously",
      "Microservices before learning basic backend development",
      "Starting Spring Boot without understanding Java and OOP"
    ]
  },


  // =========================================================
  // 3. MERN DEVELOPER
  // =========================================================

  {
    role: "MERN Developer",
    category: "Web Development",

    shortDescription:
      "Build complete web applications using MongoDB, Express.js, React and Node.js.",

    overview: {
      whatIsIt:
        "A MERN Developer builds full-stack web applications using four main technologies: MongoDB for data storage, Express.js for backend web services, React for the user interface, and Node.js for running JavaScript on the server. MERN is one possible full-stack JavaScript development path.",

      whatDoTheyDo: [
        "Build interactive frontend interfaces",
        "Create reusable React components",
        "Develop backend APIs",
        "Store and retrieve data from databases",
        "Implement authentication",
        "Connect frontend applications with backend APIs",
        "Test and debug applications",
        "Deploy web applications"
      ],

      whereUsed: [
        "Startups",
        "Web applications",
        "SaaS products",
        "Dashboards",
        "E-commerce",
        "Education platforms",
        "Social applications"
      ]
    },

    skills: [
      {
        name: "HTML",
        description:
          "Defines the structure and content of web pages.",
        whyItMatters:
          "It provides the basic structure that browsers display.",
        beginnerLevel: "Essential"
      },

      {
        name: "CSS",
        description:
          "Controls the appearance, layout and responsive behavior of webpages.",
        whyItMatters:
          "Used to create usable and responsive interfaces.",
        beginnerLevel: "Essential"
      },

      {
        name: "JavaScript",
        description:
          "Programming language used for web interactions and application logic.",
        whyItMatters:
          "JavaScript is the foundation of the MERN stack.",
        beginnerLevel: "Essential"
      },

      {
        name: "React",
        description:
          "A JavaScript library used to build component-based user interfaces.",
        whyItMatters:
          "It is the frontend part of the MERN stack.",
        beginnerLevel: "Important"
      },

      {
        name: "API Development",
        description:
          "Building interfaces through which frontend and backend systems communicate.",
        whyItMatters:
          "Full-stack applications need communication between different parts of the system.",
        beginnerLevel: "Important"
      },

      {
        name: "Database Fundamentals",
        description:
          "Understanding how application data is stored and retrieved.",
        whyItMatters:
          "Applications need persistent data storage.",
        beginnerLevel: "Important"
      }
    ],

    learningPath: {
      foundation: [
        "HTML",
        "CSS",
        "JavaScript fundamentals",
        "Git and GitHub"
      ],

      core: [
        "React fundamentals",
        "Components",
        "Props and state",
        "Routing",
        "API integration",
        "Node.js",
        "Express.js",
        "MongoDB"
      ],

      specialization: [
        "Authentication",
        "Authorization",
        "Application architecture",
        "Deployment",
        "Testing"
      ],

      advanced: [
        "Performance optimization",
        "Caching",
        "Security",
        "Scalable architecture",
        "Cloud deployment"
      ]
    },

    technologyChoices: [
      {
        category: "Frontend",
        purpose:
          "Used to build the part of the application users see and interact with.",
        options: [
          {
            name: "React",
            usedFor:
              "Building component-based interactive web interfaces.",
            difficulty: "Beginner to intermediate",
            recommendation: "Good starting choice"
          },
          {
            name: "Vue",
            usedFor:
              "Building interactive web interfaces as an alternative frontend framework.",
            difficulty: "Beginner to intermediate",
            recommendation: "Alternative"
          },
          {
            name: "Angular",
            usedFor:
              "Building structured web applications using a full frontend framework.",
            difficulty: "Intermediate",
            recommendation: "Alternative"
          }
        ],
        beginnerChoice: "React"
      },

      {
        category: "Backend Runtime",
        purpose:
          "Runs JavaScript outside the browser.",
        options: [
          {
            name: "Node.js",
            usedFor:
              "Running JavaScript on servers and building backend services.",
            difficulty: "Beginner to intermediate",
            recommendation: "MERN choice"
          }
        ],
        beginnerChoice: "Node.js"
      },

      {
        category: "Backend Framework",
        purpose:
          "Provides tools for creating backend routes and APIs.",
        options: [
          {
            name: "Express.js",
            usedFor:
              "Building APIs and web servers with Node.js.",
            difficulty: "Beginner-friendly",
            recommendation: "Good starting choice"
          }
        ],
        beginnerChoice: "Express.js"
      },

      {
        category: "Database",
        purpose:
          "Stores application data.",
        options: [
          {
            name: "MongoDB",
            usedFor:
              "Storing document-oriented application data.",
            difficulty: "Beginner-friendly",
            recommendation: "MERN choice"
          }
        ],
        beginnerChoice: "MongoDB"
      }
    ],

    projects: {
      beginner: [
        "Personal Portfolio",
        "Todo Application",
        "Weather Application"
      ],

      intermediate: [
        "Task Management Application",
        "Expense Tracker",
        "Student Management Platform"
      ],

      advanced: [
        "Placement Preparation Platform",
        "E-commerce Application",
        "Learning Management System"
      ]
    },

    prerequisites: [
      "Basic computer knowledge",
      "Interest in web development",
      "Willingness to learn JavaScript"
    ],

    specializations: [
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "SaaS Development"
    ],

    jobTitles: [
      "MERN Developer",
      "Full Stack Developer",
      "Frontend Developer",
      "Node.js Developer"
    ],

    learnFirst: [
      "HTML",
      "CSS",
      "JavaScript",
      "Git"
    ],

    learnLater: [
      "Advanced React",
      "Authentication",
      "Testing",
      "Deployment",
      "System Design"
    ],

    avoidInitially: [
      "Learning React, Vue and Angular together",
      "Learning multiple CSS frameworks simultaneously",
      "Starting backend development before understanding JavaScript fundamentals"
    ]
  },


  // =========================================================
  // 4. FRONTEND DEVELOPER
  // =========================================================

  {
    role: "Frontend Developer",
    category: "Web Development",

    shortDescription:
      "Build responsive and interactive interfaces that users see and interact with.",

    overview: {
      whatIsIt:
        "A Frontend Developer creates the user-facing part of websites and web applications. They turn designs and requirements into interactive interfaces that work across different screen sizes and connect to backend services through APIs.",

      whatDoTheyDo: [
        "Create webpages and application interfaces",
        "Build responsive layouts",
        "Add interactive functionality",
        "Create reusable UI components",
        "Connect frontend applications to APIs",
        "Handle forms and user input",
        "Fix visual and functional bugs",
        "Improve accessibility and user experience"
      ],

      whereUsed: [
        "Websites",
        "E-commerce",
        "Dashboards",
        "SaaS applications",
        "Education platforms",
        "Banking applications",
        "Social platforms"
      ]
    },

    skills: [
      {
        name: "HTML",
        description:
          "Markup language used to structure content on webpages.",
        whyItMatters:
          "Every standard webpage needs a structured document.",
        beginnerLevel: "Essential"
      },

      {
        name: "CSS",
        description:
          "Styles and positions elements on a webpage.",
        whyItMatters:
          "Used to create layouts, visual design and responsive interfaces.",
        beginnerLevel: "Essential"
      },

      {
        name: "JavaScript",
        description:
          "Adds programming logic and interactivity to web applications.",
        whyItMatters:
          "Modern frontend applications depend heavily on JavaScript.",
        beginnerLevel: "Essential"
      },

      {
        name: "Responsive Design",
        description:
          "Designing interfaces that work on mobile, tablet and desktop screens.",
        whyItMatters:
          "Users access applications from many different devices.",
        beginnerLevel: "Essential"
      },

      {
        name: "API Integration",
        description:
          "Connecting frontend applications to backend services.",
        whyItMatters:
          "Frontend applications usually need data from a server.",
        beginnerLevel: "Important"
      }
    ],

    learningPath: {
      foundation: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive design",
        "Git"
      ],

      core: [
        "DOM",
        "Modern JavaScript",
        "Asynchronous JavaScript",
        "API requests",
        "Frontend framework",
        "Component-based development"
      ],

      specialization: [
        "React or another frontend framework",
        "State management",
        "Routing",
        "Forms",
        "Authentication",
        "Testing"
      ],

      advanced: [
        "Performance optimization",
        "Accessibility",
        "Advanced state management",
        "Frontend architecture",
        "Deployment"
      ]
    },

    technologyChoices: [
      {
        category: "Frontend Framework / Library",
        purpose:
          "Helps developers build complex interactive interfaces using reusable components.",
        options: [
          {
            name: "React",
            usedFor:
              "Building component-based web applications.",
            difficulty: "Beginner to intermediate",
            recommendation: "Good starting choice"
          },
          {
            name: "Vue",
            usedFor:
              "Building interactive web applications.",
            difficulty: "Beginner to intermediate",
            recommendation: "Alternative"
          },
          {
            name: "Angular",
            usedFor:
              "Building structured and feature-rich web applications.",
            difficulty: "Intermediate",
            recommendation: "Alternative"
          }
        ],
        beginnerChoice: "React"
      },

      {
        category: "CSS Framework",
        purpose:
          "Provides reusable styling utilities or components.",
        options: [
          {
            name: "Bootstrap",
            usedFor:
              "Creating responsive layouts and using ready-made UI components.",
            difficulty: "Beginner-friendly",
            recommendation: "Easy starting option"
          },
          {
            name: "Tailwind CSS",
            usedFor:
              "Building custom interfaces using utility classes.",
            difficulty: "Beginner to intermediate",
            recommendation: "Good alternative"
          }
        ],
        beginnerChoice:
          "Learn CSS fundamentals first, then choose Bootstrap or Tailwind if needed."
      },

      {
        category: "Build Tool",
        purpose:
          "Helps run, bundle and build modern frontend applications.",
        options: [
          {
            name: "Vite",
            usedFor:
              "Creating and running modern frontend projects.",
            difficulty: "Beginner-friendly",
            recommendation: "Good choice for React projects"
          }
        ],
        beginnerChoice: "Vite"
      }
    ],

    projects: {
      beginner: [
        "Personal Portfolio",
        "Landing Page",
        "Responsive Restaurant Website"
      ],

      intermediate: [
        "Admin Dashboard",
        "Weather Application",
        "E-commerce Frontend"
      ],

      advanced: [
        "Real-time Dashboard",
        "Large E-commerce Interface",
        "SaaS Web Application"
      ]
    },

    prerequisites: [
      "Basic computer knowledge",
      "Interest in websites and user interfaces"
    ],

    specializations: [
      "React Development",
      "UI Engineering",
      "Web Performance",
      "Design Systems"
    ],

    jobTitles: [
      "Frontend Developer",
      "UI Developer",
      "React Developer",
      "Web Developer"
    ],

    learnFirst: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive design"
    ],

    learnLater: [
      "React",
      "Testing",
      "Performance",
      "Accessibility",
      "Deployment"
    ],

    avoidInitially: [
      "Learning multiple frontend frameworks together",
      "Using CSS frameworks without understanding CSS",
      "Jumping into advanced state management too early"
    ]
  },


  // =========================================================
  // 5. BACKEND DEVELOPER
  // =========================================================

  {
    role: "Backend Developer",
    category: "Web Development",

    shortDescription:
      "Build the server-side logic, APIs, databases and systems that power applications.",

    overview: {
      whatIsIt:
        "A Backend Developer works on the part of an application that users do not directly see. They build server-side logic, APIs, authentication systems, database interactions and business rules. The backend receives requests, processes information and sends appropriate responses to clients such as websites or mobile applications.",

      whatDoTheyDo: [
        "Build server-side applications",
        "Create REST APIs",
        "Implement business logic",
        "Design database interactions",
        "Handle authentication and authorization",
        "Validate user input",
        "Write tests",
        "Monitor and improve backend systems"
      ],

      whereUsed: [
        "Web applications",
        "Mobile applications",
        "Banking systems",
        "E-commerce",
        "SaaS products",
        "Enterprise systems",
        "APIs and cloud services"
      ]
    },

    skills: [
      {
        name: "Programming",
        description:
          "Writing code that processes requests and implements application logic.",
        whyItMatters:
          "Backend systems are built around programming logic.",
        beginnerLevel: "Essential"
      },

      {
        name: "HTTP & APIs",
        description:
          "Understanding how clients and servers communicate.",
        whyItMatters:
          "APIs are a major way frontend and backend systems communicate.",
        beginnerLevel: "Essential"
      },

      {
        name: "Database Management",
        description:
          "Understanding how data is stored, queried and updated.",
        whyItMatters:
          "Most backend systems need persistent data.",
        beginnerLevel: "Essential"
      },

      {
        name: "Authentication & Authorization",
        description:
          "Authentication identifies users, while authorization determines what they are allowed to access.",
        whyItMatters:
          "Applications need to protect user accounts and restricted resources.",
        beginnerLevel: "Important"
      },

      {
        name: "Error Handling",
        description:
          "Handling invalid requests and unexpected failures safely.",
        whyItMatters:
          "Real applications must continue working correctly when something goes wrong.",
        beginnerLevel: "Important"
      }
    ],

    learningPath: {
      foundation: [
        "Programming fundamentals",
        "Choose one backend language",
        "Git",
        "Basic networking"
      ],

      core: [
        "HTTP",
        "REST APIs",
        "SQL",
        "DBMS",
        "CRUD operations",
        "Authentication"
      ],

      specialization: [
        "Choose a backend framework",
        "Build APIs",
        "Database integration",
        "Testing",
        "Deployment"
      ],

      advanced: [
        "Caching",
        "Message queues",
        "System Design",
        "Microservices",
        "Cloud"
      ]
    },

    technologyChoices: [
      {
        category: "Programming Language",
        purpose:
          "Used to write backend application logic.",
        options: [
          {
            name: "Java",
            usedFor:
              "Enterprise and backend applications.",
            difficulty: "Beginner-friendly",
            recommendation: "Good option"
          },
          {
            name: "Python",
            usedFor:
              "Backend applications, APIs and automation.",
            difficulty: "Beginner-friendly",
            recommendation: "Good option"
          },
          {
            name: "JavaScript",
            usedFor:
              "Backend development using Node.js.",
            difficulty: "Beginner-friendly",
            recommendation: "Good option for web developers"
          },
          {
            name: "Go",
            usedFor:
              "Backend services and high-performance applications.",
            difficulty: "Intermediate",
            recommendation: "Learn later"
          }
        ],
        beginnerChoice:
          "Choose ONE language rather than learning several simultaneously."
      },

      {
        category: "Framework",
        purpose:
          "Provides structure and tools for building backend applications.",
        options: [
          {
            name: "Spring Boot",
            usedFor:
              "Building Java backend applications.",
            difficulty: "Intermediate",
            recommendation: "Java path"
          },
          {
            name: "Express.js",
            usedFor:
              "Building APIs and servers with Node.js.",
            difficulty: "Beginner-friendly",
            recommendation: "JavaScript path"
          },
          {
            name: "FastAPI",
            usedFor:
              "Building APIs using Python.",
            difficulty: "Beginner to intermediate",
            recommendation: "Python path"
          },
          {
            name: "Django",
            usedFor:
              "Building feature-rich web applications using Python.",
            difficulty: "Intermediate",
            recommendation: "Python alternative"
          }
        ],
        beginnerChoice:
          "Choose the framework that matches your chosen programming language."
      },

      {
        category: "Database",
        purpose:
          "Stores application data.",
        options: [
          {
            name: "MySQL",
            usedFor:
              "Relational database applications.",
            difficulty: "Beginner-friendly",
            recommendation: "Good starting choice"
          },
          {
            name: "PostgreSQL",
            usedFor:
              "Relational database applications.",
            difficulty: "Beginner-friendly",
            recommendation: "Good alternative"
          },
          {
            name: "MongoDB",
            usedFor:
              "Document-oriented applications.",
            difficulty: "Beginner-friendly",
            recommendation: "Useful for some application types"
          }
        ],
        beginnerChoice:
          "Learn SQL and relational database concepts before worrying about multiple databases."
      }
    ],

    projects: {
      beginner: [
        "Simple REST API",
        "Notes API",
        "Student CRUD API"
      ],

      intermediate: [
        "Authentication API",
        "Expense Tracker Backend",
        "Employee Management API"
      ],

      advanced: [
        "E-commerce Backend",
        "Booking System Backend",
        "Scalable Multi-user API"
      ]
    },

    prerequisites: [
      "Basic programming",
      "Logical problem solving",
      "Basic computer knowledge"
    ],

    specializations: [
      "Java Backend",
      "Node.js Backend",
      "Python Backend",
      "Microservices",
      "Cloud Backend"
    ],

    jobTitles: [
      "Backend Developer",
      "Backend Engineer",
      "API Developer",
      "Server-side Developer"
    ],

    learnFirst: [
      "Programming",
      "HTTP",
      "REST APIs",
      "SQL",
      "Git"
    ],

    learnLater: [
      "Authentication",
      "Testing",
      "Caching",
      "System Design",
      "Cloud"
    ],

    avoidInitially: [
      "Learning four backend languages",
      "Starting microservices before learning a basic backend",
      "Learning advanced cloud architecture before understanding APIs"
    ]
  },


  // =========================================================
  // 6. PYTHON DEVELOPER
  // =========================================================

  {
    role: "Python Developer",
    category: "Software Development",

    shortDescription:
      "Use Python to build applications, APIs, automation tools and data-driven software.",

    overview: {
      whatIsIt:
        "A Python Developer uses Python to create software applications and solutions. Python is used in several areas, including backend development, automation, scripting, data processing and AI/ML. The exact technologies a Python Developer learns depend on their specialization.",

      whatDoTheyDo: [
        "Write Python applications",
        "Build backend APIs",
        "Automate repetitive tasks",
        "Process and manipulate data",
        "Work with databases",
        "Write tests",
        "Debug applications",
        "Integrate third-party services"
      ],

      whereUsed: [
        "Backend development",
        "Automation",
        "Data processing",
        "Artificial intelligence",
        "Machine learning",
        "Web applications",
        "Business tools"
      ]
    },

    skills: [
      {
        name: "Python Programming",
        description:
          "Learn Python syntax, data types, conditions, loops, functions, modules and error handling.",
        whyItMatters:
          "Python is the main language used in this career.",
        beginnerLevel: "Essential"
      },

      {
        name: "Object-Oriented Programming",
        description:
          "Organizing programs using classes and objects.",
        whyItMatters:
          "Useful when building larger Python applications.",
        beginnerLevel: "Important"
      },

      {
        name: "Problem Solving",
        description:
          "Breaking problems into logical steps and implementing solutions.",
        whyItMatters:
          "Python developers frequently build custom solutions rather than only using existing code.",
        beginnerLevel: "Essential"
      },

      {
        name: "SQL",
        description:
          "Language used to interact with relational databases.",
        whyItMatters:
          "Many Python applications need to store and retrieve structured data.",
        beginnerLevel: "Important"
      }
    ],

    learningPath: {
      foundation: [
        "Python syntax",
        "Variables",
        "Conditions",
        "Loops",
        "Functions",
        "Lists and dictionaries",
        "Modules"
      ],

      core: [
        "OOP",
        "File handling",
        "Exception handling",
        "APIs",
        "SQL",
        "Git"
      ],

      specialization: [
        "Choose backend, automation, data or AI",
        "Learn relevant libraries/frameworks",
        "Build projects"
      ],

      advanced: [
        "Testing",
        "Deployment",
        "Cloud",
        "Application architecture"
      ]
    },

    technologyChoices: [
      {
        category: "Backend Framework",
        purpose:
          "Used to build web applications and APIs with Python.",
        options: [
          {
            name: "Django",
            usedFor:
              "Building complete web applications with many built-in features.",
            difficulty: "Intermediate",
            recommendation: "Good for full web applications"
          },
          {
            name: "FastAPI",
            usedFor:
              "Building modern APIs using Python.",
            difficulty: "Beginner to intermediate",
            recommendation: "Good for API-focused development"
          },
          {
            name: "Flask",
            usedFor:
              "Building lightweight web applications and APIs.",
            difficulty: "Beginner-friendly",
            recommendation: "Good for learning web basics"
          }
        ],
        beginnerChoice:
          "Choose one framework based on the type of application you want to build."
      },

      {
        category: "Data Libraries",
        purpose:
          "Used for working with and analyzing data.",
        options: [
          {
            name: "Pandas",
            usedFor:
              "Cleaning, transforming and analyzing tabular data.",
            difficulty: "Beginner to intermediate",
            recommendation: "Learn if pursuing data"
          },
          {
            name: "NumPy",
            usedFor:
              "Numerical computing and working with arrays.",
            difficulty: "Intermediate",
            recommendation: "Useful for data/ML"
          }
        ],
        beginnerChoice:
          "Learn these when moving toward data or ML rather than learning them all immediately."
      }
    ],

    projects: {
      beginner: [
        "Calculator",
        "Expense Tracker",
        "File Organizer",
        "Number Guessing Game"
      ],

      intermediate: [
        "Python REST API",
        "Automation Tool",
        "Student Management Application"
      ],

      advanced: [
        "Full-stack Python Application",
        "Data Processing Platform",
        "AI-powered Application"
      ]
    },

    prerequisites: [
      "Basic computer knowledge",
      "Interest in programming",
      "Basic logical reasoning"
    ],

    specializations: [
      "Python Backend Development",
      "Automation",
      "Data Science",
      "AI/ML",
      "Web Development"
    ],

    jobTitles: [
      "Python Developer",
      "Python Backend Developer",
      "Django Developer",
      "Automation Developer"
    ],

    learnFirst: [
      "Python fundamentals",
      "Problem solving",
      "Functions",
      "Data structures",
      "Git"
    ],

    learnLater: [
      "Django/FastAPI/Flask",
      "Databases",
      "Testing",
      "Deployment"
    ],

    avoidInitially: [
      "Learning Django, Flask and FastAPI together",
      "Starting AI/ML before understanding Python",
      "Trying every Python library at once"
    ]
  },


  // =========================================================
  // 7. DATA ANALYST
  // =========================================================

  {
    role: "Data Analyst",
    category: "Data",

    shortDescription:
      "Analyze data, identify patterns and communicate insights that support business decisions.",

    overview: {
      whatIsIt:
        "A Data Analyst works with data to answer questions and help organizations understand what is happening in their business or processes. They commonly collect, clean, analyze and visualize data, then communicate the findings through reports and dashboards.",

      whatDoTheyDo: [
        "Collect data from different sources",
        "Clean and organize datasets",
        "Use SQL to retrieve information",
        "Analyze trends and patterns",
        "Create reports and dashboards",
        "Build charts and visualizations",
        "Communicate findings to stakeholders",
        "Help teams make data-informed decisions"
      ],

      whereUsed: [
        "Business analytics",
        "Marketing",
        "Finance",
        "E-commerce",
        "Education",
        "Healthcare",
        "Operations",
        "Product analytics"
      ]
    },

    skills: [
      {
        name: "SQL",
        description:
          "A language used to retrieve, filter, join and analyze data stored in relational databases.",
        whyItMatters:
          "SQL is one of the main tools for accessing business data.",
        beginnerLevel: "Essential"
      },

      {
        name: "Excel / Spreadsheet Skills",
        description:
          "Using spreadsheets for calculations, data cleaning, analysis and reporting.",
        whyItMatters:
          "Spreadsheets remain useful for many analysis tasks.",
        beginnerLevel: "Essential"
      },

      {
        name: "Statistics",
        description:
          "Methods for understanding patterns, variation and relationships in data.",
        whyItMatters:
          "Statistics helps analysts interpret data rather than simply calculate numbers.",
        beginnerLevel: "Important"
      },

      {
        name: "Data Visualization",
        description:
          "Representing information through charts, graphs and dashboards.",
        whyItMatters:
          "Good visualizations help people understand analytical findings.",
        beginnerLevel: "Essential"
      },

      {
        name: "Communication",
        description:
          "Explaining analytical findings clearly to technical and non-technical people.",
        whyItMatters:
          "An analysis is useful only when decision-makers can understand it.",
        beginnerLevel: "Important"
      }
    ],

    learningPath: {
      foundation: [
        "Excel basics",
        "Basic statistics",
        "Data types",
        "Data cleaning concepts"
      ],

      core: [
        "SQL",
        "Advanced Excel",
        "Data visualization",
        "Exploratory data analysis",
        "Business metrics"
      ],

      specialization: [
        "Power BI or Tableau",
        "Python for data analysis",
        "Pandas",
        "Real-world datasets"
      ],

      advanced: [
        "Advanced analytics",
        "Experiment analysis",
        "Forecasting",
        "Advanced SQL"
      ]
    },

    technologyChoices: [
      {
        category: "Spreadsheet",
        purpose:
          "Used for calculations, cleaning and basic analysis.",
        options: [
          {
            name: "Microsoft Excel",
            usedFor:
              "Spreadsheet-based analysis, formulas, pivot tables and reports.",
            difficulty: "Beginner-friendly",
            recommendation: "Good starting choice"
          },
          {
            name: "Google Sheets",
            usedFor:
              "Cloud-based spreadsheet analysis and collaboration.",
            difficulty: "Beginner-friendly",
            recommendation: "Good alternative"
          }
        ],
        beginnerChoice: "Excel"
      },

      {
        category: "Visualization",
        purpose:
          "Used to create dashboards and communicate insights.",
        options: [
          {
            name: "Power BI",
            usedFor:
              "Creating interactive business dashboards and reports.",
            difficulty: "Beginner to intermediate",
            recommendation: "Good starting choice"
          },
          {
            name: "Tableau",
            usedFor:
              "Interactive data visualization and dashboards.",
            difficulty: "Beginner to intermediate",
            recommendation: "Good alternative"
          }
        ],
        beginnerChoice: "Power BI"
      },

      {
        category: "Programming",
        purpose:
          "Used when analysis requires automation or more advanced data processing.",
        options: [
          {
            name: "Python",
            usedFor:
              "Cleaning, analyzing and processing larger datasets.",
            difficulty: "Beginner-friendly",
            recommendation: "Learn after basic analysis"
          }
        ],
        beginnerChoice:
          "Start with Excel and SQL before adding Python."
      }
    ],

    projects: {
      beginner: [
        "Student Marks Analysis",
        "Personal Expense Analysis",
        "Simple Sales Report"
      ],

      intermediate: [
        "Sales Dashboard",
        "Customer Analysis",
        "Student Performance Dashboard"
      ],

      advanced: [
        "Business Intelligence Dashboard",
        "Customer Churn Analysis",
        "Multi-source Business Analysis"
      ]
    },

    prerequisites: [
      "Basic mathematics",
      "Comfort with tables and numbers",
      "Curiosity about patterns in data"
    ],

    specializations: [
      "Business Analytics",
      "Product Analytics",
      "Marketing Analytics",
      "Financial Analytics"
    ],

    jobTitles: [
      "Data Analyst",
      "Business Analyst",
      "Business Intelligence Analyst",
      "Reporting Analyst"
    ],

    learnFirst: [
      "Excel",
      "Basic statistics",
      "SQL"
    ],

    learnLater: [
      "Power BI/Tableau",
      "Python",
      "Advanced statistics"
    ],

    avoidInitially: [
      "Starting machine learning immediately",
      "Learning multiple visualization tools simultaneously",
      "Focusing only on tools without understanding data and statistics"
    ]
  },


  // =========================================================
  // 8. DATA SCIENTIST
  // =========================================================

  {
    role: "Data Scientist",
    category: "Data & AI",

    shortDescription:
      "Use statistics, programming and machine learning to discover insights and build predictive models from data.",

    overview: {
      whatIsIt:
        "A Data Scientist works with data to answer complex questions, identify patterns and sometimes build predictive or statistical models. The role combines programming, statistics, data analysis and machine learning. Depending on the organization, the role can overlap with analytics, machine learning and research.",

      whatDoTheyDo: [
        "Collect and prepare data",
        "Explore datasets and identify patterns",
        "Perform statistical analysis",
        "Build predictive models",
        "Evaluate model performance",
        "Communicate findings",
        "Work with structured and sometimes unstructured data",
        "Collaborate with business and technical teams"
      ],

      whereUsed: [
        "Recommendation systems",
        "Finance",
        "Marketing",
        "Healthcare",
        "E-commerce",
        "Fraud detection",
        "Product analytics",
        "Forecasting"
      ]
    },

    skills: [
      {
        name: "Python",
        description:
          "Programming language commonly used for data analysis and machine learning.",
        whyItMatters:
          "Python has a large ecosystem of data and ML tools.",
        beginnerLevel: "Essential"
      },

      {
        name: "Statistics",
        description:
          "Mathematical methods for analyzing uncertainty, variation and relationships in data.",
        whyItMatters:
          "Statistics is necessary for interpreting data and evaluating models.",
        beginnerLevel: "Essential"
      },

      {
        name: "Data Analysis",
        description:
          "Examining datasets to understand patterns, relationships and anomalies.",
        whyItMatters:
          "Good modeling starts with understanding the data.",
        beginnerLevel: "Essential"
      },

      {
        name: "Machine Learning",
        description:
          "Methods that allow systems to learn patterns from data and make predictions or classifications.",
        whyItMatters:
          "Machine learning is a major component of many Data Science roles.",
        beginnerLevel: "Important"
      },

      {
        name: "SQL",
        description:
          "Used to retrieve and manipulate data from relational databases.",
        whyItMatters:
          "Data Scientists frequently need to access real-world datasets stored in databases.",
        beginnerLevel: "Important"
      }
    ],

    learningPath: {
      foundation: [
        "Python",
        "Basic mathematics",
        "Statistics",
        "SQL"
      ],

      core: [
        "NumPy",
        "Pandas",
        "Data cleaning",
        "Data visualization",
        "Exploratory data analysis"
      ],

      specialization: [
        "Machine Learning",
        "Model evaluation",
        "Feature engineering",
        "Scikit-learn"
      ],

      advanced: [
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Model deployment"
      ]
    },

    technologyChoices: [
      {
        category: "Programming",
        purpose:
          "Used to analyze data and build models.",
        options: [
          {
            name: "Python",
            usedFor:
              "Data analysis, machine learning and scientific computing.",
            difficulty: "Beginner-friendly",
            recommendation: "Primary starting choice"
          }
        ],
        beginnerChoice: "Python"
      },

      {
        category: "Data Analysis",
        purpose:
          "Used to clean, transform and analyze datasets.",
        options: [
          {
            name: "Pandas",
            usedFor:
              "Working with structured and tabular data.",
            difficulty: "Beginner to intermediate",
            recommendation: "Learn"
          },
          {
            name: "NumPy",
            usedFor:
              "Numerical computing and array operations.",
            difficulty: "Intermediate",
            recommendation: "Learn alongside data work"
          }
        ],
        beginnerChoice: "Pandas + basic NumPy"
      },

      {
        category: "Machine Learning",
        purpose:
          "Provides tools for building and evaluating machine learning models.",
        options: [
          {
            name: "Scikit-learn",
            usedFor:
              "Classical machine learning algorithms and model evaluation.",
            difficulty: "Intermediate",
            recommendation: "Good first ML library"
          }
        ],
        beginnerChoice: "Scikit-learn"
      }
    ],

    projects: {
      beginner: [
        "Student Performance Analysis",
        "Sales Data Analysis",
        "Exploratory Data Analysis Project"
      ],

      intermediate: [
        "House Price Prediction",
        "Customer Churn Prediction",
        "Sales Forecasting"
      ],

      advanced: [
        "Recommendation System",
        "Fraud Detection Model",
        "End-to-end ML Application"
      ]
    },

    prerequisites: [
      "Basic programming",
      "Basic mathematics",
      "Interest in data and statistics"
    ],

    specializations: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Business Data Science"
    ],

    jobTitles: [
      "Data Scientist",
      "Applied Data Scientist",
      "Machine Learning Scientist",
      "Data Science Associate"
    ],

    learnFirst: [
      "Python",
      "Statistics",
      "SQL",
      "Data analysis"
    ],

    learnLater: [
      "Machine Learning",
      "Deep Learning",
      "Specialized AI areas"
    ],

    avoidInitially: [
      "Starting deep learning before understanding basic ML",
      "Learning every ML library simultaneously",
      "Ignoring statistics"
    ]
  },


  // =========================================================
  // 9. AI/ML ENGINEER
  // =========================================================

  {
    role: "AI/ML Engineer",
    category: "Artificial Intelligence",

    shortDescription:
      "Build, integrate and deploy machine learning and AI systems for real-world applications.",

    overview: {
      whatIsIt:
        "An AI/ML Engineer develops software systems that use machine learning or artificial intelligence. The role combines programming, data processing, machine learning, model evaluation and software engineering. Depending on the specialization, an AI/ML Engineer may work on recommendation systems, computer vision, natural language processing or generative AI applications.",

      whatDoTheyDo: [
        "Prepare and process data",
        "Train and evaluate machine learning models",
        "Integrate models into applications",
        "Build AI-powered features",
        "Monitor model performance",
        "Optimize models and applications",
        "Deploy models and AI services",
        "Work with software and data engineering teams"
      ],

      whereUsed: [
        "Recommendation systems",
        "Search systems",
        "Fraud detection",
        "Computer vision",
        "Natural language processing",
        "Generative AI",
        "Intelligent automation",
        "Predictive systems"
      ]
    },

    skills: [
      {
        name: "Python",
        description:
          "Programming language widely used for AI and machine learning development.",
        whyItMatters:
          "Most beginner-friendly AI/ML learning paths use Python.",
        beginnerLevel: "Essential"
      },

      {
        name: "Mathematics & Statistics",
        description:
          "Includes concepts such as probability, statistics, vectors and basic calculus.",
        whyItMatters:
          "These concepts help explain how many ML algorithms work and how to evaluate results.",
        beginnerLevel: "Important"
      },

      {
        name: "Machine Learning",
        description:
          "Techniques that allow systems to learn patterns from data.",
        whyItMatters:
          "It is the foundation of many AI applications.",
        beginnerLevel: "Essential"
      },

      {
        name: "Data Processing",
        description:
          "Preparing, cleaning and transforming data before it is used by models.",
        whyItMatters:
          "Models depend heavily on the quality and structure of their input data.",
        beginnerLevel: "Essential"
      },

      {
        name: "Model Deployment",
        description:
          "Making trained models available for real applications.",
        whyItMatters:
          "An AI model needs to be integrated into a usable system to provide value.",
        beginnerLevel: "Later"
      }
    ],

    learningPath: {
      foundation: [
        "Python",
        "Programming fundamentals",
        "Basic mathematics",
        "Statistics",
        "Data structures"
      ],

      core: [
        "NumPy",
        "Pandas",
        "Data visualization",
        "Machine learning",
        "Model evaluation"
      ],

      specialization: [
        "Scikit-learn",
        "Deep Learning",
        "Choose NLP, Computer Vision or Generative AI",
        "Model deployment"
      ],

      advanced: [
        "PyTorch or TensorFlow",
        "MLOps",
        "Model optimization",
        "Cloud AI services",
        "Large-scale AI systems"
      ]
    },

    technologyChoices: [
      {
        category: "Machine Learning",
        purpose:
          "Used to build predictive and classification models.",
        options: [
          {
            name: "Scikit-learn",
            usedFor:
              "Classical machine learning algorithms.",
            difficulty: "Intermediate",
            recommendation: "Good first ML library"
          }
        ],
        beginnerChoice: "Scikit-learn"
      },

      {
        category: "Deep Learning",
        purpose:
          "Used to build neural-network-based AI systems.",
        options: [
          {
            name: "PyTorch",
            usedFor:
              "Building and training deep learning models.",
            difficulty: "Advanced",
            recommendation: "Learn after ML fundamentals"
          },
          {
            name: "TensorFlow",
            usedFor:
              "Building and deploying machine learning and deep learning models.",
            difficulty: "Advanced",
            recommendation: "Alternative"
          }
        ],
        beginnerChoice:
          "Do not choose a deep-learning framework until basic ML is understood."
      },

      {
        category: "AI Specialization",
        purpose:
          "Determines the type of AI applications you build.",
        options: [
          {
            name: "NLP",
            usedFor:
              "Working with human language and text.",
            difficulty: "Advanced",
            recommendation: "Choose if interested in language"
          },
          {
            name: "Computer Vision",
            usedFor:
              "Working with images and video.",
            difficulty: "Advanced",
            recommendation: "Choose if interested in visual AI"
          },
          {
            name: "Generative AI",
            usedFor:
              "Building systems that generate or transform text, images, audio or other content.",
            difficulty: "Intermediate to advanced",
            recommendation: "Learn after AI fundamentals"
          }
        ],
        beginnerChoice:
          "Choose one specialization after learning the fundamentals."
      }
    ],

    projects: {
      beginner: [
        "Simple Data Classification",
        "House Price Prediction",
        "Spam Message Classifier"
      ],

      intermediate: [
        "Recommendation System",
        "Image Classification",
        "Text Classification"
      ],

      advanced: [
        "AI-powered Application",
        "Document Intelligence System",
        "Generative AI Application"
      ]
    },

    prerequisites: [
      "Basic Python",
      "Basic mathematics",
      "Basic statistics",
      "Interest in AI"
    ],

    specializations: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Generative AI",
      "MLOps"
    ],

    jobTitles: [
      "Machine Learning Engineer",
      "AI Engineer",
      "Applied ML Engineer",
      "AI/ML Engineer"
    ],

    learnFirst: [
      "Python",
      "Statistics",
      "Data handling",
      "Machine learning fundamentals"
    ],

    learnLater: [
      "Deep learning",
      "PyTorch/TensorFlow",
      "Specialized AI",
      "Deployment"
    ],

    avoidInitially: [
      "Jumping directly into advanced LLM frameworks",
      "Learning PyTorch and TensorFlow simultaneously",
      "Ignoring mathematics and ML fundamentals"
    ]
  },


  // =========================================================
  // 10. CLOUD / DEVOPS ENGINEER
  // =========================================================

  {
    role: "Cloud/DevOps Engineer",
    category: "Cloud & Infrastructure",

    shortDescription:
      "Automate software delivery and manage the infrastructure used to run applications.",

    overview: {
      whatIsIt:
        "A Cloud/DevOps Engineer works on the infrastructure, automation and processes used to build, deploy, operate and maintain software applications. Cloud engineers work with cloud platforms, while DevOps practices focus on collaboration, automation, continuous delivery and reliable software operations. The responsibilities can overlap depending on the organization.",

      whatDoTheyDo: [
        "Deploy applications to cloud environments",
        "Automate software delivery processes",
        "Create CI/CD pipelines",
        "Manage servers and infrastructure",
        "Configure containers",
        "Monitor applications and infrastructure",
        "Manage cloud resources",
        "Improve reliability and deployment processes"
      ],

      whereUsed: [
        "Cloud applications",
        "Web applications",
        "SaaS platforms",
        "Enterprise systems",
        "Large-scale services",
        "Software deployment pipelines"
      ]
    },

    skills: [
      {
        name: "Linux",
        description:
          "Operating-system knowledge used to work with servers and development environments.",
        whyItMatters:
          "Linux is widely used in server and cloud environments.",
        beginnerLevel: "Essential"
      },

      {
        name: "Networking",
        description:
          "Understanding IP addresses, DNS, HTTP, ports, routing and network communication.",
        whyItMatters:
          "Applications and cloud infrastructure depend on network communication.",
        beginnerLevel: "Important"
      },

      {
        name: "Cloud Computing",
        description:
          "Using remotely managed computing resources such as servers, storage and databases.",
        whyItMatters:
          "Many modern applications are deployed using cloud platforms.",
        beginnerLevel: "Important"
      },

      {
        name: "Automation",
        description:
          "Using scripts and tools to perform repetitive infrastructure and deployment tasks.",
        whyItMatters:
          "Automation makes software delivery faster and more consistent.",
        beginnerLevel: "Important"
      },

      {
        name: "CI/CD",
        description:
          "Automated processes for building, testing and delivering software.",
        whyItMatters:
          "CI/CD helps teams release software consistently.",
        beginnerLevel: "Later"
      }
    ],

    learningPath: {
      foundation: [
        "Linux basics",
        "Command line",
        "Networking fundamentals",
        "Git",
        "Basic scripting"
      ],

      core: [
        "Cloud fundamentals",
        "Virtual machines",
        "Storage",
        "Networking",
        "Docker",
        "CI/CD"
      ],

      specialization: [
        "Choose a cloud provider",
        "Infrastructure as Code",
        "Monitoring",
        "Container orchestration"
      ],

      advanced: [
        "Kubernetes",
        "Advanced cloud architecture",
        "Security",
        "Scalability",
        "Reliability engineering"
      ]
    },

    technologyChoices: [
      {
        category: "Cloud Platform",
        purpose:
          "Provides computing, storage, networking and other infrastructure services.",
        options: [
          {
            name: "AWS",
            usedFor:
              "Cloud computing and infrastructure services.",
            difficulty: "Intermediate",
            recommendation: "Good starting cloud platform"
          },
          {
            name: "Microsoft Azure",
            usedFor:
              "Cloud computing and enterprise infrastructure.",
            difficulty: "Intermediate",
            recommendation: "Good alternative"
          },
          {
            name: "Google Cloud",
            usedFor:
              "Cloud infrastructure and application services.",
            difficulty: "Intermediate",
            recommendation: "Good alternative"
          }
        ],
        beginnerChoice:
          "Choose ONE cloud platform first."
      },

      {
        category: "Containers",
        purpose:
          "Packages an application and its dependencies into a portable unit.",
        options: [
          {
            name: "Docker",
            usedFor:
              "Creating and running containers.",
            difficulty: "Intermediate",
            recommendation: "Learn after basic Linux"
          }
        ],
        beginnerChoice: "Docker"
      },

      {
        category: "Container Orchestration",
        purpose:
          "Manages large numbers of containers across infrastructure.",
        options: [
          {
            name: "Kubernetes",
            usedFor:
              "Deploying, scaling and managing containerized applications.",
            difficulty: "Advanced",
            recommendation: "Learn later"
          }
        ],
        beginnerChoice:
          "Kubernetes is not an initial requirement for a beginner."
      }
    ],

    projects: {
      beginner: [
        "Deploy a Static Website",
        "Linux Server Setup",
        "Simple Cloud-hosted Application"
      ],

      intermediate: [
        "Dockerized Web Application",
        "CI/CD Pipeline",
        "Cloud-hosted Full-stack Application"
      ],

      advanced: [
        "Kubernetes Deployment",
        "Infrastructure Automation Project",
        "Highly Available Cloud Application"
      ]
    },

    prerequisites: [
      "Basic programming",
      "Basic networking interest",
      "Comfort with command-line tools"
    ],

    specializations: [
      "Cloud Engineering",
      "DevOps",
      "Site Reliability Engineering",
      "Cloud Security"
    ],

    jobTitles: [
      "Cloud Engineer",
      "DevOps Engineer",
      "Cloud DevOps Engineer",
      "Site Reliability Engineer"
    ],

    learnFirst: [
      "Linux",
      "Networking",
      "Git",
      "Cloud fundamentals"
    ],

    learnLater: [
      "Docker",
      "CI/CD",
      "Infrastructure as Code",
      "Kubernetes"
    ],

    avoidInitially: [
      "Learning AWS, Azure and Google Cloud simultaneously",
      "Starting Kubernetes before understanding containers",
      "Trying to learn every DevOps tool"
    ]
  },


  // =========================================================
  // 11. CYBERSECURITY ENGINEER
  // =========================================================

  {
    role: "Cybersecurity Engineer",
    category: "Cybersecurity",

    shortDescription:
      "Protect applications, systems and networks by identifying and addressing security risks.",

    overview: {
      whatIsIt:
        "A Cybersecurity Engineer works on protecting computer systems, applications, networks and data from security threats. The role can involve security monitoring, secure system design, vulnerability assessment, security testing, incident response and implementing security controls. Cybersecurity contains many different specializations, so beginners should build fundamentals before choosing one.",

      whatDoTheyDo: [
        "Identify security vulnerabilities",
        "Monitor systems and networks for suspicious activity",
        "Perform security assessments",
        "Help secure applications and infrastructure",
        "Implement security controls",
        "Investigate security incidents",
        "Analyze security logs",
        "Help teams follow secure development practices"
      ],

      whereUsed: [
        "Banking",
        "Cloud systems",
        "Web applications",
        "Government systems",
        "Enterprise networks",
        "E-commerce",
        "Healthcare systems"
      ]
    },

    skills: [
      {
        name: "Networking",
        description:
          "Understanding how computers and systems communicate through networks.",
        whyItMatters:
          "Security professionals need to understand normal network behavior before identifying suspicious behavior.",
        beginnerLevel: "Essential"
      },

      {
        name: "Linux",
        description:
          "Understanding Linux systems and command-line operations.",
        whyItMatters:
          "Linux is widely used in servers and security environments.",
        beginnerLevel: "Important"
      },

      {
        name: "Web Security",
        description:
          "Understanding common security risks in web applications.",
        whyItMatters:
          "Modern applications need protection against security vulnerabilities.",
        beginnerLevel: "Important"
      },

      {
        name: "Cryptography Fundamentals",
        description:
          "Understanding concepts such as encryption, hashing and digital signatures.",
        whyItMatters:
          "Cryptographic mechanisms protect data and communications.",
        beginnerLevel: "Important"
      },

      {
        name: "Security Analysis",
        description:
          "Examining systems, logs and behavior to identify potential security problems.",
        whyItMatters:
          "Security teams need to detect and investigate threats.",
        beginnerLevel: "Important"
      }
    ],

    learningPath: {
      foundation: [
        "Computer fundamentals",
        "Networking",
        "Operating systems",
        "Linux",
        "Basic programming"
      ],

      core: [
        "Web security",
        "Authentication",
        "Cryptography fundamentals",
        "Security principles",
        "Vulnerability concepts"
      ],

      specialization: [
        "Choose security specialization",
        "Security testing",
        "Security monitoring",
        "Incident response"
      ],

      advanced: [
        "Cloud security",
        "Application security",
        "Security architecture",
        "Advanced threat analysis"
      ]
    },

    technologyChoices: [
      {
        category: "Operating System",
        purpose:
          "Provides an environment for learning system and security concepts.",
        options: [
          {
            name: "Linux",
            usedFor:
              "Learning server administration, command-line tools and security concepts.",
            difficulty: "Beginner to intermediate",
            recommendation: "Good starting choice"
          }
        ],
        beginnerChoice: "Linux"
      },

      {
        category: "Network Analysis",
        purpose:
          "Helps inspect and understand network traffic.",
        options: [
          {
            name: "Wireshark",
            usedFor:
              "Analyzing network packets and communication.",
            difficulty: "Intermediate",
            recommendation: "Learn after networking basics"
          }
        ],
        beginnerChoice:
          "Learn networking concepts before using packet-analysis tools."
      },

      {
        category: "Web Security Testing",
        purpose:
          "Used to study and test web application security in authorized environments.",
        options: [
          {
            name: "Burp Suite",
            usedFor:
              "Testing and analyzing web application requests and responses.",
            difficulty: "Intermediate",
            recommendation: "Learn after web fundamentals"
          }
        ],
        beginnerChoice:
          "Use only in authorized labs and practice environments."
      }
    ],

    projects: {
      beginner: [
        "Linux Security Lab",
        "Basic Network Monitoring Project",
        "Secure Password Storage Demonstration"
      ],

      intermediate: [
        "Web Security Testing Lab",
        "Security Log Analyzer",
        "Network Monitoring Tool"
      ],

      advanced: [
        "Security Monitoring Platform",
        "Secure Web Application",
        "Cloud Security Project"
      ]
    },

    prerequisites: [
      "Basic computer knowledge",
      "Networking fundamentals",
      "Interest in understanding how systems work"
    ],

    specializations: [
      "Application Security",
      "Network Security",
      "Cloud Security",
      "Security Operations",
      "Incident Response"
    ],

    jobTitles: [
      "Cybersecurity Engineer",
      "Security Engineer",
      "Security Analyst",
      "Application Security Engineer"
    ],

    learnFirst: [
      "Networking",
      "Linux",
      "Basic programming",
      "Security fundamentals"
    ],

    learnLater: [
      "Security testing",
      "SIEM tools",
      "Cloud security",
      "Advanced security architecture"
    ],

    avoidInitially: [
      "Using security tools without understanding networking",
      "Trying advanced penetration testing immediately",
      "Practicing against systems without authorization"
    ]
  },


  // =========================================================
  // 12. MOBILE APP DEVELOPER
  // =========================================================

  {
    role: "Mobile App Developer",
    category: "Mobile Development",

    shortDescription:
      "Design and build applications that run on smartphones and other mobile devices.",

    overview: {
      whatIsIt:
        "A Mobile App Developer creates applications for mobile devices such as smartphones and tablets. Developers can specialize in Android, iOS or cross-platform development. The technologies they learn depend on which platform they want to target.",

      whatDoTheyDo: [
        "Design mobile application interfaces",
        "Build mobile application functionality",
        "Handle user input and navigation",
        "Connect applications to APIs",
        "Store application data",
        "Test applications on mobile devices",
        "Fix bugs and performance issues",
        "Prepare applications for distribution"
      ],

      whereUsed: [
        "Banking apps",
        "Education apps",
        "E-commerce",
        "Social applications",
        "Food delivery",
        "Fitness applications",
        "Business applications",
        "Entertainment"
      ]
    },

    skills: [
      {
        name: "Programming",
        description:
          "Ability to write application logic using the chosen mobile-development language.",
        whyItMatters:
          "Mobile applications need programming logic to respond to user actions.",
        beginnerLevel: "Essential"
      },

      {
        name: "UI Development",
        description:
          "Creating screens, layouts, buttons, forms and other mobile interface elements.",
        whyItMatters:
          "The interface is how users interact with the application.",
        beginnerLevel: "Essential"
      },

      {
        name: "Mobile Navigation",
        description:
          "Managing movement between screens and application states.",
        whyItMatters:
          "Most mobile applications contain multiple screens and user flows.",
        beginnerLevel: "Important"
      },

      {
        name: "API Integration",
        description:
          "Connecting mobile applications to backend services.",
        whyItMatters:
          "Many mobile applications need server-side data.",
        beginnerLevel: "Important"
      },

      {
        name: "Mobile Testing",
        description:
          "Testing applications on different devices, screen sizes and conditions.",
        whyItMatters:
          "Mobile applications can behave differently across devices.",
        beginnerLevel: "Important"
      }
    ],

    learningPath: {
      foundation: [
        "Programming fundamentals",
        "Basic UI concepts",
        "Git",
        "Basic application architecture"
      ],

      core: [
        "Choose Android, iOS or cross-platform",
        "Learn the relevant language",
        "Build screens",
        "Navigation",
        "State management",
        "API integration"
      ],

      specialization: [
        "Local storage",
        "Authentication",
        "Notifications",
        "Device features",
        "Testing"
      ],

      advanced: [
        "Performance optimization",
        "App architecture",
        "Security",
        "Deployment and app distribution"
      ]
    },

    technologyChoices: [
      {
        category: "Android Development",
        purpose:
          "Used to build applications specifically for Android devices.",
        options: [
          {
            name: "Kotlin",
            usedFor:
              "Modern Android application development.",
            difficulty: "Beginner-friendly",
            recommendation: "Good Android starting choice"
          },
          {
            name: "Java",
            usedFor:
              "Android development and existing Android applications.",
            difficulty: "Beginner-friendly",
            recommendation: "Useful if already familiar with Java"
          }
        ],
        beginnerChoice: "Kotlin"
      },

      {
        category: "iOS Development",
        purpose:
          "Used to build applications for Apple devices.",
        options: [
          {
            name: "Swift",
            usedFor:
              "Developing applications for Apple's platforms.",
            difficulty: "Beginner-friendly",
            recommendation: "Primary iOS language"
          }
        ],
        beginnerChoice: "Swift"
      },

      {
        category: "Cross-platform Development",
        purpose:
          "Allows developers to build applications targeting multiple mobile platforms from a shared codebase.",
        options: [
          {
            name: "Flutter",
            usedFor:
              "Building cross-platform applications using Dart.",
            difficulty: "Beginner to intermediate",
            recommendation: "Good cross-platform option"
          },
          {
            name: "React Native",
            usedFor:
              "Building cross-platform mobile applications using JavaScript/React concepts.",
            difficulty: "Intermediate",
            recommendation: "Good option for React developers"
          }
        ],
        beginnerChoice:
          "Choose ONE cross-platform technology if you want to target multiple platforms."
      }
    ],

    projects: {
      beginner: [
        "Calculator App",
        "Notes App",
        "Simple To-do App"
      ],

      intermediate: [
        "Expense Tracker",
        "Student Attendance App",
        "Weather Application"
      ],

      advanced: [
        "E-commerce Mobile App",
        "Food Delivery Application",
        "Real-time Communication App"
      ]
    },

    prerequisites: [
      "Basic programming knowledge",
      "Basic computer knowledge",
      "Interest in mobile applications"
    ],

    specializations: [
      "Android Development",
      "iOS Development",
      "Cross-platform Development",
      "Mobile UI Engineering"
    ],

    jobTitles: [
      "Android Developer",
      "iOS Developer",
      "Mobile App Developer",
      "Flutter Developer",
      "React Native Developer"
    ],

    learnFirst: [
      "Programming fundamentals",
      "Choose a mobile platform",
      "Learn the corresponding language",
      "Basic UI development"
    ],

    learnLater: [
      "APIs",
      "Authentication",
      "Local storage",
      "Testing",
      "Deployment"
    ],

    avoidInitially: [
      "Learning Android, iOS and Flutter simultaneously",
      "Learning Kotlin, Swift and Dart together",
      "Building advanced apps before understanding basic mobile UI and navigation"
    ]
  }
];

export default careerPaths;