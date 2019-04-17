import React, { Component } from "react";
import "../css/bootstrap.css";
import Chamado from "./Chamado.js";
import "../css/Chamados.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap/Table";
import Cabecalho from "./Cabecalho";

class TabelaIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { dems: null, tipo: "",
     filters: {}, all: null };
    this.state.tipo = this.props.match.params.tipo;
    this.handleFiltering = this.handleFiltering.bind(this);
  }

  handleFiltering(a){

    let newFilter = this.state.filters;
    newFilter[a.propertie] = a.value;
    var checkFilter = function(element){
      
      let retorno = true;
      Object.keys(newFilter).every(function(p,i){
        
        if(newFilter[p] != "" && !element[p].includes(newFilter[p]))
        {
        retorno = false;
        return false;
        }
      })
      return retorno
      
    }
    var newDems = this.state.all.filter(function(a,i){
      return checkFilter(a)

    })

    this.setState({filters: newFilter, dems: newDems});

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.tipo != this.props.match.params.tipo) {
      fetch(
        "http://localhost:5000/api/values?tipo=" + nextProps.match.params.tipo
      )
        .then(response => response.json())
        .then(data => this.setState({ dems: data }));
    }
  }

  BuscarNovo() {
    fetch("http://localhost:5000/api/values")
      .then(response => response.json())
      .then(data => this.setState({ dems: [...this.state.dems, data] }));
  }

  componentDidMount() {
    setTimeout(
      function () {
        fetch("http://localhost:5000/api/values?tipo=" + this.state.tipo)
          .then(response => response.json())
          .then(data => this.setState({ dems: data, all:data }));
      }.bind(this)
    );
  }

  render() {
    let filterObj = this.state.filters;
    var checkFilter = function(element){
      

      for(var p in Object.keys(filterObj)){
        if(filterObj[p] != "" && element[p] != filterObj[p])
        return false;
      }

      return true
    }


    if (this.state.dems == null)
      return (
        <div className="carregando">
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
                  <div>
                    <div className="float-left d-inline">
                      <FontAwesomeIcon icon="hashtag" />
                    </div>
                    <div className="float-right d-inline">
                      <FontAwesomeIcon icon="filter" />
                    </div>
                  </div>
                </th>
                <th>
                  <div>
                    <div className="float-left d-inline">
                      <FontAwesomeIcon icon="user"/> Solicitante
                    </div>
                    <div className="float-right d-inline">
                      <FontAwesomeIcon icon="filter" />
                    </div>
                  </div>
                </th>
                <th>
                  <div>
                    <div className="float-left d-inline">
                      <FontAwesomeIcon icon="comment-dots" /> Assunto
                    </div>
                    <div className="float-right d-inline">
                      <FontAwesomeIcon icon="filter" />
                    </div>
                  </div>
                </th>
                <th>
                  <Cabecalho label="Data" icone="calendar-day" FilterParam="data" onFilter={this.handleFiltering}/>
                </th>
                <th>
                  <Cabecalho label="Status" icone="" FilterParam="status" onFilter={this.handleFiltering}/>
                </th>
              </tr>
            </thead>
              <tbody>
                {this.state.dems.map(function (a, i) {
                  if(checkFilter(a))
                  return (
                    <Chamado
                      numChamado={a.numChamado}
                      solicitante={a.solicitante}
                      assunto={a.assunto}
                      data={a.data}
                      status={a.status}
                      masp={a.masp}
                      cpf={a.cpf}
                      desc={a.desc}
                      email={a.email}
                      cel={a.cel}
                    />
                  );
                })}
              </tbody>
          </Table>
        </div>
          );
      }
    }
    
    export default TabelaIndex;
