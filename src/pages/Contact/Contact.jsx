import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../../components/FAQ/FAQ';
import ScheduleCallModal from '../../components/ScheduleCallModal/ScheduleCallModal';
import { sendConsultationEmail } from '../../services/emailService';
import { allBanners } from '../../data/allBannersData';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    number: '',
    projectNeed: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const result = await sendConsultationEmail(formData);

    if (result.success) {
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        number: '',
        projectNeed: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } else {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ACTIVE SERVICES ONLY
  const primaryServices = [
    { name: 'Mobile App Development', path: '/services/mobile-app' },
    { name: 'Web Development', path: '/services/web' },
    { name: 'Custom Software Development', path: '/services/custom-software' },
    // COMMENTED OUT - Future use
    // { name: 'Artificial Intelligence', path: '/services/ai' },
    // { name: 'Blockchain Development', path: '/services/blockchain' },
    { name: 'Cloud Services', path: '/services/cloud' },
    // COMMENTED OUT - Future use
    // { name: 'Game Development', path: '/services/game' },
    { name: 'Digital Marketing Services', path: '/services/marketing' }
    // COMMENTED OUT - Future use
    // { name: 'Staff Augmentation', path: '/services/staff' }
  ];

  const consultingServices = [
    // COMMENTED OUT - iOS removed
    // { name: 'iOS App Development', path: '/services/mobile-app/ios' },
    { name: 'Android App Development', path: '/services/mobile-app/android' },
    { name: 'Cross Platform App Development', path: '/services/mobile-app/cross-platform' },
    { name: 'Ecommerce Website Development', path: '/services/web/ecommerce' },
    { name: 'Web Portals', path: '/services/web/portals' },
    { name: 'ERP Solution', path: '/services/custom-software/erp' },
    { name: 'CRM Solution', path: '/services/custom-software/crm' },
    { name: 'CMS Solution', path: '/services/custom-software/cms' },
    // COMMENTED OUT - AI services
    // { name: 'Generative AI', path: '/services/ai/generative' },
    // { name: 'Natural Language Processing', path: '/services/ai/nlp' },
    // { name: 'AI Agent Development', path: '/services/ai/agent' },
    { name: 'Cloud Application Development', path: '/services/cloud/app-development' },
    { name: 'Cloud Migration', path: '/services/cloud/migration' },
    { name: 'Cloud Support & Maintenance', path: '/services/cloud/support' },
    { name: 'Social Media Marketing', path: '/services/marketing/social-media' },
    { name: 'Search Engine Marketing', path: '/services/marketing/sem' },
    { name: 'Search Engine Optimization', path: '/services/marketing/seo' }
  ];

  // COMMENTED OUT - Trending Services for future use
  // const trendingServices = [
  //   { name: '2D Game Development', path: '/services/game/2d' },
  //   { name: '3D Game Development', path: '/services/game/3d' },
  //   { name: 'Web3 Game Development', path: '/services/game/web3' },
  //   { name: 'Metaverse Development', path: '/services/blockchain/metaverse' },
  //   { name: 'NFT Development', path: '/services/blockchain/nft' }
  // ];

  const technologies = [
    { name: '.Net', path: '/technologies/dotnet' },
    { name: 'HTML5', path: '/technologies/html5' },
    { name: 'Java', path: '/technologies/java' },
    { name: 'Node.Js', path: '/technologies/nodejs' },
    { name: 'PHP', path: '/technologies/php' },
    { name: 'Python', path: '/technologies/python' },
    { name: 'Azure', path: '/technologies/azure' },
    { name: 'GCP', path: '/technologies/gcp' },
    { name: 'Oracle', path: '/technologies/oracle' },
    { name: 'SAP', path: '/technologies/sap' }
  ];

  const industries = [
    { name: 'Automotive', path: '/industries/automotive' },
    { name: 'Education', path: '/industries/education' },
    { name: 'Real Estate', path: '/industries/real-estate' },
    { name: 'Logistics', path: '/industries/logistics' },
    { name: 'Healthcare', path: '/industries/healthcare' },
    { name: 'Music', path: '/industries/music' },
    { name: 'SAAS', path: '/industries/saas' },
    { name: 'Retail', path: '/industries/retail' },
    { name: 'On-Demand', path: '/industries/on-demand' },
    { name: 'ECommerce', path: '/industries/ecommerce' },
    { name: 'Fintech', path: '/industries/fintech' }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "How can I get started with your services?",
      answer: "Getting started is easy! Simply fill out the consultation form on this page or schedule a call with our team. We'll discuss your project requirements, goals, and timeline to create a customized solution for your needs.",
      points: []
    },
    {
      question: "What information should I include in my project inquiry?",
      answer: "To help us understand your needs better, please provide:",
      points: [
        "Brief description of your project or business challenge",
        "Your goals and expected outcomes",
        "Preferred timeline and budget range",
        "Any specific technologies or platforms you have in mind",
        "Target audience or users"
      ],
      closing: "Don't worry if you're not sure about all the details—we'll help you refine your requirements during our consultation."
    },
    {
      question: "What happens after I submit the contact form?",
      answer: "Our team will review your inquiry and respond within 24 hours. We'll schedule a free consultation call to discuss your project in detail, answer your questions, and provide initial recommendations and estimates."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We offer complimentary initial consultations to understand your needs and explore how we can help. This includes project assessment, technology recommendations, and preliminary cost estimates—all at no charge."
    },
    {
      question: "How long does it take to get a project quote?",
      answer: "After our initial consultation, we typically provide a detailed proposal and quote within 2-3 business days. For more complex projects, we may need up to a week to ensure accuracy and completeness."
    },
    {
      question: "Can you work with tight deadlines?",
      answer: "We understand that some projects have urgent timelines. While we strive to maintain quality, we can often accommodate rush projects. Let us know your deadline during the consultation, and we'll discuss what's feasible."
    },
    {
      question: "What if I'm not sure which service I need?",
      answer: "No problem! That's what we're here for. During the consultation, we'll help you identify the best solution for your business goals. Our team will recommend the right services and technologies based on your requirements and budget."
    },
    {
      question: "Do you sign NDAs?",
      answer: "Absolutely. We understand the importance of confidentiality and are happy to sign Non-Disclosure Agreements before discussing your project details. Your intellectual property and business information are always protected."
    }
  ];

  const contactBanner = allBanners.contact;

  return (
    <>
      <div className={styles.contactPage}>
        {/* Hero Section with Form */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            {/* Left Content */}
            <div className={styles.leftContent}>
              <nav className={styles.breadcrumb}>
                <Link to="/" className={styles.breadcrumbLink}>Home</Link>
                <span className={styles.breadcrumbSeparator}>→</span>
                <span className={styles.breadcrumbCurrent}>Contact</span>
              </nav>

              <h1 className={styles.title}>Let's start a project together</h1>
              <p className={styles.description}>
                We'll contact you within a couple of hours to schedule a meeting to discuss your goals.
              </p>

              {/* IMAGE ADDED HERE */}
              {contactBanner?.bannerImage && (
                <img 
                  src={contactBanner.bannerImage} 
                  alt={contactBanner.bannerImageAlt || 'Contact us'} 
                  className={styles.heroImage}
                />
              )}
            </div>

            {/* Right Side - Contact Form */}
            <div className={styles.formContainer}>
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>
                  Book a Free <span className={styles.formTitleOrange}>Consultation</span>
                </h3>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    disabled={isSubmitting}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    disabled={isSubmitting}
                  />

                  <input
                    type="tel"
                    name="number"
                    placeholder="Number"
                    value={formData.number}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    disabled={isSubmitting}
                  />

                  <textarea
                    name="projectNeed"
                    placeholder="Describe Your Project Need."
                    value={formData.projectNeed}
                    onChange={handleInputChange}
                    className={styles.textarea}
                    rows="4"
                    disabled={isSubmitting}
                  />

                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Get In Touch'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className={styles.successMessage}>
                      ✓ Thank you! We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className={styles.errorMessage}>
                      ✗ Something went wrong. Please try again.
                    </div>
                  )}

                  <p className={styles.privacyText}>
                    By submitting this form, you agree to our{' '}
                    <Link to="/privacy" className={styles.privacyLink}>
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Services Cards Section */}
        <section className={styles.cardsSection}>
          <div className={styles.cardsContainer}>
            {/* Primary Services */}
            <div className={styles.categoryBlock}>
              <h2 className={styles.categoryTitle}>Primary Services</h2>
              <div className={styles.cardsGrid}>
                {primaryServices.map((service, index) => (
                  <Link key={index} to={service.path} className={styles.serviceCard}>
                    <span className={styles.serviceName}>{service.name}</span>
                    <span className={styles.arrow}>→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Consulting Services */}
            <div className={styles.categoryBlock}>
              <h2 className={styles.categoryTitle}>Consulting Services</h2>
              <div className={styles.cardsGrid}>
                {consultingServices.map((service, index) => (
                  <Link key={index} to={service.path} className={styles.serviceCard}>
                    <span className={styles.serviceName}>{service.name}</span>
                    <span className={styles.arrow}>→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Trending Services - COMMENTED OUT */}
            {/* <div className={styles.categoryBlock}>
              <h2 className={styles.categoryTitle}>Trending Services</h2>
              <div className={styles.cardsGrid}>
                {trendingServices.map((service, index) => (
                  <Link key={index} to={service.path} className={styles.serviceCard}>
                    <span className={styles.serviceName}>{service.name}</span>
                    <span className={styles.arrow}>→</span>
                  </Link>
                ))}
              </div>
            </div> */}

            {/* Technologies */}
            <div className={styles.categoryBlock}>
              <h2 className={styles.categoryTitle}>Technologies</h2>
              <div className={styles.cardsGrid}>
                {technologies.map((tech, index) => (
                  <Link key={index} to={tech.path} className={styles.serviceCard}>
                    <span className={styles.serviceName}>{tech.name}</span>
                    <span className={styles.arrow}>→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div className={styles.categoryBlock}>
              <h2 className={styles.categoryTitle}>Industries</h2>
              <div className={styles.cardsGrid}>
                {industries.map((industry, index) => (
                  <Link key={index} to={industry.path} className={styles.serviceCard}>
                    <span className={styles.serviceName}>{industry.name}</span>
                    <span className={styles.arrow}>→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ faqs={faqData} title="Contact & Consultation FAQs" />
      </div>

      {/* Schedule Call Modal */}
      <ScheduleCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}