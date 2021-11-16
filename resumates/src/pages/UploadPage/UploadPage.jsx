import React, { Component } from 'react'
import UploadForm from '../../components/UploadForm/UploadForm';
import FileUpload from "../../components/FileUpload/FileUpload";
import './UploadPage.css'

export default class UploadPage extends Component {
    render() {
        return (
            <div className="Intro">
                <h1>Upload a new resume</h1>
                <p>Complete this step to gain access to our database</p>
                <FileUpload />
                <UploadForm />
            </div>
        )
    }
}