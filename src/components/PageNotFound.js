import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom";

export default class PageNotFound extends Component {
  render() {
    return (
      <Fragment>
        <h1>Page Not Found</h1>
        <Link to="/">Back to Home</Link>
      </Fragment>
    )
  }
}
