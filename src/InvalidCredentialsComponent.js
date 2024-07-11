import React from 'react'
import reactDom from 'react-dom';
import {store, logout} from './sessionStore'
import LoginComponent from './LoginComponent'

class InvalidCredentialsComponent extends React.Component {
    goBack() {
        store.dispatch(logout())
        reactDom.render(<LoginComponent />,document.getElementById("root"));
    }
    render() {
        return <div>
            <h1>FindMyMovies</h1>
            <h3>Invalid Credentials!!</h3>
            <p>Login Failed Due to Invalid Credentials!!</p> <br/>
            <button onClick = {() => this.goBack()}>Back</button> <br/>
        </div>
    }
}

export default InvalidCredentialsComponent