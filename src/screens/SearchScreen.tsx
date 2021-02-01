import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import {ExploreStackParamList} from 'navigators/types';

import {sizes} from 'styles';

export function SearchScreen({
  navigation,
}: StackScreenProps<ExploreStackParamList, 'search'>) {
  const [query, setQuery] = useState('');
  useEffect(() => {
    navigation.setOptions({
      headerTitleContainerStyle: {
        flex: 1,
      },
      headerTitle: () => (
        <TextInput
          placeholder="Search for podcasts"
          autoFocus={true}
          style={styles.input}
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
      ),
    });
  });
  return <View />;
}

export default SearchScreen;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 18,
    marginLeft: sizes.margin,
  },
});
