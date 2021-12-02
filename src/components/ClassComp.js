import React from "react";

export default class ClassComp extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to ReactJS from CC</h1>
        <p>Age: {this.props.old}</p>
      </div>
    );
  }
}
