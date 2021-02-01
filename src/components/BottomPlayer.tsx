import React, {useCallback} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import Sound from 'react-native-sound';
import {sizes, styling} from 'styles';
import Icon from './Icon';

import Text from './Text';

const DEFAULT_ICON = require('../images/podcast/podcast.png');
const song = new Sound('tomorrow.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('error', error);
  }
});

export function BottomPlayer() {
  const play = useCallback(() => {
    song.play();
  }, []);
  return (
    <View style={[styling.row, styling.alignCenter, styles.player]}>
      <Image
        source={DEFAULT_ICON}
        defaultSource={DEFAULT_ICON}
        style={styles.icon}
      />
      <Text style={styles.title}>Sound by BenSound.com</Text>
      <Pressable
        onPress={() => play()}
        style={({pressed}) => [styles.play, pressed && styling.pressed]}>
        <Icon icon="play" />
      </Pressable>
    </View>
  );
}

export default BottomPlayer;

const styles = StyleSheet.create({
  player: {
    paddingVertical: 5,
  },
  play: {
    marginLeft: 'auto',
    marginRight: sizes.margin,
  },
  icon: {
    height: 40,
    width: 40,
    marginHorizontal: 10,
  },
  title: {
    fontWeight: '500',
  },
});
