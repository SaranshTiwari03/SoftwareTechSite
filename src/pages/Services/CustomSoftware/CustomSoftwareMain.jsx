import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import ScheduleCallModal from '../../../components/ScheduleCallModal/ScheduleCallModal';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { CompanyConfig, PricingConfig } from '../../../theme/theme';
import styles from './CustomSoftware.module.css';

export default function CustomSoftwareMain() {
  const [activeTab, setActiveTab] = useState('crm');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tabsListRef = useRef(null);
  const dividerRef = useRef(null);
  const navigate = useNavigate();

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

  const companyName = CompanyConfig.name;

  const faqData = [
    {
      question: "How much does custom software development cost?",
      answer: `Custom software development costs vary based on complexity and requirements:`,
      points: [
        `Basic solutions: Starting from ${PricingConfig.currency}${PricingConfig.services.customSoftware.starting}`,
        `Enterprise systems: ${PricingConfig.currency}50,000 - ${PricingConfig.currency}2,00,000`,
        `Complex solutions: ${PricingConfig.currency}2,00,000+`
      ],
      closing: "Contact us for a detailed quote based on your specific needs."
    },
    {
      question: "How long does custom software development take?",
      answer: "Development timeline depends on project complexity:",
      points: [
        "Simple solutions: 3-4 months",
        "Medium complexity: 6-9 months",
        "Enterprise systems: 12+ months"
      ],
      closing: "We provide detailed project timelines during the consultation phase."
    },
    {
      question: "Do you provide post-development support?",
      answer: "Yes! We offer comprehensive post-launch support including bug fixes, updates, performance monitoring, security patches, and feature enhancements to ensure your software runs smoothly."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely! We specialize in creating software that seamlessly integrates with your existing infrastructure, databases, APIs, and third-party services."
    },
    {
      question: "What industries do you develop custom software for?",
      answer: "We develop custom software solutions for various industries including healthcare, finance, retail, manufacturing, logistics, education, and more. Our team has experience across multiple domains."
    }
  ];

  const seoData = pageSEO.customSoftwareMain;

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/services/custom-software"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      <ConsultationBanner data={allBanners['custom-software-main']} />

      {/* Section 1: Why Choose Us - WHITE with Tabs */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>
              Why Choose <span className={styles.highlight}>{companyName}</span> for Custom Software Development?
            </h1>
            <p className={styles.sectionSubtitle}>
              We build tailored software solutions that perfectly align with your business processes and drive operational efficiency
            </p>
          </div>

          <div className={styles.tabsContainer}>
            <div className={styles.tabsList} ref={tabsListRef}>
              <button
                onClick={() => setActiveTab('crm')}
                className={`${styles.tabButton} ${activeTab === 'crm' ? styles.active : ''}`}
              >
                CRM Solutions
              </button>
              <button
                onClick={() => setActiveTab('erp')}
                className={`${styles.tabButton} ${activeTab === 'erp' ? styles.active : ''}`}
              >
                ERP Systems
              </button>
              <button
                onClick={() => setActiveTab('cms')}
                className={`${styles.tabButton} ${activeTab === 'cms' ? styles.active : ''}`}
              >
                CMS Platforms
              </button>
            </div>

            <div className={styles.divider} ref={dividerRef}>
              <div style={{
                position: 'absolute',
                left: 0,
                width: '3px',
                background: 'var(--primary)',
                transition: 'all 0.3s ease',
                ...indicatorStyle
              }} />
            </div>

            <div className={styles.tabContent}>
              {activeTab === 'crm' && (
                <div className={styles.tabPane}>
                  <h2 className={styles.tabTitle}>Custom CRM Development</h2>
                  <p className={styles.tabDescription}>
                    Build powerful Customer Relationship Management systems that streamline your sales processes, improve customer engagement, and drive business growth. Our CRM solutions are tailored to your unique workflows and integrate seamlessly with your existing tools.
                  </p>
                  <ul className={styles.featureList}>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Sales Pipeline Management</strong>
                        <p>Track leads, opportunities, and deals through customized sales stages</p>
                      </div>
                    </li>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Customer Analytics</strong>
                        <p>Gain insights into customer behavior and sales performance</p>
                      </div>
                    </li>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Marketing Automation</strong>
                        <p>Automate email campaigns, follow-ups, and customer communications</p>
                      </div>
                    </li>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Third-Party Integrations</strong>
                        <p>Connect with email, calendar, payment gateways, and business tools</p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'erp' && (
                <div className={styles.tabPane}>
                  <h2 className={styles.tabTitle}>Enterprise Resource Planning Solutions</h2>
                  <p className={styles.tabDescription}>
                    Develop comprehensive ERP systems that unify your business processes across departments. From inventory management to financial accounting, our ERP solutions provide real-time visibility and control over your entire organization.
                  </p>
                  <ul className={styles.featureList}>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Financial Management</strong>
                        <p>Accounting, billing, invoicing, and financial reporting modules</p>
                      </div>
                    </li>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Inventory Control</strong>
                        <p>Real-time stock tracking and warehouse management</p>
                      </div>
                    </li>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>HR & Payroll</strong>
                        <p>Employee management, attendance, and payroll processing</p>
                      </div>
                    </li>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Supply Chain</strong>
                        <p>End-to-end supply chain visibility and management</p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'cms' && (
                <div className={styles.tabPane}>
                  <h2 className={styles.tabTitle}>Content Management Systems</h2>
                  <p className={styles.tabDescription}>
                    Create powerful, user-friendly CMS platforms that empower your team to manage content effortlessly. Our custom CMS solutions are designed around your content workflows and publishing requirements.
                  </p>
                  <ul className={styles.featureList}>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Intuitive Content Editor</strong>
                        <p>WYSIWYG editor for easy content creation and formatting</p>
                      </div>
                    </li>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Media Management</strong>
                        <p>Organize and manage images, videos, and documents</p>
                      </div>
                    </li>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Multi-Language Support</strong>
                        <p>Manage content in multiple languages for global audiences</p>
                      </div>
                    </li>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>SEO Optimization</strong>
                        <p>Built-in SEO tools for better search engine visibility</p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Services Grid - GRAY */}
      <section className={styles.servicesGridSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Custom Software Solutions</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive software development services for modern businesses
            </p>
          </div>

          <div className={styles.servicesGrid}>
            <Link to="/services/custom-software/crm" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" 
                  alt="CRM"
                />
              </div>
              <h3 className={styles.serviceTitle}>CRM Solutions</h3>
              <p className={styles.serviceDescription}>
                Build custom CRM systems that manage customer relationships, sales pipelines, and marketing automation.
              </p>
              <div className={styles.servicePrice}>
                Starting from {PricingConfig.currency}{PricingConfig.subServices.crm.starting}
              </div>
              <span className={styles.serviceArrow}>→</span>
            </Link>

            <Link to="/services/custom-software/erp" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" 
                  alt="ERP"
                />
              </div>
              <h3 className={styles.serviceTitle}>ERP Systems</h3>
              <p className={styles.serviceDescription}>
                Develop enterprise resource planning solutions that integrate all business processes in one platform.
              </p>
              <div className={styles.servicePrice}>
                Starting from {PricingConfig.currency}{PricingConfig.subServices.erp.starting}
              </div>
              <span className={styles.serviceArrow}>→</span>
            </Link>

            <Link to="/services/custom-software/cms" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" 
                  alt="CMS"
                />
              </div>
              <h3 className={styles.serviceTitle}>CMS Platforms</h3>
              <p className={styles.serviceDescription}>
                Create powerful content management systems for easy website and content management.
              </p>
              <div className={styles.servicePrice}>
                Starting from {PricingConfig.currency}{PricingConfig.subServices.cms.starting}
              </div>
              <span className={styles.serviceArrow}>→</span>
            </Link>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
                  alt="Database"
                />
              </div>
              <h3 className={styles.serviceTitle}>Database Solutions</h3>
              <p className={styles.serviceDescription}>
                Design and implement robust database architectures for efficient data management.
              </p>
              <div className={styles.servicePrice}>
                Custom Pricing
              </div>
              <span className={styles.serviceArrow}>→</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Development Process - DARK */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Custom Software Development Process</h2>
            <p className={styles.sectionSubtitle}>
              A proven methodology for delivering exceptional software solutions
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>01</div>
              <h3 className={styles.processTitle}>Discovery & Requirements</h3>
              <p className={styles.processDescription}>
                Deep dive into your business processes, challenges, and goals to define comprehensive requirements.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>02</div>
              <h3 className={styles.processTitle}>System Design</h3>
              <p className={styles.processDescription}>
                Create detailed architecture, database schema, and user interface designs for your solution.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>03</div>
              <h3 className={styles.processTitle}>Development</h3>
              <p className={styles.processDescription}>
                Build your software using agile methodology with regular updates and transparent communication.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>04</div>
              <h3 className={styles.processTitle}>Testing & QA</h3>
              <p className={styles.processDescription}>
                Comprehensive testing to ensure reliability, security, and performance under all conditions.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>05</div>
              <h3 className={styles.processTitle}>Deployment</h3>
              <p className={styles.processDescription}>
                Smooth deployment with minimal disruption to your business operations and user training.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>06</div>
              <h3 className={styles.processTitle}>Support & Maintenance</h3>
              <p className={styles.processDescription}>
                Ongoing support, updates, and enhancements to keep your software running optimally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqData} title="Frequently Asked Questions" />

      {/* Section 4: Final CTA - DARK */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Build Your Custom Software?</h2>
            <p className={styles.ctaDescription}>
              Let's create a powerful software solution that transforms your business operations and drives growth. Our team is ready to bring your vision to life.
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
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
              alt="Custom Software Development"
            />
          </div>
        </div>
      </section>

      <ScheduleCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}