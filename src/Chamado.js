import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './css/bootstrap.css';


class Chamado extends Component {

    constructor(props){
        super(props);
        this.state = {redirect: false, numChamado: props.numChamado, solicitante: props.solicitante ,assunto:props.assunto, data:props.data, status:props.status, masp:props.masp, cpf:props.cpf, desc:props.desc, email:props.email, cel:props.cel};
        this.OnclickHande = this.OnclickHande.bind(this);
      }

      OnclickHande(){
        console.log('teste na linha de chamado '+ this.state.numChamado);
        this.setState({redirect: true});
      }

  render() {
    if (this.state.redirect) {
      return <Redirect path to={{pathname: "/DetalhamentoChamado", state: {...this.state}}} />;
    }
    return (
      <tr onClick={this.OnclickHande}>
          <td >{this.state.numChamado}</td>
          <td >{this.state.solicitante}</td>        
          <td >{this.state.assunto}</td>
          <td >{this.state.data}</td>
          <td >{this.state.status}</td>
          
      </tr>
    );
  }
}

export default Chamado;