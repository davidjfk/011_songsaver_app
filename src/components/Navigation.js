import { NavLink } from 'react-router-dom';
import {NavigationArea, Section1, Section2, Section3} from './styles/GridNavigation.styled'
import {Container} from './styles/Container.styled'
import {StyledNavLink} from './styles/NavLink.styled'

const Navigation = () => {
  return (
      <>
      <Container> 
          <NavigationArea>
              <Section1>  
              <StyledNavLink>       
                  <NavLink  to='/'>
                    Songsaver
                  </NavLink>
                </StyledNavLink>
              </Section1>
              <Section2>
                <StyledNavLink>  
                  <NavLink  to='/about'>
                    About
                  </NavLink>
                </StyledNavLink>  
              </Section2>
              <Section3>
                <StyledNavLink>  
                  <NavLink to='/googleplaystore'>
                    Google Play
                  </NavLink>
                </StyledNavLink>  
              </Section3>             
          </NavigationArea>
      </Container>
      </>
   )
};

export default Navigation;
