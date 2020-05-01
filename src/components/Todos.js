/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, {Component} from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render(){
    return this.props.todos.map((todo) => (
    <TodoItem />
    ));
    
  
}
}
export default Todos;
