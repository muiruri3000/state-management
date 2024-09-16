// import logo from './logo.svg';
import { sculptureList } from './data';
import './App.css';
import { useState } from 'react';

function Gallery() {
  
  const [index, setIndex] = useState(0);;
  const [showNore, setShowMore] = useState(false);;
  const hasNext = index < sculptureList.length - 1;

  function handleNextClick(){
    if(hasNext){
      setIndex(index + 1) 

    }else{
      setIndex(0); 
    }
  }
  
  function handleMoreClick(){
    setShowMore(!showNore);
  }

  let sculpture = sculptureList[index]; 
  return (

 <>

 <button onClick={handleNextClick}>Next</button>

  <h2>{sculpture.name}</h2>
  <h2>{sculpture.artist}</h2>

    <h3>({index + 1} of {sculptureList.length})</h3>
 
 
 <button onClick={handleMoreClick}>
  {showNore ? 'hide' : 'Show'} details
 </button>
 {showNore && <p>{sculpture.description}</p>}


<img 

src={sculpture.url}
alt={sculpture.alt}
/>
 </>
  );
}



export default Gallery;
