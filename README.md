# Developer Portfolio — React + Tailwind + Framer Motion

A premium, futuristic, glassmorphism dark-theme developer portfolio built with:
- React (latest)
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- React Icons / Lucide Icons
- EmailJS (contact form)

## Features
- Sticky glass navbar with scroll styling
- Page transitions + motion-first UI
- Premium glass cards + glowing buttons
- Typing effect in hero
- Animated counters
- Project cards with tilt hover
- Scroll progress bar
- Loading screen
- Lazy-loaded routes
- EmailJS contact form with validation + success/error UI

## Folder Structure
```txt
src/
  components/
    animation/
      PageTransition.jsx
    effects/
      LoadingScreen.jsx
      ScrollProgress.jsx
      AnimatedBackground.jsx
      MouseGlow.jsx
      ScrollReveal.jsx
      CounterUp.jsx
      CustomCursor.jsx
    hero/
      TypingHero.jsx
    layout/
      Navbar.jsx
      Footer.jsx
    inputs/
      TextField.jsx
      TextAreaField.jsx
    projects/
      ProjectCard.jsx
      SuggestedProjects.jsx
    skills/
      SkillCard.jsx
      SkillProgress.jsx
    ui/
      GlassCard.jsx
      GlowButton.jsx
      Tag.jsx
      SectionHeading.jsx
  constants/
    site.js
    skills.js
    projects.js
    experience.js
    education.js
    certifications.js
    achievements.js
    testimonials.js
  hooks/
    useInViewReveal.js
    useScrollSpy.js
    usePrefersReducedMotion.js
  pages/
    Home.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Experience.jsx
    Education.jsx
    Certifications.jsx
    Achievements.jsx
    Resume.jsx
    Contact.jsx
    Testimonials.jsx
    NotFound.jsx
  utils/
    classNames.js
    scrollToSection.js
    validators.js
  styles/
    globals.css
  App.jsx
  main.jsx

index.html
package.json
vite.config.js
tailwind.config.js
postcss.config.js
```

## Installation
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## EmailJS Configuration
This project expects EmailJS template identifiers via Vite environment variables.

Create a `.env` file in the project root:
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then run:
```bash
npm run dev
```

## Resume Download
The app links to:
- `/resume.pdf`

A minimal `public/resume.pdf` file is included in this project. Replace it with your real resume by overwriting `public/resume.pdf`.

## Deployment (Vercel / Netlify)
1. Build the project: `npm run build`
2. Deploy the generated `dist/` folder.

If you use React Router on static hosts, ensure the host is configured to fallback `index.html` for unknown routes.

## Accessibility & Reduced Motion
The UI respects `prefers-reduced-motion` for scrolling behavior.

## Notes
- All links in `src/constants` and social URLs are currently set to `#` placeholders. Replace them with your real URLs.
- Project/live/demo URLs are currently `#` placeholders.

