# Portfolio - WeDev Portfolio

## 1. Project Overview

- **Project name**: WeDev Portfolio
- **Type**: Multi-page static website
- **Core functionality**: Showcase a web/software development team with member presentations, projects, and team randomization
- **Target users**: Potential clients, recruiters, collaborators

## 2. UI/UX Specification

### Layout Structure

**Pages:**
1. `index.html` - Presentation/Home page
2. `membres.html` - Team members page (randomized display)
3. `projets.html` - Projects/Products showcase

**Common elements:**
- Fixed navigation bar (top)
- Footer with social links

**Responsive breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette:**
- Primary (light mode - default): `#FFFFFF`
- Primary (dark mode): `#0A0F1E` (deep navy)
- Accent: `#F79B35` (vibrant orange)
- Text (light mode - default): `#0A0F1E`
- Text (dark mode): `#FFFFFF`
- Secondary: `#F5F5F5` (light mode), `#1A2342` (dark mode)

**Typography:**
- Headings: "Clash Display", sans-serif (from CDN)
- Body: "Satoshi", sans-serif (from CDN)
- Fallback: system-ui, sans-serif

**Spacing:**
- Section padding: 80px vertical
- Container max-width: 1200px
- Card gap: 32px

**Visual effects:**
- Cards with subtle glow on hover
- Smooth transitions (0.3s ease)
- Gradient accent lines
- Floating shapes in background

### Components

**Navigation:**
- Logo (text-based)
- Links: Accueil, Membres, Projets
- Dark/Light mode toggle
- Hamburger menu on mobile

**Member Cards:**
- Circular avatar placeholder (200x200px)
- Name
- Role (Back-end / Front-end)
- Short bio
- Skills tags
- Social links

**Project Cards:**
- Project image/thumbnail
- Title
- Description
- Tech stack tags
- Links (GitHub, Live)

**Footer:**
- Copyright
- Social icons
- Theme toggle (small)

## 3. Functionality Specification

### Core Features

1. **Random Member Display (membres.html)**
   - On page load, members array is shuffled randomly
   - Each refresh shows different order
   - Smooth fade-in animation on load

2. **Dark/Light Mode Toggle**
   - Toggle button in navbar
   - Persists in localStorage
   - Smooth color transitions
   - Primary color switches: #0A0F1E ↔ #FFFFFF

3. **Responsive Navigation**
   - Desktop: horizontal nav
   - Mobile: hamburger menu with slide-in panel

4. **Smooth Scroll & Animations**
   - Page load animations
   - Hover effects on cards
   - Scroll-triggered fade-ins

### User Interactions
- Click navigation links → page change
- Click theme toggle → color scheme change
- Hover on cards → lift + glow effect

### Data Handling
- Static member data in JS arrays
- LocalStorage for theme preference

## 4. Acceptance Criteria

- [ ] All 3 pages load without errors
- [ ] Members appear in random order on each visit to membres.html
- [ ] Theme toggle switches between dark/light modes
- [ ] Theme preference persists across sessions
- [ ] All pages are responsive (mobile, tablet, desktop)
- [ ] Hover effects work on all interactive elements
- [ ] Navigation works correctly between pages
- [ ] Color palette matches specification exactly
