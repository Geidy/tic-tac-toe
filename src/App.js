import React from 'react';
//import Game from './component/Game';
//import Navbar from './component/Navbar';
import Emoji from './pages/Emoji';
import Users from './pages/Users';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import TicTacToe from './pages/TicTacToe';

function App() {
  return (
    <Router>

      <div className="App">

      <nav className="Navbar">
          <ul className="ul">
            <li>
              <a className="GameText">Icon Tic-Tac-Toe</a>
              </li>
            <li className="li">
              <Link to="/" className="text">Users</Link>
            </li>
            <li className="li">
              <Link to="/Emoji/" className="text">Emoji-Icon</Link>
            </li>
            <li className="li">
              <Link to="/TicTacToe/" className="text">Game</Link>
            </li>
          </ul>
        </nav>



        <Route path="/" exact component={Users} />
        <Route path="/Emoji/" component={Emoji} />
        <Route path="/TicTacToe/" component={TicTacToe} />

      </div>

    </Router>
  );
}

export default App;
