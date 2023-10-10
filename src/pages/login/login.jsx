import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import '../../pages/login/login.css';
import { Link } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [buttonHovered, setButtonHovered] = useState(false);

    const paperStyle = { padding: 20, height: '50vh', width: '500px', margin: "20px auto", fontFamily: 'Gabarito', display: 'flex', flexDirection: 'column', gap: '20px', width: '60%', borderRadius: '10px' }
    const btnstyle = {
        backgroundColor: buttonHovered ? '#184b64' : '#E87D91',
        color: buttonHovered ? 'white' : 'black',
        width: '100%',
        borderRadius: '10px',
        fontFamily: 'Gabarito',
        margin: '20px 0',
        '&:hover': {
            backgroundColor: '#184b64',
            color: 'white',
        },
    };

    const handleLogin = () => {
        setUsernameError("");
        setPasswordError("");

        if (username === "la__tata" && password === "CeciNatyNoe") {
            console.log("Acceso concedido"); 
        } else {
            if (username !== "la__tata") {
                setUsernameError("Usuario incorrecto");
            }
            if (password !== "CeciNatyNoe") {
                setPasswordError("Contraseña incorrecta");
            }
        }
    };

    return (
        <div className="contenedor-login">
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2 className="titulo-2">Login</h2>
                </Grid>
                <TextField
                    label='Usuario'
                    placeholder='Ingrese su usuario'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={!!usernameError}
                    helperText={usernameError}
                />
                <TextField
                    label='Contraseña'
                    placeholder='Ingrese su contraseña'
                    type='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!passwordError}
                    helperText={passwordError}
                />
                <Link to='/plandenegocios'>
                <Button
                    style={btnstyle}
                    onClick={handleLogin}
                    onMouseEnter={() => setButtonHovered(true)}
                    onMouseLeave={() => setButtonHovered(false)}
                >
                    Sign in
                </Button>
                </Link>
            </Paper>
        </div>
    )
}

export default Login;
