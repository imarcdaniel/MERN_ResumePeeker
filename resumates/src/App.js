import React, { Component } from 'react';
import './App.css';
// Add the Route named import
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage'
import IndexPage from './pages/IndexPage/IndexPage';
import Navbar from './components/Navbar/Navbar';
import UploadForm from './components/UploadForm/UploadForm';
import Resume from './components/Resume/Resume';
import UploadPage from './pages/UploadPage/UploadPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LandingPage from './pages/LandingPage/LandingPage';
import { Link } from 'react-router-dom'

class App extends Component {
  state = {
    user: null,
    resumes: []
  }

  getResumes = async () => {
    await fetch("/api/resumes").then((res) => res.json()).then(data => this.setState({resumes: data}))
  }

  // a method to update user
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  componentDidMount() {
      this.getPosts()
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
        <Navbar />
        <Routes>
          <Route path='/index' element={<IndexPage />}/>
          <Route path='/LandingPage' element={<LandingPage />}/>
          <Route path='/Upload' element={<UploadPage />}/>
          <Route path='/Profile' element={<ProfilePage />} />
        </Routes>
        {/* this ternary operator asks: is there a user in state? */}
        {/* if yes, they can see our pages: neworder, etc. */}
        {/* if no(user is null), show them only the <AuthPage> */}
        { this.state.user ? 
          <Routes>
            <Route path='/index' element={<IndexPage />} />
            <Navigate to="/index" />
          </Routes>
          :
          <AuthPage setUserInState={this.setUserInState}/>
  }

      </main>
    );

  }
}

export default App;
