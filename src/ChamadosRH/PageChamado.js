
import React, { Component } from 'react';
import '../css/PageChamado.css';
import Botoes from '../Layout/Botoes.js';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export class PageChamado extends Component {

  constructor(props) {
    super(props);
    this.state = { ...props.location.state, transferModal: false, answerModal: false, historyModal: false }
    this.handleBack = this.handleBack.bind(this);

  }


  handleBack() {
    this.props.history.goBack();
  }

  render() {
    let lgClose = () => this.setState({ transferModal: false, answerModal: false, historyModal: false });
    return (
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
              <Col sm={3}>
                <Link to="/"><Botoes styleName="btn-danger" label="Voltar" /></Link>
              </Col>
              <Col sm={3}>
                <Button variant="primary" onClick={() => this.setState({ transferModal: true })}>
                  Redirecionar
                    </Button>


                <Modal size="lg" show={this.state.transferModal} onHide={lgClose} aria-labelledby="example-modal-sizes-title-lg">
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
                          <Form.Control as="select">
                            <option>Setores</option>
                            <option>...</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>Pelo Motivo:</Form.Label>
                          <Form.Control type="text" placeholder="Motivo" />
                        </Form.Group>
                      </Form.Row>
                      <Form.Group>
                        <Form.Label>Descrição:</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                      </Form.Group>
                      <Link to="/">
                        <Button variant="primary" type="submit">
                          Transferir
                            </Button>
                      </Link>
                    </Form>

                  </Modal.Body>
                </Modal>



              </Col>
              <Col sm={3}>
                <Button variant="success" onClick={() => this.setState({ answerModal: true })}>
                  Responder
                </Button>


                <Modal size="lg" show={this.state.answerModal} onHide={lgClose} dialogClassName="sizeModalLG" aria-labelledby="example-modal-sizes-title-lg">
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      Resposta ao Chamado {this.state.numChamado}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>

                    <Form>
                      <Form.Group>
                      {['radio'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check  label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat nibh risus, non suscipit dui accumsan vel. Mauris dignissim quis velit vitae vulputate. Donec vehicula sollicitudin quam, nec tempor sem tincidunt eget. Phasellus porta elit elit, at gravida purus convallis eget. Proin in dapibus justo. Integer non orci eu leo tristique malesuada eu sed nulla. Fusce est dui, rutrum pretium sem in, molestie ullamcorper mauris. Pellentesque lobortis velit vitae nulla placerat sagittis. Nullam nulla lectus, efficitur condimentum metus eu, tempor luctus dui. Sed nec ligula nec orci finibus cursus sollicitudin ac sapien. Suspendisse in dui mattis, lobortis sem et, pulvinar augue. Donec viverra nulla vitae iaculis mattis. Phasellus sagittis, ante nec varius ultricies, nisl ante molestie turpis, in commodo erat quam nec erat. Aliquam nec scelerisque nulla. Pellentesque quis varius est, eu sollicitudin nisl. Nam finibus eros vitae dignissim aliquam.' type={type} id={`inline-${type}-1`} />
                          <Form.Check  label="2" type={type} id={`inline-${type}-2`} />
                          <Form.Check
                            inline
                            disabled
                            label="bla (disabled)"
                            type={type}
                            id={`inline-${type}-3`}
                          />
                        </div>
                      ))}
                      </Form.Group>

                      <Link to="/">
                        <Button variant="primary" type="submit">
                          Responder
                        </Button>
                      </Link>
                    </Form>
                  </Modal.Body>
                </Modal>


              </Col>
              <Col sm={3}>
                <Button variant="secondary" onClick={() => this.setState({ historyModal: true })}>
                  Histórico
                </Button>

              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}