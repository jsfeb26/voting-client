import React from 'react';

// this component does nothing except render its child components
// and it expected to be given in as the 'children' prop
// react-router dos this for us
// it plugs in the components defined for whatever the current route
// happens to be
export default React.createClass({
  render: function() {
    return this.props.children;
  }
});
