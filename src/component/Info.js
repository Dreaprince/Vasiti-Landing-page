import React from 'react'
import {
    InfoSec, 
    Container,
    InfoRow, 
    InfoColumn,
    InfoColumnA,
    TextWrapper,
     Heading,
    Subtitle, 
    ImgWrapper,
    Img
} from './Info.element';

const Info = ({ lightBg,imgHeight,imgWidth,textWidth,imgStart,headingSize,lightTextDesc,description,headLine,lightText,marginButtom,img, alt, start
}) => {
    return (
        <>
         <InfoSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper textWidth={textWidth}>
                            <Heading headingSize={headingSize} marginButtom={marginButtom} lightText={lightText}>{headLine}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
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

export default Info;


