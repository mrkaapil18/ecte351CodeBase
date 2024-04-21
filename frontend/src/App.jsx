import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios';

function App() {
  const [objects, setObjects] = useState([])
  useEffect(()=>{
    axios.get('/api/admin/test').then((Response) => {
      setObjects(Response.data)
    }) 
    .catch((error) => {
      console.log(error)
    })
  })
  return (
    <>
      <h1>
        Running the frontend
      </h1>
      <p> Nomber of Objects: {objects.length}</p>
      {
        objects.map((object, index)=>(
          <div key={object.id}>
            <h3>{object.title}</h3>
            <p>{object.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
