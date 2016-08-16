import React, { Component } from 'react'
import { render } from 'react-dom'
import DatePicker from 'material-ui/DatePicker';

class DueDate extends Component {
  render () {
    return (
      <DatePicker hintText="DueDate" mode="landscape" />
    )
  }
}
export default DueDate
