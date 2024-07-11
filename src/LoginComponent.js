import React from 'react'
import reactDom from 'react-dom';
import {store, login, logout} from './sessionStore'
import DashboardComponent from './DashboardComponent'
import InvalidCredentialsComponent from './InvalidCredentialsComponent'

class LoginComponent extends React.Component {
    state = {msg: '',
        status: '',
        users: [
            {'uname': 'admin', 'pwd': 'admin'},
            {'uname': 'dristy', 'pwd': 'dristy'},
            {'uname': 'user', 'pwd': 'password'},
            {'uname': 'test', 'pwd': 'user'}
        ]
    }
    uname = React.createRef()
    pwd = React.createRef()
    authenticateUser() {
        var uname = this.uname.current.value
        var pwd = this.pwd.current.value
        if (this.state.users.find( x => x.uname === uname && x.pwd === pwd)) {
            store.dispatch(login(uname))
            this.setState({msg: 'Credentials Validated.....', status: 'valid', className: 'successClass'})
            reactDom.render(<DashboardComponent />,document.getElementById("root"));
        }
        else {
            store.dispatch(logout())
            this.setState({msg: 'Invalid Credentials.....', status: 'invalid', className: 'failureClass'})
            reactDom.render(<InvalidCredentialsComponent />,document.getElementById("root"));
        }
    }
    render() {
        return <div className = {this.state.className}>
            <h3>User Login</h3>
            User Name: <input type = "text" placeholder = "User Name" ref = {this.uname} /> <br/>
            Password :  <input type = "password" placeholder = "Password" ref = {this.pwd} /> <br/>
            <button onClick = {() => this.authenticateUser()}>Login</button> <br/>
        </div>
    }
}

export default LoginComponent
