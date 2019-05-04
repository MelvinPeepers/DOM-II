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

// #3 dblclick event listener: text changes color on all h2 elements
const headerTwo = document.querySelectorAll('h2');
// console.log(navList);
headerTwo.forEach((header, i) => {
    header.addEventListener("dblclick", function() {
        header.style.color = '#FFBC4E';
    });
});

// #4 A resize event in the footer
const heightWindow = document.getElementById('height');
const widthWindow = document.getElementById('width');
// console.log(heightWindow);
// console.log(widthWindow);
window.addEventListener('resize', function() {
    heightWindow.textContent = window.innerHeight;
    widthWindow.textContent = window.innerWidth;
});


// #5 Select text in the footer
function logSelection(event) {
    const selectText = document.getElementById('selectText');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    selectText.textContent = `You selected: ${selection}`;
  }
  
  const input = document.querySelector('input');
  input.addEventListener('select', logSelection);

