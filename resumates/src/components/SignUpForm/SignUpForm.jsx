import { Component } from 'react';
import './SignUpForm.css'

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
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>
              <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange} required />
            </label>
            <label>
              <input type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} required />
            </label>
            <label>
              <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} required />
            </label>
            
            <label>
              <input type="password" name="confirm" value={this.state.confirm} placeholder="Confirm Password" onChange={this.handleChange} required />
            </label>
            <label>
              <button type="submit" disabled={disable}>Create Account</button>
            </label>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
