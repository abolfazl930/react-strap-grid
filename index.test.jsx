
import React from 'react';
import renderer from 'react-test-renderer';

import Col from './col';
import Row from './row';
import Container from './container';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Container className="test3">
        <Row className="test2">
          <Col className="test1" xs="3" md="5">
            Hello
          </Col>
        </Row>
        <Row>
          <Col>
            Hello
          </Col>
        </Row>
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});