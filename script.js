/* =======================
   PARTE 3 - JS (BLOG NEXO TECH)
   ======================= */

/* ---- Rolagem automática para a seção de artigos ---- */
const botaoVerArtigos = document.getElementById("ver-artigos");
if (botaoVerArtigos) {
  botaoVerArtigos.addEventListener("click", () => {
    const secaoPosts = document.querySelector(".posts");
    if (secaoPosts) {
      secaoPosts.scrollIntoView({ behavior: "smooth" });
    }
  });
}

/* ---- Animação dos posts ao rolar a página ---- */
window.addEventListener("scroll", () => {
  const posts = document.querySelectorAll(".post-card, .post");
  posts.forEach(post => {
    const pos = post.getBoundingClientRect().top;
    const tela = window.innerHeight;

    if (pos < tela - 100) {
      post.classList.add("visivel");
    }
  });
});

/* ============================
   LISTAGEM AUTOMÁTICA DE POSTS NO INDEX
   ============================ */

const lista = document.getElementById("lista-posts");

if (lista) {
  fetch("posts/posts.json")  // Caminho correto no GitHub Pages
    .then(res => res.json())
    .then(posts => {
      lista.innerHTML = ""; // limpa qualquer coisa padrão

      posts.forEach(post => {
        const artigo = document.createElement("article");
        artigo.classList.add("post-card");

        artigo.innerHTML = `
          <img src="${post.image}" alt="${post.title}">
          <h3>${post.title}</h3>
          <p>${post.summary}</p>
          <p class="meta">Por ${post.author} — ${post.date}</p>
          <a href="posts/${post.link}" class="btn">Ler mais</a>
        `;

        lista.appendChild(artigo);
      });
    })
    .catch(err => console.error("Erro ao carregar posts.json:", err));
}
