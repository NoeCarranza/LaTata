import React from "react";
import '../quienes-somos/empresa.css';
import img1 from '../../assets/section1.jfif';
import img2 from '../../assets/section2.jfif';
import valores1 from '../../assets/valores1.png'
import valores2 from '../../assets/valores2.png'

function Empresa () {
    return(
        <section className="container_empresa">
            <div className="quienes_somos">
                <h1 className="titulo"> ¿Quiénes somos?</h1>
                <p className="descripcion">Somos "La Tata", tu compañera confiable en el cuidado infantil, entendemos que cada momento es crucial en la vida de un niño, y nos dedicamos a proporcionar un servicio excepcional de cuidado infantil que garantiza la seguridad, el bienestar y la felicidad de tus pequeños, las 24 horas del día los 7 días de la semana.</p>
            </div>
            <div className="img_texto">
                <div className="section-img-texto">
                <img src={img1} alt="imagen babysitter" className="img"></img>
                <p>Solucionamos el problema de aquellas familias que necesitan una babysitter para sus hijos de manera parcial y eventual, sin mover a los niños del hogar.</p>
                </div>
                <div className="section-img-texto">
                <img src={img2} alt="imagen babysitter" className="img"></img>
                <p>El servicio está orientado a familas en general, como así también aquellos que trabajan con guardias o con horarios rotativos.</p>
                </div>
            </div>
            <div className="mision">
                <h1 className="titulo">Nuestra misión</h1>
                <p className="texto_empresa">Proporcionar un servicio de cuidado de niños en el hogar a través de una aplicación, que ofrece un acceso innovador, cómodo y práctico de contratación simple, proporcionando perfiles de cuidadores calificados, que brindan un servicio seguro y de calidad para que los papás encuentren  tranquilidad y seguridad en nuestro servicio sabiendo  que sus hijos estarán en buenas manos mientras están ausentes.</p>
            </div>
            <div className="vision">
                <h1 className="titulo">Nuestra visión</h1>
                <p className="texto_empresa">Ser el líder en el mercado regional ofreciendo una solución innovadora y confiable para el cuidado de niños en el hogar.</p>
            </div>
            <div className="valores">
                <div>
                <h1 className="titulo" style={{padding: '0',}}>Nuestros valores</h1>
                </div>
                <div className="valores-img">
                    <img className="valores1" src={valores1} alt="valores empresariales 1"></img>
                    <img className="valores2" src={valores2} alt="valores empresariales 2"></img>
                </div>
            </div>
        </section>

    );
};

export default Empresa