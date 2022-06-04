import styled from "styled-components";

export const StyledGridNavigation = styled.div`
  display: grid;
  height: 30%;
  color: white;

  grid-template-areas:
      "navigation navigation navigation navigation"
      ;
  text-align: center;
  grid-gap: 0.25rem;

`;

export const NavigationArea = styled.nav`
  grid-area: navigation;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
`;
  
export const Button1 = styled.button`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
  font-size: 1.6rem;
`;
export const Button2 = styled(Button1)``;
export const Button3 = styled(Button1)``;


export const Row = styled.div`
  display: flex;
`

export const Column = styled.div`
  flex: 1;
`










