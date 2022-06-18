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
                <NavLink  to='/'>
                  Songsaver
                </NavLink>
              </Button1>
              <Button2>
                <NavLink  to='/about'>
                  About
                </NavLink>
              </Button2>
              <Button3>
                <NavLink to='/googleplaystore'>
                  Google Play
                </NavLink>
              </Button3>             
          </NavigationArea>
      </Container>
      </>
   )
};

export default Navigation;
