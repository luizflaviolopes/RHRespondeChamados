import React, { Component } from "react";
import "../css/bootstrap.css";
import Form from "react-bootstrap/Form"

export class Formulario extends Component {
    render() {

        return (

            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Abertura de Chamado</Form.Label>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm="6">
                            <Form.Label>
                                MASP
                            </Form.Label>
                            <Form.Control type="text" placeholder="Digite o MASP" />
                        </Col>
                        <Col sm="6">
                            <Form.Label>
                                CPF
                            </Form.Label>
                            <Form.Control type="text" placeholder="Digite o CPF" />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Nome
                            </Form.Label>
                        <Form.Control type="text" placeholder="Digite o Nome" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            E-Mail
                        </Form.Label>
                        <Form.Control type="text" placeholder="Digite o E-mail" />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm="6">
                            <Form.Label>
                                Assunto
                            </Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Col>
                        <Col sm="6">
                            <Form.Label>
                                E-Mail
                            </Form.Label>
                            <Form.Control type="text" placeholder="Digite o E-mail" />
                        </Col>
                    </Form.Group>
                </Form>
            </div>

        )
    }
}