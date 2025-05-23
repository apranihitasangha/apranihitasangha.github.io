document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");
  const sections = document.querySelectorAll(".section-content");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // Remove active class from all nav links
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Get target section id
      const targetId = link.getAttribute("href").substring(1);

      // Fade out all sections except target
      sections.forEach(section => {
        if (section.id === targetId) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    });
  });
});
