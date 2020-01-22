import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Suit from '../../Components/Suit/Suit';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
// import { SwatchesPicker } from 'react-color'

class App extends Component {
    constructor() {
      super();
      this.state = {
        user: userService.getUser(),
        suit: []
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
        </Switch>

      </div>
    );
  }
}

export default App;
