import React, { useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import './index.css'; 

function App() {
    const [rolUsuario, setRolUsuario] = useState(null);
    const [esAdmin, setEsAdmin] = useState(false);  
    const handleLogin = (rol) => {
        setRolUsuario(rol);
    };

    const handleLogout = () => {
        setRolUsuario(null);
        setEsAdmin(false); 
    };

    const mostrarLoginAdmin = () => {
        setEsAdmin(true); 
        setRolUsuario(null); 
    };

    return (
        <div className="App">
            {/*Pantalla principal  */}
            <header>
                <h1>Bienvenido en su tienda en linea</h1>
                <button onClick={mostrarLoginAdmin}>Login Administrador</button>
            </header>

            {/* Mostrar el formulario de login correcto */}
            {!rolUsuario && (
                <LoginForm onLogin={handleLogin} esAdmin={esAdmin} />
            )}

            {/* Mostrar paneles de cliente o administrador */}
            {rolUsuario === 'admin' && (
                <div>
                    <h2>Panel de Administración</h2>
                    <button onClick={handleLogout}>Cerrar Sesión</button>
                </div>
            )}
            {rolUsuario === 'cliente' && (
                <div>
                    <h2>Panel de Cliente</h2>
                    <button onClick={handleLogout}>Cerrar Sesión</button>
                </div>
            )}
        </div>
    );
}

export default App;
