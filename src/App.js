import React, { Component } from "react";
import Menu, { Cabecalho, Rodape } from "./Layout/Menu.js";
import "./css/App.css";
import "./css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import TabelaIndex from "./ChamadosRH/TabelaIndex.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PageChamado } from "./ChamadosRH/PageChamado.js";
import Botoes from "./Layout/Botoes.js";
import "./css/Botoes.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import SideMenuIndex from "./SideMenuIndex.js";

library.add(fas);

class App extends Component {
  render() {
    return (
      <div className="body">
        <BrowserRouter>
          <Cabecalho />
          <Menu>
            <Botoes label="Relatórios" styleName="btn-menu" />
            <Botoes label="Acompanhamento" styleName="btn-menu" />
            <Botoes label="Respostas Automaticas" styleName="btn-menu" />
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
