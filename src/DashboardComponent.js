import React from 'react'
import reactDom from 'react-dom';
import {store, logout} from './sessionStore'
import LoginComponent from './LoginComponent'
import EventsIndex from './EventsIndex'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

class DashboardComponent extends React.Component {
    state = {msg: ''}
    logoutUser() {
        store.dispatch(logout())
        reactDom.render(<LoginComponent />,document.getElementById("root"));
    }
    render() {
        return <div>
            <button onClick = {() => this.logoutUser()}>Logout</button> <br/>
            <h1>FindMyMovies Dashboard</h1>
            <BrowserRouter>
                <Link to="/">Home</Link> | 
                <Link to="about">About</Link> | 
                <Link to="contact">Contact</Link> |
                <Link to="events">Events</Link> <hr/>
                <Switch>
                    <Route exact path="/" render={() => { return <div> <h1> Index Component</h1></div>}} />
                    <Route path="/help" render={() => { return <div> <h1> Help Component</h1></div>}} />
                    <Route path="/about" render={() => { return <div> <h1> About Component</h1></div>}} />
                    <Route path="/contact" render={() => { return <div> <h1> Contact Component</h1></div>}} /> 
                    <Route patch="/events">
                        <EventsIndex />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    }
}

export default DashboardComponent
