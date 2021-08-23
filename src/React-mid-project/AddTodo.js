import React, { Component } from 'react';



class AddTodoComp extends Component{
    constructor(props){
        super(props)
        this.state={todos:this.props.todos,newTitle:""}
    }
    cancelWindow=()=>{
        this.props.windowBool(false)
    }
    addTodo=()=>{
        let i = this.state.todos.length +1;
        let newTodo = {id:i,title:this.state.newTitle,completed:false}
        let todosTemp = [...this.state.todos, newTodo]

        this.props.newTodos(todosTemp); 
        this.props.windowBool(false)   
        this.setState({todos:todosTemp})
   
    }

    render(){



        return(<div>
     Title: <input type="text" value={this.state.newTitle} onChange={e=>{this.setState({newTitle:e.target.value})}} placeholder="enter title"/>

     <input type="button" value="Add" onClick={this.addTodo} />  <input type="button" value="Cancel" onClick={this.cancelWindow} />





        </div>)
    }
}

export default AddTodoComp;