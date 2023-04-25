function editarUsuario(idEditar)
{/*
    PREGUNTA 3
    Capturar informacion del usuario desde base de datos y llenar
    inputs dentro de la ventana modal de editar usuario, permiter que
    el usuario pueda editar los datos. No olvida de cargar el ID en el innerHTML
    dentro del elemento H1 cuyo id es cargaId

    Los campos a editar son:
    Nro de celular
    Profesion del usuario

    El resto de campos:
    Nombre
    Apellido
    Email
    Fecha Ingreso
    Colocarlos como solo lectura (propiedad readonly en el tag HTML)
    
    */
    let new_id = idEditar.split('editar')[1];
    fetch(`/conseguirInfoUsuario?idUser=${new_id}`)
    .then(response => response.json())
    .then(data => {
        let nombre = document.getElementById('nombre')
        let apellido = document.getElementById('apellido')
        let email = document.getElementById('emailUsuario')
        let fecha_ingreso = document.getElementById('fechaIngreso')
        let nro_cel = document.getElementById('nroCelular')
        let profesion = document.getElementById('profesionUsuario')
        let id_user = document.getElementById('indUser')

        id_user.value = data.id
        nombre.value = data.nombre
        apellido.value = data.apellido
        email.value = data.email
        fecha_ingreso.value = data.fechaIngreso
        nro_cel.value = data.nroCel
        profesion.value = data.profesion
    })
}

function actualizarUsuario()
{
    /*
    PREGUNTA 4
    Capturar los datos de los campos input's de la ventana de editar usuario,
    el id del usuario lo puedes capturar de la carga realizada en el elemento
    H1 cuyo id es cargaId. Con los datos capturados postearlos en la base de datos
    y actualizar la informacion del usuario
    */
}