import axios, { post } from "axios";
import React, { useState, useRef } from "react";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import { query } from "../../ai/openai";

class TitleGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
      pace: "",
      theme: "",
      lyrics: "",
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
  handleLyricsChange = (event) => {
    this.setState(
      {
        lyrics: event.target.value,
      },
      () => {
        console.log(this.state.lyrics);
      }
    );
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const prompt =
      (this.state.genre.trim().length != 0 ? `Genre: ${this.state.genre}\n` : '') +
      (this.state.theme.trim().length != 0 ? `Theme: ${this.state.theme}\n` : '') +
      (this.state.lyrics.trim().length != 0 ? `Lyrics: \n${this.state.lyrics}\n` : '') +
      `Title:`;
    const completion = await query({prompt: prompt});
    const title = completion.split("\n")[0];
    console.log(completion, title);
    alert(title);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <input id="genre_input" onChange={this.handleGenreChange} 
            placeholder="Genre" />
        </div>
        <div>
          <input id="pace_input" onChange={this.handlePaceChange} 
            placeholder="Pace (bpm)" />
        </div>
        <div>
          <input id="theme_input" onChange={this.handleThemeChange}
            placeholder="Theme" />
        </div>
        <div>
          <textarea id="lyrics_textarea" onChange={this.handleLyricsChange}
           placeholder="Lyrics" />
        </div>
        <button type="submit" value="Submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
//Need place to display the title or titles
export default TitleGenerator;
