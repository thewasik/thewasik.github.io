(() => {
  "use strict";

  const icons = {
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.57.1.79-.25.79-.55v-1.94c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18v12H3z"/><path d="M3 7l9 6 9-6"/></svg>`,
    pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.3"/></svg>`,
    badge: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="9" r="6"/><path d="M8.5 14.5L7 22l5-3 5 3-1.5-7.5"/></svg>`
  };

  /* ---------- render content from SITE data ---------- */
  function render() {
    document.title = `${SITE.name} — ${SITE.title}`;
    document.getElementById("heroName").innerHTML = SITE.name.replace(
      SITE.name.split(" ").slice(-1)[0],
      `<span>${SITE.name.split(" ").slice(-1)[0]}</span>`
    );
    // document.getElementById("heroRole").textContent = `${SITE.title} — ${SITE.location}`;
    document.getElementById("heroRole").textContent = SITE.title;
    document.getElementById("heroIntro").textContent = SITE.heroIntro;

    // Resume buttons
    ["navResumeBtn", "navResumeBtnMobile", "heroResumeBtn", "contactResumeBtn"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.href = SITE.links.resume;
    });

    // Hero + footer social links
    document.getElementById("heroLinks").innerHTML = `
      <a href="${SITE.links.github}" target="_blank" rel="noopener">${icons.github}GitHub</a>
      <a href="${SITE.links.linkedin}" target="_blank" rel="noopener">${icons.linkedin}LinkedIn</a>
      <a href="mailto:${SITE.email}">${icons.mail}Email</a>`;
    document.getElementById("footerLinks").innerHTML = `
      <a href="${SITE.links.github}" target="_blank" rel="noopener">GitHub</a>
      <a href="${SITE.links.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
      <a href="mailto:${SITE.email}">Email</a>`;
    document.getElementById("footerCopy").textContent = `© ${new Date().getFullYear()} ${SITE.name}`;

    // About
    document.getElementById("aboutText").innerHTML = SITE.about.paragraphs.map(p => `<p>${p}</p>`).join("");

    // Experience timeline
    document.getElementById("timelineList").innerHTML = SITE.experience.map(job => `
      <div class="timeline-item ${job.current ? "current" : ""}">
        <div class="timeline-marker"></div>
        <div class="timeline-head">
          <div>
            <span class="timeline-role">${job.role}</span>
            ${job.current ? '<span class="badge-current">Current</span>' : ""}
            <div class="timeline-company">${job.company}</div>
          </div>
          <div class="timeline-period">${job.period}</div>
        </div>
        <ul class="timeline-points">
          ${job.points.map(pt => `<li>${pt}</li>`).join("")}
        </ul>
      </div>
    `).join("");

    // Featured project
    const fp = SITE.featuredProject;
    document.getElementById("featuredProject").innerHTML = `
      <div class="project-feature-head">
        <div>
          <h3>${fp.name}</h3>
          <div class="subtitle">${fp.subtitle}</div>
        </div>
        <div class="project-duration">${fp.duration}</div>
      </div>
      <div class="project-feature-body">
        <div>
          <p class="project-desc">${fp.description}</p>
          <div class="tag-list">${fp.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        </div>
        <div>
          <div class="project-contrib-label">Technical contribution</div>
          <ul class="project-contrib">${fp.contributions.map(c => `<li>${c}</li>`).join("")}</ul>
        </div>
      </div>
    `;

    // Skills
    document.getElementById("skillsGrid").innerHTML = SITE.skills.map(cat => `
      <div class="skill-card">
        <h4>${cat.category}</h4>
        <ul>${cat.items.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>
    `).join("");

    // Expertise
    document.getElementById("expertiseGrid").innerHTML = SITE.expertise.map(e => `
      <div class="expertise-item"><span class="ind"></span>${e}</div>
    `).join("");

    // Education
    document.getElementById("eduList").innerHTML = SITE.education.map(ed => `
      <div class="edu-item">
        <div>
          <h4>${ed.degree}</h4>
          <div class="school">${ed.school}</div>
        </div>
        <div class="year">${ed.year}</div>
      </div>
    `).join("");

    // Certifications
    document.getElementById("certList").innerHTML = SITE.certifications.map(c => `
      <div class="cert-item">${icons.badge}${c.name}</div>
    `).join("");

    // Interests
    document.getElementById("interestsList").innerHTML = SITE.interests.map(i => `<span>${i}</span>`).join("");

    // Contact meta
    document.getElementById("contactMeta").innerHTML = `
      <span>${icons.mail}${SITE.email}</span>
      <span>${icons.pin}${SITE.location}</span>
    `;
    document.getElementById("contactEmailBtn").href = `mailto:${SITE.email}`;
  }

  /* ---------- nav scroll state + active link ---------- */
  function initNav() {
    const nav = document.getElementById("siteNav");
    const sections = [...document.querySelectorAll("main section[id]")];
    const navLinks = [...document.querySelectorAll("[data-nav]")];

    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 20);
    }, { passive: true });

    const spy = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(l => l.classList.toggle("active", l.dataset.nav === id));
        }
      });
    }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

    sections.forEach(s => spy.observe(s));
  }

  /* ---------- mobile menu ---------- */
  function initMobileMenu() {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("mobileMenu");
    const icon = document.getElementById("navToggleIcon");

    function close() {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      icon.innerHTML = `<path d="M3 6h18M3 12h18M3 18h18"/>`;
    }
    function open() {
      menu.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
      icon.innerHTML = `<path d="M6 6l12 12M18 6L6 18"/>`;
    }

    toggle.addEventListener("click", () => {
      menu.classList.contains("open") ? close() : open();
    });

    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  }

  /* ---------- scroll reveal ---------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(i => io.observe(i));
  }

  /* ---------- back to top ---------- */
  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
      btn.classList.toggle("visible", window.scrollY > 600);
    }, { passive: true });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------- hero signature: subtle system node graph ---------- */
  function initHeroGraph() {
    const svg = document.getElementById("heroSvg");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const nodes = [
      { x: 90, y: 60, label: "Angular" },
      { x: 300, y: 40, label: "TypeScript" },
      { x: 60, y: 190, label: "REST API" },
      { x: 250, y: 180, label: "Laravel" },
      { x: 340, y: 260, label: "MySQL" },
      { x: 130, y: 320, label: "Redis" },
      { x: 300, y: 380, label: "Git" }
    ];
    const edges = [
      [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 3], [5, 2], [3, 6]
    ];

    const ns = "http://www.w3.org/2000/svg";
    edges.forEach(([a, b], i) => {
      const line = document.createElementNS(ns, "line");
      line.setAttribute("x1", nodes[a].x);
      line.setAttribute("y1", nodes[a].y);
      line.setAttribute("x2", nodes[b].x);
      line.setAttribute("y2", nodes[b].y);
      line.setAttribute("stroke", "var(--border-strong)");
      line.setAttribute("stroke-width", "1");
      if (!reduceMotion) {
        line.style.opacity = "0";
        line.style.transition = `opacity 0.6s ease ${0.15 + i * 0.08}s`;
      }
      svg.appendChild(line);
    });

    nodes.forEach((n, i) => {
      const g = document.createElementNS(ns, "g");
      if (!reduceMotion) {
        g.style.opacity = "0";
        g.style.transform = "scale(0.8)";
        g.style.transformOrigin = `${n.x}px ${n.y}px`;
        g.style.transition = `opacity 0.5s ease ${0.3 + i * 0.08}s, transform 0.5s ease ${0.3 + i * 0.08}s`;
      }

      const circle = document.createElementNS(ns, "circle");
      circle.setAttribute("cx", n.x);
      circle.setAttribute("cy", n.y);
      circle.setAttribute("r", i === 3 ? 5 : 3.5);
      circle.setAttribute("fill", i === 3 ? "var(--accent)" : "var(--bg)");
      circle.setAttribute("stroke", "var(--accent)");
      circle.setAttribute("stroke-width", "1.5");
      g.appendChild(circle);

      const text = document.createElementNS(ns, "text");
      text.setAttribute("x", n.x);
      text.setAttribute("y", n.y - 12);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("font-family", "IBM Plex Mono, monospace");
      text.setAttribute("font-size", "10");
      text.setAttribute("fill", "var(--text-tertiary)");
      text.textContent = n.label;
      g.appendChild(text);

      svg.appendChild(g);
    });

    requestAnimationFrame(() => {
      svg.querySelectorAll("line").forEach(l => (l.style.opacity = "1"));
      svg.querySelectorAll("g").forEach(g => {
        g.style.opacity = "1";
        g.style.transform = "scale(1)";
      });
    });
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    render();
    initNav();
    initMobileMenu();
    initReveal();
    initBackToTop();
    initHeroGraph();
  });
})();
