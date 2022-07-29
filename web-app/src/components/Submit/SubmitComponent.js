import axios, { post } from "axios";
import React, { useState, useRef } from "react";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import { Div3 } from "./SubmitComponentStyles";
// This is the component that handles midi2wav and wave2midi
class SubmitComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // files: [],
      // title: "",
      // description: "",
      // showSubmit: false,
    };
  }

  // handleSongNameChange = (event) => {
  //   this.setState({
  //     title: event.target.value,
  //   });
  // };
  // handleDescriptionChange = (event) => {
  //   this.setState({
  //     description: event.target.value,
  //   });
  // };

  // handleFileChange = (event) => {
  //   let files = event.target.files;
  //   this.setState(
  //     {
  //       files: files[0],
  //     },
  //     () => {
  //       console.log(this.state.files);
  //     }
  //   );
  //   console.log(files[0]);
  // };

  // onFormSubmit = (event) => {
  //   alert("All data entered");
  //   event.preventDefault();
  // };

  render() {
    console.log(this.props);
    return (
      <Div3>
        <form onSubmit={this.props.onFormSubmit}>
          <h1>Upload Your Tunes </h1>
          {/* This is for song name */}
          <input
            type="text"
            name="title"
            placeholder="Your song name"
            onChange={this.props.handleSongNameChange}
          />
          {/* This is for description */}
          <input
            type="text"
            name="description"
            placeholder="Your song description"
            onChange={this.props.handleDescriptionChange}
          />
          {/* This is for file  */}
          {/* {console.log(this.props)} */}
          <input
            type="file"
            name="file"
            accept="audio/*,.wav,.midi"
            onChange={(e) => this.props.handleFileChange(e)}
          />
          {/* This is submit button */}
          <button
            type="submit"
            value="Submit"
            onClick={this.props.onButtonClick}
          >
            Submit
          </button>
        </form>
      </Div3>
    );
  }
}

export default SubmitComponent;
