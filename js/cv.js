document.addEventListener("DOMContentLoaded", () => {
  // Animación de círculos
  const circles = document.querySelectorAll(".circular");
  circles.forEach(circle => {
    const inner = circle.querySelector(".inner");
    const outer = circle.querySelector(".outer");
    const percentage = parseInt(circle.dataset.value) || 0;
    const color = circle.dataset.color || "#0d6efd";
    let current = 0;
    const step = () => {
      if (current >= percentage) {
        inner.textContent = percentage + "%";
        outer.style.background = `conic-gradient(${color} ${percentage * 3.6}deg, #e9ecef 0deg)`;
        return;
      }
      current++;
      inner.textContent = current + "%";
      outer.style.background = `conic-gradient(${color} ${current * 3.6}deg, #e9ecef 0deg)`;
      setTimeout(step, 12);
    };
    step();
  });

  // Animación de barras de idiomas
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach(bar => {
    const width = bar.style.width || "0%";
    const color = bar.dataset.color || "#0d6efd";
    bar.style.width = "0%";
    bar.style.backgroundColor = color;
    setTimeout(() => { bar.style.width = width; }, 100);
  });

  // ---------- Descarga del CV ----------
  const btnDownload = document.getElementById("download-cv");
  btnDownload.addEventListener("click", async () => {
    const element = document.getElementById("cv-content");
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jspdf.jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save("CV_Misael_Guzman.pdf");
  });

  // ---------- Descarga de certificados ----------
  document.querySelectorAll('.btn-certificado').forEach(btn => {
    btn.addEventListener('click', () => {
      const url = btn.dataset.url;
      const nombre = btn.dataset.nombre;
      const link = document.createElement('a');
      link.href = url;
      link.download = nombre;
      link.click();
    });
  });
});
