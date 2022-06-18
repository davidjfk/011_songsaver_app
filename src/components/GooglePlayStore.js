import { Container } from './styles/Container.styled'
import React, { useEffect } from "react";
// import { StyledFaTimes } from './styles/FaTimes.styled'
import { FcGoogle} from 'react-icons/fc'
import { FaGooglePlay } from 'react-icons/fa'

const GooglePlayStore = () => {
    useEffect(() => {
      window.open("https://play.google.com/store/apps?gl=NL", "_blank");
    }, []);
    
    return (
      <Container>
        <div>
          <FcGoogle/>
          <span>    On Google Play search for 'song app'   </span>
          <FaGooglePlay />
        </div>      
        </Container> 
    )
  };
  
  export default GooglePlayStore;
