(function () {
  "use strict";

  var nav = document.getElementById("siteNav");
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("mobileMenu");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function setMenu(open) {
    if (!menu || !toggle) return;
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.textContent = open ? "Close" : "Menu";
    menu.setAttribute("aria-hidden", open ? "false" : "true");
    if ("inert" in menu) menu.inert = !open;
    document.body.classList.toggle("menu-open", open);
  }

  if (menu && toggle) {
    setMenu(false);
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menu.classList.contains("is-open")) {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  var links = Array.prototype.slice.call(document.querySelectorAll("[data-nav]"));
  var sections = [];
  var seen = {};
  links.forEach(function (link) {
    var id = link.getAttribute("data-nav");
    if (seen[id]) return;
    var section = document.getElementById(id);
    if (!section) return;
    seen[id] = true;
    sections.push(section);
  });

  function updateCurrent() {
    var marker = window.scrollY + 120;
    var current = "";
    sections.forEach(function (section) {
      if (section.offsetTop <= marker) current = section.id;
    });
    links.forEach(function (link) {
      var active = current !== "" && link.getAttribute("data-nav") === current;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  updateCurrent();
  window.addEventListener("scroll", updateCurrent, { passive: true });

  var revealItems = document.querySelectorAll(".reveal");
  if (!reduceMotion && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealItems.forEach(function (item) { io.observe(item); });
    window.setTimeout(function () {
      revealItems.forEach(function (item) { item.classList.add("is-in"); });
    }, 1600);
  } else {
    revealItems.forEach(function (item) { item.classList.add("is-in"); });
  }

  if (!reduceMotion && finePointer) {
    document.querySelectorAll(".glass").forEach(function (panel) {
      panel.addEventListener("pointermove", function (event) {
        var rect = panel.getBoundingClientRect();
        var x = ((event.clientX - rect.left) / rect.width) * 100;
        var y = ((event.clientY - rect.top) / rect.height) * 100;
        panel.style.setProperty("--lx", x.toFixed(1) + "%");
        panel.style.setProperty("--ly", y.toFixed(1) + "%");
        if (panel.classList.contains("tilt")) {
          var rx = ((y - 50) / 50) * -3.5;
          var ry = ((x - 50) / 50) * 4;
          panel.style.setProperty("--rx", rx.toFixed(2) + "deg");
          panel.style.setProperty("--ry", ry.toFixed(2) + "deg");
        }
      });
      panel.addEventListener("pointerleave", function () {
        panel.style.removeProperty("--lx");
        panel.style.removeProperty("--ly");
        panel.style.removeProperty("--rx");
        panel.style.removeProperty("--ry");
      });
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
