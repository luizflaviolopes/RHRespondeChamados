import React, { Component } from 'react';
import './css/bootstrap.css';


class Chamado extends Component {

    constructor(props){
        super(props);
        this.state = {numChamado: props.numChamado, solicitante: props.solicitante ,assunto:props.assunto,data:props.data, status:props.status};
        this.OnclickHande = this.OnclickHande.bind(this);
      }

      OnclickHande(){
        console.log('clicado na linha de chamado '+ this.state.numChamado);
        
      }

  render() {
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