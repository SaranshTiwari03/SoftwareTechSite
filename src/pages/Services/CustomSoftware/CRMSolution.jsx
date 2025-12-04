import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import ScheduleCallModal from '../../../components/ScheduleCallModal/ScheduleCallModal';
import { allBanners } from '../../../data/allBannersData';
import { CompanyConfig, PricingConfig } from '../../../theme/theme';
import styles from './CustomSoftware.module.css';

export default function CRMSolution() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const companyName = CompanyConfig.name;

  const faqData = [
    {
      question: "What CRM features do you typically include?",
      answer: `Our custom CRM solutions include comprehensive features:`,
      points: [
        `Contact and lead management with custom fields`,
        `Sales pipeline and deal tracking`,
        `Email integration and tracking`,
        `Task management and reminders`,
        `Activity timeline and communication history`,
        `Custom reports and dashboards`,
        `Sales forecasting and analytics`,
        `Role-based permissions and access control`,
        `Mobile app for on-the-go access`
      ]
    },
    {
      question: "How long does it take to develop a custom CRM?",
      answer: "Development timeline varies based on complexity:",
      points: [
        "Basic CRM: 3-4 months",
        "Medium complexity: 5-7 months",
        "Enterprise CRM: 8-12 months"
      ]
    },
    {
      question: "Can you integrate our CRM with existing tools?",
      answer: "Yes! We specialize in integrating CRM systems with email platforms, calendar apps, accounting software, marketing automation tools, and other business applications you currently use."
    },
    {
      question: "Is the CRM data secure?",
      answer: "Absolutely! We implement enterprise-grade security measures including data encryption, role-based access control, secure authentication, regular backups, and compliance with data protection regulations."
    },
    {
      question: "Can the CRM be accessed on mobile devices?",
      answer: "Yes! We build responsive CRM systems that work seamlessly across desktop, tablet, and mobile devices, ensuring your team can access customer data anytime, anywhere."
    }
  ];

  return (
    <>
      <ConsultationBanner data={allBanners['crm-solution']} />

      {/* Section 1: Features Grid - WHITE */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Why Choose <span className={styles.highlight}>{companyName}</span> for CRM Development?
            </h2>
            <p className={styles.sectionSubtitle}>
              Build powerful CRM solutions that transform how you manage customer relationships
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>📊</div>
              <h3 className={styles.featureCardTitle}>Sales Pipeline Management</h3>
              <p className={styles.featureCardDescription}>
                Visualize and manage your entire sales process from lead to close with customizable pipeline stages
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>👥</div>
              <h3 className={styles.featureCardTitle}>Contact Management</h3>
              <p className={styles.featureCardDescription}>
                Centralize all customer information, interactions, and history in one accessible place
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>📧</div>
              <h3 className={styles.featureCardTitle}>Email Integration</h3>
              <p className={styles.featureCardDescription}>
                Sync emails, track communications, and manage campaigns directly from your CRM
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>📈</div>
              <h3 className={styles.featureCardTitle}>Analytics & Reporting</h3>
              <p className={styles.featureCardDescription}>
                Generate detailed reports and gain insights into sales performance and customer behavior
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>🔔</div>
              <h3 className={styles.featureCardTitle}>Task Automation</h3>
              <p className={styles.featureCardDescription}>
                Automate repetitive tasks, follow-ups, and workflows to save time and increase efficiency
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>🔗</div>
              <h3 className={styles.featureCardTitle}>Third-Party Integrations</h3>
              <p className={styles.featureCardDescription}>
                Connect with your favorite tools including email, calendar, accounting, and marketing platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Tech Stack - GRAY */}
      <section className={styles.techStackSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Technologies We Use for CRM Development</h2>
            <p className={styles.sectionSubtitle}>
              Modern tech stack for building robust and scalable CRM systems
            </p>
          </div>

          <div className={styles.techGrid}>
            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                  alt="React"
                />
              </div>
              <p className={styles.techName}>React</p>
            </div>

            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                  alt="Node.js"
                />
              </div>
              <p className={styles.techName}>Node.js</p>
            </div>

            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                  alt="Python"
                />
              </div>
              <p className={styles.techName}>Python</p>
            </div>

            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
                  alt="PostgreSQL"
                />
              </div>
              <p className={styles.techName}>PostgreSQL</p>
            </div>

            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
                  alt="MongoDB"
                />
              </div>
              <p className={styles.techName}>MongoDB</p>
            </div>

            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" 
                  alt="AWS"
                />
              </div>
              <p className={styles.techName}>AWS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Two Column Content - WHITE */}
      <section className={styles.twoColumnSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.columnContent}>
              <h3>Custom CRM Built for Your Business</h3>
              <p>
                Every business has unique processes and requirements. Off-the-shelf CRM solutions often force you to adapt your workflows to fit their limitations. Our custom CRM development ensures the software adapts to your business, not the other way around.
              </p>
              <p>
                We build CRM systems that streamline your sales processes, improve customer relationships, and provide actionable insights for growth. From lead generation to customer retention, our CRM solutions cover every aspect of customer relationship management.
              </p>
              <ul>
                <li>Tailored to your specific business processes</li>
                <li>Scalable architecture that grows with you</li>
                <li>Seamless integration with existing systems</li>
                <li>Mobile-responsive for on-the-go access</li>
                <li>Advanced security and data protection</li>
                <li>Ongoing support and feature enhancements</li>
              </ul>
            </div>

            <div className={styles.columnImage}>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop" 
                alt="CRM Development"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Process - DARK */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our CRM Development Process</h2>
            <p className={styles.sectionSubtitle}>
              A systematic approach to building your perfect CRM solution
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>01</div>
              <h3 className={styles.processTitle}>Business Analysis</h3>
              <p className={styles.processDescription}>
                Understand your sales processes, customer journey, and pain points to define CRM requirements.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>02</div>
              <h3 className={styles.processTitle}>System Design</h3>
              <p className={styles.processDescription}>
                Design the CRM architecture, database schema, user interface, and integration points.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>03</div>
              <h3 className={styles.processTitle}>Development</h3>
              <p className={styles.processDescription}>
                Build the CRM with features like contact management, sales pipeline, and automation.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>04</div>
              <h3 className={styles.processTitle}>Integration</h3>
              <p className={styles.processDescription}>
                Connect with email, calendar, accounting software, and other business tools you use.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>05</div>
              <h3 className={styles.processTitle}>Testing & Training</h3>
              <p className={styles.processDescription}>
                Comprehensive testing and user training to ensure smooth adoption by your team.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>06</div>
              <h3 className={styles.processTitle}>Launch & Support</h3>
              <p className={styles.processDescription}>
                Deploy the CRM and provide ongoing support, updates, and feature enhancements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqData} title="CRM Development FAQs" />

      {/* Section 5: Final CTA - DARK */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Build Your Custom CRM?</h2>
            <p className={styles.ctaDescription}>
              Transform how you manage customer relationships with a CRM system built specifically for your business. Let's create a solution that drives sales and improves customer satisfaction.
            </p>
            <div className={styles.ctaButtons}>
              <button 
                className={styles.primaryButton}
                onClick={() => navigate('/contact')}
              >
                Start Your Project
              </button>
              <button 
                className={styles.secondaryButton}
                onClick={() => setIsModalOpen(true)}
              >
                Schedule a Call
              </button>
            </div>
          </div>
          <div className={styles.ctaImage}>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop" 
              alt="CRM Solution"
            />
          </div>
        </div>
      </section>

      <ScheduleCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}