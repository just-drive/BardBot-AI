import { useState } from "react";
import { useForm } from 'react-form-state-manager';
import genreOptions from "ai/genreOptions";
import { MUSENET_DEFAULT_PARAMS, queryMuseNet } from "ai/openai";
import { PanelWrapper, PanelContentOutputWrapper } from "./LeftSideMenuStyles";


function MusicGenerator(props) {

  const [outputs, setOutputs] = useState("");

  const form = useForm({
    values: MUSENET_DEFAULT_PARAMS
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    const wavFilepath = await queryMuseNet({ ...form.values });
    setOutputs(wavFilepath);
  }

  return (
    <PanelWrapper>
      <form onSubmit={handleSubmit}>
        <select {...form.select('category', genreOptions)}>
          {genreOptions.map((genre, index) => (
            <option {...form.option(index)}>{genre}</option>
          ))}
        </select><br />
        <label>Piano:</label><input {...form.checkbox('piano')} /><br />
        <label>Strings:</label><input {...form.checkbox('strings')} /><br />
        <label>Winds:</label><input {...form.checkbox('winds')} /><br />
        <label>Drums:</label><input {...form.checkbox('drums')} /><br />
        <label>Harp:</label><input {...form.checkbox('harp')} /><br />
        <label>Guitar:</label><input {...form.checkbox('guitar')} /><br />
        <label>Bass:</label><input {...form.checkbox('bass')} /><br />
        <input
          {...form.text('fname')}
          placeholder="filename"
          required /><br />
        <input
          type="numeric"
          {...form.number('number_of_tokens_to_generate')}
          min="100" max="10000" step="4"
          placeholder="#tokens" /><br />
        <input
          type="numeric"
          {...form.number('temperature')}
          min="0" max="2" step="0.05"
          placeholder="temperature" /><br />
        <label>Music courtesy OpenAI MuseNet API</label><br />
        <button type="submit">Generate!</button>
      </form>
      {outputs.length > 0 ? (
        <PanelContentOutputWrapper>
          Suggested lyrics for {form.values.title}:<br />{outputs}
        </PanelContentOutputWrapper>
      ) : null}
    </PanelWrapper>
  )
}

export default MusicGenerator;