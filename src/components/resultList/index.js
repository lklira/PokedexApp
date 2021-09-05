import React, {useCallback, useEffect, useState} from 'react';
import {Text, FlatList} from 'react-native';
import POKEDEX from '../../assets/pokedex.json';
import levenshteinDistance from '../../utils/levenshteinDistance';
import useDebounce from '../../hooks/useDebounce';
import ResultCard from './resultCard';
import typeColors from '../../assets/typeColors.json';

//TO DO: review de algorithm implementation

const ResultList = ({searchValue}) => {
  const [list, setList] = useState([]);

  const handleSearchValueChange = useCallback(() => {
    let results = [];
    POKEDEX.forEach(pokemon => {
      const distance = levenshteinDistance(searchValue, pokemon.name);
      const distanceRatio = distance / searchValue.length < 0.8;
      if (distanceRatio) {
        results.push({
          pokemon,
          distanceRatio,
        });
      }
    });
    results = results
      .sort((a, b) => {
        if (a.distanceRatio < b.distanceRatio) {
          return -1;
        } else if (a.distanceRatio > b.distanceRatio) {
          return 1;
        }

        return 0;
      })
      .map(result => result.pokemon);

    setList(results);
  }, [setList, searchValue]);

  const debounced = useDebounce(handleSearchValueChange, 400);

  useEffect(() => {
    debounced();
  }, [debounced]);

  return (
    <FlatList
      data={list}
      keyExtractor={item => item.name}
      renderItem={({item: pokemon}) => {
        const {color} = typeColors.find(
          ({type}) => pokemon.types[0].name === type,
        );
        return <ResultCard color={color} pokemon={pokemon}></ResultCard>;
      }}
    />
  );
};

export default ResultList;
