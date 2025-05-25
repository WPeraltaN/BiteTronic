// Requerir express
const express = require('express');
// Crear instancia para poder acceder a express
const app = express();

// Requerir path
const path = require('path');

// Variable para el puerto
const PORT = 3000;

// Usar los archivos estáticos de public
app.use(express.static('public'));
// Obtener la respuesta en tipo json
app.use(express.json());

// Crear ruta
app.get('/sistema/sac',(req,res)=>{
    // Enviar el archivo html a la ruta
    res.sendFile(path.join(__dirname, 'views', 'empleados', 'sac.html'));
});

// Lanzar el servidor
app.listen(PORT,()=>{
    console.log(`Servidor Escuchando en http://localhost:${PORT}/sistema/sac`);
})