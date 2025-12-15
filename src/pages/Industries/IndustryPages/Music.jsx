import React, { useState } from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { Link } from 'react-router-dom';
import styles from '../IndustryPage.module.css';

export default function Music() {
  const [activeStep, setActiveStep] = useState(0);

  const comprehensiveServices = [
    {
      title: 'Music Streaming Platforms',
      description: 'Build feature-rich music streaming applications with high-quality audio playback, personalized playlists, offline downloads, and social sharing capabilities. Our platforms support millions of tracks with seamless streaming, intelligent recommendations, and engaging user experiences that keep listeners coming back for more.'
    },
    {
      title: 'Music Production & DAW Apps',
      description: 'Professional-grade digital audio workstation applications for music creation, recording, editing, and mixing. Features include multi-track recording, virtual instruments, audio effects, MIDI support, and cloud collaboration tools for musicians, producers, and audio engineers to create studio-quality music on any device.'
    },
    {
      title: 'Artist & Fan Engagement Platforms',
      description: 'Social platforms connecting artists with their fanbase through exclusive content, live streaming, merchandise sales, and direct communication. Enable artists to monetize their content, schedule virtual concerts, share behind-the-scenes footage, and build loyal communities while providing fans with unique experiences.'
    },
    {
      title: 'Music Discovery & Recommendation Apps',
      description: 'AI-powered music discovery platforms that help users find new artists and songs based on their listening habits, mood, and preferences. Advanced algorithms analyze user behavior, musical attributes, and social trends to deliver personalized recommendations and create engaging discovery experiences.'
    },
    {
      title: 'Music Learning & Education Apps',
      description: 'Interactive music education platforms offering instrument lessons, music theory courses, and practice tools. Features include video tutorials, interactive sheet music, progress tracking, virtual instruments, and gamified learning experiences that make music education accessible and engaging for learners of all levels.'
    }
  ];

  const innovationFeatures = [
    {
      icon: '✓',
      title: 'High-Quality Streaming',
      description: 'Lossless audio streaming with adaptive bitrate for optimal listening experience.'
    },
    {
      icon: '✓',
      title: 'Personalized Playlists',
      description: 'AI-powered recommendations and custom playlists based on listening habits.'
    },
    {
      icon: '✓',
      title: 'Offline Playback',
      description: 'Download and listen to music offline without internet connection.'
    },
    {
      icon: '✓',
      title: 'Social Features',
      description: 'Share playlists, follow friends, and discover what others are listening to.'
    },
    {
      icon: '✓',
      title: 'Live Streaming',
      description: 'Host and attend live concerts, DJ sets, and exclusive performances.'
    },
    {
      icon: '✓',
      title: 'Lyrics Integration',
      description: 'Synchronized lyrics display with time-stamped karaoke mode.'
    }
  ];

  const developmentSteps = [
    {
      title: 'Project Discovery',
      icon: '🔍',
      description: 'Define target audience, music content strategy, and platform features.'
    },
    {
      title: 'Tech Stack Selection',
      icon: '⚙️',
      description: 'Select the optimal technology for high performance and seamless integration.'
    },
    {
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'Create visually stunning, intuitive interfaces for music lovers.'
    },
    {
      title: 'App Development',
      icon: '💻',
      description: 'Build high-performance audio streaming with cloud infrastructure.'
    },
    {
      title: 'Quality Assurance',
      icon: '✅',
      description: 'Test audio quality, streaming performance, and user experience.'
    },
    {
      title: 'Deployment & Support',
      icon: '🚀',
      description: 'Deploy platform with marketing strategies and continuous improvements.'
    }
  ];

  const faqData = [
    {
      question: 'What types of music applications do you develop?',
      answer: 'We create diverse music technology solutions including:',
      points: [
        'Music streaming and radio platforms',
        'Digital audio workstations (DAW)',
        'Music production and beat-making apps',
        'Artist management and promotion platforms',
        'Music learning and education apps',
        'Live concert streaming applications',
        'Music discovery and recommendation engines',
        'Podcast and audio content platforms'
      ]
    },
    {
      question: 'How do you handle music licensing and copyright?',
      answer: 'We help navigate music industry legal requirements:',
      points: [
        'Consultation on music licensing agreements',
        'Integration with rights management systems',
        'Compliance with copyright laws and regulations',
        'Partnership guidance with record labels and distributors',
        'Royalty calculation and payment systems',
        'Content ID and copyright detection implementation',
        'DMCA compliance and takedown procedures'
      ]
    },
    {
      question: 'What features are essential for a music streaming app?',
      answer: 'Key features that drive user engagement and retention:',
      points: [
        'High-quality audio streaming (up to lossless)',
        'Personalized recommendations and playlists',
        'Offline download capabilities',
        'Social sharing and collaborative playlists',
        'Cross-device synchronization',
        'Search with filters (genre, artist, mood)',
        'Lyrics and metadata display',
        'Subscription and payment management'
      ]
    },
    {
      question: 'What is the development timeline for music streaming platforms?',
      answer: 'Development timelines vary based on features and complexity:',
      points: [
        'Basic music player app: 3-5 months (core playback features)',
        'Music streaming platform: 6-10 months (with recommendations)',
        'Full-featured streaming service: 10-15 months (social features, offline mode)',
        'Enterprise music platform: 15-24 months (licensing, analytics, monetization)',
        'Timeline includes licensing consultation, design, development, and testing',
        'We follow agile approach for iterative development and user feedback'
      ]
    }
  ];

  const seoData = pageSEO.music;

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/industries/music"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      <ConsultationBanner data={allBanners['music']} />

      {/* Comprehensive Services Section */}
      <section className={styles.comprehensiveSection}>
        <div className={styles.container}>
          <div className={styles.comprehensiveGrid}>
            <div className={styles.comprehensiveLeft}>
              <h1 className={styles.comprehensiveTitle}>
                Comprehensive <span className={styles.orange}>Music App Development</span> Services
              </h1>
              <p className={styles.comprehensiveDescription}>
                We create innovative music technology solutions that revolutionize how people discover, create, share, and enjoy music. Our platforms combine cutting-edge audio technology, intelligent algorithms, and engaging user experiences to deliver world-class music applications for streaming, production, learning, and artist-fan engagement.
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
            Advancing Music with <span className={styles.orange}>Digital Innovation</span>
          </h2>
          <p className={styles.sectionDescription}>
            Our music applications integrate powerful features designed to enhance listening experiences, support music creation, and foster artist-fan connections. These capabilities create immersive and engaging platforms that music lovers and creators will embrace.
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
            Streamlined <span className={styles.orange}>Music App Development</span> Process
          </h2>
          <p className={styles.processSectionDescription}>
            As a specialized music app development company, we combine technical expertise with music industry knowledge to create platforms that resonate with artists, creators, and music enthusiasts worldwide.
          </p>

          <div className={styles.processContainer}>
            <div className={styles.processSteps}>
              {developmentSteps.map((step, index) => (
                <div
                  key={index}
                  className={`${styles.processStep} ${activeStep === index ? styles.activeStep : ''}`}
                  onClick={() => setActiveStep(index)}
                >
                  {step.title}
                </div>
              ))}
            </div>

            <div className={styles.processContent}>
              <div className={styles.processCircle}></div>
              <div className={styles.processIcon}>{developmentSteps[activeStep].icon}</div>
              <h3 className={styles.processTitle}>{developmentSteps[activeStep].title}</h3>
              <p className={styles.processDescription}>{developmentSteps[activeStep].description}</p>
              <Link to="/contact" className={styles.processButton}>
                Talk to Our Experts
              </Link>
              <div className={styles.processArrow}>›</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqData} title="Music App Development FAQs" />

      {/* Final CTA Section */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.finalCTAContent}>
            <div className={styles.finalCTALeft}>
              <h2 className={styles.finalCTATitle}>
                Create the Next <span className={styles.orange}>Music Revolution</span>
              </h2>
              <p className={styles.finalCTADescription}>
                Build innovative music platforms that connect artists with fans and transform the music experience.
              </p>
              <Link to="/contact" className={styles.finalCTAButton}>
                Start Your Music Project
              </Link>
            </div>
            <div className={styles.finalCTARight}>
              <img 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop&q=80" 
                alt="Music App Development" 
                className={styles.finalCTAImage} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}