import React, { Component } from 'react'
import * as App from "./App"

const AppOne = App.App
const AppTwo = App.AppTwo

export default class MyApp extends Component {
  render() {
    return (
      <div>
        <AppOne />
        <AppTwo />
      </div>
    )
  }

}
