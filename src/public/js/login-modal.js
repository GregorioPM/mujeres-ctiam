function loginModal() {
    var temporal;
    var varLogin = document.getElementById("c-login").innerHTML;
    var htmlLogin = document.getElementById("c-login").innerHTML =
    '<div class="m">' +
        '<div class="m__content">' +
            '<button onclick="deletemlogin()" class="m__cerrar"><i class="fas fa-times"></i></button>'+
            '<div class="m-login">'+
                '<form class="m-login__content">'+
                    '<p class="m-login--p">Iniciar sesión</p>'+
                    '<div class="m-login__c-fist">'+
                        '<div class="m-login__c__content">'+
                            '<i class="fas fa-user"></i>'+
                            '<input type="text" class="m-login__c--input" id="" placeholder="Correo eletrónico" required>'+
                        '</div>'+
                    '</div>'+
                    '<div class="m-login__c-last">'+
                        '<div class="m-login__c__content">'+
                            '<i class="fas fa-lock"></i>'+
                            '<input type="password" class="m-login__c--input" id="" placeholder="Contraseña" required>'+
                        '</div>'+
                    '</div>'+
                    '<button type="submit" class="m-login--send">Entrar</button>'+
                    '<div class="m__btn-google"><a class="m__btn-google--a" href="/login/signin/google"><i class="fab fa-google"></i>Entra con google</a></div>'+
                    '<div class="m-login__options">'+
                        '<a class="m-login__options--a" href="">¿Olvidaste tu contraseña?</a>'+
                        '<button onclick="registerModal()" class="m-login__options--a">Crear cuenta</button>'+
                        // '<a class="m-login__options--a" href="">Crear cuenta</a>'+
                    '</div>'+
                '</form>'+
            '</div>'+
        '</div>'+
    '</div>'
    ;

    var object = {
        cssbody : document.getElementById("body").style.overflow = "hidden",
        inyectarhtml : htmlLogin,
    }

    if (varLogin.length === 0) {
        return htmlLogin;
    }
}

function deletemlogin(){
    var temporal;
    var varLogin = document.getElementById("c-login").innerHTML;

    var object = {
        cssbody : document.getElementById("body").style.overflow = "scroll",
        borrar : document.getElementById("c-login").innerHTML = "",
    }

    if (varLogin.length > 0) {
        return object;
    }
}