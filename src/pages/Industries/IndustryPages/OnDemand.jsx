import React, { useState } from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import { allBanners } from '../../../data/allBannersData';
import { Link } from 'react-router-dom';
import styles from '../IndustryPage.module.css';

export default function OnDemand() {
  const [activeProcess, setActiveProcess] = useState(0);

  const comprehensiveServices = [
    {
      title: 'On-Demand Delivery Apps',
      description: 'Build comprehensive delivery platforms connecting customers with service providers for food, groceries, packages, and more. Our solutions include customer apps, driver apps, merchant dashboards, and admin panels with real-time tracking, route optimization, automated dispatch, and seamless payment processing for efficient delivery operations.'
    },
    {
      title: 'Ride-Hailing & Transportation Apps',
      description: 'Create feature-rich ride-sharing and taxi booking applications with real-time driver matching, fare calculation, multiple payment options, ride tracking, and rating systems. Our platforms support various vehicle types, surge pricing, driver management, and safety features for reliable transportation services.'
    },
    {
      title: 'Home Services Marketplaces',
      description: 'Connect customers with service professionals for cleaning, repairs, beauty, wellness, and more. Features include service booking, provider matching, scheduling, in-app payments, service tracking, and review systems. Enable seamless coordination between service seekers and providers with intelligent matching algorithms.'
    },
    {
      title: 'Healthcare On-Demand Apps',
      description: 'Develop telemedicine and on-demand healthcare platforms for doctor consultations, medicine delivery, lab tests, and home healthcare services. HIPAA-compliant solutions with video consultations, appointment scheduling, prescription management, and integration with healthcare providers for accessible medical care.'
    },
    {
      title: 'Marketplace Aggregator Platforms',
      description: 'Build multi-service on-demand platforms that aggregate various services under one umbrella. Super apps that offer food delivery, ride-hailing, groceries, courier services, and more. Unified user experience with single wallet, loyalty programs, and cross-service promotions to maximize user engagement and retention.'
    }
  ];

  const innovationFeatures = [
    {
      icon: '✓',
      title: 'Real-Time Tracking',
      description: 'Live GPS tracking of service providers with ETA updates and notifications.'
    },
    {
      icon: '✓',
      title: 'Smart Matching',
      description: 'AI-powered algorithms to match customers with nearest available providers.'
    },
    {
      icon: '✓',
      title: 'In-App Payments',
      description: 'Multiple payment options including cards, wallets, and cash on delivery.'
    },
    {
      icon: '✓',
      title: 'Rating & Reviews',
      description: 'Two-way rating system to maintain service quality and trust.'
    },
    {
      icon: '✓',
      title: 'Push Notifications',
      description: 'Real-time alerts for bookings, confirmations, and status updates.'
    },
    {
      icon: '✓',
      title: 'Schedule Booking',
      description: 'Advance scheduling for services at preferred date and time.'
    }
  ];

  const developmentProcess = [
    {
      title: 'Market Analysis',
      description: 'Research target market, competition, and service demand patterns.',
      icon: '🔍'
    },
    {
      title: 'Platform Design',
      description: 'Design multi-sided platform architecture for users and service providers.',
      icon: '⚙️'
    },
    {
      title: 'UI/UX Design',
      description: 'Create intuitive interfaces for customers, providers, and administrators.',
      icon: '🎨'
    },
    {
      title: 'Development',
      description: 'Build scalable on-demand platform with real-time features and payments.',
      icon: '💻'
    },
    {
      title: 'Testing & Launch',
      description: 'Comprehensive testing and phased rollout with provider onboarding.',
      icon: '✅'
    },
    {
      title: 'Growth & Scale',
      description: 'Monitor metrics, optimize operations, and scale to new markets.',
      icon: '🚀'
    }
  ];

  const faqData = [
    {
      question: 'What types of on-demand applications do you develop?',
      answer: 'We build diverse on-demand service platforms including:',
      points: [
        'Food and grocery delivery applications',
        'Ride-hailing and taxi booking apps',
        'Home services marketplaces (cleaning, repairs, beauty)',
        'On-demand healthcare and telemedicine platforms',
        'Courier and package delivery services',
        'Car rental and bike-sharing applications',
        'Laundry and dry cleaning on-demand services',
        'Multi-service aggregator super apps'
      ]
    },
    {
      question: 'What is the typical development timeline for on-demand apps?',
      answer: 'Development timelines vary based on features and platform complexity:',
      points: [
        'Basic delivery app (2 apps): 3-5 months (customer + driver apps)',
        'Ride-hailing platform (3 apps): 5-8 months (customer, driver, admin)',
        'Full-featured marketplace: 8-12 months (multi-service with payments)',
        'Multi-service super app: 12-18 months (aggregated services)',
        'Timeline includes customer, provider, and admin applications',
        'We follow agile methodology with bi-weekly sprints and updates'
      ]
    },
    {
      question: 'How do you handle payments and commissions in on-demand apps?',
      answer: 'We implement comprehensive payment solutions:',
      points: [
        'Multiple payment gateways (Stripe, PayPal, Braintree)',
        'Digital wallet integration',
        'Cash on delivery option',
        'Automated commission calculation and distribution',
        'Service provider payout management',
        'Invoice and receipt generation',
        'Refund and dispute management',
        'Multi-currency support for global operations'
      ]
    },
    {
      question: 'What features are essential for on-demand app success?',
      answer: 'Key features that drive user adoption and retention:',
      points: [
        'Real-time GPS tracking and ETA updates',
        'Smart provider matching algorithm',
        'Seamless in-app booking and payments',
        'Push notifications for status updates',
        'Rating and review system',
        'Schedule and repeat bookings',
        'Promo codes and loyalty rewards',
        'In-app chat and support',
        'Analytics dashboard for admins'
      ]
    }
  ];

  return (
    <>
      <ConsultationBanner data={allBanners['on-demand']} />

      {/* Comprehensive Services Section */}
      <section className={styles.comprehensiveSection}>
        <div className={styles.container}>
          <div className={styles.comprehensiveGrid}>
            <div className={styles.comprehensiveLeft}>
              <h2 className={styles.comprehensiveTitle}>
                Comprehensive <span className={styles.orange}>On-Demand App Development</span> Services
              </h2>
              <p className={styles.comprehensiveDescription}>
                We create powerful on-demand service platforms that connect customers with service providers instantly. Our solutions leverage real-time technology, intelligent matching algorithms, and seamless payment processing to deliver exceptional on-demand experiences across food delivery, transportation, home services, healthcare, and more.
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
            Powering On-Demand Services with <span className={styles.orange}>Smart Technology</span>
          </h2>
          <p className={styles.sectionDescription}>
            Our on-demand applications integrate essential features designed to provide instant service delivery, ensure seamless coordination, and create delightful experiences for customers and service providers alike.
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
            Streamlined <span className={styles.orange}>On-Demand App Development</span> Process
          </h2>
          <p className={styles.processSectionDescription}>
            As a trusted on-demand app development company, we follow a proven methodology to create scalable, reliable platforms that connect service providers with customers efficiently and profitably.
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
      <FAQ faqs={faqData} title="On-Demand App Development FAQs" />

      {/* Final CTA Section - FIXED WITH STOCK IMAGE */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.finalCTAContent}>
            <div className={styles.finalCTALeft}>
              <h2 className={styles.finalCTATitle}>
                Launch Your <span className={styles.orange}>On-Demand Platform</span>
              </h2>
              <p className={styles.finalCTADescription}>
                Build innovative on-demand services that connect customers with providers instantly.
              </p>
              <Link to="/contact" className={styles.finalCTAButton}>
                Start Your On-Demand Project
              </Link>
            </div>
            <div className={styles.finalCTARight}>
              <img 
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop&q=80" 
                alt="On-Demand App Development" 
                className={styles.finalCTAImage} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}