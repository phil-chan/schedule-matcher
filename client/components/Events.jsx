import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { recieveEvent } from "../actions"
// import { checkAuth } from '../actions/auth'

import { apiGetAttendeesByUserId, apiGetEventById } from "../apis/index";

export class Events extends React.Component {
  componentDidMount() {
    //get all event ids relating to user via attendees table
    //then get all events matching that id
    apiGetAttendeesByUserId(this.props.auth.user.id).then((data) =>
      //data is an array of attendees objects
      //NEED TO STORE DATA INTO GLOBAL STATE
      data.map(attendees =>
        apiGetEventById(attendees.event_id)
          .then(userEvents => this.props.dispatch(recieveEvent(userEvents[0])))
      ))
  }

  render() {
    return (
      <>
        <Link to="/add">
          <button className="button is-success" id="add-event-btn">Add New Event</button>
        </Link>

        <div className="columns is-centered">
          <div className="buttons are-large">
            {this.props.events.userEvents.map(event =>
              <div className="column">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">{event.event_name}</p>
                    <a href="#" class="card-header-icon" aria-label="more options">
                      <span class="icon">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      {event.event_description}
                      <br />
                      <time>Date: {(new Date(event.date_time)).toLocaleString()}</time>
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">Join</a>
                    <a href="#" class="card-footer-item">Edit</a>
                    <a href="#" class="card-footer-item">Delete</a>
                  </footer>
                </div>
              </div>
            )
            }
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ auth, events }) => {
  return {
    auth,
    events
  };
};

export default connect(mapStateToProps)(Events);
