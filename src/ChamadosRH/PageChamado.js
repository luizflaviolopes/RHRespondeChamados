
import React, { Component } from 'react';
import '../css/PageChamado.css';
import Botoes from '../Layout/Botoes.js';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'





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
                <span>
                  Chamado: 
                </span>
                {this.state.numChamado}
              </label>
              <div className="form-group">
                <Row>
                  <Col sm={6}>
                    <label>
                      <span>
                        Nome:  
                      </span>
                      {this.state.solicitante}</label>
                  </Col>
                  <Col sm={3}>
                    <label>
                      <span>
                        CPF: 
                      </span>
                        {this.state.cpf}</label>
                  </Col>
                  <Col sm={3}>
                    <label>
                      <span>
                        Masp: 
                      </span>
                      {this.state.masp}</label>
                  </Col>
                </Row>
              </div>
              <div className="form-group">
              <Row>
                  <Col sm={4}>
                    <label>
                      <span>
                        Celular:
                      </span>
                      {this.state.cel}
                    </label>
                  </Col>
                  <Col sm={4}>
                    <label>
                      <span>
                        E-Mail:
                      </span>
                      {this.state.email}
                    </label>
                  </Col>
                  <Col sm={4}>
                    <label>
                      <span>
                      Status: 
                      </span>
                      {this.state.status}
                    </label>
                  </Col>
              </Row>
              </div>
              <div className="form-group">
                <Row>
                    <Col sm={4}>
                      <label>
                        <span>
                        Assunto: 
                        </span>
                        {this.state.assunto}</label>
                    </Col>
                    <Col sm={4}>
                      <label>
                        <span>
                          Data Abertura: 
                        </span>
                        {this.state.data}</label>
                    </Col>
                    <Col sm={4}>
                      <label>
                        <span>
                          this.state.statu
                          </span>
                      </label>
                    </Col>
                </Row>
              </div>
              <div className="form-group">
                <label>
                  <span>
                    Descrição:
                    </span>  
                </label>
                <p>
                  {this.state.desc}
                </p>
              </div>
              <div className="form-group">
                <Row className="row text-center">
                <Col sm={4}>
                  <Link to="/"><Botoes styleName="btn-danger" label="Voltar"/></Link>
                  </Col>
                    <Col sm={4}>
                    <Botoes styleName="btn-primary" label="Redirecionar" data-toggle="modal" data-target/>
                    </Col>
                    <Col sm={4}>
                    <Botoes styleName="btn-success" label="Responder"/>
                    </Col>
                </Row>
              </div>
            </div>
          </div>
        );
    }
}