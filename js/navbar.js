// Sticky Mode NavBar
window.addEventListener("scroll", function () {
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 50)
})

// show & hide NavBar responsive Mode
var NavBar = document.getElementById("navBar")

function showMenu() {
    NavBar.style.left = "-15px";
    NavBar.style.visibility = "unset";
}

function hideMenu() {
    NavBar.style.left = "-300px";
}