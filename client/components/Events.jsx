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
    const { auth } = this.props;
    return (
      <>
        <div className="columns is-centered">
          <div className="buttons are-large">
            <div className="column">
              <Link to="/add">
                <button className="button is-success" id="add-event-btn">Add New Event</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Events);
