import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import { allBanners } from '../../../data/allBannersData';
import { CompanyConfig } from '../../../theme/theme';
import styles from './CloudServices.module.css';

export default function CloudApplicationDevelopment() {
  const [activeTab, setActiveTab] = useState('scalable');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsListRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    const activeButton = document.querySelector(`.${styles.tabButton}.${styles.active}`);
    const divider = dividerRef.current;
    
    if (activeButton && divider && tabsListRef.current) {
      const buttonRect = activeButton.getBoundingClientRect();
      const listRect = tabsListRef.current.getBoundingClientRect();
      
      const topOffset = buttonRect.top - listRect.top;
      const height = buttonRect.height;
      
      setIndicatorStyle({
        top: `${topOffset}px`,
        height: `${height}px`
      });
    }
  }, [activeTab]);

  const subServices = [
    {
      title: 'SaaS Platforms',
      description: 'Build scalable Software-as-a-Service platforms with multi-tenancy, subscription management, and analytics.',
      icon: '💼'
    },
    {
      title: 'Web Applications',
      description: 'Modern, responsive web applications built with React, Angular, or Vue.js for optimal user experience.',
      icon: '🌐'
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs designed for scalability, security, and seamless integrations.',
      icon: '🔌'
    },
    {
      title: 'Mobile Backends',
      description: 'Powerful backend services for iOS and Android apps with real-time sync and push notifications.',
      icon: '📱'
    },
    {
      title: 'Microservices',
      description: 'Containerized microservices architecture for independent scaling and deployment.',
      icon: '🔧'
    },
    {
      title: 'Data Processing',
      description: 'Real-time data processing pipelines for analytics, IoT, and machine learning applications.',
      icon: '📊'
    }
  ];

  const techStack = [
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Requirements & Planning',
      description: 'We analyze your business needs, define technical requirements, and create a comprehensive development roadmap.'
    },
    {
      number: '02',
      title: 'Architecture Design',
      description: 'Our architects design a scalable, secure cloud-native architecture optimized for your use case.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Agile development with continuous integration, code reviews, and automated testing.'
    },
    {
      number: '04',
      title: 'Testing & QA',
      description: 'Comprehensive testing including unit tests, integration tests, load testing, and security audits.'
    },
    {
      number: '05',
      title: 'Deployment',
      description: 'Deploy to cloud with CI/CD pipelines, monitoring setup, and zero-downtime deployment.'
    },
    {
      number: '06',
      title: 'Support & Scaling',
      description: 'Ongoing monitoring, optimization, and scaling to meet growing business demands.'
    }
  ];

  const faqData = [
    {
      question: 'What types of cloud applications can you develop?',
      answer: 'We develop a wide range of cloud-native applications including:',
      points: [
        'SaaS (Software as a Service) platforms',
        'Enterprise web applications',
        'Mobile backend services and APIs',
        'Real-time data processing applications',
        'IoT and edge computing solutions',
        'AI/ML-powered applications',
        'E-commerce and marketplace platforms'
      ],
      closing: 'Whatever your business needs, we can build it on the cloud.'
    },
    {
      question: 'What are the benefits of cloud-native applications?',
      answer: 'Cloud-native applications offer significant advantages over traditional applications:',
      points: [
        'Automatic scaling based on demand',
        'High availability and fault tolerance',
        'Faster deployment with CI/CD pipelines',
        'Cost optimization through efficient resource usage',
        'Global reach with multi-region deployment',
        'Built-in monitoring and observability',
        'Microservices architecture for independent scaling',
        'Container-based deployment for consistency'
      ],
      closing: 'We build applications that leverage these benefits from day one.'
    },
    {
      question: 'Which cloud platform is best for my application?',
      answer: 'The best cloud platform depends on your specific needs. We help you choose between AWS, Azure, GCP, or others based on:',
      points: [
        'Your existing technology stack',
        'Budget and pricing models',
        'Geographic requirements',
        'Compliance and security needs',
        'Specific features you need (AI/ML, databases, etc.)'
      ],
      closing: 'We provide expert guidance to select the optimal platform for your use case.'
    },
    {
      question: 'How long does it take to develop a cloud application?',
      answer: 'Development timelines vary based on application complexity:',
      points: [
        'Simple applications: 2-3 months',
        'Medium complexity: 4-6 months',
        'Complex enterprise applications: 6-12 months'
      ],
      closing: 'We follow agile methodology, delivering working features in short sprints so you can see progress throughout development.'
    },
    {
      question: 'Can you migrate my existing application to the cloud?',
      answer: 'Yes! We specialize in cloud migration and modernization. We can help you migrate existing applications to the cloud or rebuild them as cloud-native applications for better performance and scalability. Our migration services ensure minimal downtime and data integrity throughout the process.'
    },
    {
      question: 'Do you provide ongoing support after deployment?',
      answer: 'Absolutely. We offer comprehensive post-deployment support including 24/7 monitoring, performance optimization, security updates, bug fixes, and feature enhancements. Our support packages are tailored to your specific needs and SLA requirements.'
    }
  ];

  const tabContent = {
    scalable: {
      title: 'Infinitely Scalable Architecture',
      description: 'Build applications that automatically scale to handle millions of users. Our cloud-native solutions use microservices, containerization, and auto-scaling to ensure your application performs flawlessly under any load.',
      features: [
        'Auto-scaling based on traffic',
        'Load balancing and distribution',
        'Microservices architecture',
        'Serverless computing options'
      ]
    },
    secure: {
      title: 'Enterprise-Grade Security',
      description: 'Security is built into every layer of your application. We implement industry-leading security practices including encryption, authentication, access controls, and regular security audits to protect your data and users.',
      features: [
        'End-to-end encryption',
        'OAuth and SSO integration',
        'Role-based access control',
        'Regular security audits'
      ]
    },
    costeffective: {
      title: 'Cost-Optimized Solutions',
      description: 'Pay only for what you use with cloud infrastructure. Our architects design efficient systems that minimize costs while maximizing performance, using serverless computing, right-sized resources, and smart caching strategies.',
      features: [
        'Pay-per-use pricing models',
        'Resource optimization',
        'Smart caching strategies',
        'Cost monitoring and alerts'
      ]
    }
  };

  return (
    <>
      <ConsultationBanner data={allBanners['cloud-app-development']} />

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <div className={styles.whyChooseGrid}>
            {/* Left: Tabs */}
            <div className={styles.tabsColumn}>
              <h2 className={styles.sectionTitle}>
                Why Build Cloud-Native Applications?
              </h2>
              <p className={styles.sectionSubtitle}>
                Leverage the full power of cloud computing for scalable, secure, and cost-effective solutions.
              </p>

              <div className={styles.tabsWrapper}>
                <div className={styles.tabsList} ref={tabsListRef}>
                  <button
                    onClick={() => setActiveTab('scalable')}
                    className={`${styles.tabButton} ${activeTab === 'scalable' ? styles.active : ''}`}
                  >
                    <span className={styles.tabIcon}>📈</span>
                    Scalable
                  </button>
                  <button
                    onClick={() => setActiveTab('secure')}
                    className={`${styles.tabButton} ${activeTab === 'secure' ? styles.active : ''}`}
                  >
                    <span className={styles.tabIcon}>🔒</span>
                    Secure
                  </button>
                  <button
                    onClick={() => setActiveTab('costeffective')}
                    className={`${styles.tabButton} ${activeTab === 'costeffective' ? styles.active : ''}`}
                  >
                    <span className={styles.tabIcon}>💰</span>
                    Cost-Effective
                  </button>
                </div>

                <div className={styles.divider} ref={dividerRef}>
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    width: '3px',
                    background: 'var(--primary)',
                    transition: 'all 0.3s ease',
                    borderRadius: '0 2px 2px 0',
                    ...indicatorStyle
                  }} />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className={styles.contentColumn}>
              <div className={styles.tabContent}>
                <h3 className={styles.contentTitle}>{tabContent[activeTab].title}</h3>
                <p className={styles.contentDescription}>{tabContent[activeTab].description}</p>
                
                <ul className={styles.featuresList}>
                  {tabContent[activeTab].features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Grid */}
      <section className={styles.servicesGridSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Cloud Applications We Build</h2>
            <p className={styles.sectionSubtitle}>
              From SaaS platforms to enterprise applications, we build it all
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {subServices.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className={styles.techStackSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Technologies We Use</h2>
            <p className={styles.sectionSubtitle}>
              Cutting-edge tools and frameworks for building robust cloud applications
            </p>
          </div>

          <div className={styles.techGrid}>
            {techStack.map((tech, index) => (
              <div key={index} className={styles.techCard}>
                <img src={tech.icon} alt={tech.name} className={styles.techIcon} />
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Content */}
      <section className={styles.twoColumnSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.contentColumn}>
              <h2 className={styles.columnTitle}>Experience Matters in Cloud Development</h2>
              <p className={styles.columnText}>
                At {CompanyConfig.name}, we understand that building cloud applications requires deep expertise in both software development and cloud infrastructure. Our team combines years of experience in architecting scalable solutions with the latest cloud technologies.
              </p>
              <p className={styles.columnText}>
                We build cloud-native solutions that are optimized for performance, cost-efficiency, and scalability. Our applications are designed to handle millions of users while maintaining low operational costs through intelligent auto-scaling and resource optimization.
              </p>
              <p className={styles.columnText}>
                Whether you're building a new SaaS platform, modernizing legacy applications, or creating innovative solutions with AI and machine learning, our cloud experts have the skills and experience to bring your vision to life.
              </p>
            </div>
            <div className={styles.imageColumn}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.imageIcon}>☁️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Development Process</h2>
            <p className={styles.sectionSubtitle}>
              A proven methodology for delivering successful cloud applications
            </p>
          </div>

          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.processCard}>
                <div className={styles.processNumber}>{step.number}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={faqData} title="Cloud Application Development FAQs" />

      {/* Final CTA */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.ctaGrid}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Build Your Cloud Application?</h2>
              <p className={styles.ctaDescription}>
                Let's transform your ideas into powerful cloud-native applications. Our team of experts is ready to help you leverage the full potential of cloud computing for your business.
              </p>
              <Link to="/contact" className={styles.ctaButton}>
                Start Your Project
                <span className={styles.buttonArrow}>→</span>
              </Link>
            </div>
            <div className={styles.ctaImage}>
              <div className={styles.ctaImagePlaceholder}>
                <span className={styles.ctaImageIcon}>🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}