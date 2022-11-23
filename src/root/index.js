import  React, { Component } from 'react';
import Hooks from '../components/hooks';
import { Container } from './style';

export default class Root extends Component {
  render() {
    return (
      <>
        <h1>Comparision</h1>
        <Container>
          {/* <Classes /> */}
          <Hooks/>
       
        </Container>
      </>
    );  
  } 
}   