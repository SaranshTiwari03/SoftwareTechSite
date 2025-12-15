import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { CompanyConfig } from '../../../theme/theme';
import styles from '../PlatformPage.module.css';

export default function GCP() {
  const [activeTab, setActiveTab] = useState('migration');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsListRef = useRef(null);
  const dividerRef = useRef(null);
  const companyName = CompanyConfig.name;

  const tabContent = {
    migration: {
      description: 'We help clients migrate, modernize and transform their data with GCP Cloud, the Google Cloud Platform service. Our migration specialists assess your infrastructure, design optimal architectures, and execute seamless transitions to Google Cloud with minimal business disruption while maximizing performance.'
    },
    analytics: {
      description: 'Leverage Google\'s powerful data analytics capabilities with BigQuery, Dataflow, and Looker. We build comprehensive data pipelines and analytics solutions that transform raw data into actionable business insights, enabling data-driven decision making at scale across your organization.'
    },
    innovation: {
      description: 'Harness Google\'s cutting-edge innovations including AI/ML services, Kubernetes-native architecture, and serverless computing. We help you stay ahead of the competition by implementing the latest cloud technologies that drive business growth and operational excellence.'
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
      question: "Why choose Google Cloud Platform?",
      answer: "GCP offers unique advantages for modern businesses:",
      points: [
        "Advanced AI and machine learning capabilities",
        "Superior big data analytics with BigQuery",
        "Kubernetes-native container orchestration",
        "Competitive pricing and sustained use discounts",
        "Global fiber network for low latency",
        "Strong commitment to sustainability"
      ]
    },
    {
      question: "What GCP services do you work with?",
      answer: "We specialize in Compute Engine, Google Kubernetes Engine (GKE), Cloud Functions, Cloud Run, BigQuery, Cloud SQL, Firestore, Cloud Storage, Vertex AI, Cloud Pub/Sub, and Google Cloud Operations Suite for comprehensive cloud solutions."
    },
    {
      question: "Can you migrate our applications to GCP?",
      answer: "Yes, we provide comprehensive migration services:",
      points: [
        "Assessment and migration planning",
        "Lift-and-shift or modernization approach",
        "Database migration to Cloud SQL or Firestore",
        "Application containerization",
        "Testing and validation",
        "Post-migration support and optimization"
      ]
    },
    {
      question: "How does GCP compare to AWS and Azure?",
      answer: "GCP excels in data analytics, machine learning, and Kubernetes management. It offers competitive pricing, live migration capabilities, and Google's innovative AI services. The choice depends on your specific requirements, existing infrastructure, and technical expertise."
    },
    {
      question: "What are the key benefits of migrating to GCP?",
      answer: "Migrating to Google Cloud Platform provides numerous advantages:",
      points: [
        "Advanced data analytics and machine learning capabilities",
        "Cost optimization with sustained use discounts and committed use contracts",
        "Superior performance with Google's global fiber network",
        "Enhanced security with Google's enterprise-grade infrastructure",
        "Seamless integration with Google Workspace and other Google services",
        "Live migration capabilities with minimal downtime"
      ],
      closing: "We help you maximize these benefits through strategic migration planning and implementation."
    },
    {
      question: "Do you provide GCP managed services?",
      answer: "Yes, we offer comprehensive GCP managed services including infrastructure monitoring, cost optimization, security management, performance tuning, backup and disaster recovery, and 24/7 technical support to ensure optimal cloud operations."
    }
  ];

  const seoData = pageSEO.gcp;

  return (
    <div className={styles.platformPage}>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/technologies/gcp"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      {/* Banner Section */}
      <ConsultationBanner data={allBanners['gcp']} />

      {/* Let's Connect Section - WHITE */}
      <section className={styles.connectSection}>
        <div className={styles.connectContainer}>
          <div className={styles.connectGrid}>
            <div className={styles.connectLeft}>
              <h1 className={styles.connectTitle}>
                Google Cloud Platform Services To Drive Innovation
              </h1>
            </div>
            <div className={styles.connectRight}>
              <p className={styles.connectDescription}>
                We help clients migrate, modernize and transform their data with GCP Cloud, the Google Cloud Platform service. Our GCP-certified experts leverage Google's cutting-edge technologies including advanced AI/ML, superior data analytics, and Kubernetes-native solutions to accelerate your digital transformation journey.
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
            What You Get From GCP Consulting
          </h2>
          
          <div className={styles.whyHireContent}>
            {/* Tabs on LEFT */}
            <div className={styles.tabsList} ref={tabsListRef}>
              <button
                className={`${styles.tabButton} ${activeTab === 'migration' ? styles.active : ''}`}
                onClick={() => setActiveTab('migration')}
              >
                Cloud Migration & Modernization
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'analytics' ? styles.active : ''}`}
                onClick={() => setActiveTab('analytics')}
              >
                Big Data & Analytics
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'innovation' ? styles.active : ''}`}
                onClick={() => setActiveTab('innovation')}
              >
                Innovation & AI/ML
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
                {companyName}'s Google Cloud Platform Services
              </h2>
            </div>
            <div className={styles.descriptiveRight}>
              <p className={styles.descriptiveText}>
                {companyName}'s comprehensive GCP offerings start with infrastructure assessment and strategic planning. Our services include cloud-native application development, containerization with GKE, big data analytics implementation, AI/ML model deployment, and ongoing managed services. We ensure your Google Cloud infrastructure is optimized for performance, cost-efficiency, and scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqData} title="Google Cloud Platform FAQs" />
    </div>
  );
}