import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';
import Vote from './Vote';

export default React.createClass({
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
