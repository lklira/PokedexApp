import React from 'react';

import {
  SafeAreaView,
  Text,
} from 'react-native';

import styled from 'styled-components/native';
import {SearchInput, CategoryCard} from './components';
import { CATEGORIES } from './constants';



const StyledText = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: #444444;
  margin-bottom: 32px;
`
const StyledSafeAreaView = styled.SafeAreaView`
  padding: 24px;
  
`
const CategoriesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #aaa
  height: 70%;
`

const App = () => {

  return (
    <StyledSafeAreaView>
      <StyledText>
        What Pokémon are you looking for?
      </StyledText>
      <SearchInput/>
      <CategoriesContainer>
        {CATEGORIES.map(({name, color}) => <CategoryCard color={color} name={name}/> )}
      </CategoriesContainer>
    </StyledSafeAreaView>
  );
};



export default App;
