import React from 'react';

import {
  SafeAreaView,
  Text,
} from 'react-native';

import styled from 'styled-components/native';
import SearchInput from './components/searchInput';



const StyledText = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: #444444;
  margin-bottom: 32px;
`
const StyledSafeAreaView = styled.SafeAreaView`
  padding: 24px;
  
`

const App = () => {

  return (
    <StyledSafeAreaView>
      <StyledText>
        What Pokémon are you looking for?
      </StyledText>
      <SearchInput/>

    </StyledSafeAreaView>
  );
};



export default App;
