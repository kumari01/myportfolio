var typed = new Typed(('#skill'),{
    strings :['Frontend Developer','UI Designer','Programmer'],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
});
document.querySelector("form").addEventListener("submit", function(event) {
    setTimeout(() => {
        this.reset();
    }, 1000);
});

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section'); 
    const navLinks = document.querySelectorAll('.navbar a'); 

    let currentSection = ''; 

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});
