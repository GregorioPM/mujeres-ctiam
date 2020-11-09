function loginModal() {
    document.getElementById("c-register").style.display = "none";
    document.getElementById("c-login").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
}

function deletemlogin() {
    document.getElementById("body").style.overflow = "scroll";
    document.getElementById("c-login").style.display = "none";
}

function deletemcategoria() {
    document.getElementById("body").style.overflow = "scroll";
    document.getElementById("modalAdd").style.display = "none";
}

function deletemEditcategoria() {
    document.getElementById("body").style.overflow = "scroll";
    document.getElementById("modalEdit").style.display = "none";
}

function deletemDeletecategoria() {
    document.getElementById("body").style.overflow = "scroll";
    document.getElementById("modalDelete").style.display = "none";
}
