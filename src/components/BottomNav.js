import React from 'react';
import '../styles/BottomNav.css';
import Button from './Button';

class BottomNav extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          myProp: false
        }
        
    }
    
    showName = (e) => {
        this.props.showContents(e);
    }
    
    
    render() {
        
        return(
            <div className='bottom-nav pa4 br3 shadow-5'>
            {
                this.props.categories.map(e => (
                    <div key={e}>
                        <Button 
                            name={e} 
                            show={this.showName}
                        />
                    </div>

                ))
            }
            </div>
        )    
    }
}












export default BottomNav;