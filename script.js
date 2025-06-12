// script.js – Injects data into HTML from data.js

// Inject Hero
const heroTitle = document.getElementById("hero-title");
const heroSubtitle = document.getElementById("hero-subtitle");
heroTitle.textContent = heroData.title;
heroSubtitle.textContent = heroData.subtitle;

// Inject About
document.getElementById("about-text").textContent = aboutText;

// Inject Skills
const skillsContainer = document.getElementById("skills-container");
skills.forEach(skill => {
  const skillDiv = document.createElement("div");
  skillDiv.className = "skill-item";
  skillDiv.innerHTML = `
    <strong>${skill.name}</strong>
    <div class="bar">
      <div style="width:${skill.level}"></div>
    </div>`;
  skillsContainer.appendChild(skillDiv);
});

// Inject Projects
const projectsContainer = document.getElementById("projects-container");
projects.forEach(project => {
  const projectCard = document.createElement("div");
  projectCard.className = "project-card";
  projectCard.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
  projectsContainer.appendChild(projectCard);
});

// Inject Timeline
const timelineList = document.getElementById("timeline-list");
timeline.forEach(item => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${item.year}</strong> – ${item.event}`;
  timelineList.appendChild(li);
});

// Inject Plans
const plansContainer = document.getElementById("plans-container");
plans.forEach(plan => {
  const planCard = document.createElement("div");
  planCard.className = "plan-card";
  planCard.innerHTML = `
    <h3>${plan.name}</h3>
    <p><strong>${plan.price}</strong></p>
    <ul>${plan.features.map(f => `<li>• ${f}</li>`).join('')}</ul>
  `;
  plansContainer.appendChild(planCard);
});

// Animate Timeline on Scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3
});

document.querySelectorAll('#timeline-list li').forEach(item => {
  observer.observe(item);
});