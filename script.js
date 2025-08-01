const menuBtn = document.querySelector('#menu-btn')

const navItems = document.querySelector('.nav-items')

menuBtn.addEventListener('click', () => {
    navItems.classList.toggle('active-nav')
})