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
        <div className="TopSection">
            <h1 className="ShowHeader">{title}</h1>
            <h3 className="ShowLevel">{level}</h3>
            <h3 className="ShowDate">Uploaded on {todaysDate}</h3>
            <img className="Showimg" src={ image }></img> 
        </div>
            <CommentSection user={props.user} />
        </> 
      );  
}

export default ShowPage;

