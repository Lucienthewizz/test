const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

/* -------- Carousel Learning Path ------- */
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselCards = document.getElementById('carouselCards');

prevBtn.addEventListener('click', () => {
    carouselCards.scrollBy({
        left: -carouselCards.clientWidth,
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    carouselCards.scrollBy({
        left: carouselCards.clientWidth,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const moreText = this.previousElementSibling;
      if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        this.innerText = "Read More";
      } else {
        moreText.style.display = "inline";
        this.innerText = "Read Less";
      }
    });
});

/* ------ Scroll To Top ------ */
window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scrollTop')
        scroll.classList.toggle('active', window.scrollY > 2000)
    });

    function backTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
