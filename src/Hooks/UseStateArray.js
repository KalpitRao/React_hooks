import React, { useState } from 'react'

function UseStateArray() {

    let biodata = [
        {
            id: 0,
            name: "kalpit",
            age: 27
        },

        {
            id: 1,
            name: "eshita",
            age: 22
        },
        {
            id: 2,
            name: "rohan",
            age: 20
        },
        {
            id: 3,
            name: "swara",
            age: 25
        },
        {
            id: 4,
            name: "shweta",
            age: 24
        },
    ]

//Now if you want to clear the data on click of clear button the we have to use useState hook.
//Eg
    
let [data,setData] = useState(biodata)


    let handleClear=()=>{
        setData([]);
        console.log(setData)
    }

    return (
        <>
            <div>
                {data.map((i) => {
                    console.log(i)
                    return <h1 key={i.id}>Name:{i.name}, Age:{i.age}</h1>
                })}

            <button onClick = {handleClear}>
                Clear All 
            </button>
            </div>


        </>
    )
}



export default UseStateArray