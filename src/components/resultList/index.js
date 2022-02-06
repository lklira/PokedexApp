import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import levenshteinDistance from '../../utils/levenshteinDistance';
import useDebounce from '../../hooks/useDebounce';
import ResultCard from './resultCard';
import typeColors from '../../assets/typeColors.json';
import PokemonService from '../../services/PokemonService';
import ResultCardSkeleton from './resultCardSkeleton';

//TO DO: review the algorithm implementation(draws between same distanceRatio(ex:typing "decidu" in search input))

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

const ResultList = ({searchValue}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const request = async () => {
      try {
        const result = await PokemonService.list();
        setPokemons(result);
      } catch (error) {
        console.log(error);
      }
    };

    request();
  }, []);

  useEffect(() => {
    setIsLoading(true);
  }, [searchValue]);

  const handleSearchValueChange = useCallback(async () => {
    let results = [];
    const trimmedSearchValue = searchValue.trim();

    pokemons.forEach(pokemon => {
      const distance = levenshteinDistance(trimmedSearchValue, pokemon.name);
      const distanceRatio = distance / trimmedSearchValue.length;

      const pokemonStartsWith = pokemon.name.startsWith(trimmedSearchValue);
      if (pokemonStartsWith || distanceRatio < 0.8) {
        results.push({
          pokemon,
          distanceRatio,
          startsWith: pokemonStartsWith,
        });
      }
    });

    results = results
      .sort((a, b) => {
        if (a.startsWith && !b.startsWith) {
          return -1;
        } else if (!a.startsWith && b.startsWith) {
          return 1;
        }

        if (a.distanceRatio < b.distanceRatio) {
          return -1;
        } else if (a.distanceRatio > b.distanceRatio) {
          return 1;
        }

        return 0;
      })
      .slice(0, 20)
      .map(result => result.pokemon);

    setList(results);
    setIsLoading(false);
  }, [pokemons, setList, setIsLoading, searchValue]);

  const debounced = useDebounce(handleSearchValueChange, 500);

  useEffect(() => {
    debounced();
  }, [debounced]);

  if (isLoading) {
    return (
      <FlatList
        data={[...Array(10).keys()]}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        keyExtractor={item => item}
        renderItem={() => <ResultCardSkeleton />}
      />
    );
  }

  return (
    <FlatList
      data={list}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      keyExtractor={item => item.id}
      renderItem={({item: pokemon}) => {
        const {color} = typeColors.find(
          ({type}) => pokemon.types[0].name === type,
        );
        return <ResultCard color={color} pokemon={pokemon} />;
      }}
    />
  );
};

export default ResultList;
