import { Container } from './styles/Container.styled'

const About = () => {

  return (
    
    <Container>
      <h1>Story about myself and the project</h1>
        <p>
          React is fun and I have learned a lot from this exercise. I have used assignment songsaver for a deepdive into React.
        </p>

        <p>
          I have used the following tools:
          <ol>
          <li>router</li>
          <li>redux</li>
          <li>vanilla js</li>
          <li>styled components</li>
          </ol>
        </p>

        <p>
          Before writing any code, I have made a breakdown of:
          <ul>
           <li>all components</li>
           <li>responsibility per component</li>
           <li>visual hierarchy of components</li>
           <li>required minimal state</li>
           <li>in which component each piece of state should reside</li>
           <li>inverse data flow</li>
          </ul>
        </p>
         
    </Container> 

  )
}

export default About