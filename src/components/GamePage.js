import React from 'react';
import './GamePage.css';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';

function GamePage(props) {
    function renderAnswerOptions(key) {
        return (
          <AnswerOption
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
          />
        );
      }
    return(
        <div className="quiz">
        <QuestionCount
          counter={props.questionId}
          total={props.questionTotal}
        />
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
  );
};
     
export default GamePage;


// componentDidMount(){
// };

// poiQuestions(){
// // const quests = this.props.questions.map(item => item.ask)
// // const quests = this.props.questions.map(item => item.id === category_ids[0] ( item.ask));
//     const questions = this.props.questions
//     const category_ids = this.props.cat_ids
//     const poi_questions = questions.filter(quests => quests.category_id === category_ids[0])
//     return poi_questions
// };

// prophetQuestions(){
//     const questions = this.props.questions
//     const category_ids = this.props.cat_ids
//     const pro_questions = questions.filter(quests => quests.category_id === category_ids[1])
//     return pro_questions
// };

// wiiQuestions(){
//     const questions = this.props.questions
//     const category_ids = this.props.cat_ids
//     const wii_questions = questions.filter(quests => quests.category_id === category_ids[2])
//     return wii_questions
// };

// quranQuestions(){
//     const questions = this.props.questions
//     const category_ids = this.props.cat_ids
//     const quran_questions = questions.filter(quests => quests.category_id === category_ids[3])
//     return quran_questions
// };


// handlePoiCat(){
//     document.getElementById('question').innerHTML = "This is a question?";
// };

// handleProCat(){

// };

// handleQuranCat(){

// };

// handleWoiCat(){

// };

// oneQuestion(questionArray){
//     // arr[Math.floor(Math.random() * arr.length)]
//     // const oneQuestion = []
//     const one = questionArray[Math.floor(Math.random() * questionArray.length)]; 
//     // oneQuestion.push(one)
//     // Object.values(one)
//     return Object.values(one)

// };