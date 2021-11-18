import React, { Component } from 'react';
import './App.css';
// Add the Route named import
import {BrowserRouter, Routes, Route, Navigate, Redirect, Switch } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage'
import IndexPage from './pages/IndexPage/IndexPage';
import Navbar from './components/Navbar/Navbar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import LoginForm from './components/LoginForm/LoginForm';
import UploadPage from './pages/UploadPage/UploadPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LandingPage from './pages/LandingPage/LandingPage';
import ShowPage from './pages/ShowPage/ShowPage';
import FileUpload from "./components/FileUpload/FileUpload";
import { Link } from 'react-router-dom'

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

  handleLogout = () => {
    let token = localStorage.getItem('token')
    this.setState({ user: null })
    localStorage.removeItem('token');
    token = null;
  }

  render() {
    return (
      <main className="App">
        <Navbar handleLogout={this.handleLogout}/>
        {/* this ternary operator asks: is there a user in state? */}
        {/* if yes, they can see our pages: neworder, etc. */}
        {/* if no(user is null), show them only the <AuthPage> */}
        {this.state.user ? (
          <Switch>
            <Route path="/signup" render={(props) => (
            <SignUpForm {...props}/>
            )} />
            <Route path="/login" render={(props) => (
            <LoginForm {...props}/>
            )} />
            <Route path="/index" render={(props) => (
            <IndexPage {...props}/>
            )} />
            <Route path="/Upload" render={(props) => (
            <UploadPage {...props}/>
            )} />
            <Route path="/Profile" render={(props) => (
            <ProfilePage {...props} user={this.state.user}/>
            )} />
            <Route path="/LandingPage" render={(props) => (
            <LandingPage {...props}/>
            )} />
            <Route path="/ShowPage" render={(props) => (<ShowPage user={this.state.user}/>)} />
            <Redirect to="/index" />
          </Switch>
        ) : (
          <AuthPage setUserInState={this.setUserInState} />
        )}
      </main>
    );

  }
}

export default App;
