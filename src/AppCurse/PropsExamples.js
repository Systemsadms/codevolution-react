import React from 'react';
import './App.css';
import FuncionProps from './componentes/FuncionProps';
import ComponenteProps from './componentes/ComponenteProps';

function App() {
  return (
    <div>
      <FuncionProps name ="Hola Propp"><p>Component Funcion props children</p></FuncionProps>
      <ComponenteProps name="Ejemplo Props" />
    </div>
  );
}

export default App;
