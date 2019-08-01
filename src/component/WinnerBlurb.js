import React from 'react';
import Board from '../component/Board';


function WinnerBlurb(props) {

    const text = props('The Winner is ……..');

    return(
        <div className='Blurb'>
           <h1>{this.props.text}</h1>  
           {this.props.Winner}          
        </div>
    )

    

}
export default WinnerBlurb;