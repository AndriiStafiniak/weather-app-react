import styled from "styled-components";



export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   height: 100vh;
   justify-content: center;
   max-width: 1000px;
   background-color: ${({ theme }) => theme.colors.white};
   margin: 0 auto;

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
   padding: 20px;
   color: green;
   margin: 20px;
`;

export const Input = styled.input`
   width: 400px;
   padding: 20px;
`;

export const Button = styled.button`
   width: 400px;
   padding: 20px;
   background-color: ${({ theme }) => theme.colors.teal};
`;

export const Paragraph = styled.p`
   font-size: 14px;
   color: black;
   margin-left: 30px;
`;
