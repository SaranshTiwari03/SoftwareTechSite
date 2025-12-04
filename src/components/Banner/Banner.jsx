import React, { useState } from "react";
import styles from "./Banner.module.css";
import bannerVideo from "../../assets/Banner.mp4";
import ScheduleCallModal from "../ScheduleCallModal/ScheduleCallModal";

export default function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles.banner}>
        {/* Background Video */}
        <video 
          className={styles.backgroundVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={bannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className={styles.overlay}></div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.container}>
            <p className={styles.subtitle}>Digital Transformation Company</p>
            <h1 className={styles.title}>
              Full-Stack Tech Enablement<br />
              For Future-Ready Businesses
            </h1>
            <p className={styles.description}>
              From adaption to expansion, we are your partners throughout the digital growth cycle.
            </p>
            <button className={styles.ctaButton} onClick={() => setIsModalOpen(true)}>
              Schedule a Call
            </button>

            {/* Featured In Section */}
            {/* <div className={styles.featuredSection}>
              <span className={styles.featuredText}>Featured in</span>
              <div className={styles.logoContainer}>
                <img src="/logos/inc.png" alt="Inc." className={styles.logo} />
                <img src="/logos/forbes.png" alt="Forbes" className={styles.logo} />
                <img src="/logos/yc.png" alt="YC" className={styles.logo} />
                <img src="/logos/entrepreneur.png" alt="Entrepreneur" className={styles.logo} />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Schedule Call Modal */}
      <ScheduleCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}