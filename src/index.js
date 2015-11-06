import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';

const pair = ['Trainspotting', '28 Days Later'];

const routes = <Route component={App}>
                <Route path="/results" component={Results} />
                <Route path="/" component={Voting} />
              </Route>;

// mount voting component to #div
// the component takes a pair of entries as props
// it is a pure component and doesn't care where the data comes from
// supply the 'Router' component from the react-router package as the root
// component of out application
// we plug in the route table into it by passing it in as a child component
ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);
