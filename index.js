const brightnessBar = document.querySelector("#brightness-bar");
const contrastBar = document.querySelector("#contrast-bar");
const saturationBar = document.querySelector("#saturation-bar");
const hueBar = document.querySelector("#hue-bar");
const blurBar = document.querySelector("#blur-bar");
// const exampleImage = document.querySelector(".example-image");
const root = document.documentElement;

const upadatesFilters = () => {
  root.style.setProperty("--brightness", brightnessBar.value + "%");
  root.style.setProperty("--contrast", contrastBar.value + "%");
  root.style.setProperty("--saturation", saturationBar.value + "%");
  root.style.setProperty("--hue", hueBar.value + "deg");
  root.style.setProperty("--blur", blurBar.value + "px");
};

// rozwiązanie bez zmiennych w cssie
// const upadatesFilters = () => {
//   exampleImage.style.filter = `
//   brightness(${brightnessBar.value}%)
//   contrast(${contrastBar.value}%)
//   saturate(${saturationBar.value}%)
//   hue-rotate(${hueBar.value}deg)
//   blur(${blurBar.value}px)`;
// };

[brightnessBar, contrastBar, saturationBar, hueBar, blurBar].forEach((bar) => {
  bar.addEventListener("input", upadatesFilters);
});

// scroller
document.querySelector(".btn-scroller").addEventListener("click", (e) => {
  document
    .querySelector(".example-section")
    .scrollIntoView({ behavior: "smooth" });
});
