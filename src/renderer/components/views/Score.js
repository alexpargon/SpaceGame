import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import ScoreList from '../elements/ScoreList';

import bg from '../../assets/img/background.jpg';

class Setup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: props.recent,
      lastGameConfig: '',
    };
    this.clickRecent = this.clickRecent.bind(this);
    this.clickHighest = this.clickHighest.bind(this);
    this.clickGlobal = this.clickGlobal.bind(this);
  }

  clickRecent() {
    this.setState((state, props) => {
      console.log(props);
      return { scores: props.recent };
    });
  }

  clickHighest() {
    this.setState((state, props) => {
      console.log(props.highest);
      return { scores: props.highest };
    });
  }

  clickGlobal() {
    this.setState((state, props) => {
      console.log(props.global);
      return { scores: props.global };
    });
  }

  render() {
    const { scores } = this.state;
    return (
      <Container
        flex
        style={{ backgroundImage: `url(${bg}`, backgroundSize: 'cover' }}
      >
        <Row>
          <Col>
            <Card className="score-card text-center" bg="dark" text="white">
              <Card.Header>Score</Card.Header>
              <Card.Body>
                <ul className="score-list">
                  <ScoreList scores={scores} />
                </ul>
              </Card.Body>
              <Card.Footer>
                <Nav fill variant="pills" className="tabs-footer">
                  <Nav.Item>
                    <Nav.Link onClick={this.clickRecent}>Recent</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link onClick={this.clickHighest}>Highest</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link onClick={this.clickGlobal}>Tab Global</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Setup;
