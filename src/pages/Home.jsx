import "../css-files/home.css"
import Header from "../components/Header"
import { setDoc,doc } from "firebase/firestore";
import { auth, db } from "../components/Firbase";
import { useEffect, useState } from "react";
import Tasks from "../components/Tasks";
import generateRandomString from "../util/stringGenerator";
import { collection, getDocs } from 'firebase/firestore';
function Home(){

    const [id,setId]=useState(0)
    const [title,setTitle]=useState("Title");
    const [description, setDescription]=useState("Description");
    const [docId,setDocId]=useState("");
    const [data, setData] = useState([]);

    const user = auth.currentUser;

    async function fetchData () {
        try {
          // Reference to the "Tasks" collection
          const querySnapshot = await getDocs(collection(db, 'Tasks'));
          let dataList = querySnapshot.docs.map(doc => ({ 
            
            id: doc.id, ...doc.data() 
        }));
        
          setData(dataList);
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    useEffect( () => {
        fetchData();
    }, []);

    async function handleAddTask(){
        setId(Math.floor(Math.random() * 100) + 1);
        const newDocId = generateRandomString(30); // Adjust the length as needed
        setDocId(newDocId);
        try {
            
            if(user){
                await setDoc(doc(db,"Tasks",docId),{
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
        fetchData();
        setData(data.filter((doc) => 
            doc.user === user.uid))
          console.log(data);
          console.log("HL");
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
        {data.map((items,index)=> {
            return(
                <Tasks 
                    key={index}
                    title ={items.title}
                    description={items.description}
                    timestamp={items.timestamp.toDate().toLocaleString()}

                />
            )
        })}
        
        </div>
    )
}

export default Home;