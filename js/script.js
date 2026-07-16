// ===================== Ano atual no rodapé =====================
document.getElementById("anoAtual").textContent = new Date().getFullYear();

// ===================== Botão "voltar ao topo" =====================
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

