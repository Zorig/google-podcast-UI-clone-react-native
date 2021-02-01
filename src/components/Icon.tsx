import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

export const ICONS = {
  add: '\ue90c',
  'add-to-queue': '\ue909',
  activity: '\ue908',
  'arrow-down': '\ue90a',
  cast: '\ue907',
  'download-circle': '\ue903',
  explore: '\ue904',
  filter: '\ue90e',
  globe: '\ue90b',
  more: '\ue90f',
  home: '\ue902',
  pause: '\ue905',
  'play-circle': '\ue906',
  play: '\ue901',
  share: '\ue90d',
};

export type IconProps = {
  icon: keyof typeof ICONS;
  style?: StyleProp<TextStyle>;
  color?: string;
};

export const Icon = React.memo(({icon, color, style, ...props}: IconProps) => (
  <Text style={[styles.style, {color}, style && style]} {...props}>
    {ICONS[icon] || icon}
  </Text>
));

export default Icon;

const styles = StyleSheet.create({
  style: {
    fontFamily: 'icomoon',
    fontSize: 26,
    textAlign: 'center',
  },
});
