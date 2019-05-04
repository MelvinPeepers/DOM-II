// Your code goes here


const navList = document.querySelectorAll('nav a');
// console.log(navList);


const destinationBtn = document.querySelectorAll('.btn');
//console.log(destinationBtn);


const headerTwo = document.querySelectorAll('h2');
// console.log(headerTwo);


const heightWindow = document.getElementById('height');
const widthWindow = document.getElementById('width');
// console.log(heightWindow);
// console.log(widthWindow);


const borderColor = document.querySelector('.funBus')
// console.log(borderColor);


const headerFour = document.querySelectorAll('.destination h4');
// console.log(headerThree);



const imagesContent = document.querySelectorAll('.img-content');
// console.log(imagesContent);


const bodyDark = document.querySelector('body');
// console.log(containerAll);



// #1 mouseover event listener on nav list
navList.forEach((link, i) => {
    link.addEventListener("mouseover", () => {
        link.style.color = '#B1D5E1';
        event.preventDefault();

        setTimeout( () => {
            link.style.color = "#000";
        }, 500);
    }, false);
});



// #2 click event listener on buttons
destinationBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        alert('Thank you for clicking!');
    },
        {once: true}
    );
});



// #3 dblclick event listener: text changes color on all h2 elements
headerTwo.forEach((header, i) => {
    header.addEventListener("dblclick", () => {
        header.style.color = '#FFBC4E';
    });
});



// #4 A resize event in the footer
window.addEventListener('resize', () => {
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



  // #6 context menu event
borderColor.addEventListener('contextmenu', event => {
    borderColor.style.border = "5px solid #F04443";
});



// #7 mouseenter event changes buttons to yellow
destinationBtn.forEach((btn, i) => {
    btn.addEventListener("mouseenter", () => {
        btn.style.backgroundColor = "#FFBC4E";
        event.stopPropagation();
    });
    // #8 mouseleave event, buttons changes back to original color when the mouse leaves
    destinationBtn.forEach((btn, i) => {
    btn.addEventListener("mouseleave", () => {
        btn.style.backgroundColor = "#17A2B8";
        });
    });
});







//#9  mouseout event
headerFour.forEach((headerFour, i) => {
    headerFour.addEventListener("mouseout", function(event) {
        headerFour.style.color = '#FFBC4E';

        setTimeout( () => {
            headerFour.style.color = "";;
        }, 300);
    }, false);
});


//#10 keydown event that turns the body black
bodyDark.addEventListener("keydown", (event) => {
    event.target.style.backgroundColor = "#000";
});
