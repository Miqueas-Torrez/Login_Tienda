import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";//por lo iconos del login

const LoginForm = ({ onLogin, esAdmin }) => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (esAdmin) {
            if (usuario === 'admin' && contraseña === 'admin123') {
                onLogin('admin');
            } else {
                alert('Credenciales incorrectas para administrador');
            }
        } else {
            if (usuario === 'cliente' && contraseña === 'cliente123') {
                onLogin('cliente');
            } else {
                alert('Credenciales incorrectas para cliente');
            }
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>{esAdmin ? 'Login Administrador' : 'Login Cliente'}</h1>
                <div className='input-box'>
                    <input 
                        type='text' 
                        placeholder='Usuario' 
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required 
                    />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input 
                        type='password' 
                        placeholder='Password' 
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        required 
                    />
                    <FaLock className='icon' />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default LoginForm;

