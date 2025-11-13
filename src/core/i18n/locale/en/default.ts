// Default namespace for English translations
const defaultTranslations = {
  // Common
  common: {
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    warning: 'Warning',
    info: 'Info',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    create: 'Create',
    update: 'Update',
    search: 'Search',
    filter: 'Filter',
    clear: 'Clear',
    apply: 'Apply',
    close: 'Close',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    submit: 'Submit',
    reset: 'Reset',
    refresh: 'Refresh',
    scrollDown: 'Scroll Down',
    viewMore: 'View more',
    downloadCV: 'Download CV',
    comingSoon: 'Coming Soon',
  },

  // Navigation
  nav: {
    home: 'Home',
    skills: 'Skills',
    journey: 'Journey',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },

  // Home Page
  home: {
    title: 'Nghi Nguyen',
    subtitle: 'Software Engineer',
    description: "Coding is not just a skill. It's my avenue for expressing creativity and turning ideas into reality.",
    downloadCV: 'Download CV',
  },

  // Skills Page
  skills: {
    title: 'My Skills',
    frontendStack: 'Frontend Stack',
    frontendStackDesc: 'Core technologies for building modern web applications',
    advancedPatterns: 'Advanced Patterns',
    advancedPatternsDesc: 'Advanced architectural patterns and component design techniques',
    stateDataLayer: 'State & Data Layer',
    stateDataLayerDesc: 'Efficient state management and data fetching solutions',
    uiStyling: 'UI & Styling',
    uiStylingDesc: 'Design systems and component architecture',
    tooling: 'Tooling',
    toolingDesc: 'Development tools and testing frameworks',
    expertBadge: 'Expert: React, TypeScript, REST API, Tailwind CSS',
    highlights: {
      highlight1: 'Architecting scalable, reusable components',
      highlight2: 'Optimizing performance & improving efficiency',
      highlight3: 'Collaborating with teams on design & implementation',
      highlight4: 'Building maintainable, testable code',
    },
  },

  // Journey Page
  journey: {
    title: 'My Journey',
    fulltime: 'fulltime',
    freelance: 'freelance',
    viewMore: 'View more →',
    
    // Experience 1 - Riskoa
    riskoa: {
      title: 'Software Engineer',
      subtitle: 'Riskoa',
      time: 'Apr 2025 - Oct 2025',
      detail1: 'Architected frontend solutions for enterprise SaaS platform serving global clients in environmental compliance and carbon footprint analysis.',
      detail2: 'Architected modular TypeScript system with strongly-typed API schemas using Zod, cutting dev time by 60%.',
      detail3: 'Built AI-powered analysis system with automated product decomposition and emission database matching.',
      detail4: 'Created real-time carbon visualization dashboard rendering 500+ interconnected nodes via ReactFlow with optimized memoization.',
      detail5: 'Implemented centralized state management using Zustand for predictable state flow and lightweight store subscription.',
      detail6: 'Reduced API overhead by 80% through debounced auto-save, batching logic, and optimistic updates.',
      detail7: 'Designed scalable OOP-based component structure using container/presenter separation and custom hooks for shared logic.',
      detail8: 'Implemented Vitest unit and integration tests with >85% coverage for critical business logic.',
      detail9: 'Collaborated directly with UK clients on feature design, compliance flow, and sprint planning.',
      techStack: 'React.js, Object-Oriented Programming (OOP), Systems Design',
    },
    
    // Experience 2 - DNB Soft
    dnbsoft: {
      title: 'Software Engineer',
      subtitle: 'DNB Soft',
      time: 'Apr 2024 - Sep 2025',
      detail1: 'Lead frontend engineer delivering enterprise-grade web platforms for Korean maritime and software clients.',
      detail2: 'Led frontend for Enterprise License Management System handling 5k+ records with server-side pagination.',
      detail3: 'Designed role-based access control (RBAC) system integrated with JWT authentication and Axios interceptors.',
      detail4: 'Developed real-time maritime cybersecurity dashboard using ReactFlow + custom polling hooks for live updates.',
      detail5: 'Managed global state using React Context and custom hooks, ensuring reliable data flow across complex dashboard modules.',
      detail6: 'Enhanced rendering efficiency with useMemo, useCallback and memoization techniques.',
      detail7: 'Applied OOP-inspired component structure with HOC/composition patterns for reusable UI and logic isolation.',
      detail8: 'Built and standardized project foundation with ESLint, Prettier, unit tests, and integration tests, ensuring consistent quality from setup to deployment.',
      detail9: 'Created internal Design System tokens with Ant Design to ensure visual consistency and brand alignment.',
      detail10: 'Created internal UI component library with Storybook, enabling consistent design across teams.',
      techStack: 'React.js, TypeScript, Systems Design, Unit Testing, Integration Testing, Object-Oriented Programming (OOP)',
    },
    
    // Experience 3 - EveHR
    evehr: {
      title: 'Software Engineer',
      subtitle: 'EveHR',
      time: 'Oct 2021 - Feb 2024',
      detail1: 'Modernized web and mobile platforms for multinational clients including Bosch, Highland, PwC, AIA, BAT, DHL, Nestlé, Pepsi.',
      detail2: 'Architected white-label SaaS platform with dynamic theming, modular routing, and multi-tenant authentication.',
      detail3: 'Migrated entire frontend from JavaScript to TypeScript, cutting runtime errors by 40%.',
      detail4: 'Implemented Redux Saga side-effect management and Axios interceptors for seamless token refresh.',
      detail5: 'Built cross-platform code-sharing system (React Web + React Native) improving maintainability.',
      detail6: 'Optimized performance using Lazy Loading, Suspense, and memoization, reducing initial load by 30%.',
      detail7: 'Contributed to design system setup in Storybook, improving developer onboarding and UI consistency.',
      detail8: 'Built mobile applications using Ionic Framework for iOS and Android, enabling code reuse across platforms.',
      techStack: 'React.js, JavaScript, TypeScript, React Native, Ionic Framework',
    },
    
    // Experience 4 - JobHopin
    jobhopin: {
      title: 'Software Engineer',
      subtitle: 'JobHopin',
      time: 'Jul 2022 - Jan 2023',
      detail1: 'Contributed to frontend development for JobHopin\'s platform, focusing on building scalable UI systems, improving performance, and ensuring design consistency across projects.',
      detail2: 'Developed and documented reusable UI components in Storybook, enhancing team efficiency and visual consistency.',
      detail3: 'Built a responsive Next.js Landing Page for a new product, improving load speed and user experience.',
      detail4: 'Maintained and optimized existing features for better performance and code quality.',
      detail5: 'Collaborated closely with designers and product teams using Figma and Jira to ensure smooth delivery.',
      detail6: 'Supported CI/CD workflows and version control using GitLab, improving deployment reliability.',
      techStack: 'React.js, HTML5, JavaScript, Next.js, Storybook, Scss',
    },
    
    // Experience 5 - ITL Corp
    itlcorp: {
      title: 'Regional Accountant',
      subtitle: 'Indo-Trans Logistics Corporation (ITL Corp.)',
      time: 'Sep 2019 - May 2021',
      detail1: 'Prepared monthly financial reports for Myanmar and Lao operations.',
      detail2: 'Prepared and recorded costing, internal and OBH entries by compiling and analyzing account information.',
      detail3: 'Maintained and balanced subsidiary accounts by verifying, allocating, posting, and reconciling transactions and resolving discrepancies.',
      detail4: 'Reconciled costing/revenue between FAST and Bravo, coordinated with Revenue accountant and CS team.',
      detail5: 'Managed costing on FAST, settled advance clearance, settled payment and performed accounting procedures on FAST.',
      detail6: 'Managed trucking reports, followed up daily updates, reconciled with payment requests.',
      detail7: 'Verified internal balance between ITL Myanmar and Corp/Subsidiaries.',
      detail8: 'Created VBA tools to facilitate accounting procedures.',
      techStack: 'Accounting, Microsoft Excel, Process Improvement, Cost Accounting',
    },
    
    // Experience 6 - Fram^
    fram: {
      title: 'General Accountant',
      subtitle: 'Fram^',
      time: 'Sep 2017 - Feb 2019',
      detail1: 'Prepared input Journal Entries into Accounting System (MISA).',
      detail2: 'Monthly reconciled bank and directly liaised with the banks for regarding matters (Vietcombank, VIB, HSBC, ANZ).',
      detail3: 'In charge of weekly payment process for 4 entities in group.',
      detail4: 'In charge of Account Payables, Account Receivables and issuing invoices for clients.',
      detail5: 'Supported sale team in monitoring cash collection.',
      detail6: 'Monthly prepared budget vs actual data comparison.',
      detail7: 'Monthly prepared Tax Reports to apply Tax authority (VAT, PIT, FCT) and liaised with Tax Authority for any regarding issues.',
      detail8: 'Simultaneously in charge of monthly closing internal financial reports of 4 entities for Headquarter in Sweden.',
      detail9: 'Directly discussed and solved related financial problems with CEOs of Fram\'s group (Swedish, British, American).',
      techStack: 'Microsoft Excel, Accounting',
    },
  },

  // Projects Page
  projects: {
    title: 'My Projects',
    comingSoonTitle: 'Coming Soon',
    comingSoonDescription: 'This section is currently under development.',
    viewProject: 'View Project',
    viewGithub: 'View GitHub',
    
    // Project 1 - AI Note
    aiNote: {
      title: 'AI Note',
      description: 'An intelligent note-taking app with AI integration, built with OpenAI, Pinecone, Next.js, Shadcn UI, Clerk, and more.',
    },
    
    // Project 2 - Movie Browser
    movieBrowser: {
      title: 'Movie Browser',
      description: 'A movie browsing application built with React and TypeScript. Features include TMDB API integration for Now Playing and Top Rated movies, advanced search with debounce, grid/list view switching, skeleton loading, lazy-loaded images with fallback handling, and comprehensive error handling with toast notifications.',
    },

    // Project 3 - React Minimist Utils
    reactMinimistUtils: {
      title: 'React Minimist Utils',
      description: 'A comprehensive utility library for React applications with TypeScript support. Includes essential hooks (useToggle, useDebounce, useLocalStorage, etc.), utility functions (array operations, string manipulation, data formatting), and constants for form validation.',
    },
  },

  // About Page
  about: {
    title: 'About Me',
    paragraph1: 'During high school, I was part of the Informatics Talent Team at Trần Đại Nghĩa High School for the Gifted, one of Vietnam\'s top specialized schools. I reached the Olympic finals in programming competitions and earned my Microsoft Office Specialist certification. But when it came time for university, I chose a different path — studying Accounting & Auditing at Ho Chi Minh University of Banking. I thought I was being practical, choosing safety over passion.',
    
    paragraph2: 'For nearly 4 years, I worked as an accountant. The work was stable, but every day I felt the gap between what I was doing and what I wanted to do growing wider. I watched developers create products that touched millions while I reconciled spreadsheets. The fear of starting over at 27, with no formal CS degree, almost stopped me. "Am I too late? Can I really do this?" — these questions haunted me.',
    
    paragraph3: 'In 2021, I made the hardest decision of my life: I taught myself programming from zero. The first months were brutal. I spent nights debugging code that seemed impossible, watching tutorials on repeat, feeling like everyone else understood something I didn\'t. There were moments I wanted to quit — when a single bug took days to fix, when interviews rejected me for "lack of experience," when I questioned if I\'d wasted years on the wrong path.',
    
    paragraph4: 'But I kept going. My accounting background, the thing I thought was a disadvantage, became my strength. I understood business requirements, user workflows, and system reliability in ways bootcamp grads didn\'t. I learned to break down complex problems into smaller pieces — the same skill I used balancing books. Slowly, one small win at a time, I built confidence. Each solved bug, each working feature, each "aha!" moment proved I could do this.',
    
    paragraph5: 'Today, 4+ years later, I architect enterprise solutions for global companies. But more importantly, I proved to myself that it\'s never too late. The journey from accounting to engineering wasn\'t about talent — it was about showing up every day, especially on days I didn\'t want to. If you\'re thinking about changing careers, learning something new, or chasing a dream that seems impossible: start messy, stay consistent, and trust the process. Your past doesn\'t limit you — it prepares you.',
  },

  // Contact Page
  contact: {
    title: 'Contact',
    subtitle: 'Let\'s Connect',
    email: 'Email',
    phone: 'Phone',
    emailValue: 'lio.nguyen.work@gmail.com',
    phoneValue: '+84 934 118 566',
  },
} as const

export default defaultTranslations
