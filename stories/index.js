import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import Card from "react-bootstrap/Card"
import 'bootstrap/dist/css/bootstrap.css';
import RecipeReviewCard from "../src/mDC"
import CustomTheme from "../src/victoryExample"
import MyVictoryLine from "../src/victoryLine"

// ReactDOM.render(
//   <Button label="Hello World!" />,
//   document.getElementById('app')
// );

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));

storiesOf('Card', module)
  .add('with details', () => (
    <Card style={{ width: '18rem' }}>
      <div style={{ marginLeft: "80%", marginTop: 5, fontSize: 30}}>X</div>
      <Card.Body>
        <img alt={"avatar"}src="https://vignette.wikia.nocookie.net/athfwiki/images/e/eb/Ignignokt.png/revision/latest?cb=20080316001408.jpg"/>
        <Card.Title>Ignignokt</Card.Title>
      </Card.Body>
    </Card>
  ))
  .add('default', () => (
    <Card>
    <p>Hello world.</p>
    </Card>
  ))

storiesOf('RecipeReviewCard', module)
  .add('default', () => (
    <RecipeReviewCard />
  ))

storiesOf('CustomTheme', module)
  .add('default', () => (
    <CustomTheme />
  ))

storiesOf('MyVictoryLine', module)
  .add('default', () => (
    <MyVictoryLine />
  ))
