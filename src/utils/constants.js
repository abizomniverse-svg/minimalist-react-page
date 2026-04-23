export const THEME = {
  colors: {
    primary: '#FF00C8', // Hot Pink
    secondary: '#00F5D4', // Neon Cyan
    accent: '#A6FF00', // Neon Lime
    background: '#FFFFFF', // Clean White
    text: '#020A1B', // Dark Navy
    muted: '#75819A',
    border: '#E2E8F0',
    
    // Gradients for eye-grabby effects
    gradients: {
      hot: 'linear-gradient(135deg, #FF00C8 0%, #7E22CE 100%)',
      neon: 'linear-gradient(135deg, #00F5D4 0%, #7E22CE 100%)',
      lime: 'linear-gradient(135deg, #A6FF00 0%, #00F5D4 100%)',
    }
  },
  fonts: {
    main: "'Inter', sans-serif",
    heading: "'Outfit', sans-serif"
  },
  branding: {
    name: "TikyTop",
    logoText: "T"
  }
};

// Key editable metrics and specific pricing to keep centralized
export const GLOBAL_CONFIG = {
  trustScore: "4.8",
  trustPlatform: "Trustscore",
  currency: "$",
  supportEmail: "support@tikytop.com"
};
