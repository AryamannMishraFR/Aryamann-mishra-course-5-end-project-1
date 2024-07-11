import React from 'react'
import EventList from './EventList'
import EventDetails from './EventDetails'
import EventCreate from './EventCreate'
import EventEdit from './EventEdit'
import EventDelete from './EventDelete'
// import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

class EventsIndex extends React.Component {
    render(){
        return <div>
            <ul class="nav nav-tabs">
                <li><a href = "#list" data-toggle = "tab">List</a></li>
                <li><a href = "#details" data-toggle = "tab">Details</a></li>
                <li><a href = "#create" data-toggle = "tab">Create</a></li>
                <li><a href = "#edit" data-toggle = "tab">Edit</a></li>
                <li><a href = "#delete" data-toggle = "tab">Delete</a></li>
            </ul>

            <div class = "tab-content">
                <div id = "list" class = "tab-pane fade">
                    <EventList />
                </div>

                <div id = "details" class = "tab-pane fade">
                    <EventDetails />
                </div>

                <div id = "create" class = "tab-pane fade">
                    <EventCreate />
                </div>

                <div id = "edit" class = "tab-pane fade">
                    <EventEdit />
                </div>

                <div id = "delete" class = "tab-pane fade">
                    <EventDelete />
                </div>
            </div>
            {/* <BrowserRouter>
                <Link to="event-list">List</Link> | 
                <Link to="event-details">Details</Link> |
                <Link to="event-create">Create</Link> |
                <Link to="event-edit">Edit</Link> |
                <Link to="event-delete">Delete</Link>  <hr/>
                <Switch>
                    <Route patch="/event-list">
                            <EventList />
                    </Route>
                    <Route patch="/event-details">
                            <EventDetails />
                    </Route>
                    <Route patch="/event-create">
                            <EventCreate />
                    </Route>
                    <Route patch="/event-edit">
                            <EventEdit />
                    </Route>
                    <Route patch="/event-delete">
                            <EventDelete />
                    </Route>
                </Switch>
            </BrowserRouter> */}

        </div>
    }
}

export default EventsIndex