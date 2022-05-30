import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  height: 30%;
  color: white;

  grid-template-areas:
      "intro intro intro intro"
      "a a a a"
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

  export const NavigationArea = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: a;
  justify-content: center;
  align-items: center;
  `;
  export const Navigation1 = styled.nav`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
  `;
  export const Navigation2 = styled(Navigation1)``;
  export const Navigation3 = styled(Navigation1)``;


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

  // export const Footer = styled.footer`
  // background: #ff9637;
  // grid-area: footer;
  // padding: 0.25rem;
//  `










