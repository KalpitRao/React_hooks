import React, { useEffect } from 'react'
import { useState } from 'react'

function Effect1() {
    //Go to Elements>Event Listeners>resize..you will see lot of resize.
    //So for this we have a clean function


    const [widthcount,setWidthCount] = useState(window.screen.width);

    const actualWidth = () =>{
        console.log(window.innerWidth)
        setWidthCount(window.innerWidth)
    }
    
    useEffect(() => {
        window.addEventListener("resize",actualWidth)
        return () =>{
            window.removeEventListener("resize",actualWidth)   ///this is how we use clean function to clean the resize
        }
    })

   
    
    




  return (
    <>
    <h1>This is the width of my screen:</h1>
    <p>{widthcount}</p>
    </>
  )
}

export default Effect1