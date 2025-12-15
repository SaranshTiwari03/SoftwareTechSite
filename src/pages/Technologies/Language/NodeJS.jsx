import React, { useState, useEffect, useRef } from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { CompanyConfig } from '../../../theme/theme';
import styles from '../TechnologyPage.module.css';

export default function NodeJS() {
  const [activeTab, setActiveTab] = useState('devops');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsListRef = useRef(null);
  const dividerRef = useRef(null);
  const companyName = CompanyConfig.name;

  const tabContent = {
    devops: {
      description: `DevOps is already about faster product delivery with the collaboration of development operations. Our Node.js developers, with their dedicated development environments, are a dynamic duo that further enhances the technical delivery speeds of our DevOps efforts.`
    },
    agile: {
      description: 'Our agile approach to Node.js development ensures rapid iteration cycles, continuous integration, and frequent delivery of working software. We adapt quickly to changing requirements while maintaining code quality and meeting demanding performance benchmarks.'
    },
    techstack: {
      description: 'While Node.js is a popular backend tool, our developers have expertise in emerging technology stacks including Blockchain, Mixed Reality, digital commerce, AI and Machine Learning, Bluetooth low energy, and the Internet of Things for comprehensive solutions.'
    }
  };

  useEffect(() => {
    const updateIndicator = () => {
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
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeTab]);

  const faqData = [
    {
      question: "Why should I choose Node.js for my project?",
      answer: "Node.js is an excellent choice for building scalable and high-performance applications:",
      points: [
        "Fast execution with V8 JavaScript engine",
        "Non-blocking I/O for handling concurrent requests",
        "Single programming language (JavaScript) for both frontend and backend",
        "Large ecosystem with NPM packages",
        "Perfect for real-time applications like chat, streaming, and gaming"
      ]
    },
    {
      question: "What types of applications can be built with Node.js?",
      answer: "Node.js is versatile and can be used for various types of applications:",
      points: [
        "Real-time applications (chat, collaboration tools)",
        "REST APIs and microservices",
        "Streaming applications",
        "Single-page applications (SPAs)",
        "IoT applications",
        "Command-line tools"
      ]
    },
    {
      question: "How experienced are your Node.js developers?",
      answer: "Our Node.js development team consists of senior developers with 5+ years of experience. They have successfully delivered projects across various industries including fintech, healthcare, e-commerce, and SaaS platforms."
    },
    {
      question: "What frameworks do you use with Node.js?",
      answer: "We work with all major Node.js frameworks including Express.js, NestJS, Koa.js, Fastify, and Hapi. We choose the framework based on project requirements, scalability needs, and performance considerations."
    },
    {
      question: "Do you provide Node.js application maintenance?",
      answer: "Yes, we offer comprehensive maintenance and support services including performance monitoring, security updates, bug fixes, and feature enhancements to ensure your Node.js application runs smoothly."
    },
    {
      question: "How do you ensure Node.js application security?",
      answer: "We implement industry-best security practices:",
      points: [
        "Regular security audits and vulnerability assessments",
        "Input validation and sanitization",
        "Secure authentication and authorization",
        "HTTPS and data encryption",
        "Rate limiting and DDoS protection",
        "Regular dependency updates"
      ]
    }
  ];

  const seoData = pageSEO.nodejs;

  return (
    <div className={styles.techPage}>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/technologies/nodejs"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      {/* Banner Section */}
      <ConsultationBanner data={allBanners['nodejs']} />

      {/* Why Hire Section - FIRST */}
      <section className={styles.whyHireSection}>
        <div className={styles.whyHireContainer}>
          <h1 className={styles.whyHireTitle}>
            Hire Node.Js Developers For Scalable Applications
          </h1>
          <p className={styles.whyHireSubtitle}>
            Build secure, fast, and robust applications with our Node.js development expertise. We leverage the power of JavaScript runtime to create high-performance solutions that scale with your business needs.
          </p>
          
          <div className={styles.whyHireContent}>
            {/* Tabs on LEFT */}
            <div className={styles.tabsList} ref={tabsListRef}>
              <button
                className={`${styles.tabButton} ${activeTab === 'devops' ? styles.active : ''}`}
                onClick={() => setActiveTab('devops')}
              >
                Accelerated DevOps
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'agile' ? styles.active : ''}`}
                onClick={() => setActiveTab('agile')}
              >
                Agile Approach
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'techstack' ? styles.active : ''}`}
                onClick={() => setActiveTab('techstack')}
              >
                Tech Stack
              </button>
            </div>

            {/* Divider Line with Orange Indicator */}
            <div className={styles.whyHireDivider} ref={dividerRef}>
              <div 
                style={{
                  position: 'absolute',
                  left: 0,
                  width: '3px',
                  background: 'var(--primary)',
                  transition: 'all 0.3s ease',
                  ...indicatorStyle
                }}
              />
            </div>

            {/* Content on RIGHT */}
            <div className={styles.tabContentWrapper}>
              <p className={styles.tabContentDescription}>
                {tabContent[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Description Section - SECOND */}
      <section className={styles.descriptionSection}>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionContent}>
            <div className={styles.descriptionLeft}>
              <h2 className={styles.descriptionTitle}>
                Node.js Development For Real-Time Applications
              </h2>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Creative digital solutions</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Large and vast Experience</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Robust Web Solutions</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Ready to Mobile Apps</span>
                </li>
              </ul>
            </div>
            <div className={styles.descriptionRight}>
              <p>
                Node.js is a powerful cross-platform runtime environment for server-side development. It enables quick platform development with real-time data transfer capabilities. Node.js provides businesses with full-fledged assistance in both business enhancement and operational development, making it ideal for scalable applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqData} title="Node.js Development FAQs" />
    </div>
  );
}