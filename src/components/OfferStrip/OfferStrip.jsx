import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { offerStripConfig } from '../../data/offerStripData';
import styles from './OfferStrip.module.css';

export default function OfferStrip() {
  const config = offerStripConfig;
  const stripRef = useRef(null);
  
  if (!config.enabled) return null;

  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const offerEndDate = config.endDate ? new Date(config.endDate).getTime() : null;

  useEffect(() => {
    if (!config.showCountdown || !offerEndDate) return;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = offerEndDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [offerEndDate, config.showCountdown]);

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsClosing(true);
    
    setTimeout(() => {
      setIsVisible(false);
    }, 400);
  };

  if (!isVisible) return null;

  const customStyle = config.backgroundColor ? { background: config.backgroundColor } : {};
  const stripClasses = `${styles.offerStrip} ${isClosing ? styles.closing : ''}`;

  const stripContent = (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          {config.badge && (
            <span className={styles.badge}>{config.badge}</span>
          )}
          <span 
            className={styles.message}
            dangerouslySetInnerHTML={{ __html: config.message }}
          />
        </div>

        {config.showCountdown && offerEndDate && (
          <div className={styles.countdown}>
            <div className={styles.timeBlock}>
              <span className={styles.timeValue}>{timeLeft.days}</span>
              <span className={styles.timeLabel}>d</span>
            </div>
            <span className={styles.separator}>:</span>
            <div className={styles.timeBlock}>
              <span className={styles.timeValue}>{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className={styles.timeLabel}>h</span>
            </div>
            <span className={styles.separator}>:</span>
            <div className={styles.timeBlock}>
              <span className={styles.timeValue}>{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className={styles.timeLabel}>m</span>
            </div>
            <span className={styles.separator}>:</span>
            <div className={styles.timeBlock}>
              <span className={styles.timeValue}>{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className={styles.timeLabel}>s</span>
            </div>
          </div>
        )}

        <button 
          onClick={handleClose} 
          className={styles.closeButton}
          aria-label="Close offer banner"
        >
          ✕
        </button>
      </div>
    </>
  );

  if (config.link) {
    return (
      <Link 
        ref={stripRef}
        to={config.link} 
        className={stripClasses}
        style={customStyle}
      >
        {stripContent}
      </Link>
    );
  }

  return (
    <div 
      ref={stripRef}
      className={stripClasses}
      style={customStyle}
    >
      {stripContent}
    </div>
  );
}