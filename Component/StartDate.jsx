import React, { Component } from 'react'
import { render } from 'react-dom'
import DatePicker from 'material-ui/DatePicker';

class StartDate extends Component {
  render () {
    return (
      <DatePicker hintText="StartDate" mode="landscape" hintText="en-US locale"/>
    )
  }
}
export default StartDate
