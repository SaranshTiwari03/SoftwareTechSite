import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import ScheduleCallModal from '../../../components/ScheduleCallModal/ScheduleCallModal';
import { allBanners } from '../../../data/allBannersData';
import { CompanyConfig, PricingConfig } from '../../../theme/theme';
import styles from './CustomSoftware.module.css';

export default function CMSSolution() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const companyName = CompanyConfig.name;

  const faqData = [
    {
      question: "What content types and fields can your CMS handle?",
      answer: `Our custom CMS can manage any content type you need:`,
      points: [
        `Text, rich text, and HTML content`,
        `Images, videos, and document uploads`,
        `Custom fields (dropdowns, checkboxes, dates)`,
        `Repeatable content sections`,
        `Relational content (categories, tags, authors)`,
        `Multi-language content variations`,
        `Dynamic content templates`,
        `We design the CMS structure around your specific content needs`
      ]
    },
    {
      question: "How long does CMS development take?",
      answer: "Development timeline varies based on features:",
      points: [
        "Basic CMS: 2-3 months",
        "Medium complexity: 4-6 months",
        "Enterprise CMS: 6-9 months"
      ]
    },
    {
      question: "Can you migrate content from our existing CMS?",
      answer: "Yes! We provide seamless content migration services from platforms like WordPress, Drupal, Joomla, or custom CMS systems, ensuring no data loss during the transition."
    },
    {
      question: "Is the CMS SEO-friendly?",
      answer: "Absolutely! We build CMS platforms with built-in SEO features including meta tags management, URL customization, XML sitemaps, structured data, and performance optimization for better search rankings."
    },
    {
      question: "Can multiple users manage content?",
      answer: "Yes! Our CMS solutions support multiple users with role-based permissions, approval workflows, content versioning, and collaborative editing features."
    }
  ];

  return (
    <>
      <ConsultationBanner data={allBanners['cms-solution']} />

      {/* Section 1: Features Grid - WHITE */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Why Choose <span className={styles.highlight}>{companyName}</span> for CMS Development?
            </h2>
            <p className={styles.sectionSubtitle}>
              Build powerful, user-friendly CMS platforms that simplify content management
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>✍️</div>
              <h3 className={styles.featureCardTitle}>Intuitive Content Editor</h3>
              <p className={styles.featureCardDescription}>
                Easy-to-use WYSIWYG editor for creating and formatting content without technical knowledge
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>📁</div>
              <h3 className={styles.featureCardTitle}>Media Management</h3>
              <p className={styles.featureCardDescription}>
                Organize, upload, and manage images, videos, documents, and other digital assets
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>🌍</div>
              <h3 className={styles.featureCardTitle}>Multi-Language Support</h3>
              <p className={styles.featureCardDescription}>
                Manage content in multiple languages for global audiences with translation workflows
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>🔒</div>
              <h3 className={styles.featureCardTitle}>Role-Based Access</h3>
              <p className={styles.featureCardDescription}>
                Control who can create, edit, publish, and delete content with granular permissions
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>📱</div>
              <h3 className={styles.featureCardTitle}>Responsive Design</h3>
              <p className={styles.featureCardDescription}>
                Mobile-friendly CMS interface and content that looks great on all devices
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>🔍</div>
              <h3 className={styles.featureCardTitle}>SEO Optimization</h3>
              <p className={styles.featureCardDescription}>
                Built-in SEO tools for meta tags, URLs, sitemaps, and search engine visibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Tech Stack - GRAY */}
      <section className={styles.techStackSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Technologies We Use for CMS Development</h2>
            <p className={styles.sectionSubtitle}>
              Modern frameworks for flexible and scalable content management
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
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" 
                  alt="PHP"
                />
              </div>
              <p className={styles.techName}>PHP</p>
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
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
                  alt="MySQL"
                />
              </div>
              <p className={styles.techName}>MySQL</p>
            </div>

            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" 
                  alt="GraphQL"
                />
              </div>
              <p className={styles.techName}>GraphQL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Two Column Content - WHITE */}
      <section className={styles.twoColumnSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.columnContent}>
              <h3>Flexible CMS for Modern Businesses</h3>
              <p>
                Content is king in today's digital landscape. Our custom CMS solutions empower your team to create, manage, and publish content effortlessly without relying on developers for every change.
              </p>
              <p>
                Whether you need a simple blog platform or a complex multi-site content management system, we build CMS solutions that are intuitive, powerful, and tailored to your content workflows.
              </p>
              <ul>
                <li>Drag-and-drop page builders</li>
                <li>Content scheduling and publishing</li>
                <li>Version control and content history</li>
                <li>Custom content types and fields</li>
                <li>API-first headless CMS architecture</li>
                <li>Performance optimization and caching</li>
              </ul>
            </div>

            <div className={styles.columnImage}>
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop" 
                alt="CMS Development"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Process - DARK */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our CMS Development Process</h2>
            <p className={styles.sectionSubtitle}>
              A streamlined approach to building your content management platform
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>01</div>
              <h3 className={styles.processTitle}>Content Strategy</h3>
              <p className={styles.processDescription}>
                Analyze your content types, workflows, and publishing requirements.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>02</div>
              <h3 className={styles.processTitle}>System Architecture</h3>
              <p className={styles.processDescription}>
                Design the CMS structure, content models, and user interface.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>03</div>
              <h3 className={styles.processTitle}>Development</h3>
              <p className={styles.processDescription}>
                Build the CMS with editor, media library, and content management features.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>04</div>
              <h3 className={styles.processTitle}>Content Migration</h3>
              <p className={styles.processDescription}>
                Migrate existing content from your old system to the new CMS.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>05</div>
              <h3 className={styles.processTitle}>Testing & Training</h3>
              <p className={styles.processDescription}>
                Test thoroughly and train your team on content management workflows.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>06</div>
              <h3 className={styles.processTitle}>Launch & Support</h3>
              <p className={styles.processDescription}>
                Deploy the CMS and provide ongoing support and feature enhancements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqData} title="CMS Development FAQs" />

      {/* Section 5: Final CTA - DARK */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Build Your Custom CMS?</h2>
            <p className={styles.ctaDescription}>
              Empower your team with a content management system that's easy to use, flexible, and built for your specific needs. Let's create a CMS that grows with your business.
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
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop" 
              alt="CMS Solution"
            />
          </div>
        </div>
      </section>

      <ScheduleCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}