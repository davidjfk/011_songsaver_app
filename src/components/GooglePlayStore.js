import { Container } from './styles/Container.styled';
import React, { useEffect } from "react";
import { FcGoogle} from 'react-icons/fc';
import { FaGooglePlay } from 'react-icons/fa';
import { StyledGooglePlayStore } from './styles/GooglePlayStore.styled';

const GooglePlayStore = () => {
    useEffect(() => {
      window.open("https://play.google.com/store/apps?gl=NL", "_blank");
    }, []);
    
    return (
      <Container>
        <StyledGooglePlayStore>
          <FcGoogle/>
          <span>    On Google Play search for 'song app'   </span>
          <FaGooglePlay />
        </StyledGooglePlayStore>      
        </Container> 
    )
  };
  
  export default GooglePlayStore;
