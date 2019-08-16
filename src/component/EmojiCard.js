import React from 'react';


function EmojiCard (){

    return(
        <div className="icon-container">
            <icon src={props.icon}  className="icon" />
        </div>
    )
}

export default EmojiCard;