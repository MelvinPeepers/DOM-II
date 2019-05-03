// Your code goes here

// #1 mouseover event listener on nav list
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


// #2 click event listener on buttons
const destinationBtn = document.querySelectorAll('.btn');
//console.log(destinationBtn);
destinationBtn.forEach((btn, i) => {
    btn.addEventListener("click", function() {
        alert('Thank you for clicking!');
    },
        {once: true}
    );
});

// #3 mouseover event listener: text changes color on all h2 elements
const headerTwo = document.querySelectorAll('h2');
// console.log(navList);
headerTwo.forEach((link, i) => {
    link.addEventListener("mouseover", function() {
        link.style.color = '#FFBC4E';

        setTimeout(function() {
            link.style.color = "#000";
        }, 600);
    }, false);
});