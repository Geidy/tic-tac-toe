import React from 'react'; 
import EmojiData from '../component/EmojiData';
import '../css/EmojiCard.css';


function EmojiCard (props){

    return(
        <div className="icon-card">
            <p className="icon">{props.icon} </p>
        </div>
    )
}

export default EmojiCard; 