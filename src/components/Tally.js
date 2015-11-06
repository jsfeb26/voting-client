import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],

  getVotes(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  },
  render() {
    return <div key={this.props.entry} className="entry">
      <h1>{this.props.entry}</h1>
      <div className="voteCount">
        {this.getVotes(this.props.entry)}
      </div>
    </div>
  }
});
