import React from 'react'

class EventDelete extends React.Component {
    id = React.createRef()
    state = {msg: ''}
    deleteEvent() {
        if(window.confirm("Are you sure?")) {
            var id = Number(this.id.current.value)
            var url = `http://localhost:3001/events/${id}`
            fetch(url, {
                method: 'DELETE'})
            .then(response => this.setState({msg: 'Record Deleted Successfully...........'}))
            .catch(error => this.setState({msg: error}))
        }
    }
    render () {
        return <div>
            <h1>Delete Employee</h1>
            ID: <input type="number" ref={this.id}/> <br/>
            <button onClick = {() => this.deleteEvent()}>Delete Event</button> <hr/>
            {this.state.msg}
        </div>
    }
}

export default EventDelete
