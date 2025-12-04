import React, { useState } from 'react';
import styles from './FAQ.module.css';

export default function FAQ({ faqs, title = "Frequently Asked Questions" }) {
  const [openIndex, setOpenIndex] = useState(0);

  // Default FAQs if none provided
  const defaultFaqs = [
    {
      question: "What mobile app development services do you offer?",
      answer: "We offer end-to-end mobile app development services tailored to your business needs. Our expertise includes:",
      points: [
        "Native iOS and Android app development",
        "Cross-platform solutions using React Native and Flutter",
        "Custom UI/UX design and prototyping",
        "App testing, quality assurance, and security audits",
        "App store optimization and deployment",
        "Post-launch support and maintenance"
      ]
    },
    {
      question: "What is the average cost and timeline for developing software?",
      answer: "The cost and timeline for developing software can vary significantly based on factors such as:",
      points: [
        "Project complexity and functionality",
        "Platform compatibility (iOS, Android, or both)",
        "Design requirements (basic UI/UX vs. custom design)",
        "Integration with third-party APIs or systems",
        "Post-launch maintenance and support needs"
      ],
      closing: "For a rough estimate, the overall cost of software development can range from Rs:30,000 to Rs:300,000 or more. Similarly, the timeline can vary from 3 to 15 months, depending on the app's complexity and features."
    },
    {
      question: "Do you offer ongoing maintenance and support services?",
      answer: "Yes, we provide comprehensive project maintenance and support services post-launch. Our services include:",
      points: [
        "Regular app updates and feature enhancements",
        "Bug fixing and performance optimization",
        "Security patches and data backup",
        "User feedback analysis and implementation of improvements",
        "Technical support and troubleshooting"
      ]
    },
    {
      question: "Do you develop software for both mobile and web platforms?",
      answer: "Yes, we specialize in developing software solutions for both mobile and web platforms. Our services include:",
      points: [
        "Custom web application development",
        "Mobile app development for iOS and Android platforms",
        "Progressive web app (PWA) development",
        "Responsive web design and optimization",
        "Web-based software solutions for enterprise needs"
      ]
    },
    {
      question: "What software development services do you offer?",
      answer: "Our software development services encompass a wide range of solutions, including:",
      points: [
        "Custom software design and development",
        "Enterprise software solutions for business management and operations",
        "E-commerce platforms and online marketplace development",
        "CRM (Customer Relationship Management) systems",
        "IoT (Internet of Things) software solutions",
        "Data analytics and business intelligence software",
        "Cloud-based custom solutions"
      ]
    },
    {
      question: "How do you ensure the security and quality of the software you develop?",
      answer: "We follow industry best practices and stringent quality assurance measures to ensure the security and quality of the software we develop. Our approach includes:",
      points: [
        "Conducting thorough code reviews and testing procedures",
        "Implementing secure coding practices and encryption standards",
        "Regular security audits and vulnerability assessments",
        "Adhering to compliance standards and regulations (such as GDPR, HIPAA, etc.)",
        "Continuous monitoring and updates to address emerging threats"
      ]
    },
    {
      question: "Do you assist with software integration and data migration?",
      answer: "Yes, we provide software integration and data migration services to ensure seamless compatibility and data transfer between different systems. Our services include:",
      points: [
        "Integration with third-party APIs, plugins, and platforms",
        "Legacy system integration and modernization",
        "Data migration from legacy systems to new software solutions",
        "Middleware development for efficient data exchange",
        "Testing and validation of integrated systems to ensure smooth operation"
      ]
    }
  ];

  const faqData = faqs || defaultFaqs;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{title}</h2>
        
        <div className={styles.faqList}>
          {faqData.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                onClick={() => toggleFAQ(index)}
                className={styles.questionButton}
                aria-expanded={openIndex === index}
              >
                <span className={styles.questionText}>{faq.question}</span>
                <div className={styles.iconWrapper}>
                  <svg
                    className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {openIndex === index ? (
                      <line x1="5" y1="12" x2="19" y2="12" />
                    ) : (
                      <>
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </>
                    )}
                  </svg>
                </div>
              </button>
              
              <div
                className={`${styles.answerWrapper} ${
                  openIndex === index ? styles.answerOpen : ''
                }`}
              >
                <div className={styles.answerContent}>
                  <p className={styles.answerText}>{faq.answer}</p>
                  {faq.points && (
                    <ul className={styles.bulletList}>
                      {faq.points.map((point, idx) => (
                        <li key={idx} className={styles.bulletItem}>{point}</li>
                      ))}
                    </ul>
                  )}
                  {faq.closing && (
                    <p className={styles.closingText}>{faq.closing}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}