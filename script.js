const mobileView = document.getElementsByClassName('mobile-view')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

mobileView.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

