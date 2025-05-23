document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section-content");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active classes
      navLinks.forEach(l => l.classList.remove("active"));
      sections.forEach(s => s.classList.remove("active"));

      // Add active to clicked nav link
      link.classList.add("active");

      // Show corresponding section
      const sectionId = link.getAttribute("data-section");
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.classList.add("active");
        // Scroll to top smoothly (optional)
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
});
