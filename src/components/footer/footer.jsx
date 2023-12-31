import React from "react";
import './footer.css';
import logo_nin from '../../assets/tata-2.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import firma from '../../assets/firma.png'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="container_footer">
            <div className="contenedor_imagen">
                <Link to='/'><img src={logo_nin} alt="logo tata" className="img-footer"></img></Link>
            </div>
            <div className="redes_sociales">
                <h1 className="titulo">Seguinos en:</h1>
                <div className="botones_redes">
                    <Button variant="contained" clasname='btn_redes'sx={{
                        backgroundColor: 'white',
                        color: 'black',
                        width: '70px',
                        height: 'auto',
                        borderRadius: '100%',
                        '&:hover': {
                            backgroundColor: '#184b64',
                            color: 'white',
                            border:'none',
                            width: '75px',
                            height: '75px'
                        },

                    }}>
                        <FacebookIcon sx={{
                            fontSize: '60px',
                            color: '#E87D91',
                            '&:hover': {
                                color: 'white',
                            },
                        }}
                        /></Button>
                    <Button variant="contained" sx={{
                        backgroundColor: 'white',
                        color: 'black',
                        width: '70px',
                        height: 'auto',
                        borderRadius: '100%',
                        '&:hover': {
                            backgroundColor: '#184b64',
                            color: 'white',
                            border:'none',
                            width: '75px',
                            height: '75px'
                        },

                    }}>
                        <InstagramIcon sx={{
                            fontSize: '60px',
                            color: '#E87D91',
                            '&:hover': {
                                color: 'white',
                            },
                        }} />
                    </Button>
                    <Button variant="contained" sx={{
                        backgroundColor: 'white',
                        color: 'black',
                        width: '70px',
                        height: 'auto',
                        borderRadius: '100%',
                        '&:hover': {
                            backgroundColor: '#184b64',
                            color: 'white',
                            border:'none',
                            width: '75px',
                            height: '75px'
                        }

                    }}>
                        <LinkedInIcon sx={{
                            fontSize: '60px',
                            color: '#E87D91',
                            '&:hover': {
                                color: 'white',
                            },
                        }} />
                    </Button>
                </div>
                <div className="diseñado">
            <h2 className="subtitulo-footer">Diseñado por:</h2>
            <img src={firma} alt='firma' className="firma"/>

            </div>
            </div>
            
            <div className="container-form">
                <h2 className="subtitulo-footer">¿Te quedaste con alguna duda?</h2>
                <h1 className="titulo-2">Contactanos:</h1>
                <div className="form">
                <TextField label="Nombre" className="formulario_texto"/>
                <TextField label="Email" className="formulario_texto"/>
                <TextField
                    id="outlined-multiline-static"
                    label="Mensaje"
                    multiline
                    className="formulario_texto"
                    rows={4}
                />
                <Button className="redes"sx={{
                    fontFamily: 'Gabarito',
                    backgroundColor: '#184b64',
                    color: 'white',
                    width: '100%',
                    fontSize: '20px',
                    '&:hover': {
                        backgroundColor: '#trasparent',
                        border: 'solid',
                        color: 'black',
                        fontStyle: 'normal',
                        fontDisplay: 'swap',
                    },
                }}>Enviar</Button>
            </div>
            </div>
        </div>

    )

};