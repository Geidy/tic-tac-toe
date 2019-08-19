import React from 'react';
import '../css/Users.css';


class Users extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            player1: '',
            player2: ''
        }
    }


    render(){
    return(
        <div className="Form">
            <form>
                <label className="text">1st Player, Name :  
                <input type="text" id="player1" value={this.player1}></input>
                </label>
                <label className="text">2nd Player, Name :  
                <input type="text" id="player2" value={this.player2}></input>
                </label>
                <button className="btn" type="submit" >next</button>
                </form>           


        </div>
    )
}
}
export default Users;