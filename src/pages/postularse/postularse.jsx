import React from "react";
import '../postularse/postularse.css';
import personas from '../../assets/equipo-la tata - copia.png';

function Postularse() {
    return (
        <section className="container_postularse">
            <div className="postularse-encabezado">
                <div>
                    <h1 className="titulo-postularse" style={{ margin: '0', padding: '0' }}>Quiero formar parte</h1>
                    <h2 className="titulo-postularse-2" style={{ margin: '0', padding: '0' }}>Requisitos para postularse:</h2>
                    <h3 className="subtitulo-postularse" style={{ paddingTop: '20px' }}>Babysitter</h3>
                </div>
                <img src={personas} alt="trabajadores" className="personas"></img>
            </div>
            <div className="requisitos">
                <ul className="listas-requisitos">
                    <li>Ser mayor de 18 años</li>
                    <li>Ser estudiante o graduada de carreras como Profesorados de Educación Inicial o afines.
                    </li>
                    <li>Buenas habilidades de comunicación y capacidad para interactuar con niños de diferentes edades.</li>
                </ul>
                <ul className="listas-requisitos">
                    <li>Experiencia comprobable previa en el cuidado de niños</li>
                    <li>En el caso de no tener experiencia se capacitará, al igual que las personas que tienen experiencia para definir las tareas del puesto y  la forma de trabajar.
                    </li>
                </ul>
                <ul className="listas-requisitos">
                    <li>Ser amable, cariñoso y comprensivo con los niños.</li>
                    <li>Disponibilidad para trabajar en horarios rotativos, incluyendo noches y fines de semana.</li>
                    <li> Capacidad para proporcionar referencias personales y profesionales.</li>
                </ul>
            </div>
            <div className="postularse">
                <h1 className="titulo-postularse-2">Postularse:</h1>
                <h2 className="subtitulo_postularse">Si creés que ténes todos los requisitos y querés trabajar para nosotros mandanos tu CV con el asunto: "Babysitter con tu nombre" al mail latata@postulaciones.com</h2>
                <p className="texto_postularse">Si tenés alguna duda podés enviarnos un mensaje en el formulario debajo.</p>
            </div>

        </section>
    )
}

export default Postularse