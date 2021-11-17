export default function Resume(props) {
    return(
        <div className="resume">
            <p>{props.resume.title}</p>
            <p>{props.resume.level}</p>
        </div>
    )
}