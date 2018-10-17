# react-strap-grid
Bootstrap grid system for React

## install
```npm
npm i react-strap-grid --save
npm install bootstrap --save
```
Import "bootstrap-grid.min.css" in the src/index.js file:
```javascript
import 'bootstrap/dist/css/bootstrap-grid.min.css'
```
## Example

```javascript
import React from 'react';
import Container from 'react-strap-grid/container';
import Row from 'react-strap-grid/row';
import Col from 'react-strap-grid/col';



export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>.col</Col>
        </Row>
        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
        <Row>
          <Col xs="3">.col-3</Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Col xs="3">.col-3</Col>
        </Row>
        <Row>
          <Col xs="6">.col-6</Col>
          <Col xs="6">.col-6</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        </Row>
      </Container>
    );
  }
}
```
