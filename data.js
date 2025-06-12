// data.js - Dynamic content for Codeverga Portfolio

// Hero Section
const heroData = {
  title: "Hi, I'm Adarsh (Codeverga)",
  subtitle: "Front-End Web Developer | Responsive UI Expert | 30+ Projects Delivered Globally"
};

// About Section
const aboutText = `
  I'm a passionate front-end developer with over 3 years of experience building modern,
  responsive websites. I've worked with creators, startups, and agencies to deliver
  30+ high-performance sites using HTML, CSS, JavaScript, and modern UI frameworks like Tailwind CSS.
`;

// Skills Section
const skills = [
  { name: "HTML5", level: "95%" },
  { name: "CSS3", level: "90%" },
  { name: "JavaScript", level: "85%" },
  { name: "Tailwind CSS", level: "85%" },
  { name: "Bootstrap", level: "80%" },
  { name: "Figma", level: "75%" },
];

// Projects Section
const projects = [
  {
    title: "E-Commerce for Fashion Brand",
    description: "A full responsive shopping site with categories, filters, and cart UI."
  },
  {
    title: "YouTuber Portfolio",
    description: "Video-based portfolio website with dark mode and scroll transitions."
  },
  {
    title: "NGO Donation Platform",
    description: "Blog + fundraiser site built with responsive grid and CMS-like layout."
  },
  {
    title: "App Landing Page",
    description: "High-converting landing UI with download CTA and feedback form."
  }
];

// Timeline Section
const timeline = [
  { year: "2022", event: "Started learning HTML/CSS and JavaScript, began freelancing locally." },
  { year: "2023", event: "Completed 10+ live websites and gained international clients." },
  { year: "2024", event: "Launched Codeverga as a personal brand, delivered 30+ global projects." },
  { year: "2025", event: "Portfolio 2.0 launched with full dynamic content and modern UX." }
];

// Plans Section
const plans = [
  {
    name: "Starter",
    price: "$5",
    features: [
      "Single-page responsive website",
      "Optimized for mobile and desktop",
      "Basic scroll sections (Home, About, Contact)",
      "Clean UI design with HTML/CSS/JS",
      "Delivery in 3 business days"
    ],
    extras: [
      "Hosting & domain not included",
      "No custom animations or JavaScript logic"
    ],
    bestFor: "Creators, Students, Simple Bio Sites"
  },
  {
    name: "Standard",
    price: "$15",
    features: [
      "Multi-page website (Home, About, Services, Contact)",
      "Basic scroll animations and effects",
      "Free hosting setup (Netlify or GitHub Pages)",
      "SEO-ready layout and contact form",
      "Delivery in 5 business days"
    ],
    extras: [
      "Domain setup optional ($5 extra)",
      "Email contact form via FormSubmit"
    ],
    bestFor: "Freelancers, Local Businesses"
  },
  {
    name: "Professional",
    price: "$30",
    features: [
      "Dynamic content (plans, timeline, etc.)",
      "E-commerce ready UI or Blog layout",
      "JavaScript-powered interactive elements",
      "Hosting setup and performance optimization",
      "1 month post-delivery support (minor updates)"
    ],
    extras: [
      "Domain setup optional ($5 extra)",
      "Custom animations and form handling included"
    ],
    bestFor: "Brands, Content Creators, Online Services"
  },
  {
    name: "Elite",
    price: "$50",
    features: [
      "Fully customized UI/UX design",
      "Includes blog, store, or dashboard-style layout",
      "Hosting + domain support included",
      "1-year maintenance (1 revision/month)",
      "Priority project handling & delivery"
    ],
    extras: [
      "One-time redesign within 30 days included",
      "No backend (contact forms only)"
    ],
    bestFor: "Agencies, SaaS, Long-term Websites"
  }
];