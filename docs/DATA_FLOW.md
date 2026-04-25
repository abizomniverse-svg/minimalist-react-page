# TikyTop Data Flow Documentation

## Overview

This document provides a comprehensive explanation of how data flows through the TikyTop application, from user interactions to state management, API simulations, and component communication.

---

## High-Level Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           USER INTERFACE LAYER                               │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────────────┐│
│  │   Landing    │ │   Login /    │ │  Dashboard   │ │   Order Flow          ││
│  │   Page      │ │   Register   │ │   Page      │ │   Multi-Step Form     ││
│  └──────┬───────┘ └──────┬───────┘ └──────┬───────┘ └──────────┬───────────┘│
└─────────┼────────────────┼────────────────┼────────────────────┼───────────┘
          │                │                │                    │
          ▼                ▼                ▼                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         STATE MANAGEMENT LAYER                               │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │                     React Component State (useState)                     ││
│  │  ┌─────────┐  ┌──────────────┐  ┌────────────┐  ┌───────────────────┐││
│  │  │ Hero    │  │ Testimonials  │  │  Order     │  │   Session State    │││
│  │  │ State   │  │ State         │  │  State     │  │   (sessionStorage) │││
│  │  └─────────┘  └──────────────┘  └────────────┘  └───────────────────┘││
│  └─────────────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────┘
          │                │                │                    │
          ▼                ▼                ▼                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           UTILITY LAYER                                      │
│  ┌──────────────────┐  ┌──────────────────┐  ┌────────────────────────────┐│
│  │   auth.js        │  │  constants.js    │  │    servicesData.js         ││
│  │  Session Helper  │  │  App Constants   │  │    Service Configuration    ││
│  └──────────────────┘  └──────────────────┘  └────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## User Session Data Flow

### Authentication Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         USER AUTHENTICATION FLOW                              │
└─────────────────────────────────────────────────────────────────────────────┘

    ┌─────────────┐
    │   User      │
    │   Opens     │
    │   App       │
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │  AppRoutes   │
    │  Checks      │
    │  Session     │
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐     ┌─────────────┐
    │  Session    │────▶│  getSession │
    │  Exists?    │     │  Called     │
    └──────┬──────┘     └─────────────┘
           │
     ┌─────┴─────┐
     │           │
     ▼           ▼
┌─────────┐  ┌─────────┐
│   YES   │  │   NO    │
└────┬────┘  └────┬────┘
     │             │
     ▼             ▼
┌─────────────────────────┐     ┌─────────────────────────────────────────┐
│  Load Protected Routes  │     │      Show Login/Register Pages          │
│  - /dashboard           │     │                                         │
│  - /order               │     │  ┌───────────┐    ┌───────────────┐     │
│                         │     │  │   Login   │ or │   Register    │     │
│  ┌──────────────┐      │     │  └─────┬─────┘    └───────┬───────┘     │
│  │  Dashboard   │      │     │        │                  │             │
│  │  or Order    │      │     │        ▼                  ▼             │
│  │  Pages      │      │     │  ┌───────────────┐   ┌───────────────┐   │
│  └──────────────┘      │     │  │ User Enters  │   │ User Enters   │   │
│                        │     │  │ Credentials  │   │ Credentials   │   │
│                        │     │  └───────┬───────┘   └───────┬───────┘   │
└────────────────────────┘     │          │                  │             │
                               │          ▼                  ▼             │
                               │  ┌─────────────────────────────────────┐  │
                               │  │     setSession() Called             │  │
                               │  │     (Stores in sessionStorage)     │  │
                               │  └──────────────────┬──────────────────┘  │
                               │                     │                     │
                               │                     ▼                     │
                               │            ┌───────────────┐            │
                               │            │  Navigate to   │            │
                               │            │  /dashboard    │            │
                               │            └───────────────┘            │
                               └─────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────────┐
│                            SESSION DATA STRUCTURE                             │
└─────────────────────────────────────────────────────────────────────────────┘

sessionStorage Key: "tikytop_demo_session"

{
  "user": {
    "name": "Demo User",
    "email": "demo@tikytop.com",
    "avatar": "https://i.pravatar.cc/150?u=demo"
  },
  "createdAt": 1714000000000  // Unix timestamp
}

```

### Session Flow Table

| Step | Action | Function Called | Data Stored | Destination |
|------|--------|------------------|-------------|--------------|
| 1 | User opens app | `getSession()` | - | Check session |
| 2 | User logs in | `setSession(user)` | `{user, createdAt}` | sessionStorage |
| 3 | User accesses protected route | `isAuthenticated()` | - | Boolean result |
| 4 | User logs out | `clearSession()` | - | sessionStorage cleared |

---

## Landing Page Data Flow

### Hero Section Data Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         HERO SECTION DATA FLOW                               │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────┐     ┌─────────────────┐     ┌─────────────────────────────┐
│   User Views    │────▶│   HeroSection   │────▶│  State Variables           │
│   Landing Page  │     │   Component     │     │  ┌────────��────────────┐   │
└─────────────────┘     └────────┬────────┘     │  │ selectedPlatform    │   │
                                 │               │  │ (default: 'tiktok') │   │
                                 │               │  ├─────────────────────┤   │
                                 │               │  │ selectedService    │   │
                                 │               │  │ (default: 'Followers')│  │
                                 │               │  ├─────────────────────┤   │
                                 │               │  │ quantity            │   │
                                 │               │  │ (default: 1000)     │   │
                                 │               │  └─────────────────────┘   │
                                 │               └─────────────────────────────┘
                                 │
                    ┌────────────┼────────────┐
                    │            │            │
                    ▼            ▼            ▼
           ┌──────────────┐ ┌──────────┐ ┌──────────────┐
           │  Platform    │ │  Service │ │  Quantity    │
           │  Selection   │ │  Selection│ │  Selection   │
           └──────┬───────┘ └─────┬────┘ └──────┬───────┘
                  │               │             │
                  ▼               ▼             ▼
           ┌─────────────────────────────────────────────────┐
           │           User Clicks "Get Started"            │
           │                 handleNext()                    │
           └─────────────────────┬───────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │  navigate('/dashboard') │
                    └────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────────┐
│                         SERVICE DATA STRUCTURE                               │
└─────────────────────────────────────────────────────────────────────────────┘

SERVICES = {
  tiktok: [
    { id: 'followers', name: 'Followers' },
    { id: 'likes', name: 'Likes' },
    { id: 'views', name: 'Views' },
    { id: 'comments', name: 'Comments' }
  ],
  instagram: [
    { id: 'followers', name: 'Followers' },
    { id: 'likes', name: 'Likes' },
    { id: 'views', name: 'Views' },
    { id: 'comments', name: 'Comments' }
  ],
  youtube: [
    { id: 'subscribers', name: 'Subscribers' },
    { id: 'views', name: 'Views' },
    { id: 'likes', name: 'Likes' },
    { id: 'comments', name: 'Comments' }
  ]
}
```

### Platform Selection Flow

| Platform | ID | Default Service | Available Services |
|----------|-----|------------------|---------------------|
| TikTok | `tiktok` | Followers | Followers, Likes, Views, Comments |
| Instagram | `instagram` | Followers | Followers, Likes, Views, Comments |
| YouTube | `youtube` | Subscribers | Subscribers, Views, Likes, Comments |

---

## Testimonials Section Data Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      TESTIMONIALS INFINITE SCROLL FLOW                       │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────┐
│  Testimonials   │
│  Section Mounts │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           INITIALIZATION                                     │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  TESTIMONIALS (8 items)                                               │  │
│  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐│
│  │  │ T-1  │ │ T-2  │ │ T-3  │ ��� T-4  │ │ T-5  │ │ T-6  │ │ T-7  │ │ T-8  ││
│  │  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘│
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           DUPLICATION                                        │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  duplicated = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]     │  │
│  │  Total: 24 cards (8 × 3)                                              │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        ANIMATION LOOP (useEffect)                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  setInterval every 30ms:                                               │  │
│  │  ┌─────────────────────────────────────────────────────────────────┐ │  │
│  │  │ offset += 1                                                       │ │  │
│  │  │ if (offset >= visibleWidth) offset = 0                           │ │  │
│  │  │                                                                  │ │  │
│  │  │ transform: translateX(-${offset}px)                              │ │  │
│  │  └─────────────────────────────────────────────────────────────────┘ │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         USER INTERACTION                                      │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  onMouseEnter: setIsPaused(true)  → Animation stops                   │  │
│  │  onMouseLeave: setIsPaused(false) → Animation resumes                  │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────────┐
│                         TESTIMONIAL DATA STRUCTURE                           │
└─────────────────────────────────────────────────────────────────────────────┘

TESTIMONIALS = [
  {
    name: "Jessica Martinez",
    role: "Content Creator",
    content: "My TikTok went from 500 to 150K followers...",
    avatar: "https://i.pravatar.cc/150?u=jessica",
    rating: 5,
    platform: "TikTok",
    growth: "+149.5K"
  },
  // ... 7 more testimonials
]

```

### Testimonials Animation State Machine

| State | Condition | Action | Next State |
|-------|-----------|--------|------------|
| `scrolling` | Default | Increment offset every 30ms | `scrolling` or `paused` |
| `scrolling` | `isPaused = true` | Stop increment | `paused` |
| `paused` | `isPaused = false` | Resume increment | `scrolling` |
| `scrolling` | `offset >= visibleWidth` | Reset offset to 0 | `scrolling` |

---

## Order Flow Data Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           ORDER FLOW OVERVIEW                                │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                         ORDER STATE MANAGEMENT                               │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                         OrderPage.jsx                                 │    │
│  │                                                                      │    │
│  │  ┌─────────────────────────────────────────────────────────────┐    │    │
│  │  │                    orderData State Object                    │    │    │
│  │  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────────────┐  │    │    │
│  │  │  │ serviceType │ │  amount     │ │   profileId         │  │    │    │
│  │  │  │  (string)   │ │  (number)   │ │   (string)          │  │    │    │
│  │  │  ├──────────────┤ ├──────────────┤ ├──────────────────────┤  │    │    │
│  │  │  │serviceDetails│ │   total     │ │ selectedPosts       │  │    │    │
│  │  │  │  (object)    │ │  (number)   │ │   (array)           │  │    │    │
│  │  │  ├──────────────┤ ├──────────────┤ ├──────────────────────┤  │    │    │
│  │  │  │    billing   │ │paymentMethod │ │                      │  │    │    │
│  │  │  │  (object)    │ │  (string)    │ │                      │  │    │    │
│  │  │  └──────────────┘ └──────────────┘ └──────────────────────┘  │    │    │
│  │  └─────────────────────────────────────────────────────────────┘    │    │
│  │                                                                      │    │
│  │  ┌─────────────────────────────────────────────────────────────┐    │    │
│  │  │              currentStepIndex State                          │    │    │
│  │  │                    (number: 0-5)                             │    │    │
│  │  └─────────────────────────────────────────────────────────────┘    │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────────┐
│                           STEP SEQUENCE FLOW                                   │
└─────────────────────────────────────────────────────────────────────────────┘

    ┌─────────────────┐
    │   OrderPage     │
    │   Component     │
    │    Mounts       │
    └────────┬────────┘
             │
             ▼
    ┌─────────────────┐
    │  Step 0:        │
    │  Package        │
    │  Selection      │
    └────────┬────────┘
             │
             │ User Selects Package
             │ handleNext({ amount, total })
             ▼
    ┌─────────────────┐
    │  Step 1:        │
    │  Find Account   │
    │  (URL Input)    │
    └────────┬────────┘
             │
             │ User Submits URL
             │ handleNext({ profileId })
             ▼
    ┌─────────────────┐
    │  Step 2:        │ ◀─── (Conditional - if requiresPosts)
    │  Select Posts   │
    │  (Optional)     │
    └────────┬────────┘
             │
             │ handleNext({ selectedPosts })
             ▼
    ┌─────────────────┐
    │  Step 3:        │
    │  Checkout       │
    │  (Payment)      │
    └────────┬────────┘
             │
             │ User Confirms
             │ handleNext({ billing, paymentMethod })
             ▼
    ┌─────────────────┐
    │  Step 4:        │
    │  Success        │
    │  (Confirmation) │
    └─────────────────┘


┌─────────────────────────────────────────────────────────────────────────────┐
│                      ORDER STATE TRANSITION TABLE                            │
└─────────────────────────────────────────────────────────────────────────────┘

┌────────────────┬────────────────┬────────────────┬──────────────────────────┐
│  currentStep   │  userAction    │  newData       │  nextStep                │
├────────────────┼────────────────┼────────────────┼──────────────────────────┤
│  0 (Package)   │  Select amount │ { amount,      │  1 (Account) or 2 (Posts) │
│                │  & package     │   total }      │                          │
├────────────────┼────────────────┼────────────────┼──────────────────────────┤
│  1 (Account)   │  Enter profile │ { profileId }  │  2 (Posts) or 3          │
│                │  URL           │                │  (Checkout)               │
├────────────────┼────────────────┼────────────────┼──────────────────────────┤
│  2 (Posts)     │  Select posts  │ { selectedPosts│  3 (Checkout)            │
│                │  (optional)    │  }            │                          │
├────────────────┼────────────────┼────────────────┼──────────────────────────┤
│  3 (Checkout)  │  Enter billing  │ { billing,     │  4 (Success)             │
│                │  info          │   paymentMethod}│                          │
├────────────────┼────────────────┼────────────────┼──────────────────────────┤
│  4 (Success)   │  Order complete │  -             │  (End state)             │
└────────────────┴────────────────┴────────────────┴──────────────────────────┘
```

---

## Services Data Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        SERVICES DATA STRUCTURE                               │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                         servicesData.js                                     │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                                                                       │  │
│  │  getServiceData(serviceType)                                          │  │
│  │       │                                                               │  │
│  │       ▼                                                               │  │
│  │  ┌─────────────────────────────────────────────────────────────┐      │  │
│  │  │                    SERVICE CONFIGURATIONS                    │      │  │
│  │  │                                                                 │      │  │
│  │  │  tiktok-followers ──────▶ TikTok Followers Package           │      │  │
│  │  │  tiktok-likes    ──────▶ TikTok Likes Package                │      │  │
│  │  │  instagram-followers ▶ Instagram Followers Package           │      │  │
│  │  │  instagram-likes  ─────▶ Instagram Likes Package             │      │  │
│  │  │  youtube-subscribers ▶ YouTube Subscribers Package          │      │  │
│  │  │  youtube-views    ─────▶ YouTube Views Package               │      │  │
│  │  │                                                                 │      │  │
│  │  └─────────────────────────────────────────────────────────────┘      │  │
│  │                                                                      │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                    SERVICE DATA OBJECT STRUCTURE                             │
└─────────────────────────────────────────────────────────────────────────────┘

{
  id: "tiktok-followers",
  name: "TikTok Followers",
  description: "Real TikTok followers for your account",
  gradient: "linear-gradient(135deg, #FF00C8 0%, #7E22CE 100%)",
  color: "#FF00C8",
  requiresPosts: false,
  packages: [
    {
      id: "basic",
      name: "Basic",
      amount: 500,
      price: 2.80,
      per: "1K",
      popular: false
    },
    {
      id: "standard",
      name: "Standard",
      amount: 1000,
      price: 5.60,
      per: "1K",
      popular: true
    },
    {
      id: "premium",
      name: "Premium",
      amount: 2500,
      price: 14.00,
      per: "1K",
      popular: false
    },
    {
      id: "enterprise",
      name: "Enterprise",
      amount: 10000,
      price: 56.00,
      per: "1K",
      popular: false
    }
  ]
}
```

---

## Component Communication Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     COMPONENT COMMUNICATION PATTERNS                         │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  PATTERN 1: Parent to Child (Props)                                           │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                                                                       │  │
│  │  Parent Component                                                     │  │
│  │  ┌───────────────────────────────────────────────────────────────┐    │  │
│  │  │ const [data, setData] = useState({...})                       │    │  │
│  │  │                                                               │    │  │
│  │  │ <ChildComponent                                               │    │  │
│  │  │   data={data}                                                 │    │  │
│  │  │   onUpdate={(newData) => setData(newData)}                    │    │  │
│  │  │ />                                                            │    │  │
│  │  └───────────────────────────────────────────────────────────────┘    │  │
│  │                                                                       │  │
│  │  Child Component                                                     │  │
│  │  ┌───────────────────────────────────────────────────────────────┐    │  │
│  │  │ function ChildComponent({ data, onUpdate }) {                 │    │  │
│  │  │   return (                                                     │    │  │
│  │  │     <button onClick={() => onUpdate(newValue)}>                │    │  │
│  │  │   )                                                             │    │  │
│  │  │ }                                                               │    │  │
│  │  └───────────────────────────────────────────────────────────────┘    │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  PATTERN 2: Order Page Step Communication                                    │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                                                                       │  │
│  │  OrderPage (Parent)                                                   │  │
│  │  ┌───────────────────────────────────────────────────────────────┐    │  │
│  │  │ state: { orderData, currentStepIndex }                        │    │  │
│  │  │ handler: handleNext(newData) { ...setOrderData, setStep+1 }   │    │  │
│  │  └───────────────────────────────────────────────────────────────┘    │  │
│  │                              │                                         │  │
│  │          ┌───────────────────┼───────────────────┐                 │  │
│  │          │                   │                   │                 │  │
│  │          ▼                   ▼                   ▼                 │  │
│  │  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐             │  │
│  │  │StepSelect    │   │StepFind      │   │StepCheckout │             │  │
│  │  │Package       │   │Account       │   │             │             │  │
│  │  │              │   │              │   │              │             │  │
│  │  │ onNext={     │   │ onNext={     │   │ onNext={    │             │  │
│  │  │   handleNext │   │   handleNext │   │   handleNext│             │  │
│  │  │ }            │   │ }            │   │ }            │             │  │
│  │  └──────────────┘   └──────────────┘   └──────────────┘             │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  PATTERN 3: Route-Based Navigation                                          │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                                                                       │  │
│  │  useNavigate() Hook                                                   │  │
│  │  ┌───────────────────────────────────────────────────────────────┐    │  │
│  │  │                                                               │    │  │
│  │  │  const navigate = useNavigate()                              │    │  │
│  │  │                                                               │    │  │
│  │  │  navigate('/dashboard')           // Navigate to path        │    │  │
│  │  │  navigate('/order/tiktok-followers') // Navigate with param  │    │  │
│  │  │  navigate('/login', { state: { from: '/dashboard' } })       │    │  │
│  │  │                                                               │    │  │
│  │  └───────────────────────────────────────────────────────────────┘    │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Navigation Data Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          NAVIGATION FLOW MAP                                  │
└─────────────────────────────────────────────────────────────────────────────┘

                         ┌─────────────────┐
                         │   Landing Page  │
                         │       (/)        │
                         └────────┬────────┘
                                  │
          ┌───────────────────────┼───────────────────────┐
          │                       │                       │
          ▼                       ▼                       ▼
   ┌─────────────┐         ┌─────────────┐         ┌─────────────┐
   │   Login     │         │  Platform   │         │    Legal    │
   │ (/login)    │         │  Selection  │         │   Pages     │
   └──────┬──────┘         └──────┬──────┘         └─────────────┘
          │                       │
          ▼                       │
   ┌─────────────┐                │         ┌─────────────────┐
   │  Register   │                │         │    Dashboard    │
   │(/register)  │                │         │  (/dashboard)   │
   └──────┬──────┘                │         └────────┬────────┘
          │                       │                  │
          │                       ▼                  │
          │               ┌─────────────┐           │
          │               │   Order     │           │
          │               │   Page      │           │
          │               │(/order/:id) │           │
          │               └─────────────┘           │
          │                       │                   │
          └───────────────────────┼───────────────────┘
                                  │
                                  ▼
                           ┌─────────────┐
                           │  AuthGuard  │
                           │ (Protected) │
                           └──────┬──────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │    Order Multi-Step Flow    │
                    │                             │
                    │  Package → Account →        │
                    │  Posts(optional) →           │
                    │  Checkout → Success         │
                    └─────────────────────────────┘
```

---

## Animation Data Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      TESTIMONIALS ANIMATION FLOW                              │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                            RENDER PHASE                                      │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                                                                       │  │
│  │  return (                                                             │  │
│  │    <section onMouseEnter={handlePause} onMouseLeave={handleResume}>  │  │
│  │      <div style={{ transform: `translateX(-${offset}px)` }}>        │  │
│  │        {duplicated.map(...)}                                         │  │
│  │      </div>                                                          │  │
│  │    </section>                                                        │  │
│  │  )                                                                   │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           EFFECT PHASE                                      │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                                                                       │  │
│  │  useEffect(() => {                                                    │  │
│  │    if (isPaused) return;                                              │  │
│  │                                                                       │  │
│  │    const interval = setInterval(() => {                              │  │
│  │      setOffset(prev => {                                              │  │
│  │        const newOffset = prev + 1;                                    │  │
│  │        return newOffset >= visibleWidth ? 0 : newOffset;             │  │
│  │      });                                                              │  │
│  │    }, 30);                                                            │  │
│  │                                                                       │  │
│  │    return () => clearInterval(interval);                             │  │
│  │  }, [isPaused, visibleWidth]);                                        │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        RE-RENDER WITH NEW OFFSET                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                                                                       │  │
│  │  offset: 0 ──▶ 1 ──▶ 2 ──▶ 3 ──▶ ... ──▶ visibleWidth ──▶ 0          │  │
│  │                                                                       │  │
│  │  CSS Transform: translateX(-${offset}px)                             │  │
│  │  Example:                                                             │  │
│  │    offset = 100  ──▶  transform: translateX(-100px)                   │  │
│  │    offset = 500  ──▶  transform: translateX(-500px)                   │  │
│  │    offset = 1500 ──▶  transform: translateX(-1500px) (reset to 0)     │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## State Management Summary Table

| Component | State Variable | Type | Purpose | Update Trigger |
|-----------|----------------|------|---------|----------------|
| AppRoutes | session | object | User session data | App mount |
| AppRoutes | isLoading | boolean | Initial load state | App mount |
| HeroSection | selectedPlatform | string | Current platform | Platform click |
| HeroSection | selectedService | string | Current service | Service click |
| HeroSection | quantity | number | Selected quantity | Quantity click |
| Testimonials | offset | number | Scroll position | setInterval (30ms) |
| Testimonials | isPaused | boolean | Pause state | Mouse enter/leave |
| OrderPage | currentStepIndex | number | Current step (0-4) | Next/Back buttons |
| OrderPage | orderData | object | All order data | Step submissions |

---

## Data Flow Mind Map

```
                          TIKYTOP DATA FLOW
                              
                              ┌─────────┐
                              │  USER   │
                              │ ACTION  │
                              └────┬────┘
                                   │
               ┌───────────────────┼───────────────────┐
               │                   │                   │
               ▼                   ▼                   ▼
          ┌─────────┐         ┌─────────┐         ┌─────────┐
          │ SELECT  │         │  LOGIN  │         │  ORDER  │
          │PLATFORM │         │ /REGISTER│         │  FLOW   │
          └────┬────┘         └────┬────┘         └────┬────┘
               │                   │                   │
               ▼                   ▼                   ▼
        ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
        │   Hero     │     │    Auth     │     │   Order    │
        │  State     │     │   State     │     │   State    │
        │  Update    │     │   Update    │     │   Update   │
        └─────┬──────┘     └─────┬──────┘     └─────┬──────┘
              │                   │                   │
              ▼                   ▼                   ▼
        ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
        │   Service  │     │  Session    │     │   Order    │
        │   Filter   │     │  Storage    │     │   Steps    │
        └─────┬──────┘     └─────┬──────┘     └─────┬──────┘
              │                   │                   │
              ▼                   ▼                   ▼
        ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
        │  Display    │     │   Route    │     │   Final    │
        │  Options    │     │  Guard     │     │  Summary   │
        └─────┬──────┘     └─────┬──────┘     └─────┬──────┘
              │                   │                   │
              ▼                   ▼                   ▼
        ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
        │  Navigate   │     │   Access    │     │  Success    │
        │  to Route   │     │  Protected  │     │  Message    │
        └─────────────┘     └─────────────┘     └─────────────┘
```

---

## Conclusion

The TikyTop application follows a unidirectional data flow pattern:

1. **User Actions** trigger state updates
2. **State Changes** cause component re-renders
3. **Components** receive new props/state and display updated data
4. **Navigation** occurs through route changes
5. **Persistence** happens through sessionStorage for auth state

This architecture ensures predictable data flow and makes debugging easier.