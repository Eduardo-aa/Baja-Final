window.addEventListener("scroll", () => {
  document.querySelector(
    "#carro-fundo"
  ).style.marginLeft = `${window.scrollY}px`;
});

function pcar() {
  img = document.getElementById("img");
  text = document.getElementById("car-ano");
  text2 = document.getElementById("name-car");
  text2.innerText = "Anne";
  text.innerText = "2021";
  img.src = "imagem/Anne.png";
}
function scar() {
  img = document.getElementById("img");
  text = document.getElementById("car-ano");
  text3 = document.getElementById("name-car");
  text3.innerText = "Hero";
  text.innerText = "2019";
  img.src = "imagem/Hero.png";
}
function tcar() {
  img = document.getElementById("img");
  text = document.getElementById("car-ano");
  text3 = document.getElementById("name-car");
  text3.innerText = "Cristine";
  text.innerText = "2017";
  img.src = "imagem/Cristine.png";
}
function qcar() {
  img = document.getElementById("img");
  text = document.getElementById("car-ano");
  text3 = document.getElementById("name-car");
  text3.innerText = "Denso";
  text.innerText = "2015";
  img.src = "imagem/Denso.png";
}
document.getElementById("menu-icon").addEventListener("click", Click());
function Click() {
  document.querySelector(".navbar-1").style.display = "flex";
}
document.getElementById("close-icon").addEventListener("click", Click1());
function Click1() {
  document.querySelector(".navbar-1").style.display = "none";
}
