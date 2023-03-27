const mysql = require('mysql');

 

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2407',
  database: 'curso_desarrollo'
});

 

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a MySQL: ' + error.stack);
    return;
  }

 

  console.log('Conexión exitosa a MySQL con el ID ' + connection.threadId);
});




