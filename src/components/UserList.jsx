import React, { useState, useEffect } from 'react';

function UserStatus({ logout }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/current-user', {
          method: 'GET',
          credentials: 'include', 
        });
        const data = await response.json();
        if (data.success) {
          setUser(data.user);
        } else {
          alert('Error al obtener la información del usuario');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error en la conexión con el servidor');
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Bienvenido, {user}</h1>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
}

export default UserStatus;
