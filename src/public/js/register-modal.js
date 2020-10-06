function registerModal() {
    var temporal;
    var varLogin = document.getElementById("c-login").innerHTML;
    
    var varRegister = document.getElementById("c-register").innerHTML;
    var htmlRegister = document.getElementById("c-register").innerHTML =
    '<div class="m">' +
        '<div class="m__content">' +
            '<button onclick="deletemregister()" class="m__cerrar"><i class="fas fa-times"></i></button>'+
            '<div class="m-login">'+
                '<form class="m-login__content">'+
                    '<img class="m-login--ctiam src="">'+
                    '<p class="m-login--p">Crear cuenta</p>'+
                    '<div class="m-login__c-fist">'+
                        '<div class="m-login__c__content">'+
                            '<input type="text" class="m-login__c--input" id="" placeholder="Correo eletrónico" required>'+
                        '</div>'+
                    '</div>'+
                    '<div class="m-login__c-medio">'+
                        '<div class="m-login__c__content">'+
                            '<input type="text" class="m-login__c--input" id="" placeholder="Nombre Completo" required>'+
                        '</div>'+
                    '</div>'+
                    '<div class="m-login__c-medio">'+
                        '<div class="m-login__c__content">'+
                            '<input type="text" class="m-login__c--input" id="" placeholder="Teléfono" required>'+
                        '</div>'+
                    '</div>'+
                    '<div class="m-login__c-medio">'+
                        '<div class="m-login__c__content">'+
                            '<input type="password" class="m-login__c--input" id="" placeholder="Contraseña" required>'+
                        '</div>'+
                    '</div>'+
                    '<div class="m-login__c-last">'+
                        '<div class="m-login__c__content">'+
                            '<input type="password" class="m-login__c--input" id="" placeholder="Repetir Contraseña" required>'+
                        '</div>'+
                    '</div>'+
                    '<button type="submit" class="m-login--send">Siguiente paso</button>'+
                '</form>'+
            '</div>'+
        '</div>'+
    '</div>'
    ;

    var objeto = {
        deleteLogin : document.getElementById("c-login").innerHTML = "",
        inyectarHtml : htmlRegister
    }

    if (varLogin.length > 0) {
        return objeto;
    }

    if (varRegister.length === 0) {
        return htmlRegister;
    }
}

function deletemregister(){
    var temporal;
    var varLogin = document.getElementById("c-register").innerHTML;
    if (varLogin.length > 0) {
        temporal = document.getElementById("c-register").innerHTML = "";
    }
    return temporal;
}