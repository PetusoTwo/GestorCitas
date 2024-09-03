import React, { Fragment, useState } from 'react'
import Formulario from './components/Formulario';
import Cita from './components/Cita';
function App() {
  //Arreglo de Citas
  const [citasTotales, guardarCitas] = useState([]);
  //Funcion que agrega las nuevas Citas
  const crearCita = (citas) => {
    //console.log(citas);
    guardarCitas([...citasTotales, citas]);
  }
  //Funcion para Eliminar alguna cita
  const eliminarCita = (id) => {
    const nuevasCitas = citasTotales.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  //Mensaje para que salga que no hay citas
  const mensajeC = citasTotales.length === 0 ? 'No hay Citas' : 'Administra tus Citas';

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
          <h2>
            {mensajeC}
          </h2>
          {citasTotales.map(cita=> (
            <Cita
            key={cita.id}
            cita={cita}
            eliminarCita={eliminarCita}
            />
          ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
