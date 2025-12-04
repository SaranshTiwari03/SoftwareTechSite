import React from 'react';
import { Link } from 'react-router-dom';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import FAQ from '../../../components/FAQ/FAQ';
import { allBanners } from '../../../data/allBannersData';
import styles from './MainTechnologies.module.css';

// Using proper tech icons - these will render as images
const DotNetIcon = () => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" 
    alt=".NET"
    style={{ width: '100%', height: '100%' }}
  />
);

const HTML5Icon = () => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
    alt="HTML5"
    style={{ width: '100%', height: '100%' }}
  />
);

const JavaIcon = () => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
    alt="Java"
    style={{ width: '100%', height: '100%' }}
  />
);

const NodeJSIcon = () => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
    alt="Node.js"
    style={{ width: '100%', height: '100%' }}
  />
);

const PHPIcon = () => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" 
    alt="PHP"
    style={{ width: '100%', height: '100%' }}
  />
);

const PythonIcon = () => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
    alt="Python"
    style={{ width: '100%', height: '100%' }}
  />
);

const AzureIcon = () => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" 
    alt="Azure"
    style={{ width: '100%', height: '100%' }}
  />
);

const GCPIcon = () => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" 
    alt="GCP"
    style={{ width: '100%', height: '100%' }}
  />
);

const OracleIcon = () => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" 
    alt="Oracle"
    style={{ width: '100%', height: '100%' }}
  />
);

const SAPIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="20" fontWeight="bold" fill="currentColor">
      SAP
    </text>
  </svg>
);

export default function MainTechnologies() {
  const languages = [
    {
      name: '.Net',
      description: 'Our .NET developers use the .NET platform to build robust solutions for all of your core software systems. We build technologies using .NET that help you in every walk of life.',
      path: '/technologies/dotnet',
      Icon: DotNetIcon
    },
    {
      name: 'HTML5',
      description: 'We always try to ensure that our client applications are robust and diverse platforms for internal operations and diverse business, including web apps, and SaaS.',
      path: '/technologies/html5',
      Icon: HTML5Icon
    },
    {
      name: 'Java',
      description: 'Java is one of the oldest and most advanced server-side technologies that have exceeded many of our clients to achieve new developments and get unparalleled business growth.',
      path: '/technologies/java',
      Icon: JavaIcon
    },
    {
      name: 'Node.js',
      description: 'Get an interactive web app or a data-intensive program with our robust backend as our team has years of experience utilizing the most emerging technology stacks.',
      path: '/technologies/nodejs',
      Icon: NodeJSIcon
    },
    {
      name: 'PHP',
      description: 'We are a PHP development company encapsulating all of the solutions you may need when developing a backend solution for your business.',
      path: '/technologies/php',
      Icon: PHPIcon
    },
    {
      name: 'Python',
      description: 'We are a python development company using Python for web development, CMS, portals, and machine learning.',
      path: '/technologies/python',
      Icon: PythonIcon
    }
  ];

  const platforms = [
    {
      name: 'Azure',
      description: 'We help you create and deliver innovative business experiences on your distributors on a secure, robust Microsoft Azure cloud infrastructure.',
      path: '/technologies/azure',
      Icon: AzureIcon
    },
    {
      name: 'GCP',
      description: 'We help its clients migrate, modernize and transform their data with GCP Cloud, the Google Cloud Platform service.',
      path: '/technologies/gcp',
      Icon: GCPIcon
    },
    {
      name: 'Oracle',
      description: 'Our Oracle consulting services enable businesses to build and manage cloud applications with the right tools.',
      path: '/technologies/oracle',
      Icon: OracleIcon
    },
    {
      name: 'SAP',
      description: 'Our SAP developers help clients out of SAP consulting to help them achieve a scalable organizational structure.',
      path: '/technologies/sap',
      Icon: SAPIcon
    }
  ];

  const faqData = [
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in a wide range of modern technologies across multiple domains:",
      points: [
        "Programming Languages: .NET, Java, Python, PHP, Node.js, HTML5",
        "Cloud Platforms: Azure, Google Cloud Platform (GCP), Oracle, SAP",
        "Frontend: React, Angular, Vue.js",
        "Backend: Node.js, Python, PHP, .NET",
        "Databases: MongoDB, PostgreSQL, MySQL, Oracle"
      ]
    },
    {
      question: "How do you choose the right technology stack for a project?",
      answer: "We select technology stacks based on several key factors:",
      points: [
        "Project requirements and business goals",
        "Scalability and performance needs",
        "Team expertise and experience",
        "Long-term maintenance considerations",
        "Budget and timeline constraints",
        "Integration requirements with existing systems"
      ]
    },
    {
      question: "Do you provide support for legacy technology upgrades?",
      answer: "Yes, we offer comprehensive legacy system modernization services. We help businesses migrate from outdated technologies to modern platforms while ensuring data integrity, minimal downtime, and smooth transition for your team."
    },
    {
      question: "Can you work with our existing technology stack?",
      answer: "Absolutely! Our developers are experienced in working with various technology stacks and can seamlessly integrate with your existing systems. We adapt to your current infrastructure and provide enhancements or build new features as needed."
    },
    {
      question: "What is your approach to staying updated with new technologies?",
      answer: "We maintain our technological edge through:",
      points: [
        "Regular training and certification programs for our team",
        "Active participation in tech communities and conferences",
        "Continuous learning and experimentation with emerging technologies",
        "Collaboration with technology partners and vendors",
        "Internal knowledge sharing sessions and workshops"
      ]
    },
    {
      question: "Do you provide cloud migration services?",
      answer: "Yes, we specialize in cloud migration services across Azure, GCP, and Oracle Cloud. Our services include infrastructure assessment, migration planning, implementation, and post-migration support to ensure a smooth transition to the cloud."
    }
  ];

  return (
    <div className={styles.technologiesPage}>
      {/* Banner Section */}
      <ConsultationBanner data={allBanners['technologies']} />

      {/* Languages Section */}
      <section className={styles.techSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Languages</h2>
          <div className={styles.techGrid}>
            {languages.map((tech, index) => {
              const IconComponent = tech.Icon;
              return (
                <Link key={index} to={tech.path} className={styles.techCard}>
                  <div className={styles.techIcon}>
                    <IconComponent />
                  </div>
                  <h3 className={styles.techName}>{tech.name}</h3>
                  <p className={styles.techDescription}>{tech.description}</p>
                  <span className={styles.techArrow}>→</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className={styles.techSection} style={{ background: '#f8f9fa' }}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Platforms</h2>
          <div className={styles.techGrid}>
            {platforms.map((tech, index) => {
              const IconComponent = tech.Icon;
              return (
                <Link key={index} to={tech.path} className={styles.techCard}>
                  <div className={styles.techIcon}>
                    <IconComponent />
                  </div>
                  <h3 className={styles.techName}>{tech.name}</h3>
                  <p className={styles.techDescription}>{tech.description}</p>
                  <span className={styles.techArrow}>→</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqData} title="Technology FAQs" />
    </div>
  );
}