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
    
    
    
    render() {
        
        return(
            <div className='bottom-nav pa4 br3 shadow-5'>
            {
                this.props.categories.map(e => (<Button name={e} />))
            }
            </div>
        )    
    }
}












export default BottomNav;