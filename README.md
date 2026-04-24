# TikyTop - Social Media Growth Platform

A modern, high-conversion landing page and order management system for TikyTop - a social media growth service helping creators and businesses grow their TikTok, Instagram, and YouTube presence with real followers, likes, views, and engagement.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Core Components](#core-components)
- [Pages Overview](#pages-overview)
- [Quick Order Flow](#quick-order-flow)
- [Authentication System](#authentication-system)
- [Dashboard Features](#dashboard-features)
- [Scroll Animations](#scroll-animations)
- [Responsive Design](#responsive-design)
- [Color Scheme](#color-scheme)
- [API & Services](#api--services)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Overview

TikyTop is a full-stack social media growth platform that helps creators and businesses amplify their social media presence. The platform provides services for TikTok, Instagram, and YouTube including followers, likes, views, comments, and shares from real, engaged accounts.

This project includes:
- High-converting landing page with scroll animations
- Quick Order tool for instant purchases
- Full dashboard for order management
- Authentication system with session management
- Order processing wizard
- Analytics and reporting

### Key Metrics
- 2M+ Orders Delivered
- 99.9% Success Rate
- 4.9/5 User Rating
- 30-Day Refill Guarantee

## Features

### Landing Page
- Responsive hero section with Quick Order tool
- Transparent glass morphism order card
- Scroll-triggered animations using GSAP ScrollTrigger
- Floating parallax background effects
- Progress bar showing scroll position
- Section reveal animations
- Package cards with stagger effects
- Testimonial horizontal scroll with pin
- FAQ accordion with smooth reveals
- Feature cards with scale/opacity animations

### Quick Order System
- Platform selection (TikTok, Instagram, YouTube)
- Service selection (Followers, Likes, Views, Comments, Shares)
- Quantity presets + custom input
- Real-time price calculation
- Login check → redirect to dashboard
- Order pre-filling on dashboard

### Dashboard
- Overview tab with order statistics
- New order tab with full wizard
- Active orders tracking
- Completed orders history
- Wallet balance management
- Profile settings

### Order Flow
- Account lookup by profile URL
- Service package selection
- Post/package selection (where applicable)
- Customization options
- Secure checkout
- Order confirmation

### Authentication
- Email/password login
- Demo login for testing
- Session management with sessionStorage
- Protected routes with AuthGuard
- Redirect after login with state

### Animations
- GSAP ScrollTrigger integration
- Progress bar synced to scroll
- Parallax backgrounds
- Fade-in section reveals
- Scale/opacity effects
- Horizontal scroll sections
- Accordion animations

## Tech Stack

### Frontend
- **React 18** - UI library with hooks
- **Vite** - Fast build tool
- **Framer Motion** - Animation library (for some components)
- **GSAP** - Professional animations with ScrollTrigger
- **React Router v6** - Client-side routing

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Variables** - Theme customization
- **Backdrop Filter** - Glass morphism effects

### Development
- **ESLint** - Code quality
- **Git** - Version control
- **npm** - Package management

### Build & Deploy
- **Vite Build** - Optimized production builds
- **Static Hosting** - Vercel, Netlify compatible

## Getting Started

### Prerequisites

- Node.js v16+
- npm v7+ or yarn
- Git

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/abizomniverse-svg/minimalist-react-page.git
   ```

2. Navigate to the project directory
   ```bash
   cd minimalist-react-page
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
tikytop/
├── public/
│   └── icons.svg              # SVG icons
├── src/
│   ├── assets/               # Static assets
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx    # Navigation header
│   │   │   └── Footer.jsx    # Page footer
│   │   └── AuthGuard.jsx      # Route protection
│   ├── hooks/
│   │   └── useScrollAnimations.jsx  # GSAP animations hook
│   ├── pages/
│   │   ├── Auth/
│   │   │   └── Login.jsx     # Login page
│   │   ├── Dashboard.jsx     # Main dashboard
│   │   ├── Landing/
│   │   │   ├── LandingPage.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── TrendingPackage.jsx
│   │   │   ├── TestimonialSection.jsx
│   │   │   ├── FaqSection.jsx
│   │   │   └── ...more sections
│   │   └── Order/
│   │       └── OrderPage.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── utils/
│   │   └── auth.js          # Auth utilities
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Core Components

### Layout
- **Navbar** - Responsive navigation with links and auth
- **Footer** - Links, social media, contact info

### Landing Sections
- **HeroSection** - Main hero with Quick Order
- **OrderStepsSection** - Visual order guide
- **TrendingPackage** - Elite growth packages
- **PremiumFeatures** - Feature highlights
- **AnalyticsSection** - Statistics and numbers
- **Spotlight** - Special offers
- **TargetedAudience** - Audience info
- **WhyTikytop** - Value proposition
- **TestimonialSection** - User testimonials with scroll
- **FaqSection** - FAQ accordion

### Auth
- **Login** - Email/password login
- **Register** - Account registration
- **AuthGuard** - Route protection wrapper

## Pages Overview

### Landing Page (`/`)
The main landing page combining all sections:
- Hero with Quick Order tool
- Order steps
- Packages
- Features
- Testimonials
- FAQ

### Login Page (`/login`)
- Email/password form
- Demo login button
- Redirects back after auth

### Dashboard (`/dashboard`)
Full order management:
- Overview with stats
- New order creation
- Active orders
- Completed orders
- Wallet
- Settings

### Order Page (`/order`)
Complete order wizard:
- Find account
- Select package
- Select posts
- Customize
- Checkout
- Success

## Quick Order Flow

1. User selects platform (TikTok/Instagram/YouTube)
2. User selects service (Followers/Likes/Views/etc.)
3. User enters profile URL
4. User selects quantity
5. Price calculates in real-time
6. User clicks "Order Now"
7. If not logged in → redirect to login
8. After login → auto-redirect to dashboard
9. Order form pre-filled in dashboard modal

```javascript
// Quick Order handleOrder logic
const handleOrder = () => {
  if (!isAuthenticated()) {
    navigate('/login', { state: { from: '/dashboard', order: {...} } });
    return;
  }
  navigate('/dashboard', { state: { order: {...} } });
};
```

## Authentication System

### Session Management
Uses sessionStorage for demo authentication:

```javascript
// utils/auth.js
const SESSION_KEY = 'tikytop_demo_session';

export function setSession(user) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ user }));
}

export function isAuthenticated() {
  return !!getSession();
}
```

### Protected Routes
The AuthGuard component protects dashboard routes:

```javascript
// components/AuthGuard.jsx
if (!isAuthenticated()) {
  return <Navigate to="/login" state={{ from: location }} />;
}
```

### Login Redirect
After login, users are redirected to their intended destination:

```javascript
// pages/Auth/Login.jsx
const from = location.state?.from || '/dashboard';
navigate(from, { replace: true });
```

## Dashboard Features

### Overview Tab
- Total orders count
- Active orders count
- Completed orders count
- Wallet balance
- Recent orders list

### New Order Tab
- Platform selection
- Service selection
- URL input
- Quantity selection
- Price calculation
- Submit order

### Orders Tracking
- Status indicators (Processing, Completed, Partial, Cancelled)
- Order history with dates
- Refund requests

### Wallet
- Balance display
- Transaction history
- Add funds option

## Scroll Animations

The project uses GSAP ScrollTrigger for scroll-driven animations:

### Setup
```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
```

### Custom Hook
```javascript
// hooks/useScrollAnimations.jsx
- Progress bar synced to scroll
- Section reveal animations
- Parallax background effects
- Package cards stagger
- Testimonials horizontal scroll
- FAQ accordion reveals
- Feature cards scale
```

### Animation Types
- `toggleActions: 'play none none reverse'` - Bidirectional
- `scrub: 1` - Smooth scroll-linked
- `stagger` - Sequential delays
- `markers: true` - Debug (development)

## Responsive Design

Breakpoints used:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large: > 1280px

Grid system:
- `grid-cols-1` - Mobile
- `md:grid-cols-2` - Tablet
- `lg:grid-cols-3` - Desktop
- `xl:grid-cols-4` - Large

## Color Scheme

### Primary Colors
- `#FF00C8` - Pink/Magenta (main brand)
- `#00F5D4` - Cyan/teal (accent)
- `#A6FF00` - Lime green (highlight)

### Neutrals
- `#020A1B` - Dark/navy (text)
- `#64748B` - Slate (secondary text)
- `#FAFAFA` - Off-white (backgrounds)

### Gradients
- Hero: Linear gradient backgrounds
- Cards: Gradient borders/overlays
- Buttons: Gradient fills

### Platform Colors
- TikTok: `#FF00C8` to `#7E22CE`
- Instagram: `#00F5D4` to `#405DE6`
- YouTube: `#A6FF00` to `#22C55E`

## API & Services

### Service Pricing (Example)
```javascript
const SERVICES = {
  tiktok: [
    { id: 'followers', price: 2.50 },
    { id: 'likes', price: 0.25 },
    { id: 'views', price: 0.03 },
    { id: 'comments', price: 3.50 },
    { id: 'shares', price: 4.20 }
  ],
  // Instagram, YouTube...
};
```

### Quantity Presets
```javascript
const QUANTITIES = [100, 500, 1000, 2500, 5000, 10000];
```

## Deployment

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Build Output
Production files are built to the `dist` directory:
- `index.html`
- `assets/index-*.css`
- `assets/index-*.js`

## Environment Variables

Create `.env` in root:
```
VITE_API_URL=https://api.tikytop.com
VITE_APP_NAME=TikyTop
```

Variables must be prefixed with `VITE_` for client exposure.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `npm run dev`
5. Build with `npm run build`
6. Commit and push
7. Open a Pull Request

### Code Style
- Use functional components with hooks
- Follow ESLint rules
- Use meaningful variable names
- Comment complex logic

## License

MIT License - See LICENSE file for details.

## Support

- GitHub Issues: Report bugs
- Email: support@tikytop.com
- Contact: Via website contact form

---

Built with ❤️ using React + Vite + GSAP