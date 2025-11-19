/* =======================
   PARTE 3 - JS (BLOG NEXO TECH)
   ======================= */

/* ---- Rolagem automática para os artigos ---- */
// Quando clicar no botão “Ver artigos”, desce até a seção de posts
document.getElementById("ver-artigos").addEventListener("click", () => {
  const secaoPosts = document.querySelector(".posts");
  secaoPosts.scrollIntoView({ behavior: "smooth" });
});

/* ---- Lugar reservado para função de modo escuro/claro ---- */
// Exemplo de como poderia funcionar futuramente:
// function alternarTema() {
//   document.body.classList.toggle("tema-claro");
// }

/* ---- Lugar reservado para buscar artigos ---- */
// Aqui futuramente pode haver uma barra de pesquisa:
// function buscarArtigos() {
//   let termo = document.getElementById("campoBusca").value.toLowerCase();
//   // Lógica para filtrar os artigos
// }

/* ---- Lugar reservado para carregar posts dinamicamente ---- */
// Aqui será possível conectar com um banco de dados, JSON, ou API
// function carregarArtigos() {
//   fetch("posts.json")
//     .then(response => response.json())
//     .then(dados => {
//       // Código para gerar os cards dinamicamente
//     });
// }

/* ---- Efeitos visuais adicionais (hover e animação ao rolar) ---- */
// Anima os posts conforme aparecem na tela
window.addEventListener("scroll", () => {
  const posts = document.querySelectorAll(".post");
  posts.forEach(post => {
    const posicao = post.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;
    if (posicao < alturaTela - 100) {
      post.classList.add("visivel");
    }
  });
});

/* ---- Adiciona animação quando o post se torna visível ---- */
// CSS para essa classe pode ser adicionado no futuro:
// .visivel { transform: translateY(0); opacity: 1; transition: all 0.5s ease; }
// ============================
// AUTO-LISTAGEM DE POSTS
// ============================

// Caminho do JSON
const postsURL = "posts/posts.json";

// Elemento onde os posts serão listados
const lista = document.getElementById("lista-posts");

fetch(postsURL)
  .then(res => res.json())
  .then(posts => {
    lista.innerHTML = ""; // limpa posts padrão

    posts.forEach(post => {
      const artigo = document.createElement("article");
      artigo.classList.add("post");

      artigo.innerHTML = `
        <img src="${post.image}" alt="Imagem do artigo">
        <h3>${post.title}</h3>
        <p>${post.summary}</p>
        <a href="${post.link}" class="botao-leia">Leia mais</a>
      `;

      lista.appendChild(artigo);
    });
  })
  .catch(err => {
    lista.innerHTML = "<p>Erro ao carregar posts...</p>";
    console.error(err);
  });
