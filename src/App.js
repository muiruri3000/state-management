// import logo from './logo.svg';

import './App.css';
import { useState } from 'react';
import {useImmer} from 'use-immer';


const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: true },
  { id: 2, title: 'Terracotta Army', seen: true },
]

function BucketList() { //main component. 

  const [list, updateList] = useImmer(initialList); //initialization of state

  function handleToggle(artworkId,nextSeen){ //function to access and modify draft copy of state
    updateList(draft => {
      const artwork = draft.find(a => a.id === artworkId);

      artwork.seen = nextSeen; 
    });
  }
return(
<>

<h1>Art Bucket List</h1>
<h2>My list of art to see</h2>
<ItemList
artworks ={list}
onToggle = {handleToggle}
/>
</>

);
}

function ItemList({artworks,onToggle}){
  return (

    <ul>
      {artworks.map(artwork =>(
        <li key={artwork.id}>
          <label>
            <input type='checkbox' checked={artwork.seen} onChange={e=>{onToggle(artwork.id,e.target.checked); }} />

            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}



export default BucketList;
