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

    //mark completed
    markComplete = (id) =>{
      this.setState({todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })});
    }

    //Delete todo
   deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
   }
    render(){
    return (
      <div className="App">
        <Todos todos={this.state.todos} 
        markComplete={this.markComplete} 
        deleteTodo= {this.deleteTodo} />
        
      </div>
    );
  }}



export default App;
