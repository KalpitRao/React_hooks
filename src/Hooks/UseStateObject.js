import React, { useState } from 'react'

function UseStateObject() {

    const [data,setData] = useState({
      name:"kalpit",
      age:27,
      degree:"BscIt"
    })

    const handleUpdate=()=>{
      setData({...data,name:"eshu"})         //spread operator
    }

  return (
    <>
    <div>
        <h1>
            Name:{data.name} ,Age:{data.age}, Degree: {data.degree}
        </h1>
        <button onClick={handleUpdate}>
            Update
        </button>



        </div>
    </>
    
  )
}

export default UseStateObject