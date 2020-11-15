import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import bulmaCalendar from '~bulma-calendar/dist/js/bulma-calendar.min.js';

// import { checkAuth } from '../actions/auth'

// Initialize all input of type date
const calendars = bulmaCalendar.attach('[type="date"]', options);

// To access to bulmaCalendar instance of an element
var element = document.querySelector('#my-element');
if (element) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  element.bulmaCalendar.on('select', function (datepicker) {
    console.log(datepicker.data.value());
  });
}

export class Add extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <>
        <h1>This is the add component</h1>
        <div class="field">
          <label class="label">Event Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="e.g Dinner" />
          </div>
        </div>

        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <input class="input" type="email" placeholder="e.g. with friends" />
          </div>
        </div>

        <input type="date" />

      </>

    )
  }
}
export default Add