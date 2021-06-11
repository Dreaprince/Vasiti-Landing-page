import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
   background: ${({sec}) => (sec ? '#222' : '#fff')};
   border: 1px solid rgba(255,255, 255,0.4);
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
   color: ${({primary}) => (primary ? '#fff' : '#ff5c00')};
   font-size: 13px;

   &:hover {
       transform: translateY(-2px);
   }
`;

