import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
import { View, Text} from 'react-native';

const StyledTextInput = styled.TextInput`
  background-color: #e8e8e8;
  border-radius:22px;
  color: #888888;
  font-weight: 700;
  padding-vertical: 8px;
  padding-left: 56px;
`
 
const StyledIconView = styled.View`
  position: absolute;
  left: 16px;
  top: 10px;
  height: 24px;
  width: 24px;
`

export default SearchInput = () => {

  const [searchValue, setSearchValue] = useState("");

  return(
    <View>
      <StyledTextInput value={searchValue} onChangeText={setSearchValue} />
      <StyledIconView>
        <Icon name="search" size={24} color="#888888" />
      </StyledIconView>
    </View>
  );
}

