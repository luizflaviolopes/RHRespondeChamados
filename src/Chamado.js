import React, { Component } from 'react';
import './css/bootstrap.css';

class Chamado extends Component {

    constructor(props){
        super(props);
        this.state = {nome: props.nome ,assunto:props.assunto,mensagem:props.mensagem, atendente:props.atendente};
        this.OnclickHande = this.OnclickHande.bind(this);
      }

      OnclickHande(){
        console.log('clicado na linha de nome '+ this.state.nome);
      }



  render() {
    return (
      <tr onClick={this.OnclickHande}>
          <td >{this.state.assunto}</td>
          <td >{this.state.mensagem}</td>
          <td >{this.state.atendente}</td>
      </tr>
    );
  }
}

export default Chamado;