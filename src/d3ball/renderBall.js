import React, { Component } from "react"
import Ball from "./ball"

class RenderBall extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ballLeft: true
    }
  }

  ballJump = () =>
    this.setState({
      ballLeft: !this.state.ballLeft
    })

  render() {
    const { ballLeft } = this.state

    return(
      <div>
        <svg style={{ width: "300px", height: "300px" }} onClick={this.ballJump}>
          <Ball x={ballLeft ? 15: 250} />
        </svg>
      </div>
    )
  }
}

export default RenderBall
