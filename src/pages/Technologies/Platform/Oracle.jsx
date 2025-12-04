import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import { allBanners } from '../../../data/allBannersData';
import { CompanyConfig } from '../../../theme/theme';
import styles from '../PlatformPage.module.css';

export default function Oracle() {
  const [activeTab, setActiveTab] = useState('database');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsListRef = useRef(null);
  const dividerRef = useRef(null);
  const companyName = CompanyConfig.name;

  const tabContent = {
    database: {
      description: 'Our Oracle consulting services enable businesses to build and manage cloud applications with the right tools. We specialize in Oracle Database administration, performance tuning, backup and recovery, and migration services, ensuring your mission-critical data operates at peak efficiency with maximum reliability and security.'
    },
    autonomous: {
      description: 'Leverage Oracle Autonomous Database with revolutionary self-driving, self-securing, and self-repairing capabilities. We implement autonomous solutions that eliminate manual database management tasks, dramatically reduce operational costs, and provide unmatched reliability for your most demanding enterprise workloads.'
    },
    cloud: {
      description: 'Deploy applications on Oracle Cloud Infrastructure (OCI) for superior performance and cost efficiency. Our certified team architects complete cloud-native solutions using OCI\'s comprehensive services including compute, storage, networking, managed databases, and enterprise applications for end-to-end business transformation.'
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
      question: "Why choose Oracle for enterprise solutions?",
      answer: "Oracle provides comprehensive enterprise solutions:",
      points: [
        "Industry-leading database technology",
        "Integrated cloud applications and infrastructure",
        "High performance and reliability",
        "Advanced security features",
        "Comprehensive support and services",
        "Proven track record in enterprises"
      ]
    },
    {
      question: "What Oracle services do you provide?",
      answer: "We provide Oracle Database administration, Oracle Cloud Infrastructure deployment, Oracle APEX development, PL/SQL programming, database migration, performance tuning, backup and recovery, and Oracle ERP implementation services."
    },
    {
      question: "Can you migrate our databases to Oracle Cloud?",
      answer: "Yes, we provide end-to-end database migration services:",
      points: [
        "Assessment and migration planning",
        "Database conversion and migration",
        "Autonomous Database setup",
        "Performance optimization",
        "Testing and validation",
        "Post-migration support"
      ]
    },
    {
      question: "How does Oracle Autonomous Database work?",
      answer: "Oracle Autonomous Database uses machine learning to automate database management tasks including tuning, patching, upgrading, and backup. It eliminates manual database administration, reduces costs, and improves reliability with self-driving, self-securing, and self-repairing capabilities."
    },
    {
      question: "What are the costs of Oracle implementation?",
      answer: "Implementation costs vary based on scope and services:",
      points: [
        "Database setup: $10,000 - $30,000",
        "Cloud migration: $25,000 - $80,000",
        "ERP implementation: $100,000 - $500,000+",
        "Managed services: $3,000 - $15,000/month"
      ],
      closing: "We provide detailed cost analysis based on your requirements."
    },
    {
      question: "Do you provide Oracle database optimization?",
      answer: "Yes, we offer comprehensive database optimization services including query tuning, index optimization, partition strategies, storage optimization, resource management, and performance monitoring to ensure your Oracle databases run at peak efficiency."
    }
  ];

  return (
    <div className={styles.platformPage}>
      {/* Banner Section */}
      <ConsultationBanner data={allBanners['oracle']} />

      {/* Let's Connect Section - WHITE */}
      <section className={styles.connectSection}>
        <div className={styles.connectContainer}>
          <div className={styles.connectGrid}>
            <div className={styles.connectLeft}>
              <h2 className={styles.connectTitle}>
                Oracle Cloud & Database Services For Enterprise Excellence
              </h2>
            </div>
            <div className={styles.connectRight}>
              <p className={styles.connectDescription}>
                Our Oracle consulting services enable businesses to build and manage cloud applications with enterprise-grade database technology. We provide comprehensive Oracle solutions from database management to Oracle Cloud Infrastructure deployment and ERP implementation, ensuring your mission-critical systems deliver maximum performance and reliability.
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
            What You Get From Oracle Consulting
          </h2>
          
          <div className={styles.whyHireContent}>
            {/* Tabs on LEFT */}
            <div className={styles.tabsList} ref={tabsListRef}>
              <button
                className={`${styles.tabButton} ${activeTab === 'database' ? styles.active : ''}`}
                onClick={() => setActiveTab('database')}
              >
                Database Excellence
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'autonomous' ? styles.active : ''}`}
                onClick={() => setActiveTab('autonomous')}
              >
                Autonomous Operations
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'cloud' ? styles.active : ''}`}
                onClick={() => setActiveTab('cloud')}
              >
                Cloud Infrastructure (OCI)
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
                {companyName}'s Oracle Cloud & Database Services
              </h2>
            </div>
            <div className={styles.descriptiveRight}>
              <p className={styles.descriptiveText}>
                {companyName}'s Oracle services encompass full-cycle database administration, cloud migration to OCI, Autonomous Database implementation, and Oracle ERP deployment. We provide comprehensive needs assessment, performance optimization, cost audit, security hardening, and ongoing managed services to ensure your Oracle infrastructure delivers peak performance and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqData} title="Oracle Services FAQs" />
    </div>
  );
}