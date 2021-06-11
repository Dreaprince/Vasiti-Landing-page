import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import banner from '../images/banner.png'

const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    background: #25201D;
    display: flex;
    flex-direction: row;
    position: relative;
 
    @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    
}

`;

const Wrapper = styled.div`
    width: 50%;
    max-width: 423px;
    margin-left: 220px;
    margin-right: 162px;
    /* position: relative; */

    @media screen and (max-width: 1000px) {
    margin: 0;
    }
`;


const Wrapper1 = styled.div`
   margin-top: 80px;
    width: 50%;
    max-width: 368px;

    @media screen and (max-width: 1000px) {
    margin: 0;
    }
`;

const Image = styled.img`
   position: absolute;
   top: -40px;
   width: 100%;
   max-width: 437px;
   height: 406px;
   object-fit: cover;

   @media screen and (max-width: 1000px) {
    top: 0;
    
    }
`;

const FooterSection = styled.div`
  display: flex;
  max-width: 368px;
  flex-direction: column;
  justify-content: space-between;
`;

const Heading = styled.div`
  font-family: Inter;
  font-size: 40px;
   font-style: normal;
   font-weight: 700;
   line-height: 40px;
   margin-bottom: 16px;
   color: #fff;

`;

const Subtitle = styled.div`
    font-family: Roboto;
  font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: 20px;
   margin-bottom: 32px;
   color: #fff;
 `;

 const FooterRow = styled.div`
   display: flex;
  flex-direction: row;
   width: 368px;
  height: 51px;
  background: rgba(255,255,255,0.2);
  border-radius: 6px;
  justify-content: space-between;
  padding-left: 16px;
 `; 

const Label = styled.label`
   display: flex;
   color: #fff;
   font-size: 14px;
   line-height: 16px;
   align-items: center;
   font-family: Roboto;
   
   
`;

const Button = styled(Link)`
   background: #fff;
   box-shadow: 1px 4px 8px rgba(239,88,3,0.2);
   white-space: nowrap;
   outline: none;
   border-radius: 4px;
   width: 119px;
   height: 42px;
   cursor: pointer;
   text-decoration: none;
   transition: 0.3s;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 39px;
   color: #000;
   font-size: 13px;
   margin-top: 4px;

   &:hover {
       transform: translateY(-2px);
   }
`;

const TopFooter = () => {
    return (
        <>
          <Container>
              <Wrapper>
                  <Image src={banner}/>
              </Wrapper>
              <Wrapper1>
                <FooterSection>
                    <Heading>Be a member of our community</Heading>
                    <Subtitle>we'd make sure you 're always first to know what's happenning on Vasiti-thus, the world.</Subtitle>
                    <FooterRow>
                        <Label>   
                            enter your email address   
                        </Label>
                        <Button to='/subscribe'>
                            SUBSCRIBE
                        </Button>
                    </FooterRow>
                </FooterSection>
              </Wrapper1>
          </Container>  
        </>
    )
}

export default TopFooter
