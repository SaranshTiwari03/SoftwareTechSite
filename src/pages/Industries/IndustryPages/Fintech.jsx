import React, { useState } from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import { allBanners } from '../../../data/allBannersData';
import { Link } from 'react-router-dom';
import styles from '../IndustryPage.module.css';

export default function Fintech() {
  const [activeProcess, setActiveProcess] = useState(0);

  const comprehensiveServices = [
    {
      title: 'Digital Banking Solutions',
      description: 'Build modern digital banking platforms with account management, fund transfers, bill payments, and investment services. Our secure, scalable solutions include mobile banking apps, internet banking portals, and core banking system integrations. Enable customers to manage their finances anytime, anywhere with intuitive, feature-rich digital banking experiences.'
    },
    {
      title: 'Payment Gateway & Processing',
      description: 'Develop secure payment processing solutions with multi-currency support, fraud detection, and compliance with PCI DSS standards. Our platforms handle card payments, digital wallets, UPI, ACH transfers, and alternative payment methods. Provide seamless, secure payment experiences for businesses and consumers with real-time transaction processing.'
    },
    {
      title: 'Investment & Trading Platforms',
      description: 'Create sophisticated trading applications with real-time market data, portfolio management, automated trading, and risk analytics. Support stocks, bonds, cryptocurrencies, and derivatives trading with advanced charting, technical indicators, and social trading features. Empower investors with professional-grade tools and insights.'
    },
    {
      title: 'Personal Finance Management',
      description: 'Build smart financial wellness apps with expense tracking, budgeting tools, savings goals, credit score monitoring, and personalized financial insights. AI-powered recommendations help users make better financial decisions. Connect with bank accounts for automatic transaction categorization and comprehensive financial overview.'
    },
    {
      title: 'Blockchain & Crypto Solutions',
      description: 'Develop cryptocurrency wallets, exchanges, DeFi platforms, and blockchain-based financial services. Features include secure asset storage, peer-to-peer transactions, smart contract integration, staking, and NFT marketplaces. Build on Ethereum, Binance Smart Chain, Solana, and other blockchain networks with enterprise-grade security.'
    }
  ];

  const innovationFeatures = [
    {
      icon: '✓',
      title: 'Bank-Grade Security',
      description: 'Multi-layer encryption, biometric authentication, and fraud prevention systems.'
    },
    {
      icon: '✓',
      title: 'Real-Time Processing',
      description: 'Instant transactions, balance updates, and payment confirmations.'
    },
    {
      icon: '✓',
      title: 'KYC/AML Compliance',
      description: 'Automated identity verification and anti-money laundering checks.'
    },
    {
      icon: '✓',
      title: 'Multi-Currency Support',
      description: 'Handle multiple currencies with real-time exchange rates.'
    },
    {
      icon: '✓',
      title: 'AI-Powered Insights',
      description: 'Personalized financial advice and spending pattern analysis.'
    },
    {
      icon: '✓',
      title: 'Open Banking APIs',
      description: 'Seamless integration with banks and financial institutions.'
    }
  ];

  const developmentProcess = [
    {
      title: 'Regulatory Analysis',
      description: 'Understand compliance requirements and financial regulations.',
      icon: '🔍'
    },
    {
      title: 'Security Architecture',
      description: 'Design bank-grade security infrastructure and data protection.',
      icon: '⚙️'
    },
    {
      title: 'UI/UX Design',
      description: 'Create intuitive interfaces that build trust and simplify finance.',
      icon: '🎨'
    },
    {
      title: 'Development',
      description: 'Build secure fintech solutions with banking integrations.',
      icon: '💻'
    },
    {
      title: 'Compliance Testing',
      description: 'Rigorous testing for security, compliance, and regulations.',
      icon: '✅'
    },
    {
      title: 'Launch & Monitor',
      description: 'Deploy with continuous monitoring and regulatory compliance.',
      icon: '🚀'
    }
  ];

  const faqData = [
    {
      question: 'What types of fintech applications do you develop?',
      answer: 'We build comprehensive financial technology solutions including:',
      points: [
        'Digital banking and neobank platforms',
        'Payment gateways and processing systems',
        'Investment and trading applications',
        'Personal finance and budgeting apps',
        'Cryptocurrency wallets and exchanges',
        'Peer-to-peer lending platforms',
        'Insurance technology (InsurTech) solutions',
        'Wealth management and robo-advisory platforms'
      ]
    },
    {
      question: 'How do you ensure fintech app security and compliance?',
      answer: 'We implement comprehensive security and compliance measures:',
      points: [
        'End-to-end encryption for data transmission and storage',
        'PCI DSS compliance for payment processing',
        'KYC/AML compliance and identity verification',
        'Multi-factor and biometric authentication',
        'Regular security audits and penetration testing',
        'GDPR, SOC 2, and regional regulatory compliance',
        'Fraud detection and prevention systems',
        'Secure API design and access controls',
        'Real-time transaction monitoring'
      ]
    },
    {
      question: 'What are the key phases in fintech app development?',
      answer: 'Our fintech development follows a structured approach:',
      points: [
        'Discovery & Planning: Requirements gathering and regulatory analysis (2-4 weeks)',
        'Architecture Design: Security framework and system design (3-4 weeks)',
        'UI/UX Design: User interface and experience design (4-6 weeks)',
        'Development: Core features and integrations (8-20 weeks depending on complexity)',
        'Security Testing: Comprehensive security audits and compliance validation (3-4 weeks)',
        'Deployment & Support: Launch with ongoing monitoring and maintenance',
        'Total timeline varies from 4 months for basic apps to 18+ months for complex platforms'
      ]
    },
    {
      question: 'Can you integrate with banks and financial institutions?',
      answer: 'Yes, we provide seamless integration with:',
      points: [
        'Core banking systems via APIs',
        'Open Banking and PSD2 APIs',
        'Payment gateways (Stripe, PayPal, Square)',
        'Card networks (Visa, Mastercard)',
        'Stock market data providers',
        'Credit bureaus and KYC providers',
        'Blockchain networks and crypto exchanges',
        'Accounting software and ERP systems'
      ]
    }
  ];

  return (
    <>
      <ConsultationBanner data={allBanners['fintech']} />

      {/* Comprehensive Services Section */}
      <section className={styles.comprehensiveSection}>
        <div className={styles.container}>
          <div className={styles.comprehensiveGrid}>
            <div className={styles.comprehensiveLeft}>
              <h2 className={styles.comprehensiveTitle}>
                Comprehensive <span className={styles.orange}>Fintech App Development</span> Services
              </h2>
              <p className={styles.comprehensiveDescription}>
                We create secure, compliant, and innovative fintech solutions that transform financial services. Our platforms combine cutting-edge technology, bank-grade security, and regulatory compliance to deliver digital banking, payments, investments, and blockchain solutions that meet the highest industry standards and user expectations.
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
            Empowering Finance with <span className={styles.orange}>Secure Technology</span>
          </h2>
          <p className={styles.sectionDescription}>
            Our fintech applications integrate advanced features designed to ensure security, regulatory compliance, and exceptional user experiences. These capabilities help financial institutions and startups deliver trusted, innovative financial services.
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
            Streamlined <span className={styles.orange}>Fintech Development</span> Process
          </h2>
          <p className={styles.processSectionDescription}>
            As a specialized fintech development company, we follow a security-first, compliance-driven approach to create financial solutions that meet regulatory requirements and deliver exceptional user experiences.
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
      <FAQ faqs={faqData} title="Fintech App Development FAQs" />

      {/* Final CTA Section - FIXED WITH STOCK IMAGE */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.finalCTAContent}>
            <div className={styles.finalCTALeft}>
              <h2 className={styles.finalCTATitle}>
                Transform Finance with <span className={styles.orange}>Secure Innovation</span>
              </h2>
              <p className={styles.finalCTADescription}>
                Build compliant fintech solutions that revolutionize financial services and user experiences.
              </p>
              <Link to="/contact" className={styles.finalCTAButton}>
                Start Your Fintech Project
              </Link>
            </div>
            <div className={styles.finalCTARight}>
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&q=80" 
                alt="Fintech App Development" 
                className={styles.finalCTAImage} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}