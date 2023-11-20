// LoginPage.js
import React, { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí iría la lógica para manejar el inicio de sesión
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h1 style={headerStyle}>Inicio de Sesión</h1>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
          />
          <button type="submit" style={submitButtonStyle}>Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

// Estilos

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const formContainerStyle = {
  border: '1px solid black',
  borderRadius: '8px',
  padding: '40px',
  maxWidth: '400px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'white',
};

const headerStyle = {
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
};

const inputStyle = {
  marginBottom: '10px',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '100%',
};

const submitButtonStyle = {
  padding: '10px 15px',
  fontSize: '16px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007bff',
  color: 'white',
  cursor: 'pointer',
  marginTop: '10px',
};

export default LoginPage;
