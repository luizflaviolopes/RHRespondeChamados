import React, { Component } from 'react';
import Chamado from './Chamado.js';
import Menu from './Menu.js';
import './App.css';
import './css/bootstrap.css';

import Botoes from './Botoes.js';

var demandas = [{numChamado:'1', nome:'Renato', assunto:'Front',masp:'1321321',mensagem:'Consegue visualizar tudo'},
{numChamado:'2', nome:'Michel', assunto:'Back',masp:'321654',mensagem:'Consegue visualizar tudo'},
{numChamado:'3', nome:'Claudio', assunto:'Suporte',masp:'987654132',mensagem:'Consegue visualizar tudo'},
{numChamado:'4', nome:'Luiz', assunto:'Full',masp:'564/654',mensagem:'Consegue visualizar tudo'},
{numChamado:'5', nome:'Endrew', assunto:'DBA',masp:'312465',mensagem:'Consegue visualizar tudo'},]

class App extends Component {



  constructor(props){
    super(props);
    this.state = {dems:demandas};
  }
  
  render() {
    return (
      
      <div className="container-fluir">
      
      <Menu>
      <Botoes className="btn-primary" label="teste1" styleName="btn-primary" />

      </Menu>



        <table className='table'>
          <thead>
            <th>
              Nome
            </th>
            <th>
              Cod.
            </th>
            <th>
               Assunto 
            </th>
            <th>
              Masp
            </th>
          </thead>
          <tbody>
          {this.state.dems.map(function(a,i){
<<<<<<< HEAD
            return (<Chamado nome={a.nome} assunto={a.assunto} mensagem={a.mensagem} protocolo={a.protocolo} /> )
=======
            return (<Chamado numChamado={a.numChamado} nome={a.nome} assunto={a.assunto} mensagem={a.mensagem} masp={a.masp} /> )
>>>>>>> 0b172c05ce2baa9cb0710953f5f8114dc0694124

          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
