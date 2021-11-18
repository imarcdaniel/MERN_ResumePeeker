import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CommentForm from '../../components/CommentForm/CommentForm';
import CommentItem from '../../components/CommentItem/CommentItem';


export default function CommentSection(props) {
    const [ commentsArr, setCommentsArr ] = useState([])

    const getComments = async () => {
        await fetch("/api/comments").then((res) => res.json()).then(data => setCommentsArr(data))
      }

      useEffect(() => {
        getComments()
      }, []);

    return(
        <div>
            <CommentForm />
            <div>
                {commentsArr.map((comment) => (
                    <CommentItem comment={comment} user={props.user} />
                ))}
            </div>
        </div>
    )
}