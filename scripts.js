document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navbar a");
  const sections = document.querySelectorAll(".section-content");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove 'active' class from all links
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");

      // Get the target section ID
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      // Hide all sections with fade-out effect
      sections.forEach(section => {
        if(section !== targetSection) {
          section.classList.remove("active");
        }
      });

      // Delay to trigger fade transition for showing the target section
      setTimeout(() => {
        targetSection.classList.add("active");
      }, 50);
    });
  });
});
