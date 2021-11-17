import React from 'react'
import './ProfilePage.css'
import { Link } from 'react-router-dom'
import Resume from '../../components/Resume/Resume';

class ProfilePage extends React.Component {
  // initial state of the app when it first loads
  state = {

  }

  render() {
    return (
      <main className="ProfilePage">
        <div className = "Resumes">
          <div className='some-page-wrapper'>
              <div className='row'>
                <div className='column'>
                    <h1 className='ProfHeader'>My Resumes</h1>
                </div>
                <div className='column'>
                    <Link id='ProfLink' to='/Upload'>+ Upload Resume</Link>
                </div>
              </div>
            </div>
        </div>

        <div className = "BookM">
          <h1 className='ProfHeader'>Bookmarked</h1>
        </div>
      </main>
    );
  }
}

export default ProfilePage;