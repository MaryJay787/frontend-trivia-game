import React, { Component } from 'react';
import './GamePage.css';

class GamePage extends Component {
    componentDidMount(){
    };


    sepQuestions(){
        // this.props.questions.map(item => item.ask)
        const quests = this.props.questions.map(item => item.ask)
        // console.log(quests)
        return quests
    };

    render() {
        return(
            <div>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>

                <h1>Game Page</h1>
                <p>Select Your Category</p>           
                <div className="grid-container">
                    <div className="w3-green w3-hover-shadow w3-padding-30 w3-center">{this.props.categories[0]}</div>
                    <div className="w3-green w3-hover-shadow w3-padding-30 w3-center">{this.props.categories[1]}</div>
                    <div className="w3-green w3-hover-shadow w3-padding-30 w3-center">{this.props.categories[2]}</div>  
                    <div className="w3-green w3-hover-shadow w3-padding-30 w3-center">{this.props.categories[3]}</div>
                    {console.log(this.props.cat_ids)}
                </div>
        <p></p>
            </div>
        );
    }
}

export default GamePage;