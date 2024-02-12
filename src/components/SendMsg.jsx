import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const SendMsg = () => {
  const [value, setValue] = useState("");
  const {currentUser} = UserAuth();
  //console.log(value)

  const handleSendMessage =async(e) =>{
    e.preventDefault();
    if(value.trim()===""){
      alert("Enter valid message")
      return;
    }

    try{
      const {uid, displayName, photoURL} = currentUser;
      await addDoc(collection(db, "messages"),{
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt : serverTimestamp(),
        uid 
      })
    }catch(error)
    {
      console.log(error)
    }
   // console.log(value)
    setValue("")
  }

  return (
    <div className="bg-gray-300 fixed bottom-0 w-full py-5 px-2 shadow-lg send-div">
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
        <input value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" />
        <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm  send-btn">Send</button>
      </form>
    </div>
  )
}

export default SendMsg