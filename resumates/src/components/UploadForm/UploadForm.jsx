import { Component } from 'react';
import { InputLabel, MenuItem, FormControl, Select, Box } from "@material-ui/core"; 

export default class UploadForm extends Component {
  state = {
    title: "",
    level: "",
    company: ""
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
            onChange={this.handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
            onChange={this.handleChange}>
            <MenuItem value={10}>Junior</MenuItem>
            <MenuItem value={20}>Intermediate</MenuItem>
            <MenuItem value={30}>Senior</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className='Box' sx={{ maxWidth: 300 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Current Employer</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.company}
            label="Current Employer"
            onChange={this.handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      </div>
    )
  }
}