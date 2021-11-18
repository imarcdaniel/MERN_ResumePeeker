import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Input, MenuItem, FormControl, Select, Box } from "@material-ui/core";


const CommentForm = () => {
    const [ commentsData, setCommentsData] = useState({})

    const handleChange = (e) => {
        setCommentsData({ text: e.target.value });
        console.log(commentsData)
    }

    const handleSubmit = async () => {
        let jwt = localStorage.getItem('token')
        let body = { 
          text: commentsData.text, 
        }
        let options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + jwt
          },
          body: JSON.stringify(body)
        };
        await fetch("/api/comments", options)
            .then(res => res.json())
            .then(data => {console.log("Success:", data)})
            .catch(error => {console.error("Error:", error)})
      }
      return(
        <div>
        <h3>Comment Form</h3>
        <Box className='Box' sx={{ maxWidth: 300 }}>
          <FormControl fullWidth>
            <Input
                multiline= { true }
                rows = { 4 }
                onChange={handleChange}
            ></Input>
          </FormControl>
        </Box>
        <br/>
        <button onClick={handleSubmit}>Submit</button>
        </div>
      )
    // return (
    //     <form
    //     onSubmit={(e) => {
    //         e.preventDefault();
    //         handleSubmit();
    //     }}
    //     >
    //         <textarea
    //             name="text"
    //             cols="30"
    //             rows="2"
    //             placeholder="Comment"
    //     //      value={text}
    //     //      onChange={(e) => setText(e.target.value)}
    //             required
    //         ></textarea>
    //         <button onClick={this.handleSubmit}>Upload</button>
    //   </form> 
    //   );  
}

export default CommentForm;