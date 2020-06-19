import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GamePage from './components/GamePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          A Trivia App
          </header>
          <Link to={'/gamepage'} className='link-to-game-page'><button id="str-game-btn">Start Game</button></Link>
          <Switch>
            <Route path='/gamepage' component={GamePage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
