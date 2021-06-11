import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import imgD from '../images/cup.png'

const Container = styled.div`
    font-family: inter;
    font-style: normal;
    width: 527px;
    height: 627px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 65px 80px 101px;
`;

const Box = styled.div`
   width: 155px;
   height: 155px;
   background: #FFF8F5;
   transform: matrix(1,0,0,-1,0,0);
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 60%;
   margin-bottom: 20px;
`;

const Image = styled.img`
   width: 72px;
   height: 72px;
`;

const Heading = styled.div`
    font-weight: bold;
    line-height: 34px;
    text-align: center;
    color: #000;
    font-size: 28px;
`;

const Subtitle = styled.div`
    font-weight: normal;
    line-height: 28px;
    text-align: center;
    color: #4A4A4A;
    font-size: 16px;
`;

const Button = styled(Link)`
   background: #FF5C00;
   box-shadow: 2px 8px 30px rgba(230,83,0,0.18);
   border: 1px solid rgba(255,255, 255,0.4);
   white-space: nowrap;
   outline: none;
   border-radius: 8px;
   width: 253px;
   height: 70px;
   cursor: pointer;
   text-decoration: none;
   transition: 0.3s;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #fff;
   font-size: 20px;
   font-weight: 600;
   line-height: 32px;
   margin-top: 67px;
   b

   &:hover {
       transform: translateY(-2px);
   }
`;

const Thankyou = ({path}) => {
    return (
        <>
         <Container>
             <Box>
               <Image src={imgD} />
            </Box>
            <Heading>Thank you for sharing your story!</Heading> 
            <Subtitle>Lorem ipsum delor sit amet, consectetur adipiscing elit sed do eiusmod tempor incident ut labore et dolore magna aliqua</Subtitle>
            <Button to={path} 
             >
              close
            </Button>
        </Container>   
        </>
    )
}

export default Thankyou
