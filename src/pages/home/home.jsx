import React from "react";
import '../../pages/home/home.css'
import qr from '../../assets/qr.png'

function Home() {
    return (
        <section>
            <div className="contenedor_menu">
                <div className="section_1">
                    <div className="contenedor_tata">
                        <h1 className="LaTata"> La Tata</h1>
                        <h2 className="slogan">Calidad que abraza,</h2>
                        <h2 className="slogan">Cuidamos lo que más amas</h2>
                    </div>

                </div>
            </div>
            <div className="section_2">
                <div>
                <h2 className="titulo" style={{margin:'0', color:'white',}}>Con la app todo es más fácil</h2>
                <h2 className="slogan" style={{color:'white',}}>Escaneá el QR y descarga nuestra app acá</h2>
                </div>
                <div className="contenedor_qr">
                    <img src={qr} alt="qr de nuestra app" className="qr"></img>

                </div>
            </div>
        </section>
    )
}

export default Home