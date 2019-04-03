import React from 'react';
import Card from "react-bootstrap/Card"

const App = (props) => {

  const handleClick = (idx) => {
    props.handleXClick(idx)
  }

  const handlePress = (e) => {
    props.getData()
  }
    return(
      <div>
      <button onClick={ e => handlePress(e)}>RESET</button>
        {props.data && props.data.map( (person, index) => {
        return (
          // <div>{person.first_name}</div>
          <div key={index}>
            <Card style={{ width: '18rem' }}>
              <div style={{ marginLeft: "80%", marginTop: 5, fontSize: 30}} onClick={ e => handleClick(index)}>X</div>
              <Card.Body>
                <img alt={"avatar"}src={person.avatar}/>
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

export default App
