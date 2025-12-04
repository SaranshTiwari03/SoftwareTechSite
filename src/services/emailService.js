import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_ut3xsga';
const EMAILJS_TEMPLATE_ID = 'template_315djd9';
const EMAILJS_PUBLIC_KEY = 'xXSgRHdV59C3aI4kM';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

/**
 * Send consultation form email
 * @param {Object} formData - The form data to send
 * @param {string} formData.fullName - User's full name
 * @param {string} formData.email - User's email
 * @param {string} formData.number - User's phone number
 * @param {string} formData.projectNeed - Project description
 * @returns {Promise} - EmailJS promise
 */
export const sendConsultationEmail = async (formData) => {
  try {
    const templateParams = {
      title: 'New Consultation Request',
      name: formData.fullName,
      email: formData.email,
      message: `Phone: ${formData.number}\n\nProject Details:\n${formData.projectNeed || 'No project details provided'}`
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};

/**
 * Send quote request email
 * @param {Object} formData - The quote form data
 * @returns {Promise} - EmailJS promise
 */
export const sendQuoteEmail = async (formData) => {
  try {
    const templateParams = {
      title: 'New Quote Request',
      name: formData.fullName,
      email: formData.email,
      message: `Phone: ${formData.phone}
Company: ${formData.company || 'Not provided'}
Service: ${formData.service}
Budget: ${formData.budget || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}

Project Details:
${formData.projectDetails}`
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Quote email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Quote email sending failed:', error);
    return { success: false, error };
  }
};

/**
 * Send strategy session email (for modal popup)
 * @param {Object} formData - The strategy session form data
 * @param {string} formData.fullName - User's full name
 * @param {string} formData.email - User's email
 * @param {string} formData.number - User's phone number
 * @param {number} formData.budget - Project budget in rupees
 * @param {string} formData.projectBrief - Project brief
 * @returns {Promise} - EmailJS promise
 */
export const sendStrategySessionEmail = async (formData) => {
  try {
    const templateParams = {
      title: 'New FREE Strategy Session Request',
      name: formData.fullName,
      email: formData.email,
      message: `Phone: ${formData.number}
Budget: ₹${formData.budget.toLocaleString('en-IN')}

Project Brief:
${formData.projectBrief || 'No project brief provided'}`
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Strategy session email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Strategy session email sending failed:', error);
    return { success: false, error };
  }
};