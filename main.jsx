import React  , { Component } from 'react';
import { render } from 'react-dom';
const data = 'testteest'
const items = [
  {
    id : 1 ,
    name : 'koy'
  },
  {
    id : 2 ,
    name : 'koy2',
  },
  {
    id : 3,
    name : 'koy3'
  }
];
class App extends Component {
  render() {
    return (
      <h1>hello world!<Koy/>
      {items.map((item)=>{
        return <div key={item.id}><p>{item.id} {item.name}</p></div>
      })}
      </h1>
    )
  }
}
class Koy extends Component {
  render(){
    return (<div>
    <h1>HELLOoo</h1>
    <Widget name={data}/>
    <Header/>
    </div>)
  }
}
class Widget extends Component {
  render() {
    return (<div>
              <h1>widget</h1>
              <p>{this.props.name}</p>
           </div>)
  }
}
class Header extends Component{
  constructor(){
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
      name : 'hola Nextzy' ,
      value : 0
    }
  }
  onClick() {
    this.setState({name : "yohooo" , value: this.state.value +1})
  }
  render() {
    return (
      <h1 onClick={this.onClick}>{this.state.name}{this.state.value}</h1>
    )
  }
}

render(<App /> ,  document.getElementById('app'))