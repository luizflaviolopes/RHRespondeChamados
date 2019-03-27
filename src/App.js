import React, { Component } from 'react';
import Chamado from './Chamado.js';

import './App.css';
import './css/bootstrap.css';
import Menu from './Menu.js'

var demandas = [{chamado:'1', nome:'1', assunto:'pagamnento',mensagem:'quando serei pago?'},
{nome:'2', assunto:'férias',mensagem:'minhas férias não estão no sistema', chamado:'2'},
{nome:'3', assunto:'licença',mensagem:'posso sair de çlicença novamente?', chamado:'3'},
{nome:'4', assunto:'teste',mensagem:'ops', chamado:'4'},]

class App extends Component {



  constructor(props){
    super(props);
    this.state = {dems:demandas};
  }
  
  render() {
    return (
      <div className="App">
        <table>
          <tbody>
          {this.state.dems.map(function(a,i){
            return (<Chamado nome={a.nome} assunto={a.assunto} mensagem={a.mensagem} atendente={a.chamado} /> )

          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
