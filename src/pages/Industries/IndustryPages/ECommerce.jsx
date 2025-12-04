import React, { useState } from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import { allBanners } from '../../../data/allBannersData';
import { Link } from 'react-router-dom';
import styles from '../IndustryPage.module.css';

export default function ECommerce() {
  const [activeProcess, setActiveProcess] = useState(0);

  const comprehensiveServices = [
    {
      title: 'Custom E-Commerce Platforms',
      description: 'Build fully customized online shopping platforms tailored to your unique business requirements. Our solutions include advanced product catalogs, intelligent search, personalized recommendations, multi-vendor support, and seamless checkout experiences. Scale from startups to enterprise-level e-commerce operations with robust, flexible architecture.'
    },
    {
      title: 'Mobile Commerce Applications',
      description: 'Native and cross-platform mobile shopping apps that deliver exceptional mobile commerce experiences. Features include one-tap checkout, mobile wallet integration, push notifications for deals, AR product visualization, barcode scanning, and offline browsing. Drive mobile sales with apps optimized for conversion and user engagement.'
    },
    {
      title: 'Marketplace Development',
      description: 'Multi-vendor marketplace platforms connecting buyers with multiple sellers. Comprehensive solutions with vendor onboarding, commission management, order routing, independent seller dashboards, rating systems, and dispute resolution. Build the next Amazon, Etsy, or niche marketplace with our scalable infrastructure.'
    },
    {
      title: 'B2B E-Commerce Solutions',
      description: 'Enterprise-grade B2B platforms with bulk ordering, quote requests, negotiated pricing, account hierarchy, purchase approval workflows, and integration with ERP systems. Support complex B2B scenarios including custom catalogs, contract pricing, credit terms, and multi-location inventory management.'
    },
    {
      title: 'Headless Commerce Architecture',
      description: 'Modern headless commerce solutions that decouple frontend and backend for maximum flexibility. API-first architecture enables omnichannel experiences across web, mobile, IoT devices, and emerging platforms. Integrate with any frontend framework while maintaining powerful e-commerce backend capabilities.'
    }
  ];

  const innovationFeatures = [
    {
      icon: '✓',
      title: 'Smart Search & Filters',
      description: 'AI-powered search with auto-complete, filters, and personalized results.'
    },
    {
      icon: '✓',
      title: 'One-Click Checkout',
      description: 'Streamlined checkout process with saved payment methods and addresses.'
    },
    {
      icon: '✓',
      title: 'Product Recommendations',
      description: 'ML-based suggestions for upselling and cross-selling opportunities.'
    },
    {
      icon: '✓',
      title: 'Inventory Management',
      description: 'Real-time stock tracking with automated reordering and multi-warehouse support.'
    },
    {
      icon: '✓',
      title: 'Multiple Payment Options',
      description: 'Support for cards, wallets, BNPL, crypto, and local payment methods.'
    },
    {
      icon: '✓',
      title: 'Order Tracking',
      description: 'Real-time order status updates and shipment tracking integration.'
    }
  ];

  const developmentProcess = [
    {
      title: 'Business Strategy',
      description: 'Define target audience, product catalog, and revenue model.',
      icon: '🔍'
    },
    {
      title: 'Platform Selection',
      description: 'Choose technology stack and e-commerce architecture approach.',
      icon: '⚙️'
    },
    {
      title: 'UI/UX Design',
      description: 'Create conversion-optimized shopping experiences and user flows.',
      icon: '🎨'
    },
    {
      title: 'Development',
      description: 'Build secure, scalable e-commerce platform with payment integration.',
      icon: '💻'
    },
    {
      title: 'Testing & Security',
      description: 'Comprehensive testing for payments, checkout, and PCI compliance.',
      icon: '✅'
    },
    {
      title: 'Launch & Optimize',
      description: 'Deploy with analytics, A/B testing, and continuous optimization.',
      icon: '🚀'
    }
  ];

  const faqData = [
    {
      question: 'What e-commerce platforms do you work with?',
      answer: 'We develop on multiple e-commerce platforms and technologies:',
      points: [
        'Custom-built e-commerce solutions',
        'Shopify and Shopify Plus',
        'Magento (Adobe Commerce)',
        'WooCommerce (WordPress)',
        'BigCommerce',
        'Headless commerce with modern frameworks',
        'Platform migration and replatforming',
        'API integrations and custom extensions'
      ]
    },
    {
      question: 'What is the typical timeline for e-commerce development?',
      answer: 'Development timelines vary based on project complexity and requirements:',
      points: [
        'Basic online store: 2-3 months for design, development, and launch',
        'Custom e-commerce platform: 4-6 months with advanced features',
        'Multi-vendor marketplace: 6-10 months including vendor management',
        'Enterprise e-commerce solution: 10-15 months for complex integrations',
        'Timeline includes discovery, design, development, testing, and deployment',
        'We follow agile methodology for faster iterations and regular updates'
      ]
    },
    {
      question: 'What features are essential for e-commerce success?',
      answer: 'Critical features that drive conversions and sales:',
      points: [
        'Mobile-responsive and fast-loading design',
        'Secure payment gateway integration',
        'Simple and intuitive checkout process',
        'Product reviews and ratings',
        'Wishlist and save for later',
        'Email marketing and abandoned cart recovery',
        'Multi-currency and multi-language support',
        'SEO optimization and marketing tools',
        'Advanced analytics and reporting'
      ]
    },
    {
      question: 'How do you ensure e-commerce security?',
      answer: 'We implement comprehensive security measures:',
      points: [
        'PCI DSS compliance for payment processing',
        'SSL/TLS encryption for data transmission',
        'Secure payment gateway integration',
        'Regular security audits and penetration testing',
        'Fraud detection and prevention systems',
        'Two-factor authentication for admin access',
        'Regular security patches and updates',
        'Data backup and disaster recovery',
        'GDPR and privacy regulation compliance'
      ]
    }
  ];

  return (
    <>
      <ConsultationBanner data={allBanners['ecommerce']} />

      {/* Comprehensive Services Section */}
      <section className={styles.comprehensiveSection}>
        <div className={styles.container}>
          <div className={styles.comprehensiveGrid}>
            <div className={styles.comprehensiveLeft}>
              <h2 className={styles.comprehensiveTitle}>
                Comprehensive <span className={styles.orange}>E-Commerce Development</span> Services
              </h2>
              <p className={styles.comprehensiveDescription}>
                We build powerful e-commerce platforms that drive online sales and deliver exceptional shopping experiences. From custom storefronts to enterprise marketplaces, our solutions combine cutting-edge technology, conversion optimization, and seamless integrations to help businesses succeed in the competitive digital commerce landscape.
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
            Driving E-Commerce Growth with <span className={styles.orange}>Powerful Features</span>
          </h2>
          <p className={styles.sectionDescription}>
            Our e-commerce solutions integrate advanced features designed to maximize conversions, enhance user experiences, and streamline operations. These capabilities help online businesses increase sales and build customer loyalty.
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
            Streamlined <span className={styles.orange}>E-Commerce Development</span> Process
          </h2>
          <p className={styles.processSectionDescription}>
            As a leading e-commerce development company, we follow a conversion-focused approach to create online stores that not only look great but drive measurable business results and revenue growth.
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
      <FAQ faqs={faqData} title="E-Commerce Development FAQs" />

      {/* Final CTA Section - FIXED WITH STOCK IMAGE */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.finalCTAContent}>
            <div className={styles.finalCTALeft}>
              <h2 className={styles.finalCTATitle}>
                Build Your <span className={styles.orange}>E-Commerce Empire</span>
              </h2>
              <p className={styles.finalCTADescription}>
                Create powerful online stores that drive sales and deliver exceptional shopping experiences.
              </p>
              <Link to="/contact" className={styles.finalCTAButton}>
                Start Your E-Commerce Project
              </Link>
            </div>
            <div className={styles.finalCTARight}>
              <img 
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop&q=80" 
                alt="E-Commerce Development" 
                className={styles.finalCTAImage} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}