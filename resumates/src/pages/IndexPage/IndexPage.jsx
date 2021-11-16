import React from 'react'
import './IndexPage.css'
import UploadForm from '../../components/UploadForm/UploadForm';
import Resume from '../../components/Resume/Resume';

class IndexPage extends React.Component {

  // initial state of the app when it first loads
  state = {
      resumes: []
  }

  getResumes = async () => {
    await fetch("/api/resumes").then((res) => res.json()).then(data => this.setState({resumes: data}))
  }

  componentDidMount() {
    this.getResumes()
  }

  render() {
    return (
      <main className="IndexPage">
        <h1>You hit the Index page, You are Logged In</h1>

        {this.state.resumes.length ? 
        this.state.resumes.map(p => (
        <Resume resume={p} getResumes={this.getResumes}/>
          ))
            :
          <h1>No Resumes</h1>
        }
        <UploadForm getResumes={this.getResumes}/>
      </main>
    );
  }
}

export default IndexPage;