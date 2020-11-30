import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { recieveEvent } from "../actions";
// import { checkAuth } from '../actions/auth'

import { apiGetAttendeesByUserId, apiGetEventById } from "../apis/index";

export class Events extends React.Component {
  componentDidMount() {
    apiGetAttendeesByUserId(this.props.auth.user.id).then((data) =>
      data.map((attendees) =>
        apiGetEventById(attendees.event_id).then((userEvents) =>
          this.props.dispatch(recieveEvent(userEvents[0]))
        )
      )
    );

    // apiGetAttendeesByUserId(this.props.auth.user.id).then((data) => {
    //   let x = data.map((attendees) =>
    //     apiGetEventById(attendees.event_id).then((userEvents) => userEvents)
    //   );
    // });
    // console.log(x);
    //   this.props.dispatch(recieveEvent(userEvents[0]))
  }

  render() {
    return (
      <>
        <Link to="/add">
          <button className="button is-success" id="add-event-btn">
            Add New Event
          </button>
        </Link>

        <div className="columns is-centered">
          <div className="buttons are-large">
            {this.props.events.userEvents.map((event, idx) => (
              <div className="column" key={idx}>
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">{event.event_name}</p>
                    <a
                      href="#"
                      className="card-header-icon"
                      aria-label="more options"
                    >
                      <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      {event.event_description}
                      <br />
                      <time>
                        Date: {new Date(event.date_time).toLocaleString()}
                      </time>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a href="#" className="card-footer-item">
                      Join
                    </a>
                    <a href="#" className="card-footer-item">
                      Edit
                    </a>
                    <a href="#" className="card-footer-item">
                      Delete
                    </a>
                  </footer>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ auth, events }) => {
  return {
    auth,
    events,
  };
};

export default connect(mapStateToProps)(Events);
