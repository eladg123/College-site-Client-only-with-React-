import React, { Component } from 'react'

class OtherDataComp extends Component{
     constructor(props){
         super(props)
         this.state={user:this.props.user}
     }
     updateStreet = (e)=>{
        let updatedStreet = this.state.user;
        updatedStreet.address.street = e.target.value;
        this.setState({user:updatedStreet})   
        this.props.callback(updatedStreet);
    }
    updateCity = (e)=>{
        let updatedCity = this.state.user;
        updatedCity.address.city = e.target.value;
        this.setState({user:updatedCity}) ;
        this.props.callback(updatedCity);  
        console.log(this.state.user)
    }
    updateZip = (e)=>{
        let updatedZip = this.state.user;
        updatedZip.address.zipcode = e.target.value;
        this.setState({user:updatedZip})  
        this.props.callback(updatedZip); 
    }
    
     render(){
        return(<div style={{border:"1px solid blue"}}>
             
              Street: <input type="text" onChange={this.updateStreet} value={this.props.user.address.street}/> <br></br>
              City: <input type="text" onChange={this.updateCity} value={this.props.user.address.city}/> <br></br>
              Zip Code: <input type="text" onChange={this.updateZip} value={this.props.user.address.zipcode}/> 



        </div>)
     }
}

export default OtherDataComp;