import axios, { post } from "axios";
import React, { useState, useRef } from "react";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import { openai } from "../../secrets";

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
    alert("All data entered");
    event.preventDefault();

    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: 
        state.genre != "" ? `Genre: ${this.state.genre}\n` : "" +
        state.theme != "" ? `Theme: ${this.state.theme}\n` : '' +
        state.lyrics != "" ? `Lyrics: \n${this.state.lyrics}\n` : '' +
        `Title:`,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    console.log(response);

    const title = response.choices[0].text;
    alert(`Title: ${title}`);

  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <input id="genre_input" onChange={this.handleGenreChange} />
        </div>
        <div>
          <input id="pace_input" onChange={this.handlePaceChange} 
            placeholder="Enter a number (BPM) between 40 and 160" />
        </div>
        <div>
          <input id="theme_input" onChange={this.handleThemeChange} />
        </div>
        <div>
          <textarea id="lyrics_textarea" onChange={this.handleLyricsChange} />
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
