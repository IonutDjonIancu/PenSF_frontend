import React from 'react';
import '../styles/Logo.css';
import Tilt from 'react-tilt';
import StarMap from '../media/starMap.gif';

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
                <div className='tilt-container'>
                    <h5 className='pointer'>
                        {'Starmap'}
                    </h5>
                </div>
            );
        } else {
            return(
                <img 
                    alt='starMap' 
                    src={StarMap}
                    style={{ 
                        height: '100%', 
                        width: '100%', 
                        borderRadius: '3px'
                    }} 
                />
            );
        }
    }

    conditionalRendering = () => {
        return(
            <div className='ma4 mt0'>
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