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
          id: 2,
          title: 'I am learning React',
          completed: false
        }
      ]
    }

    render(){
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }}

export default App;
