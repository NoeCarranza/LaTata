import React from 'react'
import '../PlanEstratégico/PlanEstrategico.css'
import personas from '../../assets/personas-unidas.png';
import FODA from '../../assets/FODA.png'
import sonrisa from '../../assets/sonrisa3.png'
import imgmision from '../../assets/image 11.png'

function PlanEstrategico() {
    return (
        <section className='PlanEstrategico'>
            <div className='descripcion__plan__estrategico'>
                <h1 className='titulo' style={{ margin: '0', padding: '500px 0 0 80px', color: 'white', fontSize: '5rem' }}>Plan estratégico</h1>
            </div>
            <div className='descripcion__texto'>
                <p style={{ width: '80%' }}>Aquí es donde trazamos el rumbo para alcanzar nuestras metas y cumplir con nuestra visión de ser líderes en el mercado de cuidado infantil confiable y flexible. Reconocemos que en un mundo en constante transformación, la planificación estratégica es fundamental para el éxito sostenible de nuestra empresa.</p>
                <img src={personas} alt='personas unidas' className="img_personas"></img>
            </div>
            <div className='container__foda'>
                <img src={FODA} alt="FODA empresarial" className='FODA'></img>
            </div>
            <div className='container__vision'>
                <div className='vision__texto'>
                    <h1 className='titulo' style={{ margin: '0' }}>Visión</h1>
                    <p>Ser el líder en el mercado regional ofreciendo una solución innovadora y confiable para el cuidado de niños en el hogar.</p>
                </div>
                <img src={sonrisa} className='vision__icono'></img>
            </div>
            <div className='container__mision'>
                <img src={imgmision} style={{ width: '20%' }}></img>
                <div className='vision__texto'>
                    <h1 className='titulo' style={{ margin: '0' }}>Misión</h1>
                    <p style={{ textAlign: 'justify' }}>Proporcionar un servicio de cuidado de niños en el hogar a través de una aplicación, que ofrece un acceso innovador, cómodo y práctico de contratación simple, proporcionando perfiles de babysitters calificados, que brindan un servicio seguro y de calidad para que los papás encuentren  tranquilidad y seguridad en nuestro servicio sabiendo que sus hijos estarán en buenas manos mientras están ausentes.</p>
                </div>
            </div>
            <div style={{backgroundColor: 'rgb(205, 226, 236)'}}>
                <h1 className='titulo' style={{margin: '0', padding: '40px 0 20px 100px'}}>Objetivos Estratégicos</h1>
                <div className='container__objE'>
                    <div className='cajas_obj'>
                        <h1 className='cajas__numeros'>1.</h1>
                        <p className='cajas__texto'>Personalizar las preferencias de cuidado y encontrar cuidadoras que se adapten a sus necesidades específicas.</p>
                    </div>
                    <div className='cajas_obj'>
                        <h1 className='cajas__numeros'>2.</h1>
                        <p className='cajas__texto'>Implementar un sistema de calificaciones y reseñas que permita a las familias para evaluar la calidad del servicio.</p>
                    </div>
                    <div className='cajas_obj'>
                        <h1 className='cajas__numeros'>3.</h1>
                        <p className='cajas__texto'>Incentivar a las familias a dejar reseñas detalladas al finalizar cada servicio.</p>
                    </div>
                    <div className='cajas_obj'>
                        <h1 className='cajas__numeros'>4.</h1>
                        <p className='cajas__texto'>Incentivar a las familias a dejar reseñas detalladas al finalizar cada servicio.</p>
                    </div>
                    <div className='cajas_obj'>
                        <h1 className='cajas__numeros'>5.</h1>
                        <p className='cajas__texto'>Desarrollar campañas de sensibilización para resaltar los desafíos de los padres trabajadores.</p>
                    </div>
                    <div className='cajas_obj'>
                        <h1 className='cajas__numeros'>6.</h1>
                        <p className='cajas__texto'>Destacar las babysitters con altas calificaciones, tanto en la plataforma como en las redes sociales.</p>
                    </div>
                    <div className='cajas_obj'>
                        <h1 className='cajas__numeros'>7.</h1>
                        <p className='cajas__texto'>Organizar eventos y talleres en línea que aborden temas como el equilibrio entre el trabajo y la vida familiar.</p>
                    </div> 
                    <div className='cajas_obj'>
                        <h1 className='cajas__numeros'>8.</h1>
                        <p className='cajas__texto'>Colaborar con empresas que apoyen a los padres trabajadores y ofrezcan servicios o beneficios complementarios.</p>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default PlanEstrategico

