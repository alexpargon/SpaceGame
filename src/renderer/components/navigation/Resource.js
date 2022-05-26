import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Resource = ({ name, hc, data }) => {
  return (
    <Nav.Link href="#" onClick={hc}>
      <div className="icondata">
        <img src={require(`../../assets/img/${name}.png`)} alt="" />
        <div className="data">
          {name}
          <br />
          {data[0]}/{data[1]}
        </div>
      </div>
    </Nav.Link>
  );
};

export default Resource;
