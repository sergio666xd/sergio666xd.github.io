var user = ['admin', 's'];
var key = ['12345', 's'];

let usercf = null;
let keycf = null;

let foundu = null;
let foundk = null;

let usernew = null;
let keynew = null;
let push = null;

const err1 = "Error: El usuario ingresado no existe o la contraseña es incorrecta";
const err2 = "Error: No se ingresó usuario.";
const err3 = "Error: El usuario '" + usernew +"' ya existe o no se ingresó.";
const err4 = "Error: Se ingresaron campos vacíos.";
const alert1 = "Registro cancelado";
const alert2 = "Registro exitoso";

let error = null;
let i = 0;
let a = null;

function login() {
	usercf = (prompt(`LOGIN:
	Ingrese usuario:`));
	keycf = (prompt(`LOGIN:
	Ingrese contraseña:`));
	// foundu = user.find(element => element > usercf);
	// foundk = key.find(element => element > keycf);

	if (usercf != null, keycf != null) {
		for (i = 0; i < user.length; i++) {
			if (usercf == user[i]) {
				a = i;
				foundu = user[i];
			}
		}
		if (keycf == key[a]) {
			foundk = key[a];
		}
		if (usercf == foundu, keycf == foundk) {
			document.getElementById("alerts").innerHTML = "";
			$('.profile').load('./pages/profile.html');
			setTimeout( function (){
				document.getElementById("user").innerHTML = user[a];
			}, 50);
		}
	} else if (usercf == null, keycf == null){
		$('#alerts').addClass('error');
		$('#alerts').removeClass('success');
		$('#alerts').removeClass('alert');
		document.getElementById("alerts").innerHTML = err1;
	}

}
function register() {
	usernew = (prompt(`SINGUP:
	Ingrese usuario:`));
	if (usernew == null) {
		usernew = "a";
	}
	if (usernew != "a"){
		keynew = (prompt(`SIGNUP:
		Ingrese contraseña:`));
	}
	if (keynew == null) {
		$('#alerts').removeClass('error');
		$('#alerts').removeClass('success');
		$('#alerts').addClass('alert');
		document.getElementById("alerts").innerHTML = alert1;
	}
	if (keynew == "") {
		$('#alerts').addClass('error');
		$('#alerts').removeClass('success');
		$('#alerts').removeClass('alert');
		document.getElementById("alerts").innerHTML = err4;
	}
	for (i = 0; i < user.length; i++) {
		if (usernew == user[i]) {
			$('#alerts').addClass('error');
			$('#alerts').removeClass('success');
			$('#alerts').removeClass('alert');
			document.getElementById("alerts").innerHTML = err3;
		}
	}
	// for (i = 0; i < user.length; i++) {
	// 	while (usernew == user[i] || usernew == null || usernew == "") {
	// 		if (usernew == "") {
	// 			$('#alerts').addClass('error');
	// 			$('#alerts').removeClass('success');
	// 			$('#alerts').removeClass('alert');
	// 			document.getElementById("alerts").innerHTML = err2;
	// 		} else if (usernew == user[i]) {
				
	// 		}
			
	// 		usernew = (prompt(`SINGUP:
	// 	Ingrese usuario:`));
	// 		if (usernew == null) {
	// 			usernew = "a";
	// 		}
	// 	}
	// }
	
	if (push==true) {
		user.push(usernew);
		key.push(keynew);
		$('#alerts').removeClass('error');
		$('#alerts').addClass('success');
		$('#alerts').removeClass('alert');
		document.getElementById("alerts").innerHTML = alert2;
	}

}
function logOut() {
	a = 0;
	i = 0;
	$('.profile').load('./pages/login.html');
}