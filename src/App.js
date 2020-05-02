import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import './App.css';
import axios from 'axios';


class App extends Component {
    state = {
      todos: []
    }

    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(res => this.setState({todos: res.data}))
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
     axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
     .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
    
   }

   //addTodo
   addTodo = (title) =>{
    axios.post('https://jsonplaceholder.typicode.com/todos',{
    title: title,
    completed: false
   })
   .then(res =>  this.setState({todos: [...this.state.todos, res.data]}));
   }
    render(){
    return (
      <div className="App">
        <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} 
        markComplete={this.markComplete} 
        deleteTodo= {this.deleteTodo} />
        </div>
      </div>
    );
  }}



export default App;
