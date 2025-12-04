import React, { useState, useEffect, useRef } from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import { allBanners } from '../../../data/allBannersData';
import { CompanyConfig } from '../../../theme/theme';
import styles from '../TechnologyPage.module.css';

export default function DotNet() {
  const [activeTab, setActiveTab] = useState('devops');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsListRef = useRef(null);
  const dividerRef = useRef(null);
  const companyName = CompanyConfig.name;

  const tabContent = {
    devops: {
      description: 'Our development team implements Azure DevOps, automated deployments, and continuous integration to ensure efficient delivery of high-quality applications. We follow industry best practices for modern DevOps workflows to accelerate your software delivery cycle.'
    },
    agile: {
      description: 'We follow agile methodologies with sprint planning, daily standups, and continuous feedback. Our development process ensures transparency, flexibility, and timely delivery of features while maintaining Microsoft best practices and coding standards.'
    },
    techstack: {
      description: 'Our developers are experts in ASP.NET Core, .NET 6/7/8, Entity Framework Core, Blazor, Azure Services, SQL Server, and microservices architecture. We build modern, cross-platform applications that leverage the full power of the .NET ecosystem.'
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
      question: "Why choose .NET for enterprise application development?",
      answer: ".NET is ideal for enterprise applications because of:",
      points: [
        "High performance and scalability",
        "Strong security features built-in",
        "Cross-platform compatibility with .NET Core",
        "Extensive Microsoft ecosystem integration",
        "Robust framework for complex business logic",
        "Long-term support and stability"
      ]
    },
    {
      question: "What .NET technologies do you work with?",
      answer: "We specialize in ASP.NET Core, .NET 6/7/8, Blazor, Entity Framework Core, Web API, SignalR, and Azure cloud services. We stay updated with the latest .NET releases and best practices to deliver modern solutions."
    },
    {
      question: "Can you migrate legacy .NET Framework applications?",
      answer: "Yes, we provide comprehensive migration services from .NET Framework to .NET Core/.NET 6+. This includes code refactoring, dependency updates, testing, and deployment to ensure a smooth transition with improved performance and cross-platform capabilities."
    },
    {
      question: "Is .NET suitable for cloud applications?",
      answer: "Absolutely! .NET is excellent for cloud-native applications, especially with Azure integration:",
      points: [
        "Native Azure services support",
        "Containerization with Docker",
        "Microservices architecture",
        "Serverless functions with Azure Functions",
        "Seamless scaling and deployment"
      ]
    },
    {
      question: "How secure are .NET applications?",
      answer: ".NET provides enterprise-grade security features including built-in authentication, authorization, data protection, HTTPS enforcement, and regular security updates from Microsoft. We implement additional security layers following OWASP guidelines."
    },
    {
      question: "What is the typical timeline for .NET application development?",
      answer: "Development timelines vary based on project complexity:",
      points: [
        "Simple web applications: 2-3 months",
        "Medium complexity solutions: 4-6 months",
        "Enterprise applications with integrations: 6-12 months",
        "Cloud-native microservices: 8-15 months",
        "We follow agile methodology with 2-week sprints",
        "Timeline includes design, development, testing, and deployment"
      ]
    }
  ];

  return (
    <div className={styles.techPage}>
      {/* Banner Section */}
      <ConsultationBanner data={allBanners['dotnet']} />

      {/* Why Hire Section - NOW FIRST */}
      <section className={styles.whyHireSection}>
        <div className={styles.whyHireContainer}>
          <h2 className={styles.whyHireTitle}>
            Hire .NET Developers For Scalable Applications
          </h2>
          <p className={styles.whyHireSubtitle}>
            Our expert developers leverage the .NET platform to build robust enterprise solutions that power core business systems, delivering high-performance applications with security and scalability at their foundation.
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

      {/* Blue Description Section - NOW SECOND */}
      <section className={styles.descriptionSection}>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionContent}>
            <div className={styles.descriptionLeft}>
              <h2 className={styles.descriptionTitle}>
                .NET Development Services For Enterprise Solutions
              </h2>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Cross-platform development</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>High performance</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Enterprise security</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Azure integration</span>
                </li>
              </ul>
            </div>
            <div className={styles.descriptionRight}>
              <p>
                .NET is a powerful, versatile framework from Microsoft for building modern applications. With .NET Core and the unified .NET platform, you can build web applications, APIs, mobile apps, desktop applications, and cloud services. Our experienced .NET developers create scalable, secure, and high-performance solutions that meet enterprise standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqData} title=".NET Development FAQs" />
    </div>
  );
}