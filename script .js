// Sticky Header

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){
    header.style.background = "#020d24";
}
else{
    header.style.background = "#07132f";
}

});

// Button Click

document.querySelectorAll("button").forEach(btn => {

btn.addEventListener("click", () => {
    alert("Thank you for contacting us!");
});

});