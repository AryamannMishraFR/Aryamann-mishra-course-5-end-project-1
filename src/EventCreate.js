import React from 'react'

class EventCreate extends React.Component {
    id = React.createRef()
    event_type = React.createRef()
    event_name = React.createRef()
    release_year = React.createRef()
    charges = React.createRef()
    state = {msg: ''}
    addEvent() {
        var url = 'http://localhost:3001/events/'
        var event = {
            id: Number(this.id.current.value),
            event_type: this.event_type.current.value,
            event_name: this.event_name.current.value,
            release_year: this.release_year.current.value,
            charges: this.charges.current.value
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {"content-type": "application/json"}
        })
        .then(response => this.setState({msg: 'Event Added Successfully...........'}))
        .catch(error => this.setState({msg: error}))
    }
    render () {
        return <div>
            <h1>Add new Event</h1>
            ID: <input type="number" ref={this.id}/> <br/>
            Event Type: <input type="text" ref={this.event_type}/> <br/>
            Event Name: <input type="text" ref={this.event_name}/> <br/>
            Release Year: <input type="text" ref={this.release_year}/> <br/>
            Charges: <input type="text" ref={this.charges}/> <br/>
            <button onClick = {() => this.addEvent()}>Add Event</button> <hr/>
            {this.state.msg}
        </div>
    }
}

export default EventCreate
