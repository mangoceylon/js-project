import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import Card from "react-bootstrap/Card"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=2')
      .then(response => {
        const { data: { data } } = response
        this.setState({ data: data })
      })
      .catch(err => {
        this.setState({data: ["error retrieving names"]})
      })
  }

  handleClick = (idx) => {
    const currentState = [...this.state.data]
    const newState = currentState.filter( (item, index) => {
      if (index !== idx) {
        return item
      }
    })

    this.setState({
      data: newState
    })
  }

  render() {
    return(
      <div>
        {this.state.data && this.state.data.map( (person, index) => {
        return (
          // <div>{person.first_name}</div>
          <div key={index}>
            <Card style={{ width: '18rem' }}>
              <div style={{ marginLeft: "80%", marginTop: 5, fontSize: 30}} onClick={ e => this.handleClick(index)}>X</div>
              <Card.Body>
                <img src={person.avatar}/>
                <Card.Title>{person.first_name} {person.last_name}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        )
      }
      )}
      </div>
    )
  }
}

export default App
