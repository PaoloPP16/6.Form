
function mandarData( ){
    const nombre = document.querySelector("#nombreId").value
    const errorMsg = document.getElementById("errorMsg")
    let errorApellido= document.querySelector("#errorApellidoId")
        // if(nombre.length === 0 ) {
        //  errorMsg.innerHTML = 'Mensaje muy corto'
        //  errorMsg.style.display = "block"; 
        //  errorMsg.style.color = "red"; 
        // } else {
        //  errorMsg.style.display = "none"; 
      
        // }
    const apellido = document.querySelector("#apellidoId").value
    const edad = document.querySelector("#edadId").value
    const anios = document.querySelector("#aniosId").value
    const email = document.querySelector("#emailId").value
    const mostraRango = document.querySelector("#mostraRangoId").value
    const estadoCivil = document.querySelector("#estadoCivilId").value
    const mascotas = document.querySelector("#mascotasId").value
    const genero = document.querySelector("#generoId").value
    // const errorMsg = document.getElementById("errorMsg")
    // const errorApellido= document.querySelector("#errorApellido")
    const Objeto = {
        nombre,
        apellido,
        edad,
        anios,
        email,
        mostraRango,
        estadoCivil,
        mascotas,
        genero
    }
    getValidation(Objeto)
}

function getValidation({nombre,apellido,edad,anios,email,mostraRango,estadoCivil,mascotas,genero}) {
  if(nombre.length === 0 ) {
  errorMsg.innerHTML = 'Porfavor ingrese el nombre'
  errorMsg.style.display = "block"; 
  errorMsg.style.color = "red"; 
  }
  if(apellido.length === 0){
    errorApellido.innerHTML = 'Porfavor ingrese el apellido'
    errorApellido.style.display = "block"; 
    errorApellido.style.color = "red"; 
  }
  
}
