import React, { Component } from 'react';
import App from "./App"
import axios from "axios"

class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {data: null}
  }

  componentDidMount() {
    this.fetchData()
  }

  handleXClick = (idx) => {
    const currentState = [...this.state.data]
    const newState = currentState.filter( (item, index) => {
      if (index !== idx) {
        return item
      }
    })
    this.setState({data: newState})
  }

  fetchData = () => {
    axios.get('https://reqres.in/api/users?page=2')
      .then(response => {
        const { data: { data } } = response
        this.setState({ data: data })
      })
      .catch(err => {
        this.setState({ data: ["error retrieving names"] })
      })
  }

  setData = (data) => {
    this.setState({ data: data})
  }

  render() {
    return (
      <div>
        <App
          data={this.state.data}
          getData={this.fetchData}
          setData={this.setData}
          handleXClick={this.handleXClick}/>
      </div>
    )
  }
}

export default AppContainer
