import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import ScheduleCallModal from '../../../components/ScheduleCallModal/ScheduleCallModal';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { CompanyConfig, PricingConfig } from '../../../theme/theme';
import styles from './CustomSoftware.module.css';

export default function ERPSolution() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const companyName = CompanyConfig.name;

  const faqData = [
    {
      question: "What ERP modules can you develop?",
      answer: `We develop comprehensive ERP modules tailored to your business:`,
      points: [
        `Financial Management (accounting, billing, invoicing)`,
        `Inventory & Warehouse Management`,
        `Manufacturing & Production Planning`,
        `Supply Chain Management`,
        `Human Resources & Payroll`,
        `Sales & Distribution`,
        `Procurement & Purchase Orders`,
        `Customer Relationship Management`,
        `Business Intelligence & Reporting`,
        `Custom modules specific to your industry`
      ]
    },
    {
      question: "How long does ERP implementation take?",
      answer: "Implementation timeline varies by scope:",
      points: [
        "Basic ERP: 6-9 months",
        "Medium complexity: 9-15 months",
        "Enterprise ERP: 15-24 months"
      ],
      closing: "We use agile methodology for faster deployment and iterations."
    },
    {
      question: "Can you migrate data from our existing systems?",
      answer: "Yes! We provide comprehensive data migration services including data cleansing, mapping, validation, and secure transfer from legacy systems to your new ERP platform."
    },
    {
      question: "Which ERP modules do you develop?",
      answer: "We develop all major ERP modules including Financial Management, Inventory Management, HR & Payroll, Manufacturing, Supply Chain, Sales & Distribution, and more based on your needs."
    },
    {
      question: "Is cloud-based or on-premise ERP better?",
      answer: "It depends on your requirements. Cloud-based ERP offers lower upfront costs, scalability, and remote access. On-premise provides more control and customization. We help you choose the best option."
    }
  ];

  const seoData = pageSEO.erpSolution;

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/services/custom-software/erp"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      <ConsultationBanner data={allBanners['erp-solution']} />

      {/* Section 1: Features Grid - WHITE */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>
              Why Choose <span className={styles.highlight}>{companyName}</span> for ERP Development?
            </h1>
            <p className={styles.sectionSubtitle}>
              Build comprehensive ERP systems that unify all your business processes
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>💰</div>
              <h2 className={styles.featureCardTitle}>Financial Management</h2>
              <p className={styles.featureCardDescription}>
                Complete accounting, billing, invoicing, and financial reporting in one integrated system
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>📦</div>
              <h2 className={styles.featureCardTitle}>Inventory Control</h2>
              <p className={styles.featureCardDescription}>
                Real-time inventory tracking, warehouse management, and stock optimization
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>🏭</div>
              <h2 className={styles.featureCardTitle}>Manufacturing Management</h2>
              <p className={styles.featureCardDescription}>
                Production planning, quality control, and manufacturing operations management
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>👥</div>
              <h2 className={styles.featureCardTitle}>HR & Payroll</h2>
              <p className={styles.featureCardDescription}>
                Employee management, attendance tracking, payroll processing, and performance reviews
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>🚚</div>
              <h2 className={styles.featureCardTitle}>Supply Chain Management</h2>
              <p className={styles.featureCardDescription}>
                End-to-end supply chain visibility from procurement to delivery
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>📊</div>
              <h2 className={styles.featureCardTitle}>Business Intelligence</h2>
              <p className={styles.featureCardDescription}>
                Advanced analytics, dashboards, and reporting for data-driven decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Tech Stack - GRAY */}
      <section className={styles.techStackSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Technologies We Use for ERP Development</h2>
            <p className={styles.sectionSubtitle}>
              Enterprise-grade technology stack for robust ERP systems
            </p>
          </div>

          <div className={styles.techGrid}>
            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
                  alt="Java"
                />
              </div>
              <p className={styles.techName}>Java</p>
            </div>

            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" 
                  alt=".NET"
                />
              </div>
              <p className={styles.techName}>.NET</p>
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
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" 
                  alt="Oracle"
                />
              </div>
              <p className={styles.techName}>Oracle</p>
            </div>

            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" 
                  alt="SQL Server"
                />
              </div>
              <p className={styles.techName}>SQL Server</p>
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
          </div>
        </div>
      </section>

      {/* Section 3: Two Column Content - WHITE */}
      <section className={styles.twoColumnSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.columnImage}>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" 
                alt="ERP Development"
              />
            </div>

            <div className={styles.columnContent}>
              <h3>Enterprise ERP Solutions That Scale</h3>
              <p>
                Managing multiple business processes across departments can be challenging without the right system. Our custom ERP solutions integrate all your business operations into one unified platform, providing real-time visibility and control.
              </p>
              <p>
                From financial management to supply chain operations, we build ERP systems that streamline workflows, eliminate data silos, and improve decision-making across your organization.
              </p>
              <ul>
                <li>Modular architecture for flexible implementation</li>
                <li>Real-time data synchronization across modules</li>
                <li>Role-based access control and security</li>
                <li>Mobile access for on-the-go management</li>
                <li>Automated workflows and approvals</li>
                <li>Comprehensive reporting and analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Process - DARK */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our ERP Development Process</h2>
            <p className={styles.sectionSubtitle}>
              A structured approach to successful ERP implementation
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>01</div>
              <h3 className={styles.processTitle}>Business Assessment</h3>
              <p className={styles.processDescription}>
                Analyze your business processes, pain points, and requirements across all departments.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>02</div>
              <h3 className={styles.processTitle}>Module Selection</h3>
              <p className={styles.processDescription}>
                Identify and prioritize ERP modules based on your business needs and budget.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>03</div>
              <h3 className={styles.processTitle}>System Design</h3>
              <p className={styles.processDescription}>
                Design the ERP architecture, database structure, and integration framework.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>04</div>
              <h3 className={styles.processTitle}>Development & Testing</h3>
              <p className={styles.processDescription}>
                Build ERP modules iteratively with continuous testing and quality assurance.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>05</div>
              <h3 className={styles.processTitle}>Data Migration</h3>
              <p className={styles.processDescription}>
                Migrate data from legacy systems with validation and verification processes.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>06</div>
              <h3 className={styles.processTitle}>Training & Deployment</h3>
              <p className={styles.processDescription}>
                Train users, deploy the system, and provide ongoing support and enhancements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqData} title="ERP Development FAQs" />

      {/* Section 5: Final CTA - DARK */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Build Your Custom ERP?</h2>
            <p className={styles.ctaDescription}>
              Unify your business operations with a comprehensive ERP system tailored to your processes. Let's transform how you manage your enterprise.
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
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" 
              alt="ERP Solution"
            />
          </div>
        </div>
      </section>

      <ScheduleCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}