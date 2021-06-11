import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const InfoSec = styled.div`
color: #fff;
width: 100%;
max-width: 1440px;
margin: 0 auto;
background: #FFF8F5;
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1440px;
padding-left: 130px;

@media screen and (max-width: 768px) {
    padding: 0;
}
`;

export const InfoRow = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({imgStart }) => (imgStart ? 'row-reverse' : 'row')};

@media screen and (max-width: 768px) {
    flex-direction: row-reverse;
}
`;

export const InfoColumn = styled.div`
padding-right: 15px;
flex: 1;
height: 510px;
max-width: 40%;
flex-basis: 40%;

@media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    padding-left: 30px;
    padding-right: 20px;
}
`;

export const InfoColumn2 = styled.div`
padding-right: 15px;
flex: 1;
max-width: 60%;
flex-basis: 60%;

@media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    padding: 0;
}
`;

export const TextWrapper = styled.div`
max-width: 454px;
margin-top: 136px;


@media screen and (max-width: 768px) {
    padding-bottom: 10px;
}
`;

export const Heading = styled.h1`
margin-bottom: 8px;
font-size: ${({headingSize}) => (headingSize ? '48px' : '32px')};
line-height: 60px;
font-style: normal;
color: ${({lightText}) => (lightText ? '#000' : '#fff')};
`;

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 48px;
font-size: 18px;
line-height: 24px;
color: #242120;
`;

export const DownTitle = styled.div`
      font-size: 16px;
       font-weight: 500;
       color: #FF5C00;
       
`;

export const ImgA = styled.img`
   width: 297px;
    height: 12px;
    object-fit: cover;
`;

export const ImgWrapper = styled.div`
max-width: 652px;
margin-top: 98px;
margin-left: 70px;

@media screen and (max-width: 768px) {
    margin: 0;
}
`;

export const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
width: 652px;
height: 538px;
object-fit: cover;
`;

export const Button = styled(Link)`
   background: #fff;
   border: 1px solid rgba(255,92,0,0.4);
   white-space: nowrap;
   outline: none;
   border-radius: 4px;
   width: 95px;
   height: 30px;
   cursor: pointer;
   text-decoration: none;
   transition: 0.3s;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #ff5c00;
   font-size: 13px;
   margin-bottom: 24px;

   &:hover {
       transform: translateY(-2px);
   }
`;