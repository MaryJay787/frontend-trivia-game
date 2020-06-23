import React, { Component } from 'react';
import './GamePage.css';

class GamePage extends Component {
    render() {
        return(
            <div>
                <h1>Game Page</h1>
                <p>Select Your Category</p>           
                <div className="grid-container">
                    <div className="category">Pillars of Islam</div>
                    <div className="category">Prophets</div>
                    <div className="category">Women in Islam</div>  
                    <div className="category">Quran</div>
                    <div className="category">Hadith</div>
                </div>
                
            </div>
        );
    }
}

export default GamePage;