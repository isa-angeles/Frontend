import React, { useState } from 'react';

function Submenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-menu">
      <button onClick={toggleMenu} className="floating-button">
        Objetos
      </button>
      {isOpen && (
        <ul className="dropdown-menu show">
          <li><a className="dropdown-item" href="#">Personajes</a></li>
          <li><a className="dropdown-item" href="#">Skins</a></li>
          <li><a className="dropdown-item" href="#">Armas</a></li>
          <li><a className="dropdown-item" href="#">Items</a></li>
        </ul>
      )}
    </div>
  );
}

export default Submenu;
