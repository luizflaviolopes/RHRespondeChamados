import React, { Component } from 'react';
import './css/bootstrap.css';
import Chamado from './Chamado.js';


var demandas = [{numChamado:'1', solicitante:'Renato Pain', assunto:'Teste',data:'3/28/2019',status:'Em atendimento'},
{numChamado:'11', solicitante:'Tron', assunto:'Teste',data:'3/27/2019',status:'N/A'},
{numChamado:'111', solicitante:'Claudinho', assunto:'Teste',data:'3/29/2019',status:'Finalizado'},
{numChamado:'1111', solicitante:'LF', assunto:'Teste',data:'3/10/2019',status:'Aberto'},]

class TabelaIndex extends Component {
    
    constructor(props){
        super(props);
        this.state = {dems:demandas};
      }

      render() {
        return(

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
        );
    }
}


export default TabelaIndex;