let siguiente1 = document.querySelectorAll("#siguiente1")[0];
let siguiente2 = document.querySelectorAll("#siguiente2")[0];
let cProfileRegSteps = document.querySelectorAll(".c-profile__reg-steps")[0];

let atras1 = document.querySelectorAll("#atras1")[0];
let atras2 = document.querySelectorAll("#atras2")[0];

siguiente1.addEventListener('click', function (e) {
    e.preventDefault();
    setTimeout(function(){
		cProfileRegSteps.style.left = "-100%";
	},0)
});

siguiente2.addEventListener('click', function (e) {
    e.preventDefault();
    setTimeout(function(){
		cProfileRegSteps.style.left = "-200%";
	},0)
});

atras1.addEventListener('click', function (e) {
    e.preventDefault();
    setTimeout(function(){
		cProfileRegSteps.style.left = "0";
	},0)
});

atras2.addEventListener('click', function (e) {
    e.preventDefault();
    setTimeout(function(){
		cProfileRegSteps.style.left = "-100%";
	},0)
});
