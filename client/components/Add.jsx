import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { addEvent } from "../apis/index";

export class Add extends React.Component {
  state = {
    event_name: "",
    event_description: "",
    date_time: "",
  };

  componentDidMount() {}

  handleSubmit = (e) => {
    let newEvent = this.state;
    let dd = new Date(this.state.date_time); //convert to milliseconds
    newEvent.date_time = dd;
    addEvent(newEvent);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <form className="form box" onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Event Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="e.g Dinner"
                name="event_name"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="e.g. with friends"
                name="event_description"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Date</label>
            <div className="control">
              <input
                type="date"
                name="date_time"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <button className="button is-info" onClick={() => this.handleSubmit}>
            Submit
          </button>
        </form>
      </>
    );
  }
}
export default Add;
