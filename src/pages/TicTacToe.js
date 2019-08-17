import React from 'react';
import Game from '../component/Game';
//import Navbar from '../component/Navbar';

class TicTacToe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="game">
                                
                <Game />
            </div>
        );
    }
}
export default TicTacToe; 