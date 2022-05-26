import React, { Component } from 'react';

class ScoreList extends Component {
  render() {
    return this.props.scores.map(function (item, i) {
      return (
        <li key={i}>
          {i + 1}º: {item}
        </li>
      );
    });
  }
}

export default ScoreList;
