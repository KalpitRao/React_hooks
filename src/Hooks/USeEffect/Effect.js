import React, { useEffect, useState } from 'react'

function Effect() {
  const [count, setcount] = useState(0)

  //Try every use effect
  useEffect(() => {
    if (count >= 1) {
      document.title = `count ${count}`
    } else {
      document.title = `count`
    }
    console.log("hi useffect")
  })
  console.log("Hello")

  // useEffect(() => {
  //   if (count >= 1) {
  //     document.title = `count ${count}`
  //   } else {
  //     document.title = `count`
  //   }
  //   console.log("hi useffect")
  // }, [])

  // useEffect(() => {
  //   if (count >= 1) {
  //     document.title = `count ${count}`
  //   } else {
  //     document.title = `count`
  //   }
  //   console.log("hi useffect")
  // }, [count])

  return (
    <div><h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>Click</button>
    </div>
  )
}

export default Effect