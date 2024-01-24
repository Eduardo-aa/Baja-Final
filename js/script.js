// Adiciona um evento de rolagem à janela (quando o usuário rola a página)
window.addEventListener("scroll", () => {

  // Seleciona o elemento com o id "carro-fundo" e ajusta a propriedade marginLeft com base no valor de rolagem vertical (scrollY) da janela
  document.querySelector("#carro-fundo").style.marginLeft = `${window.scrollY}px`;
});

// Define uma função chamada pcar
function pcar() {
  
  // Obtém referências aos elementos com os ids "img", "car-ano" e "name-car"
  img = document.getElementById("img");
  text = document.getElementById("car-ano");
  text2 = document.getElementById("name-car");
  
  // Atualiza o texto do elemento com id "name-car" para "Anne"
  text2.innerText = "Anne";
  
  // Atualiza o texto do elemento com id "car-ano" para "2021"
  text.innerText = "2021";
  
  // Atualiza o atributo src da imagem com id "img" para o caminho da imagem "Anne.png"
  img.src = "imagem/Anne.png";
}

// Define uma função chamada scar
function scar() {

  // Obtém referências aos elementos com os ids "img", "car-ano" e "name-car"
  img = document.getElementById("img");
  text = document.getElementById("car-ano");
  text3 = document.getElementById("name-car");

  // Atualiza o texto do elemento com id "name-car" para "Hero"
  text3.innerText = "Hero";

  // Atualiza o texto do elemento com id "car-ano" para "2019"
  text.innerText = "2019";

  // Atualiza o atributo src da imagem com id "img" para o caminho da imagem "Hero.png"
  img.src = "imagem/Hero.png";
}

// Define uma função chamada tcar
function tcar() {

  // Obtém referências aos elementos com os ids "img", "car-ano" e "name-car"
  img = document.getElementById("img");
  text = document.getElementById("car-ano");
  text3 = document.getElementById("name-car");

// Atualiza o texto do elemento com id "name-car" para "Cristine"
  text3.innerText = "Cristine";

  // Atualiza o texto do elemento com id "car-ano" para "2017"
  text.innerText = "2017";

  // Atualiza o atributo src da imagem com id "img" para o caminho da imagem "Cristine.png"
  img.src = "imagem/Cristine.png";
}

// Define uma função chamada qcar
function qcar() {

  // Obtém referências aos elementos com os ids "img", "car-ano" e "name-car"
  img = document.getElementById("img");
  text = document.getElementById("car-ano");
  text3 = document.getElementById("name-car");

  // Atualiza o texto do elemento com id "name-car" para "Denso"
  text3.innerText = "Denso";

   // Atualiza o texto do elemento com id "car-ano" para "2015"
  text.innerText = "2015";

  // Atualiza o atributo src da imagem com id "img" para o caminho da imagem "Denso.png"
  img.src = "imagem/Denso.png";
}

// Adiciona um evento de clique ao elemento com id "menu-icon" e chama a função Click() quando ocorre o clique
document.getElementById("menu-icon").addEventListener("click", Click());

// Define a função Click, que exibe a barra de navegação alterando o estilo display para "flex"
function Click() {
  document.querySelector(".navbar-1").style.display = "flex";
}

// Adiciona um evento de clique ao elemento com id "close-icon" e chama a função Click1() quando ocorre o clique
document.getElementById("close-icon").addEventListener("click", Click1());

// Define a função Click1, que oculta a barra de navegação alterando o estilo display para "none"
function Click1() {
  document.querySelector(".navbar-1").style.display = "none";
}
