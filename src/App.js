import React, { Component } from 'react';
import Menu, { Cabecalho, Rodape } from './Layout/Menu.js';
import './css/App.css';
import './css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import TabelaIndex from './ChamadosRH/TabelaIndex.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {PageChamado} from './PageChamado.js';
import Botoes from './Botoes.js';


class App extends Component {
  
  render() {
    return (
      <div className="body">
        <Cabecalho/>
        <Menu>
            <Botoes label="Relatórios" styleName="btn-menu" />
            <Botoes label="Acompanhamento" styleName="btn-menu" />
            <Botoes label="Respostas Automaticas" styleName="btn-menu" />
        </Menu>
        <Container fluid={true}>
          <Row className="allScreen">
            <Col sm={2}>
              <div className="menu-l">
                <SideNav onSelect={(selected) => {/*Add your code here*/}}>
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="todos">
                    <NavItem eventKey="todos">
                      <NavIcon>
                        <FontAwesomeIcon icon="folder"/>
                      </NavIcon>
                      <NavText>
                        Todos
                      </NavText>
                    </NavItem>
                    <NavItem eventKey="Abertos">
                    <NavIcon>
                        <FontAwesomeIcon icon="folder-open"/>
                      </NavIcon>
                      <NavText>
                        Abertos 
                      </NavText>
                    </NavItem>
                    <NavItem eventKey="Fechados">
                    <NavIcon>
                        <FontAwesomeIcon icon="archive"/>
                    </NavIcon>
                      <NavText>
                            Fechados
                      </NavText>
                    </NavItem>
                    <NavItem eventKey="Setor">
                      <NavIcon>
                        <FontAwesomeIcon icon="building"/>
                      </NavIcon>
                      <NavText>
                        Setor
                      </NavText>
                    </NavItem>
                  </SideNav.Nav>
                </SideNav>
              </div>
            </Col>
            <Col sm={10}>
              <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={TabelaIndex} />
                    <Route path="/DetalhamentoChamado" component={PageChamado} />
                </Switch>
              </BrowserRouter>
            </Col>
          </Row>
        </Container>
        <Rodape/>
      </div>
    );
  }
}

export default App;
