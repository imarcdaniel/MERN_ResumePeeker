import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Select from '../Select/Select';
// import Checkbox from '../Checkbox/Checkbox';

class UploadForm extends Component {
    state = {
    }

    render(){
        return (
            <section>
                <div className="container">
                    <h2>Upload a new resume</h2>
                    <h3>Complete this step to gain access to our database</h3>
                    <button>Upload</button>
                    <h4>Tell us more about yor resume</h4>
                    <form ref={this.formRef} onSubmit={this.addResume}>
                        {/* <Select
                            options={title}
                            label="Job Title"
                            labelFor="jobTitle"
                            value=""
                            handleChange={this.handleChange}
                        />
                        <Select
                            options={experience}
                            label="Experience Level"
                            labelFor="experienceLevel"
                            value=""
                            handleChange={this.handleChange}
                        />
                        <Select
                            options={company}
                            label="Company Name"
                            labelFor="companyName"
                            value=""
                            handleChange={this.handleChange}
                        />
                        <h3>Skills</h3> */}
                        {/* <Checkbox 
                            choices={}
                            label="Skills"
                            labelFor="skills"
                            handleInputChange={this.handleChange}
                        /> */}
                        <button className="btn" onClick={this.addResume} disabled={this.state.formInvalid}>Upload</button>
                        <Link to='/' className="Link">Back</Link>
                    </form>
                </div>
            </section>
        )
    }
}

export default UploadForm;