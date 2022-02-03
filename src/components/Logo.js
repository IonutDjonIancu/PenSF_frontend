import React from 'react';
import '../styles/Logo.css';
import Robo from '../media/robo.png';
import Tilt from 'react-tilt';

class Logo  extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          isHovered: false
        }
    }

    setHover = (param) => {
        this.setState({
            isHovered: param
        });
    }

    textSwap = (isHovered) => {
        if (isHovered === true) {
            return(
                <p 
                    style={{ 
                        color: 'white',
                    }} 
                >
                    {'some text'}
                </p>
            );
        } else {
            return(
                <img 
                    alt='roboLogo' 
                    src={Robo}
                    style={{ 
                        height: '100%', 
                        width: '100%', 
                        borderRadius: '3px',
                    }} 
                />
            );
        }
    }

    conditionalRendering = () => {

        return(
            <div className='ma4 mt0'>
                <Tilt 
                    className="Tilt br3 shadow-2" 
                    options={{ max : 25 }} 
                    style={{ height: 150, width: 150 }}
                >
                    <div 
                        className="Tilt-inner"
                        onMouseEnter={() => this.setHover(true)}
                        onMouseLeave={() => this.setHover(false)}
                        style={{ height:'100%' }}
                    >
                        {this.textSwap(this.state.isHovered)}
                    </div>
                </Tilt>
            </div>
        );
    }

    render() {
        return(
            <div>
                {
                  this.conditionalRendering()
                }  
            </div>
        ) 
    }
}


export default Logo;