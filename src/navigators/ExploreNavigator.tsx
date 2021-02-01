import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {useTheme} from '@react-navigation/native';

import ExploreScreen from 'screens/ExploreScreen';
import Header from 'components/Header';
import SearchScreen from 'screens/SearchScreen';
import {ExploreStackParamList} from './types';

const ExploreStack = createStackNavigator<ExploreStackParamList>();

export function ExploreStackNavigator() {
  const {colors} = useTheme();
  return (
    <ExploreStack.Navigator
      screenOptions={{
        headerTitle: () => <Header text="Explore" />,
        headerBackTitleVisible: false,
        headerStyle: {
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: colors.card,
        },
      }}>
      <ExploreStack.Screen name="index" component={ExploreScreen} />
      <ExploreStack.Screen name="search" component={SearchScreen} />
    </ExploreStack.Navigator>
  );
}

export default ExploreStackNavigator;
