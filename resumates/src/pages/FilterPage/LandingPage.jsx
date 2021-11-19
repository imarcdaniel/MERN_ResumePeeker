import React from 'react';
import { Button } from "@material-ui/core"; 
import './LandingPage.css'
import { Link } from 'react-router-dom'
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SearchIcon from "@material-ui/icons/Search";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import CommentIcon from "@material-ui/icons/Comment";

class FilterPage extends React.Component {
  render() {
    return (
        <div>
        <section className="Intro"> 
        <h1 className="Header">Find 1000+ <span> resumes </span> <br/> to inspire yours</h1>
        <Button id='Button' variant="contained"><Link id='link' className='link' to='/signup'>Sign Up</Link></Button>
        <p className="p">Already have an account?  <Link id='login' to='/login'>Log in</Link></p>
        <h2 className="Header2">Find thousands of resumes</h2>
        <p className="p">Uploaded by industry professionals</p>
        <Button id='Button' variant="contained"><Link id='link' className='link' to='/index'>View Resumes</Link></Button>
        <h2 className="Header2">How it Works</h2>
        <div className='one'>
          <CloudUploadIcon className='LandingIcon' fontSize="large" />
          <h3 className="Header3">Upload</h3>
          <p className="p">...your resume annonymously to gain access 
            to our database</p>
        </div>
        <div className='two'>
          <SearchIcon className='LandingIcon' fontSize="large"/>
          <h3 className="Header3">Search</h3>
          <p className="p">...our database for resumes based on specific critera</p>
        </div>
        <div className='three'>
          <CloudDownloadIcon className='LandingIcon' fontSize="large" />
          <h3 className="Header3">Download</h3>
          <p className="p">... resumes you like for future use</p>
        </div>
        <div className='four'>
          <CommentIcon className='LandingIcon' fontSize="large"/>
          <h3 className="Header3">Share & Receive Feedback</h3>
          <p className="p">...with other industry industry professionals</p>
        </div>
        <Button id='LastButton' variant="contained"><Link id='link' className='link' to='/signup'>Get Started</Link></Button>
      </section>
      </div>
    );
  }
}

export default LandingPage;