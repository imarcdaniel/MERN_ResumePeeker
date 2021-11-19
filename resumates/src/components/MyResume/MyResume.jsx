import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default function Resume(props) {
    return(
        <div className="resume">
            <img className="ResumeImg" src={props.resume.image}></img>
            <p className="ResumeTitle">{props.resume.title}</p>
            <p className="ResumeLevel">{props.resume.level}</p>
            <EditIcon onClick={() => props.handleUpdate(props.resume._id)} id="Logo"/>
            <DeleteIcon onClick={() => props.handleDelete(props.resume._id)} id="Logo" />
            </div>
    )
}