// RegisterPage.js
import React, { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí iría la lógica para enviar los datos al backend
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h1 style={headerStyle}>Registro</h1>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input type="text" name="firstName" placeholder="Nombre" value={formData.firstName} onChange={handleChange} style={inputStyle} />
          <input type="text" name="lastName" placeholder="Apellido" value={formData.lastName} onChange={handleChange} style={inputStyle} />
          <input type="text" name="userName" placeholder="Nombre de usuario" value={formData.userName} onChange={handleChange} style={inputStyle} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={inputStyle} />
          <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} style={inputStyle} />
          <button type="submit" style={submitButtonStyle}>Registrarse</button>
        </form>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Utiliza el alto de la ventana gráfica para centrar verticalmente
};

const formContainerStyle = {
  border: '1px solid black',
  borderRadius: '8px',
  padding: '40px',
  maxWidth: '400px', // Ancho máximo para el formulario
  width: '100%', // Asegura que no sea más ancho que el máximo
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
  fontSize: '16px', // Tamaño de fuente para los inputs
  borderRadius: '4px', // Bordes redondeados para los inputs
  border: '1px solid #ccc', // Borde gris claro
  width: '100%', // Asegura que los inputs llenen el espacio disponible
};

const submitButtonStyle = {
  padding: '10px 15px',
  fontSize: '16px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007bff', // Color azul para el botón
  color: 'white',
  cursor: 'pointer',
  marginTop: '10px',
};

export default RegisterPage;
