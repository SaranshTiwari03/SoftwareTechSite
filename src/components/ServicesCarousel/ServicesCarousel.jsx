import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ServicesCarousel.module.css";

// SVG Icon Components
const MobileIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const WebIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const SoftwareIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const GameIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="6" y1="12" x2="10" y2="12" />
    <line x1="8" y1="10" x2="8" y2="14" />
    <line x1="15" y1="13" x2="15.01" y2="13" />
    <line x1="18" y1="11" x2="18.01" y2="11" />
    <rect x="2" y="6" width="20" height="12" rx="2" />
  </svg>
);

const AIIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="2" x2="12" y2="9" />
    <line x1="12" y1="15" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="9" y2="12" />
    <line x1="15" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
  </svg>
);

const CloudIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const MarketingIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

// Service data - STAFF & BLOCKCHAIN REMOVED
const servicesData = [
  {
    title: "Mobile App Development",
    description:
      "We design and develop high-performance mobile applications with seamless user experiences, robust security, and scalable architectures, tailored to meet user and business expansion needs.",
    icon: <MobileIcon />,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80",
    link: "/services/mobile-app",
  },
  {
    title: "Web Development",
    description:
      "Our web development services deliver responsive, high-speed websites with secure, scalable back-end solutions, optimized for both user engagement and operational efficiency.",
    icon: <WebIcon />,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop&q=80",
    link: "/services/web",
  },
  {
    title: "Custom Software Development",
    description:
      "We create custom software solutions that enhance business processes, featuring advanced integrations, strong security measures, and scalable designs to support your growth.",
    icon: <SoftwareIcon />,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80",
    link: "/services/custom-software",
  },
  {
    title: "Cloud Services",
    description:
      "Optimize your infrastructure with our comprehensive cloud services, including migration, deployment, and ongoing support for scalable, secure solutions.",
    icon: <CloudIcon />,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop&q=80",
    link: "/services/cloud",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your online presence with our comprehensive digital marketing services, including SEO, social media marketing, and data-driven campaign strategies.",
    icon: <MarketingIcon />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    link: "/services/marketing",
  },
  {
    title: "Game Development",
    description:
      "Transform your gaming ideas into reality with our expert game development services, featuring stunning graphics, immersive gameplay, and cross-platform compatibility.",
    icon: <GameIcon />,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop&q=80",
    link: "/services/game",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Leverage cutting-edge artificial intelligence and machine learning solutions to automate processes, gain insights, and drive innovation in your business.",
    icon: <AIIcon />,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80",
    link: "/services/ai",
  },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cardsToShow, setCardsToShow] = useState(3);
  const carouselRef = useRef(null);

  const totalCards = servicesData.length;

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
        <h2 className={styles.heading}>Core Services We Provide</h2>

        <div className={styles.carouselWrapper}>
          {/* Left Arrow */}
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

          {/* Carousel Track */}
          <div className={styles.carouselContainer} ref={carouselRef}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsToShow)
                }%)`,
              }}
            >
              {servicesData.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className={styles.serviceCard}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={styles.cardContent}>
                    <div className={styles.iconWrapper}>
                      <div className={styles.icon}>{service.icon}</div>
                    </div>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDescription}>
                      {service.description}
                    </p>

                    <div className={styles.arrowWrapper}>
                      <div
                        className={`${styles.arrow} ${
                          hoveredCard === index ? styles.arrowHovered : ""
                        }`}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
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
                      backgroundImage: `linear-gradient(rgba(35, 39, 47, 0.75), rgba(35, 39, 47, 0.75)), url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className={styles.overlayContent}>
                      <div className={styles.overlayIconWrapper}>
                        <div className={styles.overlayIcon}>{service.icon}</div>
                      </div>
                      <h3 className={styles.overlayTitle}>{service.title}</h3>
                      <p className={styles.overlayDescription}>
                        {service.description}
                      </p>
                      <div className={styles.overlayArrow}>
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
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

          {/* Right Arrow */}
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

        <div className={styles.ctaWrapper}>
          <button className={styles.ctaButton}>
            Consult Transformation Goals
          </button>
        </div>
      </div>
    </section>
  );
}