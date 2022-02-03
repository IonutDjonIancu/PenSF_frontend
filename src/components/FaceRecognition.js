import React from 'react';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/PulseLoader";
import PuffLoader from "react-spinners/PuffLoader";
import d1 from '../media/d1.png';
import d2 from '../media/d2.png';
import d3 from '../media/d3.png';
import d4 from '../media/d4.png';
import d5 from '../media/d5.png';
import d6 from '../media/d6.png';
import d7 from '../media/d7.png';
import d8 from '../media/d8.png';
import d9 from '../media/d9.png';
import d10 from '../media/d10.png';
import d11 from '../media/d11.png';
import d12 from '../media/d12.png';
import d13 from '../media/d13.png';
import d14 from '../media/d14.png';
import d15 from '../media/d15.png';
import d16 from '../media/d16.png';
import d17 from '../media/d17.png';
import d18 from '../media/d18.png';
import d19 from '../media/d19.png';
import d20 from '../media/d20.png';
import '../styles/FaceRecognition.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #36D7B7;
`;

const GetImageByRoll = (roll) => {
    switch (roll) {
        case 2:
            return d2;
        case 3:
            return d3;
        case 4:
            return d4;
        case 5:
            return d5;
        case 6:
            return d6;
        case 7:
            return d7;
        case 8:
            return d8;
        case 9:
            return d9;
        case 10:
            return d10;
        case 11:
            return d11;
        case 12:
            return d12;
        case 13:
            return d13;
        case 14:
            return d14;
        case 15:
            return d15;
        case 16:
            return d16;
        case 17:
            return d17;
        case 18:
            return d18;
        case 19:
            return d19;
        case 20:
            return d20;
        default:
            return d1;
    }
}


const returnD20s = (rolls, total) => {

    let remainder = total % 20;

    switch (rolls) {
        case 6:
            return(
                <div>
                     <img // 6 d 20
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={remainder} 
                        alt='' 
                        src={GetImageByRoll(remainder)} 
                    />
                </div>
            );
        case 5:
            return(
                <div>
                     <img // 5 d 20
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={remainder} 
                        alt='' 
                        src={GetImageByRoll(remainder)} 
                    />
                </div>
            );
        case 4:
            return(
                <div>
                     <img // 4 d 20
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={remainder} 
                        alt='' 
                        src={GetImageByRoll(remainder)} 
                    />
                </div>
            );
        case 3:
            return(
                <div>
                    <img // 3 d 20
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={remainder} 
                        alt='' 
                        src={GetImageByRoll(remainder)} 
                    />
                </div>
            );
        case 2:
            return(
                <div>
                    <img // 2 d 20
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={remainder} 
                        alt='' 
                        src={GetImageByRoll(remainder)} 
                    />
                </div>
            );
        case 1:
            return(
                <div>
                    <img // 1 d 20
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={20} 
                        alt='' 
                        src={d20} 
                    />
                    <img
                        className='w-20 image-small br3 ma1' // this could also be a component
                        title={remainder} 
                        alt='' 
                        src={GetImageByRoll(remainder)} 
                    />
                </div>
            );
        default:
            return(
                <img
                    className='w-20 image-small br3 ma1' // this could also be a component
                    title={remainder} 
                    alt='' 
                    src={GetImageByRoll(remainder)} 
                />
            );
    }
}

const FaceRecognition = ({rolls , total, isLoading}) => {

    if (isLoading === true) {
        return(
            <div className="sweet-loading ma4">
                <ClipLoader color={'#FFFFFF'} loading={isLoading} css={override} size={15} margin={2} />
            </div>
        );
    } else {
        if (total === 0) {
            return(
                <div className="sweet-loading ma3">
                    <PuffLoader color={'#FFFFFF'} speedMultiplier={0.5} loading={true} css={override} size={60}/>
                 </div>
            )
        } else {
            return returnD20s(rolls, total);
        }
    }
}


export default FaceRecognition;