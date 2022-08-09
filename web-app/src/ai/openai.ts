import assert from "assert";
import { randomInt } from "crypto";
import { openai_api_key } from "secrets/secrets";
import { genreOptions } from "./genreOptions";

export { genreOptions } from "./genreOptions";

export const GPT3_DEFAULT_PARAMS = {
  model: "text-davinci-002",
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  prompt: null,
}

/**
 * 
 * @param params self-explanatory
 * @returns the generated text
 */
export async function queryGPT3(params: {
  model: string,
  temperature: number,
  max_tokens: number,
  top_p: number,
  frequency_penalty: number,
  presence_penalty: number,
  prompt: string
}): Promise<string> {
  const params_ = { ...GPT3_DEFAULT_PARAMS, ...params };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${openai_api_key}`
    },
    body: JSON.stringify(params_)
  };
  const response = await fetch('https://api.openai.com/v1/completions', requestOptions);
  const data = await response.json();
  return data.choices[0].text;
}

export const MUSENET_DEFAULT_PARAMS = {
  genre: "chopin",
  piano: true,
  strings: true,
  winds: true,
  drums: true,
  harp: true,
  guitar: true,
  bass: true,
  fname: Math.random().toString(36).substring(7),
  number_of_tokens_to_generate: 512,
  temperature: 1.2,
  truncation: 0,
};

/**
 * 
 * @param params Self-explanatory
 * @returns The filename of the generated audio file
 */
export async function queryMuseNet(params: {
  genre: string,
  piano: boolean,
  strings: boolean,
  winds: boolean,
  drums: boolean,
  harp: boolean,
  guitar: boolean,
  bass: boolean,
  fname: string,
  number_of_tokens_to_generate: number,
  temperature: number,
  truncation: number, 
}): Promise<string> {
  const params_ = { ...MUSENET_DEFAULT_PARAMS, ...params };
  assert(params_.genre in genreOptions, "Invalid genre");
  assert(params_.fname.length > 0, "Invalid fname");
  assert(params_.temperature >= 0 && params.temperature <= 1, "Invalid temperature");
  
  // query localhost:8000 with the given parameters
  const response = await fetch(`http://localhost:8000/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params_)
  });
  const data = await response.json();
  return data.filename;
}