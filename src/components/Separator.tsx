import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {sizes} from 'styles';

export function Separator() {
  const {colors} = useTheme();
  return <View style={[styles.style, {borderColor: colors.border}]} />;
}

const styles = StyleSheet.create({
  style: {
    borderWidth: 0.7,
    marginVertical: sizes.margin,
  },
});

export default Separator;
