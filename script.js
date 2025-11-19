/* =======================
   NEXO TECH - SCRIPT PRINCIPAL
======================= */

/* ---- Rolagem automática ---- */
const botao = document.getElementById("ver-artigos");
if (botao) {
  botao.addEventListener("click", () => {
    document.getElementById("lista-posts").scrollIntoView({
      behavior: "smooth"
    });
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
  fetch('/posts/posts.json')
    .then(res => res.json())
    .then(posts => {
      container.innerHTML = ""; // limpa "Carregando..."


      posts.forEach(post => {
        const card = document.createElement("article");
        card.classList.add("post-card");

        card.innerHTML = `
          <img src="${post.image}" alt="${post.title}">
          <h3>${post.title}</h3>
          <p>${post.summary}</p>
          <p style="margin-left:1rem; opacity:.7;">Por ${post.author} — ${post.date}</p>
          <a class="btn" href="${post.link}">Ler mais</a>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => {
      container.innerHTML = "<p style='text-align:center;color:red'>Erro ao carregar posts.</p>";
      console.error(err);
    });
}




