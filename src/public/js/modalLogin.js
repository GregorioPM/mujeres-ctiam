let cerrar = document.querySelectorAll(".cerrar")[0];
let abrir = document.querySelectorAll(".abrir")[0];
let modal = document.querySelectorAll(".modal")[0];

modal.dataset.visible === "true" && (modal.style.visibility = "visible");

// Aparte

abrir.addEventListener("click", function (e) {
    e.preventDefault();

    setTimeout(function () {
        modal.style.visibility = "visible";
    }, 0);
});

cerrar.addEventListener("click", function (e) {
    e.preventDefault();

    setTimeout(function () {
        modal.style.visibility = "hidden";
    }, 0);
});
