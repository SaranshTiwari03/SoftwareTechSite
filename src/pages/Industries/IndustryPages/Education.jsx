import React, { useState } from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { Link } from 'react-router-dom';
import styles from '../IndustryPage.module.css';

export default function Education() {
  const [activeProcess, setActiveProcess] = useState(0);

  const comprehensiveServices = [
    {
      title: 'Learning Management Systems (LMS)',
      description: 'Build comprehensive LMS platforms that enable seamless course creation, student enrollment, progress tracking, and assessment management. Our solutions support video lectures, interactive content, assignments, grading systems, and detailed analytics to enhance the learning experience for students and educators.'
    },
    {
      title: 'Virtual Classroom Applications',
      description: 'Interactive virtual classroom solutions with live video streaming, screen sharing, digital whiteboard, breakout rooms, and real-time collaboration tools. Enable engaging remote learning experiences that replicate the dynamics of physical classrooms while providing recorded sessions and attendance tracking.'
    },
    {
      title: 'E-Learning Mobile Apps',
      description: 'Native and cross-platform mobile learning applications that provide on-the-go access to educational content. Features include offline learning, push notifications for assignments, progress tracking, gamification elements, and social learning communities to boost student engagement and retention.'
    },
    {
      title: 'Student Information Systems',
      description: 'Comprehensive student management platforms that handle admissions, enrollment, attendance, grades, schedules, and communication between students, parents, and teachers. Streamline administrative tasks and provide real-time insights into student performance and institutional metrics.'
    },
    {
      title: 'AI-Powered Learning Tools',
      description: 'Intelligent tutoring systems and adaptive learning platforms that use AI to personalize educational content based on individual learning styles and pace. Features include automated grading, content recommendations, learning path optimization, and predictive analytics for student success.'
    }
  ];

  const innovationFeatures = [
    {
      icon: '✓',
      title: 'Interactive Content',
      description: 'Engaging multimedia lessons with videos, quizzes, and interactive exercises.'
    },
    {
      icon: '✓',
      title: 'Live Classes',
      description: 'Real-time virtual classrooms with video conferencing and collaboration tools.'
    },
    {
      icon: '✓',
      title: 'Progress Tracking',
      description: 'Comprehensive analytics and reporting on student performance and engagement.'
    },
    {
      icon: '✓',
      title: 'Gamification',
      description: 'Badges, leaderboards, and rewards to motivate and engage learners.'
    },
    {
      icon: '✓',
      title: 'Assessment Tools',
      description: 'Automated quizzes, assignments, and grading with instant feedback.'
    },
    {
      icon: '✓',
      title: 'Social Learning',
      description: 'Discussion forums, peer collaboration, and community features.'
    }
  ];

  const developmentProcess = [
    {
      title: 'Discovery & Planning',
      description: 'Understand educational goals, target audience, and curriculum requirements.',
      icon: '🔍'
    },
    {
      title: 'Platform Selection',
      description: 'Choose the right technology stack for scalable and engaging learning experiences.',
      icon: '⚙️'
    },
    {
      title: 'UI/UX Design',
      description: 'Create intuitive, accessible interfaces that enhance learning and engagement.',
      icon: '🎨'
    },
    {
      title: 'Development',
      description: 'Build feature-rich educational platforms with robust content management.',
      icon: '💻'
    },
    {
      title: 'Quality Testing',
      description: 'Ensure platform reliability, security, and seamless user experience.',
      icon: '✅'
    },
    {
      title: 'Launch & Support',
      description: 'Deploy your platform with ongoing maintenance and feature updates.',
      icon: '🚀'
    }
  ];

  const faqData = [
    {
      question: 'What types of educational applications do you develop?',
      answer: 'We develop a comprehensive range of EdTech solutions including:',
      points: [
        'Learning Management Systems (LMS)',
        'Virtual classroom and video conferencing platforms',
        'Mobile learning applications',
        'Student information and management systems',
        'Online course marketplaces',
        'Language learning applications',
        'Skill development and training platforms',
        'Educational games and interactive content'
      ]
    },
    {
      question: 'How long does it take to develop an educational platform?',
      answer: 'Development timelines depend on platform complexity:',
      points: [
        'Basic e-learning app: 3-5 months',
        'LMS with standard features: 6-8 months',
        'Comprehensive virtual classroom: 8-12 months',
        'Enterprise-level educational platform: 12-18 months',
        'Timeline includes design, development, testing, and deployment'
      ]
    },
    {
      question: 'Can you integrate with existing educational tools and systems?',
      answer: 'Yes, we provide seamless integration with popular educational platforms:',
      points: [
        'LMS platforms (Moodle, Canvas, Blackboard)',
        'Video conferencing tools (Zoom, Microsoft Teams)',
        'Content libraries and SCORM compliance',
        'Student Information Systems (SIS)',
        'Payment gateways for course purchases',
        'Analytics and reporting tools',
        'Third-party educational APIs'
      ]
    },
    {
      question: 'What features make an educational app successful?',
      answer: 'Key features that drive engagement and learning outcomes:',
      points: [
        'Intuitive and user-friendly interface',
        'Interactive and multimedia-rich content',
        'Personalized learning paths',
        'Real-time progress tracking and analytics',
        'Social learning and collaboration features',
        'Gamification and reward systems',
        'Offline access to learning materials',
        'Mobile-responsive design'
      ]
    }
  ];

  const seoData = pageSEO.education;

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/industries/education"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      <ConsultationBanner data={allBanners['education']} />

      {/* Comprehensive Services Section */}
      <section className={styles.comprehensiveSection}>
        <div className={styles.container}>
          <div className={styles.comprehensiveGrid}>
            <div className={styles.comprehensiveLeft}>
              <h1 className={styles.comprehensiveTitle}>
                Comprehensive <span className={styles.orange}>Education App Development</span> Services
              </h1>
              <p className={styles.comprehensiveDescription}>
                We create innovative EdTech solutions that transform traditional learning into engaging digital experiences. Our educational platforms combine cutting-edge technology with pedagogical best practices to deliver effective, accessible, and scalable learning solutions for students, educators, and institutions worldwide.
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
            Empowering Education with <span className={styles.orange}>Next-Gen Features</span>
          </h2>
          <p className={styles.sectionDescription}>
            Our educational applications integrate powerful features designed to enhance learning outcomes, boost student engagement, and streamline educational operations. These capabilities create immersive learning experiences that cater to diverse learning styles and needs.
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
            Streamlined <span className={styles.orange}>EdTech Development</span> Process
          </h2>
          <p className={styles.processSectionDescription}>
            As a leading educational app development company, we follow a structured approach to create engaging, effective, and scalable learning solutions that meet the evolving needs of modern education.
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
      <FAQ faqs={faqData} title="Education App Development FAQs" />

      {/* Final CTA Section */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.finalCTAContent}>
            <div className={styles.finalCTALeft}>
              <h2 className={styles.finalCTATitle}>
                Build the Future of <span className={styles.orange}>Digital Learning</span>
              </h2>
              <p className={styles.finalCTADescription}>
                Create engaging educational platforms that inspire learning and drive academic success.
              </p>
              <Link to="/contact" className={styles.finalCTAButton}>
                Start Your EdTech Project
              </Link>
            </div>
            <div className={styles.finalCTARight}>
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop" 
                alt="Education App Development" 
                className={styles.finalCTAImage} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}