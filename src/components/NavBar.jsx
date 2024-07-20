import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
function NavBar(){
  const [initialLoad,setInitiaLoad] = useState(false)
  useEffect(() => {
    setInitiaLoad(true)
  }, [])
  return(
    <nav >
      <button id="login"><Link to="/login" >Login</Link></button>
      { initialLoad && <button id="signup"><Link to="/signup" >Signup</Link></button>}
    </nav>
    )
}

export default NavBar;