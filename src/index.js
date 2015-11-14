import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer';
import { setState } from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import App from './components/App';
import { VotingContainer } from './components/Voting';
import { ResultsContainer } from './components/Results';

// using the io function to connect ot the socket.io sdrver that's running
// on the same hostname on port 8090
const socket = io(`${location.protocol}//${location.hostname}:8090`);

socket.on('state', state => {
  store.dispatch(setState(state));
});

const createStoreWithMiddleWare = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);

const store = createStoreWithMiddleWare(reducer);

const routes = <Route component={App}>
                <Route path="/" component={VotingContainer} />
                <Route path="/results" component={ResultsContainer} />
              </Route>;

// mount voting component to #div
// the component takes a pair of entries as props
// it is a pure component and doesn't care where the data comes from
// supply the 'Router' component from the react-router package as the root
// component of out application
// we plug in the route table into it by passing it in as a child component
ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
