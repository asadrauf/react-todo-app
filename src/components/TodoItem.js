import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () =>{
       return{
           background: '#f4f4f4',
           borderBottom: '1px #ccc dotted',
           padding: '10px',
           textDecoration: this.props.todo.completed ?
           'line-through' : 'none'
       } 
       
    }
    render() {
        return (
            
            <div style={this.getStyle()}>
                <p>
                    <input type = "checkbox" />
                    {this.props.todo.title}
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes={
    todo: PropTypes.object.isRequired
}

export default TodoItem;
