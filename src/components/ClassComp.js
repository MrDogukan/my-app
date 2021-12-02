import React from "react";

export default class ClassComp extends React.Component {
  constructor(props){
    super(props);
    this.state = {student:"Yusuf", counter : 0};
  }

  incCounter = ()=> {
    this.setState({counter: this.state.counter +1});
  }

   decCounter = ()=> {
    this.setState({counter: this.state.counter -1});
  }
  render() {
    return (
      <div>
        <h1>Welcome to ReactJS from CC</h1>
        <p>Age: {this.props.old}</p>
        <p>Age: {this.props.car}</p>
        <p>Student: {this.state.student}</p>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.incCounter} >Increase</button>
        <button onClick={this.decCounter} >Decrease</button>
      </div>
    );
  }
}
