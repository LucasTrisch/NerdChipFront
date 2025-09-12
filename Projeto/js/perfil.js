document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar a");
    const sections = document.querySelectorAll(".section");
  
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
  
        links.forEach(l => l.classList.remove("active"));

        link.classList.add("active");
  
        sections.forEach(section => section.classList.remove("active"));
  
        const target = link.getAttribute("data-section");
        document.getElementById(target).classList.add("active");
      });
    });
  });
  