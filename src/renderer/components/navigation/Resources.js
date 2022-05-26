import React, { Fragment } from 'react';

import Resource from './Resource';

const handleMClick = (event) => {
  alert('Materials tab pressed');
};
const handleEClick = (event) => {
  alert('Energy tab pressed');
};
const handleFClick = (event) => {
  alert('FleetCap tab pressed');
};
const handleRClick = (event) => {
  alert('Research tab pressed');
};
const handleSClick = (event) => {
  alert('Systems tab pressed');
};

const Resources = () => {
  return (
    <>
      <Resource name="Materials" hc={handleMClick} data={[1543, 2000]} />
      <Resource name="Energy" hc={handleEClick} data={[324, 1000]} />
      <Resource name="FleetCap" hc={handleFClick} data={[15, 20]} />
      <Resource name="Research" hc={handleRClick} data={[0, 3]} />
      <Resource name="Systems" hc={handleSClick} data={[6, 10]} />
    </>
  );
};

export default Resources;
