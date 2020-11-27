import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

export class Add extends React.Component {
  componentDidMount() { }

  handleSubmit = (e) => {

  };

  render() {
    return (
      <>
        <form className="form box" onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Event Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="e.g Dinner" />
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="e.g. with friends"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Date</label>
            <div className="control">
              <input type="date" />
            </div>
          </div>
        </form>
      </>
    );
  }
}
export default Add;
