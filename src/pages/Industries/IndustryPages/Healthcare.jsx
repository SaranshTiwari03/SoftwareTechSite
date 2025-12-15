import React, { useState } from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { Link } from 'react-router-dom';
import styles from '../IndustryPage.module.css';

export default function Healthcare() {
  const [activeProcess, setActiveProcess] = useState(0);

  const comprehensiveServices = [
    {
      title: 'Telemedicine App Development',
      description: 'Build secure and HIPAA-compliant telemedicine platforms that connect patients with healthcare providers remotely. Our solutions include video consultations, appointment scheduling, e-prescriptions, and real-time health monitoring, enabling accessible healthcare delivery from anywhere.'
    },
    {
      title: 'Healthcare Management Systems',
      description: 'Comprehensive hospital and clinic management systems that streamline operations, patient records, billing, inventory management, and staff coordination. Our EHR/EMR solutions ensure seamless data flow and improved patient care while maintaining strict compliance with healthcare regulations.'
    },
    {
      title: 'Patient Monitoring Solutions',
      description: 'IoT-enabled remote patient monitoring apps that track vital signs, medication adherence, and health metrics in real-time. These solutions enable proactive healthcare delivery, reduce hospital readmissions, and empower patients to manage chronic conditions effectively.'
    },
    {
      title: 'Medical E-Commerce Platforms',
      description: 'Secure online pharmacy and medical supply platforms with features like prescription uploads, medicine delivery tracking, automated refills, and integration with healthcare providers. Our solutions ensure safe transactions and authentic medication delivery.'
    },
    {
      title: 'Healthcare Analytics & AI',
      description: 'Advanced AI-powered diagnostic tools and predictive analytics platforms that help healthcare providers make data-driven decisions. Our solutions include medical imaging analysis, disease prediction models, and patient outcome analytics for improved treatment plans.'
    }
  ];

  const innovationFeatures = [
    {
      icon: '✓',
      title: 'HIPAA Compliance',
      description: 'End-to-end encryption and security measures ensuring full compliance with healthcare data regulations.'
    },
    {
      icon: '✓',
      title: 'Video Consultations',
      description: 'High-quality video calling with screen sharing and digital prescription capabilities.'
    },
    {
      icon: '✓',
      title: 'EHR/EMR Integration',
      description: 'Seamless integration with existing electronic health record systems for unified patient data.'
    },
    {
      icon: '✓',
      title: 'Appointment Scheduling',
      description: 'Smart booking system with automated reminders and calendar synchronization.'
    },
    {
      icon: '✓',
      title: 'E-Prescriptions',
      description: 'Digital prescription generation with pharmacy integration and medication tracking.'
    },
    {
      icon: '✓',
      title: 'Health Tracking',
      description: 'Real-time monitoring of vital signs, symptoms, and medication adherence.'
    }
  ];

  const developmentProcess = [
    {
      title: 'Requirements Analysis',
      description: 'Identify healthcare needs, compliance requirements, and define project scope.',
      icon: '🔍'
    },
    {
      title: 'Compliance Planning',
      description: 'Ensure HIPAA, GDPR, and other healthcare regulations are integrated from the start.',
      icon: '🔒'
    },
    {
      title: 'UI/UX Design',
      description: 'Create intuitive, accessible interfaces for patients and healthcare professionals.',
      icon: '🎨'
    },
    {
      title: 'Secure Development',
      description: 'Build robust healthcare solutions with enterprise-grade security and encryption.',
      icon: '💻'
    },
    {
      title: 'Testing & Validation',
      description: 'Rigorous testing for security, performance, and regulatory compliance.',
      icon: '✅'
    },
    {
      title: 'Deployment & Support',
      description: 'Launch with ongoing maintenance, updates, and 24/7 technical support.',
      icon: '🚀'
    }
  ];

  const faqData = [
    {
      question: 'What types of healthcare applications do you develop?',
      answer: 'We develop comprehensive healthcare solutions including:',
      points: [
        'Telemedicine and virtual consultation platforms',
        'Hospital and clinic management systems',
        'Electronic Health Records (EHR/EMR) systems',
        'Patient monitoring and wearable device apps',
        'Online pharmacy and medicine delivery platforms',
        'Medical billing and insurance management systems',
        'Healthcare analytics and AI diagnostic tools'
      ]
    },
    {
      question: 'How do you ensure HIPAA compliance in healthcare apps?',
      answer: 'We implement comprehensive security measures for HIPAA compliance:',
      points: [
        'End-to-end encryption for all patient data',
        'Secure authentication and access controls',
        'Audit logs and activity tracking',
        'Regular security assessments and penetration testing',
        'Data backup and disaster recovery protocols',
        'Business Associate Agreements (BAA) compliance',
        'Staff training on HIPAA requirements'
      ]
    },
    {
      question: 'Can you integrate with existing healthcare systems?',
      answer: 'Yes, we specialize in healthcare system integration:',
      points: [
        'EHR/EMR systems (Epic, Cerner, Allscripts)',
        'HL7 and FHIR standards implementation',
        'Medical device and IoT integration',
        'Laboratory Information Systems (LIS)',
        'Pharmacy Management Systems',
        'Insurance and billing platforms',
        'Telehealth platforms and APIs'
      ]
    },
    {
      question: 'What is the development process for healthcare applications?',
      answer: 'Our healthcare development follows a structured methodology:',
      points: [
        'Discovery Phase: Requirements analysis and compliance review (3-4 weeks)',
        'Design Phase: UI/UX design with accessibility standards (4-6 weeks)',
        'Development Phase: Secure coding with HIPAA compliance (10-24 weeks)',
        'Testing Phase: Security audits, compliance validation, and QA (4-6 weeks)',
        'Deployment: Launch with documentation and training (2-3 weeks)',
        'Support: Ongoing maintenance, updates, and compliance monitoring',
        'Total timeline: 4-6 months for basic apps, 12-18 months for complex platforms'
      ]
    }
  ];

  const seoData = pageSEO.healthcare;

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/industries/healthcare"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      <ConsultationBanner data={allBanners['healthcare']} />

      {/* Comprehensive Services Section */}
      <section className={styles.comprehensiveSection}>
        <div className={styles.container}>
          <div className={styles.comprehensiveGrid}>
            <div className={styles.comprehensiveLeft}>
              <h1 className={styles.comprehensiveTitle}>
                Comprehensive <span className={styles.orange}>Healthcare App Development</span> Services
              </h1>
              <p className={styles.comprehensiveDescription}>
                We deliver cutting-edge healthcare software solutions that transform patient care delivery and streamline medical operations. Our HIPAA-compliant applications integrate seamlessly with existing healthcare infrastructure while providing intuitive experiences for patients, providers, and administrators. From telemedicine to hospital management, we build secure, scalable solutions that improve healthcare outcomes.
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
            Delivering Healthcare Excellence with <span className={styles.orange}>Advanced Technology</span> Solutions
          </h2>
          <p className={styles.sectionDescription}>
            Our healthcare applications integrate essential features designed to enhance patient care, ensure data security, and streamline medical workflows. These capabilities address the critical needs of modern healthcare delivery while maintaining strict regulatory compliance.
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
            Streamlined <span className={styles.orange}>Healthcare App Development</span> Process
          </h2>
          <p className={styles.processSectionDescription}>
            As a trusted healthcare app development company, we follow a rigorous, compliance-first approach to create secure, reliable, and user-friendly healthcare solutions that meet the highest industry standards.
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
      <FAQ faqs={faqData} title="Healthcare App Development FAQs" />

      {/* Final CTA Section */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.finalCTAContent}>
            <div className={styles.finalCTALeft}>
              <h2 className={styles.finalCTATitle}>
                Transform Healthcare with <span className={styles.orange}>Secure Digital Solutions</span>
              </h2>
              <p className={styles.finalCTADescription}>
                Build HIPAA-compliant healthcare applications that improve patient outcomes and streamline medical operations.
              </p>
              <Link to="/contact" className={styles.finalCTAButton}>
                Start Your Healthcare Project
              </Link>
            </div>
            <div className={styles.finalCTARight}>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80" 
                alt="Healthcare App Development" 
                className={styles.finalCTAImage} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}