import React from 'react';
import '../styles/ImageLinkForm.css';


const ImageLinkForm = ({ onSaveClick, onRollClick, total }) => {

    return(
        <div>
            <div className='ma2 centermass'>
                <div className='form centermass pa4 br3 shadow-5'>
                    <button
                        className='w-25 grow f4 link ph3 pv2 dib white dark-blue'
                        onClick={onRollClick}>
                        Roll
                    </button>
                    <p 
                        className='f5 w-50 centermass text-roll'>
                        {total}    
                    </p>
                    <button 
                        className='w-25 grow f4 link ph3 pv2 dib white dark-blue'
                        onClick={onSaveClick}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}


export default ImageLinkForm;