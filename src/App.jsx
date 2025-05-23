

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const[name, setName] =useState("shalu")
  const[typeWriter, setTypeWriter] = useState("19811521");

  const incremenBtn = () =>{
    setCount(count+1)
  }
  const decrementBtn = () =>{
    setCount((prevCount)=>{
      if(prevCount <= 0){
        return 0;
      }
      else{
        setCount(prevCount-1)
      }
    })
  }
  const updateName =() =>{
    // setName((prevName) =>{
    //   if(prevName === "shalu"){
    //     return "Shalini"
    //   }
    //   else{
    //     return "shalu"
    //   }
    // })
    setName((prevName) => prevName === "shalu" ? "shalini":"shalu" ) ;
    
  }

  return (
    <div>
      <h1>Counter : {count} </h1>
      <button onClick={incremenBtn}> Increment</button>
      <button onClick={decrementBtn}>Decrement</button>

      <h1>Name : {name}</h1>
      <button onClick={updateName} >Update Name</button>

      <input
        type="text"
        value={typeWriter}
        placeholder='enter your name'
        onChange={(event) =>{
          setTypeWriter(event.target.value);
        }

        }
      />
      <div>
        {typeWriter}
      </div>
    </div>

  )
}

export default App
