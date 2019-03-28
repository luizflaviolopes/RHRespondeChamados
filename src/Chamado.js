import React, { Component } from 'react';


const td = {
    display: 'tableCell',
    border: 'solid black 1px'

}


class Chamado extends Component {

    constructor(props){
        super(props);
        this.state = {nome: props.nome ,assunto:props.assunto,mensagem:props.mensagem, protocolo:props.protocolo};
        this.OnclickHande = this.OnclickHande.bind(this);
      }

      OnclickHande(){
        console.log('clicado na linha de nome '+ this.state.nome)
      }



  render() {
    return (
      <tr onClick={this.OnclickHande}>
          <td style={td}>{this.state.assunto}</td>
          <td style={td}>{this.state.mensagem}</td>
          <td style={td}>{this.state.protocolo}</td>
      </tr>
    );
  }
}

export default Chamado;