import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import { checkAuth } from '../actions/auth'

export class Events extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <>
        <h1>This is the events component</h1>
      </>

    )
  }
}

export default Events