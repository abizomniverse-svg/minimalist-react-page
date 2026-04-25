# TikyTop File Structure Documentation

## Overview

This document provides a comprehensive overview of the TikyTop project file structure, explaining the purpose of each directory and file, how they relate to each other, and how they contribute to the overall application architecture.

```
E:\TikyTop-Repo\
├── index.html                    # Entry HTML file for Vite
├── package.json                  # Project dependencies and scripts
├── vite.config.js                # Vite build configuration
├── eslint.config.js              # ESLint configuration
├── src/
│   ├── main.jsx                  # Application entry point
│   ├── App.jsx                   # Root React component
│   ├── index.css                # Global styles
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   └── Button.jsx        # Reusable button component
│   │   ├── layout/
│   │   │   └── Navbar.jsx        # Navigation bar component
│   │   └── AuthGuard.jsx         # Authentication protection wrapper
│   │
│   ├── pages/
│   │   ├── Landing/
│   │   │   ├── LandingPage.jsx   # Main landing page container
│   │   │   ├── HeroSection.jsx   # Hero section with platform selection
│   │   │   ├── TrendingPackage.jsx # Elite growth packages display
│   │   │   ├── TestimonialSection.jsx # User testimonials with infinite scroll
│   │   │   ├── ServicesSection.jsx # Services overview section
│   │   │   ├── PremiumFeatures.jsx # Premium features display
│   │   │   ├── FaqSection.jsx     # FAQ accordion section
│   │   │   ├── Footer.jsx         # Site footer
│   │   │   ├── Spotlight.jsx      # Spotlight/call-to-action section
│   │   │   ├── WhyTikytop.jsx    # Why choose TikyTop section
│   │   │   ├── OrderStepsSection.jsx # Order process steps
│   │   │   ├── HowItWorksSection.jsx # How it works section
│   │   │   ├── TargetedAudience.jsx # Target audience section
│   │   │   ├── AnalyticsSection.jsx # Analytics dashboard section
│   │   │   └── PremiumFeatures.jsx # Premium features
│   │   │
│   │   ├── Auth/
│   │   │   ├── Login.jsx         # User login page
│   │   │   └── Register.jsx      # User registration page
│   │   │
│   │   ├── Order/
│   │   │   ├── OrderPage.jsx     # Multi-step order flow
│   │   │   ├── data/
│   │   │   │   └── servicesData.js # Service configuration data
│   │   │   └── components/
│   │   │       ├── OrderProgress.jsx # Order step progress indicator
│   │   │       ├── StepSelectPackage.jsx # Package selection step
│   │   │       ├── StepFindAccount.jsx # Account input step
│   │   │       ├── StepSelectPosts.jsx # Post selection step
│   │   │       ├── StepCheckout.jsx # Payment checkout step
│   │   │       └── StepSuccess.jsx # Order success confirmation
│   │   │
│   │   ├── Dashboard.jsx         # User dashboard page
│   │   │
│   │   └── Legal/
│   │       ├── PrivacyPolicy.jsx # Privacy policy page
│   │       └── TermsOfService.jsx # Terms of service page
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx         # Route definitions and navigation
│   │
│   ├── utils/
│   │   ├── auth.js               # Authentication utilities
│   │   ├── constants.js          # Application constants
│   │   └── dashboardStore.js      # Dashboard state management
│   │
│   ├── hooks/
│   │   └── useScrollAnimations.jsx # Custom scroll animation hook
│   │
│   └── assets/
│       └── icon/
│           ├── icons8-tiktok-50.svg
│           ├── icons8-instagram-50.svg
│           ├── icons8-youtube-50.svg
│           ├── cursor.png
│           └── cursor (1).png
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
└── dist/                         # Build output directory
```

---

## Directory Breakdown

### Root Level Files

| File | Purpose | Technologies |
|------|---------|--------------|
| `index.html` | Entry HTML for Vite bundler | HTML5 |
| `package.json` | Project metadata and dependencies | npm |
| `vite.config.js` | Vite build configuration | JavaScript |
| `eslint.config.js` | Linting rules configuration | ESLint |

### `src/` Directory

The main source directory containing all React components and application logic.

#### `src/components/`

Contains reusable React components used throughout the application.

##### `src/components/ui/`

| File | Purpose | Props | Usage |
|------|---------|-------|-------|
| `Button.jsx` | Reusable button component with variants | variant, size, onClick, children | Forms, CTAs |

##### `src/components/layout/`

| File | Purpose | Children | Usage |
|------|---------|----------|-------|
| `Navbar.jsx` | Main navigation header | Logo, nav links, auth buttons | All pages |

##### `src/components/`

| File | Purpose | Dependencies | Route Protection |
|------|---------|--------------|-------------------|
| `AuthGuard.jsx` | Protects authenticated routes | `isAuthenticated()` from auth.js | /dashboard, /order |

#### `src/pages/`

Main page components grouped by feature.

##### `src/pages/Landing/`

Contains all landing page sections. Each section is a standalone component.

| File | Purpose | State | Animation |
|------|---------|-------|-----------|
| `LandingPage.jsx` | Container for all sections | - | GSAP fade-in |
| `HeroSection.jsx` | Main hero with platform selection | selectedPlatform, selectedService, quantity | - |
| `TrendingPackage.jsx` | Elite packages display | - | framer-motion hover |
| `TestimonialSection.jsx` | Infinite scroll testimonials | offset, isPaused | CSS transform scroll |
| `ServicesSection.jsx` | Services overview | - | - |
| `PremiumFeatures.jsx` | Premium features | - | - |
| `FaqSection.jsx` | FAQ accordion | - | - |
| `Footer.jsx` | Site footer | - | - |
| `Spotlight.jsx` | CTA spotlight | - | - |
| `WhyTikytop.jsx` | Why choose us | - | - |
| `OrderStepsSection.jsx` | Order process steps | - | - |
| `HowItWorksSection.jsx` | How it works | - | - |
| `TargetedAudience.jsx` | Target audience display | - | - |
| `AnalyticsSection.jsx` | Analytics section | - | - |

##### `src/pages/Auth/`

| File | Purpose | Form Fields | Navigation |
|------|---------|------------|-------------|
| `Login.jsx` | User login | email, password | → /dashboard (on success) |
| `Register.jsx` | User registration | username, email, password | → /dashboard (on success) |

##### `src/pages/Order/`

Multi-step order flow components.

| File | Purpose | Data Flow |
|------|---------|-----------|
| `OrderPage.jsx` | Order flow container | Manages step state, renders steps |
| `data/servicesData.js` | Service configuration | Platform-specific packages |

**Order Components:**

| File | Purpose | Next Step |
|------|---------|-----------|
| `StepSelectPackage.jsx` | Package selection | StepFindAccount |
| `StepFindAccount.jsx` | Profile URL input | StepSelectPosts or StepCheckout |
| `StepSelectPosts.jsx` | Post selection (optional) | StepCheckout |
| `StepCheckout.jsx` | Payment information | StepSuccess |
| `StepSuccess.jsx` | Order confirmation | - |
| `OrderProgress.jsx` | Step indicator | - |

##### `src/pages/Legal/`

| File | Purpose | Access |
|------|---------|--------|
| `PrivacyPolicy.jsx` | Privacy policy | /privacy-policy |
| `TermsOfService.jsx` | Terms of service | /terms-of-service |

#### `src/routes/`

| File | Purpose | Routes Defined |
|------|---------|----------------|
| `AppRoutes.jsx` | Route configuration | /, /login, /register, /order, /dashboard, /privacy-policy, /terms-of-service |

#### `src/utils/`

| File | Purpose | Key Functions |
|------|---------|---------------|
| `auth.js` | Session management | setSession(), getSession(), clearSession(), isAuthenticated() |
| `constants.js` | App constants | THEME, GLOBAL_CONFIG |
| `dashboardStore.js` | Dashboard state | - |

#### `src/hooks/`

| File | Purpose | Usage |
|------|---------|-------|
| `useScrollAnimations.jsx` | Scroll-triggered animations | Landing page sections |

#### `src/assets/`

Static assets used in the application.

| Path | File | Purpose |
|------|------|---------|
| `icon/` | `icons8-tiktok-50.svg` | TikTok platform icon |
| `icon/` | `icons8-instagram-50.svg` | Instagram platform icon |
| `icon/` | `icons8-youtube-50.svg` | YouTube platform icon |
| `icon/` | `cursor.png` | Custom cursor image |

---

## Component Relationship Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                          main.jsx                                │
│                    (React DOM Entry Point)                      │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                            App.jsx                               │
│                       (Root Component)                           │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         AppRoutes.jsx                            │
│                    (Router Configuration)                        │
└───────┬─────────┬─────────────┬─────────────┬─────────────┬──────┘
        │         │             │             │             │
        ▼         ▼             ▼             ▼             ▼
   ┌─────────┐ ┌────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
   │  /      │ │ /login │ │ /register│ │ /dashboard│ │ /order  │
   └────┬────┘ └────┬───┘ └────┬─────┘ └────┬─────┘ └────┬─────┘
        │           │          │            │             │
        ▼           │          ▼            │             │
┌───────────────┐   │   ┌────────────┐      │             │
│ LandingPage.jsx│   │   │  Login.jsx │      │             │
└───────┬───────┘   │   └────────────┘      │             │
        │           │                        │             │
        ▼           ▼                        ▼             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Landing Page Sections                          │
│  ┌──────────┐ ┌──────────────┐ ┌──────────────┐ ┌────────────┐ │
│  │  Hero    │ │   Trending   │ │Testimonials  │ │   FAQ      │ │
│  │ Section  │ │   Package    │ │   Section    │ │  Section   │ │
│  └──────────┘ └──────────────┘ └──────────────┘ └────────────┘ │
└─────────────────────────────────────────────────────────────────┘
        │
        │ (Navigate to /dashboard or /order)
        ▼
┌─────────────────────────────────────────────────────────────────┐
│                       AuthGuard.jsx                               │
│                    (Session Check)                                │
│                         │                                        │
│              ┌──────────┴──────────┐                            │
│              ▼                      ▼                            │
│      ┌────────────┐         ┌────────────┐                      │
│      │ Dashboard  │         │ OrderPage  │                      │
│      │   .jsx     │         │   .jsx     │                      │
│      └────────────┘         └─────┬──────┘                      │
│                                    │                              │
│                                    ▼                              │
│                    ┌────────────────────────────────┐            │
│                    │       Order Steps Flow          │            │
│  ┌──────────┐ ┌────┴─────┐ ┌─────────┐ ┌────────┐ ┌─┴─────────┐ │
│  │ Package  │ │ Account  │ │  Posts  │ │Checkout│ │  Success  │ │
│  └──────────┘ └──────────┘ └─────────┘ └────────┘ └──────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## File Usage Matrix

| File | Imports | Exports | Dependencies |
|------|---------|---------|--------------|
| `main.jsx` | App, index.css | - | React, ReactDOM |
| `App.jsx` | AppRoutes | App | React |
| `AppRoutes.jsx` | LandingPage, Login, Register, Dashboard, OrderPage, AuthGuard | AppRoutes | react-router-dom |
| `AuthGuard.jsx` | Navigate, useLocation, isAuthenticated | default (AuthGuard) | react-router-dom |
| `LandingPage.jsx` | All landing sections, Navbar, Footer | default (LandingPage) | gsap |
| `HeroSection.jsx` | Platform SVG icons | default (HeroSection) | react-router-dom |
| `OrderPage.jsx` | All step components, Navbar, Footer | default (OrderPage) | react-router-dom |
| `Dashboard.jsx` | Navbar, Footer | default (Dashboard) | react-router-dom |
| `Login.jsx` | setSession, navigate | default (Login) | react-router-dom |
| `Register.jsx` | setSession, navigate | default (Register) | react-router-dom |
| `auth.js` | - | setSession, getSession, clearSession, isAuthenticated | sessionStorage |

---

## State Management Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    State Management Architecture                 │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────┐     ┌──────────────────┐     ┌──────────────┐
│   Session State  │────▶│   Auth State     │────▶│ Route Guard  │
│   (sessionStorage)│     │  (isAuthenticated)│     │ (AuthGuard)  │
└──────────────────┘     └──────────────────┘     └──────────────┘
         │                                                 │
         ▼                                                 ▼
┌──────────────────┐                            ┌──────────────┐
│  Login/Register  │                            │  Protected   │
│    Pages         │                            │    Routes    │
└──────────────────┘                            └──────────────┘
         │                                                 │
         ▼                                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Component State (useState)                  │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────────────────┐ │
│  │ HeroSection │  │ Testimonials │  │      OrderPage          │ │
│  │ - platform  │  │ - offset     │  │ - currentStepIndex      │ │
│  │ - service   │  │ - isPaused   │  │ - orderData             │ │
│  │ - quantity  │  │              │  │                        │ │
│  └─────────────┘  └──────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## Import Dependencies Graph

```
App.jsx
└── AppRoutes.jsx
    ├── LandingPage.jsx
    │   ├── Navbar.jsx
    │   ├── HeroSection.jsx
    │   ├── TrendingPackage.jsx
    │   ├── TestimonialSection.jsx
    │   ├── FaqSection.jsx
    │   └── Footer.jsx
    │
    ├── Login.jsx
    │   └── auth.js (setSession)
    │
    ├── Register.jsx
    │   └── auth.js (setSession)
    │
    ├── Dashboard.jsx
    │   ├── Navbar.jsx
    │   └── Footer.jsx
    │
    ├── OrderPage.jsx
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── OrderProgress.jsx
    │   ├── StepSelectPackage.jsx
    │   ├── StepFindAccount.jsx
    │   ├── StepSelectPosts.jsx
    │   ├── StepCheckout.jsx
    │   ├── StepSuccess.jsx
    │   └── servicesData.js
    │
    ├── AuthGuard.jsx
    │   └── auth.js (isAuthenticated)
    │
    └── PrivacyPolicy.jsx / TermsOfService.jsx
```

---

## Build Output Structure

After running `npm run build`, the `dist/` folder is generated:

```
dist/
├── index.html              # Processed entry HTML
└── assets/
    ├── index-*.js          # Bundled JavaScript
    ├── index-*.css        # Bundled CSS
    └── icons8-*.svg       # Copied SVG assets
```

---

## Technology Stack Summary

| Category | Technology | Version |
|----------|------------|---------|
| Framework | React | 19.2.4 |
| Router | React Router | 7.14.1 |
| Build Tool | Vite | 8.0.4 |
| Styling | Tailwind CSS | 4.2.2 |
| Animation | GSAP + Framer Motion | 3.15.0 / 12.38.0 |
| Linting | ESLint | 9.39.4 |

---

## Key Files Summary

| Category | Most Important File | Purpose |
|----------|---------------------|---------|
| Entry | `main.jsx` | React app initialization |
| Routing | `AppRoutes.jsx` | All route definitions |
| Auth | `auth.js` | Session management |
| Landing | `LandingPage.jsx` | Main landing page container |
| Order | `OrderPage.jsx` | Multi-step order flow |
| Dashboard | `Dashboard.jsx` | User dashboard |
| Protection | `AuthGuard.jsx` | Route protection |

---

## File Naming Conventions

| Convention | Example | Usage |
|------------|---------|-------|
| PascalCase | `LandingPage.jsx` | React components |
| camelCase | `useScrollAnimations.jsx` | Custom hooks |
| kebab-case | `servicesData.js` | Data/util files |
| camelCase | `AppRoutes.jsx` | Route files |

---

## Conclusion

This file structure follows a modular architecture pattern with clear separation of concerns:

- **Components** are organized by type (ui, layout, pages)
- **Pages** are grouped by feature (Landing, Auth, Order, Dashboard)
- **Utilities** provide shared functionality (auth, constants)
- **Routes** are centralized in one file
- **Assets** are organized in the assets directory

This structure makes the codebase maintainable, scalable, and easy to navigate for new developers.