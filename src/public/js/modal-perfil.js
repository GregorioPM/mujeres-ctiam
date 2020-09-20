function modal_cuenta () {
    var temp;
    var res = document.getElementById("ventana-cuenta").innerHTML;
    var newcode = document.getElementById("ventana-cuenta").innerHTML = 
    "<div class=\"c-cuenta\">" + 
        "<div class=\"c-cuenta__content\">" + 
            "<li class=\"c-cuenta__li\">" + 
                "<a class=\"c-cuenta__li--a\" href=\"\"><i class=\"fas fa-bell\"></i>Notificaciones</a>" +
            "</li>" +
            "<li class=\"c-cuenta__li\">" +
                "<a class=\"c-cuenta__li--a\" href=\"\"><i class=\"fas fa-sign-out-alt\"></i>Cerrar sesión</a>" +
            "</li>" +
        "</div>" + 
    "</div>";

    if (res.length === 0) {
        return newcode;
    } else {
        temp = document.getElementById("ventana-cuenta").innerHTML = "";
    }
    return temp;
}
