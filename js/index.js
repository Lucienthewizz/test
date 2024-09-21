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

/* ----- Read More: Learning Path ----- */
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    const moreText = this.closest('p').querySelector('.more-text');
    
    if (moreText.style.display === "inline") {
      moreText.style.display = "none";
      this.querySelector('a').innerText = "Read More";
    } else {
      moreText.style.display = "inline";
      this.querySelector('a').innerText = "Read Less";
    }
  });
});

/* ----- Swiper JS ----- */
    const swiper = new Swiper('.swiper', {
      autoHeight: true,
      loop: true,
      autoplay: true,
      speed: 900,
      keyboard: {
        enabled: true,
      },
      mousewheel: true,

      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

/* ------ Scroll To Top ------ */
window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scrollTop')
        scroll.classList.toggle('active', window.scrollY > 4000)
    });

    function backTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
