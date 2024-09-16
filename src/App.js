// import logo from './logo.svg';

import './App.css';
import { useState } from 'react';



function Gallery() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('hello');

  function handleSubmit(e){
    e.preventDefault(); 
    setTimeout(()=>{

      alert(`You said ${message} to ${to}`);
    },3000)
  }
  
  
  return (

 <form onSubmit={handleSubmit}>

  <label>
    To: {''}
  </label>
  <select
    value={to}
    onChange= {e => setTo(e.target.value)}>
    <option value="Alice">Alice</option>
    <option value="Bob">Bob</option>
  </select>

  <textarea placeholder='Message' value={message} onChange={e =>setMessage(e.target.value)}></textarea>
  <button type='submit' className='btn'>Submit</button>
 </form>
  );
}



export default Gallery;
