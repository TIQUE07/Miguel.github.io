const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

// Midlewares
app.use(cors({ origen: 'http://localhost:3000' }));
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'curso_desarrollo',
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectarse a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conexión exitosa a la base de datos.');
});
/* 
connection.query('SELECT * FROM registro', (err, results, fields) => {
    if (err) throw err; 
    console.log('Los resultados de la consulta son: ', results);
}); */

app.get('/consulta', (req, res) => {
    connection.query('SELECT * FROM curso_desarrollo.registro', (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    });
});

//ruta registro
/* 
    Request = fronted => data => servidor
    Response = servidor => respuesta => frontend
*/
app.post('/register',(req,res)=>{
    let data = req.body;

    connection.query(`INSERT INTO registro(nombre,apellido,correo,contraseña) VALUES('${data.nombre}','${data.apellido}','${data.correo}','${data.contrasena}')`, (err, results, fields) => {
        if (err) throw err;
        res.json('El registro se guardo correctamente');
    });
});

app.listen('3000',()=>{
    console.log('corriendo servidor');
});
