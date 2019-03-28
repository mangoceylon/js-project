import React, { Component } from 'react';
import './App.css';
import axios from "axios"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=2')
      .then(response => {
        const { data: { data } } = response
        this.setState({data: data})
      })
      .catch(err => {
        this.setState({data: ["error retrieving names"]})
      })
  }

  handleClick = () => {
    this.setState({
      message: "Clicked"
    })
  }

  render() {
    return(
      <div>{this.state.data && this.state.data.map( (person, index) =>
        <div key={index}>{person.first_name}</div>
      )}
      </div>
    )
  }
}

export default App
