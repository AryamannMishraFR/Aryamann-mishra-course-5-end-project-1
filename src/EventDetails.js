import React from 'react'

class EventDetails extends React.Component {
    id = React.createRef()
    ename = React.createRef()
    state = {event: {}, error: ''}
    getEventById() {
        var id = this.id.current.value
        var url = `http://localhost:3001/events/${id}`
        fetch(url)
        .then(response => response.json())
        .then(response => this.setState({event:response}))
        .catch(error => this.setState({error:error}))
        }
    render() {
        return <div>
            <h1>Event Detail</h1>
            Enter ID: <input type="number" ref={this.id}/>
            <button onClick = {() => this.getEventById()}>Search</button> <hr/>
            Event Type: {this.state.event.event_type} <br/>
            Event Name: {this.state.event.event_name} <br/>
            Release Year: {this.state.event.release_year} <br/>
            Charges: $ {this.state.event.charges}
        </div>
    }
}

export default EventDetails
