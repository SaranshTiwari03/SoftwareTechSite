import React from "react";
import ConsultationBanner from "../../../components/ConsultationBanner/ConsultationBanner";
import Stats from "../../../components/Stats/Stats";
import FAQ from "../../../components/FAQ/FAQ";
import { allBanners } from "../../../data/allBannersData";
export default function WebDevelopmentMain() {
  const statsData = [
    { number: "200+", label: "Websites", sublabel: "Delivered" },
    { number: "98%", label: "Client", sublabel: "Satisfaction" },
    { number: "15+", label: "Years", sublabel: "Experience" },
  ];

  const faqData = [
    {
      question: "What web technologies do you use?",
      answer:
        "We use modern, industry-leading technologies to build scalable and performant web solutions:",
      points: [
        "Frontend: React, Next.js, Vue.js, Angular",
        "Backend: Node.js, Python, PHP, .NET",
        "Databases: MongoDB, PostgreSQL, MySQL",
        "Cloud: AWS, Google Cloud, Azure",
        "CMS: WordPress, Contentful, Strapi",
      ],
    },
    {
      question: "How long does web development take?",
      answer: "Timeline varies based on project complexity and requirements:",
      points: [
        "Simple websites: 2-4 weeks",
        "Business websites: 1-2 months",
        "Complex web applications: 3-6 months",
        "Enterprise solutions: 6-12 months",
      ],
      closing:
        "We provide detailed timelines during our initial consultation based on your specific needs.",
    },
    {
      question: "Do you provide ongoing website maintenance?",
      answer: "Yes, we offer comprehensive maintenance and support packages:",
      points: [
        "Regular security updates and patches",
        "Performance optimization",
        "Content updates and modifications",
        "Technical support and troubleshooting",
        "Backup and disaster recovery",
      ],
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Absolutely! We specialize in website redesigns and modernization:",
      points: [
        "UI/UX analysis and improvements",
        "Mobile responsiveness updates",
        "Performance optimization",
        "Modern design implementation",
        "SEO improvements",
      ],
    },
  ];

  return (
    <>
      <ConsultationBanner data={allBanners["web-development"]} />
      <Stats data={statsData} />

      {/* What You Get Section */}
      <section style={{ padding: "5rem 0", background: "#f8f9fa" }}>
        <div
          style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}
        >
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "1rem",
              textAlign: "center",
              color: "var(--secondary)",
              fontFamily: "var(--font-family)",
              fontWeight: "700",
            }}
          >
            What You Get From Our Web Development Services
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.1rem",
              color: "#6b7280",
              marginBottom: "3rem",
              fontFamily: "var(--font-family)",
            }}
          >
            Comprehensive solutions tailored to your business needs
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: "⚡",
                title: "Scalable Solutions",
                desc: "Build websites that grow with your business needs and handle increasing traffic effortlessly.",
              },
              {
                icon: "🎨",
                title: "Custom Design",
                desc: "Unique, eye-catching designs tailored to your brand identity and target audience.",
              },
              {
                icon: "🔒",
                title: "Security First",
                desc: "Enterprise-grade security measures to protect your data and users.",
              },
              {
                icon: "📱",
                title: "Responsive Design",
                desc: "Perfect user experience across all devices - desktop, tablet, and mobile.",
              },
              {
                icon: "🚀",
                title: "Fast Performance",
                desc: "Optimized code and infrastructure for lightning-fast load times.",
              },
              {
                icon: "🔍",
                title: "SEO Optimized",
                desc: "Built with search engine optimization best practices from the ground up.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2.5rem",
                  borderRadius: "15px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.06)";
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                  {feature.icon}
                </div>
                <h3
                  style={{
                    color: "var(--primary)",
                    marginBottom: "0.8rem",
                    fontSize: "1.4rem",
                    fontFamily: "var(--font-family)",
                    fontWeight: "600",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: "#5a6576",
                    lineHeight: "1.6",
                    fontFamily: "var(--font-family)",
                    margin: "0",
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section style={{ padding: "5rem 0", background: "white" }}>
        <div
          style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}
        >
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "3rem",
              textAlign: "center",
              color: "var(--secondary)",
              fontFamily: "var(--font-family)",
              fontWeight: "700",
            }}
          >
            Technologies We Master
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "PHP",
              "WordPress",
              "MongoDB",
              "PostgreSQL",
            ].map((tech, index) => (
              <div
                key={index}
                style={{
                  background: "#f8f9fa",
                  padding: "2rem",
                  borderRadius: "12px",
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                  color: "var(--secondary)",
                  fontFamily: "var(--font-family)",
                  transition: "all 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--primary)";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f8f9fa";
                  e.currentTarget.style.color = "var(--secondary)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={faqData} title="Web Development FAQs" />
    </>
  );
}
