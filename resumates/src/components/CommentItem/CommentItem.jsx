import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input, MenuItem, FormControl, Select, Box } from "@material-ui/core";

const CommentItem = (props) => {
    const { comment } = props
    console.log(comment)
    const { text } = comment

    return(
        <>
            <h6>{props.user.name}-{ text }</h6>
        </>
    )
}

export default CommentItem;