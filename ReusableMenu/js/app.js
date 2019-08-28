
// document.addEventListener("DOMContentLoaded", function (event) {
//     const hamburger = document.querySelector('.hamburger');
//     const navlinks = document.querySelector('.nav-links');
//     const links = document.querySelectorAll('.nav-links li');
//     hamburger.addEventListener('click', () => {
//         navlinks.classList.toggle("open");
//         links.forEach(link => {
//             link.classList.toggle("fade");
//         });
//     });
// });

function toggleMenu() {
    const navlinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    navlinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
}

//   function ready(callback){
//     // in case the document is already rendered
//     //if (document.readyState!='loading') callback();
//     // modern browsers
//     //else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
//     // IE <= 8
//     document.addEventListener('onreadystatechange', function(){
//         if (document.readyState=='complete') callback();
//     });
// }

// ready(function(){
//     // do something
//     const hamburger = document.querySelector('.hamburger');

// });