const { json } = require('express/lib/response');

const express_jesus  = require('express');
const app_jesus      = express_jesus(); 
app_jesus.set('view engine', 'ejs');
app_jesus.use(       express_jesus.urlencoded( {extended:false} )       );
app_jesus.use(express_jesus.json());
app_jesus.use('/usuario', require('./routes/usuarioRouter'));
app_jesus.listen(5000, ()=>{ 

    console.log('SERVER corriendo en http://localhost:5000');

})