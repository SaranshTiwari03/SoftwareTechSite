import React from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import { allBanners } from '../../../data/allBannersData';
import { Link } from 'react-router-dom';
import styles from './MainIndustries.module.css';

export default function MainIndustries() {
  const products = [
    {
      title: 'CMS',
      description: 'Tailored a capable of providing advanced CMS platforms that manage a user-friendly interface for content updates',
      path: '/services/software/cms',
      icon: '📝'
    },
    {
      title: 'HRM',
      description: 'Build a custom HRM solution for your business and streamline your strong workforce',
      path: '/services/software/hrm',
      icon: '👥'
    },
    {
      title: 'CRM',
      description: 'Work with the best CRM development company to develop your custom cloud-based CRM software',
      path: '/services/software/crm',
      icon: '📊'
    },
    {
      title: 'ERP',
      description: 'Tailored platform ERP software development services that allow even to wield ERP development',
      path: '/services/software/erp',
      icon: '⚙️'
    },
    {
      title: 'LMS',
      description: 'Analyze your data by app, content, and scalable learning management courses that are exceptional training experiences',
      path: '/services/software/lms',
      icon: '📚'
    },
    {
      title: 'POS',
      description: 'We use a POS development company specializing in creating tailored product solutions',
      path: '/services/software/pos',
      icon: '💳'
    }
  ];

  const industries = [
    {
      title: 'Healthcare Solution',
      description: 'Transform your healthcare business with our highly customized healthcare solutions',
      path: '/industries/healthcare',
      icon: '🏥'
    },
    {
      title: 'Healthcare App Development',
      description: 'Comprehensive healthcare app development services with a custom care for scalable solutions',
      path: '/industries/healthcare',
      icon: '📱'
    },
    {
      title: 'Educational',
      description: 'Tailored builds custom learning management software for engaging edtech solutions',
      path: '/industries/education',
      icon: '🎓'
    },
    {
      title: 'Fintech',
      description: 'We are transforming fintech services with development fund app to flexible digital banking and investment applications',
      path: '/industries/fintech',
      icon: '💰'
    },
    {
      title: 'Logistics',
      description: 'Streamline operations with advanced blockchain technology, cloud-only storage and cognitive logistics operations',
      path: '/industries/logistics',
      icon: '🚚'
    },
    {
      title: 'Retail',
      description: 'Craft a comprehensive and tailored solutions to improve store experiences and measures store',
      path: '/industries/retail',
      icon: '🛒'
    },
    {
      title: 'Ecommerce',
      description: 'Build an e-commerce through digitizing and transforming with app achieve e-commerce development objectives',
      path: '/industries/ecommerce',
      icon: '🛍️'
    },
    {
      title: 'IT staff augmentation',
      description: 'Ensure now interpret your project faster by our IT staff augmentation services',
      path: '/services/staff',
      icon: '👨‍💻'
    },
    {
      title: 'Music',
      description: 'Improve to a music app development company helping users worldwide',
      path: '/industries/music',
      icon: '🎵'
    },
    {
      title: 'On-demand',
      description: 'Get built-to-order on-demand delivery and deployment company that serves flexible concept and entrepreneurs',
      path: '/industries/on-demand',
      icon: '📦'
    },
    {
      title: 'Automotive',
      description: 'Pour our skills to you are platforms to auto an automotive, futuristic, leverage and mobility positions platforms',
      path: '/industries/automotive',
      icon: '🚗'
    },
    {
      title: 'Real Estate',
      description: 'We use a full-fledge real estate sale investment company that serves portable, profitable, real estates sales',
      path: '/industries/real-estate',
      icon: '🏢'
    },
    {
      title: 'Hire Android App Developers',
      description: 'Are you looking to hire Android developers to bring your app vision to life? Your search ends here',
      path: '/services/staff/android',
      icon: '📱'
    },
    {
      title: 'Telemedicine App Development',
      description: 'At the line between healthcare and technology; think for telemedicine app development solutions',
      path: '/industries/healthcare',
      icon: '💊'
    }
  ];

  return (
    <>
      <ConsultationBanner data={allBanners['industries']} />

      {/* Innovative Solutions Section */}
      <section className={styles.solutionsSection}>
        <div className={styles.container}>
          <div className={styles.solutionsContent}>
            <h2 className={styles.solutionsTitle}>
              Innovative Solutions that Catalyze Transformation
            </h2>
            <p className={styles.solutionsDescription}>
              We specialize in crafting innovative software solutions of hi-tech transformation platforms that are flexible and easy to meet the unique requirements of our clients, propelling their digital evolution and refining product transformations.
            </p>
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <span className={styles.featureBullet}>•</span>
                <span>User-Oriented Design</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureBullet}>•</span>
                <span>Security and Flexibility</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureBullet}>•</span>
                <span>Scalability and Flexibility</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureBullet}>•</span>
                <span>Innovation and Customization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Products</h2>
          <div className={styles.cardsGrid}>
            {products.map((product, index) => (
              <Link to={product.path} key={index} className={styles.card}>
                <div className={styles.cardIcon}>{product.icon}</div>
                <h3 className={styles.cardTitle}>{product.title}</h3>
                <p className={styles.cardDescription}>{product.description}</p>
                <div className={styles.cardArrow}>
                  <span className={styles.arrowIcon}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className={styles.industriesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Industries</h2>
          <div className={styles.cardsGrid}>
            {industries.map((industry, index) => (
              <Link to={industry.path} key={index} className={styles.card}>
                <div className={styles.cardIcon}>{industry.icon}</div>
                <h3 className={styles.cardTitle}>{industry.title}</h3>
                <p className={styles.cardDescription}>{industry.description}</p>
                <div className={styles.cardArrow}>
                  <span className={styles.arrowIcon}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

     
    </>
  );
}