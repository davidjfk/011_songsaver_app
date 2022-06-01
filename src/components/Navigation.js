import { NavLink } from 'react-router-dom';
import {StyledNavigation}  from './styles/Navigation.styled';
import {NavigationArea, Button1, Button2, Button3} from './styles/GridNavigation.styled'
import {Container} from './styles/Container.styled'

const Navigation = () => {
  return (
      <>
      <Container> 
          <NavigationArea>
              <Button1>          
                <NavLink  to='/songsaver'>
                  Songsaver
                </NavLink>
              </Button1>
              <Button2>
                <NavLink  to='/about'>
                  About
                </NavLink>
              </Button2>
              <Button3>
                <NavLink to='/about'>
                  Google Play Store, 2do later
                </NavLink>
              </Button3>             
          </NavigationArea>
      </Container>
      </>
   )





  //   <StyledNavigation>
  //         <NavLink  to='/songsaver'>
  //           Songsaver
  //         </NavLink>

  //         <NavLink  to='/about'>
  //           About
  //         </NavLink>
  //   </StyledNavigation>
  // );
};

export default Navigation;
