
// JS Code for the menu Button.
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle("active");
})


// JS code for the right click mouse.
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
})



// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();

// })

document.querySelector("form").addEventListener("submit", function () {
    setTimeout(() => {
        window.location.href = "./pages/thanks.html";
    }, 1000); // redirect after 1 sec
});