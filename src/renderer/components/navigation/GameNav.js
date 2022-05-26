import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Resources from './Resources';
import Clock from './Clock';

export default class GameNav extends Component {
  render() {
    return (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={require('../../assets/img/6341082sm.png')}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Brand href="/">
          <h3 className="gametitle">SpaceGame</h3>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Resources />
        </Nav>
        <Nav className="ml-auto">
          <Clock />
        </Nav>
      </Navbar>
    );
  }
}
