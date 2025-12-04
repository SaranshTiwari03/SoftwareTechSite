import { useState } from 'react';
import { Link } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import { allBanners } from '../../../data/allBannersData';
import { CompanyConfig } from '../../../theme/theme';
import styles from './CloudServices.module.css';

export default function CloudMigrationServices() {
  const [activeMigrationStep, setActiveMigrationStep] = useState(0);

  const migrationBenefits = [
    {
      icon: '💰',
      title: 'Reduce Infrastructure Costs',
      description: 'Cut IT infrastructure costs by up to 40% by eliminating on-premise hardware and maintenance expenses.'
    },
    {
      icon: '📈',
      title: 'Improve Scalability',
      description: 'Scale resources up or down instantly based on demand without expensive hardware investments.'
    },
    {
      icon: '⚡',
      title: 'Enhance Performance',
      description: 'Leverage cloud infrastructure for faster application performance and better user experiences.'
    },
    {
      icon: '🔒',
      title: 'Strengthen Security',
      description: 'Benefit from enterprise-grade security features and compliance certifications of major cloud providers.'
    },
    {
      icon: '🌍',
      title: 'Enable Global Reach',
      description: 'Deploy applications across multiple regions for low latency and high availability worldwide.'
    },
    {
      icon: '🔄',
      title: 'Increase Agility',
      description: 'Deploy updates faster, innovate quickly, and respond to market changes with cloud flexibility.'
    }
  ];

  const migrationStrategies = [
    {
      name: 'Rehosting (Lift & Shift)',
      description: 'Migrate applications to the cloud with minimal changes, ideal for quick migrations.',
      icon: '🚚',
      bestFor: 'Legacy applications, time-sensitive migrations'
    },
    {
      name: 'Replatforming',
      description: 'Make minor optimizations to leverage cloud benefits without changing core architecture.',
      icon: '🔧',
      bestFor: 'Applications needing cloud optimization'
    },
    {
      name: 'Refactoring',
      description: 'Redesign applications to be cloud-native for maximum performance and scalability.',
      icon: '⚙️',
      bestFor: 'Mission-critical applications, long-term investment'
    },
    {
      name: 'Hybrid Migration',
      description: 'Combine on-premise and cloud infrastructure for optimal flexibility and compliance.',
      icon: '🔀',
      bestFor: 'Compliance-heavy industries, gradual migration'
    }
  ];

  const migrationProcess = [
    {
      phase: 'Assessment',
      title: 'Comprehensive Infrastructure Assessment',
      description: 'We analyze your current infrastructure, applications, and data to create a detailed migration roadmap.',
      deliverables: ['Infrastructure inventory', 'Dependency mapping', 'Cost-benefit analysis', 'Risk assessment', 'Migration strategy document']
    },
    {
      phase: 'Planning',
      title: 'Strategic Migration Planning',
      description: 'Develop a detailed migration plan with timelines, resource allocation, and risk mitigation strategies.',
      deliverables: ['Migration timeline', 'Resource allocation plan', 'Testing strategy', 'Rollback procedures', 'Communication plan']
    },
    {
      phase: 'Preparation',
      title: 'Cloud Environment Setup',
      description: 'Configure cloud infrastructure, set up security controls, and prepare the target environment.',
      deliverables: ['Cloud account setup', 'Network configuration', 'Security implementation', 'Access controls', 'Backup systems']
    },
    {
      phase: 'Migration',
      title: 'Phased Application Migration',
      description: 'Execute migration in carefully planned phases with minimal disruption to business operations.',
      deliverables: ['Data migration', 'Application deployment', 'Integration testing', 'Performance validation', 'User acceptance testing']
    },
    {
      phase: 'Optimization',
      title: 'Performance Optimization',
      description: 'Fine-tune cloud resources, optimize costs, and ensure peak performance of migrated applications.',
      deliverables: ['Resource optimization', 'Cost optimization', 'Performance tuning', 'Security hardening', 'Documentation']
    },
    {
      phase: 'Support',
      title: 'Ongoing Support & Monitoring',
      description: 'Provide continuous monitoring, support, and optimization to ensure long-term success.',
      deliverables: ['24/7 monitoring', 'Incident response', 'Regular reporting', 'Continuous optimization', 'Training & knowledge transfer']
    }
  ];

  const platforms = [
    {
      name: 'Amazon Web Services',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      description: 'Migrate to AWS for comprehensive cloud services, global infrastructure, and industry-leading tools.'
    },
    {
      name: 'Microsoft Azure',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      description: 'Seamless migration to Azure with excellent integration for Microsoft-based environments.'
    },
    {
      name: 'Google Cloud Platform',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
      description: 'Move to GCP for advanced data analytics, machine learning, and competitive pricing.'
    }
  ];

  const faqData = [
    {
      question: 'How long does cloud migration take?',
      answer: 'Migration timelines vary based on the complexity and size of your infrastructure:',
      points: [
        'Small businesses (10-50 VMs): 2-4 weeks',
        'Medium enterprises (50-200 VMs): 1-3 months',
        'Large enterprises (200+ VMs): 3-6 months',
        'Complex legacy systems: 6-12 months'
      ],
      closing: 'We provide a detailed timeline after completing the initial assessment phase.'
    },
    {
      question: 'What migration strategies do you recommend?',
      answer: 'We recommend different migration strategies based on your specific needs and goals:',
      points: [
        'Rehosting (Lift & Shift): Quick migration with minimal changes, ideal for legacy apps',
        'Replatforming: Minor optimizations to leverage cloud benefits without major redesign',
        'Refactoring: Full redesign for cloud-native architecture and maximum performance',
        'Hybrid Approach: Combine on-premise and cloud for compliance or gradual transition',
        'Phased Migration: Move applications incrementally to reduce risk'
      ],
      closing: 'We assess your infrastructure and recommend the optimal strategy for your business.'
    },
    {
      question: 'Will there be downtime during migration?',
      answer: 'We design migration strategies to minimize downtime. Depending on your requirements, we can offer:',
      points: [
        'Zero-downtime migration using parallel run strategies',
        'Scheduled maintenance windows for critical migrations',
        'Phased migration to reduce impact',
        'Rollback procedures for safety'
      ],
      closing: 'For most migrations, we can achieve near-zero downtime through careful planning and execution.'
    },
    {
      question: 'Is cloud migration secure?',
      answer: 'Security is our top priority. We implement comprehensive security measures throughout the migration process including:',
      points: [
        'Encrypted data transfer using industry standards',
        'Access controls and authentication',
        'Compliance with regulations (GDPR, HIPAA, etc.)',
        'Security audits and vulnerability assessments',
        'Backup and disaster recovery procedures'
      ],
      closing: 'All major cloud platforms we work with maintain the highest security certifications.'
    },
    {
      question: 'What happens to our existing data center?',
      answer: 'After successful migration and validation, you have several options for your existing infrastructure. We help you plan the decommissioning process, which includes secure data deletion, hardware disposal or repurposing, and proper documentation. Many clients maintain a hybrid approach initially, gradually reducing on-premise infrastructure as confidence in cloud operations grows.'
    },
    {
      question: 'Can we migrate incrementally or do we have to migrate everything at once?',
      answer: 'We strongly recommend phased migration approaches. You can migrate applications in stages, starting with non-critical workloads and gradually moving to mission-critical systems. This reduces risk, allows time for teams to adapt, and provides flexibility to adjust the strategy based on early results. Hybrid cloud setups are also an option for gradual transition.'
    },
    {
      question: 'What if something goes wrong during migration?',
      answer: 'We plan for contingencies with comprehensive rollback procedures. Every migration includes detailed testing, validation checkpoints, and backup systems. If issues arise, we can quickly revert to the previous state while we address problems. Our experienced team monitors migrations 24/7 to catch and resolve issues immediately.'
    }
  ];

  return (
    <>
      <ConsultationBanner data={allBanners['cloud-migration']} />

      {/* Migration Benefits Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Migrate to the Cloud?</h2>
            <p className={styles.sectionSubtitle}>
              Transform your business with cloud migration and unlock new opportunities for growth
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {migrationBenefits.map((benefit, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{benefit.icon}</div>
                <h3 className={styles.featureTitle}>{benefit.title}</h3>
                <p className={styles.featureDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Strategies Section */}
      <section className={styles.strategiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Migration Strategies</h2>
            <p className={styles.sectionSubtitle}>
              We tailor our approach to match your business needs and technical requirements
            </p>
          </div>

          <div className={styles.strategiesGrid}>
            {migrationStrategies.map((strategy, index) => (
              <div key={index} className={styles.strategyCard}>
                <div className={styles.strategyIcon}>{strategy.icon}</div>
                <h3 className={styles.strategyTitle}>{strategy.name}</h3>
                <p className={styles.strategyDescription}>{strategy.description}</p>
                <div className={styles.strategyMeta}>
                  <span className={styles.metaLabel}>Best for:</span>
                  <span className={styles.metaValue}>{strategy.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms Section */}
      <section className={styles.platformsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Cloud Platforms We Support</h2>
            <p className={styles.sectionSubtitle}>
              Migrate to the cloud platform that best fits your business needs
            </p>
          </div>

          <div className={styles.platformsGrid}>
            {platforms.map((platform, index) => (
              <div key={index} className={styles.platformCard}>
                <img 
                  src={platform.logo} 
                  alt={platform.name} 
                  className={styles.platformLogo}
                />
                <h3 className={styles.platformName}>{platform.name}</h3>
                <p className={styles.platformDescription}>{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our 6-Phase Migration Process</h2>
            <p className={styles.sectionSubtitle}>
              A proven methodology for successful cloud migration with minimal risk
            </p>
          </div>

          <div className={styles.migrationTimeline}>
            {migrationProcess.map((step, index) => (
              <div 
                key={index}
                className={`${styles.migrationPhase} ${activeMigrationStep === index ? styles.activePhase : ''}`}
                onClick={() => setActiveMigrationStep(index)}
              >
                <div className={styles.phaseHeader}>
                  <div className={styles.phaseNumber}>{String(index + 1).padStart(2, '0')}</div>
                  <div className={styles.phaseInfo}>
                    <span className={styles.phaseBadge}>{step.phase}</span>
                    <h3 className={styles.phaseTitle}>{step.title}</h3>
                  </div>
                </div>
                <p className={styles.phaseDescription}>{step.description}</p>
                <div className={styles.deliverables}>
                  <h4 className={styles.deliverablesTitle}>Key Deliverables:</h4>
                  <ul className={styles.deliverablesList}>
                    {step.deliverables.map((deliverable, idx) => (
                      <li key={idx} className={styles.deliverableItem}>
                        <span className={styles.deliverableBullet}>✓</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Content Section */}
      <section className={styles.twoColumnSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.imageColumn}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.imageIcon}>🔄</span>
              </div>
            </div>
            <div className={styles.contentColumn}>
              <h2 className={styles.columnTitle}>Zero-Risk Migration with {CompanyConfig.name}</h2>
              <p className={styles.columnText}>
                Cloud migration can be complex and risky if not done properly. That's why we've developed a proven methodology that ensures successful migrations with minimal disruption to your business operations.
              </p>
              <p className={styles.columnText}>
                Our team has successfully migrated hundreds of applications and petabytes of data to the cloud. We understand the challenges of legacy systems, data integrity, security concerns, and business continuity requirements.
              </p>
              <p className={styles.columnText}>
                With our phased approach, comprehensive testing, and 24/7 support during migration, we ensure your cloud journey is smooth, secure, and successful. We don't just move your infrastructure – we optimize it for cloud-native performance and cost-efficiency.
              </p>
              <div className={styles.columnStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>99.9%</div>
                  <div className={styles.statLabel}>Success Rate</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>40%</div>
                  <div className={styles.statLabel}>Avg Cost Reduction</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Migration Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqData} title="Cloud Migration FAQs" />

      {/* Final CTA Section */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.ctaGrid}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Start Your Cloud Migration Journey?</h2>
              <p className={styles.ctaDescription}>
                Let's discuss your migration goals and create a customized roadmap for your cloud transformation. Our experts will assess your infrastructure and provide a detailed migration plan with timelines and costs.
              </p>
              <div className={styles.ctaButtons}>
                <Link to="/contact" className={styles.ctaButton}>
                  Get Free Assessment
                  <span className={styles.buttonArrow}>→</span>
                </Link>
                <a href="tel:+1234567890" className={styles.ctaButtonSecondary}>
                  Talk to an Expert
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