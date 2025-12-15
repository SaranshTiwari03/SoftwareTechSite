import React from 'react';
import { Link } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import styles from './MainService.module.css';

export default function MainService() {
  // Primary Services - ONLY ACTIVE SERVICES
  const primaryServices = [
    { 
      name: 'Mobile App Development', 
      path: '/services/mobile-app',
      description: 'Build powerful native and cross-platform mobile applications for Android with cutting-edge technologies.'
    },
    { 
      name: 'Web Development', 
      path: '/services/web',
      description: 'Create responsive, scalable, and high-performance web applications tailored to your business needs.'
    },
    { 
      name: 'Custom Software Development', 
      path: '/services/custom-software',
      description: 'Develop bespoke software solutions that streamline operations and drive digital transformation.'
    },
    // COMMENTED OUT - Future use
    // { 
    //   name: 'Artificial Intelligence', 
    //   path: '/services/ai',
    //   description: 'Leverage AI and machine learning to automate processes, gain insights, and enhance decision-making.'
    // },
    // { 
    //   name: 'Blockchain Development', 
    //   path: '/services/blockchain',
    //   description: 'Build secure, decentralized applications and smart contracts on leading blockchain platforms.'
    // },
    { 
      name: 'Cloud Services', 
      path: '/services/cloud',
      description: 'Modernize your infrastructure with cloud migration, deployment, and management solutions.'
    },
    // COMMENTED OUT - Future use
    // { 
    //   name: 'Game Development', 
    //   path: '/services/game',
    //   description: 'Design and develop immersive gaming experiences across multiple platforms and genres.'
    // },
    { 
      name: 'Digital Marketing Services', 
      path: '/services/marketing',
      description: 'Boost your online presence with data-driven marketing strategies and campaigns.'
    }
    // COMMENTED OUT - Future use
    // { 
    //   name: 'Staff Augmentation', 
    //   path: '/services/staff',
    //   description: 'Scale your team quickly with skilled developers and IT professionals on demand.'
    // }
  ];

  // Consulting Services - ONLY ACTIVE SUB-SERVICES
  const consultingServices = [
    // COMMENTED OUT - iOS removed as requested
    // { 
    //   name: 'iOS App Development', 
    //   path: '/services/mobile-app/ios',
    //   description: 'Create stunning native iOS applications optimized for iPhone and iPad devices.'
    // },
    { 
      name: 'Android App Development', 
      path: '/services/mobile-app/android',
      description: 'Develop feature-rich Android apps that reach billions of users worldwide.'
    },
    { 
      name: 'Cross Platform App Development', 
      path: '/services/mobile-app/cross-platform',
      description: 'Build once, deploy everywhere with React Native and Flutter solutions.'
    },
    { 
      name: 'Ecommerce Website Development', 
      path: '/services/web/ecommerce',
      description: 'Launch powerful online stores with secure payment gateways and inventory management.'
    },
    { 
      name: 'Web Portals', 
      path: '/services/web/portals',
      description: 'Develop custom portals for businesses, customers, and partners with advanced features.'
    },
    { 
      name: 'ERP Solution', 
      path: '/services/custom-software/erp',
      description: 'Integrate business processes with comprehensive enterprise resource planning systems.'
    },
    { 
      name: 'CRM Solution', 
      path: '/services/custom-software/crm',
      description: 'Manage customer relationships effectively with custom CRM platforms.'
    },
    { 
      name: 'CMS Solution', 
      path: '/services/custom-software/cms',
      description: 'Empower your content team with flexible and user-friendly content management systems.'
    },
    // COMMENTED OUT - AI services for future use
    // { 
    //   name: 'Generative AI', 
    //   path: '/services/ai/generative',
    //   description: 'Harness the power of GPT and generative models for content creation and automation.'
    // },
    // { 
    //   name: 'Natural Language Processing', 
    //   path: '/services/ai/nlp',
    //   description: 'Extract insights from text data with advanced NLP and sentiment analysis.'
    // },
    // { 
    //   name: 'AI Agent Development', 
    //   path: '/services/ai/agent',
    //   description: 'Build intelligent agents and chatbots that understand and respond naturally.'
    // },
    { 
      name: 'Cloud Application Development', 
      path: '/services/cloud/app-development',
      description: 'Design cloud-native applications that scale seamlessly with your business.'
    },
    { 
      name: 'Cloud Migration', 
      path: '/services/cloud/migration',
      description: 'Smoothly transition your legacy systems to modern cloud infrastructure.'
    },
    { 
      name: 'Cloud Support & Maintenance', 
      path: '/services/cloud/support',
      description: 'Ensure optimal performance with 24/7 cloud monitoring and maintenance.'
    },
    { 
      name: 'Social Media Marketing', 
      path: '/services/marketing/social-media',
      description: 'Grow your brand presence across Facebook, Instagram, LinkedIn, and more.'
    },
    { 
      name: 'Search Engine Marketing', 
      path: '/services/marketing/sem',
      description: 'Drive targeted traffic with strategic PPC campaigns and paid advertising.'
    },
    { 
      name: 'Search Engine Optimization', 
      path: '/services/marketing/seo',
      description: 'Improve your search rankings and organic traffic with proven SEO strategies.'
    }
  ];

  // Trending Services - COMMENTED OUT ENTIRELY FOR FUTURE USE
  // const trendingServices = [
  //   { 
  //     name: '2D Game Development', 
  //     path: '/services/game/2d',
  //     description: 'Create captivating 2D games with engaging gameplay and beautiful graphics.'
  //   },
  //   { 
  //     name: '3D Game Development', 
  //     path: '/services/game/3d',
  //     description: 'Build immersive 3D gaming experiences with stunning visuals and realistic physics.'
  //   },
  //   { 
  //     name: 'Web3 Game Development', 
  //     path: '/services/game/web3',
  //     description: 'Develop next-generation blockchain games with NFT integration and play-to-earn mechanics.'
  //   },
  //   { 
  //     name: 'Metaverse Development', 
  //     path: '/services/blockchain/metaverse',
  //     description: 'Create virtual worlds and metaverse experiences that connect users globally.'
  //   },
  //   { 
  //     name: 'NFT Development', 
  //     path: '/services/blockchain/nft',
  //     description: 'Launch NFT marketplaces and collections with smart contract functionality.'
  //   }
  // ];

  // FAQ Data
  const faqData = [
    {
      question: "What services does your company provide?",
      answer: "We offer a comprehensive range of technology services including mobile app development (Android & Cross-platform), web development, custom software solutions, cloud services, and digital marketing. Our team specializes in delivering end-to-end solutions tailored to your business needs.",
      points: []
    },
    {
      question: "How long does it typically take to complete a project?",
      answer: "Project timelines vary based on complexity and scope. Here are typical timeframes:",
      points: [
        "Simple mobile apps: 2-3 months",
        "Complex web applications: 3-6 months",
        "Enterprise software: 6-12 months",
        "Cloud migration projects: 2-5 months"
      ],
      closing: "We provide detailed project timelines during the consultation phase and keep you updated throughout development."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance services. This includes bug fixes, performance optimization, feature updates, and technical support to ensure your solution continues to perform optimally."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with cutting-edge technologies across multiple domains:",
      points: [
        "Mobile: React Native, Flutter, Kotlin",
        "Web: React, Node.js, Python, PHP, .NET",
        "Cloud: AWS, Azure, Google Cloud Platform",
        "Digital Marketing: SEO, SEM, Social Media platforms"
      ]
    },
    {
      question: "How do you ensure the quality of your deliverables?",
      answer: "Quality is our top priority. We follow industry best practices including agile methodologies, continuous integration and deployment, comprehensive testing (unit, integration, and user acceptance testing), code reviews, and regular client feedback sessions throughout the development process."
    },
    {
      question: "Can you work with my existing team or technology stack?",
      answer: "Absolutely! We can seamlessly integrate with your existing team. Our developers are experienced in working with various technology stacks and can adapt to your development processes and tools."
    },
    {
      question: "What industries do you serve?",
      answer: "We have experience across multiple industries including healthcare, fintech, e-commerce, education, real estate, logistics, automotive, retail, SaaS, music, and on-demand services. Our diverse portfolio demonstrates our ability to understand and address industry-specific challenges."
    },
    {
      question: "How do you handle project communication and updates?",
      answer: "We believe in transparent communication. You'll have access to:",
      points: [
        "Dedicated project manager as your point of contact",
        "Regular status meetings (daily/weekly based on preference)",
        "Project management tools for real-time progress tracking",
        "Slack/email for instant communication",
        "Demo sessions at key milestones"
      ]
    }
  ];

  const seoData = pageSEO.mainServices;

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/services"
        ogType="website"
      />

      <article className={styles.mainServicePage}>
        {/* Hero Section with Form */}
        <ConsultationBanner data={allBanners['services']} />

        {/* Services Section */}
        <section className={styles.servicesSection}>
          <div className={styles.servicesContainer}>
            
            {/* Primary Services */}
            <div className={styles.categoryBlock}>
              <header className={styles.categoryHeader}>
                <h1 className={styles.categoryTitle}>Primary Services</h1>
                <p className={styles.categoryDescription}>
                  Comprehensive technology solutions to transform your business
                </p>
              </header>
              <nav className={styles.servicesGrid} aria-label="Primary services">
                {primaryServices.map((service, index) => (
                  <Link key={index} to={service.path} className={styles.serviceCard}>
                    <div className={styles.cardContent}>
                      <h2 className={styles.serviceName}>{service.name}</h2>
                      <p className={styles.serviceDescription}>{service.description}</p>
                    </div>
                    <div className={styles.cardArrow}>
                      <span className={styles.arrow} aria-hidden="true">→</span>
                    </div>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Consulting Services */}
            <div className={styles.categoryBlock}>
              <header className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>Consulting Services</h2>
                <p className={styles.categoryDescription}>
                  Specialized expertise for your specific technology needs
                </p>
              </header>
              <nav className={styles.servicesGrid} aria-label="Consulting services">
                {consultingServices.map((service, index) => (
                  <Link key={index} to={service.path} className={styles.serviceCard}>
                    <div className={styles.cardContent}>
                      <h3 className={styles.serviceName}>{service.name}</h3>
                      <p className={styles.serviceDescription}>{service.description}</p>
                    </div>
                    <div className={styles.cardArrow}>
                      <span className={styles.arrow} aria-hidden="true">→</span>
                    </div>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Trending Services - COMMENTED OUT FOR FUTURE USE */}
            {/* <div className={styles.categoryBlock}>
              <div className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>Trending Services</h2>
                <p className={styles.categoryDescription}>
                  Next-generation technologies shaping the future
                </p>
              </div>
              <div className={styles.servicesGrid}>
                {trendingServices.map((service, index) => (
                  <Link key={index} to={service.path} className={styles.serviceCard}>
                    <div className={styles.cardContent}>
                      <h3 className={styles.serviceName}>{service.name}</h3>
                      <p className={styles.serviceDescription}>{service.description}</p>
                    </div>
                    <div className={styles.cardArrow}>
                      <span className={styles.arrow}>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div> */}

          </div>
        </section>

        {/* FAQ Section */}
        <FAQ faqs={faqData} title="Frequently Asked Questions" />
      </article>
    </>
  );
}