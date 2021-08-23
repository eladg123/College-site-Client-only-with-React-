import React, { Component } from 'react';



class AddPostComp extends Component{
    constructor(props){
        super(props)
        this.state={posts:this.props.posts,newTitle:"",newBody:""}
    }
    cancelWindow=()=>{
        this.props.windowBool(false)
    }
    addPost=()=>{
        let i = this.state.posts.length +1;
        let newPost = {id:i,title:this.state.newTitle,body:this.state.newBody}
        let postsTemp = [...this.state.posts,newPost];
        this.props.newPosts(postsTemp); 
        this.props.windowBool(false) 
        this.setState({posts:postsTemp});  
    }

    render(){



        return(<div>
     Title: <input type="text" value={this.state.newTitle} onChange={e=>{this.setState({newTitle:e.target.value})}} placeholder="enter title"/>
     Body: <input type="text" value={this.state.newBody} onChange={e=>{this.setState({newBody:e.target.value})}} placeholder="enter body"/>
     <input type="button" value="Add" onClick={this.addPost} />  <input type="button" value="Cancel" onClick={this.cancelWindow} />





        </div>)
    }
}

export default AddPostComp;