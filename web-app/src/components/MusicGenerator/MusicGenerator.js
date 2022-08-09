import axios, { post } from "axios";
import React, { useState, useRef } from "react";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import { genreOptions } from "ai/genreOptions";
import { MUSENET_DEFAULT_PARAMS, queryMuseNet } from "ai/openai";

class MusicGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...MUSENET_DEFAULT_PARAMS
    };
  }

  handleGenreChange = (event) => {
    this.setState({ genre: event.target.value });
  };

  handleUsePianoChange = (event) => {
    this.setState({ piano: event.target.value === "on" ? true : false });
  };
  handleUseStringsChange = (event) => {
    this.setState({ strings: event.target.value === "on" ? true : false });
  };
  handleUseWindsChange = (event) => {
    this.setState({ winds: event.target.value === "on" ? true : false });
  };
  handleUseDrumsChange = (event) => {
    this.setState({ drums: event.target.value === "on" ? true : false });
  };
  handleUseHarpChange = (event) => {
    this.setState({ harp: event.target.value === "on" ? true : false });
  };
  handleUseGuitarChange = (event) => {
    this.setState({ guitar: event.target.value === "on" ? true : false });
  };
  handleUseBassChange = (event) => {
    this.setState({ bass: event.target.value === "on" ? true : false });
  };

  handleFilenameChange = (event) => {
    const fname = event.target.value;
    // replace illedgal chars with underscores
    const fname_clean = fname.replace(/[^a-zA-Z0-9]/g, "_");
    this.setState({ fname: fname_clean });
  };
  handleNumTokensChange = (event) => {
    this.setState({ number_of_tokens_to_generate: event.target.value });
  };
  handleTemperatureChange = (event) => {
    this.setState({ temperature: event.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const params = this.state;
    delete params.response_filename;
    const response_filename = await queryMuseNet({ ...params });
    this.setState({ response_filename });
    alert(response_filename);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <select
            id="genreOptions"
            value={this.state.genre}
            onChange={this.handleGenreChange}>
            {genreOptions.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>

        <div>
          <input
            type="checkbox"
            id="use_piano_input"
            onChange={this.handleUsePianoChange}
            checked={this.state.piano}
          />
          <label htmlFor="piano">Piano</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="use_strings_input"
            onChange={this.handleUseStringsChange}
            checked={this.state.strings}
          />
          <label htmlFor="strings">Strings</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="use_winds_input"
            onChange={this.handleUseWindsChange}
            checked={this.state.winds}
          />
          <label htmlFor="winds">Winds</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="use_drums_input"
            onChange={this.handleUseDrumsChange}
            checked={this.state.drums}
          />
          <label htmlFor="drums">Drums</label>
        </div>0
        <div>
          <input
            type="checkbox"
            id="use_harp_input"
            onChange={this.handleUseHarpChange}
            checked={this.state.harp}
          />
          <label htmlFor="harp">Harp</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="use_guitar_input"
            onChange={this.handleUseGuitarChange}
            checked={this.state.guitar}
          />
          <label htmlFor="guitar">Guitar</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="bass"
            onChange={this.handleUseBassChange}
            checked={this.state.bass}
          />
          <label htmlFor="bass">Bass</label>
        </div>

        <div>
          <input
            type="text"
            name="title"
            placeholder="Song title"
            onChange={this.handleFilenameChange}
          />
        </div>
        <div>
          <input
            type="range"
            min="100"
            max="10000"
            name="number_of_tokens_to_generate"
            value={this.state.number_of_tokens_to_generate}
            onChange={this.handleNumTokensChange}
          />
          <label htmlFor="number_of_tokens_to_generate">
            Number of tokens to generate: {this.state.number_of_tokens_to_generate}
          </label>
        </div>
        <div>
          <input
            type="range"
            min="0"
            max="2"
            step="0.01"
            name="temperature"
            value={this.state.temperature}
            onChange={this.handleTemperatureChange}
          />
          <label htmlFor="temperature">Temperature: {this.state.temperature}</label>
        </div>
        <button type="submit" value="Submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
//Need place to display the title or titles
export default MusicGenerator;
