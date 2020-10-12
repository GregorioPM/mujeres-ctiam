function loginModal() {
    document.getElementById("c-register").style.display = "none";
    document.getElementById("c-login").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
}

function deletemlogin() {
    document.getElementById("body").style.overflow = "scroll";
    document.getElementById("c-login").style.display = "none";
}
