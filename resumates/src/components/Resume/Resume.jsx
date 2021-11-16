export default function Resume(props) {
    return(
        <div className="resume">
            <p>{props.post._id}</p>
            <p>{props.post.title}</p>
            <p>{props.post.experience}</p>
            <p>{props.post.company}</p>
        </div>
    )
}