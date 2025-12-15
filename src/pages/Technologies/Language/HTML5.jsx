import React, { useState, useEffect, useRef } from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { CompanyConfig } from '../../../theme/theme';
import styles from '../TechnologyPage.module.css';

export default function HTML5() {
  const [activeTab, setActiveTab] = useState('devops');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsListRef = useRef(null);
  const dividerRef = useRef(null);
  const companyName = CompanyConfig.name;

  const tabContent = {
    devops: {
      description: 'Our development team works efficiently to deliver high-quality, standards-compliant code that performs excellently across all modern browsers and devices. We implement modern DevOps practices with automated testing and continuous integration for reliable delivery.'
    },
    agile: {
      description: 'We employ agile methodologies to ensure rapid prototyping, iterative development, and continuous feedback. Our approach allows for flexible adjustments while maintaining code quality and meeting project deadlines consistently.'
    },
    techstack: {
      description: 'Beyond HTML5, our developers are proficient in CSS3, JavaScript ES6+, modern frameworks like React and Vue.js, and responsive design principles. We create semantic, accessible, and SEO-friendly markup that serves as the foundation for exceptional web experiences.'
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
      question: "What are the advantages of HTML5 over older versions?",
      answer: "HTML5 brings significant improvements over its predecessors:",
      points: [
        "Native support for audio and video without plugins",
        "Enhanced semantic elements for better structure",
        "Canvas and SVG for graphics and animations",
        "Local storage and offline application support",
        "Improved form controls and validation",
        "Better mobile and cross-device compatibility"
      ]
    },
    {
      question: "Is HTML5 compatible with all browsers?",
      answer: "Yes, HTML5 is well-supported across all modern browsers including Chrome, Firefox, Safari, Edge, and their mobile versions. We ensure backward compatibility and implement progressive enhancement strategies for older browsers when needed."
    },
    {
      question: "Can HTML5 be used for mobile app development?",
      answer: "Absolutely! HTML5 is the foundation for Progressive Web Apps (PWAs) and hybrid mobile applications. Combined with frameworks like Cordova or Ionic, we can create cross-platform mobile apps that work on both iOS and Android."
    },
    {
      question: "How does HTML5 improve SEO?",
      answer: "HTML5 enhances SEO through:",
      points: [
        "Semantic elements that help search engines understand content structure",
        "Better accessibility features",
        "Faster page load times",
        "Mobile-friendly responsive design",
        "Rich snippets and structured data support"
      ]
    },
    {
      question: "Do you create responsive HTML5 websites?",
      answer: "Yes, all our HTML5 websites are fully responsive and mobile-first. We use modern CSS frameworks, flexbox, grid layouts, and media queries to ensure your website looks perfect on all devices and screen sizes."
    },
    {
      question: "What makes HTML5 better for Progressive Web Apps (PWAs)?",
      answer: "HTML5 is the foundation for building powerful Progressive Web Apps that combine the best of web and mobile applications. HTML5 provides offline capabilities through service workers, app-like experience with responsive design, fast loading with optimized caching, push notifications for user engagement, and installation on home screens without app stores. We build PWAs that work seamlessly across all devices and platforms."
    }
  ];

  const seoData = pageSEO.html5;

  return (
    <div className={styles.techPage}>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/technologies/html5"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      {/* Banner Section */}
      <ConsultationBanner data={allBanners['html5']} />

      {/* Why Hire Section - FIRST */}
      <section className={styles.whyHireSection}>
        <div className={styles.whyHireContainer}>
          <h1 className={styles.whyHireTitle}>
            Hire HTML5 Developers For Scalable Applications
          </h1>
          <p className={styles.whyHireSubtitle}>
            Our expert developers build robust and diverse applications including web apps and SaaS platforms, ensuring high-quality, standards-compliant solutions that deliver exceptional user experiences across all devices.
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
                HTML5 Development Services For Modern Web Solutions
              </h2>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Cross-browser compatibility</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Responsive design</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>SEO-friendly markup</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Rich media support</span>
                </li>
              </ul>
            </div>
            <div className={styles.descriptionRight}>
              <p>
                HTML5 is the latest evolution of the standard that defines HTML. It includes new elements, attributes, and behaviors, and a larger set of technologies that allow building more diverse and powerful websites and applications. Our team creates modern, standards-compliant web solutions that deliver exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqData} title="HTML5 Development FAQs" />
    </div>
  );
}