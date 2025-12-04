import React, { useState } from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import { allBanners } from '../../../data/allBannersData';
import { Link } from 'react-router-dom';
import styles from '../IndustryPage.module.css';

export default function Retail() {
  const [activeProcess, setActiveProcess] = useState(0);

  const comprehensiveServices = [
    {
      title: 'Omnichannel Retail Solutions',
      description: 'Unified retail platforms that seamlessly integrate online and offline shopping experiences. Our solutions synchronize inventory, orders, and customer data across all channels including web, mobile, in-store POS, and social commerce, enabling retailers to provide consistent experiences and maximize sales opportunities across every touchpoint.'
    },
    {
      title: 'Point of Sale (POS) Systems',
      description: 'Modern cloud-based POS systems with inventory management, customer tracking, payment processing, and real-time analytics. Features include barcode scanning, receipt printing, multi-location support, employee management, and integration with accounting systems for streamlined retail operations and better business insights.'
    },
    {
      title: 'Retail Mobile Apps',
      description: 'Engaging mobile shopping applications with personalized product recommendations, augmented reality try-ons, mobile payments, loyalty programs, and in-store navigation. Our apps enhance customer engagement, drive repeat purchases, and bridge the gap between digital and physical retail experiences.'
    },
    {
      title: 'Inventory Management Systems',
      description: 'Intelligent inventory solutions with real-time stock tracking, automated reordering, demand forecasting, and supplier management. Advanced analytics help optimize stock levels, reduce carrying costs, prevent stockouts, and improve warehouse efficiency for single or multi-location retail operations.'
    },
    {
      title: 'Customer Loyalty Programs',
      description: 'Digital loyalty and rewards platforms that increase customer retention and lifetime value. Features include points systems, tier-based rewards, personalized offers, referral programs, and gamification elements. Integration with POS and mobile apps ensures seamless reward redemption and customer engagement.'
    }
  ];

  const innovationFeatures = [
    {
      icon: '✓',
      title: 'Real-Time Inventory',
      description: 'Live stock visibility across all locations and channels with automated updates.'
    },
    {
      icon: '✓',
      title: 'Mobile POS',
      description: 'Enable sales anywhere with tablet and smartphone point-of-sale capabilities.'
    },
    {
      icon: '✓',
      title: 'Loyalty Programs',
      description: 'Reward repeat customers with points, discounts, and exclusive offers.'
    },
    {
      icon: '✓',
      title: 'AR Try-On',
      description: 'Augmented reality features for virtual product visualization and fitting.'
    },
    {
      icon: '✓',
      title: 'Smart Analytics',
      description: 'Sales insights, customer behavior analysis, and inventory optimization.'
    },
    {
      icon: '✓',
      title: 'Contactless Payments',
      description: 'Multiple payment options including NFC, digital wallets, and QR codes.'
    }
  ];

  const developmentProcess = [
    {
      title: 'Business Analysis',
      description: 'Understand retail operations, challenges, and customer journey mapping.',
      icon: '🔍'
    },
    {
      title: 'System Design',
      description: 'Design scalable architecture for omnichannel retail operations.',
      icon: '⚙️'
    },
    {
      title: 'UI/UX Design',
      description: 'Create intuitive shopping experiences for customers and staff interfaces.',
      icon: '🎨'
    },
    {
      title: 'Development',
      description: 'Build robust retail solutions with seamless integrations and payments.',
      icon: '💻'
    },
    {
      title: 'Testing & Training',
      description: 'Ensure system reliability and train staff on new retail technology.',
      icon: '✅'
    },
    {
      title: 'Launch & Support',
      description: 'Deploy with minimal disruption and provide ongoing technical support.',
      icon: '🚀'
    }
  ];

  const faqData = [
    {
      question: 'What types of retail applications do you develop?',
      answer: 'We build comprehensive retail technology solutions including:',
      points: [
        'Omnichannel e-commerce platforms',
        'Point of Sale (POS) systems',
        'Mobile shopping applications',
        'Inventory management systems',
        'Customer loyalty and rewards programs',
        'Retail analytics and reporting tools',
        'Store management applications',
        'Self-checkout and kiosk solutions'
      ]
    },
    {
      question: 'How can retail apps improve customer experience?',
      answer: 'Our retail solutions enhance shopping experiences through:',
      points: [
        'Personalized product recommendations based on preferences',
        'Seamless checkout with multiple payment options',
        'Real-time inventory visibility for online and in-store',
        'Loyalty rewards and exclusive member discounts',
        'Order tracking and delivery notifications',
        'Easy returns and exchange processes',
        'AR/VR for virtual product try-ons',
        'In-app customer support and chat'
      ]
    },
    {
      question: 'Can you integrate with existing retail systems?',
      answer: 'Yes, we provide seamless integration with:',
      points: [
        'ERP systems (SAP, Oracle, Microsoft Dynamics)',
        'E-commerce platforms (Shopify, Magento, WooCommerce)',
        'Payment gateways and processors',
        'Accounting software (QuickBooks, Xero)',
        'Marketing automation tools',
        'CRM systems (Salesforce, HubSpot)',
        'Shipping and logistics providers',
        'Third-party marketplaces (Amazon, eBay)'
      ]
    },
    {
      question: 'What is the development timeline for retail applications?',
      answer: 'Development timelines vary based on features and scope:',
      points: [
        'Basic mobile shopping app: 3-5 months (core e-commerce features)',
        'POS system with inventory: 5-8 months (multi-location support)',
        'Omnichannel retail platform: 8-14 months (web, mobile, in-store integration)',
        'Enterprise retail solution: 14-24 months (advanced analytics, AI)',
        'Timeline includes design, development, integrations, and testing',
        'We use agile sprints for continuous delivery and feedback'
      ]
    }
  ];

  return (
    <>
      <ConsultationBanner data={allBanners['retail']} />

      {/* Comprehensive Services Section */}
      <section className={styles.comprehensiveSection}>
        <div className={styles.container}>
          <div className={styles.comprehensiveGrid}>
            <div className={styles.comprehensiveLeft}>
              <h2 className={styles.comprehensiveTitle}>
                Comprehensive <span className={styles.orange}>Retail App Development</span> Services
              </h2>
              <p className={styles.comprehensiveDescription}>
                We create innovative retail technology solutions that transform shopping experiences and streamline operations. Our platforms unite online and offline channels, optimize inventory management, and leverage data analytics to help retailers increase sales, improve customer satisfaction, and stay competitive in the evolving retail landscape.
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
            Transforming Retail with <span className={styles.orange}>Advanced Technology</span>
          </h2>
          <p className={styles.sectionDescription}>
            Our retail applications integrate powerful features designed to enhance customer experiences, optimize operations, and drive sales growth. These capabilities help retailers stay ahead in an increasingly digital marketplace.
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
            Streamlined <span className={styles.orange}>Retail App Development</span> Process
          </h2>
          <p className={styles.processSectionDescription}>
            As a leading retail app development company, we follow a customer-centric approach to create solutions that enhance shopping experiences and drive business growth in the modern retail environment.
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
      <FAQ faqs={faqData} title="Retail App Development FAQs" />

      {/* Final CTA Section - FIXED WITH STOCK IMAGE */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.finalCTAContent}>
            <div className={styles.finalCTALeft}>
              <h2 className={styles.finalCTATitle}>
                Elevate Your <span className={styles.orange}>Retail Business</span>
              </h2>
              <p className={styles.finalCTADescription}>
                Build modern retail solutions that connect with customers and drive sales growth.
              </p>
              <Link to="/contact" className={styles.finalCTAButton}>
                Start Your Retail Project
              </Link>
            </div>
            <div className={styles.finalCTARight}>
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80" 
                alt="Retail App Development" 
                className={styles.finalCTAImage} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}