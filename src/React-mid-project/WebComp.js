import React, { Component } from 'react'
import Utils from './Utils'
import UserCard from './UserCard'
import SearchComp from './SearchComp'
import AddUserComp from './AddUserComp'




class WebComp extends Component{
    constructor(props){
        super(props)
        this.state={users:[],usersToRender:[],addWindow:false}
    }
 async componentDidMount(){
    let Users = await Utils.getProjectData();
     this.setState({users:Users,usersToRender:Users});
 }
 addUserWindow= ()=>{
 this.setState({addWindow:true})
 }

    render(){
    
        let usersToRender = this.state.usersToRender.map(user=>{
            return(<UserCard cbk={ (data)=>{
                                    let allUsers = this.state.users;
                                    let index =allUsers.findIndex(user=>user.id===data.id);
                                    allUsers[index]=data;
                                    this.setState({users:allUsers,usersToRender:allUsers})
                                    console.log(allUsers[index])
                          }} delete={(data)=>{
                                    let allUsers = this.state.users;
                                    let index =allUsers.findIndex(user=>user.id===data.id);
                                    allUsers.splice(index,1);
                                    this.setState({users:allUsers,usersToRender:allUsers})}}
             key={user.id} user={user} />)
        })
        let addUserWindow;
        if(this.state.addWindow ){
            addUserWindow = <AddUserComp addWindow={data=>{this.setState({addWindow:data})}} users={this.state.users}  newUser={newUser=>{this.setState(prevState=>({addWindow:!prevState.addWindow,users:[...prevState.users,newUser],usersToRender:[...prevState.usersToRender,newUser]}))}}/>;
           
        }
        else{
            addUserWindow = "";
        }
       
        return(
        <div style={{border:"5px solid black"}}>  
              {addUserWindow} <br/> <br/> <br/>
            <SearchComp callback={data=> {this.setState({usersToRender:data})} }  users={this.state.users}/> <input onClick={this.addUserWindow} type="button" value="Add"/>
            
          

          {usersToRender}
        </div>
        )
    }
}

export default WebComp;