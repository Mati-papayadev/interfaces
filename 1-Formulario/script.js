const form = document.getElementById('form'); // Recoge los datos del formulario
const elements = form.elements; // Recoge los elementos del fomrulario

var formdata = Array.from(elements); // Convierte cada elemento del formulario en un valor de un array

console.log(formdata); 
