import React, { Component } from 'react'
import TodoSingleComp from './TodoSingleComp'
import AddTodoComp from './AddTodo'

class TodosComp extends Component{
    constructor(props){
        super(props)
        this.state={user:this.props.user,todos:this.props.user.todos,addWindow:false}
    }
componentDidUpdate(propsState,prevState){
    if(prevState.todos != this.state.todos){
        let updatedUser = this.state.user;
        updatedUser.todos = this.state.todos;
        this.props.cbkUser(updatedUser);
        console.log("Updated todos")
    }
}
addTodo=()=>{
 this.setState({addWindow:true})
}

    render(){
        let todosToRender = this.state.user.todos.map(todo=>{
            return (<TodoSingleComp cbk={data=>{this.setState({todos:data})}} key={todo.id} todos={this.state.user.todos} todo={todo} />)
        })
        let addWindow;
        if(this.state.addWindow){
            addWindow = <AddTodoComp newTodos={data=>{this.setState({todos:data})}} todos={this.props.user.todos} windowBool={data=>{this.setState({addWindow:data})}}/>
            todosToRender= null;
        }
        else if (this.state.addWindow=== false){
            addWindow = null;
        }
        return(<div>
         <span>Todos - User {this.state.user.id}</span> <input type="button" value="Add" onClick={this.addTodo}/>
         {todosToRender}
         {addWindow}
        </div>)
    }
}


export default TodosComp; 