import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import {sizes} from 'styles';
import Card, {CardProps} from './Card';

type CardListProps = {
  data: CardProps[];
};

export function CardList({data}: CardListProps) {
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.contentContainer}
      horizontal={true}
      initialNumToRender={10}
      renderItem={({item}: ListRenderItemInfo<CardProps>) => <Card {...item} />}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
    />
  );
}

export default CardList;

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: sizes.margin / 2,
    paddingRight: 10,
  },
});
