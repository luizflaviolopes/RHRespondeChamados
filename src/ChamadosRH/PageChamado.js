
import React, { Component } from 'react';
import '../css/PageChamado.css';
import Botoes from '../Layout/Botoes.js';


export class PageChamado extends Component {
    
    constructor(props){
        super(props);      
    this.state = {...props.location.state}
    this.handleBack = this.handleBack.bind(this);
    }

    handleBack()
    {
      this.props.history.goBack();
    }

      render() {
        
        return(
          <div className="container-app">
            <div className='PageChamados'>
              <label>
                Chamado {this.state.numChamado}
              </label>
              <div className="form-group">
                <div className="row">
                  <div className="col-6">
                    <label>Nome: {this.state.solicitante}</label>
                  </div>
                  <div className="col-3">
                    <label> CPF: {this.state.cpf}</label>
                  </div>
                  <div className="col-3">
                    <label>Masp: {this.state.masp}</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-4">
                    <label>Celular: {this.state.cel}</label>
                  </div>
                  <div className="col-4">
                    <label>E-Mail: {this.state.email}</label>
                  </div>
                  <div className="col-4">
                    <label>Status: {this.state.status}</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-4">
                    <label>Assunto: {this.state.assunto}</label>
                  </div>
                  <div className="col-4">
                    <label>Data Abertura: {this.state.data}</label>
                  </div>
                  <div className="col-4">
                    <label>this.state.statu</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Descrição:</label>
                <p>
                  {this.state.desc}
                </p>
              </div>
              <div className="form-group">
              <div className="row text-center">
                <div className="col-4">
                  <Botoes styleName="btn-danger" onClick={this.handleBack} label="Voltar"/>
                </div>
                <div className="col-4">
                  <Botoes styleName="btn-primary" label="Redirecionar"/>
                </div>
                <div className="col-4">
                  <Botoes styleName="btn-success" label="Responder"/>
                </div>
              </div>
                
                
                
              </div>
            </div>
          </div>
        );
    }
}