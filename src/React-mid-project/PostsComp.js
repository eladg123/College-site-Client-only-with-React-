import React, { Component } from 'react'
import SinglePostComp from './SinglePostComp'
import AddPostComp from './AddPost'

class PostsComp extends Component{
    constructor(props){
        super(props)
        this.state={user:this.props.user,posts:this.props.user.posts,addWindow:false}
    }
    componentDidUpdate(propsState,prevState){
        if(prevState.posts != this.state.posts){
            let updatedUser = this.state.user;
            updatedUser.posts = this.state.posts;
            this.props.cbkUser(updatedUser);
            console.log("Updated posts")
        }
    }
    addPost=()=>{
        this.setState({addWindow:true});
    }

    render(){
        let postsToRender = this.state.user.posts.map(post=>{
            return (<SinglePostComp key={post.id} post={post}/>)
        })
        let addWindow;
        if(this.state.addWindow){
            addWindow= <AddPostComp newPosts={data=>{this.setState({posts:data})}} posts={this.props.user.posts} windowBool={data=>{this.setState({addWindow:data})}} />
            console.log(this.state.posts)
            postsToRender=null;
        }
        else if(this.state.addWindow===false){
            addWindow=null;
        }
        return(<div>
           <span>Posts - User {this.state.user.id}</span> <input type="button" onClick={this.addPost} value="Add"/>
            {postsToRender}
            {addWindow}

        </div>)
    }
}


export default PostsComp; 