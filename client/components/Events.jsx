import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

// import { checkAuth } from '../actions/auth'

export class Events extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <div className="columns is-desktop is-vcentered">
          <div className="column" id="main-page">
            <Link to="/add">
              <button className="button is-success">Add New Event</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Events;
