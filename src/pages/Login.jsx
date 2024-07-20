import React,{useState}  from 'react';
import { Link } from 'react-router-dom';
import "../css-files/login.css";
import Header from '../components/Header';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/Firbase';
import { toast } from 'react-toastify';
function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  async function handleSubmit(event){
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,email,password);
      console.log("User logged in Successfully");
      window.location.href = "/home";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      
    }
  }

  function handleEmailChange(event){
    const newEmail = event.target.value;
    setEmail(newEmail);
  }

  function handlePasswordChange(event){
    const newPassword = event.target.value;
    setPassword(newPassword);}

  return (
    <>
    <Header />
    <div className='login'>
        <h1>Login</h1>
        <div className='login-form'>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" placeholder="email"
            value={email} onChange={handleEmailChange} />
          <input
            type="password" placeholder="Password"
            value={password} onChange={handlePasswordChange} />
        </form>
        <button onClick={handleSubmit}><Link >Login</Link></button>
        <p> Don't have an account?  <Link to='/signup'>SignUp</Link> </p>
        <button> Login with Google</button>
        
        </div>
    </div>
    </>
  );
};

export default Login;
