import React from 'react'
import { Link } from 'react-router-dom'

export default function Resume(props) {
    return(
        <div className="resume">
            <img className="IndexImg" src={props.resume.image}></img>
            <p><Link id="IndexTitle"to={{ pathname: '/ShowPage', state: { resume: props.resume } }}>{props.resume.title} </Link></p>
            <p className="IndexLevel">{props.resume.level}</p>
        </div>
    )
}