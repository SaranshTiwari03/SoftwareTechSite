import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { CompanyConfig } from '../../../theme/theme';
import styles from './DigitalMarketing.module.css';

export default function DigitalMarketingMain() {
  const [activeTab, setActiveTab] = useState('datadriven');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsListRef = useRef(null);
  const dividerRef = useRef(null);

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

  const subServices = [
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'Boost your organic rankings and drive quality traffic with data-driven SEO strategies.',
      icon: '🔍',
      link: '/services/marketing/seo'
    },
    {
      title: 'Search Engine Marketing (SEM)',
      description: 'Maximize ROI with targeted paid advertising campaigns across search engines.',
      icon: '📊',
      link: '/services/marketing/sem'
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage your audience and build brand awareness across all social platforms.',
      icon: '📱',
      link: '/services/marketing/social-media'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Strategy & Research',
      description: 'We analyze your market, competitors, and target audience to create a comprehensive digital marketing strategy.'
    },
    {
      number: '02',
      title: 'Campaign Planning',
      description: 'Our experts design customized campaigns aligned with your business goals and budget.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We execute your campaigns across multiple channels with precision and expertise.'
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization ensure maximum performance and ROI.'
    },
    {
      number: '05',
      title: 'Analytics & Reporting',
      description: 'Detailed reports provide insights into campaign performance and opportunities for growth.'
    },
    {
      number: '06',
      title: 'Scaling & Growth',
      description: 'We scale successful campaigns and explore new channels to drive sustainable growth.'
    }
  ];

  const faqData = [
    {
      question: 'What digital marketing services do you offer?',
      answer: 'We offer comprehensive digital marketing services including SEO, SEM (PPC advertising), social media marketing, content marketing, email marketing, conversion rate optimization, and analytics. Our integrated approach ensures all channels work together to achieve your business goals.'
    },
    {
      question: 'How long does it take to see results from digital marketing?',
      answer: 'Results vary by channel and strategy:',
      points: [
        'PPC/SEM: Immediate traffic, typically see ROI within 1-3 months',
        'SEO: 3-6 months for significant organic traffic growth',
        'Social Media: 2-4 months to build engaged following',
        'Content Marketing: 4-6 months for sustained traffic growth'
      ],
      closing: 'We provide monthly reports showing progress and ROI throughout the journey.'
    },
    {
      question: 'How much should I budget for digital marketing?',
      answer: 'Digital marketing budgets vary based on your industry, competition, and goals. We recommend:',
      points: [
        'Small businesses: ₹50,000 - ₹2,00,000/month',
        'Medium businesses: ₹2,00,000 - ₹5,00,000/month',
        'Large enterprises: ₹5,00,000+/month'
      ],
      closing: 'We create customized strategies that fit your budget while maximizing ROI.'
    },
    {
      question: 'Do you work with businesses in my industry?',
      answer: 'Yes! We have experience across diverse industries including e-commerce, SaaS, healthcare, real estate, education, fintech, automotive, and more. Our data-driven approach allows us to quickly understand any industry and create effective campaigns that drive results.'
    },
    {
      question: 'What makes your digital marketing services different?',
      answer: 'Our approach combines data-driven strategies with creative execution. We focus on measurable ROI, transparent reporting, and continuous optimization. Unlike agencies that use cookie-cutter approaches, we create custom strategies tailored to your specific business goals, audience, and competitive landscape.'
    },
    {
      question: 'Can you guarantee results?',
      answer: 'While we cannot guarantee specific rankings or conversions (no ethical agency can), we do guarantee our commitment to delivering measurable improvements. We set realistic goals, track KPIs closely, and continuously optimize campaigns. Our track record shows consistent improvements in traffic, leads, and revenue for our clients.'
    }
  ];

  const tabContent = {
    datadriven: {
      title: 'Data-Driven Strategies',
      description: 'Every decision we make is backed by data and analytics. We continuously test, measure, and optimize to ensure maximum ROI on your marketing investment.',
      features: [
        'Advanced analytics and tracking',
        'A/B testing and experimentation',
        'Conversion rate optimization',
        'Performance-based recommendations'
      ]
    },
    multichannel: {
      title: 'Multi-Channel Approach',
      description: 'Reach your audience wherever they are with integrated campaigns across search, social, display, and content channels for maximum impact.',
      features: [
        'Coordinated cross-channel campaigns',
        'Consistent brand messaging',
        'Unified audience targeting',
        'Comprehensive performance tracking'
      ]
    },
    roi: {
      title: 'ROI-Focused',
      description: 'We focus on metrics that matter to your business - leads, conversions, and revenue. Every campaign is designed to deliver measurable business growth.',
      features: [
        'Clear ROI tracking and reporting',
        'Goal-oriented campaign design',
        'Budget optimization',
        'Transparent performance metrics'
      ]
    }
  };

  const seoData = pageSEO.digitalMarketingMain;

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/services/marketing"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      <ConsultationBanner data={allBanners['digital-marketing-main']} />

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <div className={styles.whyChooseGrid}>
            {/* Left: Tabs */}
            <div className={styles.tabsColumn}>
              <h1 className={styles.sectionTitle}>
                Why Choose {CompanyConfig.name} for Digital Marketing?
              </h1>
              <p className={styles.sectionSubtitle}>
                We deliver results-driven digital marketing that grows your business and maximizes ROI.
              </p>

              <div className={styles.tabsWrapper}>
                <div className={styles.tabsList} ref={tabsListRef}>
                  <button
                    onClick={() => setActiveTab('datadriven')}
                    className={`${styles.tabButton} ${activeTab === 'datadriven' ? styles.active : ''}`}
                  >
                    <span className={styles.tabIcon}>📊</span>
                    Data-Driven
                  </button>
                  <button
                    onClick={() => setActiveTab('multichannel')}
                    className={`${styles.tabButton} ${activeTab === 'multichannel' ? styles.active : ''}`}
                  >
                    <span className={styles.tabIcon}>🌐</span>
                    Multi-Channel
                  </button>
                  <button
                    onClick={() => setActiveTab('roi')}
                    className={`${styles.tabButton} ${activeTab === 'roi' ? styles.active : ''}`}
                  >
                    <span className={styles.tabIcon}>💰</span>
                    ROI-Focused
                  </button>
                </div>

                <div className={styles.divider} ref={dividerRef}>
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    width: '3px',
                    background: 'var(--primary)',
                    transition: 'all 0.3s ease',
                    borderRadius: '0 2px 2px 0',
                    ...indicatorStyle
                  }} />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className={styles.contentColumn}>
              <div className={styles.tabContent}>
                <h2 className={styles.contentTitle}>{tabContent[activeTab].title}</h2>
                <p className={styles.contentDescription}>{tabContent[activeTab].description}</p>
                
                <ul className={styles.featuresList}>
                  {tabContent[activeTab].features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Grid Section */}
      <section className={styles.servicesGridSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Digital Marketing Services</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive solutions to amplify your online presence and drive growth
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {subServices.map((service, index) => (
              <Link to={service.link} key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <span className={styles.serviceArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Digital Marketing Process</h2>
            <p className={styles.sectionSubtitle}>
              A proven methodology for driving measurable results and business growth
            </p>
          </div>

          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.processCard}>
                <div className={styles.processNumber}>{step.number}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={faqData} title="Digital Marketing FAQs" />

      {/* Final CTA Section */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.ctaGrid}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Grow Your Business Online?</h2>
              <p className={styles.ctaDescription}>
                Let's create a digital marketing strategy that drives real results. Our team of experts is ready to help you reach your target audience, generate quality leads, and increase revenue.
              </p>
              <Link to="/contact" className={styles.ctaButton}>
                Get Started Today
                <span className={styles.buttonArrow}>→</span>
              </Link>
            </div>
            <div className={styles.ctaImage}>
              <div className={styles.ctaImagePlaceholder}>
                <span className={styles.ctaImageIcon}>📈</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}