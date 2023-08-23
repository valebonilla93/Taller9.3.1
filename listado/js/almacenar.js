const agregar = document.getElementById('agregar');
const item = document.getElementById('item');
const contenedor = document.getElementById('contenedor');
const limpiar = document.getElementById('limpiar');

const contenidoGuardado = localStorage.getItem('contenedor')
if(contenidoGuardado){
    contenedor.innerHTML = contenidoGuardado
};

agregar.addEventListener('click', () => {
    if (item.value !== ''){
contenedor.innerHTML +=  "<li>" + item.value + "</li>"
localStorage.setItem('contenedor', contenedor.innerHTML);
    }
});

limpiar.addEventListener('click', () => {
localStorage.removeItem('contenedor');
contenedor.innerHTML = ""
    });






