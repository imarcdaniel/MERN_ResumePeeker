import React from 'react'
import './ProfilePage.css'
import { Link } from 'react-router-dom'
import MyResume from '../../components/MyResume/MyResume';

class ProfilePage extends React.Component {
  // initial state of the app when it first loads
  state = {
      resumes: [],
  }

    setUserInState = (incomingUserData) => {
    this.setState({ 
      user: incomingUserData
    })
    }

  getResumes = async (req) => {
  let jwt = localStorage.getItem('token')
  let options = {
    method:"GET",
    headers: {
       'Authorization': 'Bearer ' + jwt
    },
  };
  await fetch("/api/resumes/mine", options)
    .then(res => res.json())
    .then(data => {
      this.setState({ 
        resumes: data,
      })
    })
}

  componentDidMount() {
    this.getResumes()
  }

  handleUpdate = async (id) => {
    try {
      let fetchResponse = await fetch("/api/resumes/update/"+id, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        }) 
      let serverResponse = await fetchResponse.json() 
      console.log("Success:", serverResponse)  
      this.getResumes()
    } catch (err) {
      console.error("Error:", err) // <-- log if error 
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
      console.error("Error:", err) // <-- log if error 
    }
}

  render() {
    return (
      <main className="ProfilePage">
        <div className = "Resumes">
          <div className='some-page-wrapper'>
              <div className='row'>
                <div className='column'>
                    <h1 className='ProfHeader'>My Resumes</h1>
                        {this.state.resumes.length ? 
                          this.state.resumes.map(p => {
                            if (this.props.user._id == p.user) { 
                              return <MyResume resume={p} getResumes={this.getResumes} handleDelete= {this.handleDelete} handleUpdate = {this.handleUpdate}/>
                            }})
                              :
                            <h1>No Resumes</h1> 
                        }
                </div>
                <div className='column'>
                    <Link id='ProfLink' to='/Upload'>+ Upload Resume</Link>
                </div>
              </div>
            </div>
        </div>

        <div className = "BookM">
          <h1 className='ProfHeader'>Bookmarked</h1>
        </div>
      </main>
    );
  }
}

export default ProfilePage;