import React, { Fragment } from 'react'
import './ShowPage.css'
import Resume from '../../components/Resume/Resume';
import CommentSection from '../../components/CommentSection/CommentSection';
import { ImageList, ImageListItem, ImageListItemBar } from "@material-ui/core";
import { useLocation } from 'react-router-dom'

const ShowPage = (props) => {
    const location = useLocation()
    const { resume } = location.state
    const { level, title, image } = resume
    console.log(resume)

    let todaysDate = (new Date()).toLocaleDateString()

    return (
        <>
            <h1>Show Page</h1>
            <h1>{title}</h1>
            <h3>{level}</h3>
            <img src={ image }></img> 
            <h3>{todaysDate}</h3>
            <CommentSection user={props.user} />
        </> 
      );  
}

export default ShowPage;