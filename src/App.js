import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';




function App() {
  // eslint-disable-next-line no-unused-vars
  const [mode, setMode] = useState('light');
  
  
  // You can use setMode later in your component
 const toggleMode = ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
  
  

  }
  return (
    <>
   
        <Navbar title="Text analyzer" mode={mode} toggleMode={toggleMode} about="aboutTextUtils" />
        <div className="container my-4">
         
            
            <TextForm heading="Enter your text to analyze" mode={mode} />
        
        </div>
   
    </>
  );
}

export default App;
