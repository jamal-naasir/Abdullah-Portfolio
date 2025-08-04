export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Skills',
    href: '#skills',
  },
  {
    id: 4,
    name: 'Work',
    href: '#work',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Abdullah was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Abdullah’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Abdullah. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Abdullah was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    
    title: 'Sealed – Custom WordPress Experience',
    desc: 'Sealed is a high-performance, design-first WordPress site built from the ground up with a fully custom theme.',
    subdesc: 'Developed in PHP with custom templating, animations, and scalable CMS components. Optimized for speed, SEO, and seamless client control. The result is a sleek, modern brand experience without relying on bloated plugins or third-party builders.',
    href: 'https://sealed.ae/',
    texture: '/textures/project/sealed.mp4',
    logo: '/assets/Sealed.svg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Elementor',
        path: '/assets/elementor.svg',
      },
      {
        id: 2,
        name: 'Wordpress',
        path: 'assets/wordpress.png',
      },
      {
        id: 3,
        name: 'WPBakery',
        path: '/assets/wpbakery.jpeg',
      },
      {
        id: 4,
        name: 'WooCommerce',
        path: '/assets/wocommerce.png',
      },
      {
        id: 5,
        name: 'Jquery',
        path: '/assets/jquery.png',
      },
    ],
  },
  
    {
      title: 'ILT Costa Rica – Symfony-Powered Booking Platform',
      desc: 'ILT Costa Rica is a custom-built trip booking platform developed with Symfony for a seamless travel planning experience. Designed for international users seeking language and cultural immersion in Costa Rica.',
      subdesc: 'Engineered with Symfony, jQuery, and Lodash for clean backend control and dynamic frontend interaction. Enhanced with GA4, Facebook Pixel, and Cloudflare CDN for performance, insight, and reach. Supports multilingual content and modern tracking via Google Tag Manager.',
      
    href: 'https://iltcostarica.com/',
    texture: '/textures/project/ilt.mp4',
    logo: '/assets/ilt2.jpeg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Symfony',
        path: '/assets/symfony.png',
      },
      {
        id: 2,
        name: 'PHP',
        path: '/assets/php.svg',
      },
      {
        id: 3,
        name: 'Bootstrap',
        path: '/assets/bootstrap.webp',
      },
      {
        id: 4,
        name: 'Google Analytics',
        path: '/assets/google.jpg',
      },
    ],
  },
  {
    title: 'MHP – AI-Powered Credit Wellness Platform',
    desc: 'MyHomePathway is a full-stack financial wellness app that collects real-time credit and banking data to deliver personalized recommendations that help users improve their credit scores.',
    subdesc: 'Built with NestJS, Next.js, Prisma, and PostgreSQL. It features bank-grade data handling, AI-driven recommendations, and smart course delivery to educate users on financial habits, real-world savings, and long-term credit health.',
    href: 'https://app.myhomepathway.com',
    texture: '/textures/project/mhp-app.mp4',
    logo: '/assets/mhp.jpeg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/next.jpeg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'NestJS',
        path: '/assets/nest.webp',
      },
      {
        id: 5,
        name: 'AWS',
        path: '/assets/aws.webp',
      },
    ],
  },
  {
    title: 'MHP Landing – Custom Squarespace Experience',
    desc: 'The MHP landing platform combines custom responsive design with advanced financial tools like mortgage and tax calculators, offering users instant insight and actionable next steps.',
    subdesc: 'Built on Squarespace with extended functionality using JavaScript, tracking, and analytics. Fully integrated with behavior tracking to monitor engagement and conversion in real time.',
    href: 'https://myhomepathway.squarespace.com/mortgage-calculator',
    texture: '/textures/project/mhp-landing.mp4',
    logo: '/assets/mhp.jpeg',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Squarespace',
        path: '/assets/sqaurespace.png',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.webp',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/js.jpg',
      },
      {
        id: 4,
        name: 'Google Analytics',
        path: '/assets/google.jpg',
      },
    ],
  },
  {
    title: 'ZeroSwipe – Open Market Job Platform',
    desc: 'ZeroSwipe connects people who need tasks done with those looking to earn — from casual gigs to professional work, all in one place.',
    subdesc: 'A swipe-based platform where users can post and accept any type of job, from gardening to full-stack development. Designed for mobility, simplicity, and economic inclusion.',
    href: 'https://zero-psi.vercel.app/',
    texture: '/textures/project/zeroswip.mp4',
    logo: '/assets/ZeroLogo.svg',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Expo',
        path: '/assets/expo.png',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/mongo.jpg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
   
  {
    id: 1,
    name: 'MyHomePathway',
    pos: 'Senior Full Stack Developer',
    duration: 'Dec 2024 – Jun 2025',
    title: "At MyHomePathway, I led the development of AI-powered recommendation systems using Ollama 3.2B and integrated user behavior analytics with Customer.io and Google Analytics. I also built automated testing pipelines with Selenium and Jest, and deployed scalable apps using AWS CI/CD pipelines. My work directly supported financial wellness tools that helped users improve their credit scores.",
    icon: '/assets/mhp.jpeg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Tekvill',
    pos: 'Senior Software Engineer',
    duration: 'Oct 2022 – Present',
    title: "At Tekvill, I developed enterprise-level backend APIs using Laravel and JS frameworks, worked with PostgreSQL and MongoDB, and maintained secure RESTful services. I also collaborated on frontend tasks using React.js and implemented clean testing with JUnit and Mockito in a microservices-based architecture.",
    icon: '/assets/tekvill.jpeg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Digilynx',
    pos: 'Full Stack Developer',
    duration: 'Sep 2021 – Sep 2022',
    title: "Digilynx was where I polished my full stack capabilities using the MERN stack. I contributed to dynamic frontend interfaces, secure Node.js APIs, and built real-time features. I also gained exposure to Agile workflows and CI/CD with GitHub Actions, while maintaining collaborative code quality through regular testing and code reviews.",
    icon: '/assets/digilynx.jpeg',
    animation: 'salute',
  }
];
