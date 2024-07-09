import React from 'react'
import styled from 'styled-components';
import Section from './Section';


function Home() {
  return (
    
      <Container>
         <Section 
         title="Model S"
         description="Order Online fot Touchless Deliveri"
         lefttext="Custom order"
         righttext="Exiting inventory"
         backgroundImage="/images/model-s.jpg"
         />
         <Section 
         title="Model Y"
         description="Order Online fot Touchless Deliveri"
         lefttext="Custom order"
         righttext="Exiting inventory"
         backgroundImage="/images/model-y.jpg"
         
         />
         <Section
          title="Model 3"
          description="Order Online fot Touchless Deliveri"
          lefttext="Custom order"
          righttext="Exiting inventory"
          backgroundImage="/images/model-3.jpg"
         
         />
         <Section 
          title="Model X"
          description="Order Online fot Touchless Deliveri"
          lefttext="Custom order"
          righttext="Exiting inventory"
          backgroundImage="/images/model-x.jpg"
         
         />
      </Container>
    
  );
}

export default Home



const Container = styled.div`
  height: 100vh;
  
`;