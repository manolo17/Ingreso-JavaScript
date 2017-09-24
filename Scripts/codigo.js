// JavaScript Document



var plantillaFila = '<tr><td>{0}</td><td>{1}</td><td>{2}</td><td>{3}</td></tr>';

function remov(){

	document.getElementById('cuerpo-tabla').deleteRow();



	}

function borrarTabla(){


}
function mostrarValor() {
	var nombre = document.getElementById('nombre').value;
	var apellidos = document.getElementById('apellidos').value;
	var email = document.getElementById('email').value;
	var telefono = document.getElementById('telefono').value;

	if (!esTextoValido(nombre, 'Nombre') ||
		!esTextoValido(apellidos, 'Apellidos') ||
		!esTextoValido(email, 'Email') ||
		!esTextoValido(telefono, 'Teléfono')) {
		return;
		}

	var fila = plantillaFila
		.replace('{0}', nombre)
		.replace('{1}', apellidos)
		.replace('{2}', email)
		.replace('{3}', telefono);

	document.getElementById('cuerpo-tabla').innerHTML += fila;
	limpiarCampos();
}

function esTextoValido(texto, campo) {
	if (texto == '') {
		alert('Ingrese valor para el campo: ' + campo);
		return false;
	}

	return true;
}

function limpiarCampos() {
	document.getElementById('nombre').value = '';
	document.getElementById('apellidos').value = '';
	document.getElementById('email').value = '';
	document.getElementById('telefono').value = '';

	for (var i=0; i < document.getElementsByTagName('input').length; i++) {
		document.getElementsByTagName('input')[i].value = '';
	}


}
