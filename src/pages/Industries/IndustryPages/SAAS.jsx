import React, { useState } from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import { allBanners } from '../../../data/allBannersData';
import { Link } from 'react-router-dom';
import styles from '../IndustryPage.module.css';

export default function SAAS() {
  const [activeProcess, setActiveProcess] = useState(0);

  const comprehensiveServices = [
    {
      title: 'Multi-Tenant SaaS Architecture',
      description: 'Build scalable SaaS platforms with robust multi-tenant architecture that isolates customer data while optimizing resource utilization. Our solutions support multiple subscription tiers, custom branding, role-based access control, and seamless tenant management for efficient SaaS operations and growth.'
    },
    {
      title: 'SaaS Product Development',
      description: 'End-to-end development of cloud-based SaaS products from concept to launch. We create intuitive, feature-rich applications with subscription management, user onboarding, analytics dashboards, and integration capabilities. Our solutions are designed for rapid deployment, easy scaling, and continuous iteration based on user feedback.'
    },
    {
      title: 'API-First SaaS Solutions',
      description: 'Developer-friendly SaaS platforms built with API-first architecture for seamless third-party integrations and extensibility. Comprehensive REST APIs, webhooks, SDKs, and documentation enable customers to integrate your SaaS product into their existing workflows and build custom solutions on top of your platform.'
    },
    {
      title: 'SaaS Migration & Modernization',
      description: 'Transform legacy applications into modern cloud-based SaaS solutions with minimal disruption. Our migration services include architecture redesign, data migration, feature enhancement, and cloud optimization to help you transition from on-premise to SaaS delivery model while improving performance and reducing costs.'
    },
    {
      title: 'Enterprise SaaS Solutions',
      description: 'Build enterprise-grade SaaS platforms with advanced security, compliance, and governance features. Solutions include SSO integration, audit logging, data encryption, compliance certifications (SOC 2, GDPR, HIPAA), enterprise billing, and dedicated support to meet the requirements of large organizations and regulated industries.'
    }
  ];

  const innovationFeatures = [
    {
      icon: '✓',
      title: 'Subscription Management',
      description: 'Flexible pricing tiers, billing cycles, and automated payment processing.'
    },
    {
      icon: '✓',
      title: 'Multi-Tenancy',
      description: 'Secure data isolation with shared infrastructure for cost efficiency.'
    },
    {
      icon: '✓',
      title: 'API & Integrations',
      description: 'RESTful APIs and pre-built integrations with popular business tools.'
    },
    {
      icon: '✓',
      title: 'Analytics Dashboard',
      description: 'Real-time insights into usage, performance, and customer behavior.'
    },
    {
      icon: '✓',
      title: 'Auto-Scaling',
      description: 'Cloud infrastructure that scales automatically based on demand.'
    },
    {
      icon: '✓',
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance certifications.'
    }
  ];

  const developmentProcess = [
    {
      title: 'Market Research',
      description: 'Analyze target market, competitors, and define unique value proposition.',
      icon: '🔍'
    },
    {
      title: 'Architecture Design',
      description: 'Design scalable cloud architecture with multi-tenancy and security.',
      icon: '⚙️'
    },
    {
      title: 'MVP Development',
      description: 'Build minimum viable product with core features for early validation.',
      icon: '🎨'
    },
    {
      title: 'Full Product Build',
      description: 'Develop complete SaaS platform with all planned features and integrations.',
      icon: '💻'
    },
    {
      title: 'Testing & Optimization',
      description: 'Comprehensive testing for performance, security, and user experience.',
      icon: '✅'
    },
    {
      title: 'Launch & Scale',
      description: 'Deploy to production with monitoring, support, and continuous improvements.',
      icon: '🚀'
    }
  ];

  const faqData = [
    {
      question: 'What types of SaaS applications do you develop?',
      answer: 'We build diverse SaaS solutions across industries:',
      points: [
        'CRM and sales automation platforms',
        'Project management and collaboration tools',
        'HR and workforce management systems',
        'Marketing automation and analytics platforms',
        'Accounting and financial management software',
        'Customer support and help desk solutions',
        'E-learning and training platforms',
        'Industry-specific vertical SaaS applications'
      ]
    },
    {
      question: 'What is the development timeline for SaaS products?',
      answer: 'Development timelines depend on product complexity and scope:',
      points: [
        'Simple SaaS MVP: 3-6 months (core features for validation)',
        'Mid-level SaaS platform: 6-12 months (full feature set)',
        'Complex enterprise SaaS: 12-18 months (advanced features, integrations)',
        'Advanced SaaS with AI/ML: 18-24 months (predictive analytics)',
        'Timeline includes ongoing feature updates and improvements',
        'We use agile methodology with 2-week sprints for rapid iteration'
      ]
    },
    {
      question: 'What technologies do you use for SaaS development?',
      answer: 'We leverage modern cloud-native technology stack:',
      points: [
        'Frontend: React, Vue.js, Angular for responsive interfaces',
        'Backend: Node.js, Python, Ruby on Rails, .NET Core',
        'Database: PostgreSQL, MongoDB, MySQL, Redis',
        'Cloud: AWS, Azure, Google Cloud Platform',
        'DevOps: Docker, Kubernetes, CI/CD pipelines',
        'Payment: Stripe, PayPal, Chargebee integration',
        'Monitoring: DataDog, New Relic, Sentry'
      ]
    },
    {
      question: 'How do you ensure SaaS security and compliance?',
      answer: 'We implement comprehensive security measures:',
      points: [
        'Data encryption at rest and in transit',
        'Regular security audits and penetration testing',
        'SOC 2, GDPR, HIPAA compliance implementation',
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Automated backup and disaster recovery',
        'Security monitoring and incident response',
        'Regular security updates and patches'
      ]
    }
  ];

  return (
    <>
      <ConsultationBanner data={allBanners['saas']} />

      {/* Comprehensive Services Section */}
      <section className={styles.comprehensiveSection}>
        <div className={styles.container}>
          <div className={styles.comprehensiveGrid}>
            <div className={styles.comprehensiveLeft}>
              <h2 className={styles.comprehensiveTitle}>
                Comprehensive <span className={styles.orange}>SaaS App Development</span> Services
              </h2>
              <p className={styles.comprehensiveDescription}>
                We deliver scalable, secure, and feature-rich SaaS solutions that transform business operations and drive recurring revenue. Our cloud-native platforms are built with modern architecture, intelligent automation, and seamless integrations to help you launch and scale your SaaS business successfully in competitive markets.
              </p>
              <Link to="/contact" className={styles.comprehensiveButton}>
                Built My App
              </Link>
            </div>

            <div className={styles.comprehensiveRight}>
              <div className={styles.scrollIndicator}>
                <div className={styles.scrollTrack}>
                  <div className={styles.scrollThumb}></div>
                </div>
              </div>
              <div className={styles.servicesScroll}>
                {comprehensiveServices.map((service, index) => (
                  <div key={index} className={styles.serviceCard}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Features Section */}
      <section className={styles.innovationSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Building SaaS Success with <span className={styles.orange}>Essential Features</span>
          </h2>
          <p className={styles.sectionDescription}>
            Our SaaS applications integrate critical features designed to accelerate growth, ensure scalability, and deliver exceptional user experiences. These capabilities form the foundation of successful cloud-based software businesses.
          </p>

          <div className={styles.featuresGrid}>
            {innovationFeatures.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.processSectionTitle}>
            Streamlined <span className={styles.orange}>SaaS Development</span> Process
          </h2>
          <p className={styles.processSectionDescription}>
            As a trusted SaaS development company, we follow a proven methodology to create scalable, market-ready SaaS products that solve real problems and generate sustainable recurring revenue.
          </p>

          <div className={styles.processContainer}>
            <div className={styles.processSteps}>
              {developmentProcess.map((step, index) => (
                <div
                  key={index}
                  className={`${styles.processStep} ${activeProcess === index ? styles.activeStep : ''}`}
                  onClick={() => setActiveProcess(index)}
                >
                  {step.title}
                </div>
              ))}
            </div>

            <div className={styles.processContent}>
              <div className={styles.processCircle}></div>
              <div className={styles.processIcon}>{developmentProcess[activeProcess].icon}</div>
              <h3 className={styles.processTitle}>{developmentProcess[activeProcess].title}</h3>
              <p className={styles.processDescription}>{developmentProcess[activeProcess].description}</p>
              <Link to="/contact" className={styles.processButton}>
                Talk to Our Experts
              </Link>
              <div className={styles.processArrow}>›</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqData} title="SaaS Development FAQs" />

      {/* Final CTA Section - FIXED WITH STOCK IMAGE */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.finalCTAContent}>
            <div className={styles.finalCTALeft}>
              <h2 className={styles.finalCTATitle}>
                Launch Your <span className={styles.orange}>SaaS Product</span>
              </h2>
              <p className={styles.finalCTADescription}>
                Build scalable cloud-based SaaS solutions that drive recurring revenue and business growth.
              </p>
              <Link to="/contact" className={styles.finalCTAButton}>
                Start Your SaaS Project
              </Link>
            </div>
            <div className={styles.finalCTARight}>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80" 
                alt="SaaS Development" 
                className={styles.finalCTAImage} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}