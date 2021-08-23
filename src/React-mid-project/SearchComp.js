import React, { Component } from 'react'


class SearchComp extends Component{
    constructor(props){
        super(props)
        this.state={users:this.props.users}
    }

    containCheck = (e)=>{
      let name = e.target.value.toLowerCase();
      let email = e.target.value.toLowerCase();
      let searchData = this.props.users.filter(user=> user.name.toLowerCase().includes(name) || user.email.toLowerCase().includes(email));
      this.props.callback(searchData)
    }

    render(){


        return ( <div>
              Search: <input onChange={this.containCheck} type="text"/> 





        </div>)
    }
}

export default SearchComp; 