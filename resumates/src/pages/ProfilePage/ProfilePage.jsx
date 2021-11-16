import React from 'react'
import './ProfilePage.css'

class ProfilePage extends React.Component {
  // initial state of the app when it first loads
  state = {
    
  }

  render() {
    return (
      <main className="ProfilePage">
        <h1>My Resumes</h1>
        <hr/>
        <h1>Bookmarked</h1>
        <hr/>
      </main>
    );
  }
}

export default ProfilePage;