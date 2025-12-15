import React, { useState } from 'react';
import styles from './About.module.css';
import { CompanyConfig } from '../../theme/theme';
import SEO from '../../components/SEO/SEO';
import { pageSEO } from '../../data/seoData';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');
  const companyName = CompanyConfig.name;
  const seoData = pageSEO.about;

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/insights"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      <article className={styles.aboutPage}>
        {/* Hero Banner */}
        <section className={styles.heroBanner}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>About {companyName}</h1>
              <p className={styles.heroDescription}>
                {companyName} is a globally trusted software solutions provider currently serving both startups and 
                enterprise-level organizations, delivering high-end technology products. It is our vision to 
                empower our clients.
              </p>
              <ul className={styles.heroFeatures}>
                <li><span className={styles.checkmark}>✓</span> Your designated business</li>
                <li><span className={styles.checkmark}>✓</span> Digital Transformation</li>
                <li><span className={styles.checkmark}>✓</span> Result-focused approach</li>
                <li><span className={styles.checkmark}>✓</span> Highest code quality</li>
              </ul>
            </div>
          </div>
          <div className={styles.decorCircle1}></div>
          <div className={styles.decorCircle2}></div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className={styles.mvvSection}>
          <div className={styles.container}>
            {/* Tab Navigation */}
            <nav className={styles.tabNavigation} aria-label="Company information tabs">
              <button
                onClick={() => setActiveTab('mission')}
                className={`${styles.tabButton} ${activeTab === 'mission' ? styles.activeTab : ''}`}
                aria-selected={activeTab === 'mission'}
                role="tab"
              >
                Mission
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`${styles.tabButton} ${activeTab === 'vision' ? styles.activeTab : ''}`}
                aria-selected={activeTab === 'vision'}
                role="tab"
              >
                Vision
              </button>
              <button
                onClick={() => setActiveTab('values')}
                className={`${styles.tabButton} ${activeTab === 'values' ? styles.activeTab : ''}`}
                aria-selected={activeTab === 'values'}
                role="tab"
              >
                Values
              </button>
            </nav>

            {/* Tab Content */}
            <div className={styles.tabContent}>
              {/* Left - Content */}
              <div className={styles.contentLeft}>
                {activeTab === 'mission' && (
                  <div className={styles.fadeIn}>
                    <h2 className={styles.contentTitle}>
                      To be forever curious and impactful in revolutionizing technology for our partner
                    </h2>
                    <p className={styles.contentText}>
                      We aspire to create and deliver the best digital solutions for businesses wanting to 
                      acquire a competitive edge in the industry and serve their customers through robust 
                      digital channels.
                    </p>
                    <p className={styles.contentText}>
                      {companyName} aims to help startups and organizations recognize their potential and 
                      leverage optimum, highly customized solutions for business growth and ROI.
                    </p>
                  </div>
                )}

                {activeTab === 'vision' && (
                  <div className={styles.fadeIn}>
                    <h2 className={styles.contentTitle}>
                      Transforming the world through technologies that disrupt
                    </h2>
                    <p className={styles.contentText}>
                      We aim to extend the scope of current technologies into societal issues and deliver 
                      back to the community for the greater good.
                    </p>
                    <p className={styles.contentText}>
                      Our vision is to help 20 million lives with better education and employment 
                      opportunities, acquire ten active ventures, scale five businesses to exit, get listed to 
                      Nasdaq, become the most preferred workplace in Pakistan, and enter the Fortune 500 
                      club in the next five years.
                    </p>
                  </div>
                )}

                {activeTab === 'values' && (
                  <div className={styles.fadeIn}>
                    {[
                      {
                        title: 'Curiosity',
                        desc: 'We encourage our team members to question the norm and explore innovative solutions to problems.'
                      },
                      {
                        title: 'Honesty',
                        desc: 'We value integrity and ethical behavior in all our interactions, both internally and externally.'
                      },
                      {
                        title: 'Positivity',
                        desc: 'We value the power of positivity and believe that it leads to higher productivity, creativity, and job satisfaction.'
                      },
                      {
                        title: 'Impact',
                        desc: `We strive to make a meaningful impact in everything we do at ${companyName}.`
                      },
                      {
                        title: 'Disruption',
                        desc: 'We believe that disruptive innovation is the key to solving complex problems and creating new opportunities.'
                      }
                    ].map((value, idx) => (
                      <div key={idx} className={styles.valueItem}>
                        <h3 className={styles.valueTitle}>{value.title}</h3>
                        <p className={styles.valueDesc}>{value.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right - Image */}
              <div className={styles.contentRight}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration and brainstorming session at our office"
                  className={styles.contentImage}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className={styles.impactSection}>
          <div className={styles.container}>
            <div className={styles.impactGrid}>
              <div className={styles.impactLeft}>
                <div className={styles.impactIcon} aria-hidden="true">
                  <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
                    <rect x="20" y="20" width="40" height="40" fill="#FF7D28" opacity="0.8" transform="rotate(45 40 40)"/>
                    <rect x="80" y="20" width="40" height="40" fill="#FF7D28" opacity="0.6" transform="rotate(45 100 40)"/>
                    <rect x="20" y="80" width="40" height="40" fill="#FF7D28" opacity="0.6" transform="rotate(45 40 100)"/>
                    <rect x="80" y="80" width="40" height="40" fill="#FF7D28" opacity="0.9" transform="rotate(45 100 100)"/>
                  </svg>
                </div>
              </div>
              <div className={styles.impactRight}>
                <h2 className={styles.impactTitle}>Our Impact</h2>
                <h3 className={styles.impactSubtitle}>POWERED WITH A PURPOSE</h3>
                <p className={styles.impactText}>
                  {companyName} came to be when we recognized the commonplace click-visual activity affecting 
                  almost everything the way we do business and communicate. We realized that the future 
                  was digital, and the development of the digital ecosystem needed groundwork, like our 
                  tangible networks.
                </p>
                <p className={styles.impactText}>
                  We are not programmers; we are programmers powered by great human benefits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              {/* Left - Text */}
              <div className={styles.statsLeft}>
                <h2 className={styles.statsTitle}>
                  In Pursuit Of Scaling The Digital Ecosystem Through Top-Tier Product Teams
                </h2>
                <h3 className={styles.statsSubtitle}>OUR STORY</h3>
                <p className={styles.statsText}>
                  {companyName} came into existence after two tech enthusiasts from different backgrounds 
                  joined forces to create something bound to become a difference-maker in the digital world.
                </p>
                <p className={styles.statsText}>
                  The company started in 2018 as a mobile app development company but has since 
                  grown into a full-stack digital transformation organization offering enterprise software 
                  development and technical consultancy services for businesses worldwide.
                </p>
              </div>

              {/* Right - Stats Cards */}
              <div className={styles.statsRight}>
                {[
                  { number: '100+', label: 'Successfully completed projects' },
                  { number: '300+', label: 'In-house engineers' },
                  { number: '20+', label: 'Industries Served' },
                  { number: '65+', label: 'Clutch Reviews' }
                ].map((stat, idx) => (
                  <div key={idx} className={styles.statCard}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}