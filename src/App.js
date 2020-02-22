import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import {ModelComponent} from './utils'
class App extends Component {
 constructor(props){
        super(props);
        this.state ={
            show_model: false
        }
        this.closeModel = this.closeModel.bind(this);
        this.openModel = this.openModel.bind(this);
    }
    closeModel(){
        this.setState({
            show_model: false
        })
    }
    openModel(){
        this.setState({
            show_model: true
        })
    }
render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <Button onClick = {this.openModel}>Book</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ModelComponent open={this.state.show_model} close={this.closeModel} url="https://meet-with-cybermonkeys.appointlet.com/"/>
      </header>
    </div>
  );}
}

export default App;
