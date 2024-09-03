import React from 'react';

export default function Cita({cita, eliminarCita}) {
    return (
        <div className='cita'>
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Propietario: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Peso: <span>{cita.peso}</span></p>
            <p>Edad: <span>{cita.edad}</span></p>
            <p>Síntomas: <span>{cita.sintomas}</span></p>

            <button
                className='button eliminar u-full-width'
                onClick={() => eliminarCita(cita.id)}
            >
                Eliminar &times;
            </button>
        </div>
    );
}
