import "../css-files/edit.css";
import { useNavigate } from "react-router-dom";
function Edit(){
    const navigate = useNavigate();
    return(
        <div className="edit-bg">
            <div className="edit">
                <h1>Edit Task</h1>
                <p>Title</p>
                <textarea type="text" placeholder="Enter Title"/>
                <p>Description</p>
                <textarea placeholder="Enter Description" />
                <div className="edit-buttons">
                    <button id="save">Save</button>
                    <button id="close" onClick={()=>{navigate(-1)}} >Close</button>
                </div>
            </div>

        </div>
    )
}

export default Edit;