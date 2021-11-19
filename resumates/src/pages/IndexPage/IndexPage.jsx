import React from 'react'
import './IndexPage.css'
import UploadForm from '../../components/UploadForm/UploadForm';
import Resume from '../../components/Resume/Resume';
import { ImageList, ImageListItem, ImageListItemBar, Box, Paper, Grid } from "@material-ui/core";
import { Link } from 'react-router-dom'

class IndexPage extends React.Component {
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
            {this.state.resumes.length ? 
          this.state.resumes.map(p => (
          <Resume resume={p} getResumes={this.getResumes}/>
            ))
              :
            <h1>No Resumes</h1>
          }
        </main>
    );
  }
}


export default IndexPage;
{/* {this.state.resumes.length ? 
<ImageList className = 'allresumecontent' sx={{ width: 500, height: 450 }}>
{allResume.map((item) => (
  <ImageListItem key={item.image}>
    <img
      src={`${item.image}?w=40&fit=crop&auto=format`}
      srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
      alt={item.title}
      loading="lazy"
      id="resumesize"
      className = 'Image'
    />
    <ImageListItemBar
      className = 'ImageTitle'
      title={item.title}
      subtitle={<span>{item.level}</span>}
      position="below"
    />
  </ImageListItem>
))}
</ImageList>
      :
    <h1>No Resumes</h1>
  } */}