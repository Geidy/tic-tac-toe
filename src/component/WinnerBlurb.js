import React from 'react';
import Board from '../component/Board';


function WinnerBlurb(props) {

    const text = props('The Winner is' + winner);

    return(
        <div className='Blurb'>
           <h1>{this.props.text}</h1>  
           {this.props.status}          
        </div>
    )

    

}
export default WinnerBlurb;