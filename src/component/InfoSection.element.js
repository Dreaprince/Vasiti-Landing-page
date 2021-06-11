import styled from 'styled-components';

export const InfoSec = styled.div`
color: #fff;
width: 100%;
max-width: 1440px;
margin: 0 auto;
background: ${({ lightBg }) => (lightBg ? '#fff' : '#222')};
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1440px;
padding-right: 126px;
padding-left: 130px;


@media screen and (max-width: 768px) {
    padding: 0;
}
`;

export const InfoRow = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: ${({imgStart }) => (imgStart ? 'row-reverse' : 'row')
};
`;

export const InfoColumn = styled.div`
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width: 40%;
flex-basis: 40%;
margin-top: 100px;

@media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}
`;

export const InfoColumnA = styled.div`
padding-right: 15px;
padding-left: 15px;
flex: 1;
margin-right: 0px;
width: 60%;
max-width: 60%;
flex-basis: 60%;
margin-top: 30px;

@media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}
`;

export const TextWrapper = styled.div`
max-width: ${({textWidth}) => (textWidth ? '586px' : '417px')};;



@media screen and (max-width: 768px) {
    padding-bottom: 10px;
}
`;

export const Heading = styled.h1`
margin-bottom: ${({marginButtom}) => (marginButtom ? '24px' : '0px')};
font-size: ${({headingSize}) => (headingSize ? '48px' : '32px')};
line-height: 60px;
font-style: normal;
color: ${({lightText}) => (lightText ? '#000' : '#fff')};
`;

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 55px;
margin-top: 32px;
font-size: 18px;
line-height: 24px;
color: ${({lightTextDesc}) => (lightTextDesc ? '#494949' : '#fff')};
`;

export const DownTitle = styled.div`
      font-size: 16px;
       font-weight: 500;
       
`;

export const ImgA = styled.img`
   width: 297px;
    height: 12px;
    object-fit: cover;
`;

export const ImgWrapper = styled.div`
max-width: 617px;
`;

export const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
width: ${({imgWigth}) => (imgWigth ? '536px' : '617px')};
height: ${({imgHeight}) => (imgHeight ? '568px' : '572px')};
object-fit: cover;
`;
