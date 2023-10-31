import React from "react";
import '../../pages/como-funciona/como-funciona.css'
import cuadro from '../../assets/cuadro-pasos-2.png';
import insignias from '../../assets/insignias.png'


function ComoFunciona() {
    return (
        <section >
            <div className="container_como_funciona">
                <div >
                    <h1 className="titulo" style={{ textAlign: 'center', }}>¿Cómo funciona?</h1>
                </div>
                <div>
                    <img src={cuadro} alt="cuadros con pasos del proceso del servicio" className="imagen-pasos"></img>
                </div>
            </div>
            <div className="calificaciones">
                <h1 className="titulo"> Recompensá a nuestras babysitters</h1>
                <p className="texto_calificaciones">
                    Cuando finaliza el servicio se le solicitará que otorgue una calificación de entre 1 y 5 estrellas a la babysitter. Si así lo desea, se puede hacer clic en "Dejar un comentario" para enviar un mensaje anónimo. Si se elige asignar 3 estrellas o menos, se solicitará indicar el motivo de esa calificación.
                    Todas las calificaciones se mantienen anónimas y se presentan en forma compilada. Ni las calificaciones de la babysitter ni las de los usuarios se comparten con terceros.
                </p>
                <div><h3 className="titulo">También podés regalar insignias:</h3></div>
                <div className="reseñas">
                    <div>
                        <img src={insignias} alt="cuadro demostrativo de las insignias" className="imagen-insignias"></img>
                    </div>
                    
                    <div className="regala-insignia">
                        <ul class="custom-list">
                            <li className="lista">Cariñosa-Empática: </li><p className="lista-insignias">¿La babysitter mostró una atención amorosa, paciencia, empatía afectuosa hacia tu hijo/a?</p>
                            <li className="lista">Buena comunicación: </li><p className="lista-insignias">¿La babysitter se comunicó de manera efectiva contigo y/o con tu hijo/a?</p>
                            <li className="lista">Ingeniosa: </li><p className="lista-insignias">¿La babysitter fue creativa en la elección de actividades y juegos para entretener a tu hijo/a?</p>
                            <li className="lista">Puntual: </li><p className="lista-insignias">¿La babysitter llegó a tiempo y demostró un nivel de organización adecuado?</p>
                            <li className="lista">Heroína: </li><p className="lista-insignias">¿La babysitter manejó bien situaciones inesperadas o desafiantes que pudieron surgir?</p>
                            <li className="lista">Respetuosa: </li><p className="lista-insignias">¿La babysitter siguió las instrucciones y pautas que proporcionaste?</p>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComoFunciona