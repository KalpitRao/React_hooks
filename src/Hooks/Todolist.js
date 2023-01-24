//In this I am getting the particular id of the product i want to remove.


import React,{useState} from 'react'

function Todolist() {
  

const myData = [
  {
    id:0,
    name:"Kalpit",
    age:27
  },
  {
    id:1,
    name:"eshu",
    age:22
  },
  {
    id:2,
    name:"chaku",
    age:25
  },

]
  const [myArray,setMyArray] = useState(myData);

    

  const removeEle=(id)=>{
    console.log("element removed",id)
    const mynewArray = myArray.filter((i)=>{
      return i.id !==  id;

    })
    setMyArray(mynewArray);
  }
  
    

  return (
    <div className='container'>

    {myData.map((i)=>{
      return <h1 key={i.id}> name:{i.name} age:{i.age}
      <button onClick={()=>removeEle(i.id)}>remove</button>
    </h1>
    })}
      
    </div>
  )
}

export default Todolist