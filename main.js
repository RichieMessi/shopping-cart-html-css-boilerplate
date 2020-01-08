let ctaBtnArraow = document.querySelector('.main-home-section__cta-arrow')
let ctaBtn = document.querySelector('.main-home-section__cta-btn')

window.onload = () => {

    ctaBtn.addEventListener('mouseenter', function() {
        ctaBtnArraow.classList.add('move-right')
    })

    ctaBtn.addEventListener('mouseleave', function() {
        ctaBtnArraow.classList.remove('move-right')
    })
}