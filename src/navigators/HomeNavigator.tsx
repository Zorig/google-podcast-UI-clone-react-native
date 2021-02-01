import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from 'components/Header';
import HomeScreen from 'screens/HomeScreen';
import PodcastScreen from 'screens/PodcastScreen';
import {Icon} from 'components';
import EpisodeScreen from 'screens/EpisodeScreen';
import {useTheme} from '@react-navigation/native';

import {HomeStackParamList} from './types';

const HomeStack = createStackNavigator<HomeStackParamList>();

const StackOptions = {
  headerTitle: () => null,
  headerBackTitleVisible: false,
  headerRight: () => <Icon icon="more" />,
};

export function HomeStackNavigator() {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitle: () => <Header />,
        cardStyle: {backgroundColor: colors.card},
        headerStyle: {
          shadowColor: 'transparent',
        },
      }}>
      <HomeStack.Screen name="index" component={HomeScreen} />
      <HomeStack.Screen
        name="podcast"
        component={PodcastScreen}
        options={StackOptions}
      />
      <HomeStack.Screen
        name="episode"
        component={EpisodeScreen}
        options={{...StackOptions, headerTitle: 'Episode'}}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;
