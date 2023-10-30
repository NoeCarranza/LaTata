import React from "react";
import '../app/aplicacion.css'
import { styled } from '@mui/material/styles';
import AppleIcon from '@mui/icons-material/Apple';
import Button from '@mui/material/Button';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import celus from '../../assets/celus.png';


function Aplicacion() {
    return (
        <section className="container-app">
            <div className="app">
                <div>
                    <h1 className="titulo" style={{ padding: '20px', margin: '0' }}>El cuidado infantil siempre al alcance de nuestra aplicación</h1>
                    <h2 className="subtitulo" style={{ paddingLeft: '20px', margin: '0' }}>Encontrá rápidamente una babysitter disponible las 24 horas los 7 días de la semana a través de nuestra app.</h2>
                </div>
                <div className="botones-store">
                    <Button startIcon={<AppleIcon />}
                        sx={{
                            backgroundColor: '#E87D91',
                            width: '150px',
                            height: '40px',
                            display: 'flex',
                            paddingTop: '8px',
                            flexDirection: 'row',
                            alignItems: 'stretch',
                            color: 'black',
                            fontFamily: 'Gabarito',
                            justifyContent: 'space-around',

                            '&:hover': {
                                fontStyle: 'normal',
                                backgroundColor: '#184b64',
                                color: 'white',
                                width: '150px',
                                height: '40px',
                            }
                        }}>
                        Apple Store
                    </Button>
                    <Button startIcon={<ShopTwoIcon />}
                        sx={{
                            backgroundColor: '#E87D91',
                            width: '150px',
                            height: '40px',
                            display: 'flex',
                            paddingTop: '8px',
                            flexDirection: 'row',
                            alignItems: 'stretch',
                            color: 'black',
                            fontFamily: 'Gabarito',
                            justifyContent: 'space-around',

                            '&:hover': {
                                fontStyle: 'normal',
                                backgroundColor: '#184b64',
                                color: 'white',
                                width: '150px',
                                height: '40px',
                            }
                        }}>
                        Play Store
                    </Button>
                </div>
            </div>
            <div>
                <img src={celus} alt="ejemplo de la plataforma" className="img-celus"></img>
            </div>
        </section>
    )
}

export default Aplicacion