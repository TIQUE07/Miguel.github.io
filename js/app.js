const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
const fecha = document.querySelector('.fecha');


document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
    fechaActual();
});

function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
        navegacion.classList.toggle('ocultar');

    }); 
}

function cerrarMenu(){
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click',(e)=>{
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            cambioSeccion(seccion);
            if(e.target.tagName === 'A'){
                navegacion.classList.add('ocultar');
            }
        });
    });
}

function cambioSeccion(seccion){
    seccion.scrollIntoView({
        behavior:'smooth'
    })
}

function fechaActual(){
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}

document.querySelector('#peticion').addEventListener('click',()=>{
    let data = {
        nombre: document.querySelector('#nombre').value
    }

    console.log(data);
    fetch('http://localhost:3000/consulta')
    .then(resp=>resp.json())
    .then(data=>{
        console.log(data);
    });
});


// ### Registrar usuarios
let formRegister = document.querySelector('.formulario-contacto');

formRegister.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    
    // Obtener datos del formulario
    let data = {
        nombre: document.querySelector('input#nombre').value,
        apellido: document.querySelector('input#apellido').value,
        correo: document.querySelector('input#correo').value,
        contrasena: document.querySelector('input#contrasena').value
    };

    // Enviamos peticion al servidor
    fetch('http://localhost:3000/register',{
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    }).then(resp=>resp.json())
    .then(data=>{
        console.log(data);
    });
});