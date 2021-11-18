import React from 'react'
import './IndexPage.css'
import UploadForm from '../../components/UploadForm/UploadForm';
import Resume from '../../components/Resume/Resume';
import { ImageList, ImageListItem, ImageListItemBar } from "@material-ui/core"; 

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
    let allResume = this.state.resumes;

    return (
        <main className="IndexPage">
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
            subtitle={<span>{item.user}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
    
      </main>
    );
  }
}

const itemData = [
  {
    image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    image: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },

];
export default IndexPage;