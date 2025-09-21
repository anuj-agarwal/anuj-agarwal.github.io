document.addEventListener("DOMContentLoaded", function () {
  // Collapsible functionality
  const coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active-collapsible");

      // Use nextElementSibling (skip all text nodes)
      const content = this.nextElementSibling;
      if (!content) return;

      // Use requestAnimationFrame to ensure correct scrollHeight
      if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        // Collapse
        content.style.maxHeight = "0";
        content.style.paddingTop = "0";
        content.style.paddingBottom = "0";
      } else {
        // Expand
        content.style.display = "block"; // ensure visible
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.paddingTop = "0.5rem";
        content.style.paddingBottom = "0.5rem";
      }
    });
  }
});
