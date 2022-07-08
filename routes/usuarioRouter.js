const express_jesus     = require('express');     // Obteniendo el servicio de Express. Ahora podremos 
                                                  // usar una de sus funciones que es Router().
const router_jesus      = express_jesus.Router(); // Usando la función Router() de Express.

const conexion_jesus    = require('../database/usuarioDb'); 

const usuarioController = require('../controllers/usuarioController');

// RUTA PARA MOSTRAR EL MANTENEDOR DE USUARIOS.
router_jesus.get('/mantenedorUsuarios', (solicitud_jesus, respuesta_jesus)=>{
    
    conexion_jesus.query('SELECT * FROM usuarios', (error, usuarios_obtenidos)=>{
        
        if(error){
            
            throw error;
        
        }else{

            respuesta_jesus.render('./usuarioView/viewMantenedorUsuarios', {datosUSUARIOS_LISTAR:usuarios_obtenidos});
        }

    })

})

// RUTA PARA MOSTRAR EL FORMULARIO VACÍO PARA LOS USUARIOS PARA GUARDAR DATOS.
router_jesus.get('/formularioUsuariosGuardar', (solicitud_jesus, respuesta_jesus)=>{

    respuesta_jesus.render('./usuarioView/viewFormularioUsuariosGuardar');
})

// RUTA PARA GUARDAR LOS DATOS DE LOS USUARIOS.
router_jesus.post('/guardarDatosUsuario', usuarioController.guardarDatosUsuario)

// RUTA PARA MOSTRAR EL FORMULARIO LLENO PARA LOS USUARIOS PARA ACTUALIZARLOS.
router_jesus.get('/formularioUsuariosActualizar/:id_obtenido_vista', (solicitud_jesus, respuesta_jesus)=>{

    const id_obtenido_vista_2 = solicitud_jesus.params.id_obtenido_vista;

    conexion_jesus.query('SELECT * FROM usuarios WHERE id=?', [id_obtenido_vista_2], (error, usuario_obtenido_id)=>{

        if(error){

            throw error;

        }else{

            respuesta_jesus.render('./usuarioView/viewFormularioUsuariosActualizar', {datosUsuarioActualizar:usuario_obtenido_id[0]});
        }
    })
})

// RUTA PARA ACTUALIZAR LOS DATOS DE LOS USUARIOS.
router_jesus.post('/actualizarDatosUsuario', usuarioController.actualizarDatosUsuario)

// RUTA PARA ELIMINAR LOS DATOS DE LOS USUARIOS.
router_jesus.get('/eliminarDatosUsuario/:id_obtenido_vista', (solicitud_jesus, respuesta_jesus)=>{

    const id_obtenido_vista_2 = solicitud_jesus.params.id_obtenido_vista;

    conexion_jesus.query('DELETE FROM usuarios WHERE id = ?', [id_obtenido_vista_2], (error, usuarios_eliminados)=>{
        
        if(error){

            throw error;
        
        }else{

            respuesta_jesus.redirect('/usuario/mantenedorUsuarios');
        }
    })
})

module.exports = router_jesus;