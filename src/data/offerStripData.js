/**
 * Offer Strip Configuration
 * Centralized settings for the promotional banner at the top of the website
 */

export const offerStripConfig = {
    // ==================== MAIN TOGGLE ====================
    enabled: true, // Set to false to disable offer strip site-wide
    
    // ==================== OFFER CONTENT ====================
    badge: "LIMITED OFFER", // Badge text on the left (set to null to hide)
    
    message: "Save Up to <strong>40% OFF</strong> on Your Next Project - Book a Free Consultation Today!",
    // You can use HTML tags: <strong>, <em>, <span>, etc.
    
    // ==================== COUNTDOWN TIMER ====================
    showCountdown: true, // Set to false to hide countdown timer
    
    endDate: "2025-12-31T23:59:59", 
    // Format: "YYYY-MM-DDTHH:MM:SS"
    // Examples:
    // "2025-03-15T23:59:59" - March 15, 2025
    // "2025-06-30T18:00:00" - June 30, 2025 at 6 PM
    
    // ==================== BEHAVIOR SETTINGS ====================
    persistence: "session", 
    // Options:
    // - "session": Banner stays closed until browser tab/window is closed
    // - "permanent": Banner stays closed until browser cache is cleared
    
    link: "/contact", 
    // Set to null if you don't want the banner to be clickable
    // Examples: "/contact", "/services", null
    
    // ==================== STYLING ====================
    // Leave as null to use default theme colors from theme.css
    // Or customize with your own gradient/color
    backgroundColor: null, // Uses CSS variable from theme
    // Custom examples:
    // backgroundColor: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
    // backgroundColor: "#FF7D28",
  };
  
  // ==================== OFFER PRESETS ====================
  // Uncomment and copy any preset to use it quickly
  
  // Holiday Sale Example:
  // export const offerStripConfig = {
  //   enabled: true,
  //   badge: "HOLIDAY SALE",
  //   message: "🎄 <strong>Holiday Special:</strong> Get 50% OFF on All Web Development Services!",
  //   showCountdown: true,
  //   endDate: "2025-12-25T23:59:59",
  //   persistence: "session",
  //   link: "/contact",
  //   backgroundColor: null // Uses theme colors
  // };
  
  // Flash Sale Example (No Countdown):
  // export const offerStripConfig = {
  //   enabled: true,
  //   badge: "FLASH SALE",
  //   message: "⚡ <strong>Flash Sale!</strong> First 10 Clients Get 30% OFF - Limited Spots Available!",
  //   showCountdown: false,
  //   endDate: null,
  //   persistence: "permanent",
  //   link: "/contact",
  //   backgroundColor: null
  // };
  
  // Simple Announcement Example:
  // export const offerStripConfig = {
  //   enabled: true,
  //   badge: null,
  //   message: "🚀 We're hiring! Join our team of talented developers - <strong>View Open Positions</strong>",
  //   showCountdown: false,
  //   endDate: null,
  //   persistence: "session",
  //   link: "/careers",
  //   backgroundColor: null
  // };
  
  // New Year Offer Example:
  // export const offerStripConfig = {
  //   enabled: true,
  //   badge: "NEW YEAR 2025",
  //   message: "🎊 Start the Year Right! <strong>35% OFF</strong> on Mobile App Development",
  //   showCountdown: true,
  //   endDate: "2025-01-31T23:59:59",
  //   persistence: "session",
  //   link: "/services/mobile-app",
  //   backgroundColor: null
  // };