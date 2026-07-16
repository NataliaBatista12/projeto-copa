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

// ===================== Menu ativo conforme a seção visível =====================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".site-header .nav-link");

function marcarLinkAtivo() {
  let atual = "";
  const offset = 120;

  sections.forEach((section) => {
    const topo = section.offsetTop - offset;
    if (window.scrollY >= topo) {
      atual = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${atual}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", marcarLinkAtivo);
window.addEventListener("load", marcarLinkAtivo);