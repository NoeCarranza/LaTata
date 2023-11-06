import React from "react";
import '../../pages/home/home.css'
import qr from '../../assets/app-1.png';
import { Link } from "react-router-dom";
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
                <div className="section2_texto">
                <h2 className="titulo" style={{margin:'0', color:'white',}}>Con la app todo es más fácil</h2>
                <h2 className="slogan" style={{color:'white',}}></h2>
                <Link to='https://www.figma.com/proto/YM6MYpfq8bK1aNDuGjWOxb/La-Tata-App?page-id=0%3A1&type=design&node-id=213-11792&viewport=3052%2C1532%2C0.15&t=QkjfvbU621jIzwoF-1&scaling=min-zoom&starting-point-node-id=213%3A11493&mode=design' className="slogan" style={{color:'white',}}> Escaneá el QR y descarga nuestra app, o hacé click acá</Link>
                </div>
                <div className="contenedor_qr">
                    <img src={qr} alt="qr de nuestra app" className="qr"></img>

                </div>
            </div>
        </section>
    )
}

export default Home