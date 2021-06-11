import React from 'react';
import InfoSection from '../component/InfoSection';
import Info from '../component/Info';
import {homeObjOne,homeObjTwo} from './Data';


const Home = () => {
    return (
        <>
         <Info {...homeObjOne} /> 
         <InfoSection {...homeObjTwo} />
        </>
    )
}

export default Home
