import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

// import { checkAuth } from '../actions/auth'

export class Events extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <div className="columns is-centered">
          <div className="buttons are-large">
            <div className="column">
              <Link to="/add">
                <button className="button is-success">Add New Event</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Events;
