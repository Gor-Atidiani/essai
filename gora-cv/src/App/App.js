
import { Component } from 'react';
import MyCars from '../Component/MyCars';
import './App.css';

// faire une state pour gerer mon titre que je vais 

class  App extends Component{
  state={
    title : 'Mon catalogue voiture'
  }
  render(){
    return (
      <div className="App">
        <MyCars title={this.state.title}/>
      </div>
    );
  }
 
}

export default App;
