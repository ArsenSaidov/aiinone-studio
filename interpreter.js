
document.addEventListener("DOMContentLoaded", () => {
  fetch("light-spec.anie")
    .then(r => r.text())
    .then(code => {
      const main = document.getElementById("main");
      const lines = code.split("\n").filter(x => x.trim().startsWith("-"));
      const titleLine = lines.find(l => l.includes("Title"));
      const title = titleLine ? titleLine.split(":")[1].trim().replace(/"/g, '') : "Aiinone Interface";
      const container = document.createElement("div");
      container.innerHTML = `<h1 style='color:#00d9ff;'>${title}</h1><p>This is a live-rendered .anie scroll.</p>`;
      container.style.padding = "40px";
      main.appendChild(container);
    });
});
