import React, { useState, useEffect, useRef } from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { CompanyConfig } from '../../../theme/theme';
import styles from '../TechnologyPage.module.css';

export default function PHP() {
  const [activeTab, setActiveTab] = useState('platform');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsListRef = useRef(null);
  const dividerRef = useRef(null);
  const companyName = CompanyConfig.name;

  const tabContent = {
    platform: {
      description: 'Among many things we love about PHP development, one is that it is a platform-independent language or technology. When working with PHP, you can run it on multiple platforms, including Windows, Linux, Unix, Mac, and others. We encourage businesses to hire PHP developers and acquire the perfect application that fits your modern-day needs.'
    },
    flexibility: {
      description: 'PHP offers exceptional flexibility and versatility in web development. Our developers leverage PHP\'s dynamic capabilities to create custom solutions that adapt to your unique business requirements, from simple websites to complex enterprise applications with ease.'
    },
    scalability: {
      description: 'PHP provides excellent scalability options for growing businesses. We architect PHP applications that can handle increasing traffic and data loads efficiently, ensuring your platform grows seamlessly alongside your business expansion without performance compromises.'
    },
    support: {
      description: 'With a massive global community and extensive documentation, PHP offers unparalleled worldwide support. Our team taps into this vast ecosystem of resources, frameworks, and tools to deliver robust solutions backed by proven best practices and continuous innovation.'
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
      question: "Why choose PHP for web development?",
      answer: "PHP remains a popular choice for web development because of:",
      points: [
        "Easy to learn and deploy",
        "Cost-effective development",
        "Large community and extensive resources",
        "Compatibility with all major hosting providers",
        "Rich ecosystem of frameworks and CMS platforms",
        "Excellent for dynamic websites and applications"
      ]
    },
    {
      question: "Which PHP frameworks do you work with?",
      answer: "We specialize in Laravel, Symfony, CodeIgniter, Yii, and Zend Framework. Laravel is our preferred choice for modern applications due to its elegant syntax, robust features, and active community support."
    },
    {
      question: "Can you build e-commerce websites with PHP?",
      answer: "Absolutely! We build custom e-commerce solutions using PHP frameworks or platforms like Magento, WooCommerce, and OpenCart. Our e-commerce solutions include payment gateway integration, inventory management, order processing, and mobile-responsive designs."
    },
    {
      question: "Is PHP secure for building web applications?",
      answer: "Yes, when properly implemented. We follow PHP security best practices:",
      points: [
        "Input validation and sanitization",
        "Prepared statements to prevent SQL injection",
        "CSRF and XSS protection",
        "Secure session management",
        "Regular security audits",
        "Up-to-date PHP versions and patches"
      ]
    },
    {
      question: "Do you provide WordPress development services?",
      answer: "Yes, we offer comprehensive WordPress development services including custom theme development, plugin creation, WooCommerce integration, performance optimization, and WordPress maintenance."
    },
    {
      question: "What is the typical development timeline for PHP projects?",
      answer: "Project timelines depend on complexity and features:",
      points: [
        "Basic websites: 2-4 weeks",
        "Custom web applications: 2-4 months",
        "E-commerce platforms: 3-6 months",
        "Enterprise solutions: 6-12 months",
        "We follow agile development with regular milestones",
        "Timeline includes planning, development, testing, and launch"
      ]
    }
  ];

  const seoData = pageSEO.php;

  return (
    <div className={styles.techPage}>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/technologies/php"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      {/* Banner Section */}
      <ConsultationBanner data={allBanners['php']} />

      {/* Why Hire Section - FIRST */}
      <section className={styles.whyHireSection}>
        <div className={styles.whyHireContainer}>
          <h1 className={styles.whyHireTitle}>
            Hire PHP Developers For Custom Development
          </h1>
          <p className={styles.whyHireSubtitle}>
            Our PHP development services encapsulate all the solutions you need for building powerful backend systems. We create scalable, maintainable applications that drive business growth and digital transformation.
          </p>
          
          <div className={styles.whyHireContent}>
            {/* Tabs on LEFT */}
            <div className={styles.tabsList} ref={tabsListRef}>
              <button
                className={`${styles.tabButton} ${activeTab === 'platform' ? styles.active : ''}`}
                onClick={() => setActiveTab('platform')}
              >
                Platform Independent
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'flexibility' ? styles.active : ''}`}
                onClick={() => setActiveTab('flexibility')}
              >
                Flexibility & Versatility
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'scalability' ? styles.active : ''}`}
                onClick={() => setActiveTab('scalability')}
              >
                Scalability Options
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'support' ? styles.active : ''}`}
                onClick={() => setActiveTab('support')}
              >
                Worldwide Support
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
                Professional PHP Development Services For Dynamic Websites
              </h2>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Cost-effective solutions</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Rapid development</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Flexible and scalable</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Wide hosting support</span>
                </li>
              </ul>
            </div>
            <div className={styles.descriptionRight}>
              <p>
                PHP is a widely-used open-source scripting language that powers millions of websites worldwide. From small business websites to large-scale enterprise applications, PHP provides the flexibility and power needed to build robust web solutions. Our experienced PHP developers create secure, scalable, and maintainable applications that meet your business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqData} title="PHP Development FAQs" />
    </div>
  );
}