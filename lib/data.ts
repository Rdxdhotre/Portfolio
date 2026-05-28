import { IProject } from "@/types";

export const GENERAL_INFO = {
  email: " rohitdhotre.dev@gmail.com",

  emailSubject: "Let's collaborate on a project",
  emailBody: "Hi Rohit Dhotre, I am reaching out to you because...",

  // oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
  upworkProfile: " ",
};

export const SOCIAL_LINKS = [
  { name: "github", url: "https://github.com/Rdxdhotre" },
  { name: "linkedin", url: "https://www.linkedin.com/in/rohit-dhotre" },
  // { name: 'facebook', url: 'https://www.facebook.com/Rohit Dhotre.2000' },
  // { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
  frontend: [
    {
      name: "JavaScript",
      icon: "/logo/js.png",
    },
    {
      name: "TypeScript",
      icon: "/logo/ts.png",
    },
    {
      name: "React",
      icon: "/logo/react.png",
    },
    {
      name: "Next.js",
      icon: "/logo/next.png",
    },
    {
      name: "Redux",
      icon: "/logo/redux.png",
    },
    {
      name: "Tailwind CSS",
      icon: "/logo/tailwind.png",
    },
    {
      name: "GSAP",
      icon: "/logo/gsap.png",
    },
    {
      name: "Framer Motion",
      icon: "/logo/framer-motion.png",
    },
    {
      name: "Sass",
      icon: "/logo/sass.png",
    },
    {
      name: "Bootstrap",
      icon: "/logo/bootstrap.svg",
    },
    {
      name: "TanStack",
      icon: "/logo/tanstack.png",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "/logo/node.png",
    },
    // {
    //     name: 'NestJS',
    //     icon: '/logo/nest.svg',
    // },
    {
      name: "Express.js",
      icon: "/logo/express.png",
    },
  ],
  database: [
    {
      name: "MySQL",
      icon: "/logo/mysql.svg",
    },
    {
      name: "PostgreSQL",
      icon: "/logo/postgreSQL.png",
    },
    {
      name: "MongoDB",
      icon: "/logo/mongodb.svg",
    },
    // {
    //     name: 'Prisma',
    //     icon: '/logo/prisma.png',
    // },
  ],
  tools: [
    {
      name: "Git",
      icon: "/logo/git.png",
    },
    {
      name: "Docker",
      icon: "/logo/docker.svg",
    },
    {
      name: "AWS",
      icon: "/logo/aws.png",
    },
  ],
};

export const PROJECTS: IProject[] = [
  {
    title: "Mushroom Business Portal",
    slug: "mushroom-business-portal",
    liveUrl: "",
    year: 2026,
    description: `
    A full-stack business operations platform built for Mushroom, combining workspace management, food ordering, business networking, invoicing, lead tracking, and internal admin workflows into one unified portal. <br/><br/>

    The application supports Customers, Customer Employees, Admins, and Admin Employees through role-based dashboards, enabling smooth day-to-day operations across F&B, workspace bookings, payments, tasks, leads, and customer management.

    <br/><br/>
    Key Features:
    <ul>
      <li>🔐 JWT Authentication with Role-Based Access Control</li>
      <li>🏢 Workspace Management & Booking System</li>
      <li>🍽️ F&B Ordering, Cart, Order History & Scheduled Orders</li>
      <li>👥 Business Directory with Connections, Announcements & Interests</li>
      <li>📄 Invoice Management, Payment Receipts & Reminder Flows</li>
      <li>📊 Lead, Task, Expense & Client Management Modules</li>
      <li>🪙 MushCoin Wallet / Internal Credit Tracking System</li>
      <li>🔔 Notification System with Admin Dashboards & Reporting</li>
    </ul>
    <br/>

    Technical Highlights:
    <ul>
      <li>Built a scalable MERN architecture with separate frontend and backend services</li>
      <li>Designed RESTful APIs for auth, orders, workspace, invoices, leads, tasks, and more</li>
      <li>Implemented protected routes and multi-role dashboard access</li>
      <li>Added scheduled order processing using cron jobs and backend automation</li>
      <li>Integrated reporting, PDF/Excel exports, and dashboard analytics</li>
      <li>Used Socket.IO-ready realtime architecture and notification workflows</li>
      <li>Documented backend APIs with Swagger and deployed </li>
    </ul>
  `,
    role: `
    Full-Stack MERN Developer <br/>
    Owned the complete development lifecycle:
    <ul>
      <li>🧠 Backend: Built modular REST APIs with Express & MongoDB</li>
      <li>🔐 Authentication: Implemented JWT-based login and protected access flows</li>
      <li>🎨 Frontend: Developed role-based responsive UI using React + TypeScript</li>
      <li>📦 Admin Systems: Built dashboards for workspace, customers, F&B, invoices, and complaints</li>
      <li>📈 Operations: Developed lead, task, expense, invoice, and reporting modules</li>
      <li>🚀 Deployment: Configured frontend/backend environments and production-ready API structure</li>
    </ul>
  `,
    techStack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "JWT",
      "Socket.IO",
      "Cloudinary",
      "Swagger",
    ],
    thumbnail: "/projects/thumbnail/mushroom.png",
    longThumbnail: "/projects/long/sudama-pohe.png",
    images: [
      "/projects/images/mushroom-1.png",
      "/projects/images/mushroom-2.png",
      "/projects/images/mushroom-3.png",
      "/projects/images/mushroom-4.png",
    ],
  },

  {
    title: "MoVo Intracity Logistics Platform",
    slug: "movo-intracity-logistics-platform",
    liveUrl: "",
    year: 2026,
    description: `
    A full-stack intracity logistics and dispatch platform built for MoVo Mobility, focused on streamlining booking operations, driver management, live tracking, pricing control, settlements, and admin support workflows. <br/><br/>

    The system includes a responsive Admin Web Panel and a scalable NestJS backend that power booking lifecycle management, proximity-based dispatch flows, driver onboarding, support ticketing, invoice generation, and operational reporting for city-based delivery services.

    <br/><br/>
    Key Features:
    <ul>
      <li>🔐 JWT-Based Admin Authentication with Protected Routes</li>
      <li>📦 Booking Management with Full Delivery Lifecycle Tracking</li>
      <li>🛰️ Realtime Driver Location & Route Visualization with Mapbox</li>
      <li>🚚 Driver Management, KYC Review & Suspend/Resume Controls</li>
      <li>📍 Geo-Fenced Service Area Management</li>
      <li>💰 Pricing Rules, Revenue Reports & Driver Settlement Tracking</li>
      <li>🎫 Support Ticket System with Message Threads & Attachments</li>
      <li>📣 Marketing Notification Campaign Management</li>
    </ul>
    <br/>

    Technical Highlights:
    <ul>
      <li>Built a modular full-stack architecture with React frontend and NestJS backend</li>
      <li>Designed REST APIs for bookings, dispatch, drivers, payments, settings, and reports</li>
      <li>Implemented realtime capabilities using Socket.IO with Redis adapter support</li>
      <li>Integrated Bull + Redis for dispatch queue and background job handling</li>
      <li>Added Mapbox-based route, fare, and driver-location visualization workflows</li>
      <li>Implemented invoice PDF generation, AWS S3 upload flow, and Firebase notification support</li>
      <li>Documented APIs with Swagger and structured domain modules for long-term scalability</li>
    </ul>
  `,
    role: `
    Full-Stack Developer <br/>
    Owned the complete development lifecycle:
    <ul>
      <li>🧠 Backend: Built modular NestJS APIs with MongoDB and domain-based architecture</li>
      <li>🚦 Dispatch Logic: Worked on booking, driver, payment, and settlement workflows</li>
      <li>🗺️ Realtime & Maps: Integrated live location and route-related experiences with Mapbox and Socket.IO</li>
      <li>🎨 Frontend: Developed the admin panel using React + TypeScript + Tailwind CSS</li>
      <li>🛠️ Operations Dashboard: Built modules for bookings, drivers, reports, support, and settings</li>
      <li>☁️ Integrations: Added Redis, Bull, AWS S3, Firebase, and Swagger-backed platform tooling</li>
    </ul>
  `,
    techStack: [
      "React.js",
      "TypeScript",
      "NestJS",
      "Node.js",
      "MongoDB",
      "Socket.IO",
      "Redis",
      "Bull",
      "Mapbox",
      "AWS S3",
      "Firebase",
      "Tailwind CSS",
      "JWT",
      "Swagger",
    ],
    thumbnail: "/projects/thumbnail/intracity.png",
    longThumbnail: "/projects/long/intracity.png",
    images: [
      "/projects/images/intracity-1.png",
      "/projects/images/intracity-2.png",
      "/projects/images/intracity-3.png",
    ],
  },

  {
    title: "CleanTech Operations Management System",
    slug: "cleantech-operations-management-system",
    liveUrl: "",
    year: 2025,
    description: `
    A full-stack business operations platform built for CleanTech to manage leads, projects, inventory, purchase orders, challans, invoices, payments, vendors, expenses, and employee finance workflows from one centralized system. <br/><br/>

    The application streamlines the full operational lifecycle from lead generation and quotation creation to project execution, stock tracking, payment collection, vendor settlements, and internal wallet/salary management through a scalable frontend-backend architecture.

    <br/><br/>
    Key Features:
    <ul>
      <li>🔐 Secure Authentication with JWT and Permission-Based Access</li>
      <li>📌 Lead, Project, Client, Vendor, and User Management</li>
      <li>📦 Inventory, GRN, Material, Product, and Purchase Order Workflows</li>
      <li>📄 Quotation, Challan, Invoice, and Vendor Invoice Management</li>
      <li>💳 Client Payments, Vendor Payments, Wallet, and Salary Tracking</li>
      <li>💸 Expense Creation, Approval, and Reimbursement Flow</li>
      <li>📊 Operational Reports for Leads, Stock, Sales, Profitability, and Ledgers</li>
      <li>📧 PDF Generation and Email Sharing for Business Documents</li>
    </ul>
    <br/>

    Technical Highlights:
    <ul>
      <li>Built a modular full-stack architecture with React frontend and Express backend</li>
      <li>Designed RESTful APIs for master data, finance, inventory, and document workflows</li>
      <li>Implemented protected routes and role/permission-driven access control</li>
      <li>Integrated quotation, challan, invoice, and purchase-order PDF generation flows</li>
      <li>Added email-based document sharing and Excel import/export utilities</li>
      <li>Managed business dashboards and reports with chart-driven data visualization</li>
      <li>Structured MongoDB models for scalable handling of operational and financial records</li>
    </ul>
  `,
    role: `
    Full-Stack MERN Developer <br/>
    Owned the complete development lifecycle:
    <ul>
      <li>🧠 Backend: Built Express APIs and business logic for operations, inventory, and finance</li>
      <li>🔐 Authentication: Implemented secure login and permission-based access management</li>
      <li>🎨 Frontend: Developed responsive admin workflows using React + TypeScript + MUI</li>
      <li>📄 Document Systems: Built quotation, challan, invoice, and purchase-order generation flows</li>
      <li>💰 Finance Modules: Developed expense, wallet, salary, payment, and vendor invoice features</li>
      <li>🚀 Reporting & Ops: Created dashboards, ledger reports, and operational management screens</li>
    </ul>
  `,
    techStack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TanStack Query",
      "Material UI",
      "JWT",
      "Chart.js",
      "PDFKit",
      "Cloudinary",
      "AWS S3",
      "ExcelJS",
      "Vite",
    ],
    thumbnail: "/projects/thumbnail/cleantech.png",
    longThumbnail: "/projects/long/cleantech.png",
    images: [
      "/projects/images/cleantech-1.png",
      "/projects/images/cleantech-2.png",
      "/projects/images/cleantech-3.png",
    ],
  },

  {
    title: "Zenith Audit & Certification Management Platform",
    slug: "zenith-audit-certification-management-platform",
    liveUrl: "",
    year: 2025,
    description: `
    A role-based audit and certification management platform built for Zenith Quality Assessors Pvt. Ltd., designed to handle customer applications, quotation generation, reviewer workflows, audit processing, certification decisions, and document issuance in one unified system. <br/><br/>

    The application supports Admin, Reviewer, Customer, and Applicant experiences, enabling certification workflows across schemes like ISO, FSSC, ICMED, ICMED Plus, and IMDR through structured application forms, audit stages, quotation calculators, and certificate-ready document flows.

    <br/><br/>
    Key Features:
    <ul>
      <li>🔐 Role-Based Access for Admin, Reviewer, Customer & Applicant Portals</li>
      <li>📝 Multi-Step Customer Application Forms with Dynamic Validation</li>
      <li>💰 Quotation Generation for ISO, FSSC, ICMED, ICMED Plus & IMDR</li>
      <li>🔎 Reviewer Workflow with Field Comments, Resolution & Approval Flow</li>
      <li>📋 Audit Workflow, Auditor Nomination & Stage Review Management</li>
      <li>📄 Certificate, Annexure, Decision Record & Congratulation Letter Generation</li>
      <li>📂 Master Modules for Roles, Departments, Divisions, Schemes & Technical Areas</li>
      <li>📬 Customer Quotation Review, Updates Panel & Audit Progress Tracking</li>
    </ul>
    <br/>

    Technical Highlights:
    <ul>
      <li>Built a scalable React + TypeScript frontend with modular page and component architecture</li>
      <li>Integrated all server communication through React Query and a centralized makeRequest utility</li>
      <li>Created certificate-specific quotation calculators and preview flows for multiple standards</li>
      <li>Implemented PDF-ready certificate, quotation, and audit document rendering using React PDF</li>
      <li>Structured separate layouts for internal, customer, and applicant application surfaces</li>
      <li>Added test coverage across forms, workflow cards, tables, and document review interactions</li>
      <li>Connected the frontend to a production API environment using Vite-based configuration</li>
    </ul>
  `,
    role: `
    Frontend Developer <br/>
    Owned the core frontend architecture and workflow implementation:
    <ul>
      <li>🎨 Frontend: Built role-based UI flows using React + TypeScript</li>
      <li>🧩 Workflow Design: Implemented customer, reviewer, admin, and applicant journeys</li>
      <li>💰 Quotation System: Developed certificate-wise quotation calculators and preview screens</li>
      <li>📄 Documents: Created certificate, quotation, annexure, and audit report rendering flows</li>
      <li>🔗 API Integration: Connected modules through React Query hooks and centralized request utilities</li>
      <li>🛠️ Quality: Added reusable components, modular forms, and test coverage for critical workflows</li>
    </ul>
  `,
    techStack: [
      "React.js",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Formik",
      "Zustand",
      "Tailwind CSS",
      "React Router",
      "React PDF",
      "ApexCharts",
      "Vitest",
      "Axios",
    ],
    thumbnail: "/projects/thumbnail/zenith.png",
    longThumbnail: "/projects/long/zenith.png",
    images: [
      "/projects/images/zenith-1.png",
      "/projects/images/zenith-2.png",
      "/projects/images/zenith-3.png",
      "/projects/images/zenith-4.png",
    ],
  },

  {
    title: "Sudama Pohe Dapodi",
    slug: "sudama-pohe-dapodi",
    liveUrl: "https://food-delivery-frontend-w90g.onrender.com/",
    year: 2025,
    description: `
      A full-stack food ordering platform built for Sudama Pohe Dapodi, delivering a seamless digital ordering experience with secure authentication, real-time cart management, and integrated online payments. <br/><br/>

      The application includes dedicated User and Admin dashboards, enabling efficient product management, order tracking, and customer handling through a scalable MERN architecture.

      <br/><br/>
      Key Features:
      <ul>
        <li>🔐 JWT Authentication with Role-Based Access (User & Admin)</li>
        <li>🛒 Add to Cart & Real-Time Order Placement</li>
        <li>💳 Secure Stripe Payment Integration</li>
        <li>📦 Admin Panel for Product & Order Management</li>
        <li>🔎 Product Filtering & Search Functionality</li>
        <li>📱 Fully Responsive UI for All Devices</li>
        <li>🔒 Password Hashing with Bcrypt</li>
      </ul>
      <br/>

      Technical Highlights:
      <ul>
        <li>Designed RESTful APIs with authentication middleware</li>
        <li>Implemented protected routes and role-based dashboards</li>
        <li>Integrated Stripe for secure payment processing</li>
        <li>Structured scalable backend using Express & MongoDB</li>
        <li>Managed global state using React Context API</li>
        <li>Deployed frontend and backend separately on Render</li>
      </ul>
    `,
    role: `
      Full-Stack MERN Developer <br/>
      Owned the complete development lifecycle:
      <ul>
        <li>🧠 Backend: Built REST APIs with Express & MongoDB</li>
        <li>🔐 Authentication: Implemented JWT-based secure login system</li>
        <li>💳 Payments: Integrated Stripe payment gateway</li>
        <li>🎨 Frontend: Developed responsive UI using React</li>
        <li>🛠️ Admin Dashboard: Created product & order management system</li>
        <li>🚀 Deployment: Configured and deployed services on Render</li>
      </ul>
    `,
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe",
      "Bcrypt",
      "Render",
    ],
    thumbnail: "/projects/thumbnail/sudama-pohe.png",
    longThumbnail: "/projects/long/sudama-pohe.png",
    images: [
      "/projects/images/sudama-pohe-1.webp",
      "/projects/images/sudama-pohe-2.webp",
      "/projects/images/sudama-pohe-3.webp",
    ],
  },

  // {
  //     title: 'Epikcart',
  //     slug: 'epikcart',
  //     techStack: [
  //         'React',
  //         'Redux',
  //         'React i18n',
  //         'Tailwind CSS',
  //         'Framer Motion',
  //         'debouncing',
  //         'Api Integration',
  //     ],
  //     thumbnail: '/projects/thumbnail/epikcart.jpg',
  //     longThumbnail: '/projects/long/epikcart.jpg',
  //     images: [
  //         '/projects/images/epikcart-1.png',
  //         '/projects/images/epikcart-2.png',
  //         '/projects/images/epikcart-3.png',
  //         '/projects/images/epikcart-4.png',
  //         '/projects/images/epikcart-5.png',
  //     ],
  //     liveUrl: 'https://demo.epikcart.siphertech.com/',
  //     year: 2023,
  //     description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
  //     role: `As the frontend developer in a team of five, I: <br/>
  //     - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
  //     - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
  //     - Integrated multi-language support with React i18n, including RTL handling.<br/>
  //     - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
  // },
  // {
  //     title: 'Resume Roaster',
  //     slug: 'resume-roaster',
  //     techStack: [
  //         'GPT-4',
  //         'Next.js',
  //         'Postgressql',
  //         'Prisma',
  //         'Tailwind CSS',
  //     ],
  //     thumbnail: '/projects/thumbnail/resume-roaster.jpg',
  //     longThumbnail: '/projects/long/resume-roaster.jpg',
  //     images: [
  //         '/projects/images/resume-roaster-1.png',
  //         '/projects/images/resume-roaster-2.png',
  //         '/projects/images/resume-roaster-3.png',
  //     ],
  //     liveUrl: 'https://resume-roaster.vercel.app/',
  //     year: 2023,
  //     description:
  //         'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
  //     role: `As the sole developer and business owner, I:<br/>
  //     - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
  //     - Integrated GPT-4 for AI-driven feedback and insights.<br/>
  //     - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
  // },
  // {
  //     title: 'Real Estate',
  //     slug: 'property-pro',
  //     techStack: [
  //         'React.js',
  //         'Redux',
  //         'Tailwind CSS',
  //         'React i18n',
  //         'Framer Motion',
  //     ],
  //     thumbnail: '/projects/thumbnail/property-pro.jpg',
  //     longThumbnail: '/projects/long/property-pro.jpg',
  //     images: [
  //         '/projects/images/property-pro-1.png',
  //         '/projects/images/property-pro-2.png',
  //         '/projects/images/property-pro-3.png',
  //     ],
  //     liveUrl: 'https://demo.propertypro.siphertech.com/',
  //     year: 2023,
  //     description:
  //         'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
  //     role: `As the frontend developer, I:<br/>
  //     - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
  //     - Integrated dynamic state management for efficient handling of property data.<br/>
  //     - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
  //     - Enhanced user interaction with animations and transitions using Framer Motion.`,
  // },
  // {
  //     title: 'Consulting Finance',
  //     slug: 'crenotive',
  //     techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
  //     thumbnail: '/projects/thumbnail/consulting-finance.jpg',
  //     longThumbnail: '/projects/long/consulting-finance.jpg',
  //     images: [
  //         '/projects/images/consulting-finance-1.png',
  //         '/projects/images/consulting-finance-2.png',
  //         '/projects/images/consulting-finance-3.png',
  //     ],
  //     sourceCode: 'https://github.com/Rohit Dhotre/crenotive',
  //     liveUrl: 'https://crenotive.netlify.app/',
  //     year: 2023,
  //     description:
  //         'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
  //     role: ``,
  // },
  // {
  //     title: 'devLinks',
  //     slug: 'devLinks',
  //     techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
  //     thumbnail: '/projects/thumbnail/devLinks.jpg',
  //     longThumbnail: '/projects/long/devLinks.jpg',
  //     images: [
  //         '/projects/images/devLinks-1.png',
  //         '/projects/images/devLinks-2.png',
  //         '/projects/images/devLinks-3.png',
  //     ],
  //     sourceCode: 'https://github.com/Rohit Dhotre/devsLink',
  //     liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
  //     year: 2023,
  //     description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

  //         I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
  //     role: ``,
  // },
];

export const MY_EXPERIENCE = [
  {
    title: "Software Engineer (Full Stack Developer)",
    company: "Provaantech Technologies Pvt Ltd.",
    duration: "Dec 2024 - Present",
  },
];
