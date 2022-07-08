import axios, { post } from "axios";
import React, { useState, useRef } from "react";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";

class MotifGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
      pace: "",
      theme: "",
      title: "",
    };
  }

  handleGenreChange = (event) => {
    this.setState(
      {
        genre: event.target.value,
      },
      () => {
        console.log(this.state.genre);
      }
    );
  };
  handleThemeChange = (event) => {
    this.setState(
      {
        pace: event.target.value,
      },
      () => {
        console.log(this.state.pace);
      }
    );
  };
  handlePaceChange = (event) => {
    this.setState(
      {
        theme: event.target.value,
      },
      () => {
        console.log(this.state.theme);
      }
    );
  };

  handleTitleChange = (event) => {
    this.setState(
      {
        title: event.target.value,
      },
      () => {
        console.log(this.state.t);
      }
    );
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <select id="opts" onChange={this.handleGenreChange}>
            <option value="Genre1">Genre1</option>
            <option value="Genre2">Genre2</option>
            <option value="Genre3">Genre3</option>
          </select>
        </div>
        <div>
          <select id="opts" onChange={this.handleGenreChange}>
            <option value="Pace1">Pace1</option>
            <option value="Pace2">Pace2</option>
            <option value="Pace3">Pace3</option>
          </select>
        </div>
        <div>
          <select id="opts" onChange={this.handleGenreChange}>
            <option value="Theme1">Theme1</option>
            <option value="Theme2">Theme2</option>
            <option value="Theme3">Theme3</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Your song title"
            onChange={this.handleTitleChange}
          />
        </div>
      </div>
    );
  }
}
//Need place to display the title or titles
export default MotifGenerator;
