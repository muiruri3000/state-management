// import logo from './logo.svg';
import './App.css';

function App() {
  return (

     <Toolbar
     
     onPlayMovie = {()=>alert('Play Movie')}
     onUploadImage = {()=>alert('Upload Image')}
     />
 
  );
}


function Toolbar({onPlayMovie,onUploadImage}){
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
        </Button>
      <Button onClick={onUploadImage}>
        Upload Image
        </Button>
    </div>
  )

  function Button({onClick,children}){
    return (
      <button className='btn' onClick={onClick}>
        {children}
      </button>
    )
  }
}

export default App;
