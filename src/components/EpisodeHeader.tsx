import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';

import Text from './Text';
import {sizes} from 'styles';
import {useNavigation} from '@react-navigation/native';

const DEFAULT_ICON = require('../images/podcast/podcast.png');

export type EpisodeHeaderProps = {
  icon?: string;
  podcast: string;
  createdAt: string;
};

export function EpisodeHeader({podcast, icon, createdAt}: EpisodeHeaderProps) {
  const {navigate} = useNavigation();
  return (
    <Pressable style={styles.header} onPress={() => navigate('podcast')}>
      <Image
        source={icon ? {uri: icon} : DEFAULT_ICON}
        defaultSource={DEFAULT_ICON}
        style={styles.cover}
      />
      <View style={styles.podcastContainer}>
        <Text>{podcast || 'Podcast title'}</Text>
        <Text style={styles.createdAt}>{createdAt}</Text>
      </View>
    </Pressable>
  );
}

export default EpisodeHeader;

const styles = StyleSheet.create({
  cover: {
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  createdAt: {
    color: 'gray',
    fontSize: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: sizes.margin,
  },
  podcastContainer: {
    marginLeft: 7,
  },
});
