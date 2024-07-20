import React,{useState}  from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import "../css-files/signup.css";
import Header from '../components/Header';
import { auth,db } from '../components/Firbase';
import { setDoc,doc } from "firebase/firestore"
import { toast } from "react-toastify";
function Signup () {

    const [fname,setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
  async function handleSubmit(event){
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth,email,password)
      const user= auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  }

  function googleSignup() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          lastName: "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/login";
      }
    });
  }

  return (
    <>
      <Header />
    <div className='signup'>
        <h1>Signup</h1>
        <div className='signup-form'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='First Name' value={fname} onChange={(e) => setFname(e.target.value)} required />
                <input type='text' placeholder='Last Name' value={lname} onChange={(e) => setLname(e.target.value)} required />
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type='password' placeholder='ConfirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type='submit'>Signup</button>
            </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <button onClick={googleSignup} > Signup with Google</button>
            
        </div>
    </div>
    </>
  );
};

export default Signup;
