import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendConsultationEmail } from '../../services/emailService';
import ScheduleCallModal from '../ScheduleCallModal/ScheduleCallModal';
import styles from './ConsultationBanner.module.css';

export default function ConsultationBanner({ data }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    number: '',
    projectNeed: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      setTimeout(() => setSubmitStatus(null), 5000);
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

  const handleButtonClick = (e, buttonType) => {
    if (buttonType === 'secondary') {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <section 
        className={styles.banner}
        style={{
          background: data.backgroundType === 'image' 
            ? `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${data.backgroundImage})` 
            : data.backgroundColor || '#3d4f5c',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className={styles.container}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb}>
              {data.breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  {item.path ? (
                    <Link to={item.path} className={styles.breadcrumbLink}>
                      {item.label}
                    </Link>
                  ) : (
                    <span className={styles.breadcrumbCurrent}>{item.label}</span>
                  )}
                  {index < data.breadcrumb.length - 1 && (
                    <span className={styles.breadcrumbSeparator}>→</span>
                  )}
                </React.Fragment>
              ))}
            </nav>

            {/* Pre-title (optional) */}
            {data.preTitle && (
              <p className={styles.preTitle}>{data.preTitle}</p>
            )}

            {/* Title */}
            <h1 className={styles.title}>{data.title}</h1>

            {/* Description */}
            <p className={styles.description}>{data.description}</p>

            {/* Action Buttons */}
            {data.buttons && data.buttons.length > 0 && (
              <div className={styles.buttonGroup}>
                {data.buttons.map((button, index) => (
                  <Link
                    key={index}
                    to="/contact"
                    className={
                      button.type === 'primary' 
                        ? styles.primaryButton 
                        : styles.secondaryButton
                    }
                    onClick={(e) => handleButtonClick(e, button.type)}
                  >
                    {button.icon === 'rocket' && <span className={styles.icon}>🚀</span>}
                    {button.icon === 'phone' && <span className={styles.icon}>📞</span>}
                    {button.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Optional Banner Image - ONLY SHOW IF URL EXISTS */}
            {data.bannerImage && data.bannerImage.trim() !== '' && (
              <div className={styles.bannerImageContainer}>
                <img 
                  src={data.bannerImage} 
                  alt={data.bannerImageAlt || data.title} 
                  className={styles.bannerImage}
                />
              </div>
            )}
          </div>

          {/* Right Side - Consultation Form */}
          <div className={styles.formContainer}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>
                {data.formTitle ? (
                  <>
                    {data.formTitle.split(' ').slice(0, -1).join(' ')}{' '}
                    <span className={styles.formTitleOrange}>
                      {data.formTitle.split(' ').slice(-1)}
                    </span>
                  </>
                ) : (
                  <>
                    Book a Free <span className={styles.formTitleOrange}>Consultation</span>
                  </>
                )}
              </h3>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
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
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <input
                  type="tel"
                  name="number"
                  placeholder="Number"
                  value={formData.number}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                  disabled={isSubmitting}
                />

                <textarea
                  name="projectNeed"
                  placeholder="Describe Your Project Need."
                  value={formData.projectNeed}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows="4"
                  disabled={isSubmitting}
                />

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : (data.formButton || 'Get In Touch')}
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

                <p className={styles.privacyText}>
                  By submitting this form, you agree to our{' '}
                  <Link to="/privacy" className={styles.privacyLink}>
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Call Modal */}
      <ScheduleCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}