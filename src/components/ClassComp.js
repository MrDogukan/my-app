import React from "react";

export default class ClassComp extends React.Component {
  constructor(props){
    super(props);
    this.state = {student:"Yusuf"};
  }
  render() {
    return (
      <div>
        <h1>Welcome to ReactJS from CC</h1>
        <p>Age: {this.props.old}</p>
        <p>Age: {this.props.car}</p>
        <p>Student: {this.state.student}</p>
      </div>
    );
  }
}
