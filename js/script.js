const toggleButton = document.querySelector('.header__toggle');
const navBar = document.getElementById('header__navbar');

let acumNavBar = 0;

toggleButton.addEventListener('click', function () {
    if (acumNavBar === 0) {
        navBar.style.display = 'block';
        acumNavBar++;
    } else {
        navBar.style.display = 'none';
        acumNavBar--;
    }
});