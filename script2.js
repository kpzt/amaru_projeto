// PEGAR PARÂMETRO DA URL
const urlParams = new URLSearchParams(window.location.search);
const projeto = urlParams.get("projeto");

// ELEMENTOS
const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const galeria = document.getElementById("galeria");
const imagemDestaque = document.getElementById("imagem-destaque");
const diferenciais = document.querySelector(".diferenciais");

// MODAL
const modal = document.getElementById("modal");
const imgModal = document.getElementById("imgModal");
const fechar = document.getElementById("fechar");

// DADOS DOS PROJETOS
const dados = {

  telhado: {
    titulo: "Telhado",
    descricao: "Estruturas de telhado em madeira de eucalipto tratado, ideais para casas e áreas externas. Alta resistência contra chuva, sol e desgaste do tempo.",
    imagens: ["img1.jpeg","img2.jpeg","img3.jpeg","img1.jpeg","img2.jpeg"],
    diferenciais: [
      "Estrutura reforçada para telhados",
      "Alta resistência climática",
      "Madeira tratada contra cupins",
      "Longa durabilidade",
      "Acabamento profissional"
    ]
  },

  playground: {
    titulo: "Playground",
    descricao: "Playgrounds seguros e personalizados, ideais para crianças em áreas de lazer.",
    imagens: ["img2.jpeg","img3.jpeg","img2.jpeg","img3.jpeg"],
    diferenciais: [
      "Estrutura segura para crianças",
      "Madeira resistente",
      "Design personalizado",
      "Ideal para áreas externas",
      "Alta durabilidade"
    ]
  },

  pergolado: {
    titulo: "Pergolado",
    descricao: "Pergolados modernos que valorizam áreas externas como jardins e áreas gourmet.",
    imagens: ["img3.jpeg","img1.jpeg","img3.jpeg","img1.jpeg"],
    diferenciais: [
      "Design moderno",
      "Ideal para jardins e áreas gourmet",
      "Resistente ao tempo",
      "Acabamento premium",
      "Valoriza o ambiente"
    ]
  },

  personalizado: {
    titulo: "Projeto Personalizado",
    descricao: "Projetos feitos sob medida para atender qualquer necessidade com qualidade e acabamento premium.",
    imagens: ["img6.jpeg","img1.jpeg","img6.jpeg","img1.jpeg"],
    diferenciais: [
      "100% sob medida",
      "Alta qualidade",
      "Madeira tratada",
      "Execução profissional",
      "Acabamento superior"
    ]
  }

};

// SE EXISTIR PROJETO
if (dados[projeto]) {

  // TÍTULO E DESCRIÇÃO
  titulo.innerText = dados[projeto].titulo;
  descricao.innerText = dados[projeto].descricao;

  // IMAGEM DE DESTAQUE
  imagemDestaque.src = "imagens/" + dados[projeto].imagens[0];

  // LIMPAR GALERIA
  galeria.innerHTML = "";

  // ADICIONAR IMAGENS COM CLICK (MODAL)
  dados[projeto].imagens.forEach(img => {
    const imagem = document.createElement("img");
    imagem.src = "imagens/" + img;
    imagem.alt = "Projeto de madeira";

    imagem.addEventListener("click", () => {
      modal.style.display = "block";
      imgModal.src = imagem.src;
    });

    galeria.appendChild(imagem);
  });

  // DIFERENCIAIS DINÂMICOS
  if (dados[projeto].diferenciais) {
    diferenciais.innerHTML = "<h2>Diferenciais do Projeto</h2>";

    dados[projeto].diferenciais.forEach(item => {
      const p = document.createElement("p");
      p.innerText = "✔ " + item;
      diferenciais.appendChild(p);
    });
  }
}

// FECHAR MODAL
fechar.onclick = () => {
  modal.style.display = "none";
};

// FECHAR CLICANDO FORA
modal.onclick = () => {
  modal.style.display = "none";
};