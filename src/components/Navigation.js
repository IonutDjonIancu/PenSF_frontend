import React from 'react';
import { 
    registerPage,
    signinPage,
} from '../helpers/Utils.js';
import '../styles/Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn, onSignOut }) => {

    if (isSignedIn) {
        return(
            <nav style={
                {
                    display: 'flex', 
                    justifyContent: 'flex-end'
                }
            }>
                <p 
                    className='f3 link dim black underline pa3 pointer'
                    onClick={() => onSignOut()}>
                    Sign out
                </p>
            </nav>
        );
    } else {
        return(
            <nav className='nav-container'>
                <div className='f3 dim white pa3'>
                    {'PEN SF'}
                </div>
                <div className='flex-container'>
                    <p 
                        className='f3 link dim black underline pa3 pointer'
                        onClick={() => onRouteChange(signinPage)}>
                        Sign in
                    </p>
                    <p 
                        className='f3 link dim black underline pa3 pointer'
                        onClick={() => onRouteChange(registerPage)}>
                        Register
                    </p>
                </div>
            </nav>
        );
    }
}


export default Navigation;