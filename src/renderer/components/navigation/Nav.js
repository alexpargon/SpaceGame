import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Navb from 'react-bootstrap/Nav';

class Nav extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          SpaceGame
        </Navbar.Brand>
        <Navb className="mr-auto">
          <Navb.Link as={Link} to="/setup">
            New Game
          </Navb.Link>
          <Navb.Link as={Link} to="/load">
            Load Game
          </Navb.Link>
          <Navb.Link as={Link} to="/score">
            High Scores
          </Navb.Link>
        </Navb>
      </Navbar>
    );
  }
}

export default Nav;
