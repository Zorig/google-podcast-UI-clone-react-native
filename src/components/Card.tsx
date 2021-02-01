import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  ImageStyle,
  Pressable,
} from 'react-native';

export type CardProps = {
  id: string;
  cover: string;
  style?: StyleProp<ImageStyle>;
  size?: 120 | 80;
};

const DEFAULT_ICON = require('../images/podcast/podcast2.png');

export function Card({cover, style, size = 80}: CardProps) {
  const {navigate} = useNavigation();
  return (
    <Pressable onPress={() => navigate('podcast')}>
      <Image
        source={cover ? {uri: cover} : DEFAULT_ICON}
        style={[style, styles.cover, {height: size, width: size}]}
        defaultSource={DEFAULT_ICON}
      />
    </Pressable>
  );
}

export default Card;

const styles = StyleSheet.create({
  cover: {
    borderRadius: 10,
    marginLeft: 10,
  },
});
