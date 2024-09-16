// import logo from './logo.svg';

import './App.css';
import { useState } from 'react';



function Gallery() {
  const [state, setState] = useState(0);


  function Increment(){
    setState((s)=>s + 1);
  }
  
  
  return (
    <>
    
    <p>{state}</p>
    <button onClick={Increment} className='btn'> + 1</button>
    <button onClick={()=>{
      
      Increment()
      Increment()
      Increment()
    
    }} 
    
    className='btn'> + 3</button>
    </>
  );
}



export default Gallery;
