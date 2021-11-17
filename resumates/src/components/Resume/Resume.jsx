import "./resume.css";
export default function Resume(props) {
      
    let resume = props.resumeItems.map((post) => 
    <div className="resumes">
        <img src={post[3]} width="190" height="300"/>
       <p>{post[0]}</p>
            <p>{post[1]}</p>
            <p>{post[2]}</p>
            
        </div>
    );
    return(
        <section>
        <div className="resume">
            {resume}
        </div>
        </section>
    )
}