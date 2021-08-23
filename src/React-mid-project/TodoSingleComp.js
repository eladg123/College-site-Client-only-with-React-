import React, { Component } from 'react'


class SingleTodoComp extends Component{
    constructor(props){
        super(props)
        this.state={todo:this.props.todo, completed:this.props.todo.completed ,todos:this.props.todos}
    }
    
    completeTask = ()=>{
        this.setState(prevState=>({completed:!prevState.completed}));
        let updateTodo = this.props.todo;
        updateTodo.completed = true;
        let updatedTodos = this.state.todos;
        let index = updatedTodos.findIndex(todo=> todo.id=== updateTodo.id);
        updatedTodos[index] = updateTodo;
        this.setState({todos:updatedTodos});
        this.props.cbk(this.state.todos);
        
    }

    render(){

        let button ,bool;
        if(this.state.completed===false){
            bool = "false";
            button = <input  onClick={this.completeTask} type="button" value="Mark Completed"/>;
            
            
        }
        else if(this.state.completed){
            button = null;
            bool = "true";
        }
        return(<div style={{backgroundColor:"ghostwhite", border:"2px solid brown"}}>
                Title: {this.state.todo.title} <br></br>
                Completed: {bool}  {button}
        </div>)
    }
}

export default  SingleTodoComp ;