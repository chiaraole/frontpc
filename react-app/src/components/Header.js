// Header.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [hoverInicio, setHoverInicio] = useState(false);
  const [hoverRegistro, setHoverRegistro] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '20px'
      }}
    >
      {/* Envolver el logo en un div y agregarle un onClick para redirigir a la HomePage */}
      <div
        onClick={() => navigate('/')}
        style={{
          cursor: 'pointer', // Cambia el cursor a un puntero para indicar que es clickeable
          fontSize: '1.5em',
          margin: 0 // Asegúrate de que no haya margen para mantener el estilo actual
        }}
      >
        BookMate
      </div>
      <div>
        <button
          onMouseEnter={() => setHoverInicio(true)}
          onMouseLeave={() => setHoverInicio(false)}
          style={{
            ...buttonStyle,
            color: hoverInicio ? '#007bff' : 'black'
          }}
          onClick={() => navigate('/login')} // Cambiado a /login
        >
          Inicio
        </button>
        <button
          onMouseEnter={() => setHoverRegistro(true)}
          onMouseLeave={() => setHoverRegistro(false)}
          style={{
            ...buttonStyle,
            color: hoverRegistro ? '#007bff' : 'black'
          }}
          onClick={() => navigate('/register')}
        >
          Registro
       </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  marginRight: '10px',
  padding: '5px 10px',
  outline: 'none',
  fontSize: '1em',
};

export default Header;
