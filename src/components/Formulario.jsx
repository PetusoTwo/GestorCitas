import React, { useState } from 'react'
import uuid from '../../node_modules/uuid/dist/v4'

export default function Formulario({crearCita}) {
    //Creacion del state de citas
    const [citas, updateCitas] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        peso: '',
        edad: '',
        sintomas: ''
    });

    const [error, updateError] = useState(false);

    const updateCitas1 = (e) => {
        updateCitas({
            ...citas,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores
    const {mascota, propietario, fecha, hora, peso, edad, sintomas} = citas;

    //Envio de formulario
    const submitCita = e => {
        e.preventDefault(); 
        // alert('Se ha enviado el formulario'); validar que funciona

        //validar que todos los campos esten completos
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || peso.trim() === '' || edad.trim() === '' || sintomas.trim() === '') {
            updateError(true);
            return;
        }updateError(false); //Para poder eliminar el mensaje de error
        //Asignar id
        citas.id = uuid(); //Genera un id unico
        //Crear la cita
        crearCita(citas);
        //Reiniciar el form
        updateCitas({mascota: '', propietario: '', fecha: '', hora: '', peso: '', edad: '', sintomas: ''});
    }
return (
    <>
    <h2>Crear cita</h2>
    
    <form
        onSubmit= {submitCita}
    >
        <label>Nombre de la mascota</label>
        <input type="text" name="mascota" className="u-full-width" placeholder="Nombre de la mascota" onChange={updateCitas1} value={mascota}/>
        <label>Nombre del propietario</label>
        <input type="text" name="propietario" className="u-full-width" placeholder="Nombre del propietario" onChange={updateCitas1} value={propietario}/>
        <label>Fecha de ingreso</label>
        <input type="date" name="fecha" className="u-full-width" placeholder="Fecha de la cita" onChange={updateCitas1} value={fecha}/>
        <label>Hora de la cita</label>
        <input type="time" name="hora" className="u-full-width" placeholder="Hora de la cita" onChange={updateCitas1} value={hora}/>
        <label>Peso de la mascota</label>
        <input type="number" name="peso" className="u-full-width" placeholder="Peso de la mascota" onChange={updateCitas1} value={peso}/>
        <label>Edad de la mascota</label>
        <input type="number" name="edad" className="u-full-width" placeholder="Edad de la mascota" onChange={updateCitas1} value={edad}/>
        <label>Sintomas</label>
        <textarea name="sintomas" className="u-full-width" placeholder="Describe los Sintomas / Enfermedad" onChange={updateCitas1} value={sintomas}></textarea>
        { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
        <input type="submit" className="button-primary u-full-width" value="Crear Cita" />
    </form>
    </>
)
}
