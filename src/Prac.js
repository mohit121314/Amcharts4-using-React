import React, { Component } from "react";

export default class Prac extends Component {
  state = {
    text: "",
    convert: "num"
  };

  handleClick = inputString => {
    var length = 0;
    while (inputString[length] !== undefined) {
      length++;
    }
    this.setState({
      length: length
    });
    return length;
  };

  handleClickNew = type => {
    let sentence = this.state.text;
    let withNoDigits;
    if (type === "num") {
      withNoDigits = sentence.replace(/\D/g, "");
    } else {
      withNoDigits = sentence.replace(/[0-9]/g, "");
    }
    this.handleClick(this.state.text);
    this.setState({
      withNoDigits: withNoDigits
    });
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleselect = e => {
    this.setState({
      convert: e.target.value
    })
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="enter a string"
          onChange={this.handleChange}
          value={this.state.text}
        ></input>
        <input
          type="button"
          onClick={() => this.handleClickNew(this.state.convert)}
          value="Operations"
        ></input>
        <select
          name="convertor"
          value={this.state.convert}
          onChange={this.handleselect}
        >
          <option value="num">number</option>
          <option value="stri">string</option>
        </select>
        <textarea
          id="w"
          rows="4"
          cols="50"
          value={this.state.withNoDigits}
          placeholder="Filtered String"
        ></textarea>
        <textarea
          id="w1"
          rows="4"
          cols="50"
          value={this.state.length}
          placeholder="length of the string"
        ></textarea>
      </div>
    );
  }
}
