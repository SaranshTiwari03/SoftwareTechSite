import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import { allBanners } from '../../../data/allBannersData';
import { CompanyConfig } from '../../../theme/theme';
import styles from '../PlatformPage.module.css';

export default function Azure() {
  const [activeTab, setActiveTab] = useState('infrastructure');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsListRef = useRef(null);
  const dividerRef = useRef(null);
  const companyName = CompanyConfig.name;

  const tabContent = {
    infrastructure: {
      description: `${companyName}'s Azure consulting services offer businesses with both Infrastructure-as-a-Service (IaaS) and Platform-as-a-Service (PaaS) capabilities, allowing them to develop, deploy and manage applications on the cloud. With ${companyName}'s proficiency in Azure, businesses can influence the authority of the cloud to generate advanced solutions and stay in advance of the competition.`
    },
    scalability: {
      description: 'Azure provides exceptional scalability options that grow with your business needs. Our experts design cloud architectures that automatically scale resources up or down based on demand, ensuring optimal performance during peak times while minimizing costs during low-traffic periods, delivering maximum efficiency and cost-effectiveness.'
    },
    capabilities: {
      description: 'Leverage Azure\'s comprehensive IaaS and PaaS capabilities to modernize your applications and infrastructure. We help you choose the right Azure services, from virtual machines and containers to serverless computing and managed databases, creating solutions that perfectly match your business requirements and drive digital transformation.'
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
      question: "Why choose Azure for cloud infrastructure?",
      answer: "Azure offers numerous advantages for businesses:",
      points: [
        "Seamless integration with Microsoft products",
        "Global presence with 60+ regions",
        "Enterprise-grade security and compliance",
        "Hybrid cloud capabilities",
        "Comprehensive AI and ML services",
        "Cost-effective pricing models"
      ]
    },
    {
      question: "What Azure services do you specialize in?",
      answer: "We specialize in Azure App Services, Azure Functions, Azure Kubernetes Service (AKS), Azure SQL Database, Azure Cosmos DB, Azure Storage, Azure DevOps, Azure Active Directory, and Azure AI/ML services."
    },
    {
      question: "Can you migrate our existing applications to Azure?",
      answer: "Yes, we provide end-to-end cloud migration services:",
      points: [
        "Assessment and planning",
        "Application modernization",
        "Database migration",
        "Testing and validation",
        "Cutover and go-live support",
        "Post-migration optimization"
      ]
    },
    {
      question: "How do you ensure Azure security?",
      answer: "We implement multiple layers of security including Azure Security Center, Azure Active Directory, encryption at rest and in transit, network security groups, Azure Firewall, DDoS protection, and regular security audits following Microsoft best practices."
    },
    {
      question: "What is the typical timeline for Azure implementation?",
      answer: "Azure implementation timelines vary based on scope:",
      points: [
        "Basic cloud setup: 2-4 weeks",
        "Application migration: 1-3 months",
        "Enterprise migration: 3-6 months",
        "Complex multi-region deployment: 6-12 months",
        "Timeline includes assessment, planning, migration, testing, and optimization",
        "We use phased approaches to minimize business disruption"
      ]
    },
    {
      question: "Do you provide Azure managed services?",
      answer: "Yes, we offer comprehensive Azure managed services including 24/7 monitoring, performance optimization, cost management, security updates, backup and disaster recovery, and technical support to ensure your Azure infrastructure runs optimally."
    }
  ];

  return (
    <div className={styles.platformPage}>
      {/* Banner Section */}
      <ConsultationBanner data={allBanners['azure']} />

      {/* Let's Connect Section - WHITE */}
      <section className={styles.connectSection}>
        <div className={styles.connectContainer}>
          <div className={styles.connectGrid}>
            <div className={styles.connectLeft}>
              <h2 className={styles.connectTitle}>
                MS Azure Consulting Services To Build Flexible Ecosystems Of Data
              </h2>
            </div>
            <div className={styles.connectRight}>
              <p className={styles.connectDescription}>
                {companyName}'s MS Azure Consulting services are designed to help future-oriented businesses build scalable data infrastructure on the MS Azure cloud. Our fail-proof cloud architecture design combined with comprehensive cloud integrations enable clients to achieve the highest performance and efficiency standards and considerably reduce infrastructure costs.
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
            What You Get From MS Azure Consulting
          </h2>
          
          <div className={styles.whyHireContent}>
            {/* Tabs on LEFT */}
            <div className={styles.tabsList} ref={tabsListRef}>
              <button
                className={`${styles.tabButton} ${activeTab === 'infrastructure' ? styles.active : ''}`}
                onClick={() => setActiveTab('infrastructure')}
              >
                Superfast cloud infrastructure
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'scalability' ? styles.active : ''}`}
                onClick={() => setActiveTab('scalability')}
              >
                Scalability options
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'capabilities' ? styles.active : ''}`}
                onClick={() => setActiveTab('capabilities')}
              >
                IAAS & PAAS capabilities
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
                {companyName}'s Microsoft Azure Consulting Services
              </h2>
            </div>
            <div className={styles.descriptiveRight}>
              <p className={styles.descriptiveText}>
                {companyName} leading full-cycle and standalone offerings in the Microsoft Azure cloud start with a comprehensive audit. Here what you get when you partner with {companyName} for Azure Migration and Implementation. Full-cycle Microsoft azure consultancy with a needs assessment. Post-deployment Azure cloud performance and cost audit. Product and solutions development on Microsoft Azure. Microsoft Azure cloud migration and implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqData} title="Azure Cloud FAQs" />
    </div>
  );
}