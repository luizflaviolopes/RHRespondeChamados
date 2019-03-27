import React, {Component} from 'react';
import './css/menu.css';


class Botoes extends Component
{
    reder(){
        return(
            <button title={this.props.label}>
                {this.props.label}
            </button>
        );
    }
}

class Menu extends Component
{
    render(){
        return(
            <div className="menu">
                <nav>
                    
                </nav>
            </div>
        );

    }
}

export default Menu;