import React, { useState, useEffect } from 'react';
import { PokeBall } from './components';
import styled from 'styled-components/native';
import {SearchInput, CategoryList} from './components';
import PokemonService from "./services/PokemonService";


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
