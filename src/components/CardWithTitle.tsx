import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {sizes} from 'styles';

import Text from './Text';

export type CardTitleProps = {
  name: string;
  author: string;
  cover: string;
};
const DEFAULT_ICON = require('../images/podcast/podcast2.png');
export function CardWithTitle({author, name, cover}: CardTitleProps) {
  return (
    <View style={styles.card}>
      <Image
        source={cover ? {uri: cover} : DEFAULT_ICON}
        defaultSource={DEFAULT_ICON}
        style={styles.cover}
      />
      <Text style={styles.name}>{name}</Text>
      <Text numberOfLines={1}>{author}</Text>
    </View>
  );
}

const width = 120;
const height = width + width / 3;

const styles = StyleSheet.create({
  card: {
    marginRight: sizes.margin / 2,
    padding: 5,
    width,
    height,
    justifyContent: 'space-between',
  },
  cover: {
    width,
    height: width,
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default CardWithTitle;
