import './App.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/data')
    .then((response)=>{
      setData(response.data);
    })
    .catch((error)=>{
      console.error("Error fetching data", error);
    })  
  })

  return (
    <>
     <h1>Hello</h1>
     <p>Data: {data.length}</p>

     {
      data.map((data)=>(
        <div key={data.id}>
          <h3>{data.name}</h3>
          <p>{data.age}</p>
          <p>{data.city}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
