import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {useTheme} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Icon, Text} from 'components';
import {sizes, styling} from 'styles';
import EpisodeList from 'components/EpisodeList';
import {StackScreenProps} from '@react-navigation/stack';
import {ExploreStackParamList} from 'navigators/types';

const TopTab = createMaterialTopTabNavigator();

const data = Array.from({length: 10}, (x, i) => ({
  id: `${i}`,
  title: `01/2${i}/21 Mental`,
  podcast: 'Example podcast',
  duration: `1${i}min`,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam expedita consectetur reiciendis incidunt similique numquam velit tempora a veniam libero fugit odit ducimus soluta, voluptatibus maiores, debitis eos obcaecati vel?',
  createdAt: `${8 + i} hours ago`,
}));

function ListExploreData() {
  return <EpisodeList data={data} />;
}

function TopTabs() {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        indicatorStyle: {
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
          marginHorizontal: 10,
          height: 4,
        },
        style: {
          borderBottomColor: 'gray',
          borderBottomWidth: 0.5,
          paddingHorizontal: 10,
        },
        scrollEnabled: true,
        tabStyle: {
          width: 'auto',
          height: 'auto',
        },
        labelStyle: {
          margin: 0,
        },
      }}>
      <TopTab.Screen
        name="foryou"
        component={ListExploreData}
        options={{tabBarLabel: 'For you'}}
      />
      <TopTab.Screen
        name="news"
        component={ListExploreData}
        options={{tabBarLabel: 'News'}}
      />
      <TopTab.Screen
        name="culture"
        component={ListExploreData}
        options={{tabBarLabel: 'Culture'}}
      />
      <TopTab.Screen
        name="education"
        component={ListExploreData}
        options={{tabBarLabel: 'Education'}}
      />
      <TopTab.Screen
        name="business"
        component={ListExploreData}
        options={{tabBarLabel: 'Business'}}
      />
    </TopTab.Navigator>
  );
}

export default function ExploreScreen({
  navigation,
}: StackScreenProps<ExploreStackParamList, 'index'>) {
  const {colors} = useTheme();

  return (
    <>
      <View
        style={[
          styling.row,
          styling.alignCenter,
          styles.container,
          {borderColor: colors.border},
        ]}>
        <Icon icon="explore" color={colors.border} style={styles.icon} />
        <Pressable
          onPress={() => navigation.navigate('search')}
          style={[styling.flex, styles.input]}>
          <Text>Search</Text>
        </Pressable>
      </View>
      <TopTabs />
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: sizes.margin / 2,
    marginRight: sizes.margin,
  },
  input: {
    height: 40,
    justifyContent: 'center',
  },
  container: {
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    backgroundColor: 'white',
    marginTop: sizes.margin,
    marginHorizontal: 10,
  },
});
