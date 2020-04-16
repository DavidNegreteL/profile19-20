function validar(nombre, correo, pass1, pass2){
	if(nombre == "" || correo == "" || pass1 == "" || pass2 == ""){
		alert("Falta llenar un campo")
	}
	else if(pass1 == pass2)
  {
    alert(nombre + ", te has registrado con éxito ")
    limpiar()
		document.getElementById("bio").style.visibility="visible"
		document.getElementById("fotos").style.visibility="visible"
	}
  else
  {
    alert("Las contraseñas no coinciden, vuelve a intentarlo")
    limpiar()
  }
}
function limpiar(){
  nombre = document.getElementById("name").value = ""
	correo = document.getElementById("mail").value = ""
  pass1 = document.getElementById("psswd").value = ""
  pass2 = document.getElementById("cpsswd").value = ""
}

function myFunction(imgs){
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}

function registrar(){
	let nombre = document.getElementById("name").value
  let correo = document.getElementById("mail").value
  let pass1 = document.getElementById("psswd").value
  let pass2 = document.getElementById("cpsswd").value
	validar(nombre, correo, pass1, pass2)
}

function cancel(){
	limpiar()
	}

	function myFunction(imgs){
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}