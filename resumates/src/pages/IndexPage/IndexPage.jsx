import React from 'react'
import './IndexPage.css'
import UploadForm from '../../components/UploadForm/UploadForm';
import Resume from '../../components/Resume/Resume';
import { ImageList, ImageListItem, ImageListItemBar, Box, Paper, Grid } from "@material-ui/core";
import { Link } from 'react-router-dom'
import { Button, InputLabel, MenuItem, FormControl, Select} from "@material-ui/core"; 

class IndexPage extends React.Component {

  state = {
      resumes: [],
      close: false
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
          <Button style={{color: "white", maxWidth: '60px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} onClick={() => this.yourFunction()}id='Button' variant="contained" >Filter</Button>
    { close ? (
      <div className="Intro" > 
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
    <Button style={{color: "white", maxWidth: '50px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} id='Button' variant="contained" onClick={this.getResumes}>Reset</Button>
    <Button style={{color: "white", maxWidth: '50px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} id='Button' variant="contained"  onClick={()=>{this.onChangeHandler()}}>Apply</Button> 
    </div>
    )
      : 
    (
      <div> 
      </div> 
      
    )

    }
    <div className="resumes">
      {this.state.resumes.length ? 
        this.state.resumes.map(p => 
          (<Resume resume={p} getResumes={this.getResumes}/>
          ))
            :
          <h1>No Resumes</h1>
        }
     </div>
      </main>
    );
  }
}



export default IndexPage; 

