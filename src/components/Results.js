import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import Winner from './Winner';
import Tally from './Tally';

export const Results = React.createClass({
  mixins: [PureRenderMixin],

  getPair() {
    return this.props.pair || [];
  },
  render() {
    return this.props.winner ?
      <Winner ref="winner" winner={this.props.winner} /> :
      <div className="results">
        <div className="tally">
          {this.getPair().map(entry =>
            <Tally entry={entry} tally={this.props.tally} />
          )}
        </div>
        <div className="management">
          <button ref="next"
                  className="next"
                  onClick={this.props.next}>
            Next
          </button>
        </div>
      </div>;
  }
});

function mapStateToProps(state) {
  return {
    pari: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner')
  }
}

export const ResultsContainer = connect(mapStateToProps)(Results);
