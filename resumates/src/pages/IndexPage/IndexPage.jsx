import React from 'react'
import './IndexPage.css'
import UploadForm from '../../components/UploadForm/UploadForm';
import Resume from '../../components/Resume/Resume';
import { Link } from 'react-router-dom'
import { Button, InputLabel, MenuItem, FormControl, Select, Box } from "@material-ui/core"; 

class IndexPage extends React.Component {
   

  state = {
      resumes: [],
      close: true
  }
  
  getResumes = async () => {
    await fetch("/api/resumes").then((res) => res.json()).then(data => this.setState({resumes: data}))
  }

  componentDidMount() {
    this.getResumes()
  }
handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
}
onChangeHandler(e) {
    let body = { 
    title: this.state.title, 
    level: this.state.level, 
    }
    console.log("001", body.title)
    console.log("003", body.level)
        let newArray = [...this.state.resumes]
       let results=newArray.filter( ({ title, level }) => title === body.title & level === body.level);
        console.log(newArray)
         console.log(results)
        this.setState({
            resumes:results
        })
    }
    yourFunction = () => {
      let couple = !this.state.close
      
        this.setState({
            close: couple,
        });
    };
  render() {
    const close = this.state.close;
    return (
        <main className="IndexPage">
          <Button onClick={() => this.yourFunction()}id='Button' variant="contained" >toggle</Button>
    { close ? (
      <div > 
        <Box className='Box' sx={{ maxWidth: 300 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Job Title</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.title}
            label="Job Title"
            onChange={this.handleChange}
            name="title"
            >
            <MenuItem value={"Engineer"}>Software Engineer</MenuItem>
            <MenuItem value={"Magician"}>Magician</MenuItem>
            <MenuItem value={"Accountant"}>Accountant</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className='Box' sx={{ maxWidth: 300 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Experience</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.experience}
            label="Experience"
            onChange={this.handleChange}
            name="level"
            >
            <MenuItem value={"Junior"}>Junior</MenuItem>
            <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
            <MenuItem value={"Senior"}>Senior</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <br/>
    <Button id='Button' variant="contained" onClick={this.getResumes}>Reset</Button>
    <Button id='Button' variant="contained"  onClick={()=>{this.onChangeHandler()}}>Apply</Button> 
    </div>
    )
      : 
    (
      <div> 
      </div> 
      
    )
    })
      {this.state.resumes.length ? 
        this.state.resumes.map(p => 
          (<Resume resume={p} getResumes={this.getResumes}/>
          ))
            :
          <h1>No Resumes</h1>
        }
     
      </main>
    );
  }
}



export default IndexPage; 
{/* <ImageList className = 'allresumecontent' sx={{ width: 500, height: 450 }}> */}
      {/* {allResume.map((item) => (
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
            
            level={item.level}
            subtitle={<span>{item.user}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList> */}