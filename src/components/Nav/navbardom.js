function responsive (){
    const hamburguer = document.getElementById('hamburguer');
    const navLinks = document.getElementById('nav-elements');
    const links = document.querySelectorAll('.navLink');



    hamburguer.addEventListener('click', () => {
        navLinks.classList.toggle('hide');
        hamburguer.classList.toggle('lines-rotate');
        
    });

    function handleLinkClick() {
        navLinks.classList.toggle('hide');
    }

    // Agregar el evento de clic a cada enlace
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', handleLinkClick);
    }
    
}
export default {responsive}