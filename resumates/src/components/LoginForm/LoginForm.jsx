import { Component } from 'react';
import './LoginForm.css'
import { TextField, Box, FormControl } from "@material-ui/core"; 
import { Button } from "@material-ui/core"; 
import { Link } from 'react-router-dom'

export default class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
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

      // 1. POST our new user info to the server
      const fetchResponse = await fetch('/api/users/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: this.state.email, password: this.state.password, })
      })

      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')

      let token = await fetchResponse.json() // 3. decode fetch response: get jwt token from srv
      localStorage.setItem('token', token);  // 4. Stick token into localStorage

      const userDoc = JSON.parse(atob(token.split('.')[1])).user; // 5. Decode the token + put user document into state
      this.props.setUserInState(userDoc)

    } catch (err) {
      console.log("SignupForm error", err)
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  }

  render() {
    return (
    <div>
    <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off"> </Box>
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
      <br/>
      <div>
        <Button id='ButtonTwo' variant="contained" type="submit" onClick={this.handleSubmit}>
          <Link id='link' className='link' to='/index'>Login</Link>
        </Button> 
        <p className="error-message">&nbsp;{this.state.error}</p>
       </div>
      </div>
    );
  }
}