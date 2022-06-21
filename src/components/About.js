import { Container } from './styles/Container.styled'
import {StyledAboutPage } from './styles/About.styled'

const About = () => {

  return (
    
    <Container>
      <StyledAboutPage>
      <h1>Story about myself and the project</h1>
        <p>
          React is fun and I have learned a lot from this exercise. I have used assignment songsaver for a deepdive into React.
        </p>
        <br/>
        <p>
          I have used the following tools:
          <br/>

          <ol>
          <li>router</li>
          <li>redux</li>
          <li>vanilla js</li>
          <li>styled components</li>
          </ol>
        </p>
        <br/>
        <p>
          Before writing any code, I have made a breakdown of:
          <ol>
           <li>all components</li>
           <li>responsibility per component</li>
           <li>visual hierarchy of components</li>
           <li>required minimal state</li>
           <li>in which component each piece of state should reside</li>
           <li>inverse data flow</li>
          </ol>
        </p>
        </StyledAboutPage> 
    </Container> 

  )
}

export default About