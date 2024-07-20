import "../css-files/home.css"
import Header from "../components/Header"
import { setDoc,doc } from "firebase/firestore";
import { auth, db } from "../components/Firbase";
import { useState } from "react";
function Home(){

    const [id,setId]=useState(0)
    const [title,setTitle]=useState("Title");
    const [description, setDescription]=useState("Description");

    async function handleAddTask(){
        setId(prevId=>prevId+1);
        try {
            const user = auth.currentUser;
            if(user){
                await setDoc(doc(db,"Tasks",user.uid),{
                    user: user.uid,
                    id: id,
                    title: title,
                    description: description,
                    timestamp: new Date(),
                }  );
                console.log("Bala");
            }
                      
        } catch (error) { 
                console.log(error);
        }
            }
    return(
        <div>
            <Header />
            <div className="todo">
            <button className="add-task" onClick={handleAddTask}>Add Task</button>
            <div className="actions">
                <p>Search: <input name="search" placeholder="Search..." /></p>
                <p>Sortby: <select name="sort" >
                    <option >Recent</option>
                    <option >Name</option>
                    <option >Id</option>
                    </select></p>
            </div>
            <h2>ToDo</h2>
        </div>
        <div className="tasks">
            <h3>Task no.</h3>
            <p>description</p>
            <p>created at </p>
            <div className="tasks-buttons">
                <button>Delete</button>
                <button>Edit</button>
                <button>View Details</button>
            </div>
        </div>
        </div>
    )
}

export default Home;