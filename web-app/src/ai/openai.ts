import { openai_api_key } from "secrets/secrets";

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
  harp: false,
  guitar: false,
  bass: false,
  fname: "My-Song",
  number_of_tokens_to_generate: 128,
  temperature: 0.65,
  truncation: 0,
};

/**
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
  // accumulate the params
  const params_ = { ...MUSENET_DEFAULT_PARAMS, ...params };
  // query localhost:8000 with the given parameters
  const response = await fetch(`http://localhost:8000/`, {
    method: 'POST', mode: "cors",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(params_)
  });
  // return the filename of the generated audio file
  const data = await response.json();
  return data.filepath;
}