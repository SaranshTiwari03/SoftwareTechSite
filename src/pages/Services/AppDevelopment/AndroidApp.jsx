import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import ScheduleCallModal from '../../../components/ScheduleCallModal/ScheduleCallModal';
import { allBanners } from '../../../data/allBannersData';
import { CompanyConfig, PricingConfig } from '../../../theme/theme';
import styles from './MobileAppDev.module.css';

export default function AndroidApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const companyName = CompanyConfig.name;

  const faqData = [
    {
      question: "What features can you integrate into an Android app?",
      answer: `We can integrate a wide range of features into your Android app:`,
      points: [
        `Payment gateways (Stripe, PayPal, Razorpay)`,
        `Social media login and sharing`,
        `Real-time chat and notifications`,
        `GPS and location-based services`,
        `Camera, gallery, and media features`,
        `Biometric authentication (fingerprint, face recognition)`,
        `Offline data synchronization`,
        `Third-party API integrations`
      ]
    },
    {
      question: "Which programming languages do you use for Android development?",
      answer: "We primarily use Kotlin and Java for Android app development. Kotlin is our preferred choice for new projects due to its modern features, safety, and official Google support."
    },
    {
      question: "How long does it take to develop an Android app?",
      answer: "Development timeline varies based on complexity:",
      points: [
        "Simple apps: 2-3 months",
        "Medium complexity: 3-5 months",
        "Enterprise apps: 6+ months"
      ]
    },
    {
      question: "Do you provide Google Play Store submission support?",
      answer: "Yes! We handle the entire Play Store submission process, including app optimization, compliance with Google's policies, and launch strategy."
    },
    {
      question: "Can you integrate third-party APIs and services?",
      answer: "Absolutely! We have extensive experience integrating payment gateways, social media APIs, maps, analytics, push notifications, and various third-party services into Android apps."
    }
  ];

  return (
    <>
      <ConsultationBanner data={allBanners['android-app']} />

      {/* Section 1: Features Grid - WHITE */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Why Choose <span className={styles.highlight}>{companyName}</span> for Android Development?
            </h2>
            <p className={styles.sectionSubtitle}>
              Build robust, scalable Android applications that reach billions of users worldwide
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>⚡</div>
              <h3 className={styles.featureCardTitle}>High Performance</h3>
              <p className={styles.featureCardDescription}>
                Optimized apps that run smoothly on all Android devices with minimal resource usage
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>🎨</div>
              <h3 className={styles.featureCardTitle}>Material Design</h3>
              <p className={styles.featureCardDescription}>
                Beautiful, intuitive interfaces following Google's Material Design guidelines
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>🔒</div>
              <h3 className={styles.featureCardTitle}>Enterprise Security</h3>
              <p className={styles.featureCardDescription}>
                Bank-level security with encryption, secure authentication, and data protection
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>📱</div>
              <h3 className={styles.featureCardTitle}>Device Compatibility</h3>
              <p className={styles.featureCardDescription}>
                Apps that work seamlessly across all Android versions and device sizes
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>🔄</div>
              <h3 className={styles.featureCardTitle}>Easy Maintenance</h3>
              <p className={styles.featureCardDescription}>
                Clean, modular code architecture for easy updates and feature additions
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>📊</div>
              <h3 className={styles.featureCardTitle}>Analytics Integration</h3>
              <p className={styles.featureCardDescription}>
                Built-in analytics to track user behavior and app performance metrics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Tech Stack - GRAY */}
      <section className={styles.techStackSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Android Development Tech Stack</h2>
            <p className={styles.sectionSubtitle}>
              Cutting-edge technologies for modern Android applications
            </p>
          </div>

          <div className={styles.techGrid}>
            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" 
                  alt="Kotlin"
                />
              </div>
              <p className={styles.techName}>Kotlin</p>
            </div>

            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
                  alt="Java"
                />
              </div>
              <p className={styles.techName}>Java</p>
            </div>

            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" 
                  alt="Android Studio"
                />
              </div>
              <p className={styles.techName}>Android Studio</p>
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

            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg" 
                  alt="Jetpack Compose"
                />
              </div>
              <p className={styles.techName}>Jetpack Compose</p>
            </div>

            <div className={styles.techItem}>
              <div className={styles.techIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg" 
                  alt="Gradle"
                />
              </div>
              <p className={styles.techName}>Gradle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Two Column Content - WHITE */}
      <section className={styles.twoColumnSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.columnContent}>
              <h3>Native Android Excellence</h3>
              <p>
                Our Android development team specializes in creating high-performance native applications that leverage the full power of the Android platform. We use Kotlin and Java to build apps that are fast, reliable, and provide exceptional user experiences.
              </p>
              <p>
                From concept to launch, we handle every aspect of Android app development including UI/UX design, backend integration, testing, and Play Store deployment.
              </p>
              <ul>
                <li>Custom Android app development</li>
                <li>Material Design implementation</li>
                <li>API integration and development</li>
                <li>Real-time features and notifications</li>
                <li>Offline functionality support</li>
                <li>Performance optimization</li>
              </ul>
            </div>

            <div className={styles.columnImage}>
              <img 
                src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&h=400&fit=crop" 
                alt="Android Development"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Process - DARK */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Android Development Process</h2>
            <p className={styles.sectionSubtitle}>
              A streamlined approach to building exceptional Android apps
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>01</div>
              <h3 className={styles.processTitle}>Requirements Analysis</h3>
              <p className={styles.processDescription}>
                We dive deep into your business goals, target audience, and technical requirements to create a comprehensive development roadmap.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>02</div>
              <h3 className={styles.processTitle}>UI/UX Design</h3>
              <p className={styles.processDescription}>
                Create stunning, user-friendly interfaces following Material Design principles and Android best practices.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>03</div>
              <h3 className={styles.processTitle}>Development</h3>
              <p className={styles.processDescription}>
                Build your app using Kotlin or Java with clean architecture, following SOLID principles and Android guidelines.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>04</div>
              <h3 className={styles.processTitle}>Quality Assurance</h3>
              <p className={styles.processDescription}>
                Rigorous testing across multiple devices, Android versions, and scenarios to ensure flawless performance.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>05</div>
              <h3 className={styles.processTitle}>Play Store Launch</h3>
              <p className={styles.processDescription}>
                Handle complete Play Store submission, optimization, and launch strategy for maximum visibility.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>06</div>
              <h3 className={styles.processTitle}>Support & Updates</h3>
              <p className={styles.processDescription}>
                Ongoing maintenance, feature updates, and support to keep your app running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqData} title="Android Development FAQs" />

      {/* Section 5: Final CTA - DARK */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Build Your Android App?</h2>
            <p className={styles.ctaDescription}>
              Let's create a powerful Android application that reaches millions of users. Our expert team is ready to transform your vision into reality.
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
              src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&h=400&fit=crop" 
              alt="Android App Development"
            />
          </div>
        </div>
      </section>

      <ScheduleCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}