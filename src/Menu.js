import React, {Component} from 'react';
import './css/menu.css';

class Menu extends Component
{
    render(){
        return(
            <div className="menu">
                <nav>
                    {this.props.children}
                </nav>
            </div>
        );

    }
}

export default Menu;