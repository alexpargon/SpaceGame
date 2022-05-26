/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';

import Nav from './components/navigation/Nav';
import Home from './components/views/Home';
import Game from './components/views/Game';
import Load from './components/views/Load';
import Setup from './components/views/Setup';
import Score from './components/views/Score';

import GameNav from './components/navigation/GameNav';

class App extends Component {
  render() {
    const recent = [10200, 7890, 5467, 1234, 763, 324, 123, 78, 54, 22];
    const highest = [
      10250, 9954, 9210, 8952, 8884, 8701, 8321, 7451, 7002, 6548,
    ];
    const Global = [
      10500, 10500, 10500, 10500, 10500, 10500, 10500, 10500, 10500, 10500,
    ];
    const SavedGames = [
      { name: 'autosave1', date: Date.now() },
      { name: 'autosave2', date: Date.now() },
      { name: 'autosave3', date: Date.now() },
    ];
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Routes>
        <Route
          exact
          path="/"
          type=""
          element={
            <div className="NavContainer">
              <Nav type="" />
              <Home />
            </div>
          }
          redir={false}
        />

        <Route
          path="/game"
          type="game"
          element={
            <div className="gamenav">
              <GameNav />
              <Game />
            </div>
          }
          redir={false}
        />
        <Route
          path="/load"
          type=""
          element={
            <div className="NavContainer">
              <Nav type="" />
              <Load saves={SavedGames} />
            </div>
          }
          redir={false}
        />
        <Route
          path="/setup"
          type=""
          element={
            <div className="NavContainer">
              <Nav type="" />
              <Setup />
            </div>
          }
          redir={false}
        />
        <Route
          path="/Score"
          type=""
          element={
            <div className="NavContainer">
              <Nav type="" />
              <Score recent={recent} highest={highest} global={Global} />
            </div>
          }
          redir={false}
        />
      </Routes>
    );
  }
}

export default App;
