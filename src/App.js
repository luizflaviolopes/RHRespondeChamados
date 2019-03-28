import React, { Component } from 'react';
import Chamado from './Chamado.js';
import Menu from './Menu.js';
import './App.css';
import './css/bootstrap.css';

import Botoes from './Botoes.js';

var demandas = [{numChamado:'1', solicitante:'Renato', assunto:'Teste',data:'1321321',status:'Em atendimento'},
{numChamado:'11', solicitante:'Tron', assunto:'Teste',data:'1321321',status:'N/A'},
{numChamado:'111', solicitante:'Claudinho', assunto:'Teste',data:'1321321',status:'Finalizado'},
{numChamado:'1111', solicitante:'LF', assunto:'Teste',data:'1321321',status:'Aberto'},]

class App extends Component {



  constructor(props){
    super(props);
    this.state = {dems:demandas};
  }
  
  render() {
    return (
      
      <div className="container-fluir">
      
      <Menu>
      <Botoes className="btn-primary" label="Relatórios" styleName="btn-primary" />
      <Botoes className="btn-primary" label="Acompanhamento" styleName="btn-primary" />

      </Menu>

      

        <table className='table'>
          <thead>
            <tr>
            <th>
              Nº do Chamado
            </th>
            <th>
              Solicitante
            </th>
            <th>
               Assunto 
            </th>
            <th>
              Data
            </th>
            <th>
              Status
              </th>
            </tr>
          </thead>
          
          <tbody>
          {this.state.dems.map(function(a,i){
            return (<Chamado numChamado={a.numChamado} solicitante={a.solicitante} assunto={a.assunto} data={a.data} status={a.status} /> )

          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
