import React from 'react';
import Square from './Square';
import Calculate from './CalculateWinner';
import BoardCss from '../css/Board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,  //It will flips to Determines which player goes next.
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (Calculate(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? '😀' : '😩';  //declaring xIsNext to player x or o
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }

    renderSquare(i) {
        return (<Square value={this.state.squares[i]}
            onClick={() => this.handleClick(i)} />
        );
    }

    render() {
        const winner = Calculate(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next Player: ' + (this.state.xIsNext ? '😀' : '😩');
        }

    
    return(
        <div>        
    <div className="status">{status}
    </div>
    <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
    </div>
    <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
    </div>
    <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
    </div>
            </div>
        );
    }

}
export default Board;