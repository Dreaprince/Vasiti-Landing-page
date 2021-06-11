import React, {useState} from 'react'
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import { menuData, menuDataTwo } from '../data/MenuData';
import Logo from './Logo';
import {FaBars} from 'react-icons/fa';



const Nav = styled.nav`
   height: 130px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   padding: 1rem 2rem;
   z-index: 100;
   /* position: fixed; */
   width: 100%;
   max-width: 1440px;
   margin-right: auto;
   margin-left: auto;
`;

const NavLink = css`
  color: #000;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer; 
  text-decoration: none;
`;


const MenuBars = styled(FaBars)`
   display: none;

   @media screen and (max-width: 768px) {
        display: block;
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        color: #fff;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
     ${NavLink}
`;

const NavBtn = styled.div`
   display: flex;
   align-items: center;
   margin-right: 24px;

   @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavContain = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    /* max-width: 1072; */
    margin-right: auto;
    margin-left: auto;
`;



const NavSection = styled.div`
    height: 50px;
    color: #fff;
    border: 1px solid rgba(0,0,0,0.08);
    box-sizing: border-box;
    box-shadow: 1px 4px 4px rgba(0,0,0,0.04);
    padding-top: 15px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLink = styled.div`
   font-family: Roboto;
   font-size: 13px;
   font-weight: normal;
   line-height: 15px;
   letter-spacing: 0.05em;
   color: #000;
   flex: none;
   order: 0;
   flex-grow: 0;
   margin: 0 24px;

   @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMen = styled.div`
   display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    max-width: 860px;
    padding-left: 247px;
`;

const Button = styled(Link)`
   background: #FF5C00;
   box-shadow: 1px 4px 8px rgba(239,88,3,0.2);
   white-space: nowrap;
   outline: none;
   border-radius: 4px;
   width: 84px;
   height: 32px;
   cursor: pointer;
   text-decoration: none;
   transition: 0.3s;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #fff;
   font-size: 13px;
   font-weight: 500;

   &:hover {
       transform: translateY(-2px);
   }
`;

const Navbar = ({toggle}) => {

    const [showModal, setShowModal] = useState(false);
    
    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <Nav>
           <NavContain>
                <Logo />
                <MenuBars onClick={toggle}/>
                <NavMenu>
                    {menuData.map((item, index) => (
                        <NavMenuLinks to={item.link} key={index}>
                            {item.title}
                        </NavMenuLinks>
                    ))} 
                    <NavBtn>
                        <Link to='./share'>
                            <Button onClick={openModal} primary='true'>
                                SIGN UP
                            </Button>
                        </Link>
                    </NavBtn>
                </NavMenu>
           </NavContain>
           <NavSection>
               <NavMen>
                    {menuDataTwo.map((item, index) => (
                        <NavMenuLink to={item.link} key={index}>
                            {item.title}
                        </NavMenuLink>
                    ))} 
                </NavMen>
           </NavSection>
        </Nav>
    )
}

export default Navbar

