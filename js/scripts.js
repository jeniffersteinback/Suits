// Selecionar os elementos dos slides
const slides = document.querySelectorAll(".banner");
console.log(slides);

// 
const dots = document.querySelectorAll(".dot");
console.log(slides);

// Variável de controle
let slideIndex = 1;

function showSlides(){
    console.log(slides)
    for(let i=0; i <slides.length; i++){
        slides[i].classList.remove("active")
        dots[i].classList.remove("active")
    }

    slideIndex++; //avançando a variavel
    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex -1].classList.add("active")
    dots[slideIndex -1].classList.add("active")

    setTimeout(showSlides, 3000)
}



// Inicialização
showSlides()










































// // DOM
// // Navegar no documento html

// const brand = document.querySelector("#brand");
// console.log(brand);

// brand.addEventListener('click', function(event){
//     // console.log("testando o click");
//     // console.log(event.target)
//     event.target.style.color = "blue"
// } )