import React from "react";
import './footer.css';
import logo_nin from '../../assets/tata-nenes.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import firma from '../../assets/firma.png'

export default function Footer() {
    return (
        <div className="container_footer">
            <div>
                <img src={logo_nin} alt="logo tata" className="img-footer"></img>
            </div>
            <div className="redes">
                <h1 className="titulo">Seguinos en:</h1>
                <div className="botones_redes">
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
            <h2 className="subtitulo">Diseñado por:</h2>
            <img src={firma} alt='firma' className="firma"/>

            </div>
            </div>
            
            <div className="container-form">
                <h2 className="subtitulo">¿Te quedaste con alguna duda?</h2>
                <h1 className="titulo-2">Contactanos:</h1>
                <div className="form">
                <TextField label="Nombre"/>
                <TextField label="Email"/>
                <TextField
                    id="outlined-multiline-static"
                    label="Mensaje"
                    multiline
                    rows={4}
                    sx={{
                        width:'350px',
                    }}
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