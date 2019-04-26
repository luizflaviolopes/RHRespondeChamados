import React, { Component } from "react";
import "../css/PageChamado.css";

import { Link } from "react-router-dom";
import { Modal, Form, Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Respostas } from "./Respostas.js";
import { ModalTransferir } from "./ModalTransferir";

export class PageChamado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.location.state,
      transferModal: false,
      answerModal: false,
      historyModal: false,
      answerOpen: false
    };
    this.handleBack = this.handleBack.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleAnswer() {
    this.setState({ answerOpen: !this.state.answerOpen });
  }

  handleBack() {
    this.props.history.goBack();
  }

  handleCloseModal(modal) {
    this.setState({ [modal]: false });
  }

  render() {
    return (
      <div className="PageChamados">
        <div className="form-group text-center">
          <label>
            <span>Chamado:</span>
            {this.state.numChamado}
          </label>
        </div>
        <div className="form-group">
          <Row>
            <Col sm={6}>
              <label>
                <span>Nome:</span>
                {this.state.solicitante}
              </label>
            </Col>
            <Col sm={3}>
              <label>
                <span>CPF:</span>
                {this.state.cpf}
              </label>
            </Col>
            <Col sm={3}>
              <label>
                <span>Masp:</span>
                {this.state.masp}
              </label>
            </Col>
          </Row>
        </div>
        <div className="form-group">
          <Row>
            <Col sm={4}>
              <label>
                <span>Celular:</span>
                {this.state.cel}
              </label>
            </Col>
            <Col sm={4}>
              <label>
                <span>E-Mail:</span>
                {this.state.email}
              </label>
            </Col>
            <Col sm={4}>
              <label>
                <span>Status:</span>
                {this.state.status}
              </label>
            </Col>
          </Row>
        </div>
        <div className="form-group">
          <Row>
            <Col sm={4}>
              <label>
                <span>Assunto:</span>
                {this.state.assunto}
              </label>
            </Col>
            <Col sm={4}>
              <label>
                <span>Data Abertura:</span>
                {this.state.data}
              </label>
            </Col>
          </Row>
        </div>
        <div className="form-group">
          <label>
            <span>Descrição:</span>
          </label>
          <p>{this.state.desc}</p>
        </div>
        <div className="form-group">
          <Row className="row text-center">
            <Col sm={3}>
              <Link to="/">
                <Button variant="danger">
                  <FontAwesomeIcon icon="chevron-circle-left" /> Voltar
                </Button>
              </Link>
            </Col>
            <Col sm={3}>
              <Button
                variant="primary"
                onClick={() =>
                  this.setState({
                    transferModal: true
                  })
                }
              >
                <FontAwesomeIcon icon="exchange-alt" /> Redirecionar
              </Button>

              <ModalTransferir
                show={this.state.transferModal}
                modalName="transferModal"
                close={this.handleCloseModal}
                numChamado={this.state.numChamado}
              />
            </Col>
            <Col sm={3}>
              <Button variant="success" onClick={this.handleAnswer}>
                <FontAwesomeIcon icon="file-alt" /> Responder
              </Button>
            </Col>
            <Col sm={3}>
              <Button
                variant="secondary"
                onClick={() => this.setState({ historyModal: true })}
              >
                <FontAwesomeIcon icon="history" /> Histórico
              </Button>
            </Col>
          </Row>
        </div>
        {this.state.answerOpen ? (
          <Respostas closeAnswer={this.handleAnswer} />
        ) : null}
      </div>
    );
  }
}
