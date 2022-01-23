import React from 'react';
import {FlatList} from 'react-native';
import CategoryCard from './categoryCard';
import {CATEGORIES} from '../../constants';

const CategoryList = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.name}
      contentContainerStyle={{height: 300}}
      numColumns={2}
      renderItem={({item}) => {
        return <CategoryCard color={item.color} name={item.name} />;
      }}
    />
  );
};

export default CategoryList;
