// Your code goes here

// #1 mouseover event listener
const navList = document.querySelectorAll('nav a');
// console.log(navList);
navList.forEach((link, i) => {
    link.addEventListener("mouseover", function() {
        link.style.color = '#B1D5E1';

        setTimeout(function() {
            link.style.color = "#000";
        }, 500);
    }, false);
});


