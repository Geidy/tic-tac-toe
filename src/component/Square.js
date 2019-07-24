import React from 'react';

function Square(props){
    
    
        return (
            //onClick arrow function anonymous function
            <button className="square" 
            onClick={props.onClick}>  
                {this.props.value}

            </button>
        );
    }



export default Square;