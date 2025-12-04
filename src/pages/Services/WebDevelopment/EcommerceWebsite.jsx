import React from "react";
import ConsultationBanner from "../../../components/ConsultationBanner/ConsultationBanner";
import Stats from "../../../components/Stats/Stats";
import FAQ from "../../../components/FAQ/FAQ";
import { allBanners } from "../../../data/allBannersData";
export default function EcommerceWebsite() {
  const statsData = [
    { number: "500+", label: "Ecommerce", sublabel: "Sites Built" },
    { number: "$2M+", label: "Revenue", sublabel: "Generated" },
    { number: "99.9%", label: "Uptime", sublabel: "Guaranteed" },
  ];

  const faqData = [
    {
      question: "Which ecommerce platform is best for my business?",
      answer:
        "The best platform depends on your specific needs, budget, and technical requirements:",
      points: [
        "Shopify: Best for quick setup and ease of use",
        "Magento: Ideal for large catalogs and advanced customization",
        "WooCommerce: Perfect for WordPress users and content-driven stores",
        "BigCommerce: Great for scaling and built-in features",
        "Custom Solution: Maximum flexibility and unique requirements",
      ],
    },
    {
      question: "How much does ecommerce website development cost?",
      answer:
        "Ecommerce development costs vary based on complexity and features:",
      points: [
        "Basic Shopify store: $5,000 - $15,000",
        "Custom WooCommerce: $10,000 - $30,000",
        "Advanced Magento: $30,000 - $80,000",
        "Enterprise custom solution: $80,000 - $200,000+",
      ],
      closing:
        "We provide detailed quotes after understanding your specific requirements.",
    },
    {
      question: "Do you integrate payment gateways?",
      answer: "Yes, we integrate all major payment gateways:",
      points: [
        "Stripe, PayPal, Square",
        "Authorize.net, Braintree",
        "Regional payment providers",
        "Cryptocurrency payments",
        "Buy now, pay later services (Klarna, Afterpay)",
      ],
    },
    {
      question: "Can you migrate my existing store to a new platform?",
      answer: "Absolutely! We specialize in seamless ecommerce migrations:",
      points: [
        "Complete data migration (products, customers, orders)",
        "SEO preservation and URL redirects",
        "Design modernization",
        "Zero downtime migration strategies",
        "Post-migration support",
      ],
    },
  ];

  return (
    <>
      <ConsultationBanner data={allBanners["ecommerce-website"]} />
      <Stats data={statsData} />

      {/* Platform Support Section */}
      <section style={{ padding: "5rem 0", background: "white" }}>
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
            We Build On Your Favorite Platforms
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
            Shopify, Magento, WooCommerce, BigCommerce & Custom Solutions
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              { name: "Shopify", desc: "Quick setup with powerful features" },
              { name: "Magento", desc: "Enterprise-grade flexibility" },
              { name: "WooCommerce", desc: "WordPress-powered stores" },
              { name: "BigCommerce", desc: "Built-in scaling capabilities" },
              { name: "Custom Build", desc: "Tailored to your exact needs" },
            ].map((platform, index) => (
              <div
                key={index}
                style={{
                  background: "#f8f9fa",
                  padding: "3rem 2rem",
                  borderRadius: "15px",
                  textAlign: "center",
                  transition: "all 0.3s",
                  cursor: "pointer",
                  border: "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.borderColor = "var(--primary)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h3
                  style={{
                    fontSize: "1.8rem",
                    marginBottom: "1rem",
                    color: "var(--secondary)",
                    fontFamily: "var(--font-family)",
                    fontWeight: "700",
                  }}
                >
                  {platform.name}
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    fontFamily: "var(--font-family)",
                    margin: "0",
                  }}
                >
                  {platform.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "5rem 0", background: "#f8f9fa" }}>
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
            Ecommerce Features We Deliver
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: "🛒",
                title: "Shopping Cart",
                desc: "Seamless cart experience with save-for-later and wishlists",
              },
              {
                icon: "💳",
                title: "Payment Gateway",
                desc: "Secure integration with multiple payment providers",
              },
              {
                icon: "📦",
                title: "Inventory Management",
                desc: "Real-time stock tracking and automated alerts",
              },
              {
                icon: "📊",
                title: "Analytics Dashboard",
                desc: "Track sales, customers, and performance metrics",
              },
              {
                icon: "🔐",
                title: "Secure Checkout",
                desc: "SSL encryption and PCI DSS compliance",
              },
              {
                icon: "📱",
                title: "Mobile Optimized",
                desc: "Perfect shopping experience on any device",
              },
              {
                icon: "🎯",
                title: "Marketing Tools",
                desc: "Email campaigns, discounts, and promotions",
              },
              {
                icon: "🚚",
                title: "Shipping Integration",
                desc: "Real-time rates from major carriers",
              },
              {
                icon: "⭐",
                title: "Reviews & Ratings",
                desc: "Build trust with customer feedback",
              },
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "15px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                  transition: "all 0.3s",
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
                    fontSize: "1.3rem",
                    marginBottom: "0.5rem",
                    color: "var(--secondary)",
                    fontFamily: "var(--font-family)",
                    fontWeight: "600",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    fontFamily: "var(--font-family)",
                    margin: "0",
                    lineHeight: "1.6",
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={faqData} title="Ecommerce Development FAQs" />
    </>
  );
}
