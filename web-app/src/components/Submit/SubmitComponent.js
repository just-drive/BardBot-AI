import axios, { post } from 'axios';
import React from 'react';

class SubmitComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image:''
        }
    }

    onChange(e)
    {
        let files = e.target.files;
        
        
    }

    render() {
        return (
            <div onSubmit={this.onFormSubmit}>
                <h1>Upload Your Tunes </h1>
                <input type="file" name="file" onChange={(e)=>this.onChange(e)}/>

            </div>
        )
    }

}

export default SubmitComponent;