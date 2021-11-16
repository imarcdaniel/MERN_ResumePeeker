import React, { Component } from 'react'
import UploadForm from '../../components/UploadForm/UploadForm';
import './UploadPage.css'

export default class UploadPage extends Component {
    render() {
        return (
            <div className="Intro">
                <h1>Upload Page</h1>
                <UploadForm />
            </div>
        )
    }
}