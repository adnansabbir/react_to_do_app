import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinjas from './AddNinja'

class App extends Component {
  state = {
    ninjas:[
      {name:'Ryu', age:30, belt:'Red', id:1},
      {name:'Adnan', age:24, belt:'black', id:2},
      {name:'Sabbir', age:20, belt:'blue', id:3},
    ]
  }

  addNinja = (ninja) =>{
    ninja.id = Math.random()*10;
    let ninjas = [...this.state.ninjas,ninja]
    this.setState({
      ninjas:ninjas
    });

  }
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinjas addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
