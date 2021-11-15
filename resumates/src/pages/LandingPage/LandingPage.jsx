import React from 'react'

class LandingPage extends React.Component {
  state = {
    
  }

  render() {
    return (
        <div>
        <section className="Intro"> 
        <h1>Find 1000+ resumes to inspire yours</h1>
        <h1>How it Works</h1>
        <div>
          <h2>Upload</h2>
          <p>...your resume annonymously to gain access 
            to our database</p>
        </div>
        <div>
          <h2>Search</h2>
          <p>...our database for resumes based on specific critera</p>
        </div>
        <div>
          <h2>Download</h2>
          <p>... resumes you like for future use</p>
        </div>
        <div>
          <h2>Share & Receive Feedback</h2>
          <p>...with other industry industry professionals</p>
        </div>
      </section>
      </div>
    );
  }
}

export default LandingPage;