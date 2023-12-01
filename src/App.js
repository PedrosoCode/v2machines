// src/App.js
import React from 'react';
import './bootstrap/css/bootstrap.css';

function App() {
  return (
    <div className="container">
      <h1 className="mt-5">Meu Layout Responsivo</h1>
      <div className="row">
        <div className="col-md-6">
          <p>Conteúdo da coluna 1</p>
        </div>
        <div className="col-md-6">
          <p>Conteúdo da coluna 2</p>
        </div>
      </div>
    </div>
  );
}

export default App;
