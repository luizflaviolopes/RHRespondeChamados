
import React, { Component } from 'react';
export class PageChamado extends Component {
    
    constructor(props){
        super(props);      
    this.state = {...props.location.state}
    }

      render() {
        return(
          <div className="container">
            <label>{this.state.solicitante}</label>
            <label>{this.state.numChamado}</label>
            <label>{this.state.assunto}</label>
          </div>
        );
    }
}