import React, { Component } from 'react'
import { render } from 'react-dom';
import TextField from 'material-ui/TextField'

class InputText extends Component {
  render() {
    return (
      <div>
        <TextField hintText="Subject" />
        <TextField hintText="Name" />
      </div>
    )
  }
}
export default InputText
