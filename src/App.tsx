import React from 'react'
import CatFact from './pages/CatFact';
import styled from 'styled-components';

const App = () => {
 return (
  <Wrapper>
   <CatFact />
  </Wrapper>
 )
}

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  height: 100vh;
  width: 100wh;
`;


export default App