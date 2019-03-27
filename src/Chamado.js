import React, { Component } from 'react';
import './css/bootstrap.css';

class Chamado extends Component {

    constructor(props){
        super(props);
        this.state = {numChamado: props.numChamado, nome: props.nome ,assunto:props.assunto,mensagem:props.mensagem, masp:props.masp};
        this.OnclickHande = this.OnclickHande.bind(this);
      }

      OnclickHande(){
        console.log('clicado na linha de nome '+ this.state.nome);
      }



  render() {
    return (
      <tr onClick={this.OnclickHande}>
          <td >{this.state.nome}</td>
          <td >{this.state.numChamado}</td>
          <td >{this.state.assunto}</td>
          <td >{this.state.masp}</td>
      </tr>
    );
  }
}

export default Chamado;