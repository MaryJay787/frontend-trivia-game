import React, { Component } from 'react';
import './GamePage.css';

class GamePage extends Component {
    componentDidMount(){
    };

    poiQuestions(){
    // const quests = this.props.questions.map(item => item.ask)
    // const quests = this.props.questions.map(item => item.id === category_ids[0] ( item.ask));
        const questions = this.props.questions
        const category_ids = this.props.cat_ids
        const poi_questions = questions.filter(quests => quests.category_id === category_ids[0])
        return poi_questions
    };

    prophetQuestions(){
        const questions = this.props.questions
        const category_ids = this.props.cat_ids
        const pro_questions = questions.filter(quests => quests.category_id === category_ids[1])
        return pro_questions
    };

    wiiQuestions(){
        const questions = this.props.questions
        const category_ids = this.props.cat_ids
        const wii_questions = questions.filter(quests => quests.category_id === category_ids[2])
        return wii_questions
    };

    quranQuestions(){
        const questions = this.props.questions
        const category_ids = this.props.cat_ids
        const quran_questions = questions.filter(quests => quests.category_id === category_ids[3])
        return quran_questions
    };


    handlePoiCat(){
        document.getElementById('question').innerHTML = "This is a question?";
    };

    handleProCat(){

    };

    handleQuranCat(){

    };

    handleWoiCat(){

    };

    oneQuestion(questionArray){
        // arr[Math.floor(Math.random() * arr.length)]
        // const oneQuestion = []
        const one = questionArray[Math.floor(Math.random() * questionArray.length)]; 
        // oneQuestion.push(one)
        // Object.values(one)
        return Object.values(one)

    };

    render() {
        return(
            <div>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>

                <h1>Game Page</h1>
                <p>Select Your Category</p>           
                <div className="grid-container">
                    <button onClick={this.handlePoiCat} className="w3-green w3-hover-shadow w3-padding-30 w3-center">{this.props.categories[0]}</button>
                    <button onClick={this.handleProCat} className="w3-green w3-hover-shadow w3-padding-30 w3-center">{this.props.categories[1]}</button>
                    <button onClick={this.handleWoiCat} className="w3-green w3-hover-shadow w3-padding-30 w3-center">{this.props.categories[2]}</button>  
                    <button onClick={this.handleQuranCat} className="w3-green w3-hover-shadow w3-padding-30 w3-center">{this.props.categories[3]}</button>
                    {/* {console.log(this.prophetQuestions())} */}
                </div>
                <div className="grid-container">
                    {this.oneQuestion(this.poiQuestions()).map(item => <div class="w3-panel w4-card"><p>{item.ask}</p></div>)}
                    {/* <div class="w3-panel w4-card"><p>{this.oneQuestion(this.poiQuestions())[0].ask}</p></div> */}
                    {/* {console.log(Object.values(this.oneQuestion()))} */}
                </div>
                <div className="w3-card-4">
                    <header className="w3-container w3-blue" >
                    <h1 id="question">Header</h1>
                    </header>
                <li id="answers">House</li>
                    
                </div>


            </div>
        );
    }
}

export default GamePage;