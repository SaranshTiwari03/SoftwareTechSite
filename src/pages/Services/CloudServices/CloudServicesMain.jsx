import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import { allBanners } from '../../../data/allBannersData';
import { CompanyConfig } from '../../../theme/theme';
import styles from './CloudServices.module.css';

export default function CloudServicesMain() {
  const [activeTab, setActiveTab] = useState('scalability');
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
      title: 'Cloud Application Development',
      description: 'Build scalable, high-performance cloud-native applications tailored to your business needs.',
      icon: '☁️',
      link: '/services/cloud/app-development'
    },
    {
      title: 'Cloud Migration Services',
      description: 'Seamlessly migrate your existing infrastructure to the cloud with zero downtime.',
      icon: '🔄',
      link: '/services/cloud/migration'
    },
    {
      title: 'Cloud Support & Maintenance',
      description: '24/7 monitoring, support, and maintenance to keep your cloud infrastructure running smoothly.',
      icon: '🛠️',
      link: '/services/cloud/support'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Assessment & Planning',
      description: 'We analyze your current infrastructure and business requirements to create a comprehensive cloud strategy.'
    },
    {
      number: '02',
      title: 'Architecture Design',
      description: 'Our experts design a scalable, secure cloud architecture optimized for your specific needs.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We deploy and configure your cloud infrastructure following industry best practices.'
    },
    {
      number: '04',
      title: 'Migration & Integration',
      description: 'Seamless migration of your applications and data with minimal disruption to operations.'
    },
    {
      number: '05',
      title: 'Testing & Optimization',
      description: 'Rigorous testing and performance optimization to ensure everything runs flawlessly.'
    },
    {
      number: '06',
      title: 'Support & Monitoring',
      description: 'Ongoing 24/7 support and monitoring to maintain peak performance and security.'
    }
  ];

  const faqData = [
    {
      question: 'What cloud platforms do you work with?',
      answer: 'We are experts in all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform (GCP), Oracle Cloud, and SAP Cloud. We help you choose the best platform based on your specific requirements, budget, and existing technology stack.'
    },
    {
      question: 'How long does cloud migration take?',
      answer: 'The timeline varies based on the complexity of your infrastructure and the amount of data being migrated. A typical migration can take anywhere from:',
      points: [
        'Small businesses: 2-4 weeks',
        'Medium enterprises: 1-3 months',
        'Large enterprises: 3-6 months or more'
      ],
      closing: 'We provide a detailed timeline after the initial assessment.'
    },
    {
      question: 'Is cloud migration secure?',
      answer: 'Absolutely. Security is our top priority. We implement industry-leading security measures including encryption, access controls, compliance monitoring, and regular security audits. All major cloud platforms we work with are certified for various compliance standards including ISO 27001, SOC 2, HIPAA, and GDPR.'
    },
    {
      question: 'What are the cost benefits of moving to the cloud?',
      answer: 'Cloud services offer significant cost advantages:',
      points: [
        'No upfront hardware costs - pay only for what you use',
        'Reduced IT maintenance and operational expenses',
        'Automatic scaling eliminates over-provisioning',
        'Lower energy costs with cloud infrastructure',
        'Predictable monthly pricing models'
      ],
      closing: 'Most businesses see 20-40% cost savings within the first year.'
    },
    {
      question: 'Do you provide ongoing support after migration?',
      answer: 'Yes, we offer comprehensive 24/7 support and maintenance packages. This includes monitoring, performance optimization, security updates, troubleshooting, and regular backups. Our support team ensures your cloud infrastructure remains secure, efficient, and aligned with your business goals.'
    },
    {
      question: 'Can you migrate legacy applications to the cloud?',
      answer: 'Yes, we specialize in migrating legacy applications to the cloud. We assess your existing applications and determine the best migration strategy - whether it\'s rehosting (lift-and-shift), refactoring, or completely rebuilding as cloud-native applications. We ensure backward compatibility and minimal disruption to your operations.'
    }
  ];

  const tabContent = {
    scalability: {
      title: 'Infinite Scalability',
      description: 'Scale your infrastructure up or down instantly based on demand. Our cloud solutions automatically adjust resources to handle traffic spikes, ensuring optimal performance without over-provisioning.',
      features: [
        'Auto-scaling based on real-time metrics',
        'Load balancing across multiple servers',
        'Global content delivery networks',
        'Elastic resource allocation'
      ]
    },
    security: {
      title: 'Enterprise Security',
      description: 'Protect your data with military-grade security measures. We implement multi-layered security protocols, encryption, and compliance standards to keep your business safe.',
      features: [
        'End-to-end encryption',
        'Multi-factor authentication',
        'Regular security audits',
        'Compliance with industry standards'
      ]
    },
    costOptimization: {
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs by up to 40% with our intelligent cloud optimization strategies. Pay only for the resources you actually use.',
      features: [
        'Resource usage monitoring',
        'Automated cost analysis',
        'Reserved instance recommendations',
        'Spot instance utilization'
      ]
    }
  };

  return (
    <>
      <ConsultationBanner data={allBanners['cloud-services-main']} />

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <div className={styles.whyChooseGrid}>
            {/* Left: Tabs */}
            <div className={styles.tabsColumn}>
              <h2 className={styles.sectionTitle}>
                Why Choose {CompanyConfig.name} for Cloud Services?
              </h2>
              <p className={styles.sectionSubtitle}>
                We deliver enterprise-grade cloud solutions that drive business growth and innovation.
              </p>

              <div className={styles.tabsWrapper}>
                <div className={styles.tabsList} ref={tabsListRef}>
                  <button
                    onClick={() => setActiveTab('scalability')}
                    className={`${styles.tabButton} ${activeTab === 'scalability' ? styles.active : ''}`}
                  >
                    <span className={styles.tabIcon}>📈</span>
                    Scalability
                  </button>
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`${styles.tabButton} ${activeTab === 'security' ? styles.active : ''}`}
                  >
                    <span className={styles.tabIcon}>🔒</span>
                    Security
                  </button>
                  <button
                    onClick={() => setActiveTab('costOptimization')}
                    className={`${styles.tabButton} ${activeTab === 'costOptimization' ? styles.active : ''}`}
                  >
                    <span className={styles.tabIcon}>💰</span>
                    Cost Optimization
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

      {/* Sub-Services Grid Section */}
      <section className={styles.servicesGridSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Cloud Services</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive cloud solutions to accelerate your digital transformation
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {subServices.map((service, index) => (
              <Link to={service.link} key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <span className={styles.serviceArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms Section */}
      <section className={styles.platformsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Cloud Platforms We Leverage</h2>
            <p className={styles.sectionSubtitle}>
              We work with industry-leading cloud platforms to deliver the best solutions
            </p>
          </div>

          <div className={styles.platformsGrid}>
            <div className={styles.platformCard}>
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" 
                alt="AWS" 
                className={styles.platformLogo}
              />
              <h3 className={styles.platformName}>Amazon Web Services</h3>
              <p className={styles.platformDescription}>
                Industry leader with comprehensive services for computing, storage, databases, and machine learning.
              </p>
            </div>

            <div className={styles.platformCard}>
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" 
                alt="Azure" 
                className={styles.platformLogo}
              />
              <h3 className={styles.platformName}>Microsoft Azure</h3>
              <p className={styles.platformDescription}>
                Enterprise-grade cloud platform with seamless integration with Microsoft products and services.
              </p>
            </div>

            <div className={styles.platformCard}>
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" 
                alt="GCP" 
                className={styles.platformLogo}
              />
              <h3 className={styles.platformName}>Google Cloud Platform</h3>
              <p className={styles.platformDescription}>
                Advanced analytics and AI capabilities with Google's powerful infrastructure and data tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Cloud Implementation Process</h2>
            <p className={styles.sectionSubtitle}>
              A proven methodology for successful cloud adoption
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

      <FAQ faqs={faqData} title="Cloud Services FAQs" />

      {/* Final CTA Section */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.ctaGrid}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Transform Your Business with Cloud?</h2>
              <p className={styles.ctaDescription}>
                Let's discuss how our cloud solutions can help you reduce costs, improve scalability, and accelerate innovation. Our experts are ready to create a custom cloud strategy for your business.
              </p>
              <Link to="/contact" className={styles.ctaButton}>
                Get Started Today
                <span className={styles.buttonArrow}>→</span>
              </Link>
            </div>
            <div className={styles.ctaImage}>
              <div className={styles.ctaImagePlaceholder}>
                <span className={styles.ctaImageIcon}>☁️</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}