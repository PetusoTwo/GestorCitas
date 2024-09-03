import React, { Fragment, useState } from 'react'
import Formulario from './components/Formulario';
function App() {
  //Arreglo de Citas
  const [citasTotales, guardarCitas] = useState([]);
  //Funcion que agrega las nuevas Citas
  const crearCita = (citas) => {
    //console.log(citas);
    guardarCitas([...citasTotales, citas]);
  }
  return (
    <Fragment>
    <h1>
      Gestor de Citas
    </h1>
    <div className="container">
      <div className='row'>
        <div className='one-half column'>
          <Formulario
          crearCita={crearCita}
          />
        </div>
        <div className='one-half column'>
          2
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
