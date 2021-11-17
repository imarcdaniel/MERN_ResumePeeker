import * as React from 'react';
import { Component } from 'react';
import { InputLabel, MenuItem, FormControl, Select, Box } from "@material-ui/core"; 

export default class UploadForm extends Component {
  state = {
    title: "",
    level: "",
  };

  getResumes = async () => {
    await fetch("/api/resumes").then((res) => res.json()).then(data => this.setState({resumes: data}))
  }

handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
}

handleSubmit = async () => {
  let body = { 
    title: this.state.title, 
    level: this.state.level, 
    company: this.state.company 
  }
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
  await fetch("/api/resumes", options)
    .then(res => res.json())
    .then(data => {
      this.getResumes();
      this.setState({ 
        title: "",
        level: "",
        company: "" 
      })
    })
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
      <h3>Tell us more about your resume</h3>
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
      <button onClick={this.handleSubmit}>Upload</button>
      </div>
    )
  }
}