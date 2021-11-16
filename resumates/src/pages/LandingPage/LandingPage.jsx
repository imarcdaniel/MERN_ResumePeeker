import React from 'react';
import { Button } from "@material-ui/core"; 
import './LandingPage.css'
import img from '../../images/Home/image 2.png';
import upload from '../../images/Home/cloud_upload.png';
import search from '../../images/Home/search.png';
import download from '../../images/Home/Vector.png';
import share from '../../images/Home/Group 40.png';

class LandingPage extends React.Component {
  state = {
    
  }

  render() {
    return (
        <div>
        <section className="Intro"> 
        <h1>Find 1000+ resumes to inspire yours</h1>
        <img src={img} alt="Resume" />
        <h2>Find thousands of resumes</h2>
        <p>Uploaded by industry professionals</p>
        <Button id='Button' variant="contained">View Resumes</Button>
        <h2>How it Works</h2>
        <div>
          <img src={upload} alt="Upload Resumes" />
          <h3>Upload</h3>
          <p>...your resume annonymously to gain access 
            to our database</p>
        </div>
        <div>
          <img src={search} alt="Search Resume's" />
          <h3>Search</h3>
          <p>...our database for resumes based on specific critera</p>
        </div>
        <div>
          <img src={download} alt="Download Resume's" />
          <h3>Download</h3>
          <p>... resumes you like for future use</p>
        </div>
        <div>
          <img src={share} alt="Share Resume's" />
          <h3>Share & Receive Feedback</h3>
          <p>...with other industry industry professionals</p>
        </div>
        <Button id='Button' variant="contained">Get Started</Button>
      </section>
      </div>
    );
  }
}

export default LandingPage;