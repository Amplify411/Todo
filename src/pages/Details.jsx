import "../css-files/details.css";

function Details(){
    
    return(
        <div className="details-bg">
            <div className="details">
                <h1>Task details</h1>
                <h2>Title </h2>
                <p>description</p>
                <p>created time</p>
                <div className="details-button">
                    <button id="close">Close</button>
                </div>
            </div>
        </div>
    )
}
export default Details;