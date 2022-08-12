import React, { useState, useRef } from "react";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import { queryGPT3 } from "../../ai/openai";
import {
  LyricGeneratorWrapper,
  LyricGeneratorDisplayWrapper,
} from "./LyricGeneratorStyles";
class LyricGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
      pace: "",
      theme: "",
      title: "",
      completed: false,
      lyricDisplay: "",
    };
  }

  handleGenreChange = (event) => {
    this.setState({ genre: event.target.value });
  };
  handleThemeChange = (event) => {
    this.setState({ pace: event.target.value });
  };
  handlePaceChange = (event) => {
    this.setState({ theme: event.target.value });
  };
  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const prompt =
      (this.state.title.trim().length != 0
        ? `Title: \n${this.state.title}\n`
        : "") +
      (this.state.genre.trim().length != 0
        ? `Genre: ${this.state.genre}\n`
        : "") +
      (this.state.theme.trim().length != 0
        ? `Theme: ${this.state.theme}\n`
        : "") +
      `Lyrics:\n`;
    const completion = await queryGPT3({ prompt: prompt });
    console.log(completion);
    alert(completion);
    this.setState({ lyricDisplay: completion });
    this.setState({ genre: "", theme: "", pace: "", title: "" });
    this.setState({ completed: true });
  };

  render() {
    console.log(this.state);
    return (
      <LyricGeneratorWrapper>
        <div>
          <input
            id="genre_input"
            onChange={this.handleGenreChange}
            placeholder="Genre"
          />
        </div>
        <div>
          <input
            id="pace_input"
            onChange={this.handlePaceChange}
            placeholder="Pace (bpm)"
          />
        </div>
        <div>
          <input
            id="theme_input"
            onChange={this.handleThemeChange}
            placeholder="Theme"
          />
        </div>
        <div>
          <input
            id="title_input"
            onChange={this.handleTitleChange}
            placeholder="Title"
          />
        </div>
        <button type="submit" value="Submit" onClick={this.handleSubmit}>
          Submit
        </button>
        {this.state.completed ? (
          <LyricGeneratorDisplayWrapper>
            {" "}
            Your lyrics are: {this.state.lyricDisplay}{" "}
          </LyricGeneratorDisplayWrapper>
        ) : null}
      </LyricGeneratorWrapper>
    );
  }
}
//Need place to display the title or titles
export default LyricGenerator;
