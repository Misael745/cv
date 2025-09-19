document.addEventListener("DOMContentLoaded", () => {
  // ---------- Animación de círculos ----------
  const circles = document.querySelectorAll(".circular");

  circles.forEach(circle => {
    const inner = circle.querySelector(".inner");
    const outer = circle.querySelector(".outer");
    const percentage = parseInt(circle.dataset.value, 10) || 0;
    const color = circle.dataset.color || "#0d6efd";

    let current = 0;
    const speed = 12; // velocidad en ms
    const step = () => {
      if (current >= percentage) {
        inner.textContent = percentage + "%";
        outer.style.background = `conic-gradient(${color} ${percentage * 3.6}deg, #e9ecef 0deg)`;
        return;
      }
      current++;
      inner.textContent = current + "%";
      outer.style.background = `conic-gradient(${color} ${current * 3.6}deg, #e9ecef 0deg)`;
      setTimeout(step, speed);
    };
    step();
  });

  // ---------- Animación de barras de idiomas ----------
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach(bar => {
    const width = bar.style.width || "0%";
    const color = bar.dataset.color || "#0d6efd";
    bar.style.width = "0%";
    bar.style.backgroundColor = color;

    setTimeout(() => {
      bar.style.width = width;
    }, 100); // pequeño delay para animación suave
  });
});
