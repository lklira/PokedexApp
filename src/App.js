import React from 'react';

import {
  SafeAreaView,
  Text, FlatList
} from 'react-native';

import { PokeBall } from './components';
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
  flex: 1;
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
      <FlatList
          data={CATEGORIES}
          keyExtractor={item => item.name}
          contentContainerStyle={{height:300}}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <CategoryCard color={item.color} name={item.name}/>
            );
          }}
      />
      <PokeBall size={200} bodyColor="#ccc"/>
    </StyledSafeAreaView>
  );
};



export default App;
