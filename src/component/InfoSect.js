import React from 'react'
import imgA from '../images/line.png'
import {
    InfoSec, 
    Container,
    InfoRow, 
    InfoColumn,
    InfoColumn2,
    TextWrapper,
     Heading,
    Subtitle, 
    DownTitle,
    ImgWrapper,
    Img,
    ImgA,
    Button
} from './InfoSect.element';

const InfoSect = ({imgHeight,imgWidth,imgStart,headingSize,label,path,description,headLine,lightText,img, alt, start
}) => {
    return (
        <>
         <InfoSec >
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper >
                            <Heading headingSize={headingSize} lightText={lightText}>{headLine}</Heading>
                            <Button to={path}
                                    >
                                    {label}
                            </Button>
                            <Subtitle>{description}</Subtitle>
                            <DownTitle>SHARE YOUR OWN STORY</DownTitle>
                            <ImgA src={imgA} />
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn2>
                        <ImgWrapper start={start}>
                            <Img 
                                imgWidth={imgWidth} 
                                imgHeight={imgHeight}
                                src={img} 
                                alt={alt} 
                            />
                        </ImgWrapper>
                    </InfoColumn2>
                </InfoRow>
            </Container>
         </InfoSec>  
        </>
    )
}

export default InfoSect;
