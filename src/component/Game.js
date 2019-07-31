import React from 'react';
import Styles from '../css/Styles.css';
import Board from './Board';
//import Navbar from '../component/Navbar';

class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  export default Game;