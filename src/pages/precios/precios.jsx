import React from "react";
import '../precios/precios.css';

function Precios() {
    return (
        <section className="precios">
            <div className="container_precios">
                <h1 className="titulo-precios">¿Cómo determinamos los precios del servicio?</h1>
                <p className="texto-precios">Se usan muchos puntos de datos para calcular la tarifa por adelantado.
                    Las tarifas por adelantado dependen de la distancia y la duración estimadas del servicio. La estimación puede variar según la demanda y factores reales.
                    <br/>
                    <br/>
                    Entre estos factores clave se encuentran los costos operativos, que incluyen salarios de las babysitters, gastos de tecnología, seguros y otros gastos necesarios para el crecimiento sostenible de La Tata.</p>
            </div>
        </section>
    )
}

export default Precios