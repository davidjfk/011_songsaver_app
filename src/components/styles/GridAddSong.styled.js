import styled from "styled-components";

export const StyledGridAddSong = styled.div`
  display: grid;
  height: 30%;
  color: white;

  grid-template-areas:
      "intro intro intro intro"
      "inputfield inputfield inputfield inputfield"
      ;
  text-align: center;
  grid-gap: 0.25rem;

  `;

  export const Intro = styled.div`
  background: #3a3a55;
  grid-area: intro;
  padding: 0.25rem;
  max-height: 5rem;
  `;

  export const NavigationArea = styled.div`
  grid-area: navigation;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem;

  `;
  export const ButtonAddSong = styled.button`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 20%;
  height: 100%;
  `;
  // export const Button2 = styled(ButtonAddSong)``;
  // export const Button3 = styled(ButtonAddSong)``;


  export const Form = styled.form.attrs({
    className:'add-form',
    // onSubmit:{onSubmit}
  })`
  grid-area: inputfield;
  display: flex;
  background: #1f2128;
  color: white;
  padding: 1rem 0.25rem;
  // max-height: 5rem;
  `;

  export const Row = styled.div`
  display: flex;
  `

  export const Column = styled.div`
    flex: 1;
  `

