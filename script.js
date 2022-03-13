const menuItem = document.getElementById('menu-item');

menuItem.addEventListener('mouseover', addActive(), false);

menuItem.addEventListener('mouseout', removeActive(), false);

function addActive() {
    menuItem.classList.add('active');
}

function removeActive() {
    menuItem.classList.remove('active');
}