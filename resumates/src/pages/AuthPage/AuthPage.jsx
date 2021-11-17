import React from 'react'
import './AuthPage.css';
// import Logo from '../../components/Logo/Logo';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';


export default class AuthPage extends React.Component {
  state = {
    showLogin: true,
  }

  render() {
    return (
      <main className="AuthPage">
        {/* Another ternary operator! */}
        {/* If showLogin is true, show the login form. If false, show the signup form */}
        {this.state.showLogin ? 
        <LoginForm setUserInState={this.props.setUserInState}/> : 
        <SignUpForm setUserInState={this.props.setUserInState} />}
        <div>
          <button onClick={() => this.setState({ showLogin: !this.state.showLogin })}>
            {this.state.showLogin ? 'Sign Up' : 'Already have and account?'}
          </button>
        </div>
      </main>
    );
  }
}