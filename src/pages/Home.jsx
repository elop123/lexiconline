import {Header} from '../components/Header'
import { InputContainer } from '../components/InputContainer';
import { Main2 } from '../components/Main2';

import React from 'react';
export const Home = () =>{
    return(
    <>
  <Header />
  <InputContainer title="Enter a word to search for:"/>
  <Main2 />

    </>)
}