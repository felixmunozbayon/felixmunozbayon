// cuando se haya cargado el formulario se va a ejecutar la función validar
window.onload=principio;
function principio(){
	//cuando se haga click sobre el botón validar se va a ejecutar la función valido
	document.formulario.validar.onclick=valido;
}
function valido(){
	let cadena=document.formulario.micaja.value.toLowerCase();
	let adicionales="ñáéíóúü";
	let espalabra=true;
	//la longitud de la cadena va a estar comprendida entre 3 y 40 caracteres
	if (cadena.length < 3 || cadena.length > 40)
			espalabra=false
	//la cadena empieza por letra
	else if ((cadena.charAt(0) < "a" || cadena.charAt(0)>"z") && 
		!adicionales.includes(cadena.charAt(0)))
			espalabra=false
	// la cadena termina por letra o número
	else if ((cadena.charAt(cadena.length -1) < "a" || cadena.charAt(cadena.length -1)>"z") && 
			!adicionales.includes(cadena.charAt(cadena.length -1)) && 
			(cadena.charAt(cadena.length -1)<"0" || cadena.charAt(cadena.length -1) > "9"))
			espalabra=false
	else {
	// la cadena en medio puede tener letras, números, espacios, guiones, 
	// y los caracteres ºª/
		let posicion=1;
		let otros="-ºª/ ";
		while (espalabra && posicion < cadena.length -1){
			if ((cadena.charAt(posicion) < "a" || cadena.charAt(posicion)>"z") && 
				!adicionales.includes(cadena.charAt(posicion)) && 
				(cadena.charAt(posicion)<"0" || cadena.charAt(posicion) > "9") &&
				!otros.includes(cadena.charAt(posicion)))
					espalabra=false;
			posicion+=1;
		}
	}
	if (espalabra)
		document.formulario.mensaje.value="Es una palabra"
	else 
		document.formulario.mensaje.value="No es una palabra";
}