import React from 'react';

const Rank = ({ name, rank, roll }) => {

    return(
        <div>
            <div className='white f3'>
                {`${name ? name : 'User'}, rank: ${rank}`}
            </div>
            <div className='black f4'>
                {`Highest roll: ${roll}`}
            </div>
        </div>
    );
}


export default Rank;