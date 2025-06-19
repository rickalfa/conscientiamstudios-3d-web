// src/main.ts

// Importar Bootstrap CSS (si no lo haces vía SCSS)
// import 'bootstrap/dist/css/bootstrap.min.css';

//import './js/mainthree.js'
//
//import 'js/bootstrap.js'


// Importar Bootstrap JS (incluye Popper.js automáticamente)
import * as bootstrap from 'bootstrap';

// Si usas SASS con Bootstrap, importa tu archivo SCSS principal
import '../public/styles/mybootssaas.scss';



// Importar los iconos de Bootstrap (si no los incluyes directamente en HTML)
// Para que esto funcione, los iconos de Bootstrap-icons necesitan ser copiados o referenciados
// de alguna manera. Generalmente, los CSS de bootstrap-icons se importan directamente.
//import './bootstrap-icons/font/bootstrap-icons.css';

// Si usas Material Icons (generalmente se importan a través de un link en HTML o CSS)
// import 'material-icons/iconfont/material-icons.css'; // Verifica la ruta exacta del CSS de material-icons

console.log('Vite y TypeScript están funcionando!');
console.log('Bootstrap versión:', bootstrap.Collapse.VERSION); // Ejemplo para verificar Bootstrap

// Tu código TypeScript aquí
document.addEventListener('DOMContentLoaded', () => {
    const appElement = document.createElement('h1');
    appElement.textContent = '¡Hola desde Vite y TypeScript!';
    appElement.classList.add('text-primary', 'mt-5', 'text-center');
    document.body.appendChild(appElement);

    // Ejemplo de un componente Bootstrap (un botón)
    const button = document.createElement('button');
    button.className = 'btn btn-success mt-3';
    button.textContent = 'Haz clic aquí';
    document.body.appendChild(button);

    // Inicializar un tooltip de Bootstrap (requiere que Bootstrap JS esté importado)
    // const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    // const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //     return new bootstrap.Tooltip(tooltipTriggerEl);
    // });
});