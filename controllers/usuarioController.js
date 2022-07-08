const conexion_jesus = require('../database/usuarioDb');

// MÉTODO PARA GUARDAR LOS DATOS DE LOS USUARIOS.
exports.guardarDatosUsuario = (solicitud_jesus, respuesta_jesus)=>{

    const nombres_obtenidos_vista = solicitud_jesus.body.nombresHTML; 
    // Como el name del <input type="text"... es name="nombresHTML", 
    // en la variable NOMBRES se guarda el dato de la caja de texto
    // que está en una vista EJS, que es como un HTML. 
    
    const imagen_obtenida_vista   = solicitud_jesus.body.imagenHTML;
    
    conexion_jesus.query('INSERT INTO usuarios SET ?', {nom:nombres_obtenidos_vista, ima:imagen_obtenida_vista}, (error, usuario_insertado)=>{

        if(error){

            console.log(error);
        
        }else{
            
            respuesta_jesus.redirect('/usuario/mantenedorUsuarios');
        }

    })
}

// MÉTODO PARA ACTUALIZAR LOS DATOS DE LOS USUARIOS.
exports.actualizarDatosUsuario = (solicitud_jesus, respuesta_jesus)=>{

    const id_obtenido_vista       = solicitud_jesus.body.idHTML;
    const nombres_obtenidos_vista = solicitud_jesus.body.nombresHTML;
    const imagen_obtenida_vista   = solicitud_jesus.body.imagenHTML;

    conexion_jesus.query('UPDATE usuarios SET ? WHERE id = ?', [{nom:nombres_obtenidos_vista, ima:imagen_obtenida_vista}, id_obtenido_vista], (error, usuarios_actualizados)=>{

        if(error){

            console.log(error);
        
        }else{

            respuesta_jesus.redirect('/usuario/mantenedorUsuarios');
        }
    })
}