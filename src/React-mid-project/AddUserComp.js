import React, { Component } from 'react';



class AddUserComp extends Component{
    constructor(props){
        super(props)
        this.state={users: this.props.users,user:{
            id: "",
            name:"",
            email:"",
            address:{
                street:"",
                city:"",
                zipcode:""
            },
            todos: [],
            posts: []    
        },name:"",email:""}
    }
    addUser = ()=>{
     let i = this.state.users.length +1;
     let newUser = this.state.user;
     newUser.name = this.state.name;
     newUser.email = this.state.email;
     newUser.id = i;
     this.props.newUser(newUser);
     alert("User Added")
    }
    cancelWindow=()=>{
        this.setState({displayWindow:false})
        this.props.addWindow(false)
        
    }
    
    render(){
   
        return(<div style={{border:"2px solid brown"}}>
         <h3>Add New User</h3>
         Name: <input type="text" value={this.state.name} onChange={e=>{this.setState({name:e.target.value})}} placeholder="enter full name"/> <br/>
         Email: <input type="text" value={this.state.email} onChange={e=>{this.setState({email:e.target.value})}} placeholder="enter your email"/> <br/>
         <input type="button" value="Add" onClick={this.addUser} /> <input type="button" value="Cancel" onClick={this.cancelWindow} />
          



        </div>)
    }
}
export default AddUserComp;