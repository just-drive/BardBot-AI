// this is really bad practice, but it's a quick and dirty way to get the secrets
const openai_api_key = "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";

/*const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: openai_api_key,
});
export const openai = new OpenAIApi(configuration);
*/

const DEFAULT_PARAMS = {
  "model": "text-davinci-002",
  "temperature": 0.7,
  "max_tokens": 256,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0
}

export async function query(params = {}) {
  const params_ = { ...DEFAULT_PARAMS, ...params };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + String(openai_api_key)
    },
    body: JSON.stringify(params_)
  };
  const response = await fetch('https://api.openai.com/v1/completions', requestOptions);
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data.choices[0].text;
}