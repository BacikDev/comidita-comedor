const containerTestimonials = document.querySelector('.container-testimonials');
const allCardTestimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

let currentIndex = 0;
const totalCardTestimonials = allCardTestimonials.length;
let autoPlayInterval;

// Funcion para actualizar la posicion dle carrusel
const updateCarousel = ()=>{
    const offset = currentIndex * containerTestimonials.clientWidth;
    containerTestimonials.scrollTo({
        left: offset,
        behavior: 'smooth'
    })
}

// botón siguiente
nextBtn.addEventListener('click', ()=>{
    currentIndex = (currentIndex + 1) % totalCardTestimonials;
    updateCarousel();
    resetAutoplay();
})

// Boton anterior
prevBtn.addEventListener('click', ()=>{
    currentIndex = (currentIndex - 1 + totalCardTestimonials) %
    totalCardTestimonials;
    updateCarousel();
    resetAutoplay();
})

// Activar el autoplay cada 5 segundos
function startAutoplay(){
    autoPlayInterval = setInterval(()=>{
    currentIndex = (currentIndex + 1) % totalCardTestimonials;
    updateCarousel();}, 5000);
}

// Reiniciar autoplay cuando se navega manualmente
function resetAutoplay(){
    clearInterval(autoPlayInterval);
    startAutoplay();
}

// Iniciar autoplay
startAutoplay();