import React from 'react';
import SquareCss from '../css/Square.css';

function Square(props){
    
    
        return (
            //onClick arrow function anonymous function
            <button className="square" 
            onClick={props.onClick}>  
                {props.value}

            </button>
        );
    }
export default Square;