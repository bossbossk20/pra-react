import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component {
  render () {
    return (
      <div>
        <div>
            <div>
                <div/>
                <div>
                  <div>
                    <Link to='/page1'>
                      <div>Page 1</div>
                    </Link>
                    <Link to='/page2'>
                      <div>Page 2</div>
                    </Link>
                    <Link to='/page3'>
                      <div>Page 3</div>
                    </Link>
                  </div>
                  {this.props.children}
                </div>
                <div/>
            </div>
        </div>
      </div>
    )
  }
}

export default App
