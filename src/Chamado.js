import React, { Component } from 'react';
import './css/bootstrap.css';


class Chamado extends Component {

    constructor(props){
        super(props);
<<<<<<< HEAD
        this.state = {nome: props.nome ,assunto:props.assunto,mensagem:props.mensagem, protocolo:props.protocolo};
=======
        this.state = {numChamado: props.numChamado, nome: props.nome ,assunto:props.assunto,mensagem:props.mensagem, masp:props.masp};
>>>>>>> 0b172c05ce2baa9cb0710953f5f8114dc0694124
        this.OnclickHande = this.OnclickHande.bind(this);
      }

      OnclickHande(){
        console.log('clicado na linha de nome '+ this.state.nome);
        
      }

  render() {
    return (
      <tr onClick={this.OnclickHande}>
<<<<<<< HEAD
          <td style={td}>{this.state.assunto}</td>
          <td style={td}>{this.state.mensagem}</td>
          <td style={td}>{this.state.protocolo}</td>
=======
          <td >{this.state.nome}</td>
          <td >{this.state.numChamado}</td>
          <td >{this.state.assunto}</td>
          <td >{this.state.masp}</td>
>>>>>>> 0b172c05ce2baa9cb0710953f5f8114dc0694124
      </tr>
    );
  }
}

export default Chamado;