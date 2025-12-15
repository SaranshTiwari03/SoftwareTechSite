import React, { useState } from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { Link } from 'react-router-dom';
import styles from '../IndustryPage.module.css';

export default function Automotive() {
  const [activeProcess, setActiveProcess] = useState(0);

  const comprehensiveServices = [
    {
      title: 'Cross-Platform Automotive App Development',
      description: 'Our cross-platform solutions ensure your app functions perfectly across both iOS and Android platforms, using technologies like React Native and Flutter. These apps offer unified user experiences and faster time-to-market without sacrificing quality or performance, enabling your business to reach a broader audience with one development cycle.'
    },
    {
      title: 'Automotive App Maintenance & Support',
      description: 'Our services extend beyond development to ensure your app performs optimally post-launch. We provide regular updates, security enhancements, performance tuning, and 24/7 support to keep your app running efficiently, securely, and without disruption, allowing your business to focus on scaling and growth.'
    },
    {
      title: 'Custom Automotive App Development',
      description: 'Our development team builds apps specifically tailored to your automotive business needs. From telematics to in-vehicle infotainment and fleet management, we leverage technologies like Java, Swift, Kotlin, and Flutter to create robust and scalable apps. Each solution is designed to enhance operational efficiency and user experience while meeting your technical requirements.'
    },
    {
      title: 'Android Automotive App Development',
      description: 'We create high-performance Android apps for automotive use, using the latest Android SDKs and development tools. These apps are engineered for security, speed, and a flawless user experience, whether they\'re for driver assistance, vehicle diagnostics, or real-time tracking.'
    },
    {
      title: 'iOS Automotive App Development',
      description: 'Our iOS automotive apps are built with Swift and Objective-C, optimized for performance and seamless integration with Apple CarPlay and other iOS features. We ensure every app delivers a premium user experience with intuitive design and robust functionality.'
    }
  ];

  const innovationFeatures = [
    {
      icon: '✓',
      title: 'User Authentication & Profiles',
      description: 'Personalized, secure user access and customizable profiles for a tailored app experience.'
    },
    {
      icon: '✓',
      title: 'Vehicle Health Monitoring',
      description: 'Track key vehicle metrics, from engine performance to fuel efficiency, for proactive maintenance.'
    },
    {
      icon: '✓',
      title: 'Route Optimization',
      description: 'Advanced route planning algorithms for faster, fuel-efficient travel and deliveries.'
    },
    {
      icon: '✓',
      title: 'Real-Time GPS Tracking',
      description: 'Live location tracking for fleet management, navigation, and enhanced security.'
    },
    {
      icon: '✓',
      title: 'In-App Payments',
      description: 'Secure payment gateways for seamless transactions within the app.'
    },
    {
      icon: '✓',
      title: 'Push Notifications',
      description: 'Real-time alerts for maintenance reminders, trip updates, and important notifications.'
    }
  ];

  const developmentProcess = [
    {
      title: 'Project Discovery',
      description: 'Identify automotive requirements and set precise development goals.',
      icon: '🔍'
    },
    {
      title: 'Tech Stack Selection',
      description: 'Choose optimal technologies for automotive app performance.',
      icon: '⚙️'
    },
    {
      title: 'UI/UX Design',
      description: 'Create user-friendly interfaces tailored for drivers, dealerships, and customers.',
      icon: '🎨'
    },
    {
      title: 'App Development',
      description: 'Build scalable, secure automotive solutions with agile methodologies.',
      icon: '💻'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing to ensure flawless performance and security.',
      icon: '✅'
    },
    {
      title: 'Deployment & Support',
      description: 'Launch your app and provide ongoing maintenance and updates.',
      icon: '🚀'
    }
  ];

  const faqData = [
    {
      question: 'What types of automotive apps can you develop?',
      answer: 'We develop a wide range of automotive applications including:',
      points: [
        'Fleet management and tracking systems',
        'Vehicle diagnostics and monitoring apps',
        'Car rental and booking platforms',
        'Electric vehicle charging station locators',
        'Driver assistance and safety apps',
        'In-vehicle infotainment systems',
        'Telematics and connected car solutions'
      ]
    },
    {
      question: 'What is the development timeline for automotive applications?',
      answer: 'Development timelines vary based on complexity and features:',
      points: [
        'Simple automotive apps: 3-4 months (basic tracking and diagnostics)',
        'Medium complexity apps: 5-7 months (fleet management, advanced features)',
        'Complex enterprise solutions: 8-12 months (telematics, IoT integration)',
        'Timeline includes design, development, testing, and deployment',
        'We follow agile methodology for faster iterations and feedback',
        'IoT and hardware integration may extend timelines by 2-4 months'
      ]
    },
    {
      question: 'Do you integrate with vehicle APIs and IoT devices?',
      answer: 'Yes, we have extensive experience integrating automotive apps with:',
      points: [
        'OBD-II diagnostic systems',
        'Vehicle manufacturer APIs',
        'GPS and telematics devices',
        'IoT sensors for vehicle monitoring',
        'Connected car platforms',
        'Fleet management hardware'
      ]
    },
    {
      question: 'What technologies do you use for automotive app development?',
      answer: 'We leverage cutting-edge technologies for automotive solutions:',
      points: [
        'Mobile: React Native, Flutter, Swift, Kotlin',
        'Backend: Node.js, Python, Java',
        'IoT Integration: MQTT, CoAP protocols',
        'Cloud: AWS IoT, Azure IoT Hub, Google Cloud IoT',
        'Real-time data: WebSockets, Firebase',
        'AI/ML for predictive maintenance and analytics'
      ]
    }
  ];

  const seoData = pageSEO.automotive;

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/industries/automotive"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      <ConsultationBanner data={allBanners['automotive']} />

      {/* Comprehensive Services Section */}
      <section className={styles.comprehensiveSection}>
        <div className={styles.container}>
          <div className={styles.comprehensiveGrid}>
            <div className={styles.comprehensiveLeft}>
              <h1 className={styles.comprehensiveTitle}>
                Comprehensive <span className={styles.orange}>Automotive App Development</span> Services
              </h1>
              <p className={styles.comprehensiveDescription}>
                We offer specialized automotive app development services designed to address the modern challenges of the automotive industry. By integrating the latest technology and secure, high-performance solutions, we help businesses stay ahead with faster, smarter, and more reliable automotive applications. Our services cover everything from business-specific operational tools to consumer-facing apps, all optimized for seamless performance and scalability.
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
            Driving Innovation with <span className={styles.orange}>Cutting-Edge, In-Demand</span> Functionality
          </h2>
          <p className={styles.sectionDescription}>
            Our automotive app development company helps you integrate the most sought-after features designed to enhance user experience, optimize vehicle operations, and ensure seamless functionality. These features address the critical needs of businesses and consumers alike, ensuring your app remains competitive and impactful.
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
            Streamlined <span className={styles.orange}>Automotive App Development</span> Process
          </h2>
          <p className={styles.processSectionDescription}>
            As a leading automotive app development company, we utilize an agile process to create scalable, secure, and efficient solutions tailored for the automotive industry. Leverage our expertise to enhance your automotive business.
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
      <FAQ faqs={faqData} title="Automotive App Development FAQs" />

      {/* Final CTA Section */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.finalCTAContent}>
            <div className={styles.finalCTALeft}>
              <h2 className={styles.finalCTATitle}>
                Build <span className={styles.orange}>High-Impact</span> Automotive Apps
              </h2>
              <p className={styles.finalCTADescription}>
                Develop scalable automotive apps for smart navigation, electric vehicle management, and more.
              </p>
              <Link to="/contact" className={styles.finalCTAButton}>
                Build Future-Ready Apps
              </Link>
            </div>
            <div className={styles.finalCTARight}>
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop&q=80" 
                alt="Automotive App Development" 
                className={styles.finalCTAImage} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}