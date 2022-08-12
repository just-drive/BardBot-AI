import { useState } from "react";
import { useForm } from 'react-form-state-manager';
import { queryGPT3 } from "../../ai/openai";
import { PanelWrapper, PanelContentOutputWrapper } from "./LeftSideMenuStyles";


function TitleGenerator(props) {

  const [outputs, setOutputs] = useState("");

  const form = useForm({
    values: {
      genre: "",
      theme: "",
      lyrics: "",
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const prompt =
      (form.values.genre.trim().length !== 0 ? `Genre:\n${form.values.genre}\n` : "") +
      (form.values.theme.trim().length !== 0 ? `Theme:\n${form.values.theme}\n` : "") +
      (form.values.lyrics.trim().length !== 0 ? `Lyrics:\n${form.values.lyrics}\n` : "") +
      `Suggest some titles for this song:\n`;
    const completion = await queryGPT3({ prompt: prompt });
    console.log(completion);
    setOutputs(completion);
  };

  return (
    <PanelWrapper>
      <form onSubmit={handleSubmit}>
        <input {...form.text('genre')} placeholder="Genre" /><br />
        <input {...form.text('theme')} placeholder="Theme" /><br />
        <textarea
          {...form.textarea('lyrics')}
          required
          placeholder="Lyrics">
        </textarea><br />
        <label>Completions courtesy OpenAI DaVinci API</label><br />
        <button type="submit">Generate!</button>
      </form>
      {outputs.length > 0 ? (
        <PanelContentOutputWrapper>
          Suggested titles for this song: {outputs}
        </PanelContentOutputWrapper>
      ) : null}
    </PanelWrapper>
  )
}

export default TitleGenerator;