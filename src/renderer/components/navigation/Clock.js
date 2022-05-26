import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    const datetime = new Date();
    this.setState({
      date: datetime.toLocaleDateString(),
      time: datetime.toLocaleTimeString(),
    });
  }

  render() {
    return (
      <a className="clock" href="/#">
        {this.state.date}
        <br />
        {this.state.time}
      </a>
    );
  }
}
