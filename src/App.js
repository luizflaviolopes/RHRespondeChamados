import React, { Component } from 'react';
import Menu, { Cabecalho, Rodape } from './Menu.js';
import './css/App.css';
import './css/bootstrap.css';
import TabelaIndex from './TabelaIndex.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {PageChamado} from './PageChamado.js';
import Botoes from './Botoes.js';


class App extends Component {
  
  render() {
    return (
      
      <div className="container-fluir">
      <Cabecalho/>
      <Menu>
        <Botoes label="Relatórios" styleName="btn-menu" />
        <Botoes label="Acompanhamento" styleName="btn-menu" />
        <Botoes label="Respostas Automaticas" styleName="btn-menu" />
      </Menu>
      <div className="row">
        <div className="col-2">

        </div>
        <div className="col-10">
          <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={TabelaIndex} />
                <Route path="/DetalhamentoChamado" component={PageChamado} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
      
      <Rodape/>
      </div>
    );
  }
}

export default App;
