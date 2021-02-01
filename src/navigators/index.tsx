import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

import ActivityStackNavigator from './ActivityNavigator';
import ExploreStackNavigator from './ExploreNavigator';
import HomeStackNavigator from './HomeNavigator';
import {BottomPlayer, Icon} from 'components';
import {colors} from 'styles';

const Tabs = createBottomTabNavigator();

const tabBarOptions = {
  activeTintColor: 'royalblue',
  inactiveTintColor: colors.secondary,
};

const tabScreenOptions = ({route}) => ({
  tabBarIcon: ({color}) => (
    <Icon color={color} icon={route.name.toLowerCase()} />
  ),
});

function BottomTabBarWithPlayer(props: BottomTabBarProps) {
  return (
    <>
      <BottomPlayer />
      <BottomTabBar {...props} />
    </>
  );
}

export function TabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={tabScreenOptions}
      tabBar={BottomTabBarWithPlayer}
      tabBarOptions={tabBarOptions}>
      <Tabs.Screen name="Home" component={HomeStackNavigator} />
      <Tabs.Screen name="Explore" component={ExploreStackNavigator} />
      <Tabs.Screen name="Activity" component={ActivityStackNavigator} />
    </Tabs.Navigator>
  );
}

export default TabNavigator;
