import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';

export const Voting = React.createClass({
  // causes react to do a shallow compare to decide when to re-render components
  // this is a huge performance boost
  mixins: [PureRenderMixin],

  render: function() {
    return <div>
      {this.props.winner?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
});

// The role of the mapping function is to map the state from the Redux Store into an object of
// props. Those props will then be merged into the props of the component that's being connected
function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner')
  };
}

// connect takes a mapping function as an argument and
// returns another function that takes a React component class
// True to functional style, the connect function doesn't actually go and mutate the Voting
// component. Voting remains a pure, unconnected component. Instead, connect returns a connected
// version of Voting. That means our current code isn't really doing anything. We need to grab that
// return value, which we'll call VotingContainer
export const VotingContainer = connect(mapStateToProps)(Voting);

// The pure/dumb component is fully driven by the props it is given. It is the component equivalent
// of a pure function.

// The connected/smart component, on the other hand, wraps the pure version with some logic that
// will keep it in sync with the changing state of the Redux Store. That logic is provided by
// react-redux.
