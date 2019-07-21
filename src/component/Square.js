import React from 'react';

class Square extends React.Component{
    render(){
        return (
            //onClick arrow function anonymous function
            <button className="square" onClick={() => {alert('clicked');}}>  
                {this.props.value}

            </button>
        );
    }
}


export default Square;