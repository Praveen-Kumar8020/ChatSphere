import React from 'react'
import img from '../images/logo.png';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const {currentUser, logout} = UserAuth();

  const handleLogout= async() =>{
    try{
      await logout();
    }catch(error)
    {
      console.log(error)
    }
  }

  return (
    <div className='navbar fixed z-10 bg-base-300'>
      <img src={img} alt="" className='logo'/>
   <div className="containerWrap flex justify-between">
    
  <button className="btn btn-ghost text-xl">ChatSphere</button>
  {currentUser?<button onClick={handleLogout}>Logout</button> : ""}
</div>
</div>
  )
}

export default Navbar;