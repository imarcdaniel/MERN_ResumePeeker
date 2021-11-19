import { Component } from 'react';
import './SignUpForm.css'
import { TextField, Box, FormControl } from "@material-ui/core"; 
import { Button } from "@material-ui/core"; 
import { Link } from 'react-router-dom'

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      
      const fetchResponse = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        })
      })
      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')

      // decoding our response into js {} and [] format
      let token = await fetchResponse.json();

      // we are saving the token inside the user's browser-- localStorg
      localStorage.setItem('token', token)

      // decoding the JWT payload to pull out the user {}
      const userDoc = JSON.parse(atob(token.split('.')[1])).user;

      this.props.setUserInState(userDoc)


    } catch (err) {
      console.log("SignupForm error", err)
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
    <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off"> </Box>
      <Box className='Box' sx={{ maxWidth: 300 }}>
        <FormControl fullWidth>
          <TextField label="Name" variant="outlined" type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange} required/>
        </FormControl>
      </Box>
      <Box className='Box' sx={{ maxWidth: 300 }}>
        <FormControl fullWidth>
          <TextField label="Email" variant="outlined" type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} required/>
        </FormControl>
      </Box>
      <Box className='Box' sx={{ maxWidth: 300 }}>
        <FormControl fullWidth>
          <TextField label="Password" variant="outlined" type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} required/>
        </FormControl>
      </Box>
      <Box className='Box' sx={{ maxWidth: 300 }}>
        <FormControl fullWidth>
          <TextField label="Confirm Password" variant="outlined" type="password" name="confirm" value={this.state.confirm} placeholder="Confirm Password" onChange={this.handleChange} required/>
        </FormControl>
      </Box>
      <br/>

      <div>
        <Button id='ButtonTwo' variant="contained" type="submit" disabled={disable} onClick={this.handleSubmit}>
          <Link id='link' className='link' to='/index'>Create Account</Link>
        </Button> 
        <p className="error-message">&nbsp;{this.state.error}</p>
       </div>
      </div>
    );
  }
}
