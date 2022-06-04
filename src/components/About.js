import React from 'react'
import { Container } from './styles/Container.styled'
import ReduxExperiment from './ReduxExperiment'

const About = () => {


  return (
    
    <Container>
      <h1>story about myself and the project</h1>
        <p>
          React is fun and offers (ample) opportunity to practice (and improve  :)  my vanilla js skills on the fly.
        </p>

        <p>
          My aim is to learn how to make use of the following npm libraries in this project:
          <ol>
          <li>styled components</li>
          <li>router</li>
          <li>redux</li>
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
          I have done some CSS in an early stage, because that feels like a more pleasant way to work with styled components.
        </p>
         
        <ReduxExperiment />
    </Container> 

  )
}

export default About