---
layout: default
title: "Experience"
permalink: /experience/
---

# Professional Experience

<div class="timeline">

  <!-- KPMG -->
  <div class="timeline-entry">
    <div class="timeline-date">Oct 2023 – Present</div>
    <button class="collapsible">KPMG – Manager (Generative AI, Audit)</button>
    <div class="content-collapsible">
      <ul>
        <li>Led the integration of AI into financial audit workflows, reducing manual review time by <strong>70%</strong>.</li>
        <li>Architected a Generative AI solution using <strong>LangChain + LangGraph</strong> for mathematical precision and error detection.</li>
        <li>Deployed containerized APIs on <strong>Azure Kubernetes Service</strong> with human-in-the-loop review.</li>
        <li>Mentored audit teams and drove AI adoption across multiple departments.</li>
      </ul>
    </div>
  </div>

  <!-- Siemens Healthcare -->
  <div class="timeline-entry">
    <div class="timeline-date">Oct 2019 – Oct 2023</div>
    <button class="collapsible">Siemens Healthcare – Senior R&D Engineer (Data Science)</button>
    <div class="content-collapsible">
      <ul>
        <li>Developed a <strong>patent-pending unsupervised clustering algorithm</strong> for CT imaging protocols.</li>
        <li>Built <strong>YOLO-based pathology detection models</strong> achieving 95% diagnostic accuracy.</li>
        <li>Created a <strong>conditional pix2pix GAN</strong> for CT image generation in low-data settings.</li>
        <li>Designed demand forecasting systems to optimize hospital staffing and patient care.</li>
      </ul>
    </div>
  </div>

  <!-- Sequretek -->
  <div class="timeline-entry">
    <div class="timeline-date">Sep 2018 – Oct 2019</div>
    <button class="collapsible">Sequretek – Senior Research Data Scientist</button>
    <div class="content-collapsible">
      <ul>
        <li>Developed a <strong>Managed Detection & Response MVP</strong> predicting cyber threats with 95% accuracy.</li>
        <li>Designed a multi-model training framework to detect a wide spectrum of attacks.</li>
      </ul>
    </div>
  </div>

  <!-- Algonox -->
  <div class="timeline-entry">
    <div class="timeline-date">Jun 2018 – Sep 2018</div>
    <button class="collapsible">Algonox – ML/AI Engineer</button>
    <div class="content-collapsible">
      <ul>
        <li>Created a <strong>text extraction pipeline</strong> for structured data from unstructured PDFs.</li>
        <li>Built a <strong>semantic similarity algorithm</strong> improving NLP accuracy by 75%.</li>
      </ul>
    </div>
  </div>

  <!-- Micro Focus -->
  <div class="timeline-entry">
    <div class="timeline-date">Jun 2015 – Jun 2018</div>
    <button class="collapsible">Micro Focus – Technology Consultant</button>
    <div class="content-collapsible">
      <ul>
        <li>Led automation projects reducing server patching time by <strong>95%</strong> across global infrastructures.</li>
        <li>Deployed secure, scalable cloud infrastructure solutions tailored to client compliance requirements.</li>
      </ul>
    </div>
  </div>

  <!-- Education NIT -->
  <div class="timeline-entry">
    <div class="timeline-date">2011 – 2015</div>
    <button class="collapsible">NIT Silchar – B.Tech Electronics & Communications</button>
    <div class="content-collapsible">
      <ul>
        <li>Specialized in electronics and communication systems.</li>
        <li>Participated in multiple AI & ML-related projects and research.</li>
      </ul>
    </div>
  </div>

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
