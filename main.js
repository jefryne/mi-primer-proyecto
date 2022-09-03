document.querySelector('.menu_btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new_cards', { delay: 500 });
ScrollReveal().reveal('.cards_banner_one', { delay: 500 });
ScrollReveal().reveal('.cards_banner_two', { delay: 500 });
