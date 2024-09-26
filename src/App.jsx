import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Modal from './components/Modal';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import Submenu from './components/Submenu';
import UserList from './components/UserList';
import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Para gestionar el estado de la sesión

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Cambiar el estado a "iniciado sesión" después de un inicio de sesión exitoso
    closeModal(); // Cerrar el modal después de iniciar sesión
  };

  const handleLogout = () => {
    // Realiza la solicitud para cerrar sesión
    fetch('http://localhost:3000/api/logout')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setIsLoggedIn(false); // Cambiar el estado a "no iniciado sesión" después de cerrar sesión
          alert('Sesión cerrada correctamente');
        } else {
          alert('Error al cerrar sesión');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error en la conexión con el servidor');
      });
  };

  return (
    <div>
      {!isLoggedIn ? (
        <>
          <Navbar openModal={openModal} />
          <Carousel />
          <Modal isOpen={isModalOpen} closeModal={closeModal} onLoginSuccess={handleLoginSuccess} />
          <DownloadSection />
          <Footer />
          <Submenu />
        </>
      ) : (
        // Muestra la lista de usuarios si el usuario ha iniciado sesión
        <UserList logout={handleLogout} />
      )}
    </div>
  );
}

export default App;
