import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import ScheduleCallModal from '../../../components/ScheduleCallModal/ScheduleCallModal';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { CompanyConfig } from '../../../theme/theme';
import styles from './MobileAppDev.module.css';

export default function MobileAppMain() {
  const [activeTab, setActiveTab] = useState('native');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tabsListRef = useRef(null);
  const dividerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const activeButton = document.querySelector(`.${styles.tabButton}.${styles.active}`);
    const divider = dividerRef.current;
    
    if (activeButton && divider && tabsListRef.current) {
      const buttonRect = activeButton.getBoundingClientRect();
      const listRect = tabsListRef.current.getBoundingClientRect();
      
      const topOffset = buttonRect.top - listRect.top;
      const height = buttonRect.height;
      
      setIndicatorStyle({
        top: `${topOffset}px`,
        height: `${height}px`
      });
    }
  }, [activeTab]);

  const companyName = CompanyConfig.name;

  const faqData = [
    {
      question: "What types of mobile apps can you develop?",
      answer: `We develop a wide range of mobile applications including:`,
      points: [
        `Native Android apps with Kotlin/Java`,
        `Cross-platform apps with React Native and Flutter`,
        `Enterprise mobile solutions`,
        `E-commerce and marketplace apps`,
        `Social networking and community apps`,
        `On-demand service applications`,
        `Healthcare and fitness apps`,
        `Financial and fintech applications`
      ],
      closing: "We tailor our approach to match your specific business needs and target audience."
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer: "Development timeline depends on app complexity:",
      points: [
        "Simple apps: 2-3 months",
        "Medium complexity: 4-6 months",
        "Complex enterprise apps: 6-12 months"
      ],
      closing: "We provide detailed project timelines during consultation."
    },
    {
      question: "Do you provide app maintenance and support?",
      answer: "Yes, we offer comprehensive post-launch support including bug fixes, updates, performance monitoring, and feature enhancements to ensure your app runs smoothly."
    },
    {
      question: "Which is better: Native or Cross-Platform development?",
      answer: "It depends on your requirements. Native apps offer better performance and full platform features, while cross-platform apps are more cost-effective and faster to develop. We'll help you choose the best approach."
    },
    {
      question: "Can you help publish the app to app stores?",
      answer: "Absolutely! We handle the entire app store submission process for both Google Play Store and Apple App Store, including compliance, guidelines, and optimization."
    }
  ];

  const seoData = pageSEO.mobileAppMain;

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/services/mobile-app"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      <ConsultationBanner data={allBanners['mobile-app-main']} />

      {/* Section 1: Why Choose Us - WHITE with Tabs */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>
              Why Choose <span className={styles.highlight}>{companyName}</span> for Mobile App Development?
            </h1>
            <p className={styles.sectionSubtitle}>
              We combine cutting-edge technology with innovative design to create mobile applications that drive business growth and deliver exceptional user experiences.
            </p>
          </div>

          <div className={styles.tabsContainer}>
            <div className={styles.tabsList} ref={tabsListRef}>
              <button
                onClick={() => setActiveTab('native')}
                className={`${styles.tabButton} ${activeTab === 'native' ? styles.active : ''}`}
              >
                Native Development
              </button>
              <button
                onClick={() => setActiveTab('cross')}
                className={`${styles.tabButton} ${activeTab === 'cross' ? styles.active : ''}`}
              >
                Cross-Platform
              </button>
              <button
                onClick={() => setActiveTab('expertise')}
                className={`${styles.tabButton} ${activeTab === 'expertise' ? styles.active : ''}`}
              >
                Our Expertise
              </button>
            </div>

            <div className={styles.divider} ref={dividerRef}>
              <div style={{
                position: 'absolute',
                left: 0,
                width: '3px',
                background: 'var(--primary)',
                transition: 'all 0.3s ease',
                ...indicatorStyle
              }} />
            </div>

            <div className={styles.tabContent}>
              {activeTab === 'native' && (
                <div className={styles.tabPane}>
                  <h2 className={styles.tabTitle}>Native App Development Excellence</h2>
                  <p className={styles.tabDescription}>
                    Build powerful, high-performance applications optimized for specific platforms. Our native development approach ensures maximum performance, seamless integration with device features, and superior user experience.
                  </p>
                  <ul className={styles.featureList}>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Android Development</strong>
                        <p>Kotlin and Java expertise for Google Play Store apps</p>
                      </div>
                    </li>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Platform-Specific Features</strong>
                        <p>Full access to native APIs and device capabilities</p>
                      </div>
                    </li>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Optimal Performance</strong>
                        <p>Fast, responsive apps with smooth animations</p>
                      </div>
                    </li>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Enhanced Security</strong>
                        <p>Platform-level security and data protection</p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'cross' && (
                <div className={styles.tabPane}>
                  <h2 className={styles.tabTitle}>Cross-Platform Solutions</h2>
                  <p className={styles.tabDescription}>
                    Develop once, deploy everywhere. Our cross-platform approach using React Native and Flutter allows you to reach both Android and iOS users with a single codebase, reducing development time and costs.
                  </p>
                  <ul className={styles.featureList}>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>React Native & Flutter</strong>
                        <p>Modern frameworks for beautiful, native-like apps</p>
                      </div>
                    </li>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Cost-Effective</strong>
                        <p>Single codebase for multiple platforms saves time and money</p>
                      </div>
                    </li>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Faster Development</strong>
                        <p>Quick iterations and shorter time-to-market</p>
                      </div>
                    </li>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Consistent Experience</strong>
                        <p>Uniform UI/UX across all platforms</p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'expertise' && (
                <div className={styles.tabPane}>
                  <h2 className={styles.tabTitle}>Our Mobile Development Expertise</h2>
                  <p className={styles.tabDescription}>
                    With years of experience and hundreds of successful projects, our team delivers mobile applications that exceed expectations. We stay updated with the latest technologies and best practices.
                  </p>
                  <ul className={styles.featureList}>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>100+ Apps Delivered</strong>
                        <p>Proven track record across multiple industries</p>
                      </div>
                    </li>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Expert Team</strong>
                        <p>Certified developers with deep platform knowledge</p>
                      </div>
                    </li>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Agile Methodology</strong>
                        <p>Transparent development with regular updates</p>
                      </div>
                    </li>
                    <li>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>Full-Cycle Support</strong>
                        <p>From concept to launch and beyond</p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Services Grid - GRAY */}
      <section className={styles.servicesGridSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Mobile App Development Services</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive mobile solutions tailored to your business needs
            </p>
          </div>

          <div className={styles.servicesGrid}>
            <Link to="/services/mobile-app/android" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" 
                  alt="Android"
                />
              </div>
              <h3 className={styles.serviceTitle}>Android App Development</h3>
              <p className={styles.serviceDescription}>
                Build powerful Android applications using Kotlin and Java for the world's most popular mobile platform.
              </p>
              <span className={styles.serviceArrow}>→</span>
            </Link>

            <Link to="/services/mobile-app/cross-platform" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                  alt="Cross-Platform"
                />
              </div>
              <h3 className={styles.serviceTitle}>Cross-Platform Development</h3>
              <p className={styles.serviceDescription}>
                Create apps for both Android and iOS with a single codebase using React Native or Flutter.
              </p>
              <span className={styles.serviceArrow}>→</span>
            </Link>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
                  alt="UI/UX Design"
                />
              </div>
              <h3 className={styles.serviceTitle}>Mobile UI/UX Design</h3>
              <p className={styles.serviceDescription}>
                Create stunning, user-friendly mobile interfaces that deliver exceptional user experiences.
              </p>
              <span className={styles.serviceArrow}>→</span>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                  alt="Backend Development"
                />
              </div>
              <h3 className={styles.serviceTitle}>Backend & API Development</h3>
              <p className={styles.serviceDescription}>
                Build scalable backend infrastructure and APIs to power your mobile applications.
              </p>
              <span className={styles.serviceArrow}>→</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Development Process - DARK */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Mobile App Development Process</h2>
            <p className={styles.sectionSubtitle}>
              A proven methodology that delivers results
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>01</div>
              <h3 className={styles.processTitle}>Discovery & Planning</h3>
              <p className={styles.processDescription}>
                We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>02</div>
              <h3 className={styles.processTitle}>Design & Prototyping</h3>
              <p className={styles.processDescription}>
                Create wireframes and interactive prototypes to visualize the app before development begins.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>03</div>
              <h3 className={styles.processTitle}>Development</h3>
              <p className={styles.processDescription}>
                Build your app using agile methodology with regular updates and transparent communication.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>04</div>
              <h3 className={styles.processTitle}>Testing & QA</h3>
              <p className={styles.processDescription}>
                Comprehensive testing across devices, OS versions, and scenarios to ensure flawless performance.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>05</div>
              <h3 className={styles.processTitle}>Deployment</h3>
              <p className={styles.processDescription}>
                Handle app store submissions, approvals, and launch to get your app to users smoothly.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNumber}>06</div>
              <h3 className={styles.processTitle}>Support & Maintenance</h3>
              <p className={styles.processDescription}>
                Ongoing support, updates, and enhancements to keep your app running perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqData} title="Frequently Asked Questions" />

      {/* Section 4: Final CTA - DARK */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Build Your Mobile App?</h2>
            <p className={styles.ctaDescription}>
              Let's transform your idea into a powerful mobile application that users will love. Our team is ready to bring your vision to life.
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
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop" 
              alt="Mobile App Development"
            />
          </div>
        </div>
      </section>

      <ScheduleCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}