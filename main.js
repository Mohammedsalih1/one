let bars = document.getElementById("bars");
let menu = document.getElementById("menu");
let fristChild = document.getElementById("frist-child");
let lastChild = document.getElementById("last-child");
let secondChild = document.getElementById("second-child");
bars.addEventListener("click", () => {
    menu.classList.toggle("top");
    fristChild.classList.toggle("frist");
    secondChild.classList.toggle("second");
    lastChild.classList.toggle("last");
});

function scrollappear() {   
    let parts = document.querySelector(".parts");
    let introPosition = parts.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2;

    if (introPosition < screenPosition) {
        parts.classList.add("apear");
    }
};
window.addEventListener("scroll", scrollappear);

function scrollappear2() {   
    let part = document.querySelector(".pragraph");
    let introPosition = part.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2;

    if (introPosition < screenPosition) {
        part.classList.add("apear");
    }
};
window.addEventListener("scroll", scrollappear2);
// let part = document.querySelector(".pragraph");
// console.log(part);

// .portfolio-cont
function scrollappear3() {   
    let portfolio = document.querySelector(".portfolio-cont");
    let introPosition = portfolio.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2;

    if (introPosition < screenPosition) {
        portfolio.classList.add("apear");
    }
};
window.addEventListener("scroll", scrollappear3);