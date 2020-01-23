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

class App extends Component {
    constructor() {
      super();
      this.state = {
        user: userService.getUser(),
        savedSuits: [], //becaused saved suits is going to be manipulated on the suits page and also used on the fav suits page, we need this state on the app component, so it can be used/manipulated on multiple pages.
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

handleSaveSuit = (suit) => {
  this.setState( (prevState) =>  {
    return {
      //...array is an array spread operator, it just repasses in all the array elements of an array into another array. We have to do this because setState won't just add a new array element, it will overwrite the entire array with the new array. So first, we have to copy the old array into this new array.
      savedSuits: [...prevState.savedSuits, suit]
    }
  })
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
              handleSaveSuit={this.handleSaveSuit}
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
                savedSuits={this.state.savedSuits}
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
