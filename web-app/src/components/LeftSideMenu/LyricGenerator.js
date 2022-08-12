import { useState } from "react";
import { useForm } from 'react-form-state-manager';
import { queryGPT3 } from "../../ai/openai";
import { PanelWrapper, PanelContentOutputWrapper } from "./LeftSideMenuStyles";


function LyricGenerator(props) {

  const [outputs, setOutputs] = useState("");

  const form = useForm({
    values: {
      title: "",
      genre: "",
      theme: "",
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const prompt =
      (form.values.title.trim().length !== 0 ? `Title:\n${form.values.title}\n` : "") +
      (form.values.genre.trim().length !== 0 ? `Genre:\n${form.values.genre}\n` : "") +
      (form.values.theme.trim().length !== 0 ? `Theme:\n${form.values.theme}\n` : "") +
      `Write the lyrics:\n`;
    const completion = await queryGPT3({ prompt: prompt });
    console.log(completion);
    setOutputs(completion);
  };

  return (
    <PanelWrapper>
      <form onSubmit={handleSubmit}>
        <input {...form.text('title')} required placeholder="Title" /><br />
        <input {...form.text('genre')} placeholder="Genre" /><br />
        <input {...form.text('theme')} placeholder="Theme" /><br />
        <label>Completions courtesy OpenAI DaVinci API</label><br />
        <button type="submit" disabled={!form.changed()}>Generate!</button>
      </form>
      {outputs.length > 0 ? (
        <PanelContentOutputWrapper>
          Suggested lyrics for {form.values.title()}:<br />{outputs}
        </PanelContentOutputWrapper>
      ) : null}
    </PanelWrapper>
  )
}

export default LyricGenerator