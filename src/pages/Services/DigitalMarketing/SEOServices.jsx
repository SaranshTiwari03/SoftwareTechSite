import { useState } from 'react';
import { Link } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';
import { CompanyConfig } from '../../../theme/theme';
import styles from './DigitalMarketing.module.css';

export default function SEOServices() {
  const [activeProcess, setActiveProcess] = useState(0);

  const features = [
    {
      icon: '🔎',
      title: 'Keyword Research',
      description: 'In-depth keyword analysis to identify high-value opportunities that drive qualified traffic to your website.'
    },
    {
      icon: '📝',
      title: 'On-Page Optimization',
      description: 'Optimize every element of your website for search engines and user experience.'
    },
    {
      icon: '🔗',
      title: 'Link Building',
      description: 'Build high-quality backlinks that improve your domain authority and search rankings.'
    },
    {
      icon: '⚙️',
      title: 'Technical SEO',
      description: 'Fix technical issues that prevent search engines from properly crawling and indexing your site.'
    },
    {
      icon: '📱',
      title: 'Local SEO',
      description: 'Dominate local search results and attract customers in your geographic area.'
    },
    {
      icon: '📊',
      title: 'SEO Analytics',
      description: 'Track rankings, traffic, and conversions with comprehensive reporting and insights.'
    }
  ];

  const seoServices = [
    {
      title: 'Technical SEO Audit',
      description: 'Comprehensive analysis of your website\'s technical health and search engine compatibility.'
    },
    {
      title: 'Content Optimization',
      description: 'Optimize existing content and create new SEO-friendly content that ranks and converts.'
    },
    {
      title: 'Competitor Analysis',
      description: 'Identify what your competitors are doing right and find opportunities to outrank them.'
    },
    {
      title: 'Mobile Optimization',
      description: 'Ensure your website performs perfectly on mobile devices for better rankings.'
    },
    {
      title: 'Site Speed Optimization',
      description: 'Improve page load times to enhance user experience and search rankings.'
    },
    {
      title: 'Schema Markup',
      description: 'Implement structured data to help search engines understand your content better.'
    },
    {
      title: 'Link Reclamation',
      description: 'Recover lost backlinks and fix broken links to maintain your domain authority.'
    },
    {
      title: 'Google My Business',
      description: 'Optimize your local listings to increase visibility in local search results.'
    }
  ];

  const processSteps = [
    {
      title: 'SEO Audit & Analysis',
      description: 'We conduct a comprehensive audit of your website, analyzing technical issues, content quality, backlink profile, and competitor strategies.',
      activities: ['Technical SEO audit', 'Content analysis', 'Backlink profile review', 'Competitor research']
    },
    {
      title: 'Strategy Development',
      description: 'Based on audit findings, we create a customized SEO strategy with clear goals, timelines, and success metrics.',
      activities: ['Keyword research', 'Content strategy', 'Link building plan', 'Technical roadmap']
    },
    {
      title: 'On-Page Optimization',
      description: 'We optimize your website\'s content, meta tags, headers, images, and internal linking for target keywords.',
      activities: ['Meta tag optimization', 'Content optimization', 'Internal linking', 'Image optimization']
    },
    {
      title: 'Technical Implementation',
      description: 'Our developers fix technical issues, improve site speed, ensure mobile-friendliness, and implement schema markup.',
      activities: ['Site speed optimization', 'Mobile optimization', 'Schema implementation', 'Technical fixes']
    },
    {
      title: 'Content Creation',
      description: 'We create high-quality, SEO-optimized content that attracts links, engages users, and ranks in search results.',
      activities: ['Blog posts', 'Landing pages', 'Resource content', 'Multimedia content']
    },
    {
      title: 'Link Building',
      description: 'Strategic outreach and relationship building to earn high-quality backlinks from authoritative websites.',
      activities: ['Guest posting', 'Digital PR', 'Resource link building', 'Broken link building']
    },
    {
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring of rankings, traffic, and conversions with ongoing optimization to improve results.',
      activities: ['Rank tracking', 'Traffic analysis', 'Conversion optimization', 'Algorithm updates']
    }
  ];

  const faqData = [
    {
      question: 'How long does SEO take to show results?',
      answer: 'SEO is a long-term strategy. While some improvements can be seen within weeks, significant results typically take:',
      points: [
        'New websites: 6-12 months for meaningful traffic',
        'Established websites: 3-6 months for noticeable improvements',
        'Local SEO: 2-4 months for local ranking improvements',
        'Competitive industries: 6-12 months or longer'
      ],
      closing: 'We provide monthly reports showing progress in rankings, traffic, and conversions.'
    },
    {
      question: 'What does your SEO service include?',
      answer: 'Our comprehensive SEO services cover all aspects of search optimization:',
      points: [
        'Complete technical SEO audit and optimization',
        'Keyword research and content strategy',
        'On-page optimization and content creation',
        'Strategic link building and outreach',
        'Local SEO and Google My Business optimization',
        'Monthly reporting and performance tracking'
      ],
      closing: 'We create customized SEO strategies tailored to your industry and goals.'
    },
    {
      question: 'What is the difference between on-page and off-page SEO?',
      answer: 'On-page SEO involves optimizing elements on your website (content, meta tags, site structure, speed) while off-page SEO focuses on external factors like backlinks, brand mentions, and social signals. Both are essential for ranking success, and we handle both aspects comprehensively.'
    },
    {
      question: 'Do you guarantee first page rankings?',
      answer: 'No ethical SEO company can guarantee specific rankings as search engines constantly update their algorithms. However, we do guarantee our best efforts using proven white-hat techniques, transparent reporting, and continuous optimization. Our track record shows consistent improvements in rankings and organic traffic for our clients.'
    },
    {
      question: 'Will SEO work for my industry?',
      answer: 'Yes! SEO works for virtually every industry. Whether you\'re in e-commerce, B2B services, healthcare, real estate, or any other sector, SEO can drive qualified traffic and leads. We tailor our strategies to your specific industry, competition level, and target audience for optimal results.'
    },
    {
      question: 'What happens if I stop SEO services?',
      answer: 'SEO gains are not permanent without ongoing maintenance. If you stop SEO, your rankings may gradually decline as competitors continue optimizing and search engines update their algorithms. However, the content, technical improvements, and quality backlinks we build will continue providing value long-term.'
    },
    {
      question: 'How do you measure SEO success?',
      answer: 'We track multiple KPIs including organic traffic growth, keyword rankings, conversion rates, bounce rates, page load times, and ultimately, ROI. We provide detailed monthly reports showing progress across all metrics with clear insights and recommendations.'
    }
  ];

  const seoData = pageSEO.seoServices;

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/services/marketing/seo"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      <ConsultationBanner data={allBanners['seo-services']} />

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Comprehensive SEO Services</h1>
            <p className={styles.sectionSubtitle}>
              Everything you need to rank higher, drive more traffic, and grow your business
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

      {/* SEO Services Grid */}
      <section className={styles.servicesDetailSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our SEO Services Include</h2>
            <p className={styles.sectionSubtitle}>
              End-to-end SEO solutions tailored to your business goals
            </p>
          </div>

          <div className={styles.servicesDetailGrid}>
            {seoServices.map((service, index) => (
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
              <h2 className={styles.columnTitle}>Why SEO Matters for Your Business</h2>
              <p className={styles.columnText}>
                Search Engine Optimization is one of the most cost-effective digital marketing strategies. Unlike paid advertising, SEO delivers long-term, sustainable results that continue driving traffic and leads over time.
              </p>
              <p className={styles.columnText}>
                At {CompanyConfig.name}, we use proven white-hat SEO techniques that comply with search engine guidelines. Our strategies focus on creating genuine value for users while optimizing for search engines, ensuring sustainable rankings and protection from algorithm updates.
              </p>
              <p className={styles.columnText}>
                Whether you're a local business looking to dominate your area or a national brand competing for high-volume keywords, our SEO experts have the experience and expertise to help you achieve your goals.
              </p>
            </div>
            <div className={styles.imageColumn}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.imageIcon}>🔍</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our SEO Process</h2>
            <p className={styles.sectionSubtitle}>
              A systematic approach to achieving and maintaining top search rankings
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

      <FAQ faqs={faqData} title="SEO Services FAQs" />

      {/* Final CTA Section */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.ctaGrid}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Rank Higher and Drive More Traffic?</h2>
              <p className={styles.ctaDescription}>
                Let's create an SEO strategy that gets you to the top of search results and keeps you there. Our experts are ready to help you dominate your market and generate quality leads from organic search.
              </p>
              <div className={styles.ctaButtons}>
                <Link to="/contact" className={styles.ctaButton}>
                  Get Free SEO Audit
                  <span className={styles.buttonArrow}>→</span>
                </Link>
                <a href="tel:+1234567890" className={styles.ctaButtonSecondary}>
                  Talk to SEO Expert
                </a>
              </div>
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