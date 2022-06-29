import React from 'react';
import axios from 'axios';
import  { AiFillGithub } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import bbai from '../../images/smaller.png';
import SubmitComponent from '../Submit/SubmitComponent'

import { Button, Div1,Div2,MenuDiv } from './LeftSideMenuStyles';

function clickMe(){
    alert('You clickMe');
}

const uploadFiles = () => {
   
}

// const LeftSideMenu = () => (
//     <>
//         <MenuDiv>
//         <Div1>
//             <h1>Services Available</h1>
//             <h3>Utilities:</h3>                
//                 <div>
//                 <Button onClick={uploadFiles}>Clustering</Button>
//                 </div>                   
//                 <div>  
//                 <Button onClick={clickMe}>midi2wav</Button>
//                 </div>
//                 <div>      
//                 <Button onClick={clickMe}>wav2midi</Button>
//                 </div> 
                
//         </Div1>
//         <Div2>
//             <h1>Songwriter Tools:</h1>
//             <h3></h3>
//             <div>
//                 <Button onClick={clickMe}>Title Generator</Button>
//                 </div>    
//                 <div>  
//                 <Button onClick={clickMe}>Lyric Generator</Button>
//                 </div>
//                 <div>      
//                 <Button onClick={clickMe}>Motif Generator</Button>
//                 </div> 
//         </Div2>
//         </MenuDiv>

//     </>
    
    
// );

class LeftSideMenu extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            showComponent: false,
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }
    clickMe() {
        alert('You clickMe');
    }

    render() {
        return (
            <MenuDiv>
            <Div1>
                <h1>Services Available</h1>
                <h3>Utilities:</h3>                
                    <div>
                    <Button onClick={this.onButtonClick}>Clustering</Button>
                    {this.state.showComponent ? <SubmitComponent/> : null}
                    </div>

                    <div>  
                    <Button onClick={clickMe}>midi2wav</Button>
                    </div>
                    <div>      
                    <Button onClick={clickMe}>wav2midi</Button>
                    </div> 
                    
            </Div1>
            <Div2>
                <h1>Songwriter Tools:</h1>
                <h3></h3>
                <div>
                    <Button onClick={clickMe}>Title Generator</Button>
                    </div>    
                    <div>  
                    <Button onClick={clickMe}>Lyric Generator</Button>
                    </div>
                    <div>      
                    <Button onClick={clickMe}>Motif Generator</Button>
                    </div> 
            </Div2>
            </MenuDiv>
    
        
    

        );
    }

 
    
    
};


export default LeftSideMenu;