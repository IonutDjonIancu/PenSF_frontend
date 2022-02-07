import React from 'react';
import ContentStory from './ContentStory';
import ContentChars from './ContentChars';
import '../styles/Content.css';
import Starmap from '../media/starmap.png';

class Content extends React.Component {

    constructor() {
        super();
  
        this.state = {
            myProp: ''
        }
    }

    contentConditionalRendering = (display) => {

        if(display === 'story') {
            return(
                <div>
                    <ContentStory />
                </div>
            );
        } else if(display === 'chars') {
            return(
                <div>
                    <ContentChars />
                </div>
            );
        } else if(display === 'starmap') {
            return(
                <div>
                    <img
                        className='br3' 
                        alt='starmap' 
                        src={Starmap} 
                    />
                </div>
            );
        } else {
            return(
                <div>
                    {'<- select category'}
                </div>
            );
        }

    }

    render() {
        return(
            <div className='white content-container'>
                {
                    this.contentConditionalRendering(this.props.display)
                }
            </div>
        );
    }
}







export default Content;