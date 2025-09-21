---
layout: default
title: "Projects"
permalink: /projects/
---

# Featured Projects

<!-- Project 1 -->
<button class="collapsible">Generative AI in Finance</button>
<div class="content-collapsible">
  <p>LangChain-based Math Accuracy Checker to improve audit workflows and reduce manual review by 70%. Integrated with LangGraph for enhanced validation.</p>
</div>

<!-- Project 2 -->
<button class="collapsible">Healthcare Innovation</button>
<div class="content-collapsible">
  <p>Patent-pending CT clustering algorithm optimizing imaging protocols. Built conditional GANs to generate realistic synthetic CT images for low-data scenarios.</p>
</div>

<!-- Project 3 -->
<button class="collapsible">Computer Vision Pathology Detection</button>
<div class="content-collapsible">
  <p>YOLO-based pathology detection model achieving 95% diagnostic accuracy. Used in hospitals to improve early detection efficiency.</p>
</div>

<!-- Project 4 -->
<button class="collapsible">Cybersecurity MDR System</button>
<div class="content-collapsible">
  <p>AI-powered Managed Detection & Response system predicting advanced threats with 95% accuracy. Integrated multi-model framework for real-time threat intelligence.</p>
</div>

<!-- Collapsible JS -->
<script>
  const collapsibles = document.querySelectorAll(".collapsible");
  collapsibles.forEach(c => {
    c.addEventListener("click", function() {
      this.classList.toggle("active-collapsible");
      const content = this.nextElementSibling;
      if(content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
</script>
