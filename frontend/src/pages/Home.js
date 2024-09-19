import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido al Generador de CV</h1>
      <Link to="/cv-generator">
        <button>Generar mi CV</button>
      </Link>
    </div>
  );
};

export default Home;
