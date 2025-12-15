import { CompanyConfig, SiteConfig } from '../theme/theme';

export const pageSEO = {
  // ==================== HOME PAGE ====================
  home: {
    title: `Professional IT Services & Software Development Company`,
    description: `Leading IT services company specializing in custom software development, mobile app development, web development, cloud solutions, and digital marketing. Transform your business with innovative technology solutions.`,
    keywords: `IT services, software development company, mobile app development, web development, cloud services, digital marketing, custom software solutions, enterprise software`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": CompanyConfig.name,
      "url": SiteConfig.url,
      "logo": `${SiteConfig.url}${SiteConfig.logo}`,
      "description": CompanyConfig.tagline,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CompanyConfig.address,
        "addressLocality": CompanyConfig.city,
        "addressRegion": CompanyConfig.state,
        "postalCode": CompanyConfig.zipCode,
        "addressCountry": CompanyConfig.country
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": CompanyConfig.phone,
        "contactType": "Customer Service",
        "email": CompanyConfig.email,
        "areaServed": "Worldwide",
        "availableLanguage": ["English"]
      },
      "sameAs": [
        SiteConfig.social.linkedin,
        SiteConfig.social.twitter,
        SiteConfig.social.facebook
      ]
    }
  },

  // ==================== COMPANY PAGES ====================
  about: {
    title: `About Us - Leading Software Development Company`,
    description: `Learn about ${CompanyConfig.name}, a trusted IT services provider with expertise in custom software development, mobile apps, web solutions, and digital transformation. Meet our team and discover our mission.`,
    keywords: `about us, software development company, IT services provider, technology solutions, company profile, our team, our mission`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": `About ${CompanyConfig.name}`,
      "description": CompanyConfig.tagline,
      "url": `${SiteConfig.url}/about`
    }
  },

  contact: {
    title: `Contact Us - Get Free IT Consultation & Quote`,
    description: `Contact ${CompanyConfig.name} for expert IT services and software development solutions. Get a free consultation and quote for your project. Available 24/7 to discuss your requirements.`,
    keywords: `contact us, get quote, free consultation, IT services inquiry, software development quote, contact information, support`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": `Contact ${CompanyConfig.name}`,
      "url": `${SiteConfig.url}/contact`
    }
  },

  // ==================== MAIN SERVICE PAGES ====================
  mainServices: {
    title: `IT Services & Software Development Solutions`,
    description: `Comprehensive IT services including mobile app development, web development, custom software, cloud solutions, and digital marketing. Expert technology solutions for businesses worldwide.`,
    keywords: `IT services, software development services, technology solutions, digital services, enterprise solutions, business software`,
  },

  // ==================== MOBILE APP DEVELOPMENT ====================
  mobileAppMain: {
    title: `Mobile App Development Services | iOS & Android Apps`,
    description: `Professional mobile app development for iOS and Android. Native and cross-platform apps with stunning UI/UX. From concept to launch, we build mobile apps that users love and businesses need.`,
    keywords: `mobile app development, ios app development, android app development, cross platform apps, native app development, mobile application services`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mobile App Development",
      "description": "Professional mobile app development for iOS and Android platforms",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      },
      "areaServed": "Worldwide",
      "serviceType": "Software Development"
    }
  },

  androidApp: {
    title: `Android App Development Services | Custom Android Apps`,
    description: `Expert Android app development using Kotlin and Java. Build scalable, high-performance Android applications with modern Material Design. Play Store optimization included.`,
    keywords: `android app development, kotlin app development, java android apps, android studio, material design, play store apps`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Android App Development",
      "description": "Custom Android application development using Kotlin and Java",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  crossPlatformApp: {
    title: `Cross-Platform App Development | React Native & Flutter`,
    description: `Build once, deploy everywhere. Expert cross-platform app development using React Native and Flutter. Cost-effective mobile solutions for iOS and Android with native performance.`,
    keywords: `cross platform app development, react native development, flutter app development, hybrid mobile apps, multi-platform apps`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Cross-Platform App Development",
      "description": "React Native and Flutter app development for iOS and Android",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  // ==================== WEB DEVELOPMENT ====================
  webDevelopmentMain: {
    title: `Web Development Services | Custom Website Development`,
    description: `Professional web development services for responsive, scalable websites and web applications. Expert frontend and backend development using modern technologies like React, Node.js, and more.`,
    keywords: `web development, website development, custom web applications, responsive web design, frontend development, backend development`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Development Services",
      "description": "Custom website and web application development",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  ecommerceWebsite: {
    title: `E-commerce Website Development | Online Store Solutions`,
    description: `Build powerful e-commerce websites with secure payment integration, inventory management, and seamless checkout. Shopify, WooCommerce, and custom e-commerce solutions.`,
    keywords: `ecommerce website development, online store development, shopify development, woocommerce, custom ecommerce platform, shopping cart development`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "E-commerce Website Development",
      "description": "Custom online store and e-commerce platform development",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  webPortals: {
    title: `Web Portal Development | Enterprise Portal Solutions`,
    description: `Custom web portal development for enterprises, businesses, and organizations. Build secure, scalable portals with user management, dashboards, and advanced features.`,
    keywords: `web portal development, enterprise portal, customer portal, employee portal, business portal development, portal solutions`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Portal Development",
      "description": "Enterprise and business web portal solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  // ==================== CUSTOM SOFTWARE ====================
  customSoftwareMain: {
    title: `Custom Software Development Services | Enterprise Solutions`,
    description: `Tailored software solutions for your unique business needs. Expert custom software development including CRM, ERP, CMS, and enterprise applications with scalable architecture.`,
    keywords: `custom software development, enterprise software, bespoke software solutions, business software development, tailored applications`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom Software Development",
      "description": "Tailored software solutions for enterprises and businesses",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  crmSolution: {
    title: `CRM Software Development | Custom CRM Solutions`,
    description: `Custom CRM development to streamline sales, marketing, and customer service. Build scalable CRM systems with automation, analytics, and seamless integrations.`,
    keywords: `crm development, custom crm software, customer relationship management, crm system development, sales automation`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "CRM Software Development",
      "description": "Custom Customer Relationship Management solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  erpSolution: {
    title: `ERP Software Development | Enterprise Resource Planning`,
    description: `Custom ERP solutions to integrate and automate business processes. Build comprehensive ERP systems for finance, HR, inventory, supply chain, and operations management.`,
    keywords: `erp development, enterprise resource planning, custom erp software, erp system development, business process automation`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "ERP Software Development",
      "description": "Custom Enterprise Resource Planning solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  cmsSolution: {
    title: `CMS Development | Custom Content Management Systems`,
    description: `Custom CMS development for easy content management and publishing. Build powerful, user-friendly content management systems with WordPress, Drupal, or custom solutions.`,
    keywords: `cms development, content management system, custom cms, wordpress development, drupal development, headless cms`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "CMS Development",
      "description": "Custom Content Management System solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  // ==================== CLOUD SERVICES ====================
  cloudServicesMain: {
    title: `Cloud Services | AWS, Azure, GCP Solutions & Migration`,
    description: `Comprehensive cloud services including migration, application development, infrastructure management, and 24/7 support. Expert solutions for AWS, Azure, and Google Cloud Platform.`,
    keywords: `cloud services, cloud migration, aws services, azure solutions, google cloud platform, cloud infrastructure, cloud application development`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Cloud Services",
      "description": "Cloud migration, development, and management services",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  cloudApplicationDevelopment: {
    title: `Cloud Application Development | Cloud-Native Apps`,
    description: `Build scalable, cloud-native applications with microservices architecture. Expert development for AWS, Azure, and GCP platforms with serverless and containerized solutions.`,
    keywords: `cloud application development, cloud native apps, microservices development, serverless applications, containerization, docker kubernetes`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Cloud Application Development",
      "description": "Cloud-native and serverless application development",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  cloudMigrationServices: {
    title: `Cloud Migration Services | Seamless Cloud Transition`,
    description: `Expert cloud migration services to move your infrastructure and applications to AWS, Azure, or GCP. Minimize downtime, reduce costs, and ensure data security during migration.`,
    keywords: `cloud migration, cloud migration services, aws migration, azure migration, gcp migration, data center migration, infrastructure migration`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Cloud Migration Services",
      "description": "Seamless migration to cloud platforms",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  cloudSupportMaintenance: {
    title: `Cloud Support & Maintenance | 24/7 Cloud Management`,
    description: `24/7 cloud support and maintenance services for AWS, Azure, and GCP. Proactive monitoring, performance optimization, security management, and incident response.`,
    keywords: `cloud support, cloud maintenance, 24/7 cloud management, cloud monitoring, cloud optimization, managed cloud services`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Cloud Support & Maintenance",
      "description": "24/7 cloud infrastructure support and management",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  // ==================== DIGITAL MARKETING ====================
  digitalMarketingMain: {
    title: `Digital Marketing Services | SEO, SEM & Social Media`,
    description: `Comprehensive digital marketing services to grow your online presence. Expert SEO, SEM, social media marketing, content marketing, and PPC campaigns that drive results.`,
    keywords: `digital marketing, seo services, sem services, social media marketing, content marketing, ppc advertising, online marketing`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Digital Marketing Services",
      "description": "Comprehensive digital marketing and SEO services",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  seoServices: {
    title: `SEO Services | Search Engine Optimization`,
    description: `Professional SEO services to rank higher on Google. On-page SEO, off-page SEO, technical SEO, keyword research, link building, and local SEO strategies that deliver organic traffic.`,
    keywords: `seo services, search engine optimization, on-page seo, off-page seo, technical seo, local seo, keyword research, google ranking`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SEO Services",
      "description": "Professional search engine optimization services",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  semServices: {
    title: `SEM Services | Search Engine Marketing & PPC`,
    description: `Expert SEM and PPC management for Google Ads, Bing Ads, and more. Drive targeted traffic with data-driven paid search campaigns that maximize ROI and conversions.`,
    keywords: `sem services, search engine marketing, ppc management, google ads, bing ads, paid search, pay per click advertising`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SEM Services",
      "description": "Search engine marketing and PPC campaign management",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  socialMediaMarketing: {
    title: `Social Media Marketing | Facebook, Instagram, LinkedIn Ads`,
    description: `Strategic social media marketing to engage your audience and grow your brand. Expert management of Facebook, Instagram, LinkedIn, Twitter campaigns with proven strategies.`,
    keywords: `social media marketing, facebook ads, instagram marketing, linkedin advertising, twitter marketing, social media management, smm services`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Social Media Marketing",
      "description": "Social media marketing and advertising services",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  // ==================== INDUSTRY PAGES ====================
  industriesMain: {
    title: `Industries We Serve | Custom Software Solutions for All Sectors`,
    description: `Explore industry-specific software solutions for healthcare, fintech, education, retail, logistics, automotive, real estate, and more. Custom development services tailored to your industry needs.`,
    keywords: `industries, healthcare software, fintech solutions, education technology, retail software, logistics apps, automotive technology, real estate platforms, industry solutions`,
  },
  automotive: {
    title: `Automotive App Development | Fleet Management Solutions`,
    description: `Transform your automotive business with custom mobile apps for fleet management, telematics, vehicle diagnostics, connected car solutions, and automotive IoT applications.`,
    keywords: `automotive app development, fleet management software, telematics apps, connected car solutions, vehicle tracking apps, automotive software`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Automotive App Development",
      "description": "Custom automotive software and mobile app solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  ecommerce: {
    title: `E-commerce App Development | Online Marketplace Solutions`,
    description: `Build powerful e-commerce mobile apps and marketplaces with secure payments, inventory management, order tracking, and seamless shopping experiences for iOS and Android.`,
    keywords: `ecommerce app development, online marketplace app, shopping app development, retail mobile app, ecommerce platform, online store app`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "E-commerce App Development",
      "description": "Custom e-commerce and marketplace app solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  education: {
    title: `Education App Development | E-Learning Platform Solutions`,
    description: `Innovative education apps and e-learning platforms with virtual classrooms, course management, student tracking, online assessments, and interactive learning experiences.`,
    keywords: `education app development, elearning app, online learning platform, educational software, virtual classroom app, lms development`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Education App Development",
      "description": "E-learning and educational app development",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  fintech: {
    title: `Fintech App Development | Banking & Payment Solutions`,
    description: `Secure fintech app development for digital banking, payment gateways, mobile wallets, cryptocurrency, trading platforms, and financial management solutions.`,
    keywords: `fintech app development, banking app development, payment app, mobile wallet, cryptocurrency app, trading platform, financial software`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Fintech App Development",
      "description": "Financial technology and banking app solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  healthcare: {
    title: `Healthcare App Development | HIPAA Compliant Medical Software`,
    description: `Build secure, HIPAA-compliant healthcare apps including telemedicine, patient portals, EMR/EHR systems, appointment scheduling, and health monitoring solutions.`,
    keywords: `healthcare app development, hipaa compliant software, telemedicine app, patient portal, emr ehr system, medical app development`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Healthcare App Development",
      "description": "HIPAA-compliant healthcare and medical app solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  logistics: {
    title: `Logistics App Development | Supply Chain Management Solutions`,
    description: `Optimize logistics operations with custom apps for route optimization, real-time tracking, warehouse management, delivery management, and supply chain visibility.`,
    keywords: `logistics app development, supply chain software, fleet tracking app, warehouse management, delivery app development, transportation software`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Logistics App Development",
      "description": "Logistics and supply chain management solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  music: {
    title: `Music App Development | Audio Streaming Platform Solutions`,
    description: `Create engaging music streaming apps with audio playback, playlist management, social features, artist profiles, offline mode, and subscription-based monetization.`,
    keywords: `music app development, audio streaming app, music player app, spotify clone, music streaming platform, audio app development`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Music App Development",
      "description": "Music streaming and audio app development",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  onDemand: {
    title: `On-Demand App Development | Uber-like Service Apps`,
    description: `Build on-demand service apps like Uber, with real-time booking, GPS tracking, payment integration, ratings, and seamless user experiences for service providers and customers.`,
    keywords: `on-demand app development, uber like app, service booking app, taxi booking app, delivery app, gig economy app`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "On-Demand App Development",
      "description": "On-demand service and booking app solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  realEstate: {
    title: `Real Estate App Development | Property Listing Solutions`,
    description: `Modern real estate apps with property listings, virtual tours, mortgage calculators, agent finder, map integration, and property management features for buyers and sellers.`,
    keywords: `real estate app development, property listing app, real estate software, property management app, realty mobile app`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Real Estate App Development",
      "description": "Real estate and property management app solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  retail: {
    title: `Retail App Development | Point of Sale & Inventory Solutions`,
    description: `Transform retail operations with custom POS systems, inventory management, customer loyalty programs, omnichannel retail, and in-store mobile shopping solutions.`,
    keywords: `retail app development, pos system, inventory management app, retail software, omnichannel retail, store management app`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Retail App Development",
      "description": "Retail and point-of-sale app solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  saas: {
    title: `SaaS Application Development | Cloud-Based Software Solutions`,
    description: `Build scalable SaaS applications with multi-tenancy, subscription billing, user management, API integrations, and cloud infrastructure for B2B and B2C markets.`,
    keywords: `saas development, saas application, cloud based software, multi-tenant app, subscription software, b2b saas, b2c saas`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SaaS Application Development",
      "description": "Cloud-based SaaS application development",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  // ==================== TECHNOLOGY PAGES ====================
  mainTechnologies: {
    title: `Technologies We Use | Modern Development Stack`,
    description: `Expert developers proficient in cutting-edge technologies including Node.js, Python, Java, PHP, React, Angular, .NET, cloud platforms, and more for scalable solutions.`,
    keywords: `technologies, programming languages, development stack, modern technologies, tech stack, software technologies`,
  },

  dotnet: {
    title: `.NET Development Services | ASP.NET & C# Developers`,
    description: `Expert .NET development using ASP.NET Core, C#, and Azure. Build enterprise applications, web APIs, microservices, and cloud-native solutions with Microsoft technologies.`,
    keywords: `.net development, asp.net core, c# development, dotnet developer, microsoft .net, enterprise .net development`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": ".NET Development",
      "description": "ASP.NET and .NET Core development services",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  html5: {
    title: `HTML5 Development | Modern Web Development Services`,
    description: `Professional HTML5 development with CSS3, JavaScript for responsive, cross-browser compatible websites and web applications with modern UI/UX design.`,
    keywords: `html5 development, css3, responsive web design, modern web development, frontend development, html css javascript`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "HTML5 Development",
      "description": "HTML5, CSS3, and JavaScript development",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  java: {
    title: `Java Development Services | Enterprise Java Applications`,
    description: `Enterprise Java development using Spring Boot, Hibernate, and microservices architecture. Build scalable, secure backend systems and web applications.`,
    keywords: `java development, spring boot, java enterprise, hibernate, java backend, microservices java, java developer`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Java Development",
      "description": "Enterprise Java and Spring Boot development",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  nodejs: {
    title: `Node.js Development Services | Scalable Backend Solutions`,
    description: `Expert Node.js developers building fast, scalable backend systems, RESTful APIs, real-time applications, and microservices using Express.js and modern frameworks.`,
    keywords: `nodejs development, nodejs developer, nodejs backend, express.js, rest api nodejs, real-time applications, nodejs microservices`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Node.js Development",
      "description": "Node.js backend and API development services",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  php: {
    title: `PHP Development Services | Laravel & WordPress Solutions`,
    description: `Professional PHP development using Laravel, WordPress, CodeIgniter, and modern frameworks. Build dynamic websites, web applications, and CMS solutions.`,
    keywords: `php development, laravel development, wordpress development, php developer, php framework, custom php solutions`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "PHP Development",
      "description": "PHP and Laravel web development services",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  python: {
    title: `Python Development Services | Django & Flask Applications`,
    description: `Expert Python development using Django, Flask, FastAPI for web applications, data analysis, machine learning, automation, and AI-powered solutions.`,
    keywords: `python development, django development, flask development, python developer, machine learning python, python web development`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Python Development",
      "description": "Python, Django, and Flask development services",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  azure: {
    title: `Microsoft Azure Services | Cloud Solutions & Migration`,
    description: `Expert Microsoft Azure solutions including cloud migration, Azure DevOps, serverless computing, Azure SQL, and managed cloud services for enterprise scalability.`,
    keywords: `microsoft azure, azure cloud services, azure migration, azure devops, azure solutions, managed azure services`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Microsoft Azure Services",
      "description": "Azure cloud solutions and migration services",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  gcp: {
    title: `Google Cloud Platform Services | GCP Solutions & Migration`,
    description: `Professional Google Cloud Platform services including cloud migration, BigQuery, Kubernetes Engine, Cloud Functions, and managed GCP infrastructure.`,
    keywords: `google cloud platform, gcp services, gcp migration, google cloud solutions, bigquery, kubernetes gcp, cloud functions`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Google Cloud Platform Services",
      "description": "GCP cloud solutions and migration services",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  oracle: {
    title: `Oracle Development Services | Database & ERP Solutions`,
    description: `Enterprise Oracle solutions including Oracle Database, Oracle ERP Cloud, PL/SQL development, database optimization, and Oracle application development.`,
    keywords: `oracle development, oracle database, oracle erp, plsql development, oracle cloud, oracle solutions, database optimization`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Oracle Development Services",
      "description": "Oracle database and ERP solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  sap: {
    title: `SAP Development Services | ERP Implementation & Consulting`,
    description: `Professional SAP solutions including SAP S/4HANA, SAP Fiori, ABAP development, SAP integration, ERP implementation, and SAP consulting services.`,
    keywords: `sap development, sap implementation, sap consulting, sap s4hana, sap fiori, abap development, sap erp, sap integration`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SAP Development Services",
      "description": "SAP ERP implementation and consulting",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },
  // ==================== INDUSTRY PAGES ====================
  automotive: {
    title: `Automotive App Development Services | Connected Car Solutions`,
    description: `Professional automotive app development for fleet management, telematics, EV charging, vehicle diagnostics, and connected car solutions. Build innovative automotive technology that drives the future of mobility.`,
    keywords: `automotive app development, fleet management apps, telematics solutions, connected car apps, vehicle tracking, ev charging apps, automotive software development`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Automotive App Development",
      "description": "Custom automotive application development and connected car solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  ecommerce: {
    title: `E-Commerce App Development Services | Online Store Solutions`,
    description: `Build powerful e-commerce platforms and mobile shopping apps with secure payments, inventory management, and seamless checkout. Custom e-commerce solutions that drive online sales and growth.`,
    keywords: `ecommerce app development, online store development, shopping app development, ecommerce platform, mobile commerce, marketplace development`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "E-Commerce App Development",
      "description": "Custom e-commerce and online shopping platform development",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  education: {
    title: `Education App Development Services | E-Learning Platforms`,
    description: `Create innovative EdTech solutions including LMS platforms, virtual classrooms, online learning apps, and student management systems. Transform education with engaging digital learning experiences.`,
    keywords: `education app development, elearning platform development, lms development, virtual classroom, online education app, edtech solutions`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Education App Development",
      "description": "E-learning and educational technology solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  fintech: {
    title: `Fintech App Development Services | Digital Banking Solutions`,
    description: `Secure fintech app development for digital banking, payment processing, investment platforms, and blockchain solutions. HIPAA-compliant financial technology that transforms finance.`,
    keywords: `fintech app development, digital banking app, payment app development, investment platform, blockchain development, financial software development`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Fintech App Development",
      "description": "Financial technology and digital banking solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  healthcare: {
    title: `Healthcare App Development Services | Telemedicine Solutions`,
    description: `HIPAA-compliant healthcare app development for telemedicine, patient monitoring, hospital management, and health records. Secure medical software that improves patient care.`,
    keywords: `healthcare app development, telemedicine app development, medical app development, health app, hospital management system, hipaa compliant app`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Healthcare App Development",
      "description": "HIPAA-compliant healthcare and telemedicine solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  logistics: {
    title: `Logistics App Development Services | Fleet Management Solutions`,
    description: `Build logistics and supply chain apps with fleet tracking, warehouse management, last-mile delivery, and route optimization. Smart logistics solutions that improve efficiency.`,
    keywords: `logistics app development, fleet management app, warehouse management system, delivery app development, supply chain software, transportation management`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Logistics App Development",
      "description": "Logistics and supply chain management solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  music: {
    title: `Music App Development Services | Streaming Platform Solutions`,
    description: `Create music streaming apps, production tools, and artist platforms with high-quality audio, playlists, and social features. Innovative music technology solutions.`,
    keywords: `music app development, music streaming app, audio app development, music production app, artist platform development, podcast app development`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Music App Development",
      "description": "Music streaming and production platform development",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  onDemand: {
    title: `On-Demand App Development Services | Service Marketplace Solutions`,
    description: `Build on-demand service apps for delivery, ride-hailing, home services, and more. Real-time matching, tracking, and payments for successful on-demand platforms.`,
    keywords: `on-demand app development, delivery app development, ride hailing app, service marketplace, uber clone, food delivery app development`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "On-Demand App Development",
      "description": "On-demand service and marketplace platform development",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  realEstate: {
    title: `Real Estate App Development Services | Property Platform Solutions`,
    description: `Develop real estate apps with property listings, virtual tours, CRM, and property management. Innovative real estate technology that transforms property business.`,
    keywords: `real estate app development, property app development, real estate crm, property management app, virtual tour app, real estate platform`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Real Estate App Development",
      "description": "Real estate and property management solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  retail: {
    title: `Retail App Development Services | Omnichannel Retail Solutions`,
    description: `Build retail apps with POS systems, inventory management, mobile commerce, and loyalty programs. Modern retail technology that drives sales growth.`,
    keywords: `retail app development, pos system development, retail software, inventory management app, mobile commerce, omnichannel retail solutions`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Retail App Development",
      "description": "Retail and point-of-sale solutions",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },

  saas: {
    title: `SaaS Development Services | Cloud Software Solutions`,
    description: `Build scalable SaaS platforms with multi-tenancy, subscription management, and API integrations. Cloud-native SaaS solutions that drive recurring revenue.`,
    keywords: `saas development, saas platform development, cloud software development, multi-tenant architecture, subscription software, saas application development`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SaaS Development",
      "description": "SaaS platform and cloud software development",
      "provider": {
        "@type": "Organization",
        "name": CompanyConfig.name,
        "url": SiteConfig.url
      }
    }
  },
};