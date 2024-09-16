// import logo from './logo.svg';

import './App.css';
import { useState } from 'react';
import {useImmer} from 'use-immer';


function Form() {
  const [person, setPerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });


function editNameChange(e){
setPerson(draft=>{
  draft.name = e.target.value;
})
}

  function editCityChange(e){
setPerson(draft =>{
  draft.artwork.city = e.target.value;
})
  }

  function editImageChange(e){
      setPerson(draft=>{
        draft.artwork.image = e.target.value
      })
  }
  function editTitleChange(e){
    setPerson(draft=>{
      draft.artwork.title = e.target.value
    })
  }

  
  
  return (
    <>
    <label>
      Title:
    </label>
    <input 
    value={person.artwork.title}
    onChange={editTitleChange}
    
    /><br />
    <label>
      Name:
    </label>
    <input 
    value={person.name}
    onChange={editNameChange}
    
    /><br />
    <label>
      City:
    </label>
    <input 
    value={person.artwork.city}
    onChange={editCityChange}
    
    /><br />
    <label>
     Image:
    </label>
    <input 
    value={person.artwork.image}
    onChange={editImageChange}
    
    />
  <p>{person.artwork.title} { 'by '}
    {person.name}</p>
  
    <p>{person.artwork.city}</p>
    <img 
    
    src={person.artwork.image}
    
    />
    
    </>
  );
}



export default Form;
