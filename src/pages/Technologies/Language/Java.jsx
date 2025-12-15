import React, { useState, useEffect, useRef } from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { CompanyConfig } from '../../../theme/theme';
import styles from '../TechnologyPage.module.css';

export default function Java() {
  const [activeTab, setActiveTab] = useState('oop');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsListRef = useRef(null);
  const dividerRef = useRef(null);
  const companyName = CompanyConfig.name;

  const tabContent = {
    oop: {
      description: 'Whenever someone talks about Java, many think about object-oriented programming or OOP. However, it is not the only language to leverage the technique. Our developers use Java to build incredible enterprise solutions and mission-critical applications, ensuring top-class services with robust architecture.'
    },
    platform: {
      description: 'Java\'s "Write Once, Run Anywhere" philosophy makes it platform-independent. Our team builds applications that run seamlessly across Windows, Linux, Unix, and Mac environments, providing maximum flexibility and reducing deployment complexities for your business.'
    },
    portability: {
      description: 'Java applications are highly portable across different platforms and environments. We leverage Java\'s portability to create solutions that can be easily deployed and maintained across diverse infrastructure setups, saving time and reducing operational costs.'
    },
    support: {
      description: 'With extensive community support and enterprise-grade libraries, Java provides unmatched resources for development. Our developers utilize this vast ecosystem to build robust, maintainable applications backed by proven frameworks and continuous innovation.'
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
      question: "Why choose Java for enterprise application development?",
      answer: "Java remains the top choice for enterprise applications due to:",
      points: [
        "Platform independence (Write Once, Run Anywhere)",
        "Robust security features",
        "Mature ecosystem with extensive libraries",
        "High performance and scalability",
        "Strong community support",
        "Excellent tools and IDEs"
      ]
    },
    {
      question: "What Java frameworks do you specialize in?",
      answer: "We specialize in modern Java frameworks including Spring Boot, Spring Cloud, Hibernate, Apache Struts, JavaServer Faces (JSF), and Play Framework. We choose the framework based on project requirements and scalability needs."
    },
    {
      question: "Can you migrate legacy Java applications?",
      answer: "Yes, we provide comprehensive legacy Java application modernization services. This includes upgrading to newer Java versions, migrating monoliths to microservices, cloud migration, and refactoring for improved performance and maintainability."
    },
    {
      question: "How do you ensure Java application security?",
      answer: "We implement multiple layers of security:",
      points: [
        "Secure coding practices following OWASP guidelines",
        "Authentication and authorization with Spring Security",
        "Data encryption and secure communication",
        "Regular security audits and penetration testing",
        "Dependency vulnerability scanning",
        "Security patches and updates"
      ]
    },
    {
      question: "Do you provide Java application maintenance?",
      answer: "Absolutely! We offer comprehensive maintenance and support services including bug fixes, performance optimization, security updates, feature enhancements, and 24/7 monitoring to ensure your Java applications run smoothly."
    },
    {
      question: "What is the typical timeline for Java application development?",
      answer: "Timelines vary based on complexity:",
      points: [
        "Simple applications: 2-3 months",
        "Medium complexity: 4-6 months",
        "Enterprise applications: 6-12 months",
        "We provide detailed project estimates after requirements analysis"
      ]
    }
  ];

  const seoData = pageSEO.java;

  return (
    <div className={styles.techPage}>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/technologies/java"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      {/* Banner Section */}
      <ConsultationBanner data={allBanners['java']} />

      {/* Why Hire Section - FIRST */}
      <section className={styles.whyHireSection}>
        <div className={styles.whyHireContainer}>
          <h1 className={styles.whyHireTitle}>
            Hire Java Developers For Enterprise Tools
          </h1>
          <p className={styles.whyHireSubtitle}>
            Java is one of the most advanced server-side technologies that enables businesses to achieve remarkable growth and build scalable enterprise solutions with proven reliability.
          </p>
          
          <div className={styles.whyHireContent}>
            {/* Tabs on LEFT */}
            <div className={styles.tabsList} ref={tabsListRef}>
              <button
                className={`${styles.tabButton} ${activeTab === 'oop' ? styles.active : ''}`}
                onClick={() => setActiveTab('oop')}
              >
                OOP Support
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'platform' ? styles.active : ''}`}
                onClick={() => setActiveTab('platform')}
              >
                Platform Independent
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'portability' ? styles.active : ''}`}
                onClick={() => setActiveTab('portability')}
              >
                Portability
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'support' ? styles.active : ''}`}
                onClick={() => setActiveTab('support')}
              >
                Extensive Support
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
                Enterprise Java Development Services For Robust Applications
              </h2>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Platform independence</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Enterprise-grade security</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Scalable architecture</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>High performance</span>
                </li>
              </ul>
            </div>
            <div className={styles.descriptionRight}>
              <p>
                Java continues to be one of the most popular programming languages for building enterprise-grade applications. With its robust architecture, extensive ecosystem, and proven track record, Java powers critical business applications worldwide. Our expert Java developers deliver secure, scalable, and maintainable solutions that drive business success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqData} title="Java Development FAQs" />
    </div>
  );
}