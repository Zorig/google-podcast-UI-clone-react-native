import React from 'react';
import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {sizes, styling} from 'styles';
import Icon, {ICONS} from './Icon';
import Text from './Text';

type IconButtonProps = {
  icon: keyof typeof ICONS;
  onPress: () => void;
  text?: string;
  style?: StyleProp<ViewStyle>;
};

export function IconButton({icon, onPress, text, style}: IconButtonProps) {
  const {colors} = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styling.row,
        styling.alignCenter,
        text ? {borderColor: colors.border, ...styles.bordered} : null,
        pressed && styling.pressed,
        styles.button,
        style,
      ]}>
      <Icon icon={icon} color={colors.primary} />
      {text && <Text style={styles.text}>{text}</Text>}
    </Pressable>
  );
}

export default IconButton;

export function ButtonGroup({
  duration,
  children,
}: {
  duration: string;
  children?: React.ReactChild;
}) {
  return (
    <View style={[styling.row, styling.alignCenter, styles.buttons]}>
      <IconButton
        text={duration}
        icon="play-circle"
        onPress={() => null}
        style={styles.play}
      />
      <IconButton icon="add-to-queue" onPress={() => console.log('add ')} />
      <IconButton
        icon="download-circle"
        onPress={() => console.log('download')}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: sizes.margin,
  },
  button: {
    marginHorizontal: 5,
  },
  bordered: {
    borderWidth: 0.5,
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  text: {
    marginHorizontal: sizes.margin / 4,
    color: 'gray',
  },
  play: {
    marginLeft: 0,
  },
});
