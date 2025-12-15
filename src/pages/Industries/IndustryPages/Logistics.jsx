import React, { useState } from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { Link } from 'react-router-dom';
import styles from '../IndustryPage.module.css';

export default function Logistics() {
  const [activeProcess, setActiveProcess] = useState(0);

  const comprehensiveServices = [
    {
      title: 'Fleet Management Solutions',
      description: 'Comprehensive fleet tracking and management systems with real-time GPS monitoring, route optimization, fuel management, driver behavior analytics, and maintenance scheduling. Our solutions help logistics companies reduce operational costs, improve efficiency, and ensure timely deliveries while maintaining complete visibility of their fleet operations.'
    },
    {
      title: 'Warehouse Management Systems',
      description: 'Advanced WMS platforms that streamline inventory control, order fulfillment, warehouse operations, and supply chain visibility. Features include barcode scanning, automated picking and packing, inventory optimization, real-time stock tracking, and integration with ERP systems for seamless warehouse operations.'
    },
    {
      title: 'Last-Mile Delivery Apps',
      description: 'End-to-end delivery management solutions for drivers and customers with real-time tracking, proof of delivery, digital signatures, route optimization, and automated notifications. Enable efficient last-mile operations with driver apps, customer tracking portals, and dispatcher dashboards for complete delivery visibility.'
    },
    {
      title: 'Supply Chain Management Platforms',
      description: 'Integrated supply chain solutions that connect suppliers, manufacturers, distributors, and retailers. Features include demand forecasting, procurement automation, shipment tracking, inventory optimization, and analytics to improve supply chain efficiency, reduce costs, and enhance collaboration across the entire network.'
    },
    {
      title: 'Transportation Management Systems',
      description: 'Comprehensive TMS platforms for planning, executing, and optimizing freight movements. Includes load planning, carrier selection, rate management, shipment tracking, freight audit, and analytics. Streamline transportation operations, reduce shipping costs, and improve delivery performance with intelligent automation.'
    }
  ];

  const innovationFeatures = [
    {
      icon: '✓',
      title: 'Real-Time GPS Tracking',
      description: 'Live location tracking of vehicles and shipments with geofencing capabilities.'
    },
    {
      icon: '✓',
      title: 'Route Optimization',
      description: 'AI-powered route planning for fuel efficiency and faster deliveries.'
    },
    {
      icon: '✓',
      title: 'Automated Dispatching',
      description: 'Smart order allocation and driver assignment based on location and capacity.'
    },
    {
      icon: '✓',
      title: 'Proof of Delivery',
      description: 'Digital signatures, photos, and timestamps for delivery verification.'
    },
    {
      icon: '✓',
      title: 'Inventory Management',
      description: 'Real-time stock visibility and automated reordering capabilities.'
    },
    {
      icon: '✓',
      title: 'Analytics Dashboard',
      description: 'Comprehensive reporting on delivery performance, costs, and efficiency metrics.'
    }
  ];

  const developmentProcess = [
    {
      title: 'Requirements Analysis',
      description: 'Identify logistics challenges and define operational improvement goals.',
      icon: '🔍'
    },
    {
      title: 'System Architecture',
      description: 'Design scalable infrastructure for handling high-volume logistics data.',
      icon: '⚙️'
    },
    {
      title: 'UI/UX Design',
      description: 'Create intuitive interfaces for drivers, dispatchers, and managers.',
      icon: '🎨'
    },
    {
      title: 'Development',
      description: 'Build robust logistics solutions with real-time tracking and automation.',
      icon: '💻'
    },
    {
      title: 'Integration & Testing',
      description: 'Integrate with existing systems and ensure seamless operations.',
      icon: '✅'
    },
    {
      title: 'Deployment & Support',
      description: 'Launch with training and ongoing technical support.',
      icon: '🚀'
    }
  ];

  const faqData = [
    {
      question: 'What types of logistics applications do you develop?',
      answer: 'We build comprehensive logistics technology solutions including:',
      points: [
        'Fleet management and vehicle tracking systems',
        'Warehouse management systems (WMS)',
        'Transportation management systems (TMS)',
        'Last-mile delivery applications',
        'Supply chain visibility platforms',
        'Freight marketplace applications',
        'Driver and dispatcher mobile apps',
        'Logistics analytics and reporting tools'
      ]
    },
    {
      question: 'How can a logistics app improve operational efficiency?',
      answer: 'Our logistics solutions deliver measurable improvements:',
      points: [
        'Reduce fuel costs through route optimization (15-30%)',
        'Improve delivery times with real-time tracking',
        'Lower operational costs through automation',
        'Increase fleet utilization and driver productivity',
        'Minimize errors in order fulfillment',
        'Enhance customer satisfaction with delivery visibility',
        'Streamline warehouse operations and inventory accuracy'
      ]
    },
    {
      question: 'Can you integrate with existing logistics systems?',
      answer: 'Yes, we provide seamless integration with:',
      points: [
        'ERP systems (SAP, Oracle, Microsoft Dynamics)',
        'GPS and telematics hardware',
        'Warehouse automation systems',
        'E-commerce platforms and marketplaces',
        'Payment gateways and invoicing systems',
        'Carrier and shipping APIs',
        'IoT sensors and RFID systems',
        'Third-party logistics (3PL) platforms'
      ]
    },
    {
      question: 'What is the development timeline for logistics applications?',
      answer: 'Development timelines depend on project scope and complexity:',
      points: [
        'Basic delivery tracking app: 4-6 months (MVP with core features)',
        'Fleet management system: 6-9 months (including GPS integration)',
        'Comprehensive TMS/WMS: 9-15 months (enterprise features)',
        'Enterprise logistics platform: 15-24 months (full-scale solution)',
        'Timeline includes design, development, integration, testing, and deployment',
        'We follow agile methodology for iterative delivery and early feedback'
      ]
    }
  ];

  const seoData = pageSEO.logistics;

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/industries/logistics"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      <ConsultationBanner data={allBanners['logistics']} />

      {/* Comprehensive Services Section */}
      <section className={styles.comprehensiveSection}>
        <div className={styles.container}>
          <div className={styles.comprehensiveGrid}>
            <div className={styles.comprehensiveLeft}>
              <h1 className={styles.comprehensiveTitle}>
                Comprehensive <span className={styles.orange}>Logistics App Development</span> Services
              </h1>
              <p className={styles.comprehensiveDescription}>
                We deliver intelligent logistics and supply chain solutions that optimize operations, reduce costs, and enhance visibility across the entire logistics network. Our platforms leverage IoT, AI, and real-time data to streamline fleet management, warehouse operations, and delivery processes for maximum efficiency and customer satisfaction.
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
                    <h2 className={styles.serviceTitle}>{service.title}</h2>
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
            Optimizing Logistics with <span className={styles.orange}>Intelligent Technology</span>
          </h2>
          <p className={styles.sectionDescription}>
            Our logistics applications integrate advanced features designed to streamline operations, improve delivery performance, and provide end-to-end visibility. These capabilities help logistics companies stay competitive in a rapidly evolving industry.
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
            Streamlined <span className={styles.orange}>Logistics App Development</span> Process
          </h2>
          <p className={styles.processSectionDescription}>
            As a leading logistics app development company, we follow a systematic approach to create scalable, reliable, and efficient solutions that transform logistics operations and drive business growth.
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
      <FAQ faqs={faqData} title="Logistics App Development FAQs" />

      {/* Final CTA Section */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.finalCTAContent}>
            <div className={styles.finalCTALeft}>
              <h2 className={styles.finalCTATitle}>
                Transform Logistics with <span className={styles.orange}>Smart Solutions</span>
              </h2>
              <p className={styles.finalCTADescription}>
                Build intelligent logistics platforms that optimize operations and enhance delivery performance.
              </p>
              <Link to="/contact" className={styles.finalCTAButton}>
                Start Your Logistics Project
              </Link>
            </div>
            <div className={styles.finalCTARight}>
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&q=80" 
                alt="Logistics App Development" 
                className={styles.finalCTAImage} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}