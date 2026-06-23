# WASP - Advanced Inline-Inspection Solutions

A modern Vue 3 homepage for WASP featuring a dark theme with golden accents.

## Project Structure

```
Wasp/
├── src/
│   ├── components/
│   │   ├── Header.vue      # Header with logo and navigation
│   │   ├── Hero.vue        # Hero section with background and CTA
│   │   └── Cards.vue       # Four clickable feature cards
│   ├── App.vue             # Main app component
│   ├── main.js             # Vue app entry point
│   └── style.css           # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start the development server, typically at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Components

### Header Component
- Logo on the left with WASP branding
- Navigation links on the right: Home, About, Services, Contact
- Fixed header that stays at the top while scrolling

### Hero Component
- Full-screen hero section with background image placeholder
- Animated inspection device visualization
- Main heading: "Advanced Inline-Inspection Solutions"
- Subtitle text and "Learn more" button
- Responsive design for all screen sizes

### Cards Component
- Four clickable feature cards:
  1. Pipeline Inspection
  2. Learning & Skill
  3. Contact Our Team
  4. Pipeline Integrity
- Each card has a golden icon, title, and description
- Hover effects and smooth transitions
- Cards are clickable (navigation logic can be added when pages are ready)

## Customization

### Adding a Real Background Image

Replace the placeholder in `Hero.vue` by:
1. Adding your image to `public/` folder
2. Updating the `.hero-image-placeholder` background-image property

### Adding Routing

When ready to add navigation, install Vue Router:
```bash
npm install vue-router@4
```

Then update the `navigate` functions in Header.vue and Cards.vue to use the router.

## Styling

The design uses:
- Dark background: `#0a0a0a`
- Golden accent color: `#D4AF37`
- White text with varying opacity for hierarchy
- Smooth transitions and hover effects

## Browser Support

Modern browsers that support:
- CSS Grid
- Flexbox
- CSS Custom Properties
- ES6+ JavaScript
