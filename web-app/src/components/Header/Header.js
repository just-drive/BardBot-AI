import { Link } from 'react-router-dom';
import React from 'react';
import  { AiFillGithub } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import bbai from '../../images/smaller.png';

import { Nav, NavLink, Bars, NavMenu} from './HeaderStyles';

const Header = () => (
    <>
        <Nav>
            <NavLink to="/">
                <img src={bbai} alt="Logo" />
                
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        .about()
                    </NavLink>
                    <NavLink to="/" activeStyle>
                        .contactUs()
                    </NavLink>
                    <NavLink to="/" activeStyle>
                        .sourceCode()
                    </NavLink>
                </NavMenu>
            
        </Nav>
    
    </>
    
    
);

export default Header;