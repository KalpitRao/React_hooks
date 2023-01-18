import React, { useState } from 'react'

function UseState() {

    const [name,setName] = useState("kalpit")



    // const handleChange = () =>{       ////For just a state change.
    //     setName ("Eshita")
    // }


    // const handleChange = () =>{       ////To toggle the state using if else.
    //     let val = name;

    //     if (val === "kalpit"){
    //         setName("eshita")
    //     }
    //     else
    //         setName("kalpit")
        
    // }


    const handleChange = () =>{            ////Toggle state using ternary operator.
        let val = name

        val === "kalpit" ? setName ("Eshita") : setName("kalpit")
    }

  return (
    <div>
        <h1>
            Hello {name}
        </h1>
        <button onClick={handleChange}>
            Click me to change my name
        </button>


    </div>
  )
}

export default UseState