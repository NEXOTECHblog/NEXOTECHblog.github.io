// Ativar animação nos subtítulos ao rolar
window.addEventListener("scroll", () => {
  const titulos = document.querySelectorAll("h2");
  titulos.forEach(h2 => {
    const pos = h2.getBoundingClientRect().top;
    const tela = window.innerHeight;
    if (pos < tela - 120) {
      h2.classList.add("visivel");
    }
  });
});

// Classe de animação
