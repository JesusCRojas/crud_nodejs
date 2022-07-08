const mysql = require('mysql');

const conexion = mysql.createConnection({

    host:     'localhost',
    user:     'root',
    password: '',
    database: 'bdprueba1'
})

conexion.connect((error)=>{
    
    if(error){

        console.error('El error de conexión es: ' + error);
        return

    }
    
    console.log('¡Conectado a la BD dbprueba1!');
})

module.exports = conexion;