import React, { Component } from "react";
import "../css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "../css/Botoes.css";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import MenuUser from "./SideMenuUser.js";


export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editUser: false,
      newUser: false
    }
  }
  render() {
    let lgClose = () => this.setState({ editUser: false, newUser: false });
    return (
      <div className="user">
      <MenuUser/>
        <div className="">
        
          <Button className="btn-menu"
             onClick={() => this.setState({ newUser: true })}
          >
            Novo Usuario
          </Button>
          <Modal
                  size="lg"
                  show={this.state.newUser}
                  onHide={lgClose}
                  aria-labelledby="newUser"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="newtUser">
                      Editar Usuario
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Row>
                        <Col sm="6">
                          <Form.Group>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Nome Usuario"
                              
                            />
                          </Form.Group>
                        </Col>
                        <Col sm="6">
                          <Form.Group>
                            <Form.Label>CPF</Form.Label>
                            <Form.Control
                              type="text"value="CPF"
                              placeholder="CPF do Usuario"
                              
                            />
                          </Form.Group>
                        </Col>
                        <Col sm="6">
                          <Form.Group>
                            <Form.Label>
                              Maps
                              </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Maps do Usuario"
                              
                            />
                          </Form.Group>
                        </Col>
                        <Col sm="6">
                          <Form.Group>
                            <Form.Label>
                              Login
                              </Form.Label>
                            <Form.Control
                              type="text"value="CPF"
                              placeholder="Login do Usuario"
                              
                            />
                          </Form.Group>
                        </Col>
                        <Col sm="12">
                          <Form.Group>
                            <Form.Label>
                              Perfil
                              </Form.Label>
                            {['checkbox'].map(type => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                  type={type}
                                  label={"Atendente 1"}
                                />

                                <Form.Check
                                  type={type}
                                  label={"Atendente 2"}
                                />

                                <Form.Check
                                  type={type}
                                  label={"Administrador Orgão"}
                                />
                              </div>
                            ))}
                          </Form.Group>
                        </Col>
                      </Form.Row>

                    </Form>
                  </Modal.Body>
                </Modal>
                
        </div>
        <Table >
          <thead>
            <tr>
              <th>
                Nome
              </th>
              <th>
                Masp
              </th>
              <th>
                Usuario
              </th>
              <th>
                Permissões
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Renato Tiago
              </td>
              <td>
                213546879
              </td>
              <td>
                ca/x18490417
              </td>
              <td>
                <Button
                  variant="outline-secondary"
                  onClick={() => this.setState({ editUser: true })}
                >
                  Editar
                </Button>
                <Modal
                  size="lg"
                  show={this.state.editUser}
                  onHide={lgClose}
                  aria-labelledby="editUser"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="editUser">
                      Editar Usuario
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Row>
                        <Col sm="6">
                          <Form.Group>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                              type="text"
                              value="Nome"
                              placeholder="Nome Usuario"
                              disabled
                            />
                          </Form.Group>
                        </Col>
                        <Col sm="6">
                          <Form.Group>
                            <Form.Label>CPF</Form.Label>
                            <Form.Control
                              type="text"
                              value="CPF"
                              placeholder="CPF do Usuario"
                              disabled
                            />
                          </Form.Group>
                        </Col>
                        <Col sm="6">
                          <Form.Group>
                            <Form.Label>
                              Maps
                              </Form.Label>
                            <Form.Control
                              type="text"
                              value="CPF"
                              placeholder="MAps do Usuario"
                              disabled
                            />
                          </Form.Group>
                        </Col>
                        <Col sm="6">
                          <Form.Group>
                            <Form.Label>
                              Login
                              </Form.Label>
                            <Form.Control
                              type="text"
                              value="CPF"
                              placeholder="Login do Usuario"
                              disabled
                            />
                          </Form.Group>
                        </Col>
                        <Col sm="12">
                          <Form.Group>
                            <Form.Label>
                              Permissões
                              </Form.Label>
                            {['checkbox'].map(type => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                  type={type}
                                  label={"Permissão"}
                                  id={"Permissão"}
                                />

                                <Form.Check
                                  type={type}
                                  label={"Permissão"}
                                />

                                <Form.Check
                                  type={type}
                                  label={"Permissão"}
                                />

                                <Form.Check
                                  type={type}
                                  label={"Permissão"}
                                />
                              </div>
                            ))}
                          </Form.Group>
                        </Col>
                      </Form.Row>

                    </Form>
                  </Modal.Body>
                </Modal>
                <Button variant="outline-danger">
                  Excluir
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default User;