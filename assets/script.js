document.addEventListener("DOMContentLoaded", function () {
  // Loader functionality
  const loader = document.getElementById("loader");
  window.addEventListener("load", function () {
    if(loader) loader.style.display = "none";
  });

  // Collapsible functionality with smooth animation
  const coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active-collapsible");
      const content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.paddingTop = "0";
        content.style.paddingBottom = "0";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.paddingTop = "0.5rem";
        content.style.paddingBottom = "0.5rem";
      }
    });
  }

  // Apply fade-in to all main content blocks
  const fadeElements = document.querySelectorAll("main, .timeline, .contact-grid, div");
  fadeElements.forEach(el => {
    el.classList.add("fade-in");
  });
});
