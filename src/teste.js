import React, { Component } from 'react';

function testarFuncao(props)
{
    return(
        <div className='testandoFuncao'>
            Blabla
        </div>
    );
}

class TestarClass extends Component{
    render(){
        return(
            <div className='testandoFuncao'>
            Blabla
        </div>
        );
    }
}
export default testarFuncao;