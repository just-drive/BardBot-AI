// this is really bad practice, but it's a quick and dirty way to get the secrets
const openai_api_key = "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";

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: openai_api_key,
});
export const openai = new OpenAIApi(configuration);