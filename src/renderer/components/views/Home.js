import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import bg from '../../assets/img/background.jpg';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: [],
      lastGameConfig: '',
    };
  }

  render() {
    return (
      <Container
        flex
        style={{ backgroundImage: `url(${bg}`, backgroundSize: 'cover' }}
      >
        <Row>
          <Col>
            <Card className="home-card" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
