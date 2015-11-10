import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/App';
import { VotingContainer } from './components/Voting';
import { ResultsContainer } from './components/Results';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: {Sunshine: 2}
    }
  }
});

const routes = <Route component={App}>
                <Route path="/results" component={ResultsContainer} />
                <Route path="/" component={VotingContainer} />
              </Route>;

// mount voting component to #div
// the component takes a pair of entries as props
// it is a pure component and doesn't care where the data comes from
// supply the 'Router' component from the react-router package as the root
// component of out application
// we plug in the route table into it by passing it in as a child component
ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>,
  </Provider>
  document.getElementById('app')
);
