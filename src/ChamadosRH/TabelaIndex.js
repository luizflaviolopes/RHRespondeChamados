import React, { Component } from 'react';
import '../css/bootstrap.css';
import Chamado from './Chamado.js';
import '../css/Chamados.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Table from 'react-bootstrap/Table';


/*var demandas = [{numChamado:'1', solicitante:'Renato Tiago Nacimento Oliveira Junio', assunto:'Teste',data:'3/28/2019',status:'Em atendimento',masp: '123654',
cpf:'12365412332',
desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
email: 'rhresponde@gov.com.br', cel: '956287083'},
{numChamado:'2', solicitante:'Luiz Flavio', assunto:'Teste',data:'3/28/2019',status:'Em atendimento',masp: '123654',
cpf:'12365412332',
desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
email: 'rhresponde@gov.com.br', cel: '956287083'},
{numChamado:'3', solicitante:'Drew Barbosa', assunto:'Teste',data:'3/28/2019',status:'Em atendimento',masp: '123654',
cpf:'12365412332',
desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
email: 'rhresponde@gov.com.br', cel: '956287083'},
{numChamado:'4', solicitante:'Claudio Alex ', assunto:'Teste',data:'3/28/2019',status:'Em atendimento',masp: '123654',
cpf:'12365412332',
desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
email: 'rhresponde@gov.com.br', cel: '956287083'},
{numChamado:'5', solicitante:'Michel Dassan ', assunto:'Teste',data:'3/28/2019',status:'Em atendimento',masp: '123654',
cpf:'12365412332',
desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
email: 'rhresponde@gov.com.br', cel: '956287083'},
{numChamado:'6', solicitante:'Andre Thor', assunto:'Teste',data:'3/28/2019',status:'Em atendimento',masp: '123654',
cpf:'12365412332',
desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
email: 'rhresponde@gov.com.br', cel: '956287083'},]*/

class TabelaIndex extends Component {
    
    constructor(props){
        super(props);
        this.state = {dems:null};
        this.BuscarNovo = this.BuscarNovo.bind(this);
        setTimeout(this.BuscarNovo.bind(this),3000);
      }

      BuscarNovo(){
        fetch('http://localhost:5000/api/values') //http://10.33.132.76/api/values/1
          .then(response => response.json())
          .then(data => this.setState({ dems: [...this.state.dems, data]}));
      }


      componentDidMount(){
        setTimeout(
          function(){
        fetch('http://localhost:5000/api/values') //10.33.132.76
          .then(response => response.json())
          .then(data => this.setState({ dems: data}))}.bind(this)
        ,1000);
      }

      render() {
        if(this.state.dems == null)
        return(
          <div class="carregando">
            <FontAwesomeIcon icon="spinner" pulse />
          </div>
        );
        else
        return(
          <div className="container-app">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    <FontAwesomeIcon icon="hashtag"/>
                  </th>
                  <th>
                    <FontAwesomeIcon icon="user"/> Solicitante
                  </th>
                  <th>
                    <FontAwesomeIcon icon="comment-dots" /> Assunto 
                  </th>
                  <th>
                    <FontAwesomeIcon icon="calendar-day" /> Data
                  </th>
                  <th>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.dems.map(function(a,i){
                  return (<Chamado numChamado={a.numChamado} solicitante={a.solicitante} assunto={a.assunto} data={a.data} status={a.status} masp={a.masp} cpf={a.cpf} desc={a.desc} email={a.email} cel={a.cel}/> )

                })}
              </tbody>
            </Table>
          </div>
        );
    }
}


export default TabelaIndex;