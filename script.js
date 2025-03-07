var typed = new Typed(('#skill'),{
    strings :['Frontend Developer','UI Designer','Programmer'],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
});
document.querySelector("form").addEventListener("submit", function(event) {
    setTimeout(() => {
        this.reset();
    }, 1000); // Reset form after 1 second to ensure submission
});

