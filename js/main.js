// Team Members Data
const teamMembers = [
  {
    id: 1,
    name: "Sethxama Pierre-Louis",
    role: "Développeur Back-end",
    bio: "Passionné par l'architecture des systèmes et l'optimisation des performances. Expert en bases de données et APIs robustes.",
    skills: ["Node.js", "Python", "PostgreSQL", "Docker", "AWS"],
    initials: "SPL",
  },
  {
    id: 2,
    name: "Belensky Lordé",
    role: "Développeuse Front-end",
    bio: "Développeur Front-End passionné , je conçois des interfaces web modernes, rapides et intuitives. J’aime transformer des maquettes en expériences fluides et accessibles, avec une attention particulière aux détails visuels et à la performance",

    skills: ["HTML/CSS", "JavaScript", "Responsive design", "Git", "Team Work"],
    initials: "BL",
    avatar: "images/we_dev_lorde.jpeg",
  },
  {
    id: 3,
    name: "Ardenshley Nage",
    role: "Développeur Back-end",
    bio: "Développeur back-end passionné par la création d'APIs robustes et d'applications web et mobile. Toujours en apprentissage, en construction et à la recherche de nouvelles technologies. Ouvert à la collaboration et aux idées de projets innovants !",
    skills: [
      "PHP/Laravel",
      "Python/Django",
      "Java/Spring Boot",
      "C",
      "Docker",
      "HTML/CSS",
      "JavaScript",
      "Android Studio",
      "MySQL/MariaDB",
      "SQLite",
    ],
    initials: "AN",
    avatar: "images/portfolio_we_dev_nage.JPG",
    github: "https://github.com/ardenshleynage",
    linkedin: "https://www.linkedin.com/in/ardenshley-nage",
    email: "nageardenshley@gmail.com",
  },
];

// Projects Data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Plateforme e-commerce complète avec gestion des paiements, inventaire et tableau de bord administrateur.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    placeholder: "🛒",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Application de gestion de tâches collaborative avec fonctionnalités de team, deadlines et notifications.",
    tech: ["Vue.js", "Firebase", "TailwindCSS"],
    placeholder: "📋",
  },
  {
    id: 3,
    title: "Real-time Chat",
    description:
      "Système de messagerie instantanée chiffrée avec salons privés, partage de fichiers et appels vidéo.",
    tech: ["Socket.io", "Express", "MongoDB", "WebRTC"],
    placeholder: "💬",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description:
      "Tableau de bord analytique temps réel pour le suivi des KPIs business avec visualisations avancées.",
    tech: ["D3.js", "Python", "FastAPI", "Redis"],
    placeholder: "📊",
  },
  {
    id: 5,
    title: "IoT Management Platform",
    description:
      "Plateforme de gestion et surveillance d'appareils IoT avec alertes intelligentes et rapports automatisés.",
    tech: ["Node.js", "MQTT", "InfluxDB", "Raspberry Pi"],
    placeholder: "📡",
  },
  {
    id: 6,
    title: "Content CMS",
    description:
      "Système de gestion de contenu flexible avec editor WYSIWYG, versioning et API headless.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "AWS S3"],
    placeholder: "✍️",
  },
];

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
}

// Dynamic Footer Year
function initFooterYear() {
  const yearElements = document.querySelectorAll(".footer-year");
  const currentYear = new Date().getFullYear();
  yearElements.forEach((el) => {
    el.textContent = currentYear;
  });
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

// Shuffle Array (Fisher-Yates)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Render Team Members
function renderTeamMembers() {
  const container = document.getElementById("members-grid");
  if (!container) return;

  const shuffledMembers = shuffleArray(teamMembers);

  container.innerHTML = shuffledMembers
    .map(
      (member) => `
    <div class="member-card">
      <div class="member-avatar">
        ${member.avatar ? `<img src="${member.avatar}" alt="${member.name}">` : `<span class="placeholder">${member.initials}</span>`}
      </div>
      <span class="member-role">${member.role}</span>
      <h3 class="member-name">${member.name}</h3>
      <p class="member-bio">${member.bio}</p>
      <div class="member-skills">
        ${member.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
      </div>
      <div class="member-socials">
        ${member.github
          ? `
        <a href="${member.github}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
          <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        `
          : ""
        }
        ${member.linkedin
          ? `
        <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        `
          : ""
        }
        ${member.email
          ? `
        <a href="mailto:${member.email}" class="social-link" aria-label="Email">
          <svg viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
        </a>
        `
          : ""
        }
      </div>
    </div>
  `,
    )
    .join("");
}

// Render Projects
function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
    <div class="project-card">
      <div class="project-image">
        <span class="placeholder">${project.placeholder}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.tech.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
        </div>
        <div class="project-links">
          <a href="#" class="project-link primary">
            <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Code
          </a>
          <a href="#" class="project-link secondary">
            <svg viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17.5v-9l7 4.5-7 4.5z"/></svg>
            Demo
          </a>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

// Mobile Navigation
function initMobileNav() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderTeamMembers();
  renderProjects();
  initMobileNav();
  initFooterYear();

  // Theme toggle listener
  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.addEventListener("click", toggleTheme);
  });
});
