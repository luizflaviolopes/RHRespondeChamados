import React, { Component } from 'react';
import '../css/bootstrap.css';
import Chamado from './Chamado.js';
import '../css/Chamados.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Table from 'react-bootstrap/Table';


class TabelaIndex extends Component {

  constructor(props) {
    super(props);
    this.state = { dems: null, tipo: "" };
    this.BuscarNovo = this.BuscarNovo.bind(this);
    this.state.tipo = this.props.match.params.tipo;
    setTimeout(this.BuscarNovo.bind(this), 3000);
    this.BuscarDados = this.BuscarDados.bind(this);
  }

componentWillReceiveProps(nextProps){
 if(nextProps.match.params.tipo != this.props.match.params.tipo){
  fetch('http://localhost:5000/api/values?tipo=' + nextProps.match.params.tipo) 
  .then(response => response.json())
  .then(data => this.setState({ dems: data }))
   }
}

  BuscarNovo() {
    fetch('http://localhost:5000/api/values') 
      .then(response => response.json())
      .then(data => this.setState({ dems: [...this.state.dems, data] }));
  }


  componentDidMount() {
    setTimeout(
      function () {
        fetch('http://localhost:5000/api/values?tipo=' + this.state.tipo) 
          .then(response => response.json())
          .then(data => this.setState({ dems: data }))
      }.bind(this)
      , 1000);
  }

  BuscarDados(){

      fetch('http://localhost:5000/api/values?tipo=' + this.state.tipo) 
        .then(response => response.json())
        .then(data => this.setState({ dems: data }))

  }

  render() {
    if (this.state.dems == null)
      return (
        <div class="carregando">
          <FontAwesomeIcon icon="spinner" pulse />
        </div>
      );
    else
      return (
        <div className="container-app">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <FontAwesomeIcon icon="hashtag" />
                </th>
                <th>
                  <FontAwesomeIcon icon="user" /> Solicitante
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
              {this.state.dems.map(function (a, i) {
                return (<Chamado numChamado={a.numChamado} solicitante={a.solicitante} assunto={a.assunto} data={a.data} status={a.status} masp={a.masp} cpf={a.cpf} desc={a.desc} email={a.email} cel={a.cel} />)

              })}
            </tbody>
          </Table>
        </div>
      );
  }
}


export default TabelaIndex;