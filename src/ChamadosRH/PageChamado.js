import React, { Component } from "react";
import "../css/PageChamado.css";

import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Respostas } from "./Respostas.js";

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
    this.handleTransferencia = this.handleTransferencia.bind(this);
  }

  handleAnswer() {
    this.setState({ answerOpen: !this.state.answerOpen });
  }

  handleBack() {
    this.props.history.goBack();
  }

  handleTransferencia() {
    fetch("http://localhost:5000/api/Redirecionar", {
      method: "post",
      headers: { "Content-Type": "application/json;" },
      body: JSON.stringify(this.state.transf, this.state.numChamado)
    }).then(Response => Response.json());
  }

  render() {
    let lgClose = () =>
      this.setState({
        transferModal: false,
        answerModal: false,
        historyModal: false
      });

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
                onClick={() => this.setState({ transferModal: true })}
              >
                <FontAwesomeIcon icon="exchange-alt" /> Redirecionar
              </Button>

              <Modal
                size="lg"
                show={this.state.transferModal}
                onHide={lgClose}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Transferir Chamado {this.state.numChamado}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>Transferir para:</Form.Label>
                        <Form.Control
                          as="select"
                          onChange={evt =>
                            this.setState({
                              transf: {
                                ...this.state.transf,
                                setor: evt.target.value
                              }
                            })
                          }
                        >
                          <option>Setores</option>
                          <option>a</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Label>Prioridade:</Form.Label>
                        <Form.Control
                          as="select"
                          onChange={evt =>
                            this.setState({
                              transf: {
                                ...this.state.transf,
                                prioridade: evt.target.value
                              }
                            })
                          }
                        >
                          <option>Prioridade</option>
                          <option>a</option>
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>
                    <Form.Group>
                      <Form.Label>Descrição:</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="3"
                        onChange={evt =>
                          this.setState({
                            transf: {
                              ...this.state.transf,
                              descricao: evt.target.value
                            }
                          })
                        }
                      />
                    </Form.Group>
                    <Link to="/">
                      <Button
                        variant="primary"
                        onClick={this.handleTransferencia}
                      >
                        Transferir
                      </Button>
                    </Link>
                  </Form>
                </Modal.Body>
              </Modal>
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
