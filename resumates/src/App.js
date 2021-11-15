import React, { Component } from 'react';
import './App.css';
// Add the Route named import
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage'
import IndexPage from './pages/IndexPage/IndexPage';
import FileUpload from './components/FileUpload/FileUpload';

class App extends Component {

  state = {
    user: null,
  }

  // a method to update user
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1])); // decode token
      if (payload.exp < Date.now() / 1000) {  // Check if our token is expired, and remove if it is (standard/boilerplate)
        localStorage.removeItem('token');
        token = null;
      } else { // token not expired! our user is still 'logged in'. Put them into state.
        let userDoc = payload.user // grab user details from token
        this.setState({user: userDoc})      
      }
    }
  }

  render() {
    return (
      <main className="App">
        {/* this ternary operator asks: is there a user in state? */}
        {/* if yes, they can see our pages: neworder, etc. */}
        {/* if no(user is null), show them only the <AuthPage> */}
        {this.state.user ? (
          <Switch>
            <Route path="/index" render={(props) => <IndexPage {...props} />} />
            <Redirect to="/index" />
          </Switch>
        ) : (
          <AuthPage setUserInState={this.setUserInState} />
        )}
        <FileUpload />
      </main>
    );

  }
}

export default App;
