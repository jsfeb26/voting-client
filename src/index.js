import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

// mount voting component to #div
// the component takes a pair of entries as props
// it is a pure component and doesn't care where the data comes from
ReactDOM.render(
  <Voting pair={pair} hasVoted="Trainspotting" />,
  document.getElementById('app')
);
