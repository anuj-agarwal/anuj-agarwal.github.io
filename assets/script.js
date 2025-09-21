document.addEventListener("DOMContentLoaded", function () {
  // Loader functionality
  const loader = document.getElementById("loader");
  window.addEventListener("load", function () {
    if (loader) loader.style.display = "none";
  });

  // Collapsible functionality
  const coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active-collapsible");

      // Find next sibling element that is a div (skip text nodes)
      let content = this.nextSibling;
      while (content && content.nodeType !== 1) { // Node.ELEMENT_NODE
        content = content.nextSibling;
      }
      if (!content) return;

      if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        // Collapse
        content.style.maxHeight = "0";
        content.style.paddingTop = "0";
        content.style.paddingBottom = "0";
      } else {
        // Expand
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.paddingTop = "0.5rem";
        content.style.paddingBottom = "0.5rem";
      }
    });
  }
});
