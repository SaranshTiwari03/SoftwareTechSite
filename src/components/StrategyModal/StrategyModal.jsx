import React, { useState, useEffect } from 'react';
import { sendStrategySessionEmail } from '../../services/emailService';
import styles from './StrategyModal.module.css';

export default function StrategyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    number: '',
    budget: 10000,
    projectBrief: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Extended tech stack and tools - MORE LOGOS!
  const techStack = [
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', name: 'Java' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', name: 'PHP' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', name: '.NET' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', name: 'Azure' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', name: 'GCP' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name: 'MySQL' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', name: 'Docker' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', name: 'Kubernetes' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', name: 'Angular' },
  ];

  useEffect(() => {
    // Random delay between 1-5 minutes (60000-300000 ms) for first appearance
    const initialDelay = Math.floor(Math.random() * (300000 - 60000 + 1)) + 60000;
    
    const initialTimer = setTimeout(() => {
      setIsOpen(true);
    }, initialDelay);

    // Show modal every 30 minutes (1800000 ms) after first appearance
    const recurringTimer = setInterval(() => {
      setIsOpen(true);
    }, 1800000); // 30 minutes

    return () => {
      clearTimeout(initialTimer);
      clearInterval(recurringTimer);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setSubmitStatus(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBudgetChange = (e) => {
    setFormData(prev => ({
      ...prev,
      budget: parseInt(e.target.value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const result = await sendStrategySessionEmail(formData);

    if (result.success) {
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        number: '',
        budget: 10000,
        projectBrief: ''
      });
      setTimeout(() => {
        handleClose();
      }, 3000);
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  // Scattered positions - ALL AROUND the hand emoji area!
  const logoPositions = [
    { top: '5%', left: '8%', delay: '0s', size: '35px' },      // Top left
    { top: '2%', left: '25%', delay: '0.5s', size: '38px' },   // Top center-left
    { top: '8%', left: '42%', delay: '1s', size: '32px' },     // Top center
    { top: '4%', left: '60%', delay: '0.3s', size: '40px' },   // Top center-right
    { top: '10%', left: '78%', delay: '1.2s', size: '36px' },  // Top right
    { top: '18%', left: '5%', delay: '0.8s', size: '34px' },   // Mid left
    { top: '16%', left: '88%', delay: '0.6s', size: '38px' },  // Mid right
    { top: '25%', left: '15%', delay: '1.5s', size: '36px' },  // Below hand - left
    { top: '28%', left: '82%', delay: '0.9s', size: '35px' },  // Below hand - right
    { top: '32%', left: '7%', delay: '1.8s', size: '33px' },   // Lower left
    { top: '35%', left: '90%', delay: '1.1s', size: '37px' },  // Lower right
    { top: '12%', left: '35%', delay: '0.4s', size: '31px' },  // Middle scattered
    { top: '22%', left: '50%', delay: '1.6s', size: '39px' },  // Center scattered
    { top: '30%', left: '40%', delay: '0.7s', size: '34px' },  // Lower center-left
    { top: '26%', left: '65%', delay: '1.3s', size: '36px' },  // Lower center-right
  ];

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleClose}>
          ×
        </button>

        <div className={styles.modalGrid}>
          {/* Left Side - Dark Section */}
          <div className={styles.leftSection}>
            {/* Floating Tech Logos - PROPERLY SCATTERED! */}
            <div className={styles.floatingLogos}>
              {techStack.map((tech, index) => (
                <div 
                  key={index}
                  className={styles.floatingLogo}
                  style={{
                    top: logoPositions[index].top,
                    left: logoPositions[index].left,
                    animationDelay: logoPositions[index].delay,
                    width: logoPositions[index].size,
                    height: logoPositions[index].size
                  }}
                >
                  <img src={tech.icon} alt={tech.name} />
                </div>
              ))}
            </div>

            {/* Waving Hand Emoji */}
            <div className={styles.waveEmoji}>👋</div>
            
            <h2 className={styles.leftTitle}>
              Hold On<br />
              <span className={styles.titleHighlight}>a Moment!</span>
            </h2>
            
            <p className={styles.leftSubtitle}>
                Book Your <span className={styles.freeText}>FREE</span> strategy session to discover how we can help transform your business with:
            </p>

            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span>
                <span className={styles.featureText}>End-to-End Development</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span>
                <span className={styles.featureText}>Budget Estimation & Cost Breakdown</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span>
                <span className={styles.featureText}>Faster Go-To-Market Strategies</span>
              </li>
            </ul>
          </div>

          {/* Right Side - Form Section */}
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

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.input}
                required
                disabled={isSubmitting}
              />

              <input
                type="tel"
                name="number"
                placeholder="Contact Number"
                value={formData.number}
                onChange={handleInputChange}
                className={styles.input}
                required
                disabled={isSubmitting}
              />

              {/* Budget Slider */}
              <div className={styles.budgetSection}>
                <label className={styles.budgetLabel}>Budget</label>
                <input
                  type="range"
                  name="budget"
                  min="10000"
                  max="5000000"
                  step="10000"
                  value={formData.budget}
                  onChange={handleBudgetChange}
                  className={styles.budgetSlider}
                  disabled={isSubmitting}
                />
                <div className={styles.budgetValues}>
                  <span className={styles.budgetMin}>₹10,000</span>
                  <span className={styles.budgetCurrent}>₹{formData.budget.toLocaleString('en-IN')}</span>
                  <span className={styles.budgetMax}>₹50,00,000</span>
                </div>
              </div>

              <textarea
                name="projectBrief"
                placeholder="Project Brief"
                value={formData.projectBrief}
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
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>

              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  ✓ Thank you! We'll contact you soon for your strategy session.
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