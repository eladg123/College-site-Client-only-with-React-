import React, { Component } from 'react'
import OtherDataComp from './OtherDataComp'
import Utils from './Utils'
import PostsComp from './PostsComp'
import TodosComp from './TodosComp'



class UserCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: this.props.user.todos,
            user: this.props.user,
            showOtherData: false,
            clicked: false,
            allTodosCompleted: false
        }
    }


    showOtherData = () => {
        this.setState({ showOtherData: true });
    }
    hideOtherData = () => {
        this.setState({ showOtherData: false })
    }
    updateName = (e) => {
        let updatedNamed = this.state.user;
        updatedNamed.name = e.target.value;
        this.setState({ user: updatedNamed });
    }
    updateEmail = (e) => {
        let updatedEmail = this.state.user;
        updatedEmail.email = e.target.value;
        this.setState({ user: updatedEmail });
    }
    updateUser = () => {
        this.props.cbk(this.state.user)
        alert("User Updated");
    }
    deleteUser = () => {
        this.props.delete(this.state.user);
        alert("User Deleted");
    }
    chooseUser = () => {
        this.setState(prevState => ({ clicked: !prevState.clicked }));
    }

    render() {
        console.log(this.state.todos);
        let borderStyle;
        let postsToRender, todosToRender;
        let backStyle;
        if (this.state.clicked) {
            backStyle = 'salmon'
            postsToRender = <PostsComp cbkUser={data => { this.setState({ user: data }) }} user={this.state.user} />
            todosToRender = <TodosComp cbkUser={data => { this.setState({ user: data }) }} user={this.state.user} />
        }
        else if (this.state.clicked === false) {
            backStyle = ''
            postsToRender = null;
            todosToRender = null;
        }

        let otherData;
        if (this.state.showOtherData) {
            otherData = <OtherDataComp callback={data => { this.setState({ user: data }) }} user={this.state.user} />;
        }
        else if (this.state.showOtherData === false) {
            otherData = null;
        }
        if (this.state.todos == null) {
            this.setState({ todos: this.props.user.todos })
        }
        if (this.props.user.todos != []) {
            console.log(this.props.user.todos)
            borderStyle = this.props.user.todos.some((todo) => todo.completed === false) ? '3px solid red' : '3px solid green';
        }
        return (<div style={{ border: borderStyle, backgroundColor: backStyle }}>
            ID: <label onClick={this.chooseUser}>{this.state.user.id} <br></br></label>
            Name: <input type="text" onChange={this.updateName} value={this.state.user.name} /> <br></br>
            Email:<input type="text" onChange={this.updateEmail} value={this.state.user.email} /> <br></br>
            <input type="button" onClick={this.hideOtherData} onMouseOver={this.showOtherData} value="Other Data" /> <br></br>
            <input type="button" onClick={this.updateUser} value="Update" /> <br></br>
            <input type="button" onClick={this.deleteUser} value="Delete" /> <br></br>
            {otherData}
            {todosToRender}
            {postsToRender}
        </div>)
    }
}

export default UserCard;