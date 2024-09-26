import React, { useState } from 'react';

function Modal({ isOpen, closeModal, onLoginSuccess }) {
  const [formData, setFormData] = useState({ usuario: '', contrasena: '', email: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isRegistering ? 'http://localhost:3000/api/register' : 'http://localhost:3000/api/login';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Agregar esta línea para permitir el manejo de cookies de sesión
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        if (isRegistering) {
          alert('Usuario registrado correctamente');
          setIsRegistering(false); // Cambiar al formulario de inicio de sesión después de registrar
        } else {
          onLoginSuccess(); // Llama a la función para redirigir o cerrar el modal
        }
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage('Error en la conexión al servidor');
    }
  };

  return (
    <>
      <div id="Mimodal" className={`modal ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }}>
        <div className="modal-contenido">
          <div className="contenedor-formulario">
            <form onSubmit={handleSubmit}>
              <h2 className="titul-sesion">{isRegistering ? 'Registro' : 'Iniciar Sesión'}</h2>
              <div className="form-group">
                <label className="text-sesion" htmlFor="usuario">Usuario:</label>
                <input type="text" id="usuario" name="usuario" value={formData.usuario} onChange={handleChange} required />
              </div>
              {isRegistering && (
                <div className="form-group">
                  <label className="text-sesion" htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              )}
              <div className="form-group">
                <label className="text-sesion" htmlFor="contrasena">Contraseña:</label>
                <input type="password" id="contrasena" name="contrasena" value={formData.contrasena} onChange={handleChange} required />
              </div>
              
              <button type="submit" className="btn-iniciar">
                {isRegistering ? 'Registrar' : 'Iniciar Sesión'}
              </button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <a className="text-reg" href="#" onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? '¿Ya tienes una cuenta? Inicia Sesión' : 'Regístrate'}
              </a>
              <div className="otros-botones">
                <button type="button" className="btn-redondo1">F</button>
                <button type="button" className="btn-redondo2">G</button>
              </div>
            </form>
          </div>
          <span className="cerrar" onClick={closeModal}>&times;</span>
        </div>
      </div>
    </>
  );
}

export default Modal;
