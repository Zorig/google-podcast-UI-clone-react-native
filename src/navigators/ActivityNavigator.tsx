import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ActivityScreen from 'screens/ActivityScreen';
import Header from 'components/Header';

const ActivityStack = createStackNavigator();

export function ActivityStackNavigator() {
  return (
    <ActivityStack.Navigator
      screenOptions={{
        headerTitle: () => <Header />,
      }}>
      <ActivityStack.Screen name="Index" component={ActivityScreen} />
    </ActivityStack.Navigator>
  );
}

export default ActivityStackNavigator;
