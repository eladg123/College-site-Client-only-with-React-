import React, { Component } from 'react'


class SinglePostComp extends Component{
    constructor(props){
        super(props)
        this.state={post:this.props.post}
    }
    

    render(){
        return(<div style={{backgroundColor:"ghostwhite", border:"2px solid brown"}}>

         Title: {this.state.post.title} <br></br>
         Body: {this.state.post.body}   


        </div>)
    }
}

export default SinglePostComp;