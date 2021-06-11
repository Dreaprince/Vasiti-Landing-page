import React from 'react'
import { Button } from './Button';
import imgA from '../images/line.png'
import {
    InfoSec, 
    Container,
    InfoRow, 
    InfoColumn,
    InfoColumnA,
    TextWrapper,
     Heading,
    Subtitle,
    DownTitle, 
    ImgWrapper,
    Img,
    ImgA
} from './InfoSection.element';

const InfoSection = ({ lightBg,primary,imgHeight,imgWidth,sec,textWidth,show,imgStart,headingSize,lightTextDesc,label,path,description,headLine,lightText,marginButtom,img, alt, start
}) => {
    return (
        <>
         <InfoSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper textWidth={textWidth}>
                            <Heading headingSize={headingSize} marginButtom={marginButtom} lightText={lightText}>{headLine}</Heading>
                            <Button to={path} primary={primary} 
                               show={show} sec={sec}
                                    >
                                    {label}
                            </Button>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <DownTitle>SHARE YOUR OWN STORY</DownTitle>
                            <ImgA src={imgA} />
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumnA>
                        <ImgWrapper start={start}>
                            <Img 
                                imgWidth={imgWidth} 
                                imgHeight={imgHeight}
                                src={img} 
                                alt={alt} 
                            />
                        </ImgWrapper>
                    </InfoColumnA>
                </InfoRow>
            </Container>
         </InfoSec>  
        </>
    )
}

export default InfoSection;


