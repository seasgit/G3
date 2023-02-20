const eleNavigation = document.querySelector(".navigation");
const btnTop =  document.querySelector('.btn-top');

// par défaut le bouton n'est pas chargé dans le body
btnTop.style.display = "none";

document.addEventListener('scroll', () => {

    if ( window.scrollY > 100 ) {
        eleNavigation.style.opacity = 0;
        btnTop.style.display = "block";
    }else {
        eleNavigation.style.opacity = 1;
        btnTop.style.display = "none";
    }

})

btnTop.addEventListener("mousedown", () => {
    window.scrollTo(
        {
            top: 0,
            behavior: 'smooth'
        }
    );
})

