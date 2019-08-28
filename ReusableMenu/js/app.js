function toggleMenuOpen() {
    const navlinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    navlinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
}