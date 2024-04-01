import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Maquetar las imágenes adjuntas y tener en cuenta los diferentes cortes en móvil y escritorio. La prueba deberá estar subida en un repositorio de GitHub.

// Tecnologías/Librerías requeridas:

// React
// Typescript
// Next.js
// Funcionalidad a implementar:

// Separa en componentes de una forma óptima y organizada
// La vista debe asemejarse lo más parecido posible a las fotos adjuntas
// Implementar búsqueda de productos por nombre
// Consumir un JSON con los datos de productos (JSON local o externo)
// Cambiar la vista con los iconos indicados en la foto:
// Escritorio de 4 a 3 elementos
// Móvil de 3 a 2 elementos
// Implementar lógica y diseño de un componente “ordenar” (precio ascendente y descendente)
// Crea los test unitarios que creas conveniente

// https://github.com/testmayoral/mayoral-assignment
