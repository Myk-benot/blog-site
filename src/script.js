

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-icon');
    const menuLinks = document.querySelector('.links');

    menuToggle.addEventListener('click', function () {
        menuLinks.classList.toggle('show-menu'); // Toggle the show-menu class on the menu links
    });
});
