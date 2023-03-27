
import './App.css';
import { useState } from 'react';

function App() {

  const [counter,setCounter]= useState(0);
  const handleClick1 =() => {
    setCounter(counter+1)

  }
  
  const handleClick2 =() =>{
    if(counter!==0){
      setCounter(counter-1)
    }
  }
  const handleClick3 =() =>{
    setCounter(0)
    
  }


  return (
    <div className='container'>
      <button className='pr'>React Counter</button>

             {/* <card text> */}
       <div className='card_text' style={{}}></div>
        <h3 className='total_amount_heading'>{counter}</h3>

        {/* buttons */}
        <div style={{
  display: "flex",
  justifyContent: "center",
  padding:"20px"
  
}}>
          <button onClick={handleClick1}>+</button>
          <button onClick={handleClick2}>-</button>

        </div>
        <button className='reset' onClick={handleClick3}>RESET</button>
      
    </div>
  );
}

export default App;
