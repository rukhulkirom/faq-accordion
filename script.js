const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach((btn) => {
  // Event saat tombol di klik
  btn.addEventListener("click", toggleAccordion);

  // Event saat tombol mendapatkan focus (misal dari Tab navigation)
  btn.addEventListener("focus", toggleAccordion);
});

function toggleAccordion() {
  const isExpanded = this.getAttribute("aria-expanded") === "true";
  const accordionDesc = this.nextElementSibling;

  // Tutup semua accordion kecuali yang sedang diakses
  accordionButtons.forEach((otherBtn) => {
    if (otherBtn !== this) {
      otherBtn.setAttribute("aria-expanded", "false");
      otherBtn.nextElementSibling.style.maxHeight = null;
      otherBtn.nextElementSibling.setAttribute("aria-hidden", "true");
      otherBtn.querySelector(".plus-icon").style.display = "block";
      otherBtn.querySelector(".minus-icon").style.display = "none";
    }
  });

  // Buka accordion saat tombol mendapatkan focus
  if (!isExpanded) {
    this.setAttribute("aria-expanded", "true");
    accordionDesc.style.maxHeight = accordionDesc.scrollHeight + "px";
    accordionDesc.setAttribute("aria-hidden", "false");
    this.querySelector(".plus-icon").style.display = "none";
    this.querySelector(".minus-icon").style.display = "block";
  }
}
