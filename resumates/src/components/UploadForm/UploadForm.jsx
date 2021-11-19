import * as React from 'react';
import { Component } from 'react';
import { InputLabel, MenuItem, FormControl, Select, Box } from "@material-ui/core"; 
import { Button, Fab } from "@material-ui/core"; 
import { Link } from 'react-router-dom'
import AddIcon from "@material-ui/icons/Add";

export default class UploadForm extends Component {
  state = {
    title: "",
    level: "",
    user: null
  };

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  getResumes = async () => {
    await fetch("/api/resumes").then((res) => res.json()).then(data => this.setState({resumes: data}))
  }

handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
}

handleSubmit = async () => {
    const formData = new FormData();
  formData.append("title", this.state.title);
  formData.append("level", this.state.level);
  formData.append("file", this.state.file);
  formData.append("user", this.state.user);
  
  let jwt = localStorage.getItem('token')
  let body = { 
    title: this.state.title, 
    level: this.state.level, 
  }
  let options = {
   method: "POST",
    headers: {
      'Authorization': 'Bearer ' + jwt
    },
    body: formData,
  };
  await fetch("/api/resumes", options)
    .then(res => res.json())
    .then(data => {
      this.getResumes();
      this.setState({ 
        title: "",
        level: "",
      })
    })
}
handleChangefile = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
}
handleEdit = async (id) => {
    try {
      let fetchResponse = await fetch("/api/resumes/update/"+id, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        }) 
      let serverResponse = await fetchResponse.json() 
      console.log("Success:", serverResponse)  
      this.getResumes()
    } catch (err) {
      console.error("Error:", err)
    }
}

handleDelete = async (id) => {
         try {
      let fetchResponse = await fetch("/api/resumes/delete/"+id, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        }) 
      let serverResponse = await fetchResponse.json() 
      console.log("Success:", serverResponse)  
      this.getResumes()
    } catch (err) {
      console.error("Error:", err)
    }
}

  render() {
    return(
      <div> 
      <h3 className='UpHeader'>Tell us more about your resume</h3>
     <label htmlFor="upload-photo" >
        <input id="updateinput" type="file" type="file" name="file" onChange={this.handleChangefile} />
        <br />
        <br />
      </label>
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
            <MenuItem value={"Software Engineer"}>Software Engineer</MenuItem>
            <MenuItem value={"Data Scientist"}>Data Scientist</MenuItem>
            <MenuItem value={"Web Developer"}>Web Developer</MenuItem>
            <MenuItem value={"Techincal Recruiter"}>Techincal Recruiter</MenuItem>
            <MenuItem value={"IT Support Technician"}>IT Support Technician</MenuItem>
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
    <Button id='Button' variant="contained" onClick={this.handleSubmit}>
      <Link id='link' className='link' to='/Profile'>Upload</Link>
    </Button>
      </div>
    )
  }
}