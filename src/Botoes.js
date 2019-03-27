import React, {Component} from 'react';
import './css/bootstrap.css';


class Botoes extends Component
{
    reder(){
        return(
            <button className={`btn ${ this.props.styleName }`} title={this.props.label}>
                {this.props.label}
            </button>
        );
    }
}
export default Botoes;