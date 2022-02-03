import React from 'react';

const Rank = ({ name, rank, roll }) => {

    return(
        <div>
            <div className='white f3'>
                {`${name ? name : 'User'}, your current rank is: ${rank}`}
            </div>
            <div className='black f4'>
                {`Your highest roll was: ${roll}`}
            </div>
        </div>
    );
}


export default Rank;