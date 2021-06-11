import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md'

const Container = styled.div`
   width: 527px;
   height: 829px;
   background: #fff;
   display: flex;
   flex-direction: column;
   padding: 32px;
   font-family: Inter;
`;

const Heading = styled.div`
   
   font-size: 28px;
   line-height: 33.89px;
   font-weight: bold;
   color: #000;
   text-align: center;
   margin-bottom: 43px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const InnerWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Label = styled.label`
     font-size: 14px;
     font-weight: normal;
     line-height: 16px;
     color: #676767;
`;


const Input = styled.input`
     width: 463px;
     height: 62px;
     background: #FEFEFE;
     border: 1px solid #EAEAEA;
     border-radius: 8px;
     margin-bottom: 24px;
     margin-top: 13px;
`;


const Inputt = styled.input`
     width: 221px;
     height: 62px;
     background: rgba(254, 254, 254, 0.3);
     border: 1px solid #EAEAEA;
     border-radius: 8px;
     box-sizing: border-box;
     margin-bottom: 24px;
     margin-top: 13px;
`;


const Input2 = styled.input`
     width: 463px;
     height: 111px;
     background: rgba(254, 254, 254, 0.3);
     border: 1px solid #EAEAEA;
     border-radius: 8px;
     margin-bottom: 24px;
     margin-top: 13px;
`;


const DownWrapper = styled.form`
     margin-bottom: 24px;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
`;

const SubHeading = styled.div`
    font-size: 14px;
     font-weight: normal;
     line-height: 16px;
     color: #676767;

`;

const RadioGroup = styled.div`
     display: flex;
     flex-direction: row;
`;

const Input3 = styled.div`
   width: 14px;
   height: 14px;
   border: 1px solid #676767;
   box-sizing: border-box;
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
   margin-left: 210px;
   margin-top: 50px;

   &:hover {
       transform: translateY(-2px);
   }
`;

const CloseModalButton = styled(MdClose)`
   cursor: pointer;
   position: absolute;
   top: 20px;
   right: 20px;
   width: 32px;
   height: 32px;
   padding: 0;
   z-index: 10;
`;


const Share = ({selectedOPtion,showModal,setShowModal}) => {

   const [name, setname] = useState('')
   const [user, setUser] = useState({
       firstname: "",
        lastname: "",
        username: "",
        city: ""
    })

    const onValueChange = (e) => {
         setname ({
             selectedOPtion: e.target.value
         })
         setUser ({
            ...user, [e.target.name]: e.target.value
         })
    } 

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(selectedOPtion)
    }

    return (
        <>
        {showModal ? (
            <Container showModal={showModal}>
                <Heading>Share your amazing story!</Heading> 
                <Form className='form' onSubmit={formSubmit}>
                                <Wrapper className='form-inputs' >
                                    <Label>Upload your Picture:
                                    <Input type='file' name='username' className='form-input' placeholder='Choose image' />
                                    </Label>                        
                                </Wrapper>
                                <InnerWrapper className='form-inputs' >
                                    <Wrapper>
                                        <Label>First Name:
                                        <Inputt 
                                            type='text'  
                                            name='firstname' 
                                            className='form-input' 
                                            placeholder='first name' 
                                            value={user.firstname}
                                            />
                                        </Label>
                                    </Wrapper>
                                    <Wrapper>
                                        <Label>Last Name
                                        <Inputt 
                                            type='text' 
                                            name='lastname' 
                                            className='form-input' 
                                            placeholder='last name' 
                                            value={user.lastname}
                                            />
                                        </Label>
                                    </Wrapper>
                                </InnerWrapper>
                                <Wrapper className='form-inputs' >
                                    <Label>Share your story
                                    <Input2 
                                        type='text' 
                                        name='username' 
                                        className='form-input' 
                                        placeholder='' 
                                        value={user.username}
                                        />
                                    </Label>
                                </Wrapper>
                                <DownWrapper>
                                    <SubHeading>What did you interact with Vasiti as?</SubHeading>
                                    <RadioGroup className='radio'>
                                            <Label>
                                                <Input3
                                                    type='radio' 
                                                    value='Customer' 
                                                    checked={selectedOPtion === "Customer"} 
                                                    onChange={onValueChange} 
                                                />
                                                Customer
                                            </Label>
                                            <Label>
                                                <Input3
                                                    type='radio' 
                                                    value='Vendor' 
                                                    checked={selectedOPtion === "Vendor"} 
                                                    onChange={onValueChange} 
                                                />
                                                Vendor
                                            </Label>
                                    </RadioGroup> 
                                </DownWrapper>
                                <Wrapper className='form-inputs' >
                                    <Label>City or Higher institution (for Students):
                                    <Input 
                                        type='text' 
                                        name='city' 
                                        className='form-input' 
                                        />
                                    </Label>
                                </Wrapper>
                                <Button to='./Thankyou' 
                                        >
                                        Share your story
                                </Button>
                </Form>
                <CloseModalButton arial-label='Close modal' onClick={() => setShowModal
                (prev => !prev)} />
            </Container> 
        
        ): null}    
      </>
    )
}

export default Share
