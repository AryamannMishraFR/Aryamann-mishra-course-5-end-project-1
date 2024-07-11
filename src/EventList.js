import React from 'react'

class EventList extends React.Component {
    state = {events: [], error: ''}
    componentDidMount() {
        // This is a react life cycle hook method, will be called once component is successfully loaded
        var url = "http://localhost:3001/events/"
        fetch(url)
        .then(response => response.json())
        .then(response => this.setState({events:response}))
        .catch(error => this.setState({error:error}))}
    render() {
        return <div>
            <h1>Events List</h1>
            <table border = "1">
                <th>ID</th><th>Event Type</th><th>Event Name</th><th>Release Year</th><th>Charges (in USD)</th>
                {this.state.events.map(e => 
                <tr>
                    <td>{e.id}</td><td>{e.event_type}</td><td>{e.event_name}</td><td>{e.release_year}</td><td>{e.charges}</td>
                </tr>)}
            </table>
            {this.state.error}
        </div>
    }
}

export default EventList
