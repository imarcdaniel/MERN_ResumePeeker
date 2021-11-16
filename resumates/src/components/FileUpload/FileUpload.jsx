

import React, { Component } from 'react'





export default class FileUpload extends Component {
  
  state = {
    loading: true,
    uploading: false,
    images: []
  }

  componentDidMount() {
    fetch("api/images/get")
      .then(res => {
        if (res.ok) {
          return this.setState({ loading: false })  
        }
        console.log("Something went wrong on  componentDidMount"); 
        
      })
  }



  onChange = e => {
    const errs = [] 
    const files = Array.from(e.target.files)

    const formData = new FormData()
    const types = ['image/png', 'image/jpeg', 'image/gif']

    files.forEach((file, i) => {

      if (types.every(type => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format`)
      }

      if (file.size > 150000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`)
      }

      formData.append("file", file)
    })

    if (errs.length) {
      return errs.forEach((err) =>
        console.log(err)
      );
    }

    this.setState({ uploading: true })

    fetch("api/images/put", {
      method: 'POST',
      body: formData
    })
    .then(res => {
      if (!res.ok) {
        throw res
      }
      return res.json()
    })
    .then(images => {
      this.setState({
        uploading: false, 
        images
      })
    })
    .catch(err => {
      err.json().then(e => {
        console.log(e)
        this.setState({ uploading: false })
      })
    })
  }

  filter = id => {
    return this.state.images.filter(image => image.public_id !== id)
  }

  removeImage = id => {
    this.setState({ images: this.filter(id) })
  }

  onError = id => {
    console.log('Oops, something went wrong on Filter')
    this.setState({ images: this.filter(id) })
  }
  
  render() {


    return (
      <div className="buttons fadein">
    <div className="button">
      
      <input type="file" id="single" onChange={this.onChange} />
    </div>
  </div>
    )
  }
}


  
