/* =======================
   NEXO TECH - SCRIPT PRINCIPAL
======================= */

/* ---- Rolagem automática ---- */
const botao = document.getElementById("ver-artigos");
if (botao) {
  botao.addEventListener("click", () => {
    const secao = document.getElementById("lista-posts");
    if (secao) {
      secao.scrollIntoView({ behavior: "smooth" });
    }
  });
}

/* ---- Animação ao rolar ---- */
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".post-card");
  cards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      card.classList.add("visivel");
    }
  });
});

/* ---- Carregamento automático dos posts ---- */
const container = document.getElementById("lista-posts");

if (container) {
  fetch("posts.json")
    .then(res => {
      if (!res.ok) {
        throw new Error("Erro ao carregar JSON de posts");
      }
      return res.json();
    })
    .then(posts => {
      container.innerHTML = ""; // Remove "Carregando..."

      posts.forEach(post => {
        const card = document.createElement("article");
        card.classList.add("post-card");

        card.innerHTML = `
          <img src="${post.image}" alt="${post.title}">
          <h3>${post.title}</h3>
          <p>${post.summary}</p>
          <p style="margin-left:1rem; opacity:.7;">Por ${post.author} — ${post.date}</p>
          <a class="btn" href="/posts/${post.link}">Ler mais</a>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Erro ao carregar posts:", err);
      container.innerHTML = `
        <p style="text-align:center;color:red;font-size:1.1rem;">
          Erro ao carregar posts.
        </p>`;
    });
}

