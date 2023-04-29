const userlist = [];
function obtenerUsuarios(){
    fetch('http://localhost:3000/consulta')
    .then(resp=>resp.json())
    .then(data=>{
        console.log(data);
        this.userlist=data;
        pintarTabla(data);
    });
}
window.onload=function(){
    obtenerUsuarios();
}

function pintarTabla(usuarios){
    let tabla = '<table>';
    tabla += '<thead><tr><th>Id</th><th>Nombre</th><th>Apellido</th><th>Correo</th></tr></thead> <tbody>';
   
    console.log(usuarios)
    usuarios.forEach(usuario=>{
        tabla  +=`<tr><th>${usuario.id}</th><th>${usuario.nombre}</th><th>${usuario.apellido}</th><th>${usuario.correo}</th></tr>`;
        console.log(tabla)
        console.log(usuario)

    });
    tabla +='</tbody></table>';
    console.log(tabla) 

    document.getElementById('tablaUsuario').innerHTML=tabla;
}


