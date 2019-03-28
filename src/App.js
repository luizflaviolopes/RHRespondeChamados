import React, { Component } from 'react';
import Menu from './Menu.js';
import './App.css';
import './css/bootstrap.css';
import TabelaIndex from './TabelaIndex.js';

import Botoes from './Botoes.js';


class App extends Component {
  
  render() {
    return (
      
      <div className="container-fluir">
      
      <Menu>
      <Botoes className="btn-primary" label="Relatórios" styleName="btn-primary" />
      <Botoes className="btn-primary" label="Acompanhamento" styleName="btn-primary" />
      </Menu>
      
      <TabelaIndex/>
      </div>
    );
  }
}

export default App;
