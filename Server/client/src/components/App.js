import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
  //The instant this component has been rendered onto the screen, go attempt to fetch current user
  //ComponentDidMount occurs at the same time as componentWIllMount
  componentDidMount() {
    //call action creator, which is available as props because of the conenct function
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  };
}
//first argument is map state to props, we aren't using it, so putting null
//second argument is all of the action creators we want to wire up
export default connect(null, actions)(App);
