import React, {Component} from 'react';
import Todos from './components/Todos';


import './App.css';


class App extends Component {
    state = {
      todos: [
        {
          id: 1,
          title: 'Do something',
          completed: false
        },
        {
          id: 2,
          title: 'React is awsome',
          completed: false
        },
        {
          id: 3,
          title: 'I am learning React',
          completed: false
        }
      ]
    }

    markComplete = () =>{
      console.log('from app.js')
    }
    render(){
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
        
      </div>
    );
  }}



export default App;
