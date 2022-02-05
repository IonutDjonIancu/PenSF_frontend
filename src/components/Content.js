import React from 'react';
import ContentStory from './ContentStory'
import '../styles/Content.css';

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