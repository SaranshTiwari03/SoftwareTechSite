import React, { useState } from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import { allBanners } from '../../../data/allBannersData';
import { Link } from 'react-router-dom';
import styles from '../IndustryPage.module.css';

export default function RealEstate() {
  const [activeProcess, setActiveProcess] = useState(0);

  const comprehensiveServices = [
    {
      title: 'Property Listing & Search Platforms',
      description: 'Comprehensive real estate marketplaces with advanced search filters, interactive maps, virtual tours, and detailed property listings. Our platforms enable seamless property discovery with high-quality images, videos, floor plans, and neighborhood information to help buyers make informed decisions.'
    },
    {
      title: 'Real Estate CRM Solutions',
      description: 'Powerful customer relationship management systems designed for real estate professionals. Manage leads, track client interactions, automate follow-ups, schedule property viewings, and maintain comprehensive client databases to close deals faster and improve customer relationships.'
    },
    {
      title: 'Property Management Apps',
      description: 'End-to-end property management solutions for landlords and property managers. Features include tenant screening, lease management, rent collection, maintenance requests, expense tracking, and automated reporting to streamline property operations and maximize returns.'
    },
    {
      title: 'Virtual Tour & AR/VR Solutions',
      description: 'Immersive 3D virtual tours and augmented reality experiences that allow potential buyers to explore properties remotely. Interactive walkthroughs, room visualization, furniture placement, and renovation previews enhance the property viewing experience and accelerate decision-making.'
    },
    {
      title: 'Real Estate Investment Platforms',
      description: 'Sophisticated platforms for real estate investment analysis, portfolio management, and crowdfunding. Features include property valuation tools, ROI calculators, market analytics, investment tracking, and secure transaction management for individual and institutional investors.'
    }
  ];

  const innovationFeatures = [
    {
      icon: '✓',
      title: 'Advanced Search Filters',
      description: 'Location-based search with price range, property type, amenities, and custom filters.'
    },
    {
      icon: '✓',
      title: 'Virtual Property Tours',
      description: '360-degree virtual tours and HD video walkthroughs of properties.'
    },
    {
      icon: '✓',
      title: 'Interactive Maps',
      description: 'Map integration with nearby amenities, schools, transportation, and points of interest.'
    },
    {
      icon: '✓',
      title: 'Mortgage Calculator',
      description: 'Built-in financial tools for loan calculations and affordability analysis.'
    },
    {
      icon: '✓',
      title: 'Agent Matching',
      description: 'Connect buyers and sellers with verified real estate agents and brokers.'
    },
    {
      icon: '✓',
      title: 'Document Management',
      description: 'Secure storage and e-signature capabilities for contracts and agreements.'
    }
  ];

  const developmentProcess = [
    {
      title: 'Market Research',
      description: 'Analyze real estate market trends and identify target user requirements.',
      icon: '🔍'
    },
    {
      title: 'Feature Planning',
      description: 'Define core functionalities and third-party integrations needed.',
      icon: '⚙️'
    },
    {
      title: 'UI/UX Design',
      description: 'Create visually appealing interfaces optimized for property showcase.',
      icon: '🎨'
    },
    {
      title: 'Development',
      description: 'Build scalable real estate platforms with advanced search and mapping.',
      icon: '💻'
    },
    {
      title: 'Testing',
      description: 'Comprehensive testing for performance, security, and user experience.',
      icon: '✅'
    },
    {
      title: 'Launch & Growth',
      description: 'Deploy platform with marketing tools and continuous feature enhancements.',
      icon: '🚀'
    }
  ];

  const faqData = [
    {
      question: 'What types of real estate applications do you develop?',
      answer: 'We build comprehensive real estate solutions including:',
      points: [
        'Property listing and search platforms',
        'Real estate CRM and lead management systems',
        'Property management applications',
        'Virtual tour and AR/VR solutions',
        'Real estate investment platforms',
        'Rental marketplace applications',
        'Real estate agent portals',
        'Property valuation and analytics tools'
      ]
    },
    {
      question: 'What is the development timeline for real estate applications?',
      answer: 'Development timelines depend on project scope and features:',
      points: [
        'Basic property listing app: 3-5 months (search and listings)',
        'Advanced marketplace with virtual tours: 6-9 months (360° tours, maps)',
        'Comprehensive real estate platform: 9-15 months (CRM, analytics, payments)',
        'Enterprise solutions with AI/ML: 15-24 months (predictive analytics)',
        'Timeline includes design, development, testing, and deployment',
        'We use agile methodology for incremental delivery and feedback'
      ]
    },
    {
      question: 'Can you integrate MLS and third-party real estate APIs?',
      answer: 'Yes, we provide seamless integration with:',
      points: [
        'Multiple Listing Services (MLS) databases',
        'Zillow, Realtor.com, and Trulia APIs',
        'Google Maps and location services',
        'Payment gateways for transactions',
        'Property valuation and market data APIs',
        'Credit check and background verification services',
        'E-signature and document management tools'
      ]
    },
    {
      question: 'What features make a real estate app successful?',
      answer: 'Key features that drive user engagement and conversions:',
      points: [
        'Intuitive search with smart filters',
        'High-quality images and virtual tours',
        'Real-time notifications for new listings',
        'Saved searches and favorite properties',
        'In-app messaging between buyers and agents',
        'Mortgage calculators and financial tools',
        'Neighborhood insights and school ratings',
        'Mobile-responsive and user-friendly design'
      ]
    }
  ];

  return (
    <>
      <ConsultationBanner data={allBanners['real-estate']} />

      {/* Comprehensive Services Section */}
      <section className={styles.comprehensiveSection}>
        <div className={styles.container}>
          <div className={styles.comprehensiveGrid}>
            <div className={styles.comprehensiveLeft}>
              <h2 className={styles.comprehensiveTitle}>
                Comprehensive <span className={styles.orange}>Real Estate App Development</span> Services
              </h2>
              <p className={styles.comprehensiveDescription}>
                We deliver innovative real estate technology solutions that transform how properties are bought, sold, and managed. Our platforms combine powerful search capabilities, immersive virtual experiences, and intelligent analytics to create seamless connections between buyers, sellers, agents, and property managers in the digital real estate marketplace.
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
            Revolutionizing Real Estate with <span className={styles.orange}>Smart Technology</span>
          </h2>
          <p className={styles.sectionDescription}>
            Our real estate applications integrate cutting-edge features designed to enhance property discovery, streamline transactions, and provide comprehensive market insights. These capabilities create exceptional experiences for buyers, sellers, and real estate professionals.
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
            Streamlined <span className={styles.orange}>Real Estate App Development</span> Process
          </h2>
          <p className={styles.processSectionDescription}>
            As a trusted real estate app development company, we follow a proven methodology to create innovative, user-centric platforms that drive engagement and accelerate property transactions.
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
      <FAQ faqs={faqData} title="Real Estate App Development FAQs" />

      {/* Final CTA Section - FIXED WITH STOCK IMAGE */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.finalCTAContent}>
            <div className={styles.finalCTALeft}>
              <h2 className={styles.finalCTATitle}>
                Transform Real Estate with <span className={styles.orange}>Digital Innovation</span>
              </h2>
              <p className={styles.finalCTADescription}>
                Build powerful real estate platforms that connect buyers, sellers, and agents seamlessly.
              </p>
              <Link to="/contact" className={styles.finalCTAButton}>
                Start Your Real Estate Project
              </Link>
            </div>
            <div className={styles.finalCTARight}>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&q=80" 
                alt="Real Estate App Development" 
                className={styles.finalCTAImage} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}