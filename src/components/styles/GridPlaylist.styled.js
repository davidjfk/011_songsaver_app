import styled from "styled-components";

export const StyledGridPlaylist = styled.div`
  display: grid;
  height: 30%;
  color: white;

  grid-template-areas:
      "intro intro intro intro"
      "navigation navigation navigation navigation"
      "header header header header"
      "songInPlaylist songInPlaylist songInPlaylist songInPlaylist"
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
`;
export const Button2 = styled(Button1)``;
export const Button3 = styled(Button1)``;


export const Headers = styled.main`
  background: #1f2128;
  color: white;
  grid-area: header;
  padding: 0.25rem;
  display: flex;
  max-height: 5rem;
`;
  
export const StyledPlaylistArea = styled.div`
  background: yellow;
  color: black;
  grid-area: songInPlaylist;
  padding: 0.25rem;
`;

export const Row = styled.div`
  display: flex;
`

export const Column = styled.div`
  flex: 1;
`










