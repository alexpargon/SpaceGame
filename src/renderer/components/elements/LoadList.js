import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';

class LoadList extends Component {
  render() {
    return this.props.saves.map((item, i) => {
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{item.name}</td>
          <td>{new Date(item.date).toLocaleString()}</td>
          <td>
            <Button
              id={`l${i}`}
              onClick={this.props.fload}
              style={{
                textTransform: 'uppercase',
                marginRight: '1.2em',
              }}
            >
              Load
            </Button>
            <Button
              id={`d${i}`}
              onClick={this.props.fdel}
              style={{ textTransform: 'uppercase', marginLeft: '1.2em' }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  }
}

export default LoadList;
