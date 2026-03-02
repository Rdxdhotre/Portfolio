import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: ' rohitdhotre.dev@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Rohit Dhotre, I am reaching out to you because...',

    // oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: ' ',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Rdxdhotre' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/rohit-dhotre' },
    // { name: 'facebook', url: 'https://www.facebook.com/Rohit Dhotre.2000' },
    // { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'TanStack',
            icon: '/logo/tanstack.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        // {
        //     name: 'NestJS',
        //     icon: '/logo/nest.svg',
        // },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        // {
        //     name: 'Prisma',
        //     icon: '/logo/prisma.png',
        // },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Sudama Pohe Dapodi',
        slug: 'sudama-pohe-dapodi',
        liveUrl: 'https://food-delivery-frontend-w90g.onrender.com/',
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
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'JWT',
            'Stripe',
            'Bcrypt',
            'Render',
        ],
        thumbnail: '/projects/thumbnail/sudama-pohe.png',
        longThumbnail: '/projects/long/sudama-pohe.png',
        images: [
            '/projects/images/sudama-pohe-1.webp',
            '/projects/images/sudama-pohe-2.webp',
            '/projects/images/sudama-pohe-3.webp',
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
        title: 'Software Engineer (Frontend)',
        company: 'Provaantech Technologies Pvt Ltd.',
        duration: 'Dec 2024 - Present',
    },
];
