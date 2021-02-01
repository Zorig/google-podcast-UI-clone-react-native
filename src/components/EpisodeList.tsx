import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  FlatListProps,
  StyleSheet,
} from 'react-native';
import Episode, {EpisodeProps} from './Episode';
import Separator from './Separator';

interface EpisodeListProps extends FlatListProps<any> {
  data: EpisodeProps[];
}

function renderItem({item}: ListRenderItemInfo<EpisodeProps>) {
  return <Episode {...item} />;
}

export function EpisodeList({data, ...props}: EpisodeListProps) {
  return (
    <FlatList
      {...props}
      data={data}
      contentContainerStyle={styles.contentContainer}
      initialNumToRender={10}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <Separator />}
      keyExtractor={(item: EpisodeProps) => item.id}
    />
  );
}

export default EpisodeList;

const styles = StyleSheet.create({
  contentContainer: {},
});
