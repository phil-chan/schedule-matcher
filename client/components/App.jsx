import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import { checkAuth } from '../actions/auth'

import Events from "./Events";
import Add from "./Add";

export class App extends React.Component {
  componentDidMount() {
    const confirmSuccess = () => { };
    this.props.dispatch(checkAuth(confirmSuccess));
  }

  render() {
    const { auth } = this.props;
    return (
      <>
        <Router>
          <div className="container has-text-centered">
            <div className="hero is-small is-primary">
              <div className="hero-body has-text-centered">
                <Link to='/' className="">
                  <h1 className="title is-3">Schedule Matcher</h1>
                </Link>
                <Route path="/" component={Nav} />
              </div>
            </div>

            {!auth.isAuthenticated ? (
              <>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </>
            ) : (
                <>
                  <Route exact path="/" component={Events} />
                  <Route exact path="/add" component={Add} />
                </>
              )}
          </div>
        </Router>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(App);
