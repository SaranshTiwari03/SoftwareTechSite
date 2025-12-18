// THEME CONFIGURATION
const theme = {
  primary: '#FF7D28',           // Orange - use for CTAs, highlights
  primaryHover: '#e16f20',      // Darker orange for hover states
  secondary: '#2A3647',         // Dark blue - use for headings
  background: '#fff',
  text: '#1a1f2e',              // Main body text color
  textHeading: '#2A3647',       // Heading text color
  textHeadingDark: '#1f2937',   // Darker heading variant
  textLight: '#4b5563',         // Secondary text
  textMuted: '#6b7280',         // Muted text
  textLink: '#5a6576',          // Link color
  textArrow: '#888',            // Arrow icons
  textFallback: '#333',
  white: '#ffffff',
  black: '#000000',
  cardBg: '#F8F8F9',            // Card backgrounds
  hoverBg: '#f9f9f9',
  darkBg: '#2A3647',            // Dark sections
  darkBgDeep: '#1a2332',
  borderColor: '#e5e7eb',       // Borders
  borderLight: '#f0f0f0',
  borderLighter: '#eee',
  borderRadius: '14px',
  fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'Poppins', Arial, sans-serif"
};

export default theme;

// SITE CONFIGURATION
// ⚠️ IMPORTANT: Update these values for your actual website
export const SiteConfig = {
  url: 'https://yourwebsite.com',           // ⚠️ Replace with your actual domain
  name: 'Kapivik',                      // Site name for browser
  domain: 'yourwebsite.com',                // Domain name only
  logo: '/logo.png',                        // Logo path (in public folder)
  logoAlt: 'Company Logo',                  // Logo alt text
  favicon: '/favicon.ico',                  // Favicon path
  ogImage: '/images/og-default.jpg',        // Default Open Graph image
  twitterHandle: '@yourcompany',            // Twitter handle
  locale: 'en_US',                          // Default locale
  
  // Social Media Links (for footer & structured data)
  social: {
    linkedin: 'https://www.linkedin.com/company/yourcompany',
    twitter: 'https://twitter.com/yourcompany',
    facebook: 'https://www.facebook.com/yourcompany',
    instagram: 'https://www.instagram.com/yourcompany',
    youtube: 'https://www.youtube.com/yourcompany'
  }
};

// COMPANY CONFIGURATION
export const CompanyConfig = {
  name: 'Kapivik',
  tagline: 'Transforming Ideas into Digital Reality',
  email: 'info@yourcompany.com',
  phone: '+1 234 567 8900',
  address: '123 Business Street, City, State 12345',
  country: 'United States',
  city: 'New York',
  state: 'NY',
  zipCode: '12345',
  
  // Business Hours
  hours: {
    weekdays: 'Mon - Fri: 9:00 AM - 6:00 PM',
    weekend: 'Sat - Sun: Closed',
    timezone: 'EST'
  },
  
  // Legal
  foundedYear: '2020',
  registrationNumber: 'REG123456789',    // Company registration number
  taxId: 'TAX123456789'                   // Tax ID if needed
};

// PRICING CONFIGURATION
// ⚠️ EDIT THESE VALUES TO UPDATE PRICES ACROSS THE ENTIRE SITE
export const PricingConfig = {
  // Currency symbol
  currency: '₹',
  
  // Services Pricing
  services: {
    mobileApp: {
      starting: '10,000',
      range: '10,000 - 1,00,000',
      hourly: '500 - 1,500',
      basic: '10,000',
      medium: '30,000 - 60,000',
      enterprise: '60,000+'
    },
    webDevelopment: {
      starting: '5,000',
      range: '5,000 - 50,000',
      hourly: '400 - 1,200'
    },
    customSoftware: {
      starting: '20,000',
      range: '20,000 - 2,00,000',
      hourly: '600 - 1,800'
    },
    cloudServices: {
      starting: '3,000',
      range: '3,000 - 30,000',
      hourly: '500 - 1,500',
      monthly: '5,000 - 50,000'
    },
    digitalMarketing: {
      starting: '1,000',
      range: '1,000 - 20,000',
      hourly: '300 - 1,000',
      monthly: '10,000 - 1,00,000'
    }
  },

  // Sub-Services Pricing
  subServices: {
    // Mobile App Development
    android: {
      starting: '10,000',
      range: '10,000 - 1,00,000'
    },
    crossPlatform: {
      starting: '15,000',
      range: '15,000 - 1,50,000'
    },
    
    // Web Development
    ecommerce: {
      starting: '8,000',
      range: '8,000 - 80,000'
    },
    webPortals: {
      starting: '10,000',
      range: '10,000 - 1,00,000'
    },
    
    // Custom Software
    erp: {
      starting: '50,000',
      range: '50,000 - 5,00,000'
    },
    crm: {
      starting: '30,000',
      range: '30,000 - 3,00,000'
    },
    cms: {
      starting: '15,000',
      range: '15,000 - 1,50,000'
    },
    
    // Cloud Services
    cloudAppDevelopment: {
      starting: '20,000',
      range: '20,000 - 2,00,000'
    },
    cloudApps: {
      starting: '20,000',
      range: '20,000 - 2,00,000'
    },
    cloudMigration: {
      starting: '10,000',
      range: '10,000 - 1,00,000'
    },
    cloudSupport: {
      monthly: '10,000 - 1,00,000',
      hourly: '500 - 1,500'
    },
    
    // Digital Marketing
    socialMediaMarketing: {
      starting: '15,000',
      monthly: '15,000 - 1,00,000'
    },
    sem: {
      starting: '20,000',
      monthly: '20,000 - 1,50,000'
    },
    seo: {
      starting: '10,000',
      monthly: '10,000 - 80,000'
    }
  },

  // Technologies Pricing (Language expertise)
  technologies: {
    nodejs: {
      hourly: '500 - 1,500',
      monthly: '80,000 - 2,00,000'
    },
    html5: {
      hourly: '400 - 1,000',
      monthly: '60,000 - 1,50,000'
    },
    java: {
      hourly: '600 - 1,800',
      monthly: '1,00,000 - 2,50,000'
    },
    php: {
      hourly: '450 - 1,200',
      monthly: '70,000 - 1,80,000'
    },
    python: {
      hourly: '600 - 1,800',
      monthly: '1,00,000 - 2,50,000'
    },
    dotnet: {
      hourly: '600 - 1,800',
      monthly: '1,00,000 - 2,50,000'
    }
  },

  // Platform Services Pricing
  platforms: {
    azure: {
      consulting: '50,000 - 5,00,000',
      hourly: '800 - 2,000',
      monthly: '50,000 - 3,00,000'
    },
    gcp: {
      consulting: '50,000 - 5,00,000',
      hourly: '800 - 2,000',
      monthly: '50,000 - 3,00,000'
    },
    oracle: {
      consulting: '1,00,000 - 10,00,000',
      hourly: '1,000 - 2,500',
      monthly: '1,00,000 - 5,00,000'
    },
    sap: {
      consulting: '1,50,000 - 15,00,000',
      hourly: '1,200 - 3,000',
      monthly: '1,50,000 - 7,50,000'
    }
  },

  // Industries Pricing (Project-based estimates)
  industries: {
    automotive: {
      starting: '30,000',
      range: '30,000 - 5,00,000'
    },
    healthcare: {
      starting: '40,000',
      range: '40,000 - 6,00,000'
    },
    education: {
      starting: '20,000',
      range: '20,000 - 3,00,000'
    },
    realEstate: {
      starting: '25,000',
      range: '25,000 - 4,00,000'
    },
    logistics: {
      starting: '35,000',
      range: '35,000 - 5,00,000'
    },
    music: {
      starting: '15,000',
      range: '15,000 - 2,50,000'
    },
    saas: {
      starting: '50,000',
      range: '50,000 - 10,00,000'
    },
    retail: {
      starting: '25,000',
      range: '25,000 - 4,00,000'
    },
    onDemand: {
      starting: '30,000',
      range: '30,000 - 5,00,000'
    },
    ecommerce: {
      starting: '20,000',
      range: '20,000 - 3,50,000'
    },
    fintech: {
      starting: '50,000',
      range: '50,000 - 8,00,000'
    }
  },

  // General Pricing Labels (for display)
  labels: {
    starting: 'Starting from',
    range: 'Project Range',
    hourly: 'Hourly Rate',
    monthly: 'Monthly Retainer',
    consulting: 'Consulting Fee'
  }
};