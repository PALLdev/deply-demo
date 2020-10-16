    // evento para mostrar y desaparecer mi DRAWER cada vez que haga click.
    // con un toggle agrego o quito la clase show a mi DRAWER, lo que hara que apareza y desaparesca. 
document.getElementById('drawer').addEventListener('click', () => {
    document.getElementById('menu-items').classList.toggle('show')
})
    // APLICANDO SCROLL REVEAL A MIS ELEMENTOS
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.second-banner', { delay: 500 });
ScrollReveal().reveal('.third-banner', { delay: 500 });


