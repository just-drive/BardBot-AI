// this is really bad practice, but it's a quick and dirty way to get the secrets
const openai_api_key = "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";

/*const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: openai_api_key,
});
export const openai = new OpenAIApi(configuration);
*/

export async function davinciCompletion(prompt, cb) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + String(openai_api_key)
    },
    body: JSON.stringify({
      "model": "text-davinci-002",
      "prompt": prompt,
      "temperature": 0.7,
      "max_tokens": 256,
      "top_p": 1,
      "frequency_penalty": 0,
      "presence_penalty": 0
    })
  };
  fetch('https://api.openai.com/v1/completions', requestOptions)
    .then(response => cb(response.json().choices[0].text))
  }