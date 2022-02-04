import React from 'react';
import '../styles/ImageLinkForm.css';


const ImageLinkForm = ({ onSaveClick, onRollClick, total }) => {

    return(
        <div>
            <div className='ma2 centermass'>
                <div className='form centermass pa4 br3 shadow-5 container'>
                    <button 
                        className='grow f6 link ph3 pv2 dib white bg-black br2'
                        onClick={onSaveClick}
                    >
                        Save
                    </button>
                    <p 
                        className='ma2 f5 centermass text-roll br2'>
                        {total}    
                    </p>
                    <button
                        className='grow f6 link ph3 pv2 dib bg-moon-gray br2'
                        onClick={onRollClick}
                    >
                        Roll
                    </button>
                </div>
            </div>
        </div>
    );
}


export default ImageLinkForm;