import React, { Component } from "react";
import Menu, { Cabecalho, Rodape } from "./Layout/Menu.js";
import "./css/App.css";
import "./css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import TabelaIndex from "./ChamadosRH/TabelaIndex.js";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import { PageChamado } from "./ChamadosRH/PageChamado.js";
import Botoes from "./Layout/Botoes.js";
import "./css/Botoes.css";
import Container from "react-bootstrap/Container";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import SideMenuIndex from "./SideMenuIndex.js";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Formulario from "./Aministrador/Formulario.js";
import User from "./Aministrador/User";



library.add(fas);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      answerModal: false,
      newCallModal: false
    };
    this.OnclickHande = this.OnclickHande.bind(this);
  }
  OnclickHande() {
    this.setState({ redirect: true });
  }
  render() {
    let lgClose = () =>
      this.setState({
        answerModal: false,
        newCallModal: false
      });

    return (
      <div className="body">
        <BrowserRouter>
          <Cabecalho />
          <Menu>
            <Link to="/User">
              <Button className="btn-menu"
                onClick={this.OnclickHande}>
                Usuarios 
              </Button>
            </Link>
            <Button
              className="btn-menu"
              onClick={() => this.setState({ newCallModal: true })}
            >
              Novo Chamado
            </Button>
            <Modal
              size="lg"
              show={this.state.newCallModal}
              onHide={lgClose}
              dialogClassName="sizeModalLG"
              aria-labelledby="Respostas-Chamados"
            >
              <Modal.Header closeButton>
                <Modal.Title id="Respostas-Chamados">
                  Novo Chamado
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Formulario />
              </Modal.Body>
            </Modal>

            <Botoes label="Relatórios" styleName="btn-menu" />
            <Botoes label="Acompanhamento" styleName="btn-menu" />
            <Button
              className="btn-menu"
              onClick={() => this.setState({ answerModal: true })}
            >
              Respostas Padrões
            </Button>
            <Modal
              size="lg"
              show={this.state.answerModal}
              onHide={lgClose}
              dialogClassName="sizeModalLG"
              aria-labelledby="Respostas-Chamados"
            >
              <Modal.Header closeButton>
                <Modal.Title id="Respostas-Chamados">
                  Resposta ao Chamado {this.state.numChamado}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    {["radio"].map(type => (
                      <div key={`inline-${type}`} className="mb-3 text-justify">
                        <div className="checkChamado">
                          <Form.Check
                            name="resposta"
                            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat nibh risus, non suscipit dui accumsan vel. Mauris dignissim quis velit vitae vulputate. Donec vehicula sollicitudin quam, nec tempor sem tincidunt eget. Phasellus porta elit elit, at gravida purus convallis eget. Proin in dapibus justo. Integer non orci eu leo tristique malesuada eu sed nulla. Fusce est dui, rutrum pretium sem in, molestie ullamcorper mauris. Pellentesque lobortis velit vitae nulla placerat sagittis. Nullam nulla lectus, efficitur condimentum metus eu, tempor luctus dui. Sed nec ligula nec orci finibus cursus sollicitudin ac sapien. Suspendisse in dui mattis, lobortis sem et, pulvinar augue. Donec viverra nulla vitae iaculis mattis. Phasellus sagittis, ante nec varius ultricies, nisl ante molestie turpis, in commodo erat quam nec erat. Aliquam nec scelerisque nulla. Pellentesque quis varius est, eu sollicitudin nisl. Nam finibus eros vitae dignissim aliquam."
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                        <div className="checkChamado">
                          <Form.Check
                            name="resposta"
                            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat nibh risus, non suscipit dui accumsan vel. Mauris dignissim quis velit vitae vulputate. Donec vehicula sollicitudin quam, nec tempor sem tincidunt eget. Phasellus porta elit elit, at gravida purus convallis eget. Proin in dapibus justo. Integer non orci eu leo tristique malesuada eu sed nulla. Fusce est dui, rutrum pretium sem in, molestie ullamcorper mauris. Pellentesque lobortis velit vitae nulla placerat sagittis. Nullam nulla lectus, efficitur condimentum metus eu, tempor luctus dui. Sed nec ligula nec orci finibus cursus sollicitudin ac sapien. Suspendisse in dui mattis, lobortis sem et, pulvinar augue. Donec viverra nulla vitae iaculis mattis. Phasellus sagittis, ante nec varius ultricies, nisl ante molestie turpis, in commodo erat quam nec erat. Aliquam nec scelerisque nulla. Pellentesque quis varius est, eu sollicitudin nisl. Nam finibus eros vitae dignissim aliquam."
                            type={type}
                            id={`inline-${type}-2`}
                          />
                        </div>
                        <div className="checkChamado">
                          <Form.Check
                            name="resposta"
                            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat nibh risus, non suscipit dui accumsan vel. Mauris dignissim quis velit vitae vulputate. Donec vehicula sollicitudin quam, nec tempor sem tincidunt eget. Phasellus porta elit elit, at gravida purus convallis eget. Proin in dapibus justo. Integer non orci eu leo tristique malesuada eu sed nulla. Fusce est dui, rutrum pretium sem in, molestie ullamcorper mauris. Pellentesque lobortis velit vitae nulla placerat sagittis. Nullam nulla lectus, efficitur condimentum metus eu, tempor luctus dui. Sed nec ligula nec orci finibus cursus sollicitudin ac sapien. Suspendisse in dui mattis, lobortis sem et, pulvinar augue. Donec viverra nulla vitae iaculis mattis. Phasellus sagittis, ante nec varius ultricies, nisl ante molestie turpis, in commodo erat quam nec erat. Aliquam nec scelerisque nulla. Pellentesque quis varius est, eu sollicitudin nisl. Nam finibus eros vitae dignissim aliquam."
                            type={type}
                            id={`inline-${type}-3`}
                          />
                        </div>
                      </div>
                    ))}
                  </Form.Group>
                  <hr />
                  <Form.Group>
                    <Form.Label>Adicionar Resposta Padrão:</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>

                  <Button variant="success" type="submit">
                    Criar Resposta
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>

          </Menu>
          <Container fluid={true} className="position-relative">
            <div className="allScreen">
              <div className="menu-l">
                <Switch>
                  <Route path="/" exact={true} component={SideMenuIndex} />
                  <Route path="/Chamados" component={SideMenuIndex} />
                </Switch>
              </div>
              <Switch>
                <Route path="/" exact={true} component={TabelaIndex} />
                <Route path="/Chamados/:tipo" component={TabelaIndex} />
                <Route path="/DetalhamentoChamado" component={PageChamado} />
                <Route path="/User" component={User} />
              </Switch>
            </div>
          </Container>
        </BrowserRouter>
        <Rodape />
      </div>
    );
  }
}

export default App;
