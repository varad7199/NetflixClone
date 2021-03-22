import styled from 'styled-components/macro';

export const Background=styled.div`
   display: flex;
   background: url(${({src})=> src ?`../images/misc/${src}.jpg` :'../images/misc/home-bg.jpg'}) top left/ cover no-repeat;
`;

export const Logo=styled.img`
  height: auto;
  width: 176px;
  padding: 1rem;
`;

export const Button=styled.button`
   background-color: red;
   outline: none;
   border:none;
   color: white;
   width: 6rem;
   height: 2rem;
   font-size: 16px;
   margin-left: 1rem;
`;

export const Frame=styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
`;