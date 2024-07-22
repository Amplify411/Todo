import "../css-files/details.css";
import { useNavigate } from "react-router-dom";
function Details(){

    const navigate = useNavigate();
    
    return(
        <div className="details-bg">
            <div className="details">
                <h1>Task details</h1>
                <h2>Title </h2>
                <p>description</p>
                <p>created time</p>
                <div className="details-button">
                    <button id="close" onClick={()=>{navigate(-1)}} >Close</button>
                </div>
            </div>
        </div>
    )
}
export default Details;