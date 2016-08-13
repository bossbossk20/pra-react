// import React  , { Component } from 'react';
// import { render } from 'react-dom';
// import  './main.css';
// import AppBarExampleIcon from './Component/nav.jsx'
// import AppBar from 'material-ui/AppBar';
// const data = 'testteest';
// const items = [
//   {
//     id : 1 ,
//     name : 'koy'
//   },
//   {
//     id : 2 ,
//     name : 'koy2',
//   },
//   {
//     id : 3,
//     name : 'koy3'
//   }
// ];
//
// class App extends Component {
//   render() {
//     return (
//       <div>
//           <ul>
//             <li >index</li>
//             <li >about</li>
//           </ul>
//         <h1>hello world!<Koy/>
//         {items.map((item)=>{
//           return <div key={item.id}><p>{item.id} {item.name}</p></div>
//         })}
//         </h1>
//       </div>
//     )
//   }
// }
// class Koy extends Component {
//   render(){
//     return (<div>
//     <h1>HELLOoo</h1>
//     <Widget name={data}/>
//     <Header/>
//     </div>)
//   }
// }
// class Widget extends Component {
//   render() {
//     return (<div>
//               <h1>widget</h1>
//               <p>{this.props.name}</p>
//            </div>)
//   }
// }
// class Header extends Component{
//   constructor(){
//     super();
//     this.onClick = this.onClick.bind(this);
//     this.state = {
//       name : 'hola Nextzy' ,
//       value : 0
//     }
//   }
//   onClick() {
//     this.setState({name : "yohooo" , value: this.state.value +1})
//   }
//   render() {
//     return (
//       <h1 onClick={this.onClick}>{this.state.name}{this.state.value}</h1>
//     )
//   }
// }

// class App extends Component {
//   render () {
//     return (
//       <div>
//         <AppBar></AppBar>
//         koy
//       </div>
//     )
//   }
// }

import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './Component/nav.jsx';
import MyAppBar from './Component/AppBar.jsx';
const App = () => (
  <MuiThemeProvider>
    <div>
      <MyAppBar />
      <MyAwesomeReactComponent />
    </div>
  </MuiThemeProvider>
);

render(<App /> ,  document.getElementById('app'))
