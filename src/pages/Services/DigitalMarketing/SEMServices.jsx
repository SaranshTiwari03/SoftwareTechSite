import { useState } from 'react';
import { Link } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { CompanyConfig } from '../../../theme/theme';
import styles from './DigitalMarketing.module.css';

export default function SEMServices() {
  const [activeProcess, setActiveProcess] = useState(0);

  const features = [
    {
      icon: '🎯',
      title: 'Targeted Advertising',
      description: 'Reach your ideal customers with precision targeting based on keywords, demographics, and behavior.'
    },
    {
      icon: '💰',
      title: 'Budget Optimization',
      description: 'Maximize ROI with intelligent bid management and budget allocation across campaigns.'
    },
    {
      icon: '📊',
      title: 'Performance Tracking',
      description: 'Real-time analytics and reporting to measure campaign performance and identify opportunities.'
    },
    {
      icon: '🔄',
      title: 'A/B Testing',
      description: 'Continuous testing of ad copy, landing pages, and targeting to improve conversion rates.'
    },
    {
      icon: '📱',
      title: 'Multi-Platform Campaigns',
      description: 'Manage campaigns across Google Ads, Bing Ads, and other search platforms from one place.'
    },
    {
      icon: '⚡',
      title: 'Quick Results',
      description: 'Start driving traffic and generating leads immediately with paid search advertising.'
    }
  ];

  const semServices = [
    {
      title: 'Google Ads Management',
      description: 'Expert management of Google Search, Display, Shopping, and Video campaigns for maximum ROI.'
    },
    {
      title: 'Bing Ads Management',
      description: 'Tap into Bing\'s audience with professionally managed campaigns on Microsoft Advertising platform.'
    },
    {
      title: 'Keyword Research',
      description: 'Identify high-converting keywords with the right balance of search volume and competition.'
    },
    {
      title: 'Ad Copy Creation',
      description: 'Compelling ad copy that attracts clicks and drives conversions from qualified traffic.'
    },
    {
      title: 'Landing Page Optimization',
      description: 'Design and optimize landing pages that convert visitors into leads and customers.'
    },
    {
      title: 'Remarketing Campaigns',
      description: 'Re-engage visitors who didn\'t convert with strategic remarketing across search and display.'
    },
    {
      title: 'Shopping Ads',
      description: 'Showcase your products with Google Shopping ads that drive qualified e-commerce traffic.'
    },
    {
      title: 'Conversion Tracking',
      description: 'Implement comprehensive tracking to measure conversions, sales, and ROI accurately.'
    }
  ];

  const processSteps = [
    {
      title: 'Goal Setting & Strategy',
      description: 'We start by understanding your business goals, target audience, and budget to create a comprehensive SEM strategy.',
      activities: ['Business goal analysis', 'Audience research', 'Competitor analysis', 'Budget planning']
    },
    {
      title: 'Campaign Setup',
      description: 'Our experts set up your campaigns with proper structure, tracking, and targeting for optimal performance.',
      activities: ['Account structure', 'Keyword research', 'Ad group creation', 'Conversion tracking']
    },
    {
      title: 'Ad Creation',
      description: 'We create compelling ad copy with strong calls-to-action that attract clicks from qualified prospects.',
      activities: ['Ad copywriting', 'Extension setup', 'A/B test variants', 'Quality score optimization']
    },
    {
      title: 'Landing Page Optimization',
      description: 'Design and optimize landing pages that align with ad messaging and maximize conversion rates.',
      activities: ['Landing page design', 'Message matching', 'CTA optimization', 'Mobile optimization']
    },
    {
      title: 'Campaign Launch',
      description: 'Launch campaigns with careful monitoring to ensure everything works correctly from day one.',
      activities: ['Campaign activation', 'Bid setup', 'Budget allocation', 'Initial monitoring']
    },
    {
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring and optimization to improve performance and maximize ROI over time.',
      activities: ['Performance analysis', 'Bid adjustments', 'A/B testing', 'Budget reallocation']
    },
    {
      title: 'Reporting & Scaling',
      description: 'Regular reports showing results and recommendations for scaling successful campaigns.',
      activities: ['Monthly reporting', 'ROI analysis', 'Scaling strategies', 'New opportunities']
    }
  ];

  const faqData = [
    {
      question: 'What is the difference between SEO and SEM?',
      answer: 'SEO (Search Engine Optimization) focuses on improving organic rankings through content and technical optimization, while SEM (Search Engine Marketing) uses paid advertising to appear in search results. SEO takes longer but provides long-term results, while SEM delivers immediate traffic but requires ongoing ad spend. We recommend using both strategies together for maximum visibility.'
    },
    {
      question: 'How much should I budget for SEM?',
      answer: 'SEM budgets vary widely based on your industry, competition, and goals. We recommend:',
      points: [
        'Small businesses: ₹30,000 - ₹1,00,000/month (ads + management)',
        'Medium businesses: ₹1,00,000 - ₹3,00,000/month',
        'Large enterprises: ₹3,00,000+/month',
        'Note: 80-90% goes to ad spend, 10-20% to management'
      ],
      closing: 'We optimize campaigns to maximize ROI regardless of your budget size.'
    },
    {
      question: 'How quickly can I see results from SEM?',
      answer: 'SEM can drive traffic immediately once campaigns are live. However, optimal results typically develop over time:',
      points: [
        'Immediate: Traffic starts flowing within hours of launch',
        '1-2 weeks: Initial data for optimization',
        '1 month: Meaningful performance data and improvements',
        '2-3 months: Optimized campaigns with strong ROI'
      ],
      closing: 'We provide weekly reports during the first month to track progress closely.'
    },
    {
      question: 'What platforms do you manage SEM campaigns on?',
      answer: 'We manage paid search campaigns across all major platforms including Google Ads (Search, Display, Shopping, YouTube), Microsoft Advertising (Bing), and other search engines as needed. We also integrate with remarketing platforms and can coordinate with social media advertising for a comprehensive approach.'
    },
    {
      question: 'How do you optimize SEM campaigns?',
      answer: 'Our optimization process includes continuous keyword refinement, bid adjustments based on performance data, A/B testing of ad copy and landing pages, negative keyword management to reduce wasted spend, audience targeting optimization, and regular review of quality scores. We make data-driven decisions to improve campaign performance continuously.'
    },
    {
      question: 'What is a good ROI for SEM campaigns?',
      answer: 'A "good" ROI varies by industry and business model. Generally, we aim for at least 3:1 return (₹3 revenue for every ₹1 spent), but many campaigns achieve 5:1 or higher. E-commerce typically sees 4-5:1, while B2B services with high customer lifetime value can see 10:1 or more. We set realistic ROI goals based on your specific business metrics.'
    },
    {
      question: 'Do you provide transparent reporting?',
      answer: 'Absolutely. We provide detailed monthly reports showing all key metrics including impressions, clicks, CTR, conversions, cost per conversion, and ROI. You also get full access to your ad accounts so you can monitor performance in real-time. We believe in complete transparency and data ownership.'
    }
  ];

  const seoData = pageSEO.semServices;

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/services/marketing/sem"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      <ConsultationBanner data={allBanners['sem-services']} />

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Why Choose SEM for Your Business?</h1>
            <p className={styles.sectionSubtitle}>
              Drive immediate, qualified traffic and generate leads with strategic paid search advertising
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h2 className={styles.featureTitle}>{feature.title}</h2>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEM Services Grid */}
      <section className={styles.servicesDetailSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our SEM Services Include</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive paid search management across all major platforms
            </p>
          </div>

          <div className={styles.servicesDetailGrid}>
            {semServices.map((service, index) => (
              <div key={index} className={styles.serviceDetailCard}>
                <div className={styles.serviceDetailIcon}>✓</div>
                <h3 className={styles.serviceDetailTitle}>{service.title}</h3>
                <p className={styles.serviceDetailDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Content Section */}
      <section className={styles.twoColumnSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.imageColumn}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.imageIcon}>📊</span>
              </div>
            </div>
            <div className={styles.contentColumn}>
              <h2 className={styles.columnTitle}>Maximize ROI with Expert SEM Management</h2>
              <p className={styles.columnText}>
                Search Engine Marketing is one of the most effective ways to drive immediate, qualified traffic to your website. With proper management, SEM campaigns can deliver consistent leads and revenue while providing complete control over your advertising budget.
              </p>
              <p className={styles.columnText}>
                At {CompanyConfig.name}, our certified PPC specialists have managed millions in ad spend across diverse industries. We combine data-driven strategies with creative ad copy to maximize click-through rates, conversion rates, and ultimately, your return on investment.
              </p>
              <p className={styles.columnText}>
                Whether you're launching your first campaign or looking to improve existing ones, our team will create a customized SEM strategy that aligns with your business goals and delivers measurable results.
              </p>
              <div className={styles.columnStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>5:1</div>
                  <div className={styles.statLabel}>Average ROI</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>3.2%</div>
                  <div className={styles.statLabel}>Avg CTR</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our SEM Management Process</h2>
            <p className={styles.sectionSubtitle}>
              A proven approach to launching and optimizing high-performing paid search campaigns
            </p>
          </div>

          <div className={styles.processTimeline}>
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`${styles.processStep} ${activeProcess === index ? styles.activeStep : ''}`}
                onClick={() => setActiveProcess(index)}
              >
                <div className={styles.processStepHeader}>
                  <div className={styles.processStepNumber}>{String(index + 1).padStart(2, '0')}</div>
                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                </div>
                <p className={styles.processStepDescription}>{step.description}</p>
                <ul className={styles.processActivities}>
                  {step.activities.map((activity, idx) => (
                    <li key={idx} className={styles.activityItem}>
                      <span className={styles.activityBullet}>•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={faqData} title="SEM Services FAQs" />

      {/* Final CTA Section */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.ctaGrid}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Drive Qualified Traffic and Increase Sales?</h2>
              <p className={styles.ctaDescription}>
                Let's create a high-performing SEM campaign that delivers immediate results and sustainable ROI. Our PPC experts are ready to help you dominate search results and generate quality leads.
              </p>
              <div className={styles.ctaButtons}>
                <Link to="/contact" className={styles.ctaButton}>
                  Get Free Campaign Audit
                  <span className={styles.buttonArrow}>→</span>
                </Link>
                <a href="tel:+1234567890" className={styles.ctaButtonSecondary}>
                  Talk to PPC Expert
                </a>
              </div>
            </div>
            <div className={styles.ctaImage}>
              <div className={styles.ctaImagePlaceholder}>
                <span className={styles.ctaImageIcon}>🎯</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}