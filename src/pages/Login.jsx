import React, { useEffect } from 'react'
import img from '../images/logo.png';
import bg from '../images/bg.jpeg'
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const {currentUser , signinWithGoogle} = UserAuth();
  console.log(currentUser)

  const handleLogin = async() =>{
    try{
      await signinWithGoogle();
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    if(currentUser){
      navigate("/chat")
    }
  }, [currentUser]);

  return (
    
    <div className="hero min-h-screen bg" style={{backgroundImage: `url(${bg})`, objectFit: 'cover', overflow: 'hidden'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md content">
      {/* <img src={img} className='logo' alt="" /> */}
      <h1 className="mb-5 text-5xl font-bold">Hello there 👋🏻</h1>
      <p className="mb-5">Join the conversation, meet new people, and make connections in one shared room. <b>Talking Heads Unite !!</b></p>
      <button onClick={handleLogin} className="btn btn-primary login">Login with Google </button>
    </div>
  </div>
</div>        
  )
}

export default Login