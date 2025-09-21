---
layout: default
title: "Projects"
permalink: /projects/
---

# Featured Projects

<div class="timeline">

<div class="timeline-entry">
  <div class="timeline-date">2023</div>
  <button class="collapsible">Generative AI in Finance</button>
  <div class="content-collapsible">
    <p>LangChain-based Math Accuracy Checker transforming audit workflows. Supports RAG pipelines, vector databases, and ensures precise calculations for financial data.</p>
  </div>
</div>

<div class="timeline-entry">
  <div class="timeline-date">2022</div>
  <button class="collapsible">Healthcare Innovation</button>
  <div class="content-collapsible">
    <p>Patent-pending CT clustering algorithm optimizing imaging protocols. Integrated GANs for synthetic image generation and YOLO models for pathology detection.</p>
  </div>
</div>

<div class="timeline-entry">
  <div class="timeline-date">2021</div>
  <button class="collapsible">Cybersecurity MDR System</button>
  <div class="content-collapsible">
    <p>AI-powered Managed Detection & Response platform predicting advanced cyber threats. Multi-model framework ensures high accuracy and low false positives.</p>
  </div>
</div>

</div>

<script>
var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active-collapsible");
    var content = this.nextElementSibling;
    content.style.display = (content.style.display === "block") ? "none" : "block";
  });
}
</script>
