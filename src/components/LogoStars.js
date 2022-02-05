import React from 'react';
import '../styles/Logo.css';
import Tilt from 'react-tilt';
import Starmap from '../media/starMap.gif';
import Chars from '../media/chars.gif';
import Story from '../media/story.jpg';

class LogoStars  extends React.Component {

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
                <div 
                    className='tilt-container'
                    onClick={() => this.props.showContents(this.props.name)}
                >
                    <h5 
                        className='pointer'
                    >
                        {this.props.name}
                    </h5>
                </div>
            );
        } else {
            switch(this.props.name) {
                case 'starmap':
                    return(
                        <img 
                            alt='starMap' 
                            src={Starmap}
                            style={{ 
                                height: '100%', 
                                width: '100%', 
                                borderRadius: '3px'
                            }}
                        />
                    );
                case 'chars': 
                    return(
                        <img 
                            alt='starMap' 
                            src={Chars}
                            style={{ 
                                height: '100%', 
                                width: '100%', 
                                borderRadius: '3px'
                            }} 
                        />
                    );
                default:
                    return(
                        <img 
                            alt='starMap' 
                            src={Story}
                            style={{ 
                                height: '100%', 
                                width: '100%', 
                                borderRadius: '3px'
                            }} 
                        />
                    );
            }
        }
    }

    conditionalRendering = () => {
        return(
            <div 
                className='ma4 mt0 tilt-container'
                onClick={() => this.props.showContents(this.props.name)}
            >
                <Tilt 
                    className="Tilt br2 shadow-2" 
                    options={{ max : 25 }} 
                    style={{ height: 150, width: 150 }} 
                >
                    <div 
                        onMouseEnter={() => this.setHover(true)}
                        onMouseLeave={() => this.setHover(false)}
                        style={{height:'100%'}}
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


export default LogoStars;