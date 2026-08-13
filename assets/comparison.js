document.querySelectorAll("[data-image-comparison]").forEach((comparison) => {
  const range = comparison.querySelector(".comparison-range");

  if (!range) {
    return;
  }

  const updatePosition = () => {
    comparison.style.setProperty("--position", `${range.value}%`);
  };

  range.addEventListener("input", updatePosition);
  updatePosition();
  comparison.classList.add("comparison-ready");
});
