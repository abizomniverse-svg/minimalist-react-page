# Minimalist React Page

A modern, responsive landing page built with React and Vite. This project showcases a clean, minimalist design with smooth animations and intuitive user experience.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Components](#components)
- [Pages](#pages)
- [Styling](#styling)
- [Responsive Design](#responsive-design)
- [Performance Optimization](#performance-optimization)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Overview

This project is a minimalist React application built with Vite, featuring a modern landing page design. The application includes multiple sections such as hero, features, testimonials, pricing, and contact forms. It's designed to be lightweight, fast, and easily customizable.

The application demonstrates best practices in React development including component-based architecture, responsive design, and performance optimization techniques.

## Features

- ✅ Fully responsive design for all device sizes
- ✅ Smooth scroll animations and transitions
- ✅ Modern UI with clean, minimalist aesthetics
- ✅ Interactive components (buttons, forms, navigation)
- ✅ Optimized for performance with lazy loading
- ✅ SEO-friendly structure with semantic HTML
- ✅ Accessible components following WCAG guidelines
- ✅ Easy to customize and extend
- ✅ Built with React 18 and Vite for fast development
- ✅ ESLint configured for code quality
- ✅ Multiple page routes (Landing, Auth, Order)
- ✅ Form validation and handling
- ✅ Asset optimization (images, icons, SVGs)
- ✅ Environment variable support
- ✅ Production-ready build setup

## Tech Stack

### Frontend
- **React 18** - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling for fast builds
- **CSS3** - Styling with modern CSS features
- **JavaScript ES6+** - Modern JavaScript syntax and features

### Development Tools
- **ESLint** - Code linting for maintaining code quality
- **Prettier** - Code formatting (configured in ESLint)
- **Git** - Version control
- **npm** - Package management

### Build & Deployment
- **Vite Build** - Optimized production builds
- **Static Hosting** - Compatible with Netlify, Vercel, GitHub Pages, etc.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites
- Node.js (version 16 or higher)
- npm (version 7 or higher) or yarn

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

### Running the Development Server

Start the development server with hot reload:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Usage

### Development

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint to check for code issues
- `npm run format` - Formats code with Prettier

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The build output will be in the `dist` directory.

### Previewing Production Build

To preview the production build locally:
```bash
npm run preview
```

## Available Scripts

In the `package.json` file, you can find the following scripts:

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Vite |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |
| `npm run format` | Format code with Prettier |
| `npm run test` | Run tests (if configured) |

## Project Structure

```
minimalist-react-page/
├── public/                 # Static assets
│   ├── favicon.svg         # Site favicon
│   └── icons.svg           # Application icons
├── src/                    # Source code
│   ├── assets/             # Images, logos, and media files
│   ├── components/         # Reusable UI components
│   │   ├── layout/         # Layout components (Navbar, Footer)
│   │   └── ui/             # Primitive UI components (Button, Input)
│   ├── pages/              # Page components
│   │   ├── Auth/           # Authentication pages (Login, Register)
│   │   ├── Landing/        # Landing page sections
│   │   └── Order/          # Order flow pages
│   ├── routes/             # Application routing
│   ├── utils/              # Utility functions and constants
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   ├── index.css           # Global styles
│   └── constants.js        # Application constants
├── .gitignore              # Git ignore file
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package.json            # npm dependencies and scripts
├── package-lock.json       # Dependency lock file
├── README.md               # Project documentation
└── vite.config.js          # Vite configuration
```

## Components

### Layout Components
- **Navbar** - Responsive navigation menu
- **Footer** - Page footer with links and social media

### UI Components
- **Button** - Customizable button component
- **Input** - Form input with validation
- **Card** - Card component for displaying content
- **Modal** - Modal dialog component

### Landing Page Sections
- **HeroSection** - Main hero section with call-to-action
- **FeaturesSection** - Highlights key features
- **TestimonialSection** - Customer testimonials
- **TargetedAudience** - Audience targeting information
- **Spotlight** - Special offers or highlights
- **TrendingPackage** - Popular packages or services
- **WhyTikytop** - Value proposition section
- **FaqSection** - Frequently asked questions
- **OrderStepsSection** - Visual guide to the order process

### Order Flow Components
- **OrderPage** - Main order processing page
- **StepFindAccount** - Account lookup step
- **StepSelectPackage** - Package selection step
- **StepSelectPosts** - Post selection step
- **StepCustomize** - Customization options
- **StepCheckout** - Payment and checkout
- **StepSuccess** - Success confirmation
- **OrderProgress** - Progress indicator

## Pages

### Authentication Pages
- **Login.jsx** - User login form
- **Register.jsx** - User registration form

### Landing Pages
- **LandingPage.jsx** - Main landing page combining all sections

### Order Pages
- **OrderPage.jsx** - Complete order flow wizard

## Styling

The project uses CSS for styling with the following approach:

- **Global Styles** - Defined in `src/index.css` for base styles and CSS variables
- **Component Styles** - Each component can have its own CSS or use inline styles
- **CSS Variables** - For theme colors, spacing, and typography
- **Responsive Design** - Using media queries and flexible units
- **Animations** - CSS transitions and keyframe animations

### Color Scheme
- Primary: Various shades of blue and purple
- Secondary: Accent colors for highlights
- Neutral: Grayscale for text and backgrounds
- Success/Error: Semantic colors for feedback

### Typography
- Font Family: System fonts with fallbacks
- Font Weights: Regular, medium, bold for hierarchy
- Responsive Sizing: Using rem units for scalability

## Responsive Design

The application is fully responsive and tested on:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Laptops (1024px and up)
- Desktops (1280px and up)
- Large screens (1920px and up)

Breakpoints used:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Performance Optimization

Several performance optimization techniques are implemented:

1. **Code Splitting** - Dynamic imports for route-based splitting
2. **Asset Optimization** - Optimized images and compressed assets
3. **Lazy Loading** - Images and components load on demand
4. **Minification** - Production build minifies CSS and JavaScript
5. **Caching** - Proper cache headers for static assets
6. **Efficient Rendering** - React.memo and useCallback where appropriate
7. **Bundle Analysis** - Tools to analyze bundle size (can be added)

## Environment Variables

Create a `.env` file in the root directory for environment variables:

```
VITE_API_URL=https://api.example.com
VITE_GOOGLE_ANALYTICS_ID=UA-XXXXXXXX-X
VITE_CONTACT_EMAIL=contact@example.com
```

Note: Variables must be prefixed with `VITE_` to be exposed to the client-side code.

## Deployment

The application can be deployed to various static hosting platforms:

### Netlify
1. Push to GitHub
2. Connect repository in Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### GitHub Pages
1. Add homepage field to package.json: `"homepage": "https://username.github.io/repo"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Run: `npm run deploy`

### Docker
```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Write descriptive commit messages
- Keep pull requests focused
- Add tests for new functionality
- Update documentation as needed
- Respect the code of conduct

### Reporting Issues
Please use the GitHub issue tracker to report bugs or request features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Owner - [@abizomniverse-svg](https://github.com/abizomniverse-svg)

Project Link: [https://github.com/abizomniverse-svg/minimalist-react-page](https://github.com/abizomniverse-svg/minimalist-react-page)

## Acknowledgements

- [React](https://reactjs.org/) - The web library used
- [Vite](https://vitejs.dev/) - The build tool used
- [ESLint](https://eslint.org/) - For maintaining code quality
- All contributors who have helped shape this project
- Open source community for inspiration and resources

---

*Built with ❤️ using React and Vite*