import React, { Component } from "react";
import { Redirect } from "react-router";
import "../css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Cabecalho extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFiltering: false
        };
    }

    render() {
        return (
            <div>
                <div className="float-left d-inline">
                    <FontAwesomeIcon icon={this.props.icone} /> {this.props.label}
                </div>
                {
                    this.state.isFiltering ?
                        <input onChange={(event)=> this.props.onFilter({propertie: this.props.FilterParam, value:event.target.value})}></input>
                        :
                        <div className="float-right d-inline">
                            <FontAwesomeIcon icon="filter" onClick={()=>this.setState({isFiltering:true})} />
                        </div>
                }
            </div>
        )
    }
}

export default Cabecalho