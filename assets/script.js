document.addEventListener("DOMContentLoaded", function() {

  // Loader display
  let loader = document.createElement('div');
  loader.id = 'page-loader';
  loader.style.position = 'fixed';
  loader.style.top = '0';
  loader.style.left = '0';
  loader.style.width = '100%';
  loader.style.height = '100%';
  loader.style.background = '#fff';
  loader.style.zIndex = '9999';
  loader.style.display = 'flex';
  loader.style.justifyContent = 'center';
  loader.style.alignItems = 'center';
  loader.innerHTML = '<p style="font-size:2rem;">Loading...</p>';
  document.body.appendChild(loader);

  window.onload = () => {
    loader.style.transition = 'opacity 0.5s';
    loader.style.opacity = 0;
    setTimeout(() => loader.remove(), 500);
  };

  // Collapsible functionality with smooth animation
  var coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active-collapsible");
      var content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});
