import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css';

function App() {

  const [photo,setPhoto]=useState("")
  const [pics,setPics]=useState([])

  const changephoto=async()=>{
    const data=await fetch(`https://api.unsplash.com/search/collections?page=1&query=${photo}&client_id=5jDrA9FO7j3dT7yo4RkTPXm48YsXwRRQaPtQ1i397l4`)
    const datajson=await data.json();
    const result=datajson.results
    console.log(result)
    setPics(result)
    
  }

  useEffect(()=>{
    changephoto()
  },[])

  const submit=()=>{
    changephoto()
    setPhoto("")
  }
  return (
    <div className='main'>
      <div className='heading'>
        <label>React Photo Search</label>
      </div>
      
      <div className='input'>
      <div className='search'>
      <input placeholder='search free high resolution images' type="text" className='userinput' value={photo} onChange={(e)=>{setPhoto(e.target.value)}} />
      </div>
     

     <div className='submit'>
     <button type='submit' onClick={submit}>Search</button>
     </div>

     </div>

     <div className='showitems'>
      {
        pics.map((value,index)=>{
          return(
            <div key={index}>
             <img src={value.user.profile_image.large} alt=""/> 
            </div>
          )
        })
      }
     </div>
      

    </div>
  )
}

export default App