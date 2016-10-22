import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

import { Router, Route, browserHistory } from 'react-router'
import Page1 from './Page/Page1.jsx'
import Page2 from './Page/Page2.jsx'
import Page3 from './Page/Page3.jsx'
import ClassSchedule from './Page/ClassSchedule.jsx'
import Student from './Page/Student.jsx'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='page1' component={Page1} />
      <Route path='page2' component={Page2} />
      <Route path='page3' component={Page3} />
    </Route>
  </Router>,
  document.getElementById('app')
)
