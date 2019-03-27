import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.css';
import Menu from './Menu.js';
import Botoes from './Botoes.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu>
          <nav>
          <Botoes className="btn-primary" label="Teste 1"/>
          </nav>
          
        </Menu>
      </div>
    );
  }
}

export default App;
