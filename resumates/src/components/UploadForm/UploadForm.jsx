import { Component } from 'react';
import { Button } from "@material-ui/core"; 
import { Input } from "@material-ui/core"; 

// import Select from '../Select/Select';
// import Checkbox from '../Checkbox/Checkbox';

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
        <textarea 
          name="content"
          onChange={this.handleChange}
          value={this.state.content}></textarea>
        <br/>
        <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
        Upload
        </Button>
</label>
        <button onClick={this.handleSubmit}>Upload</button>
      </div>
    )
  }
}

// class UploadForm extends Component {
//     state = {
//     }

//     render(){
//         return (
//             <section>
//                 <div className="container">
//                     <h2>Upload a new resume</h2>
//                     <h3>Complete this step to gain access to our database</h3>
//                     <button>Upload</button>
//                     <h4>Tell us more about yor resume</h4>
//                     <form ref={this.formRef} onSubmit={this.addResume}>
//                         <Select
//                             options={title}
//                             label="Job Title"
//                             labelFor="jobTitle"
//                             value=""
//                             handleChange={this.handleChange}
//                         />
//                         <Select
//                             options={experience}
//                             label="Experience Level"
//                             labelFor="experienceLevel"
//                             value=""
//                             handleChange={this.handleChange}
//                         />
//                         <Select
//                             options={company}
//                             label="Company Name"
//                             labelFor="companyName"
//                             value=""
//                             handleChange={this.handleChange}
//                         />
//                         <h3>Skills</h3>
//                         <Checkbox 
//                             choices={}
//                             label="Skills"
//                             labelFor="skills"
//                             handleInputChange={this.handleChange}
//                         />
//                         <button className="btn" onClick={this.addResume} disabled={this.state.formInvalid}>Upload</button>
//                         <Link to='/' className="Link">Back</Link>
//                     </form>
//                 </div>
//             </section>
//         )
//     }
// }

// export default UploadForm;