import React from 'react';
import EmojiCard from '../component/EmojiCard';
import EmojiData from '../component/EmojiData';
import '../css/Emoji.css';

class Emoji extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

    //     const EmojiIcon = [
    //     "😀", "😂","😎",
    //     "😍", "🤑", "🤬",
    //     "🤡", "💀", "👽",
    //     "👩🏾‍💻", "👩🏾‍🎓", "👩🏾‍🚀",
    //     "💃🏽", "🕺🏽", "🕵🏽",
    //     "🐘", "🦄", "🐆",
    //     "🌈", "💐", "🥑"
    // ];

        const EmojiDataMap = EmojiData.map(i => <EmojiCard key={i.id} icon={i.icon} />)
        console.log(EmojiDataMap);
    

    return(
        <div className="Iconmap">
            {EmojiDataMap}
            
            
        </div>
        

    );

    }

}




export default Emoji;