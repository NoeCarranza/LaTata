import React from "react";
import '../plandenegocios/plandenegocios.css'
import personas from '../../assets/personas-unidas.png';
import logo from '../../assets/sonrisa-2.png'
import cuerpo1 from '../../assets/plan_de_negocios_descripcion_1.png';
import cuerpo2 from '../../assets/plan_de_negocios_descripcion_2.png';
import imagenfinal from '../../assets/winter hamilton.jfif';

function PlanDeNegocios() {
    return (
        <section className="container_plandenegocios">
            <div className="descripción_plan_negocios">
                <h1 className="titulo" style={{ margin: '0', padding: '500px 0 0 80px', color: 'white', fontSize: '5rem' }}>Plan de negocios</h1>
            </div>
            <div className="descripcion_texto">
                <p style={{ padding: '60px 60px 60px 90px', margin: '0', textAlign: 'center', width: '80%' }}>Bienvenido al plan de negocios de "La Tata", somos una empresa dedicada a proporcionar un servicio de cuidado infantil confiable y de alta calidad. En un mundo donde las demandas laborales y las dinámicas familiares están en constante evolución, se ha vuelto esencial contar con servicios flexibles y seguros para el cuidado de nuestros seres más queridos. </p>
                <img src={personas} alt="todos juntos" className="img_personas"></img>
            </div>
            <div className="descripcion__tata">
                <p style={{ width: '80%' }}>La Tata surge como respuesta a esta necesidad, comprometida a ofrecer a los padres soluciones confiables para el cuidado de sus hijos.

                    Nos adaptamos a las necesidades, ofreciendo flexibilidad horaria y cuidado en situaciones de emergencia.</p>
                <img src={logo} alt="logo la tata" style={{ width: '50%' }}></img>
            </div>
            <div className="descripcion_dupla">
                <div className="cuadros">
                    <img src={cuerpo1} className="img_cuerpo"></img>
                    <p style={{width:'60%'}}> Nuestra empresa se fundamenta en la premisa de la excelencia en el servicio, utilizando tecnología innovadora para simplificar la contratación de cuidadores y brindar comodidad a nuestros clientes. </p>
                </div>
                <div className="cuadros">
                    <img src={cuerpo2} className="img_cuerpo"></img>
                    <p style={{width:'60%'}}>Nos enorgullece contar con un equipo altamente calificado y cuidadosamente seleccionado de cuidadores, cuyo profesionalismo y dedicación garantizan un trato amoroso y seguro hacia los niños. </p>
                </div>
            </div>
            <div className="descripcion_final">
                <img src={imagenfinal} alt="La Tata" className="img_cuerpo" style={{width: '31%'}}></img>
                <p style={{width:'30%'}}>
                Este plan de negocios detalla nuestra estrategia para destacar en un mercado en constante crecimiento.

A través de esta estrategia, aspiramos a consolidarnos como líderes en el cuidado infantil flexible y confiable, con una presencia que se expande geográficamente para satisfacer las necesidades de los padres en distintas comunidades y regiones.

Acompáñenos en este recorrido para descubrir cómo "La Tata" se posicionará como el referente en cuidado infantil y marcará la diferencia en la vida de las familias modernas.
                </p>
            </div>

        </section>
    )
}

export default PlanDeNegocios