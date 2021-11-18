import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default function Resume(props) {
    return(
        <div className="resume">
            <p>{props.resume.title}</p>
            <p>{props.resume.user}</p>
            <p>{props.resume.level}</p>
            {/* <img src={props.resume.image}></img> */}
            <EditIcon onClick={() => props.handleUpdate(props.resume._id)} id="Logo"/>
            <DeleteIcon onClick={() => props.handleDelete(props.resume._id)} id="Logo" />
        </div>
    )
}