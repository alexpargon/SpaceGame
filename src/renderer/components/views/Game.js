import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Canvas from '../elements/Canvas';
import StarSystemDialog from '../elements/StarSystemDialog';

import starsdata from '../../assets/data/stars.json';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: [],
      lastGameConfig: '',
      showSystemDialog: false,
      starData: {},
      starsData: [],
    };
    this.startGame = this.startGame.bind(this);
    this.systemGenerator = this.systemGenerator.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleSystemClose = this.handleSystemClose.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.showSystemDialog !== nextState.showSystemDialog) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  startGame() {
    // Second generate star systems with generator and create planets for each star
    // First set data to default values for elements in screen
    this.setState((state) => {
      return {
        scores: [],
        lastGameConfig: '',
        showSystemDialog: false,
        starData: {},
        starsData: starsdata.map((data, i) => {
          return this.systemGenerator(data);
        }),
      };
    });
  }

  systemGenerator(star) {
    // Generate planets for star system based on Spectral class and metalicity
    // var BC =[{O3:-4.3},{G0:-0.10},{G5:-0.14},{K0:-0.24},{K5:-0.66},{M0:-1.21}]
    const BC = [
      { key: 'O', value: [6.6, 13.4] },
      { key: 'B', value: [1.8, 6.6] },
      { key: 'A', value: [1.4, 1.8] },
      { key: 'F', value: [1.15, 1.4] },
      { key: 'G', value: [0.96, 1.15] },
      { key: 'K', value: [0.7, 0.96] },
      { key: 'M', value: [0.2, 0.7] },
    ];
    const color = [
      { key: 'O', value: '#7b90ff' },
      { key: 'B', value: '#8a9fff' },
      { key: 'A', value: '#cad7ff' },
      { key: 'F', value: '#f8f7ff' },
      { key: 'G', value: '#fff4ea' },
      { key: 'K', value: '#ffd2a1' },
      { key: 'M', value: '#ff6633' },
    ];
    const classBC = BC.find((data) => data.key === star.class.charAt(0));
    const starRadius =
      Math.random() * 20 + (classBC.value[1] - classBC.value[0]) * 50;
    const starColor = color.find((data) => data.key === star.class.charAt(0));
    const rstar = star;
    rstar.color = starColor;
    rstar.radius = starRadius;

    const planetNum = Math.floor(Math.random() * 8);
    const planets = [];
    const planetnames = ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    const sun = {
      name: star.name,
      dist: 0,
      orbitalPeriod: 0,
      rad: starRadius,
      color: starColor.value,
      category: 'planets',
      description: 'star',
    };
    planets.push(sun);
    let distance = starRadius;
    console.log(
      distance,
      Math.random() * 1 * 10 + distance,
      classBC,
      starRadius
    );
    for (let index = 0; index < planetNum; index++) {
      const reducingfactor = ((index + 2) / planetNum) * 1.4;
      console.log(reducingfactor);
      distance = Math.random() * (index + 1) + distance + distance;
      planets.push({
        name: planetnames[index],
        dist: distance,
        orbitalPeriod: starRadius / (1 / reducingfactor),
        rad: (Math.random() * (index * 2)) / (1 / reducingfactor) + 10,
        color: '#ff5500',
        category: 'planets',
        description: 'planet',
      });
    }
    rstar.planets = planets;
    return rstar;
  }

  handleStarClick(data) {
    console.log('this is from the handler point of view', data);
    this.setState((state) => {
      return { starData: data, showSystemDialog: true };
    });
  }

  handleSystemClose(data) {
    this.setState((state) => {
      return { starData: {}, showSystemDialog: false };
    });
  }

  componentWillMount() {
    this.startGame();
  }

  render() {
    console.log(this.state.starData);
    return (
      <Container fluid className="game">
        <Row>
          {this.state.showSystemDialog ? (
            <StarSystemDialog
              data={this.state.starData}
              visible={this.state.showSystemDialog}
              handler={this.handleSystemClose}
              planets={this.state.starData.planets}
            />
          ) : (
            <></>
          )}
          <Canvas data={this.state.starsData} handler={this.handleStarClick} />
        </Row>
      </Container>
    );
  }
}

export default Game;
