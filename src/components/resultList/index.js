import React, {useEffect, useState} from 'react';
import {Text, FlatList} from 'react-native';
import POKEDEX from '../../assets/pokedex.json';
import levenshteinDistance from '../../utils/levenshteinDistance';

// TODO: order list by similarity

const ResultList = ({searchValue}) => {
  const [list, setList] = useState([]);

  useEffect(() =>{
    const results = [];
    POKEDEX.forEach((pokemon) =>{
      const distance = levenshteinDistance(searchValue, pokemon);
      if(distance/pokemon.length < 0.6){
        results.push(pokemon);
      }
    });
    setList(results);
  }, [searchValue]);

  return (
    <FlatList
      data={list}
      keyExtractor={item => item}
      contentContainerStyle={{height:300}}
      renderItem={({ item }) => {
        return (
          <Text>{item}</Text>
        );
      }}
    />
  );
}

export default ResultList;

