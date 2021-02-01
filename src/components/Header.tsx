import React from 'react';
import {Dimensions, Image, Pressable, StyleSheet, View} from 'react-native';

import {useTheme} from '@react-navigation/native';
import Icon from './Icon';
import Text from './Text';
import {sizes, styling} from 'styles';

const DEFAULT_ICON = require('../images/avatar.jpg');

type HeaderProps = {
  text?: string;
};

export function Header({text}: HeaderProps) {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Pressable style={({pressed}) => [pressed && styling.pressed]}>
        <Icon icon="cast" color={colors.text} />
      </Pressable>
      <Text style={styles.header}>{text || 'Google Podcasts'}</Text>
      <Pressable>
        <Image
          source={DEFAULT_ICON}
          defaultSource={DEFAULT_ICON}
          resizeMode="center"
          style={styles.avatar}
        />
      </Pressable>
    </View>
  );
}

export default Header;
const window = Dimensions.get('window');
const styles = StyleSheet.create({
  avatar: {
    borderRadius: 60,
    height: 40,
    width: 40,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: window.width,
    paddingHorizontal: sizes.margin,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
