import logo from './logo.svg';
import './App.css';
import {useEffect} from'react';
import axios from 'axios';
const beUrl = 'http://localhost:1080'
function App() {
  useEffect(()=>{
  },[])
  return (
    <div className="App">
     <a href="http://localhost:1080?fe=react&be=node&projName=react_node">Download React & Node</a>
    </div>
  );
}

export default App;
