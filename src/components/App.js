import React from 'react';
import {List, Map} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

// this component does nothing except render its child components
// and it expected to be given in as the 'children' prop
// react-router dos this for us
// it plugs in the components defined for whatever the current route
// happens to be
export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {
      pair: pair,
      tally: tally
    });
  }
});
