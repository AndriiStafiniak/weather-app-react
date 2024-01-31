import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 5px #ddd;
`;
export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   background-color: ${({ theme }) => theme.colors.white};
   border-radius: 5px;
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
   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
      max-width: 200px;
      padding: 10px;
   }
`;

export const Button = styled.button`
   width: 400px;
   padding: 20px;
   font-size: 16px;
   background-color: ${({ theme }) => theme.colors.teal};
   cursor: pointer;
   border: none;
   transition: 0.3s;
   color:${({ theme }) => theme.colors.white};
   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
      max-width: 200px;
      padding: 10px;
      font-size: 12px;
   }
   &:hover{
   scale: 1.1;
  
   }
`;

export const Paragraph = styled.p`
   font-size: 18px;
   color: black;
   margin-left: 30px;
   color: ${({ theme }) => theme.colors.teal};
`;
export const Title = styled.h2`
    font-size: 26px;
    margin-left: 12px;
    font-weight: 600px;
    color: ${({ theme }) => theme.colors.teal};
`;
export const StyleSpan = styled.span`
   color: ${({ theme }) => theme.colors.crimson};
`;