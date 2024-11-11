import React, { useState, useEffect } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <a href="" className="logo">
        <i className="fas fa-graduation-cap"></i> AprendeYa
      </a>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a href="#inicio">Inicio</a>
        <a href="#sobre">Sobre Nosotros</a>
        <a href="#cursos">Cursos</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <div className="iconos">
      <div id="login-btn" className="fas fa-user"></div>
        <div id="menu-btn" className="iconos" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
