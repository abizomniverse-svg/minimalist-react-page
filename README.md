# TikyTop - Social Media Growth Platform

<div align="center">

![TikyTop Banner](https://img.shields.io/badge/TikyTop-Social%20Media%20Growth-FF00C8?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0.4-646CFF?style=for-the-badge&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-4.2.2-38B2AC?style=for-the-badge&logo=tailwind-css)

**A modern, high-conversion landing page and order management system for social media growth services.**

[Features](#features) • [Quick Start](#getting-started) • [Documentation](./docs/) • [API](#api--services) • [Contributing](#contributing)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Key Metrics](#key-metrics)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Component Hierarchy](#component-hierarchy)
- [Route Configuration](#route-configuration)
- [State Management](#state-management)
- [Data Flow](#data-flow)
- [Quick Order Flow](#quick-order-flow)
- [Authentication System](#authentication-system)
- [Dashboard Features](#dashboard-features)
- [Order Flow](#order-flow)
- [Color Scheme](#color-scheme)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

TikyTop is a comprehensive social media growth platform designed to help creators and businesses amplify their presence on TikTok, Instagram, and YouTube. The platform provides real followers, likes, views, and engagement from authentic, active accounts.

### Key Metrics

| Metric | Value | Description |
|--------|-------|-------------|
| Orders Delivered | 2M+ | Total successful orders |
| Success Rate | 99.9% | Order completion rate |
| User Rating | 4.9/5 | Average user satisfaction |
| Refill Guarantee | 30 Days | Money-back guarantee |

---

## Features

### Landing Page Components

| Section | Description | Key Functionality |
|---------|-------------|-------------------|
| **HeroSection** | Main hero with platform selection | Platform icons, service selector, quantity picker, CTA button |
| **TrendingPackage** | Elite growth packages display | Platform cards with SVG icons, hover effects, navigation to dashboard |
| **TestimonialSection** | User testimonials carousel | Infinite scroll, pause on hover, platform icons, gradient overlays |
| **FaqSection** | FAQ accordion | Expandable questions, smooth animations |
| **Footer** | Site footer | Links, social media, contact info |

### Core Features

- **Quick Order System**: Platform selection, service selection, quantity presets, real-time price calculation
- **Multi-Step Order Flow**: Package selection, account verification, post selection, checkout, confirmation
- **User Dashboard**: Order overview, active orders, completed orders, wallet management
- **Authentication**: Email/password login, demo login, session management, protected routes
- **Responsive Design**: Mobile-first approach, multiple breakpoints, adaptive layouts

---

## Tech Stack

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              TECHNOLOGY STACK                                │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│                     │     │                     │     │                     │
│     FRONTEND        │     │      STYLING        │     │    ANIMATION        │
│                     │     │                     │     │                     │
│  ┌───────────────┐  │     │  ┌───────────────┐  │     │  ┌───────────────┐  │
│  │  React 19.2.4 │  │     │  │ Tailwind CSS │  │     │  │   GSAP 3.15   │  │
│  │  React Router │  │     │  │    4.2.2     │  │     │  │ Framer Motion │  │
│  │     7.14.1    │  │     │  │              │  │     │  │   12.38.0     │  │
│  └───────────────┘  │     │  └───────────────┘  │     │  └───────────────┘  │
│                     │     │                     │     │                     │
│  ┌───────────────┐  │     │  ┌───────────────┐  │     │  ┌───────────────┐  │
│  │  Vite 8.0.4  │  │     │  │    CSS 3      │  │     │  │   CSS Animations│ │
│  │  ESBuild     │  │     │  │              │  │     │  │                │  │
│  │  Rollup      │  │     │  │              │  │     │  │                │  │
│  └───────────────┘  │     │  └───────────────┘  │     │  └───────────────┘  │
│                     │     │                     │     │                     │
└─────────────────────┘     └─────────────────────┘     └─────────────────────┘

┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│                     │     │                     │     │                     │
│    DEVELOPMENT      │     │    DEPLOYMENT       │     │   QUALITY          │
│                     │     │                     │     │                     │
│  ┌───────────────┐  │     │  ┌───────────────┐  │     │  ┌───────────────┐  │
│  │  ESLint 9.39  │  │     │  │    Vercel     │  │     │  │  Pre-commit   │  │
│  │  Prettier    │  │     │  │    Netlify   │  │     │  │   Hooks      │  │
│  │  Git         │  │     │  │    Static    │  │     │  │              │  │
│  └───────────────┘  │     │  └───────────────┘  │     │  └───────────────┘  │
│                     │     │                     │     │                     │
└─────────────────────┘     └─────────────────────┘     └─────────────────────┘
```

---

## Getting Started

### Prerequisites

| Requirement | Version | Description |
|------------|---------|-------------|
| Node.js | v16+ | JavaScript runtime |
| npm | v7+ | Package manager |
| Git | Latest | Version control |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/abizomniverse-svg/minimalist-react-page.git

# 2. Navigate to project
cd TikyTop-Repo

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open in browser
# http://localhost:5001
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
TikyTop-Repo/
│
├── index.html                    # Vite entry HTML
├── package.json                  # Dependencies & scripts
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint rules
│
├── docs/                         # Documentation
│   ├── FILE_STRUCTURE.md        # File structure guide
│   └── DATA_FLOW.md             # Data flow documentation
│
├── src/
│   ├── main.jsx                 # React DOM entry point
│   ├── App.jsx                  # Root component
│   ├── index.css                # Global styles
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   └── Button.jsx       # Reusable button
│   │   ├── layout/
│   │   │   └── Navbar.jsx       # Navigation header
│   │   └── AuthGuard.jsx        # Route protection
│   │
│   ├── pages/
│   │   ├── Landing/
│   │   │   ├── LandingPage.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── TrendingPackage.jsx
│   │   │   ├── TestimonialSection.jsx
│   │   │   ├── FaqSection.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── PremiumFeatures.jsx
│   │   │   ├── Spotlight.jsx
│   │   │   ├── WhyTikytop.jsx
│   │   │   ├── OrderStepsSection.jsx
│   │   │   ├── HowItWorksSection.jsx
│   │   │   ├── TargetedAudience.jsx
│   │   │   └── AnalyticsSection.jsx
│   │   │
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── Order/
│   │   │   ├── OrderPage.jsx
│   │   │   ├── data/
│   │   │   │   └── servicesData.js
│   │   │   └── components/
│   │   │       ├── OrderProgress.jsx
│   │   │       ├── StepSelectPackage.jsx
│   │   │       ├── StepFindAccount.jsx
│   │   │       ├── StepSelectPosts.jsx
│   │   │       ├── StepCheckout.jsx
│   │   │       └── StepSuccess.jsx
│   │   │
│   │   ├── Dashboard.jsx
│   │   └── Legal/
│   │       ├── PrivacyPolicy.jsx
│   │       └── TermsOfService.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx        # Route definitions
│   │
│   ├── utils/
│   │   ├── auth.js              # Authentication utilities
│   │   ├── constants.js         # App constants
│   │   └── dashboardStore.js    # Dashboard state
│   │
│   ├── hooks/
│   │   └── useScrollAnimations.jsx
│   │
│   └── assets/
│       └── icon/
│           ├── icons8-tiktok-50.svg
│           ├── icons8-instagram-50.svg
│           └── icons8-youtube-50.svg
│
└── public/
    ├── favicon.svg
    └── icons.svg
```

---

## Architecture

### Application Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            APPLICATION ARCHITECTURE                           │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                              BROWSER                                         │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                        index.html                                     │   │
│  │                           │                                           │   │
│  │                           ▼                                           │   │
│  │  ┌───────────────────────────────────────────────────────────────┐  │   │
│  │  │                        main.jsx                               │  │   │
│  │  │                    (React Entry Point)                        │  │   │
│  │  └───────────────────────────┬────────────────────────────────────┘  │   │
│  │                              │                                        │   │
│  │                              ▼                                        │   │
│  │  ┌───────────────────────────────────────────────────────────────┐  │   │
│  │  │                         App.jsx                              │  │   │
│  │  │                      (Root Component)                         │  │   │
│  │  └───────────────────────────┬────────────────────────────────────┘  │   │
│  │                              │                                        │   │
│  │                              ▼                                        │   │
│  │  ┌───────────────────────────────────────────────────────────────┐  │   │
│  │  │                       AppRoutes.jsx                           │  │   │
│  │  │                    (Router Configuration)                     │  │   │
│  │  └───────────────────────┬───────────────────────────────────────┘  │   │
│  │                          │                                           │   │
│  │     ┌────────────────────┼────────────────────┐                     │   │
│  │     │                    │                    │                     │   │
│  │     ▼                    ▼                    ▼                     │   │
│  │  ┌──────────┐     ┌──────────┐         ┌──────────┐              │   │
│  │  │ Landing  │     │   Auth   │         │ Protected │              │   │
│  │  │  Page    │     │  Pages   │         │  Routes   │              │   │
│  │  │   (/)    │     │          │         │          │              │   │
│  │  └──────────┘     └──────────┘         └────┬─────┘              │   │
│  │                                           │                      │   │
│  │                                           ▼                      │   │
│  │                                    ┌──────────────┐              │   │
│  │                                    │  Dashboard   │              │   │
│  │                                    │     or      │              │   │
│  │                                    │  OrderPage  │              │   │
│  │                                    └──────────────┘              │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Component Hierarchy

```
App
└── AppRoutes
    ├── LandingPage
    │   ├── Navbar
    │   ├── HeroSection
    │   │   └── [Platform Icons (SVG)]
    │   ├── TrendingPackage
    │   │   └── [Platform Icons (SVG)]
    │   ├── TestimonialSection
    │   │   └── TestimonialCard × 24 (infinite)
    │   ├── FaqSection
    │   │   └── FaqItem × n
    │   ├── ServicesSection
    │   ├── PremiumFeatures
    │   ├── WhyTikytop
    │   ├── TargetedAudience
    │   ├── Spotlight
    │   └── Footer
    │
    ├── Login
    └── Register
    │
    └── AuthGuard (Protected)
        ├── Dashboard
        │   ├── Navbar
        │   └── Footer
        │
        └── OrderPage
            ├── Navbar
            ├── OrderProgress
            ├── StepSelectPackage
            ├── StepFindAccount
            ├── StepSelectPosts (conditional)
            ├── StepCheckout
            ├── StepSuccess
            └── Footer
```

---

## Route Configuration

| Path | Component | Auth Required | Description |
|------|-----------|---------------|-------------|
| `/` | LandingPage | No | Main landing page |
| `/login` | Login | No | User login |
| `/register` | Register | No | User registration |
| `/dashboard` | Dashboard | Yes | User dashboard |
| `/order` | OrderPage | Yes | Order wizard |
| `/order/:serviceType` | OrderPage | Yes | Pre-filled order |
| `/privacy-policy` | PrivacyPolicy | No | Privacy policy |
| `/terms-of-service` | TermsOfService | No | Terms of service |

---

## State Management

### State Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           STATE MANAGEMENT                                  │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  GLOBAL STATE (sessionStorage)                                               │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  Key: "tikytop_demo_session"                                           │  │
│  │  ┌─────────────────────────────────────────────────────────────────┐ │  │
│  │  │  {                                                              │ │  │
│  │  │    user: { name, email, avatar },                               │ │  │
│  │  │    createdAt: timestamp                                         │ │  │
│  │  │  }                                                              │ │  │
│  │  └─────────────────────────────────────────────────────────────────┘ │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  COMPONENT STATE (useState)                                                   │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                                                                       │  │
│  │  AppRoutes                         HeroSection                       │  │
│  │  ┌──────────────────┐              ┌──────────────────┐              │  │
│  │  │ session         │              │ selectedPlatform │              │  │
│  │  │ isLoading       │              │ selectedService  │              │  │
│  │  └──────────────────┘              │ quantity         │              │  │
│  │                                   └──────────────────┘              │  │
│  │                                                                       │  │
│  │  TestimonialSection               OrderPage                         │  │
│  │  ┌──────────────────┐              ┌──────────────────┐              │  │
│  │  │ offset           │              │ currentStepIndex │              │  │
│  │  │ isPaused         │              │ orderData        │              │  │
│  │  └──────────────────┘              └──────────────────┘              │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Data Flow

### Landing Page Data Flow

```
User Visits Landing Page
         │
         ▼
┌───────────────────────────────────────────────────────────────────��─────────┐
│                           HERO SECTION                                       │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                                                                       │  │
│  │   Platform Selection          Service Selection      Quantity        │  │
│  │   ┌─────┐ ┌─────┐ ┌─────┐    ┌─────────────────┐    ┌────┬────┬────┐ │  │
│  │   │ 🎵  │ │ 📸  │ │ ▶️  │    │ Followers       │    │500 │ 1K │ 2K │ │  │
│  │   │TTOK │ │ IG  │ │ YT  │    │ Likes           │    │ 5K │    │    │ │  │
│  │   └─────┘ └─────┘ └─────┘    │ Views           │    └────┴────┴────┘ │  │
│  │                              │ Comments        │                    │  │
│  │                              └─────────────────┘                       │  │
│  │                                                                       │  │
│  │   [ Get Started ] ───────▶ navigate('/dashboard')                   │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        ELITE PACKAGES SECTION                                │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                                                                       │  │
│  │   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │  │
│  │   │   TikTok    │  │  Instagram   │  │   YouTube    │               │  │
│  │   │     🎵      │  │      📸      │  │      ▶️      │               │  │
│  │   │             │  │              │  │              │               │  │
│  │   │  Growth     │  │   Growth     │  │   Growth     │               │  │
│  │   │  Services   │  │   Services  │  │   Services   │               │  │
│  │   │             │  │              │  │              │               │  │
│  │   │  [Get       │  │  [Get       │  │  [Get        │               │  │
│  │   │   Started]  │  │   Started]  │  │   Started]  │               │  │
│  │   └──────────────┘  └──────────────┘  └──────────────┘               │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Testimonials Infinite Scroll

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      TESTIMONIALS INFINITE SCROLL                            │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  INITIALIZATION                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  TESTIMONIALS (8 items) × 3 = 24 cards                               │  │
│  │  ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐                     │  │
│  │  │ T │ │ T │ │ T │ │ T │ │ T │ │ T │ │ T │ │ T │ ... (24 total)      │  │
│  │  └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘                     │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                    │                                         │
│                                    ▼                                         │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  useEffect Animation Loop                                              │  │
│  │  ┌─────────────────────────────────────────────────────────────────┐  │  │
│  │  │  setInterval every 30ms:                                        │  │  │
│  │  │    offset += 1                                                  │  │  │
│  │  │    CSS: transform: translateX(-${offset}px)                    │  │  │
│  │  └─────────────────────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                    │                                         │
│                                    ▼                                         │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  USER INTERACTION                                                      │  │
│  │  ┌─────────────────────────────────────────────────────────────────┐  │  │
│  │  │  onMouseEnter  ────────▶  isPaused = true  ────────▶  STOP     │  │  │
│  │  │  onMouseLeave  ────────▶  isPaused = false  ──────▶  RESUME   │  │  │
│  │  └─────────────────────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Quick Order Flow

### Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            QUICK ORDER FLOW                                   │
└─────────────────────────────────────────────────────────────────────────────┘

    ┌─────────────┐
    │   User      │
    │   Lands on  │
    │   Homepage  │
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │  Selects    │
    │  Platform   │ ◀── TikTok / Instagram / YouTube
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │  Selects    │
    │  Service    │ ◀── Followers / Likes / Views / Comments
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │  Enters     │
    │  Profile URL│ ◀── @username
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │  Selects    │
    │  Quantity   │ ◀── 500 / 1K / 2.5K / 5K
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │    Clicks   │
    │  "Get       │     ┌─────────────┐
    │   Started"  │ ──▶ │   Check     │
    └─────────────┘     │  Session    │
                        └──────┬──────┘
                               │
                    ┌──────────┴──────────┐
                    │                     │
                    ▼                     ▼
              ┌──────────┐          ┌──────────┐
              │  NOT     │          │   IS    │
              │  LOGGED  │          │  LOGGED │
              │   IN     │          │   IN    │
              └────┬─────┘          └────┬─────┘
                   │                    │
                   ▼                    ▼
            ┌─────────────┐      ┌─────────────┐
            │ Redirect to │      │   Navigate  │
            │  /login     │      │ /dashboard  │
            └──────┬─────┘      └─────────────┘
                   │
                   ▼
            ┌─────────────┐
            │  User Logs  │
            │    In       │
            └──────┬──────┘
                   │
                   ▼
            ┌─────────────┐
            │ Redirect to │
            │ /dashboard  │
            └─────────────┘
```

---

## Authentication System

### Session Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         AUTHENTICATION FLOW                                   │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  1. APP LOAD                                                                │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                                                                       │  │
│  │   AppRoutes.jsx                                                       │  │
│  │   ┌─────────────────────────────────────────────────────────────┐   │  │
│  │   │  useEffect(() => {                                             │   │  │
│  │   │    const sessionData = getSession();                          │   │  │
│  │   │    setSession(sessionData);                                   │   │  │
│  │   │    setIsLoading(false);                                        │   │  │
│  │   │  }, []);                                                       │   │  │
│  │   └─────────────────────────────────────────────────────────────┘   │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  2. SESSION CHECK                                                           │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                                                                       │  │
│  │   AuthGuard.jsx                                                        │  │
│  │   ┌─────────────────────────────────────────────────────────────┐   │  │
│  │   │  if (!isAuthenticated()) {                                    │   │  │
│  │   │    return <Navigate to="/login" state={{ from }} />;          │   │  │
│  │   │  }                                                             │   │  │
│  │   │  return children;                                              │   │  │
│  │   └─────────────────────────────────────────────────────────────┘   │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  3. LOGIN PROCESS                                                           │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                                                                       │  │
│  │   Login.jsx                                                            │  │
│  │   ┌─────────────────────────────────────────────────────────────┐   │  │
│  │   │  const handleLogin = () => {                               │   │  │
│  │   │    setSession({ name, email, avatar });                   │   │  │
│  │   │    navigate(from || '/dashboard');                        │   │  │
│  │   │  };                                                         │   │  │
│  │   └─────────────────────────────────────────────────────────────┘   │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Session Storage Structure

```javascript
// Key: 'tikytop_demo_session'
{
  user: {
    name: "Demo User",
    email: "demo@tikytop.com",
    avatar: "https://i.pravatar.cc/150?u=demo"
  },
  createdAt: 1714000000000
}
```

---

## Dashboard Features

### Dashboard Overview

| Tab | Features |
|-----|----------|
| **Overview** | Stats cards, recent orders, quick actions |
| **New Order** | Full order wizard with platform/service selection |
| **Active Orders** | Order list with status, progress, actions |
| **Completed** | Order history with dates |
| **Wallet** | Balance, transactions, add funds |
| **Settings** | Profile, notifications, preferences |

---

## Order Flow

### Multi-Step Order Process

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         ORDER FLOW STEPS                                    │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│ PACKAGE │───▶│ ACCOUNT │───▶│  POSTS  │───▶│CHECKOUT │───▶│SUCCESS │
│         │    │         │    │ (optional)│    │         │    │         │
└─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘
    │              │              │               │               │
    ▼              ▼              ▼               ▼               ▼
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│ Select  │    │  Enter  │    │ Select  │    │  Enter  │    │  Order  │
│ package │    │ profile │    │  posts  │    │ billing │    │confirmed│
│ & amount│    │   URL   │    │         │    │ details │    │         │
└─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘

Step Details:
────────────────────────────────────────────────────────────

Step 1: Package Selection
├── Select platform (TikTok/Instagram/YouTube)
├── Choose package tier (Basic/Standard/Premium/Enterprise)
└── View pricing and delivery time

Step 2: Account Verification  
├── Enter profile URL or username
└── System validates account exists

Step 3: Post Selection (if applicable)
├── Select specific posts to boost
└── Or skip for general growth

Step 4: Checkout
├── Review order summary
├── Enter payment information
└── Apply promo codes

Step 5: Confirmation
├── Order ID generated
├── Estimated delivery time
└── Confirmation email sent
```

---

## Color Scheme

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Pink | `#FF00C8` | Main brand, CTAs, highlights |
| Accent Cyan | `#00F5D4` | Secondary actions, gradients |
| Highlight Lime | `#A6FF00` | Success states, stars |
| Dark Navy | `#020A1B` | Primary text |
| Slate | `#64748B` | Secondary text |
| Off White | `#FAFAFA` | Backgrounds |

### Platform Colors

| Platform | Primary | Secondary | Gradient |
|----------|---------|-----------|----------|
| TikTok | `#FF00C8` | `#7E22CE` | `linear-gradient(135deg, #FF00C8 0%, #7E22CE 100%)` |
| Instagram | `#833AB4` | `#FD1D1D` | `linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)` |
| YouTube | `#FF0000` | `#CC0000` | `linear-gradient(135deg, #FF0000 0%, #CC0000 100%)` |

### Utility Classes

```css
.bg-gradient-primary {
  background: linear-gradient(135deg, #FF00C8 0%, #00F5D4 100%);
}

.text-gradient {
  background: linear-gradient(135deg, #FF00C8 0%, #00F5D4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 5001 |
| `npm run build` | Build production bundle to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## Deployment

### Vercel Deployment

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Or connect GitHub for auto-deploy
```

### Netlify Deployment

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Manual Deployment

```bash
# Build
npm run build

# Deploy dist/ folder to any static hosting
```

---

## Documentation

For detailed documentation, see the following files in the `/docs` directory:

| File | Description |
|------|-------------|
| [FILE_STRUCTURE.md](./docs/FILE_STRUCTURE.md) | Complete file structure with descriptions |
| [DATA_FLOW.md](./docs/DATA_FLOW.md) | Data flow diagrams and explanations |

---

## Contributing

### Development Workflow

```bash
# 1. Fork and clone
git clone https://github.com/abizomniverse-svg/minimalist-react-page.git

# 2. Create feature branch
git checkout -b feature/your-feature-name

# 3. Make changes
# ... edit code ...

# 4. Run lint
npm run lint

# 5. Build test
npm run build

# 6. Commit and push
git add .
git commit -m "Add your feature"
git push origin feature/your-feature-name

# 7. Open Pull Request
```

### Code Standards

- Use functional components with React Hooks
- Follow ESLint rules
- Use meaningful variable names
- Add comments for complex logic
- Test on multiple screen sizes

---

## License

MIT License - See LICENSE file for details.

---

<div align="center">

**Built with ❤️ using React + Vite + Tailwind + GSAP**

© 2024 TikyTop. All rights reserved.

</div>