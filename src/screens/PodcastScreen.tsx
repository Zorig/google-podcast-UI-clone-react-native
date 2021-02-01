import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Card, Separator, Text} from 'components';
import {sizes, styling} from 'styles';
import IconButton from 'components/Button';
import EpisodeList from 'components/EpisodeList';

function Header() {
  return (
    <>
      <View style={styles.header}>
        <View style={[styling.row, styles.container]}>
          <View style={styling.flex}>
            <Text style={styles.name} numberOfLines={2}>
              The Stack Overflow Podcast
            </Text>
            <Text numberOfLines={2}>Author</Text>
          </View>
          <Card cover={''} size={120} />
        </View>
        <View style={[styling.row, styling.alignCenter]}>
          <IconButton
            text="Subscribe"
            icon="add"
            onPress={() => null}
            style={styles.subscribe}
          />
          <IconButton icon="globe" onPress={() => null} />
          <IconButton icon="share" onPress={() => null} />
        </View>
        <Text style={styles.description} numberOfLines={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis commodi
          qui similique, nesciunt harum voluptatibus corrupti numquam suscipit,
          esse exercitationem, ullam ipsum debitis expedita nostrum. Omnis at
          cumque voluptates porro!
        </Text>
      </View>
      <Separator />
      <View style={[styles.subHeader, styling.row, styling.alignCenter]}>
        <Text style={styles.total}>182 Episodes</Text>

        <IconButton
          icon="filter"
          style={styles.filter}
          onPress={() => console.log('filter')}
        />
      </View>
    </>
  );
}

const data = Array.from({length: 10}, (x, i) => ({
  id: `${i}`,
  title: `01/2${i}/21 Mental`,
  podcast: 'Example podcast',
  duration: `1${i}min`,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam expedita consectetur reiciendis incidunt similique numquam velit tempora a veniam libero fugit odit ducimus soluta, voluptatibus maiores, debitis eos obcaecati vel?',
  createdAt: `${8 + i} hours ago`,
}));

export function PodcastScreen() {
  return <EpisodeList ListHeaderComponent={() => <Header />} data={data} />;
}

export default PodcastScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  cover: {},
  description: {
    marginTop: sizes.margin,
  },
  filter: {
    marginLeft: 'auto',
  },
  header: {
    marginHorizontal: sizes.margin,
  },
  name: {
    fontSize: 20,
    marginBottom: 10,
  },
  subscribe: {
    marginLeft: 0,
  },
  subHeader: {
    marginTop: sizes.margin,
    marginBottom: sizes.margin * 2,
    marginHorizontal: sizes.margin,
  },
  total: {
    fontSize: 20,
  },
});
