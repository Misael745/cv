document.addEventListener("DOMContentLoaded", () => {
  // Animación de círculos
  const circles = document.querySelectorAll(".circular");
  circles.forEach(circle => {
    const inner = circle.querySelector(".inner");
    const outer = circle.querySelector(".outer");
    const percentage = parseInt(circle.dataset.value, 10) || 0;
    const color = circle.dataset.color || "#0d6efd";
    let current = 0;
    const speed = 12;
    const step = () => {
      if (current >= percentage) {
        inner.textContent = percentage + "%";
        outer.style.background = `conic-gradient(${color} ${percentage*3.6}deg, #e9ecef 0deg)`;
        return;
      }
      current++;
      inner.textContent = current + "%";
      outer.style.background = `conic-gradient(${color} ${current*3.6}deg, #e9ecef 0deg)`;
      setTimeout(step, speed);
    };
    step();
  });

  // Animación barras de idiomas
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach(bar => {
    const width = bar.style.width || "0%";
    const color = bar.dataset.color || "#0d6efd";
    bar.style.width = "0%";
    bar.style.backgroundColor = color;
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });

  // ---------- DESCARGAR CV ----------
  const downloadBtn = document.getElementById("download-cv");
  downloadBtn.addEventListener("click", () => {
    const element = document.getElementById("cv-content");
    const opt = {
      margin: 0.5,
      filename: "CV_Misael_Guzman.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, logging: true, scrollY: -window.scrollY },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
    };
    html2pdf().set(opt).from(element).save();
  });

  // ---------- DESCARGAR CERTIFICADOS ----------
  const certBtns = document.querySelectorAll(".btn-certificado");
  certBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.dataset.url;
      const nombre = btn.dataset.nombre;
      const link = document.createElement("a");
      link.href = url;
      link.download = nombre;
      link.click();
    });
  });
});
