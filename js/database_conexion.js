const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost:3306',
  user: 'root',
  password: '2407',
  database: 'curso_desarrollo'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectarse a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos.');
});

connection.query('SELECT * FROM registro', (err, results, fields) => {
  if (err) throw err;
  console.log('Los resultados de la consulta son: ', results);
});

$.get('/consulta', (data) => {
  // Mostrar los resultados en una tabla
  var table = $('<table>').appendTo('body');
  var headerRow = $('<tr>').appendTo(table);
  Object.keys(data[0]).forEach((key) => {
    $('<th>').text(key).appendTo(headerRow);
  });
  data.forEach((row) => {
    var tableRow = $('<tr>').appendTo(table);
    Object.values(row).forEach((value) => {
      $('<td>').text(value).appendTo(tableRow);
    });
  });
});
app.get('/consulta', (req, res) => {
  connection.query('SELECT * FROM registro', (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});