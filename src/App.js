// src/index.js o src/App.js
import 'font-awesome/css/font-awesome.min.css';
import './App.css';  

// src/App.js
import React from 'react';
import Categorias from './components/Categorias'; 
import Header from './components/Header'; 
import Inicio from './components/Inicio'; 
import Sobre from './components/Sobre'; 
import Cursos from './components/Cursos';  
import Contacto from './components/Contacto';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Inicio />
      <Sobre/>
      <Categorias />
      <Cursos />
      <Contacto/>
      <Footer />
    </div>
  );
}

export default App;
