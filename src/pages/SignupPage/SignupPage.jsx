import React, { Component } from 'react';
import SignupForm from '../../Components/SignupForm/SignupForm';
import './SignupPage.css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='SignupPage'>
        <SignupForm 
        handleSignupOrLogin={this.props.handleSignupOrLogin} 
        updateMessage={this.updateMessage}
        history={this.props.history}
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default SignupPage;