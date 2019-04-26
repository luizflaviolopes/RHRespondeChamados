import React, { Component } from "react";
import "../css/bootstrap.css";
import "../css/Botoes.css";
import "../css/App.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/menu.css"
class MenuUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SideNav>
        <SideNav.Toggle />
        <SideNav.Nav>
          <NavItem eventKey="usuarios">
            <NavIcon>
              <FontAwesomeIcon icon="user" />
            </NavIcon>
            <NavText>Usuarios</NavText>
          </NavItem>
          <NavItem eventKey="newUser">
            <NavIcon>
              <FontAwesomeIcon icon="user-plus" />
            </NavIcon>
            <NavText>Adicionar Usuarios</NavText>
          </NavItem>
          <NavItem eventKey="Atendimento">
            <NavIcon>
              <FontAwesomeIcon icon="user" />
            </NavIcon>
            <NavText>Em Atendimento</NavText>
          </NavItem>
          <NavItem eventKey="Pendentes">
            <NavIcon>
              <FontAwesomeIcon icon="folder-minus" />
            </NavIcon>
            <NavText>Pendente</NavText>
          </NavItem>
          <NavItem eventKey="Fechados">
            <NavIcon>
              <FontAwesomeIcon icon="archive" />
            </NavIcon>
            <NavText>Fechados</NavText>
          </NavItem>
          <NavItem eventKey="Setor">
            <NavIcon>
              <FontAwesomeIcon icon="building" />
            </NavIcon>
            <NavText>Setor</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default MenuUser;
