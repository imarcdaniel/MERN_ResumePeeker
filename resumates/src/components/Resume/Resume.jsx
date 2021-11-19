import React from 'react'
import { Link } from 'react-router-dom'

export default function Resume(props) {
    return(
        <div className="resume">
            <p>{props.resume.title}<Link to={{ pathname: '/ShowPage', state: { resume: props.resume } }}>Show</Link></p>
            <p>{props.resume.user}</p>
            <p>{props.resume.level}</p>
            <img src={props.resume.image}></img>
        </div>
    )
}