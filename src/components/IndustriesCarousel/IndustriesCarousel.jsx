import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./IndustriesCarousel.module.css";

// SVG Icon Components for Industries
const AutomotiveIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17h14v-2H5v2zm0-4h3l2-2H8l-3 2zm9-2l2 2h3l-3-2h-2zm-4 4h4v-4h-4v4zm-5-8l2-3h8l2 3M4 17v2c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2M16 18c.55 0 1-.45 1-1v-2h-1c-.55 0-1 .45-1 1v2z"/>
    <circle cx="8" cy="17" r="1.5"/>
    <circle cx="16" cy="17" r="1.5"/>
  </svg>
);

const EducationIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const RealEstateIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const LogisticsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13"/>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

const HealthcareIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
);

const MusicIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="16" r="3"/>
  </svg>
);

const SaasIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/>
    <line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
);

const RetailIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/>
    <circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

const OnDemandIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const EcommerceIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);

const FintechIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

// Industries data with stock images
const industriesData = [
  {
    title: "Automotive",
    description: "Transforming automotive industry with bespoke tech.",
    icon: <AutomotiveIcon />,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&q=80",
    link: "/industries/automotive",
  },
  {
    title: "Education",
    description: "Enhancing education with new-age EdTech.",
    icon: <EducationIcon />,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=80",
    link: "/industries/education",
  },
  {
    title: "Real Estate",
    description: "Innovating real estate with custom tech.",
    icon: <RealEstateIcon />,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80",
    link: "/industries/real-estate",
  },
  {
    title: "Logistics",
    description: "Optimizing logistics with intelligent tech.",
    icon: <LogisticsIcon />,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80",
    link: "/industries/logistics",
  },
  {
    title: "Healthcare",
    description: "Accessible healthcare through tailored tech solutions.",
    icon: <HealthcareIcon />,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80",
    link: "/industries/healthcare",
  },
  {
    title: "Music",
    description: "Advancing music industry with digital innovations.",
    icon: <MusicIcon />,
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop&q=80",
    link: "/industries/music",
  },
  {
    title: "SAAS",
    description: "Developing custom solutions for SAAS platforms.",
    icon: <SaasIcon />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    link: "/industries/saas",
  },
  {
    title: "Retail",
    description: "Scaling retail businesses through advanced technology.",
    icon: <RetailIcon />,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80",
    link: "/industries/retail",
  },
  {
    title: "On-Demand",
    description: "Elevating on-demand services with innovative tech.",
    icon: <OnDemandIcon />,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
    link: "/industries/on-demand",
  },
  {
    title: "ECommerce",
    description: "Driving e-commerce growth with smart tech.",
    icon: <EcommerceIcon />,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&q=80",
    link: "/industries/ecommerce",
  },
  {
    title: "Fintech",
    description: "Empowering fintech with specialized tech services.",
    icon: <FintechIcon />,
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop&q=80",
    link: "/industries/fintech",
  },
];

export default function IndustriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cardsToShow, setCardsToShow] = useState(3);
  const carouselRef = useRef(null);

  const totalCards = industriesData.length;

  // Update cards to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsToShow(1); // Mobile: 1 card
      } else if (window.innerWidth <= 1200) {
        setCardsToShow(2); // Tablet: 2 cards
      } else {
        setCardsToShow(3); // Desktop: 3 cards
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalCards - cardsToShow : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= totalCards - cardsToShow ? 0 : prev + 1
    );
  };

  return (
    <section className={styles.carouselSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Expertise Across Domains</h2>

        <div className={styles.carouselWrapper}>
          <button
            className={`${styles.navButton} ${styles.navButtonLeft}`}
            onClick={handlePrev}
            aria-label="Previous"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className={styles.carouselContainer} ref={carouselRef}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              }}
            >
              {industriesData.map((industry, index) => (
                <Link
                  key={index}
                  to={industry.link}
                  className={styles.industryCard}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={styles.cardContent}>
                    <div className={styles.iconWrapper}>
                      <div className={styles.icon}>{industry.icon}</div>
                    </div>
                    <h3 className={styles.cardTitle}>{industry.title}</h3>
                    <p className={styles.cardDescription}>
                      {industry.description}
                    </p>

                    <div className={styles.arrowWrapper}>
                      <div
                        className={`${styles.arrow} ${
                          hoveredCard === index ? styles.arrowHovered : ""
                        }`}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Sliding Image Overlay */}
                  <div
                    className={`${styles.imageOverlay} ${
                      hoveredCard === index ? styles.imageVisible : ""
                    }`}
                    style={{
                      backgroundImage: `linear-gradient(rgba(35, 39, 47, 0.75), rgba(35, 39, 47, 0.75)), url(${industry.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className={styles.overlayContent}>
                      <div className={styles.overlayIconWrapper}>
                        <div className={styles.overlayIcon}>{industry.icon}</div>
                      </div>
                      <h3 className={styles.overlayTitle}>{industry.title}</h3>
                      <p className={styles.overlayDescription}>
                        {industry.description}
                      </p>
                      <div className={styles.overlayArrow}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <button
            className={`${styles.navButton} ${styles.navButtonRight}`}
            onClick={handleNext}
            aria-label="Next"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}