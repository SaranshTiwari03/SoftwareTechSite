import { useState } from 'react';
import { Link } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { CompanyConfig } from '../../../theme/theme';
import styles from './CloudServices.module.css';

export default function CloudSupportMaintenance() {
  const [activeSupportTab, setActiveSupportTab] = useState(0);

  const supportServices = [
    {
      icon: '🔍',
      title: '24/7 Monitoring',
      description: 'Round-the-clock monitoring of your cloud infrastructure to detect and resolve issues before they impact your business.'
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Continuous performance tuning to ensure your applications run at peak efficiency with optimal resource utilization.'
    },
    {
      icon: '🔒',
      title: 'Security Management',
      description: 'Proactive security monitoring, patch management, and compliance maintenance to keep your systems secure.'
    },
    {
      icon: '💾',
      title: 'Backup & Recovery',
      description: 'Automated backup solutions with tested disaster recovery procedures to protect your critical data.'
    },
    {
      icon: '💰',
      title: 'Cost Optimization',
      description: 'Regular cost analysis and optimization recommendations to reduce cloud spending without sacrificing performance.'
    },
    {
      icon: '📊',
      title: 'Reporting & Analytics',
      description: 'Detailed reports on system health, performance metrics, and cost analysis to help you make informed decisions.'
    }
  ];

  const supportLevels = [
    {
      name: 'Basic Support',
      description: 'Essential support for small to medium workloads',
      features: [
        'Business hours support (9 AM - 6 PM)',
        'Email and ticket-based support',
        '4-hour response time',
        'Monthly performance reports',
        'Basic monitoring and alerts',
        'Quarterly optimization reviews'
      ],
      highlighted: false
    },
    {
      name: 'Professional Support',
      description: 'Comprehensive support for growing businesses',
      features: [
        '24/7 support availability',
        'Phone, email, and chat support',
        '1-hour response time',
        'Weekly performance reports',
        'Advanced monitoring and alerting',
        'Monthly optimization reviews',
        'Dedicated support engineer',
        'Proactive maintenance'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise Support',
      description: 'Premium support for mission-critical systems',
      features: [
        '24/7/365 priority support',
        'All communication channels',
        '15-minute response time',
        'Real-time dashboards',
        'Advanced monitoring with AI/ML',
        'Bi-weekly optimization reviews',
        'Dedicated support team',
        'Custom SLA agreements',
        'Architecture consultation',
        'Disaster recovery planning'
      ],
      highlighted: false
    }
  ];

  const maintenanceActivities = [
    {
      category: 'Proactive Maintenance',
      activities: [
        {
          name: 'System Health Checks',
          description: 'Regular system health assessments to identify potential issues before they occur.'
        },
        {
          name: 'Patch Management',
          description: 'Timely application of security patches and system updates to maintain security and stability.'
        },
        {
          name: 'Capacity Planning',
          description: 'Monitor resource usage and plan for scaling to prevent performance bottlenecks.'
        },
        {
          name: 'Security Audits',
          description: 'Regular security assessments and vulnerability scans to maintain robust security posture.'
        }
      ]
    },
    {
      category: 'Reactive Support',
      activities: [
        {
          name: 'Incident Response',
          description: 'Rapid response to system incidents with established escalation procedures.'
        },
        {
          name: 'Troubleshooting',
          description: 'Expert diagnosis and resolution of technical issues affecting your cloud infrastructure.'
        },
        {
          name: 'Emergency Fixes',
          description: 'Immediate attention to critical issues with dedicated resources for rapid resolution.'
        },
        {
          name: 'Root Cause Analysis',
          description: 'Detailed investigation of incidents to prevent recurrence and improve system reliability.'
        }
      ]
    },
    {
      category: 'Optimization Services',
      activities: [
        {
          name: 'Performance Tuning',
          description: 'Continuous optimization of application and infrastructure performance.'
        },
        {
          name: 'Cost Optimization',
          description: 'Regular analysis and recommendations to reduce cloud spending.'
        },
        {
          name: 'Resource Right-Sizing',
          description: 'Adjust resource allocation to match actual usage patterns and reduce waste.'
        },
        {
          name: 'Architecture Review',
          description: 'Periodic review of cloud architecture with improvement recommendations.'
        }
      ]
    }
  ];

  const whyChooseUs = [
    {
      title: 'Expert Team',
      description: 'Our certified cloud engineers have extensive experience managing complex cloud environments across all major platforms.',
      icon: '👥'
    },
    {
      title: 'Proven Processes',
      description: 'ITIL-based processes ensure consistent, reliable support with clear escalation paths and SLA compliance.',
      icon: '📋'
    },
    {
      title: 'Advanced Tools',
      description: 'We use industry-leading monitoring and management tools to proactively manage your cloud infrastructure.',
      icon: '🛠️'
    },
    {
      title: 'Transparent Communication',
      description: 'Regular status updates, detailed reports, and clear communication keep you informed at all times.',
      icon: '💬'
    },
    {
      title: 'Cost-Effective',
      description: 'Our support services often pay for themselves through cost optimization and prevention of expensive downtime.',
      icon: '💵'
    },
    {
      title: 'Flexible Engagement',
      description: 'Choose from flexible support packages that can be customized to match your specific requirements.',
      icon: '🔄'
    }
  ];

  const faqData = [
    {
      question: 'What does cloud support and maintenance include?',
      answer: 'Our cloud support and maintenance services include:',
      points: [
        '24/7 infrastructure monitoring and alerting',
        'Performance optimization and tuning',
        'Security patch management and updates',
        'Automated backup and disaster recovery',
        'Cost optimization and resource management',
        'Incident response and troubleshooting',
        'Regular health checks and reporting',
        'Capacity planning and scaling recommendations'
      ],
      closing: 'Support levels can be customized based on your specific needs and SLA requirements.'
    },
    {
      question: 'What are your response times?',
      answer: 'Response times vary by support level:',
      points: [
        'Basic Support: 4-hour response time during business hours',
        'Professional Support: 1-hour response time with 24/7 availability',
        'Enterprise Support: 15-minute response time for critical issues with dedicated team'
      ],
      closing: 'All support levels include escalation procedures for critical incidents.'
    },
    {
      question: 'Can you support multi-cloud environments?',
      answer: 'Yes, we have expertise across all major cloud platforms including AWS, Azure, Google Cloud, Oracle Cloud, and SAP Cloud. We can manage hybrid and multi-cloud environments, helping you optimize across platforms and maintain consistent security and performance standards.'
    },
    {
      question: 'How do you handle security and compliance?',
      answer: 'Security and compliance are core to our support services. We provide:',
      points: [
        'Regular security audits and vulnerability assessments',
        'Automated patch management for OS and applications',
        'Compliance monitoring for GDPR, HIPAA, SOC 2, etc.',
        'Security incident response and remediation',
        'Access control and identity management',
        'Encryption and data protection',
        'Regular compliance reporting'
      ]
    },
    {
      question: 'What if we need support outside business hours?',
      answer: 'Our Professional and Enterprise support packages include 24/7 availability. Even with Basic Support, we offer emergency support escalation for critical issues. We have global teams ensuring someone is always available when you need help.'
    },
    {
      question: 'Do you provide training for our team?',
      answer: 'Yes, we offer training and knowledge transfer as part of our support services. This includes documentation, best practices guides, and hands-on training sessions to help your team better understand and manage your cloud infrastructure. Enterprise packages include regular training sessions and architecture consultation.'
    }
  ];

  const seoData = pageSEO.cloudSupportMaintenance;

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/services/cloud/support"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      <ConsultationBanner data={allBanners['cloud-support']} />

      {/* Support Services Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Comprehensive Cloud Support Services</h1>
            <p className={styles.sectionSubtitle}>
              Keep your cloud infrastructure running smoothly with our expert support and maintenance
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {supportServices.map((service, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{service.icon}</div>
                <h2 className={styles.featureTitle}>{service.title}</h2>
                <p className={styles.featureDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Packages Section */}
      <section className={styles.pricingSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Choose Your Support Level</h2>
            <p className={styles.sectionSubtitle}>
              Flexible support plans designed to meet your business needs
            </p>
          </div>

          <div className={styles.pricingGrid}>
            {supportLevels.map((level, index) => (
              <div 
                key={index} 
                className={`${styles.pricingCard} ${level.highlighted ? styles.highlightedCard : ''}`}
              >
                {level.highlighted && <div className={styles.popularBadge}>Most Popular</div>}
                <h3 className={styles.packageName}>{level.name}</h3>
                <p className={styles.packageDescription}>{level.description}</p>
                <ul className={styles.featuresList}>
                  {level.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={styles.packageButton}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Activities Section */}
      <section className={styles.activitiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What We Do to Keep Your Cloud Running</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive maintenance activities to ensure optimal performance and reliability
            </p>
          </div>

          <div className={styles.activitiesAccordion}>
            {maintenanceActivities.map((category, catIndex) => (
              <div key={catIndex} className={styles.activityCategory}>
                <div 
                  className={styles.categoryHeader}
                  onClick={() => setActiveSupportTab(catIndex)}
                >
                  <h3 className={styles.categoryTitle}>{category.category}</h3>
                  <span className={styles.categoryIcon}>
                    {activeSupportTab === catIndex ? '−' : '+'}
                  </span>
                </div>
                {activeSupportTab === catIndex && (
                  <div className={styles.categoryContent}>
                    {category.activities.map((activity, actIndex) => (
                      <div key={actIndex} className={styles.activityItem}>
                        <h4 className={styles.activityName}>{activity.name}</h4>
                        <p className={styles.activityDescription}>{activity.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseUsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose {CompanyConfig.name} for Cloud Support?</h2>
            <p className={styles.sectionSubtitle}>
              Partner with experts who understand the critical importance of reliable cloud infrastructure
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            {whyChooseUs.map((reason, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{reason.icon}</div>
                <h3 className={styles.benefitTitle}>{reason.title}</h3>
                <p className={styles.benefitDescription}>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Content Section */}
      <section className={styles.twoColumnSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.contentColumn}>
              <h2 className={styles.columnTitle}>Peace of Mind with Professional Cloud Support</h2>
              <p className={styles.columnText}>
                Managing cloud infrastructure requires constant attention, specialized expertise, and proactive maintenance. Without proper support, small issues can quickly escalate into costly downtime and security vulnerabilities.
              </p>
              <p className={styles.columnText}>
                Our cloud support and maintenance services give you peace of mind knowing that certified cloud engineers are monitoring your infrastructure 24/7. We proactively identify and resolve issues before they impact your business, optimize performance and costs, and ensure your systems remain secure and compliant.
              </p>
              <p className={styles.columnText}>
                Whether you're running critical business applications, customer-facing services, or data-intensive workloads, our support team ensures your cloud infrastructure performs flawlessly. Focus on your core business while we handle the complexity of cloud management.
              </p>
              <div className={styles.ctaInline}>
                <Link to="/contact" className={styles.inlineButton}>
                  Discuss Your Support Needs
                  <span className={styles.buttonArrow}>→</span>
                </Link>
              </div>
            </div>
            <div className={styles.imageColumn}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.imageIcon}>🛠️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqData} title="Cloud Support & Maintenance FAQs" />

      {/* Final CTA Section */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.ctaGrid}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ensure Your Cloud Infrastructure Runs Flawlessly</h2>
              <p className={styles.ctaDescription}>
                Don't let cloud management challenges hold your business back. Partner with our expert team for reliable, professional cloud support and maintenance services. Get started with a free infrastructure assessment today.
              </p>
              <div className={styles.ctaButtons}>
                <Link to="/contact" className={styles.ctaButton}>
                  Start Your Support Plan
                  <span className={styles.buttonArrow}>→</span>
                </Link>
                <a href="tel:+1234567890" className={styles.ctaButtonSecondary}>
                  Speak with an Expert
                </a>
              </div>
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