import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Text from './Text';
import {sizes, styling} from 'styles';
import {ButtonGroup} from './Button';
import EpisodeHeader, {EpisodeHeaderProps} from './EpisodeHeader';

export interface EpisodeProps extends EpisodeHeaderProps {
  id: string;
  title: string;
  duration: string;
  description: string;
}

export function Episode({
  title,
  podcast,
  icon,
  duration,
  description,
  createdAt,
}: EpisodeProps) {
  const {navigate} = useNavigation();

  return (
    <Pressable style={styles.container} onPress={() => navigate('episode')}>
      <EpisodeHeader icon={icon} createdAt={createdAt} podcast={podcast} />
      <Text style={[styling.textHeader]}>{title || 'Episode title'}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
      <ButtonGroup duration={duration} />
    </Pressable>
  );
}
export default Episode;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: sizes.margin,
  },
  cover: {
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  description: {
    color: 'gray',
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
