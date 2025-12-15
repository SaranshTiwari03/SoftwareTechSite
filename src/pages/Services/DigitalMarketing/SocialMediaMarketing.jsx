import { useState } from 'react';
import { Link } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { CompanyConfig } from '../../../theme/theme';
import styles from './DigitalMarketing.module.css';

export default function SocialMediaMarketing() {
  const [activeProcess, setActiveProcess] = useState(0);

  const features = [
    {
      icon: '📱',
      title: 'Multi-Platform Management',
      description: 'Manage your presence across Facebook, Instagram, Twitter, LinkedIn, and more from a single strategy.'
    },
    {
      icon: '🎨',
      title: 'Creative Content',
      description: 'Engaging posts, stories, and videos that capture attention and drive engagement with your brand.'
    },
    {
      icon: '👥',
      title: 'Community Building',
      description: 'Build and nurture an engaged community of followers who become brand advocates.'
    },
    {
      icon: '📊',
      title: 'Social Analytics',
      description: 'Track performance metrics and gain insights into what content resonates with your audience.'
    },
    {
      icon: '💰',
      title: 'Paid Social Advertising',
      description: 'Targeted ad campaigns that reach your ideal customers and drive conversions.'
    },
    {
      icon: '🤝',
      title: 'Influencer Partnerships',
      description: 'Connect with relevant influencers to amplify your brand message and reach new audiences.'
    }
  ];

  const platforms = [
    {
      name: 'Facebook',
      icon: '📘',
      description: 'Reach billions of users with targeted campaigns and community building.'
    },
    {
      name: 'Instagram',
      icon: '📸',
      description: 'Visual storytelling that engages audiences and drives brand awareness.'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      description: 'B2B marketing and professional networking for business growth.'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      description: 'Real-time engagement and conversations with your audience.'
    },
    {
      name: 'YouTube',
      icon: '🎥',
      description: 'Video content that educates, entertains, and converts viewers.'
    },
    {
      name: 'TikTok',
      icon: '🎵',
      description: 'Short-form video content that reaches younger demographics.'
    }
  ];

  const smmServices = [
    {
      title: 'Social Media Strategy',
      description: 'Comprehensive strategy development aligned with your business goals and target audience.'
    },
    {
      title: 'Content Creation',
      description: 'Professional graphics, videos, and copy that engage and convert your audience.'
    },
    {
      title: 'Content Calendar',
      description: 'Strategic planning and scheduling of posts for consistent, timely content delivery.'
    },
    {
      title: 'Community Management',
      description: 'Active engagement with followers, responding to comments and messages promptly.'
    },
    {
      title: 'Social Media Advertising',
      description: 'Targeted ad campaigns across platforms to reach new audiences and drive conversions.'
    },
    {
      title: 'Influencer Marketing',
      description: 'Identify and collaborate with influencers who align with your brand values.'
    },
    {
      title: 'Social Listening',
      description: 'Monitor brand mentions and industry conversations to stay ahead of trends.'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Detailed reports on engagement, reach, and ROI across all social channels.'
    }
  ];

  const processSteps = [
    {
      title: 'Discovery & Strategy',
      description: 'We analyze your brand, target audience, and competitors to develop a comprehensive social media strategy.',
      activities: ['Brand audit', 'Audience research', 'Competitor analysis', 'Goal setting']
    },
    {
      title: 'Content Planning',
      description: 'Create a content calendar with diverse post types, themes, and campaigns aligned with your strategy.',
      activities: ['Content themes', 'Editorial calendar', 'Campaign planning', 'Asset requirements']
    },
    {
      title: 'Content Creation',
      description: 'Our creative team produces high-quality graphics, videos, and copy that resonates with your audience.',
      activities: ['Graphic design', 'Video production', 'Copywriting', 'Content approval']
    },
    {
      title: 'Publishing & Scheduling',
      description: 'Schedule and publish content at optimal times for maximum reach and engagement.',
      activities: ['Content scheduling', 'Post publishing', 'Story updates', 'Platform optimization']
    },
    {
      title: 'Community Engagement',
      description: 'Actively engage with your audience, respond to comments, and build relationships.',
      activities: ['Comment responses', 'Message management', 'User engagement', 'Crisis management']
    },
    {
      title: 'Paid Campaigns',
      description: 'Launch and optimize paid social campaigns to amplify reach and drive specific business outcomes.',
      activities: ['Ad creation', 'Audience targeting', 'Budget optimization', 'A/B testing']
    },
    {
      title: 'Analysis & Optimization',
      description: 'Track performance, analyze results, and continuously optimize strategy for better results.',
      activities: ['Performance tracking', 'Engagement analysis', 'ROI measurement', 'Strategy refinement']
    }
  ];

  const faqData = [
    {
      question: 'Which social media platforms should my business be on?',
      answer: 'The best platforms depend on your target audience and business type:',
      points: [
        'B2C brands: Facebook, Instagram, TikTok, Pinterest',
        'B2B companies: LinkedIn, Twitter, YouTube',
        'E-commerce: Instagram, Facebook, Pinterest',
        'Professional services: LinkedIn, Twitter, Facebook',
        'Visual brands: Instagram, Pinterest, YouTube, TikTok'
      ],
      closing: 'We help you identify the most effective platforms for your specific business.'
    },
    {
      question: 'How much does social media marketing cost?',
      answer: 'Social media marketing costs vary based on platforms, content needs, and advertising budget:',
      points: [
        'Small businesses: ₹25,000 - ₹75,000/month (management + content)',
        'Medium businesses: ₹75,000 - ₹1,50,000/month',
        'Large brands: ₹1,50,000+/month',
        'Ad spend: Additional budget for paid campaigns'
      ],
      closing: 'We create packages tailored to your budget and goals.'
    },
    {
      question: 'How often should I post on social media?',
      answer: 'Posting frequency varies by platform and audience. Our general recommendations:',
      points: [
        'Facebook: 1-2 times per day',
        'Instagram: 1-2 times per day + Stories',
        'LinkedIn: 3-5 times per week',
        'Twitter: 3-5 times per day',
        'TikTok: 1-3 times per day',
        'YouTube: 1-2 times per week'
      ],
      closing: 'We adjust frequency based on your audience engagement patterns.'
    },
    {
      question: 'How long does it take to see results from social media?',
      answer: 'Social media growth requires patience and consistency. Typical timelines:',
      points: [
        '1 month: Initial engagement and community building',
        '2-3 months: Growing follower base and brand awareness',
        '4-6 months: Significant growth and engaged community',
        '6+ months: Strong ROI and business impact'
      ],
      closing: 'Paid campaigns can deliver faster results while organic growth builds long-term value.'
    },
    {
      question: 'How do you measure social media success?',
      answer: 'We track multiple KPIs depending on your goals: reach and impressions, engagement rate (likes, comments, shares), follower growth, website traffic from social, lead generation, conversion rates, and ultimately ROI. We provide monthly reports showing progress across all key metrics with actionable insights.'
    },
    {
      question: 'Can social media really drive sales?',
      answer: 'Yes! Social media can drive significant revenue through direct sales (especially for e-commerce), lead generation for services, brand awareness that leads to sales, customer retention and loyalty, and influencer partnerships. We design campaigns specifically to drive conversions, not just engagement.'
    },
    {
      question: 'What if I get negative comments or reviews?',
      answer: 'We handle negative feedback professionally as part of our community management services. Our approach includes prompt, empathetic responses, taking conversations private when needed, addressing legitimate concerns transparently, and turning negative situations into opportunities to showcase great customer service. We also have crisis management protocols for serious issues.'
    }
  ];

  const seoData = pageSEO.socialMediaMarketing;

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/services/marketing/social-media"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      <ConsultationBanner data={allBanners['social-media-marketing']} />

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Social Media Marketing Services</h1>
            <p className={styles.sectionSubtitle}>
              Build your brand, engage your audience, and drive business growth through social media
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

      {/* Platforms Section */}
      <section className={styles.platformsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Platforms We Manage</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive social media management across all major platforms
            </p>
          </div>

          <div className={styles.platformsGrid}>
            {platforms.map((platform, index) => (
              <div key={index} className={styles.platformCard}>
                <div className={styles.platformIconLarge}>{platform.icon}</div>
                <h3 className={styles.platformName}>{platform.name}</h3>
                <p className={styles.platformDescription}>{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMM Services Grid */}
      <section className={styles.servicesDetailSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What We Do</h2>
            <p className={styles.sectionSubtitle}>
              End-to-end social media management and growth services
            </p>
          </div>

          <div className={styles.servicesDetailGrid}>
            {smmServices.map((service, index) => (
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
            <div className={styles.contentColumn}>
              <h2 className={styles.columnTitle}>Why Social Media Matters</h2>
              <p className={styles.columnText}>
                Social media is no longer optional for businesses. With billions of users across platforms, it's where your customers spend their time, discover new brands, and make purchasing decisions.
              </p>
              <p className={styles.columnText}>
                At {CompanyConfig.name}, we create social media strategies that go beyond vanity metrics. We focus on building genuine connections with your audience, creating content that drives engagement, and ultimately, generating leads and sales for your business.
              </p>
              <p className={styles.columnText}>
                Whether you're looking to build brand awareness, generate leads, drive e-commerce sales, or establish thought leadership, our social media experts have the creativity and expertise to make it happen.
              </p>
            </div>
            <div className={styles.imageColumn}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.imageIcon}>📱</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Social Media Process</h2>
            <p className={styles.sectionSubtitle}>
              A systematic approach to building and growing your social media presence
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

      <FAQ faqs={faqData} title="Social Media Marketing FAQs" />

      {/* Final CTA Section */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.ctaGrid}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Grow Your Social Media Presence?</h2>
              <p className={styles.ctaDescription}>
                Let's create a social media strategy that builds your brand, engages your audience, and drives real business results. Our social media experts are ready to help you stand out in the crowded social landscape.
              </p>
              <div className={styles.ctaButtons}>
                <Link to="/contact" className={styles.ctaButton}>
                  Get Social Media Strategy
                  <span className={styles.buttonArrow}>→</span>
                </Link>
                <a href="tel:+1234567890" className={styles.ctaButtonSecondary}>
                  Schedule Consultation
                </a>
              </div>
            </div>
            <div className={styles.ctaImage}>
              <div className={styles.ctaImagePlaceholder}>
                <span className={styles.ctaImageIcon}>🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}