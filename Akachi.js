const hamburger = document.getElementById("hamburger")
const navLinks = document.getElementById("nav-links")

hamburger.onclick = () => {
    if(navLinks.style.display === "") {
        navLinks.style.display = "flex"
    } else{
        navLinks.style.display = ""
    }
}