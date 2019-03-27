import React, { Component } from 'react';
import Chamado from './Chamado.js';
import logo from './logo.svg';
import './App.css';

var demandas = [{nome:'1', assunto:'pagamnento',mensagem:'quando serei pago?', atendente:'nº1'},
{nome:'2', assunto:'férias',mensagem:'minhas férias não estão no sistema', atendente:'nº2'},
{nome:'3', assunto:'licença',mensagem:'posso sair de çlicença novamente?', atendente:'nº3'},
{nome:'4', assunto:'teste',mensagem:'ops', atendente:'nº1'},]

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
            return (<Chamado nome={a.nome} assunto={a.assunto} mensagem={a.mensagem} atendente={a.atendente} /> )

          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
