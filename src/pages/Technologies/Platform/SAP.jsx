import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import { allBanners } from '../../../data/allBannersData';
import { CompanyConfig } from '../../../theme/theme';
import styles from '../PlatformPage.module.css';

export default function SAP() {
  const [activeTab, setActiveTab] = useState('implementation');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsListRef = useRef(null);
  const dividerRef = useRef(null);
  const companyName = CompanyConfig.name;

  const tabContent = {
    implementation: {
      description: 'Our SAP developers help clients with SAP consulting to achieve a scalable organizational structure. We provide comprehensive end-to-end SAP implementation services including detailed business process analysis, system design and architecture, configuration, customization, rigorous testing, and complete go-live support for successful ERP adoption across your enterprise.'
    },
    s4hana: {
      description: 'Migrate to SAP S/4HANA and unlock the transformative power of intelligent enterprise solutions. We execute brownfield system conversions, greenfield implementations, or selective data transition approaches based on your needs, ensuring smooth migration with minimal business disruption while maximizing the benefits of next-generation ERP capabilities.'
    },
    integration: {
      description: 'Integrate SAP seamlessly with third-party systems using SAP Integration Suite, middleware solutions, and APIs. We build robust, scalable integration architectures that connect SAP with CRM platforms, e-commerce systems, supply chain solutions, and other enterprise applications, enabling seamless data flow and comprehensive process automation.'
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
      question: "Why choose SAP for enterprise management?",
      answer: "SAP is the leading enterprise resource planning solution:",
      points: [
        "Comprehensive business process coverage",
        "Real-time data and analytics",
        "Industry-specific solutions",
        "Global scalability and compliance",
        "Integration with existing systems",
        "Proven ROI and business value"
      ]
    },
    {
      question: "What SAP services do you provide?",
      answer: "We provide SAP implementation, S/4HANA migration, SAP Fiori development, ABAP programming, SAP integration, SAP BTP solutions, managed services, support, and training across all SAP modules including FI/CO, MM, SD, PP, and HCM."
    },
    {
      question: "Can you help with SAP S/4HANA migration?",
      answer: "Yes, we provide comprehensive S/4HANA migration services:",
      points: [
        "Current landscape assessment",
        "Migration roadmap and strategy",
        "System conversion or new implementation",
        "Custom code remediation",
        "Testing and quality assurance",
        "Change management and training"
      ]
    },
    {
      question: "What is SAP Fiori and do you develop Fiori apps?",
      answer: "SAP Fiori is a modern, user-friendly interface for SAP applications. Yes, we develop custom Fiori apps using SAPUI5, providing responsive, role-based experiences that work across devices and improve user productivity."
    },
    {
      question: "How long does SAP implementation take?",
      answer: "Implementation timelines vary by scope:",
      points: [
        "Small business: 3-6 months",
        "Mid-size company: 6-12 months",
        "Enterprise rollout: 12-24 months",
        "S/4HANA migration: 8-18 months"
      ],
      closing: "We provide detailed project plans based on your requirements."
    },
    {
      question: "Do you provide SAP managed services?",
      answer: "Yes, we offer comprehensive SAP managed services including:",
      points: [
        "24/7 system monitoring and support",
        "Performance optimization and tuning",
        "Regular updates and patch management",
        "Issue resolution and troubleshooting",
        "User support and training",
        "Continuous improvement recommendations"
      ]
    }
  ];

  return (
    <div className={styles.platformPage}>
      {/* Banner Section */}
      <ConsultationBanner data={allBanners['sap']} />

      {/* Let's Connect Section - WHITE */}
      <section className={styles.connectSection}>
        <div className={styles.connectContainer}>
          <div className={styles.connectGrid}>
            <div className={styles.connectLeft}>
              <h2 className={styles.connectTitle}>
                SAP Consulting & Implementation For Digital Transformation
              </h2>
            </div>
            <div className={styles.connectRight}>
              <p className={styles.connectDescription}>
                Our SAP developers help clients with comprehensive SAP consulting to achieve scalable organizational structures and business process excellence. We guide you through complete digital transformation with SAP's industry-leading ERP solutions, ensuring operational efficiency, data-driven decision making, and sustainable business growth.
              </p>
              <Link to="/contact" className={styles.connectButton}>
                Let's Connect!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Section - BLUE with tabs */}
      <section className={styles.whyHireSection}>
        <div className={styles.whyHireContainer}>
          <h2 className={styles.whyHireTitle}>
            What You Get From SAP Consulting
          </h2>
          
          <div className={styles.whyHireContent}>
            {/* Tabs on LEFT */}
            <div className={styles.tabsList} ref={tabsListRef}>
              <button
                className={`${styles.tabButton} ${activeTab === 'implementation' ? styles.active : ''}`}
                onClick={() => setActiveTab('implementation')}
              >
                End-to-End Implementation
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 's4hana' ? styles.active : ''}`}
                onClick={() => setActiveTab('s4hana')}
              >
                S/4HANA Migration
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'integration' ? styles.active : ''}`}
                onClick={() => setActiveTab('integration')}
              >
                System Integration
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

      {/* Descriptive Section - WHITE */}
      <section className={styles.descriptiveSection}>
        <div className={styles.descriptiveContainer}>
          <div className={styles.descriptiveGrid}>
            <div className={styles.descriptiveLeft}>
              <h2 className={styles.descriptiveTitle}>
                {companyName}'s SAP Consulting & Implementation Services
              </h2>
            </div>
            <div className={styles.descriptiveRight}>
              <p className={styles.descriptiveText}>
                {companyName}'s comprehensive SAP services include full-cycle ERP implementation, S/4HANA migration, SAP Fiori development, ABAP programming, system integration, and managed services. We begin with detailed needs assessment, followed by solution design, configuration, customization, rigorous testing, change management, user training, and ongoing support to ensure your SAP investment delivers maximum business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqData} title="SAP Services FAQs" />
    </div>
  );
}