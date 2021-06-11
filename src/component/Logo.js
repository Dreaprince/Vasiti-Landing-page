import React from 'react'
import styled from 'styled-components';
import imgA from '../images/blak.png'
import imgB from '../images/whit.png'


const LogoWrap = styled.div`
   display: flex;
   flex-direction: row;

   @media screen and (max-width: 768px) {
    padding-left: 10px;
}

   div {
      color: #242120;
      font-size: 30px;
   }

   span {
      color: #EE3C24;
      font-size: 20px;
   }
`;

const Log = styled.div`
  position: relative;
  padding-left: 10px;
   border-radius: 15px;
   width: 34.45px;
   height: 35px;
   background: linear-gradient(340deg, #ED3424 10.98%, #F4A81c 89.02%);
`;

const ImgA = styled.img`
   position: absolute;
   width: 11.8px;
   height: 28.62px;
`;

const ImgB = styled.img`
   position: absolute;
   width: 11.8px;
   height: 28.62px;
`;

const Logo = () => {
    return (
        <>
         <LogoWrap>
           <Log to="/">
              <ImgA src={imgA} />
              <ImgB src={imgB} />
            </Log>
              <div>
                 vasiti
                 <span>.com</span>
               </div>          
          </LogoWrap>   
        </>
    )
}

export default Logo
