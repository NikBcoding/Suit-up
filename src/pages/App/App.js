import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom';
import Suit from '../../Components/Suit/Suit';
import FavSuitsPage from '../FavSuitsPage/FavSuitsPage'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import Pants from '../../Components/Suit/Pants';
import Shirt from '../../Components/Suit/Shirt';
import Tie from '../../Components/Suit/Tie';
import Shoes from '../../Components/Suit/Shoes';
import Handkerchief from '../../Components/Suit/Handkerchief';
import Coat from '../../Components/Suit/Coat';

class App extends Component {
    constructor() {
      super();
      this.state = {
        user: userService.getUser(),
        selItem: ''
      };
    }


/*--- Callback Methods ---*/

handleLogout = () => {
  userService.logout();
  this.setState({ user: null });
}

handleSignupOrLogin = () => {
  this.setState({user: userService.getUser()});
}

handleCoatClick = () => {
  this.setState({selItem: Coat})

  console.log("HIT Coat")

}

handlePantsClick = () => {
  this.setState({selItem: Pants})

  console.log("HIT Pants")
}

handleShirtClick = () => {
  this.setState({selItem: Shirt})

  console.log('HIT shirt')
}

handleTieClick = () => {
  this.setState({selItem: Tie})

  console.log("HIT Tie")
}

handleShoesClick = () => {
  this.setState({selItem: Shoes})

  console.log("HIT Shoes")
}

handleHandkerchiefClick = () => {
  this.setState({selItem: Handkerchief})

  console.log("HIT Handker")
}


  render() {

    return (
      <div className='header'>
        <ToastContainer></ToastContainer>
        <header className='header-footer'> SUITED & BOOTED</header>
        <Switch>
          <Route exact path='/' render={() =>
            <Suit 
              user={this.state.user}
              handleLogout={this.handleLogout}
              handleCoatClick={this.handleCoatClick}
              handlePantsClick={this.handlePantsClick}
              handleShirtClick={this.handleShirtClick}
              handleTieClick={this.handleTieClick}
              handleShoesClick={this.handleShoesClick}
              handleHandkerchiefClick={this.handleHandkerchiefClick}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/fav-suits' render={() => 
            userService.getUser() ?
              <FavSuitsPage
                scores={this.state.scores}
                handleUpdateSuit={this.handleUpdateSuit}
              />
              :
              <Redirect to='/login' />
          }/>
        </Switch>

      </div>
    );
  }
}

export default App;
