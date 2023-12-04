window.addEventListener(("scroll"),()=>{
    document.querySelector("#").style.marginTop = `${window.scrollY * 1}px`
    document.querySelector("#carro-fundo").style.marginLeft = `${ window.scrollY * 2}px`
  
})

function pcar(){
    img = document.getElementById('img')
    text = document.getElementById('car-ano')
    text.innerText = '2021' 
    img.src = ('imagem/Anne.png')
}
function scar(){
    img = document.getElementById('img')
    text = document.getElementById('car-ano')
    text.innerText = '2019' 
    img.src = ('imagem/Hero.png')
}
function tcar(){
    img = document.getElementById('img')
    text = document.getElementById('car-ano')
    text.innerText = '2017' 
    img.src = ('imagem/Cristine.png')
}
function qcar(){
    img = document.getElementById('img')
    text = document.getElementById('car-ano')
    text.innerText = '2015' 
    img.src = ('imagem/Denso.png')
}