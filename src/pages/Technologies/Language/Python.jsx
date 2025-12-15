import React, { useState, useEffect, useRef } from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import styles from '../TechnologyPage.module.css';

export default function Python() {
  const [activeTab, setActiveTab] = useState('devops');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsListRef = useRef(null);
  const dividerRef = useRef(null);

  const tabContent = {
    devops: {
      description: 'Our development team implements automated testing, CI/CD pipelines, containerization with Docker, and orchestration with Kubernetes to ensure efficient and reliable software delivery. We follow industry best practices for DevOps to accelerate your development cycle.'
    },
    agile: {
      description: 'We follow agile principles with iterative development, regular sprint cycles, and continuous delivery. Our development process emphasizes clean code, comprehensive testing, and collaborative development to ensure high-quality outcomes that meet your business objectives.'
    },
    techstack: {
      description: 'Our developers are proficient in Django, Flask, FastAPI, Pandas, NumPy, TensorFlow, PyTorch, Scikit-learn, and Celery. We build everything from web applications to data science solutions, machine learning models, and automation scripts using modern technology stacks.'
    }
  };

  useEffect(() => {
    const updateIndicator = () => {
      const activeButton = document.querySelector(`.${styles.tabButton}.${styles.active}`);
      const divider = dividerRef.current;
      
      if (activeButton && divider && tabsListRef.current) {
        const buttonRect = activeButton.getBoundingClientRect();
        const dividerRect = divider.getBoundingClientRect();
        const listRect = tabsListRef.current.getBoundingClientRect();
        
        const topOffset = buttonRect.top - listRect.top;
        const height = buttonRect.height;
        
        setIndicatorStyle({
          top: `${topOffset}px`,
          height: `${height}px`
        });
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeTab]);

  const faqData = [
    {
      question: "Why choose Python for software development?",
      answer: "Python is an excellent choice for various types of applications:",
      points: [
        "Easy to learn and read syntax",
        "Extensive libraries and frameworks",
        "Excellent for AI/ML and data science",
        "Rapid development and prototyping",
        "Strong community support",
        "Cross-platform compatibility"
      ]
    },
    {
      question: "What Python frameworks do you use?",
      answer: "We specialize in Django for full-stack web applications, Flask for lightweight APIs and microservices, FastAPI for high-performance APIs, and frameworks like Pandas, NumPy, and TensorFlow for data science and machine learning projects."
    },
    {
      question: "Can Python be used for machine learning projects?",
      answer: "Absolutely! Python is the leading language for AI and machine learning. We build:",
      points: [
        "Predictive analytics models",
        "Natural language processing systems",
        "Computer vision applications",
        "Recommendation engines",
        "Deep learning solutions",
        "Data analysis and visualization"
      ]
    },
    {
      question: "Is Python suitable for enterprise applications?",
      answer: "Yes, Python is widely used in enterprise environments. Companies like Google, Netflix, Spotify, and Instagram use Python for their core services. We build scalable enterprise solutions using Python with proper architecture, security, and performance optimization."
    },
    {
      question: "How does Python compare to other languages in terms of performance?",
      answer: "While Python may not be as fast as compiled languages like C++ or Java, it excels in development speed and maintainability. For performance-critical sections, we can integrate C/C++ extensions or use tools like Cython. For most business applications, Python's performance is more than adequate."
    },
    {
      question: "Do you provide Python application maintenance?",
      answer: "Yes, we offer comprehensive maintenance services including:",
      points: [
        "Bug fixes and troubleshooting",
        "Performance optimization",
        "Security updates and patches",
        "Feature enhancements",
        "Python version upgrades",
        "24/7 monitoring and support"
      ]
    }
  ];

  const seoData = pageSEO.python;

  return (
    <div className={styles.techPage}>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/technologies/python"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      {/* Banner Section */}
      <ConsultationBanner data={allBanners['python']} />

      {/* Why Hire Section - NOW FIRST */}
      <section className={styles.whyHireSection}>
        <div className={styles.whyHireContainer}>
          <h1 className={styles.whyHireTitle}>
            Hire Python Developers For Scalable Applications
          </h1>
          <p className={styles.whyHireSubtitle}>
            Our expert developers leverage Python's powerful capabilities for web development, CMS, portals, and machine learning to build intelligent applications that solve complex business challenges and drive innovation.
          </p>
          
          <div className={styles.whyHireContent}>
            {/* Tabs on LEFT */}
            <div className={styles.tabsList} ref={tabsListRef}>
              <button
                className={`${styles.tabButton} ${activeTab === 'devops' ? styles.active : ''}`}
                onClick={() => setActiveTab('devops')}
              >
                Accelerated DevOps
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'agile' ? styles.active : ''}`}
                onClick={() => setActiveTab('agile')}
              >
                Agile Approach
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'techstack' ? styles.active : ''}`}
                onClick={() => setActiveTab('techstack')}
              >
                Tech Stack
              </button>
            </div>

            {/* Divider Line with Orange Indicator */}
            <div className={styles.whyHireDivider} ref={dividerRef}>
              <div 
                style={{
                  position: 'absolute',
                  left: 0,
                  width: '3px',
                  background: 'var(--primary)',
                  transition: 'all 0.3s ease',
                  ...indicatorStyle
                }}
              />
            </div>

            {/* Content on RIGHT */}
            <div className={styles.tabContentWrapper}>
              <p className={styles.tabContentDescription}>
                {tabContent[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Description Section - NOW SECOND */}
      <section className={styles.descriptionSection}>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionContent}>
            <div className={styles.descriptionLeft}>
              <h2 className={styles.descriptionTitle}>
                Python Development Services For AI, ML, and Web Applications
              </h2>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>AI & Machine Learning</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Data Science & Analytics</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Web Development</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Automation & Scripting</span>
                </li>
              </ul>
            </div>
            <div className={styles.descriptionRight}>
              <p>
                Python is a versatile, high-level programming language known for its simplicity and readability. It has become the language of choice for data science, machine learning, web development, and automation. Our expert Python developers leverage its powerful libraries and frameworks to build intelligent, data-driven applications that solve complex business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqData} title="Python Development FAQs" />
    </div>
  );
}