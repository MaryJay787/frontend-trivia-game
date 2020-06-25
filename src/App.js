import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GamePage from './components/GamePage';
import { getCategories } from './fetches/backend';

class App extends Component {
  componentDidMount(){
    getCategories().then(all_categories => console.log(all_categories))
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          A Trivia App
          </header>
          <div className="container">
          <h1>Welcome to A Trivia Game</h1>
          <p>Click "Start Game" to Begin!!!</p>
          <Link to={'/gamepage'} className='link-to-game-page'>
            <button type="button" className="str-game-btn">Start Game</button>
          </Link>
          </div>
          <Switch>
            <Route path='/gamepage' component={GamePage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
