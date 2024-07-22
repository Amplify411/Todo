import { Link } from "react-router-dom";
import "../css-files/home.css";
function Tasks(props){
    return(
        <div className="tasks">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.timestamp}</p>
            <div className="tasks-buttons">
                <button>Delete</button>
                <button><Link to="/edit">Edit</Link></button>
                <button><Link to="/details">Detail</Link></button>
            </div>
        </div>
    ) 
}

export default Tasks;

