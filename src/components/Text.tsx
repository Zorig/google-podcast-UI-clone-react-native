import {useTheme} from '@react-navigation/native';
import React, {ReactChild} from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';

interface TextProps extends RNTextProps {
  children: string | ReactChild;
}

export function Text({style, ...props}: TextProps) {
  const {colors} = useTheme();
  return <RNText style={[{color: colors.text}, style]} {...props} />;
}
export default Text;
