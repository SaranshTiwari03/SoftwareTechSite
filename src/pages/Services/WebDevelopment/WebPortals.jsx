import React from 'react';
import ConsultationBanner from '../../../components/ConsultationBanner/ConsultationBanner';
import Stats from '../../../components/Stats/Stats';
import FAQ from '../../../components/FAQ/FAQ';
import SEO from '../../../components/SEO/SEO';
import { allBanners } from '../../../data/allBannersData';
import { pageSEO } from '../../../data/seoData';

export default function WebPortals() {
  const statsData = [
    { number: '50+', label: 'Portals', sublabel: 'Launched' },
    { number: '100K+', label: 'Active', sublabel: 'Users' },
    { number: '5+', label: 'Years', sublabel: 'Experience' }
  ];

  const faqData = [
    {
      question: "What is a web portal?",
      answer: "A web portal is a web-based platform that provides users with a single point of access to information, applications, and services:",
      points: [
        "Centralized access to resources and data",
        "Role-based permissions and security",
        "Personalized user experience",
        "Integration with existing systems",
        "Collaboration and communication tools"
      ]
    },
    {
      question: "How long does it take to build a web portal?",
      answer: "Development timeline depends on complexity and features:",
      points: [
        "Basic portal: 2-3 months",
        "Standard portal with integrations: 3-5 months",
        "Complex enterprise portal: 6-12 months",
        "Custom features may extend timeline"
      ],
      closing: "We provide detailed project timelines during the planning phase."
    },
    {
      question: "Can you integrate our existing systems?",
      answer: "Yes, we specialize in seamless system integrations:",
      points: [
        "CRM and ERP systems",
        "Third-party APIs and services",
        "Legacy system modernization",
        "Database migrations",
        "Single Sign-On (SSO) implementation"
      ]
    },
    {
      question: "Do you provide portal maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance packages:",
      points: [
        "24/7 technical support",
        "Regular security updates",
        "Performance monitoring and optimization",
        "Feature enhancements",
        "User training and documentation"
      ]
    }
  ];

  const seoData = pageSEO.webPortals;

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/services/web-development/portals"
        ogType="website"
        structuredData={seoData.structuredData}
      />

      <ConsultationBanner data={allBanners['web-portals']} />
      
      <Stats data={statsData} />
      
      {/* Portal Types Section */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            marginBottom: '3rem', 
            textAlign: 'center',
            color: 'var(--secondary)',
            fontFamily: 'var(--font-family)',
            fontWeight: '700'
          }}>
            Types of Web Portals We Build
          </h1>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              { title: 'Customer Portal', desc: 'Self-service platform for customers to access accounts, support, and resources' },
              { title: 'Employee Portal', desc: 'Internal communication hub for HR, payroll, and company resources' },
              { title: 'Partner Portal', desc: 'Collaboration platform for business partners and vendors' },
              { title: 'Vendor Portal', desc: 'Streamlined vendor management and procurement system' },
              { title: 'B2B Portal', desc: 'Business-to-business platform for orders and transactions' },
              { title: 'Education Portal', desc: 'E-learning management system for courses and students' }
            ].map((portal, index) => (
              <div key={index} style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '2.5rem',
                borderRadius: '15px',
                color: 'white',
                transition: 'transform 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                <h2 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-family)',
                  fontWeight: '700'
                }}>{portal.title}</h2>
                <p style={{ 
                  opacity: 0.95,
                  fontFamily: 'var(--font-family)',
                  margin: '0',
                  lineHeight: '1.6'
                }}>{portal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section style={{ padding: '5rem 0', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '3rem', 
            textAlign: 'center',
            color: 'var(--secondary)',
            fontFamily: 'var(--font-family)',
            fontWeight: '700'
          }}>
            Portal Features We Implement
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              'User Authentication & Authorization',
              'Role-Based Access Control (RBAC)',
              'Document Management System',
              'Real-Time Notifications & Alerts',
              'Advanced Search & Filtering',
              'Reporting & Analytics Dashboard',
              'Third-Party API Integrations',
              'Mobile Responsive Design',
              'Single Sign-On (SSO)',
              'Multi-Language Support',
              'Audit Logs & Compliance',
              'Workflow Automation'
            ].map((feature, index) => (
              <div key={index} style={{ 
                background: 'white',
                padding: '1.5rem',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                <span style={{ 
                  fontSize: '1.5rem', 
                  color: 'var(--primary)',
                  fontWeight: 'bold'
                }}>✓</span>
                <span style={{ 
                  fontSize: '1.1rem',
                  fontFamily: 'var(--font-family)',
                  color: 'var(--secondary)'
                }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <FAQ faqs={faqData} title="Web Portal Development FAQs" />
    </>
  );
}