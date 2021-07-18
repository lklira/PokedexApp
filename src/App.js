import React, { useState } from 'react';

import {
  SafeAreaView,
  Text, FlatList
} from 'react-native';

import { PokeBall } from './components';
import styled from 'styled-components/native';
import {SearchInput, CategoryList} from './components';




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

  const [searchValue, setSearchValue] = useState("");

  return (
    <StyledSafeAreaView>
      <StyledText>
        What Pokémon are you looking for?
      </StyledText>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}/>
      {searchValue ? null : <CategoryList/>}
      <PokeBall size={260} bodyColor="#ccc" offset={125}/>
    </StyledSafeAreaView>
  );
};



export default App;
