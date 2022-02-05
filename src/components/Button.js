import React from 'react';

class Button extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          myProp: false
        }
    }

    render() {
        return(
            <div className='ma2'>
                <button 
                    className='f6 grow br3 ph3 pv2 mb2 dib black bg-moon-gray'
                >
                {this.props.name}
                </button>
            </div>
        )    
    }
}




export default Button;