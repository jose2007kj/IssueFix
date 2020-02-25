import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import {ModelComponent} from './utils'
function App() {
    const [show, setShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <Button onClick ={()=>setShow(true) }>Book</Button>
                <ModelComponent open={show} close={()=>setShow(false)} url="https://meet-with-cybermonkeys.appointlet.com/"/>
      </header>
    </div>
  );
}

export default App;
