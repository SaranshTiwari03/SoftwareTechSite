import React, { useState, useEffect } from 'react';
import { sendConsultationEmail } from '../../services/emailService';
import styles from './ScheduleCallModal.module.css';

export default function ScheduleCallModal({ isOpen, onClose, backgroundImage }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    number: '',
    projectNeed: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
      setTimeout(() => {
        setSubmitStatus(null);
        onClose();
      }, 2000);
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

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  // Determine background style
  const leftSectionStyle = backgroundImage
    ? {
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.05) 2px,
            rgba(0, 0, 0, 0.05) 4px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            rgba(0, 0, 0, 0.03) 10px,
            rgba(0, 0, 0, 0.03) 20px
          ),
          linear-gradient(rgba(30, 58, 95, 0.85), rgba(15, 39, 68, 0.85)),
          url(${backgroundImage})
        `,
        backgroundSize: 'auto, auto, cover, cover',
        backgroundPosition: 'center',
      }
    : {};

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        {/* Close Button */}
        <button className={styles.closeButton} onClick={onClose} type="button">
          ✕
        </button>

        <div className={styles.modalInner}>
          {/* Left Side - Graphic */}
          <div className={styles.leftSection} style={leftSectionStyle}>
            <div>
              <h2 className={styles.modalTitle}>Let's Start A Project Together</h2>
              <p className={styles.modalDescription}>
                We'll contact you within a couple of hours to schedule a meeting to discuss your goals.
              </p>
            </div>
            
            <div className={styles.laptopGraphic}>
              <div className={styles.laptop}>
                <div className={styles.screen}>
                  <div className={styles.screenContent}>
                    <div className={styles.imageGrid}>
                      <div className={styles.imageBox}></div>
                      <div className={styles.imageBox}></div>
                      <div className={styles.imageBox}></div>
                      <div className={styles.imageBox}></div>
                      <div className={styles.imageBox}></div>
                      <div className={styles.imageBox}></div>
                      <div className={styles.imageBox}></div>
                      <div className={styles.imageBox}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.keyboard}></div>
                <div className={styles.phone}>
                  <div className={styles.phoneScreen}></div>
                </div>
              </div>
              <div className={styles.geometricShapes}>
                <div className={styles.triangle1}></div>
                <div className={styles.triangle2}></div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className={styles.rightSection}>
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

              <div className={styles.formRow}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.inputHalf}
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="tel"
                  name="number"
                  placeholder="Number"
                  value={formData.number}
                  onChange={handleInputChange}
                  className={styles.inputHalf}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <textarea
                name="projectNeed"
                placeholder="Describe Your Project Need."
                value={formData.projectNeed}
                onChange={handleInputChange}
                className={styles.textarea}
                rows="5"
                disabled={isSubmitting}
              />

              <label className={styles.checkboxLabel}>
                <input type="checkbox" className={styles.checkbox} />
                <span>Share Non Disclosure Agreement</span>
              </label>

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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}