import React, { Component } from 'react';
import './GamePage.css';

class GamePage extends Component {
    render() {
        return(
            <div>
                <h1>Game Page</h1>
                <div className="card">
                <img src="data:image/jpeg;base64,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" alt="Avatar"/>
                <div className="container">
                    <h4><b>Quran Category</b></h4> 
                    <p>This category is about Ayats</p> 
                </div>
                </div>

                <div className="card">
                <img src="https://muslimyearbook.org/wp-content/uploads/2019/07/THE-PROPHETS-OF-ISLAM.jpg" alt="Avatar"/>
                <div className="container">
                    <h4><b>Quran Category</b></h4> 
                    <p>This category is about Ayats</p> 
                </div>
                </div>

                <div className="card">
                <img src="data:image/jpeg;base64,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" alt="Avatar"/>
                <div className="container">
                    <h4><b>Quran Category</b></h4> 
                    <p>This category is about Ayats</p> 
                </div>
                </div>
                
            </div>
        );
    }
}

export default GamePage;