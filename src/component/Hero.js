import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components/macro';


const HeroSection = styled.section`
  color: #000;
  background: #fff;
  width: 100%;
  max-width: 1440px;
  padding-top: 75px;
  padding-bottom: 6px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 181px;
`;

export const HeroWrapper = styled.div`
z-index: 1;
width: 100%;
max-width: 1136px;
margin-right: auto;
margin-left: auto;
font-family: Inter;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 630px;

   @media screen and (max-width: 768px) {
       grid-template-columns: 1fr;
       padding-left: 32px;
       padding-right: 41px;
       
      
    }

`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 550px;
  height: 100%;
   display: flex;
   flex-direction: row;
   padding-right: 15px;
`;

const HeroSlider = styled.div`
   width: 100%;
   max-width: 400px;
   height: 625px;
   display: flex;
   flex-direction: column;
   align-items: left;
   justify-content: center;
`;

const HeroImage = styled.img`
  margin-bottom: 32px;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const HeroContent = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  font-family: Inter;
  font-style: normal;

  h1 {
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 14px;
    color: #474747;
    line-height: 29px;
    letter-spacing: 0.02em;
  }
`;

const Group = styled.div`
    display: flex;
    flex-direction: row;
    width: 170px;
    margin-bottom: 30px;
  

    p {
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.05em;
    color: #535353;
     margin-right: 21px; 
    flex: none;
    order: 0;
    flex-grow: 0;

  }
`;



const Button = styled(Link)`
   background: #E5E5E5;
   white-space: nowrap;
   outline: none;
   border-radius: 4px;
   width: 76px;
   height: 16px;
   cursor: pointer;
   text-decoration: none;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #0D019A;
   font-size: 13px;
   font-weight: 500;
   line-height: 16px;
   letter-spacing: 0.02em;

   &:hover {
       transform: translateY(-2px);
   }
`;

const HeroNote = styled.div`
   text-align: left;
   color: #474747;
   font-size: 16px;
   font-style: normal;
   font-weight: normal;
   line-height: 24px;
   letter-spacing: 0.07em;
   width: 100%;
   max-width: 300px;
   
`;




const Hero = ({slides}) => {
    return (
        <>
          <HeroSection >
            <HeroWrapper>
              {slides.map((slide, index) =>{
                return (
                    <HeroSlide key={index}>
                        { (
                            <HeroSlider>
                                <HeroImage src={slide.images} alt={slide.alt}/>
                                <HeroContent>
                                    <h1>{slide.name}</h1>
                                    <Group>
                                        <p>{slide.location}</p>
                                        <Button to={slide.path} primary='true'
                                        >
                                            {slide.label}
                                        </Button>
                                    </Group>
                                    <HeroNote>{slide.discription}</HeroNote>
                                </HeroContent> 
                            </HeroSlider>
                        )}
                    </HeroSlide>
                ) 
              })} 
           </HeroWrapper>  
          </HeroSection>
       </>
    )
}

export default Hero
