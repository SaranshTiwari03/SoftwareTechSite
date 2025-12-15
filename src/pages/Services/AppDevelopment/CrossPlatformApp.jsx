import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import ScheduleCallModal from '../../../components/ScheduleCallModal/ScheduleCallModal';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { CompanyConfig, PricingConfig } from '../../../theme/theme';
import styles from './MobileAppDev.module.css';

export default function CrossPlatformApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const companyName = CompanyConfig.name;

  const faqData = [
    {
      question: "What's the performance difference between cross-platform and native apps?",
      answer: `Modern cross-platform frameworks like React Native and Flutter offer near-native performance:`,
      points: [
        `UI rendering is smooth and responsive on both platforms`,
        `Access to native device features through plugins`,
        `Performance gap has narrowed significantly with recent updates`,
        `Most business apps won't notice any performance difference`,
        `For graphics-intensive apps or games, native may still have an edge`,
        `We optimize performance to ensure smooth user experience`
      ]
    },
    {
      question: "Which frameworks do you use for cross-platform development?",
      answer: "We specialize in React Native and Flutter - the two leading cross-platform frameworks. Both allow us to create native-like experiences while maintaining a single codebase for iOS and Android."
    },
    {
      question: "What are the benefits of cross-platform development?",
      answer: "Cross-platform development offers several advantages:",
      points: [
        "Cost savings: Single codebase for multiple platforms",
        "Faster time-to-market: Launch on both platforms simultaneously",
        "Easy maintenance: Update once, reflect everywhere",
        "Consistent UI/UX: Uniform experience across platforms",
        "Wider reach: Access both iOS and Android users"
      ]
    },
    {
      question: "How long does cross-platform app development take?",
      answer: "Development timeline varies based on complexity:",
      points: [
        "Simple apps: 2-3 months",
        "Medium complexity: 3-5 months",
        "Complex apps: 5-8 months"
      ],
      closing: "Cross-platform development is typically 30-40% faster than building separate native apps."
    },
    {
      question: "Can cross-platform apps access native device features?",
      answer: "Yes! Modern cross-platform frameworks like React Native and Flutter provide full access to native device features including camera, GPS, biometrics, push notifications, and more through plugins and modules."
    }
  ];

  const seoData = pageSEO.crossPlatformApp;

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/services/mobile-app/cross-platform"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      <ConsultationBanner data={allBanners['cross-platform-app']} />

      {/* Section 1: Features Grid - WHITE */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>
              Why Choose <span className={styles.highlight}>{companyName}</span> for Cross-Platform Development?
            </h1>
            <p className={styles.sectionSubtitle}>
              Build once, deploy everywhere - reach both iOS and Android users with a single codebase
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>💰</div>
              <h2 className={styles.featureCardTitle}>Cost-Effective</h2>
              <p className={styles.featureCardDescription}>
                Save up to 40% compared to native development by building one app for multiple platforms
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>⚡</div>
              <h2 className={styles.featureCardTitle}>Faster Development</h2>
              <p className={styles.featureCardDescription}>
                Launch your app on both platforms simultaneously with shorter development cycles
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>🎨</div>
              <h2 className={styles.featureCardTitle}>Native-Like Performance</h2>
              <p className={styles.featureCardDescription}>
                Smooth, responsive apps that feel native on both iOS and Android platforms
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>🔄</div>
              <h2 className={styles.featureCardTitle}>Easy Updates</h2>
              <p className={styles.featureCardDescription}>
                Update your app once and changes reflect across all platforms instantly
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>📱</div>
              <h2 className={styles.featureCardTitle}>Consistent UX</h2>
              <p className={styles.featureCardDescription}>
                Deliver uniform user experience across iOS and Android with shared UI components
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>🚀</div>
              <h2 className={styles.featureCardTitle}>Rapid Prototyping</h2>
              <p className={styles.featureCardDescription}>
                Quickly build and test prototypes to validate ideas before full development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Tech Stack - GRAY */}
      <section className={styles.techStackSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Cross-Platform Tech Stack</h2>
            <p className={styles.sectionSubtitle}>
              Modern frameworks for beautiful, performant cross-platform apps
            </p>
          </div>

          <div className={styles.techGrid}>
            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                  alt="React Native"
                />
              </div>
              <p className={styles.techName}>React Native</p>
            </div>

            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" 
                  alt="Flutter"
                />
              </div>
              <p className={styles.techName}>Flutter</p>
            </div>

            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                  alt="JavaScript"
                />
              </div>
              <p className={styles.techName}>JavaScript</p>
            </div>

            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
                  alt="TypeScript"
                />
              </div>
              <p className={styles.techName}>TypeScript</p>
            </div>

            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" 
                  alt="Dart"
                />
              </div>
              <p className={styles.techName}>Dart</p>
            </div>

            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" 
                  alt="Firebase"
                />
              </div>
              <p className={styles.techName}>Firebase</p>
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
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop" 
                alt="Cross-Platform Development"
              />
            </div>

            <div className={styles.columnContent}>
              <h3>Build Once, Deploy Everywhere</h3>
              <p>
                Our cross-platform development expertise allows you to reach maximum audience with minimal investment. Using React Native and Flutter, we create apps that work seamlessly on both iOS and Android platforms.
              </p>
              <p>
                Whether you're a startup looking to validate your idea quickly or an enterprise seeking to maximize ROI, cross-platform development offers the perfect balance of cost, speed, and quality.
              </p>
              <ul>
                <li>Single codebase for iOS and Android</li>
                <li>Native performance and user experience</li>
                <li>Hot reload for faster development</li>
                <li>Access to native device features</li>
                <li>Large ecosystem of plugins and libraries</li>
                <li>Easy integration with existing systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Process - DARK */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Cross-Platform Development Process</h2>
            <p className={styles.sectionSubtitle}>
              Streamlined workflow for efficient app delivery
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>01</div>
              <h3 className={styles.processTitle}>Platform Strategy</h3>
              <p className={styles.processDescription}>
                Analyze your requirements to determine the best cross-platform framework and architecture for your project.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>02</div>
              <h3 className={styles.processTitle}>UI/UX Design</h3>
              <p className={styles.processDescription}>
                Design adaptive interfaces that work beautifully on both iOS and Android while following platform guidelines.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>03</div>
              <h3 className={styles.processTitle}>Development</h3>
              <p className={styles.processDescription}>
                Build your app using React Native or Flutter with reusable components and clean architecture.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>04</div>
              <h3 className={styles.processTitle}>Testing & QA</h3>
              <p className={styles.processDescription}>
                Test thoroughly on both platforms across multiple devices and OS versions to ensure consistent quality.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>05</div>
              <h3 className={styles.processTitle}>Dual Platform Launch</h3>
              <p className={styles.processDescription}>
                Deploy simultaneously to both App Store and Play Store with optimized listings.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>06</div>
              <h3 className={styles.processTitle}>Maintenance</h3>
              <p className={styles.processDescription}>
                Provide ongoing support and updates to keep your app running smoothly on both platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqData} title="Cross-Platform Development FAQs" />

      {/* Section 5: Final CTA - DARK */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Build Your Cross-Platform App?</h2>
            <p className={styles.ctaDescription}>
              Maximize your reach and minimize costs with a powerful cross-platform application. Let's bring your app to life on both iOS and Android.
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
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop" 
              alt="Cross-Platform App Development"
            />
          </div>
        </div>
      </section>

      <ScheduleCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}